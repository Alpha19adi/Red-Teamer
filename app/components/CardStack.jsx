"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
// import cardVerticalBar from '@/../public/whiteSeperator.svg';
import Image from 'next/image';
// import HoverButton105 from "../general/Buttons/HoverButton105";
import Link from "next/link";

export const CardStack = ({
  items,
  activeTab,
  offset = 10, 
  scaleFactor = 0.08, 
  prevTab,
}) => {

  const [cards, setCards] = useState(items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    moveCardToFront(activeTab);
  }, [activeTab]);

  const moveCardToFront = (activeTabId) => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      const cardIndex = newArray.findIndex((card) => card.id === activeTabId);
      if (cardIndex !== -1) {
        const [selectedCard] = newArray.splice(cardIndex, 1);
        newArray.unshift(selectedCard);
      }
      return newArray;
    });
  };

  const handleNext = () => {
    setPrevIndex(currentIndex)
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setPrevIndex(currentIndex)
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative h-[900px] md:h-[630px] w-full sm:w-[1280px]"
    >
      <div className="hidden sm:block">
        {items.sort((a, b) => a.id - b.id).map((card, index) => {
          const shouldHideCard = activeTab === 4 && index === 0;

          return (
            <motion.div
              key={card.id}
              className="absolute rounded-3xl px-10 py-10 shadow-lg border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-center items-center sm:min-h-[544px] opacity-90 "
              style={{
                transformOrigin: "top center",
                background: card.bg,
                zIndex: index * 10,
                display: shouldHideCard ? 'none' : 'flex',
              }}
              initial={{
                y: activeTab < prevTab && index === activeTab ? -500 : 500,
                opacity: activeTab === index ? 1 : 0,
              }}
              animate={{
                y: index <= activeTab 
                  ? index * offset + (index === 0 ? -10 : 0)
                  : 500,
                opacity: index <= activeTab 
                  ? (shouldHideCard ? 0 : 1) 
                  : 0.1,
                scale: index === activeTab
                  ? 1
                  : 1 - (activeTab - index) * scaleFactor,
                display: index <= activeTab ? (shouldHideCard ? 'none' : 'flex') : 'none',
              }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay: index === activeTab ? 0.1 : 0,
              }}
            >
              <div className="flex flex-col items-center sm:flex-row text-white text-opacity-70 gap-x-[80px] ">
                <div className=" sm:order-last flex flex-shrink-0 w-[560px]">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    height={card.image.height}
                    width={card.image.width}
                    className="flex flex-shrink-0 w-full"
                  />
                </div>
                <div className="flex flex-col sm:w-2/3 items-center ">
                  <h2 className={`text-lg sm:text-[40px] font-sfpro-medium leading-tight sm:leading-[48px] space-y-5 mb-5 text-white`}>{card.title}</h2>
                  <div className="mt-2">
                    <p className="text-xs sm:text-[18px] font-sfpro-regular  sm:leading-[27px] font-[400] font-[#57250B]">{card.description}</p>
                    <div className="flex flex-row gap-x-[13px] sm:gap-5 mt-4 sm:mt-8">
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>


      {/* Render as a carousel for mobile */}
      <div className="block sm:hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: prevIndex < currentIndex ? 300 : -300, y: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative rounded-3xl shadow-lg border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between w-full box-border h-[700px]   md:min-h-[800px]"
            style={{
              background: cards[currentIndex].bg,
            }}
          >
            <div className="flex flex-col text-black text-opacity-70 justify-start gap-y-[20px] p-[20px] flex-grow">
              <Image
                src={cards[currentIndex].image.src}
                alt={cards[currentIndex].image.alt}
                height={cards[currentIndex].image.height}
                width={cards[currentIndex].image.width}
                className="flex flex-shrink-0 w-full"
              />

              {/* Card content */}
              <div className="flex flex-col text-white flex-grow justify-between ">
                <div className="flex flex-col gap-y-[16px]">
                  <p className="text-[16px] leading-[19.2px]  text-white font-sfpro-medium ">{cards[currentIndex].heading}</p>
                  <h3 className="text-[32px] leading-[38.4px]  font-overused-medium ">{cards[currentIndex].title}</h3>
                  <div className="tracking-[0.0025em] text-[16px] leading-[24px] font-sfpro-regular flex flex-col gap-y-[16px]">
                    <p className="tracking-[0.0025em] text-[16px] leading-[24px] font-sfpro-regular">{cards[currentIndex].description}</p>
                    {currentIndex != 3 && (
                      <div className="mb-16 md:mb-44"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Circles indicator */}
        <div className="flex justify-center mt-[40px] mb-12 md:mb-40">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={`h-[12px] w-[12px] rounded-full mx-1 ${currentIndex === idx ? "bg-[#008ECF]" : "bg-white"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};