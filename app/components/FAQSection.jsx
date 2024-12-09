"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "How can I reset my password?",
    answer: "To reset your password, navigate to the login page and click on the 'Forgot Password' link. You will receive an email with instructions to reset your password. Follow the steps in the email to create a new password and regain access to your account."
  },
  {
    question: "How do I update my billing information?",
    answer: "To update your billing information, go to your account settings and select the 'Billing' or 'Payment Methods' section. Here you can add a new payment method, update your existing credit card, or change your billing address. Make sure to save your changes."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team through multiple channels. Visit the 'Contact Us' page on our website, use the live chat feature, send an email to support@example.com, or call our toll-free support number during business hours."
  },
  {
    question: "How do I delete my account?",
    answer: "To delete your account, go to account settings, scroll to the bottom of the page, and look for the 'Delete Account' option. You may be asked to confirm your identity and provide a reason for deletion. Please note that account deletion is usually permanent and cannot be undone."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#030014]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-white leading-[3.25rem]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="accordion-group space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`accordion border border-solid border-gray-700 p-4 rounded-xl transition-all duration-500 
                ${activeIndex === index ? 'bg-black border-indigo-600' : 'bg-[#0a0a2a]'}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`accordion-toggle group flex items-center justify-between w-full text-left text-lg font-normal leading-8 text-white
                  ${activeIndex === index ? 'text-indigo-400' : 'hover:text-indigo-400'}`}
              >
                <span className="flex-grow pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {activeIndex !== index ? (
                    <svg
                      className="w-6 h-6 text-white group-hover:text-indigo-400 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18M12 18V6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-indigo-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out 
                  ${activeIndex === index 
                    ? 'max-h-screen opacity-100 mt-4' 
                    : 'max-h-0 opacity-0 mt-0'}`}
              >
                <p className="text-base text-gray-300 font-normal leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}