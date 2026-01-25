# EmailJS Setup Guide

To make your contact form work and receive emails, follow these steps:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure to capture sender email for contacts:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Sender Email: {{sender_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{from_email}}
```

**Important:** Make sure to include `{{from_email}}` and `{{sender_email}}` in your template so you can:
- See the sender's email address in every email
- Reply directly to the sender (reply_to is automatically set)
- Manually add contacts to EmailJS from received emails

4. Save and copy your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** and copy it

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project
2. Add these variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials
4. Restart your development server

## Step 6: Managing Contacts

The contact form automatically includes the sender's email in every message. To save contacts in EmailJS:

1. **Manual Method (Recommended):**
   - When you receive an email, copy the sender's email address
   - Go to EmailJS Dashboard > **Contacts**
   - Click **Add Contact**
   - Enter the email and any additional details
   - Save the contact

2. **From Received Emails:**
   - Each email you receive will have the sender's email in the `From` field
   - You can reply directly (reply_to is set automatically)
   - Copy emails from received messages to add to your contacts

## Step 7: Test

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the message!
4. Verify the sender's email is included in the email
5. Test replying directly to the sender

## Troubleshooting

- Make sure your `.env` file is in the root directory
- Restart the dev server after adding environment variables
- Check the browser console for any error messages
- Verify your EmailJS service is connected properly

