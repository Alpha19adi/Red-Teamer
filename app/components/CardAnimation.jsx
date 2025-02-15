"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardTab from "./CardTab";
import { CardStack } from "./CardStack";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function CardAnimation({ props }) {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const cardStackRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  // Function to handle tab change
  const handleTabChange = useCallback((id) => {
    if (id !== activeTab) {
      setPrevTab(activeTab);
      setActiveTab(id);
    }
  }, [activeTab]);

  // Check for mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Check initial load
    checkMobileView();

    // Add event listener for resize
    window.addEventListener('resize', checkMobileView);

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    // If mobile, don't set up ScrollTrigger
    if (isMobile) {
      // Kill existing ScrollTrigger if it exists
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      return;
    }

    const container = containerRef.current;

    if (!container) return;

    // Kill existing ScrollTrigger
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    // In your ScrollTrigger setup, modify the end value
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: container,
      start: "top -7%",
      // Reduce the scroll distance by using a fraction of the window height
      end: `+=${props.data.length * window.innerHeight * 0.4}`, // Reduced to 50% of original
      // Or use a fixed pixel value
      // end: `+=${props.data.length * 400}`, // Use 400px per section
      pin: true,
      scrub: 1,
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
  }, [props.data, activeTab, handleTabChange, isMobile]);

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden">
      <div className="flex flex-col gap-4 lg:pb-[40px] lg:px-[80px] px-[20px] h-full">
        <div className="max-w-1000 flex justify-center max-md:w-full">
          <div className="flex flex-col w-full justify-center items-center gap-[16px]">
            {/* Optional section headers can be uncommented if needed */}
            {/* <SectionTopText text={props.heading} />
            <SectionHeaderText2 text={props.subheading} /> */}
          </div>
        </div>
        <div className="mb-20  md:mb-8 lg:mt-[48px]">
          <CardTab
            setActiveTabInd={handleTabChange}
            activeTab={activeTab}
          />
        </div>
        <div ref={cardStackRef} className="flex justify-center max-md:mx-4">
          <CardStack
            items={props.data}
            activeTab={activeTab}
            prevTab={prevTab}
          />
        </div>
      </div>
    </div>
  );
}