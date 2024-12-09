import React from "react";
import TextColComponent from "./TextColComponent";
import AnimatedProgressBar from "./AnimatedProgressBar";

export default function FIDOSection({ props }) {
  return (
    <div className="bg-[#030014] text-white max-w-1000 min-h-[597px] p-20 flex flex-col justify-center gap-20 items-center pb-40">
      <h1 className="text-white font-bold text-4xl pb-20">The TimeLine</h1>
      <div className=" w-[1288px] h-[237px] flex flex-col gap-10 ">
        <div className="flex justify-between pb-20 ">
        {props.card.map((card, index) => (
          <TextColComponent key={index} props={card} index={index} />
        ))}
        </div>
      <AnimatedProgressBar />
      </div>
    </div>
  );
}