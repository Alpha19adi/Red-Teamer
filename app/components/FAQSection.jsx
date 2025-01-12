"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "What is VAPT (Vulnerability Assessment and Penetration Testing)?",
    answer: "VAPT is a comprehensive security testing process that helps identify vulnerabilities in your IT systems. Vulnerability Assessment scans and identifies potential weaknesses, while Penetration Testing actively tests these vulnerabilities to simulate real-world cyberattacks."
  },
  {
    question: "What’s the difference between Vulnerability Assessment and Penetration Testing?",
    answer: "•Vulnerability Assessment scans systems for known vulnerabilities and weaknesses. Penetration Testing simulates a real cyberattack to exploit identified vulnerabilities, testing your defenses under real-world conditions."
  },
  {
    question: "How often should we conduct VAPT?",
    answer: "VAPT should be conducted regularly, at least annually, or whenever you make significant changes to your systems or infrastructure. It’s also recommended after any major software updates, new deployments, or following any cyber incident."
  },
  {
    question: "How often should we conduct VAPT?",
    answer: "VAPT should be conducted regularly, at least annually, or whenever you make significant changes to your systems or infrastructure. It’s also recommended after any major software updates, new deployments, or following any cyber incident."
  },
  {
    question: "How often should we conduct VAPT?",
    answer: "VAPT should be conducted regularly, at least annually, or whenever you make significant changes to your systems or infrastructure. It’s also recommended after any major software updates, new deployments, or following any cyber incident."
  },
  {
    question: "What happens after the VAPT report is delivered?",
    answer: "After the assessment, we provide a detailed report outlining the vulnerabilities found, the risk they pose, and practical recommendations for remediation. Our experts can also assist in fixing the identified issues and improving your security measures."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='Support' className="py-[140px] bg-[#030014]">
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