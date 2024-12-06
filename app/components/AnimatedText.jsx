"use client"

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';



const AnimatedText = ({ }) => {
  const headingsRef = useRef([]);

  const headings= [
    'Sensitive Data',
    'Secure Networks',
    'Compliance',
    'Vulnerabilities',
  ]

  useEffect(() => {
    const h1s = headingsRef.current;
    let index = 0;

    // Set the first heading to be visible immediately, and others off-screen
    gsap.set(h1s[0], { top: '0%' });
    h1s.slice(1).forEach((heading) => gsap.set(heading, { top: '100%' }));

    // Trigger animations only after the first render
    const cycleHeadings = () => {
      const nextIndex = (index + 1) % h1s.length;

      // Animate the current heading out of view
      gsap.to(h1s[index], {
        top: '-100%',
        ease: 'expo.inOut',
        duration: 1,
      });

      // Prepare and animate the next heading into view
      gsap.set(h1s[nextIndex], { top: '100%' });
      gsap.to(h1s[nextIndex], {
        top: '0%',
        ease: 'expo.inOut',
        duration: 1,
        onComplete: () => {
          index = nextIndex;
        },
      });
    };

    // Start the cycle of animations after a slight delay to avoid initial overlap
    const interval = setInterval(cycleHeadings, 2000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {headings.map((heading, idx) => (
        <span
          key={idx}
          ref={(el) => (headingsRef.current[idx] = el)}
          className="text-[36px] leading-[36px] md:text-[80px] md:leading-[50px] font-[500] text-transparent flex justify-center items-center bg-clip-text bg-custom-heroTextGradient absolute transition-transform duration-2000 ease-in h-full"
          style={{ top: idx === 0 ? '0%' : '100%' }} 
        >
          {heading}
        </span>
      ))}
    </>
  );
};

export default AnimatedText;