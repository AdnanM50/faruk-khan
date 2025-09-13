

export const EMAILJS_CONFIG = {
  // Get these from environment variables for security
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zkccp0q',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_o008ric',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'KAjjulCntDo2590iJ',
  
  // Your email address where you want to receive the contact form submissions
  TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'md.adnanhossain88@gmail.com'
};

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  MAX_ATTEMPTS: 3, // Maximum attempts per session
  COOLDOWN_TIME: 5 * 60 * 1000, // 5 minutes in milliseconds
  STORAGE_KEY: 'contact_form_attempts'
};

// Template parameters that will be sent to EmailJS
export const getTemplateParams = (formData: {
  name: string;
  email: string;
  website: string;
  mobile: string;
}) => ({
  from_name: formData.name,
  from_email: formData.email,
  website: formData.website,
  mobile: formData.mobile,
  to_email: EMAILJS_CONFIG.TO_EMAIL,
  // You can add more parameters here if needed
  reply_to: formData.email,
  subject: `New Contact Form Submission from ${formData.name}`
});
