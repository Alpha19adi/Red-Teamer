"use client"
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if we're on desktop
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px is the standard lg breakpoint
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (event) => {
      // Only update cursor if on desktop
      if (isDesktop) {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
          cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Only add event listeners if on desktop
    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      const interactiveElements = document.querySelectorAll('a, button, input, .hover-target');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      
      if (isDesktop) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        
        const interactiveElements = document.querySelectorAll('a, button, input, .hover-target');
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    };
  }, [isDesktop]); // Add isDesktop to dependency array

  // Don't render anything if not on desktop
  if (!isDesktop) return null;

  return (
    <div
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform hidden lg:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <div
        className="rounded-full bg-white/30 backdrop-blur-sm"
        style={{
          width: isHovering ? '40px' : '20px',
          height: isHovering ? '40px' : '20px',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, transform 0.2s ease-out',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
        }}
      />
    </div>
  );
};

export default CustomCursor;