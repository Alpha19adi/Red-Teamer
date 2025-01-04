import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSubtitleButton from "../components/Buttons/HeroSubtitleButton";
import AnimatedText from "../components/AnimatedText";
import {Globe} from "../components/ui/globe"
import SecurityAssessmentPopup from "../components/SecurityAssessmentPopup";

export default function Hero() {
  return (
    <div id="Home">
      <div className="bg-gradient-multi min-h-screen flex flex-col darker-grotesque scrollbar-hide">
        <Navbar />
        {/* <HeroSubtitleButton /> */}
        
        <div className="container mx-auto flex flex-col px-4 md:px-16 py-12 md:py-20 ">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-center space-y-6 md:max-w-[40%] ">
            <h1 className="text-[40px] text-center md:text-center md:text-[60px] font-bold leading-[55px] md:leading-[72px] text-white">
            Protecting What Matters Most
              <span className="elem text-[96px] relative overflow-hidden flex justify-center md:justify-center items-center h-24 sm:h-[105px]">
                <AnimatedText />
              </span>
            </h1>
            
            <p className="text-[#918EA0] text-lg text-center md:text-center max-w-[450px] ">
            We provide cutting-edge cybersecurity solutions to protect your data, privacy, and business. With advanced threat detection, real-time monitoring, and tailored strategies, we ensure your digital world stays secure. Trust us to safeguard what matters most—your peace of mind in an ever-evolving cyber landscape
            </p>
            
            <div className="w-full flex justify-center md:justify-center md:-ml-10">
            <SecurityAssessmentPopup />
            </div>
          </div>
          
          {/* Globe */}
          <div className="mt-12 md:mt-0 md:absolute w-full lg:w-1/2 flex justify-center lg:justify-end md:right-16 md:top-1/2 md:transform md:-translate-y-1/2">
            <div className="relative w-full aspect-square max-w-[400px] top-10 md:top-10 md:max-w-[600px]  mx-auto ">
              <Globe className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



{/* <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Globe className="w-full h-full" />
            </div>
          </div> */}