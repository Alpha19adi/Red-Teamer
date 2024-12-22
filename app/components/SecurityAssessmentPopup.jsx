"use client"
import React, { useState } from 'react';
import { X, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


emailjs.init("33jhn5Z7sdg2JJrsw");

const SecurityAssessmentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value, country) => {
    // Format the phone number with a plus sign and country code
    const formattedPhone = `+${value}`;
    setFormData(prev => ({
      ...prev,
      phone: formattedPhone
    }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.from_name,
        to_name: 'Admin', // The recipient name
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        "service_37yjk3b", 
        "template_2cfu0gq", 
        templateParams
      );

      setSubmitStatus('success');
      // Reset form
      setFormData({
        from_name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email send failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="hero-button-gradient rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
      >
        Start Your Free Security Assessment
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm animated-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-[#1A1A2E] border border-blue-900/30 rounded-2xl shadow-2xl w-full max-w-md p-8 relative transform transition-all scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Free Security Assessment
            </h2>

            <form onSubmit={sendMail} className="space-y-4">
              <div>
                <label htmlFor="from_name" className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full bg-[#16213E] border border-blue-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-[#16213E] border border-blue-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-300 mb-2">Phone Number</label>
                <PhoneInput
                  country={'in'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    required: true,
                    id: 'phone'
                  }}
                  containerStyle={{
                    width: '100%'
                  }}
                  inputStyle={{
                    width: '100%',
                    height: '42px',
                    backgroundColor: '#16213E',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '0.5rem',
                    color: 'white'
                  }}
                  buttonStyle={{
                    backgroundColor: '#16213E',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRight: 'none',
                    borderRadius: '0.5rem 0 0 0.5rem'
                  }}
                  dropdownStyle={{
                    backgroundColor: '#16213E',
                    color: 'black'
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your security assessment needs"
                  required
                  rows={4}
                  className="w-full bg-[#16213E] border border-blue-900/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full hero-button-gradient rounded-lg py-3 text-white font-medium transition-all hover:opacity-80 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Assessment Request</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-500 text-center mt-4">
                  Email sent successfully! We'll contact you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-500 text-center mt-4">
                  Failed to send email. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SecurityAssessmentPopup;

