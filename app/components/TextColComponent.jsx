import React from "react";

export default function TextColComponent({ props, index }) {
  
  return (
    <div className={`flex flex-col gap-8 items-center w-[212px] text-center justify-center h-[165px]`}>
      <img src={props.src} alt="" />
      <p 
        className="text-3xl text-white flex items-center justify-center  font-bold"
      >{props.heading}</p>
    </div>
  );
}