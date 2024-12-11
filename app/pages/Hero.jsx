import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSubtitleButton from "../components/Buttons/HeroSubtitleButton";
import AnimatedText from "../components/AnimatedText";



export default function Hero() {
  return (
    <div id="Home">
      <div className=" flex flex-col items-center justify-start bg-gradient-multi darker-grotesque ">
        <Navbar />
        <HeroSubtitleButton />
        <div className="flex flex-col items-center justify-center mt-2">
          <p className="text-[40px] text-center leading-[55px] w-[420px] md:w-[840px] md:text-[60px] font-bold md:leading-[72px] text-white ">We Protect The World's Most 
            <span className="elem text-[96px] relative overflow-hidden flex justify-center items-center h-10 sm:h-[115px] ">
        <AnimatedText />
      </span></p>
          <p className="text-[#918EA0] mt-8 text-center w-[360px] text-lg md:w-[450px] hover:underline transition-all">While any run-of-the-mill IT company will claim to offer you competent IT solutions, as long as it no longer does, we at VAPT Company are globally renowned for our work and believe in offering result-oriented IT facilities.</p>
        </div>
        <button className="hero-button-gradient mt-10 inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">Start Your Free Security Assessment
        </button>
        <div className="mt-16  overflow-hidden">
          <img src="hero.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
