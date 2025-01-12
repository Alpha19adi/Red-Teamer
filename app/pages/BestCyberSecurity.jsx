"use client";
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const cyberSecurity = [
    {
        src: "/cyberDiv.png",
        title: 'Web Penetration Testing',
        description: "Identifies vulnerabilities in web applications to enhance security defenses.",
    },
    {
        src: "/cyberDiv.png",
        title: 'Mobile Penetration Testing',
        description: "Assesses mobile apps (Android/IOS) for security flaws and potential exploitation risks.",
    },
    {
        src: "/cyberDiv.png",
        title: 'Container Security Assessment',
        description: "Evaluates container vulnerabilities to ensure secure application deployment environments.",
    },
    {
        src: "/cyberDiv.png",
        title: 'Active Directory Penetration Testing',
        description: "Identifies AD weaknesses to prevent unauthorized access and privilege escalation.",
    },
];

const BestCyberSecurity = () => {
  const cardRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id='Features' className='min-h-screen bg-[#030014] pt-10 sm:pt-16 lg:pt-52 px-4 sm:px-6 md:px-8 lg:px-10 '>
      <div className='flex flex-col items-center max-w-7xl mx-auto'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white text-center'>
          We Offer Best Cyber Security Services
        </h1>
        <p className='text-[#918EA0] text-sm sm:text-base leading-relaxed font-medium text-center 
                      mt-4 sm:mt-6 md:mt-8 lg:mt-10 
                      max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]'>
          We deliver top-tier cybersecurity services, including threat detection, risk management, and compliance solutions, 
          ensuring your business stays secure and resilient against evolving digital threats.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                      gap-12 sm:gap-8 md:gap-6 lg:gap-8 
                      mt-16 sm:mt-20 md:mt-24 lg:mt-32 
                      max-w-7xl mx-auto'>
        {cyberSecurity.map((item, index) => (
          <div
            key={index}
            ref={(el) => cardRefs.current[index] = el}
            className={`relative w-full max-w-[320px] mx-auto 
                       min-h-[280px] sm:min-h-[300px] md:min-h-[320px] 
                       rounded-3xl transition-all duration-300 
                       px-4 sm:px-6 md:px-8 py-6 
                       flex flex-col text-white text-center
                       ${hoveredIndex === index ? 'scale-105' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 rounded-[24px] bg-[radial-gradient(circle,_#6B21A8,_#000000)]
                transition-all duration-[900ms]
                ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            ></div>

            <div className="relative z-10 flex flex-col items-center">
              <img
                src={item.src}
                alt={item.title}
                width={100}
                className='mt-[-50px] sm:mt-[-60px] md:mt-[-70px] mb-4'
              />
              <div className='flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-8 mt-4 sm:mt-5 md:mt-6'>
                <h2 className='font-semibold text-lg sm:text-xl md:text-2xl'>
                  {item.title}
                </h2>
                <p className='font-normal text-xs sm:text-sm'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCyberSecurity;