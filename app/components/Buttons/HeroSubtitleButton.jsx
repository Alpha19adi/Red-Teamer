import { Star } from "lucide-react";

const HeroSubtitleButton = () => {
  return (
    <button className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4 rounded-full mt-5 md:mt-2">
      <Star className="md:w-6 md:h-6 w-4 h-4 text-white" />
      <span className="hero-subtitle-text text-base font-bold">
        Supreme Cybersecurity Services
      </span>
    </button>
  );
};

export default HeroSubtitleButton;