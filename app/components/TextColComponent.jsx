import React from "react";

export default function TextColComponent({ props, index }) {
  return (
    <div className={`${index%2===0 ?"flex flex-col gap-4 md:gap-4  items-center w-full text-center justify-center h-auto md:h-[165px]":` flex md:relative md:top-[340px] ${index===1 ?"md:right-5":"md:left-12"} flex-col  md:flex-col-reverse gap-4 md:gap-4 items-center w-full text-center justify-center h-auto md:h-[165px] `}
      
    `}>
      <img 
        src={props.src} 
        alt={props.heading || `Timeline item ${index + 1}`} 
        className="w-32 h-32 md:w-44 md:h-44 object-contain"
      />
      <p className="text-2xl md:text-3xl w-[200px] text-white font-bold">
        {props.heading}
      </p>
    </div>
  );
}