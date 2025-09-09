// EmailJS Integration Test
// This file can be used to test the EmailJS setup independently

import emailjs from '@emailjs/browser';

// Test EmailJS configuration
const testEmailJS = async () => {
  try {
    // Initialize EmailJS
    emailjs.init("jkotdoOQ1Lda8L1kV");

    // Test template parameters
    const templateParams = {
      from_name: "Test User",
      from_email: "test@example.com",
      company_name: "Test Company",
      phone_number: "+1 (555) 123-4567",
      service_interest: "IT Consulting",
      message: "This is a test message from the contact form integration.",
      to_email: "info@orbitztechnology.com",
      reply_to: "test@example.com"
    };

    // Send test email
    const result = await emailjs.send(
      'service_6onovqz',
      'template_tymyney',
      templateParams,
      'jkotdoOQ1Lda8L1kV'
    );

    console.log('✅ EmailJS Test Successful:', result);
    return { success: true, result };
  } catch (error) {
    console.error('❌ EmailJS Test Failed:', error);
    return { success: false, error };
  }
};

// Export for testing
export { testEmailJS };

// Uncomment the line below to run the test
// testEmailJS();
