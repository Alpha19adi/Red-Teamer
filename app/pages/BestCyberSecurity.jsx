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
    <div id='Features' className='min-h-screen bg-[#030014] pt-10 md:pt-20 px-4 md:px-10'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl font-light text-white text-center'>
          We Offer Best Cyber Security Services
        </h1>
        <p className='text-[#918EA0] text-sm md:text-base leading-relaxed font-medium text-center mt-6 md:mt-10 max-w-[320px] md:max-w-[800px]'>
          We believe in making today more secure than yesterday. With our resilient cybersecurity programs, you can avert maximum attacks and recover promptly from any that succeeded. Integrate cybersecurity to your organization's very core with our services.
        </p>
      </div>

      <div className='flex flex-col items-center md:grid md:grid-cols-4 gap-16 md:gap-8 mt-24 md:mt-32'>
        {cyberSecurity.map((item, index) => (
          <div
            key={index}
            ref={(el) => cardRefs.current[index] = el}
            className={`relative w-full max-w-[320px] min-h-[320px] rounded-3xl transition-all duration-300 px-6 md:px-8 py-6 flex flex-col text-white text-center 
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
                className='mt-[-70px] mb-4'
              />
              <div className='flex flex-col gap-y-6 md:gap-y-8 mt-6'>
                <h2 className='font-semibold text-xl md:text-2xl'>{item.title}</h2>
                <p className='font-normal text-sm'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCyberSecurity;