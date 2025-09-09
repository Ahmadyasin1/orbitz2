// WhatsApp Business API Integration Service
// This service handles WhatsApp business integration

export interface WhatsAppMessage {
  id: string
  from: string
  text: string
  timestamp: Date
  type: 'incoming' | 'outgoing'
}

export interface WhatsAppContact {
  phone: string
  name?: string
  email?: string
}

class WhatsAppService {
  private readonly businessNumber: string
  private readonly accessToken: string
  private readonly webhookVerifyToken: string

  constructor() {
    // Replace with your actual WhatsApp Business API credentials
    this.businessNumber = process.env.WHATSAPP_BUSINESS_NUMBER || '+1234567890'
    this.accessToken = process.env.WHATSAPP_ACCESS_TOKEN || 'your_access_token'
    this.webhookVerifyToken = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN || 'your_verify_token'
  }

  // Send a message to WhatsApp
  async sendMessage(to: string, message: string): Promise<boolean> {
    try {
      const response = await fetch(`https://graph.facebook.com/v17.0/${this.businessNumber}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: to,
          text: { body: message }
        })
      })

      const result = await response.json()
      return response.ok
    } catch (error) {
      console.error('Error sending WhatsApp message:', error)
      return false
    }
  }

  // Send a template message
  async sendTemplateMessage(to: string, templateName: string, parameters: string[]): Promise<boolean> {
    try {
      const response = await fetch(`https://graph.facebook.com/v17.0/${this.businessNumber}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: to,
          type: 'template',
          template: {
            name: templateName,
            language: { code: 'en_US' },
            components: [
              {
                type: 'body',
                parameters: parameters.map(param => ({ type: 'text', text: param }))
              }
            ]
          }
        })
      })

      return response.ok
    } catch (error) {
      console.error('Error sending template message:', error)
      return false
    }
  }

  // Handle incoming webhook messages
  async handleWebhook(body: any): Promise<WhatsAppMessage[]> {
    const messages: WhatsAppMessage[] = []

    try {
      if (body.object === 'whatsapp_business_account') {
        body.entry?.forEach((entry: any) => {
          entry.changes?.forEach((change: any) => {
            if (change.field === 'messages') {
              change.value.messages?.forEach((message: any) => {
                messages.push({
                  id: message.id,
                  from: message.from,
                  text: message.text?.body || '',
                  timestamp: new Date(parseInt(message.timestamp) * 1000),
                  type: 'incoming'
                })
              })
            }
          })
        })
      }
    } catch (error) {
      console.error('Error processing webhook:', error)
    }

    return messages
  }

  // Verify webhook
  verifyWebhook(token: string, challenge: string): string | null {
    if (token === this.webhookVerifyToken) {
      return challenge
    }
    return null
  }

  // Format phone number for WhatsApp
  formatPhoneNumber(phone: string): string {
    return phone.replace(/[^0-9]/g, '')
  }

  // Create WhatsApp chat URL
  createChatUrl(phone: string, message?: string): string {
    const formattedPhone = this.formatPhoneNumber(phone)
    const encodedMessage = message ? encodeURIComponent(message) : ''
    return `https://wa.me/${formattedPhone}${message ? `?text=${encodedMessage}` : ''}`
  }

  // Get business profile
  async getBusinessProfile(): Promise<any> {
    try {
      const response = await fetch(`https://graph.facebook.com/v17.0/${this.businessNumber}`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
        }
      })

      return await response.json()
    } catch (error) {
      console.error('Error getting business profile:', error)
      return null
    }
  }
}

// Export singleton instance
export const whatsappService = new WhatsAppService()

// Utility functions for client-side usage
export const whatsappUtils = {
  createChatUrl: (phone: string, message?: string) => {
    const formattedPhone = phone.replace(/[^0-9]/g, '')
    const encodedMessage = message ? encodeURIComponent(message) : ''
    return `https://wa.me/${formattedPhone}${message ? `?text=${encodedMessage}` : ''}`
  },

  formatPhoneNumber: (phone: string) => {
    return phone.replace(/[^0-9]/g, '')
  },

  isValidWhatsAppNumber: (phone: string) => {
    const formatted = phone.replace(/[^0-9]/g, '')
    return formatted.length >= 10 && formatted.length <= 15
  }
}
