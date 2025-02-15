"use client"
import React, { useState, useEffect } from "react";
const TimelineItem = ({ props, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="flex w-full justify-center items-center relative">
      <div className="flex w-full justify-center items-center gap-4 md:gap-8">
        {/* Text Section */}
        <div className={`w-1/2 ${isEven ? 'text-right pr-4 md:pr-8' : 'text-left pl-4 md:pl-8'} 
          ${isEven ? 'order-1' : 'order-3'}`}>
          <h3 className="text-base md:text-2xl font-semibold mb-2 md:mb-3">{props.heading}</h3>
          <p className="text-gray-400 text-sm md:text-lg hidden sm:block">{props.description}</p>
          {/* Mobile-only description for better readability */}
          <p className="text-gray-400 text-xs sm:hidden">{props.description}</p>
        </div>
        {/* Center Spacer for Progress Bar */}
        <div className="w-8 md:w-16 order-2 flex-shrink-0"></div>

        {/* Image Section */}
        <div className={`w-1/2 ${isEven ? 'pl-4 md:pl-8' : 'pr-4 md:pr-8'} 
          ${isEven ? 'order-3 flex justify-start' : 'order-1 flex justify-end'}`}>
          <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-44 md:h-44">
            <img 
              src={props.src} 
              alt={props.heading} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setProgress((prev) => {
          if ([33, 66, 100].some((threshold) => prev + 2 >= threshold && prev < threshold)) {
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 1000);
          }
          return prev >= 100 ? 0 : prev + 2;
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 h-full w-4 sm:w-6 md:w-8">
      {/* Base line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #1D2E61 0, #1D2E61 10px, transparent 10px, transparent 20px)",
          backgroundSize: "100% 20px",
        }}
      />

      {/* Progress line */}
      <div
        className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 transition-all duration-150"
        style={{
          height: `${progress}%`,
          backgroundImage:
            "repeating-linear-gradient(0deg, #2048a5 0, #2048a5 10px, transparent 10px, transparent 20px)",
          backgroundSize: "100% 20px",
        }}
      />

      {/* Circles */}
      {[0, 32, 65, 100].map((position) => (
        <div
          key={position}
          className={`
            absolute left-1/2 -translate-x-1/2
            h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 rounded-full 
            ${progress >= position ? "bg-[#654ea3]" : "bg-[#533844]"}
            transition-colors duration-300
          `}
          style={{
            top: `calc(${position}% - ${position === 100 ? "16px" : "0px"})`,
          }}
        />
      ))}
    </div>
  );
};

export default function Timeline({ props }) {
  return (
    <div className="bg-[#030014] text-white w-full min-h-screen px-2 sm:px-4 pb-10 sm:py-20 md:p-20 flex flex-col items-center">
      <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl text-center pb-20 sm:pb-10 md:pb-20">
        The TimeLine
      </h1>
      <div className="w-full max-w-[1288px] relative">
        <AnimatedProgressBar />
        <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">
          {props.card.map((card, index) => (
            <TimelineItem key={index} props={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}