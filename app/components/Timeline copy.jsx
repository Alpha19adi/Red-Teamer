"use client";

import React, { useState, useEffect } from "react";
import TextColComponent from "./TextColComponent";
import AnimatedProgressBar from "./AnimatedProgressBar";
import SVGCurve from "./SVGCurve";

export default function Timeline({ props }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initial load
    checkMobileView();

    // Add event listener for resize
    window.addEventListener("resize", checkMobileView);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <div className="bg-[#030014] text-white w-full min-h-[597px] px-4 py-20 md:p-20 md:pb-[360px] flex flex-col justify-center items-center relative">
      <h1 className="text-white font-bold text-2xl md:text-4xl text-center pb-10 md:pb-40">
        The TimeLine
      </h1>
      <div className="w-full max-w-[1288px] flex flex-col gap-10 relative">
        <div
          className={`
          flex flex-col md:flex-row 
          justify-center md:justify-between 
          items-center gap-10 md:gap-4 
          pb-10 md:pb-10
        `}
        >
          {props.card.map((card, index) => (
            <TextColComponent key={index} props={card} index={index} />
          ))}
        </div>
        {isMobile ? <SVGCurve /> : <AnimatedProgressBar />}
      </div>
    </div>
  );
}
