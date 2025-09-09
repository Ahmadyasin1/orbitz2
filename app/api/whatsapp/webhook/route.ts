import { NextRequest, NextResponse } from 'next/server'
import { whatsappService } from '@/lib/whatsapp-service'

// Handle WhatsApp webhook verification and incoming messages
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  // Verify webhook
  if (mode === 'subscribe') {
    const verifiedChallenge = whatsappService.verifyWebhook(token || '', challenge || '')
    if (verifiedChallenge) {
      return new NextResponse(verifiedChallenge, { status: 200 })
    } else {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  return new NextResponse('Method not allowed', { status: 405 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Process incoming messages
    const messages = await whatsappService.handleWebhook(body)
    
    // Here you can add logic to:
    // 1. Store messages in your database
    // 2. Send notifications to your team
    // 3. Trigger automated responses
    // 4. Forward messages to your CRM
    
    for (const message of messages) {
      console.log('Received WhatsApp message:', {
        from: message.from,
        text: message.text,
        timestamp: message.timestamp
      })
      
      // You can add your business logic here
      // For example, send a notification to your team
      await notifyTeam(message)
    }

    return NextResponse.json({ status: 'success', received: messages.length })
  } catch (error) {
    console.error('Error processing WhatsApp webhook:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Function to notify your team about new messages
async function notifyTeam(message: any) {
  // You can implement this to:
  // 1. Send email notifications
  // 2. Send Slack notifications
  // 3. Store in database
  // 4. Send SMS alerts
  
  console.log(`New customer message from ${message.from}: ${message.text}`)
  
  // Example: Send a notification message back to acknowledge receipt
  // await whatsappService.sendMessage(
  //   message.from,
  //   "Thank you for your message! Our team will respond shortly."
  // )
}
