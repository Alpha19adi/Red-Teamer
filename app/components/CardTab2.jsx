import { motion } from "framer-motion";

let tabs = [
  { id: 0, label: "offensive Forensics" },
  { id: 1, label: "SOC Services" },
  { id: 2, label: "Security Code Review" },
];

export default function CardTab2({ setActiveTabInd, activeTab }) {
  return (
    <div className="justify-center items-center hidden sm:flex md:flex">
      <div className="flex gap-[32px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabInd(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-xl px-[1.13rem] py-3 text-[16px] leading-[16px] font-normal bg-zinc-800 text-white outline-sky-400 transition focus-visible:outline-2 h-[48px]`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference rounded-xl sm:text-[16px] sm:leading-[16px] font-[500]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.9 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
