"use client"
import React, { useState, useEffect, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth interpolation for trailing effect
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  // Update trailing position with smooth interpolation
  const updateTrailingPosition = useCallback(() => {
    setTrailingPosition(prev => ({
      x: lerp(prev.x, position.x, 0.15), // Adjust this value (0.15) to change trailing speed
      y: lerp(prev.y, position.y, 0.15)
    }));
    requestAnimationFrame(updateTrailingPosition);
  }, [position]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Start animation loop
    const animationFrame = requestAnimationFrame(updateTrailingPosition);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, .hover-target');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [updateTrailingPosition]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div
          className="rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            width: isHovering ? '40px' : '10px',
            height: isHovering ? '40px' : '10px',
            transform: `scale(${isClicking ? 0.8 : 1})`,
            transition: 'all 0.2s ease-out',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
          }}
        />
      </div>

      {/* Trailing cursor */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{
          transform: `translate(${trailingPosition.x}px, ${trailingPosition.y}px)`,
        }}
      >
        <div
          className="rounded-full bg-white/10"
          style={{
            width: isHovering ? '60px' : '30px',
            height: isHovering ? '60px' : '30px',
            transition: 'width 0.2s ease-out, height 0.2s ease-out',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;