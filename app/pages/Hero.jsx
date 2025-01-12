import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSubtitleButton from "../components/Buttons/HeroSubtitleButton";
import AnimatedText from "../components/AnimatedText";
import {Globe} from "../components/ui/globe";
import SecurityAssessmentPopup from "../components/SecurityAssessmentPopup";

export default function Hero() {
  return (
    <div id="Home">
      <div className="bg-gradient-multi min-h-screen flex flex-col darker-grotesque scrollbar-hide">
        <Navbar />
        
        <div className="container mx-auto flex flex-col md:flex-row px-4 md:px-8 lg:px-16 py-12 md:py-0 lg:py-5 relative">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start lg:items-center md:mt-20 space-y-6 w-full md:w-1/2 lg:max-w-[40%] z-10">
            <h1 className="text-[40px] text-center md:text-left lg:text-center md:text-[50px] lg:text-[60px] font-bold leading-[55px] md:leading-[65px] lg:leading-[72px] text-white">
              Protecting
              <br className="hidden md:block lg:hidden" /> What Matters
              <br className="hidden md:block lg:hidden" /> Most
              <span className="elem text-[96px] relative overflow-hidden flex justify-center md:justify-start lg:justify-center items-center h-24 sm:h-[105px] md:h-36 text-purple-400">
                <AnimatedText />
              </span>
            </h1>
            
            <p className="text-[#918EA0] text-lg text-center md:text-center lg:text-center md:max-w-[90%] lg:max-w-[450px]">
              We provide cutting-edge cybersecurity solutions to protect your data, privacy, and business. With advanced threat detection, real-time monitoring, and tailored strategies, we ensure your digital world stays secure. Trust us to safeguard what matters most—your peace of mind in an ever-evolving cyber landscape
            </p>
            
            <div className="w-full flex justify-center md:justify-start lg:justify-center md:pl-10 lg:-ml-10">
              <SecurityAssessmentPopup />
            </div>
          </div>
          
          {/* Globe */}
          <div className="md:absolute md:right-0 lg:pt-28 md:top-1/2 md:-translate-y-1/2 w-full md:w-[55%] flex justify-center items-center mt-12 md:mt-0">
            <div className="relative w-full aspect-square max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
              <Globe className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}