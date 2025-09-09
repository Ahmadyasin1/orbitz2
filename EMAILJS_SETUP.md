# EmailJS Setup Guide

## Contact Form Integration ✅ COMPLETE

The contact form is now fully integrated with EmailJS to send form submissions directly to your email.

### Configuration Details:
- **Service ID**: `service_6onovqz`
- **Template ID**: `template_tymyney`  
- **Public Key**: `jkotdoOQ1Lda8L1kV`
- **Private Key**: `IATOQvivPwSD99Vj7upUu`
- **Destination Email**: `info@orbitztechnology.com`
- **Package**: `@emailjs/browser@4.4.1` ✅ Added to package.json

### EmailJS Template Variables

Make sure your EmailJS template (`template_tymyney`) includes these variables:

```
{{from_name}} - Customer's full name
{{from_email}} - Customer's email address  
{{company_name}} - Customer's company (or "Not specified")
{{phone_number}} - Customer's phone (or "Not provided")
{{service_interest}} - Selected service interest (or "Not specified")
{{message}} - Customer's message
{{reply_to}} - Customer's email for easy reply
```

### Sample EmailJS Template

**Subject**: New Contact Form Submission from {{from_name}}

**Body**:
```
You have received a new contact form submission from your website.

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Company: {{company_name}}
- Phone: {{phone_number}}
- Service Interest: {{service_interest}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.
```

### Features Implemented:
✅ Real-time form submission with EmailJS
✅ Loading states during submission
✅ Success/error notifications
✅ Form validation (required fields)
✅ Automatic form reset after successful submission
✅ Professional email formatting with all form details
✅ Reply-to setup for easy customer response

### Testing:
1. Fill out the contact form on your website
2. Submit the form
3. Check your `info@orbitztechnology.com` inbox
4. Verify all form details are included in the email

### Security Notes:
- Public key is safe to use in client-side code
- Private key should be kept secure and only used in EmailJS dashboard
- Form includes basic validation to prevent spam submissions
