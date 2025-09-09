import { NextRequest, NextResponse } from 'next/server'
import { whatsappService } from '@/lib/whatsapp-service'

export async function POST(request: NextRequest) {
  try {
    const { to, message, type = 'text' } = await request.json()

    if (!to || !message) {
      return NextResponse.json(
        { error: 'Phone number and message are required' },
        { status: 400 }
      )
    }

    let success = false

    if (type === 'text') {
      success = await whatsappService.sendMessage(to, message)
    }

    if (success) {
      return NextResponse.json({ 
        status: 'success', 
        message: 'Message sent successfully' 
      })
    } else {
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to get business profile
export async function GET(request: NextRequest) {
  try {
    const profile = await whatsappService.getBusinessProfile()
    
    if (profile) {
      return NextResponse.json({ profile })
    } else {
      return NextResponse.json(
        { error: 'Failed to get business profile' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error getting business profile:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
