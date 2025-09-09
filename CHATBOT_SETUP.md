This project uses Supabase for content. Ensure the following environment variables are set when deploying:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY (server only)

Storage buckets used:
- blog (public)
- insight (public)

Admin panel writes through server API routes at /api/content and uploads via /api/upload.
# WhatsApp Chatbot Integration Setup Guide

## Overview
This professional chatbot integration allows customers to:
- Chat with an AI assistant for basic queries
- Seamlessly transfer to human experts via WhatsApp
- Send conversation history to your WhatsApp for context

## Features
- ✅ Professional AI responses for common queries
- ✅ Automatic suggestion to connect with human experts
- ✅ Direct WhatsApp integration with conversation history
- ✅ Beautiful, responsive UI matching your brand
- ✅ Conversation persistence during session
- ✅ Mobile-friendly design

## Quick Setup (Using WhatsApp Direct Links - No API Required)

### 1. Update Your WhatsApp Number
Edit `app/page.tsx` line where the chatbot is imported:
```tsx
<Chatbot whatsappNumber="+1234567890" />
```
Replace `+1234567890` with your actual WhatsApp number.

### 2. The chatbot is now ready to use!
- Customers can chat with the AI
- When they need human help, they click "Talk to Human Expert"
- This opens WhatsApp with their conversation history
- You'll receive the message directly on your WhatsApp

## Advanced Setup (WhatsApp Business API - For Enterprise)

### 1. Prerequisites
- Facebook Developer Account
- WhatsApp Business Account
- Verified Business
- Webhook endpoint (your website)

### 2. Facebook Developer Setup
1. Go to [Facebook Developer Console](https://developers.facebook.com/)
2. Create a new app
3. Add WhatsApp product
4. Get your access token and phone number ID

### 3. Environment Variables
Copy `.env.example` to `.env.local` and fill in your details:
```bash
WHATSAPP_BUSINESS_NUMBER=your_business_number
WHATSAPP_ACCESS_TOKEN=your_access_token
WHATSAPP_WEBHOOK_VERIFY_TOKEN=your_verify_token
```

### 4. Webhook Configuration
1. In Facebook Developer Console, set webhook URL to:
   `https://yourdomain.com/api/whatsapp/webhook`
2. Set verify token to match your `WHATSAPP_WEBHOOK_VERIFY_TOKEN`
3. Subscribe to messages events

### 5. Test the Integration
1. Send a test message to your WhatsApp Business number
2. Check your server logs for incoming webhook calls
3. Verify messages are being processed correctly

## Customization Options

### 1. Modify AI Responses
Edit `components/chatbot.tsx` in the `getBotResponse` function:
```tsx
const getBotResponse = (userMessage: string): string => {
  // Add your custom responses here
  if (message.includes('your_keyword')) {
    return "Your custom response"
  }
  // ... rest of the responses
}
```

### 2. Styling Customization
The chatbot uses Tailwind CSS. You can modify colors and styling in `components/chatbot.tsx`:
- Change gradient colors
- Modify button styles
- Adjust sizing and positioning

### 3. Add More Features
- Collect user information before WhatsApp transfer
- Add file upload capabilities
- Integrate with your CRM
- Add typing indicators
- Store conversation history

## Troubleshooting

### Common Issues

1. **Chatbot not appearing**
   - Check if the component is properly imported
   - Verify Tailwind CSS is working
   - Check browser console for errors

2. **WhatsApp link not working**
   - Verify phone number format (include country code)
   - Test the link manually
   - Check URL encoding

3. **Webhook not receiving messages**
   - Verify webhook URL is accessible
   - Check SSL certificate
   - Verify Facebook app configuration

### Testing
1. Open your website
2. Click the chatbot icon (bottom right)
3. Send a test message
4. Click "Talk to Human Expert"
5. Verify WhatsApp opens with conversation history

## Security Considerations

1. **Environment Variables**: Never expose API keys in client-side code
2. **Webhook Verification**: Always verify webhook signatures
3. **Rate Limiting**: Implement rate limiting for API endpoints
4. **Data Privacy**: Handle customer data according to privacy laws

## Support

If you need help with setup:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Test webhook endpoints manually
4. Contact WhatsApp Business API support if needed

## Next Steps

1. **Analytics**: Add conversation tracking
2. **CRM Integration**: Connect to your customer management system
3. **Automated Responses**: Enhance AI responses based on your business
4. **Multi-language**: Add support for multiple languages
5. **Advanced Features**: Add voice messages, file sharing, etc.

---

## Quick Start Checklist

- [ ] Update WhatsApp number in the chatbot component
- [ ] Test basic functionality
- [ ] Customize AI responses for your business
- [ ] Set up WhatsApp Business API (optional)
- [ ] Configure webhooks (if using Business API)
- [ ] Test end-to-end flow
- [ ] Deploy to production
- [ ] Monitor and optimize responses

The chatbot is now ready to help convert website visitors into WhatsApp conversations!
