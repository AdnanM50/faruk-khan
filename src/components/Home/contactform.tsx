import React from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, getTemplateParams } from '../../config/emailjs'

const Contactform = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    website: '',
    email: '',
    mobile: ''
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState({ text: '', type: '' });
  // Removed attempts and isBlocked state (rate limiting)

  // Removed rate limiting effect

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    // Basic input sanitization
    const sanitizedValue = value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .trim();
    
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));
  };

  const validateForm = () => {
    // Clear previous messages
    setMessage({ text: '', type: '' });

    if (!formData.name.trim()) {
      setMessage({ text: 'Name is required', type: 'error' });
      return false;
    }
    
    if (formData.name.length < 2) {
      setMessage({ text: 'Name must be at least 2 characters', type: 'error' });
      return false;
    }
    
    if (!formData.email.trim()) {
      setMessage({ text: 'Email is required', type: 'error' });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' });
      return false;
    }
    
    if (!formData.mobile.trim()) {
      setMessage({ text: 'Mobile number is required', type: 'error' });
      return false;
    }
    
    const mobileRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setMessage({ text: 'Please enter a valid mobile number', type: 'error' });
      return false;
    }

    // Check for suspicious content
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /expression\s*\(/i
    ];

    const allInputs = Object.values(formData).join(' ');
    if (suspiciousPatterns.some(pattern => pattern.test(allInputs))) {
      setMessage({ text: 'Invalid characters detected. Please check your input.', type: 'error' });
      return false;
    }

    return true;
  };

  // Removed updateAttempts (rate limiting)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // No rate limiting check
    
    if (!validateForm()) {
      return;
    }

  // No attempts update

    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const templateParams = getTemplateParams(formData);

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setMessage({ text: 'Message sent successfully! We will get back to you soon.', type: 'success' });
      setFormData({ name: '', website: '', email: '', mobile: '' });
      
  // No attempts reset needed
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Message Display */}
      {message.text && (
        <div className={`mb-4 p-3 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}



      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full max-w-full sm:max-w-[470px] h-[50px] sm:h-[66px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            required
            disabled={isLoading}
            maxLength={50}
          />
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Website (optional)"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            className="w-full max-w-full sm:max-w-[470px] h-[50px] sm:h-[66px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            maxLength={100}
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full max-w-full sm:max-w-[470px] h-[50px] sm:h-[66px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            required
            disabled={isLoading}
            maxLength={100}
          />
        </div>
        
        <div>
          <input
            type="tel"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
            className="w-full max-w-full sm:max-w-[470px] h-[50px] sm:h-[66px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-700 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            required
            disabled={isLoading}
            maxLength={20}
          />
        </div>
        
        <div className="flex gap-4 pt-4 flex-col sm:flex-row">
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-[225px] h-[50px] sm:h-[65px] bg-black text-white px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Get Free Analysis'}
          </button>
          <button 
            type="button"
            className="w-full sm:w-[225px] h-[50px] sm:h-[65px] bg-white text-black px-6 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Book a Session
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contactform