"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardTab from "./CardTab";
import { CardStack } from "./CardStack";
import CardTab2 from "./CardTab2";
// import SectionTopText from "@/components/general/SectionTopText";
// import SectionHeaderText2 from "../general/SectionHeaderText2";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function CardAnimation2({ props }) {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(0);
  const containerRef = useRef(null);
  const cardStackRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  // Function to handle tab change
  const handleTabChange = useCallback((id) => {
    if (id !== activeTab) {
      setPrevTab(activeTab);
      setActiveTab(id);
      // console.log("Tab changed to", id);
    }
  }, [activeTab]);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: container,
      start: "top -19%",
      end: `+=${props.data.length * window.innerHeight}`,
      pin: true,
      scrub: 1,
      // markers: true,
      snapTo: 1 / (props.data.length - 1),
      onUpdate: (self) => {
        const progress = self.progress;
        const newTab = Math.min(
          Math.floor(progress * props.data.length),
          props.data.length - 1
        );

        if (newTab !== activeTab) {
          handleTabChange(newTab);
        }
      },
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [props.data, activeTab, handleTabChange]);

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden ">
      <div className="flex flex-col gap-4 lg:pb-[40px] lg:px-[80px] px-[20px] h-full">
        <div className="max-w-1000 flex justify-center max-md:w-full">
          <div className="flex flex-col w-full justify-center items-center gap-[16px]">
            {/* <SectionTopText text={props.heading} />
            <SectionHeaderText2 text={props.subheading} /> */}
          </div>
        </div>
        <div className="mb-20 md:mb-8 lg:mt-[48px]">
          <CardTab2 setActiveTabInd={handleTabChange} activeTab={activeTab} />
        </div>
        <div ref={cardStackRef} className="flex justify-center max-md:mx-4 ">
          <CardStack items={props.data} activeTab={activeTab} prevTab={prevTab} />
        </div>
      </div>
    </div>
  );
}
