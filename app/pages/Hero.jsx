import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSubtitleButton from "../components/Buttons/HeroSubtitleButton";
import AnimatedText from "../components/AnimatedText";
import {Globe} from "../components/ui/globe"
// import GlobeDemo form "../components/GlobeDemo";

export default function Hero() {
  return (
    <div id="Home">
      <div className="bg-gradient-multi flex flex-col items-center darker-grotesque">
        <Navbar />
        <HeroSubtitleButton />
        
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-5">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 text-center flex flex-col items-center md:text-left pr-0 md:pr-12">
            <p className="text-[40px] text-center  md:text-[60px] font-bold leading-[55px] md:leading-[72px] text-white mb-4">
              We Protect The World's Most 
              <span className="elem text-[96px] relative overflow-hidden flex justify-center items-center h-10 sm:h-[115px]">
                <AnimatedText />
              </span>
            </p>
            
            <p className="text-[#918EA0] flex  mt-8 text-lg text-center md:text-left w-full md:w-[450px] hover:underline transition-all">
              While any run-of-the-mill IT company will claim to offer you competent IT solutions, as long as it no longer does, we at VAPT Company are globally renowned for our work and believe in offering result-oriented IT facilities.
            </p>
            
            <div className="flex justify-center items-center md:justify-start mt-8">
              <button className="hero-button-gradient hover:cursor-none inline-flex rounded-lg py-3 px-7 md:-ml-12 text-white font-medium ease-in duration-300 hover:opacity-80">
                Start Your Free Security Assessment
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="mt-16 md:mt-0 md:w-1/2 flex justify-center md:justify-end relative">
           <Globe  />
          </div>
        </div>
      </div>
    </div>
  );
}