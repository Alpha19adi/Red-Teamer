"use client";

import React, { useEffect, useState } from "react";

const AnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check mobile view
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobileView();

    // Add resize listener
    window.addEventListener('resize', checkMobileView);

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  useEffect(() => {
    // Don't run animation on mobile
    if (isMobile) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        setProgress((prev) => {
          // When progress crosses 33, 66, or 100, pause the animation
          if ([33, 66, 100].some((threshold) => prev + 2 >= threshold && prev < threshold)) {
            setIsPaused(true); // Pause the animation
            setTimeout(() => setIsPaused(false), 1000); // Resume after 1 second
          }
          return prev >= 100 ? 0 : prev + 2; // Loop progress
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, isMobile]);

  // If mobile, return null or a simplified version
  if (isMobile) return null;

  return (
    <div className="w-full max-w-[1088px] md:px-20 px-4 h-8 left-24 relative">
      {/* Base line */}
      <div
        className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #1D2E61 0, #1D2E61 10px, transparent 10px, transparent 20px)",
          backgroundSize: "20px 100%",
        }}
      />

      {/* Progress line */}
      <div
        className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 transition-all duration-150"
        style={{
          width: `${progress}%`,
          backgroundImage:
            "repeating-linear-gradient(90deg, #2048a5 0, #2048a5 10px, transparent 10px, transparent 20px)",
          backgroundSize: "20px 100%",
        }}
      />

      {/* Circles */}
      {[0, 32, 65, 100].map((position) => (
        <div
          key={position}
          className={`
      absolute top-1/2 transition-all -translate-y-1/2 
      h-6 w-6 md:h-8 md:w-8 rounded-full 
      ${progress >= position
              ? "bg-[#654ea3]"  
              : "bg-[#533844]"  
            }
    `}
          style={{
            left: `calc(${position}% - ${position === 100 ? "16px" : "0px"})`,
          }}
        />
      ))}

    </div>
  );
};

export default AnimatedProgressBar;