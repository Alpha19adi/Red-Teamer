import Image from "next/image";
import Hero from "./pages/Hero";
import BestCyberSecurity from "./pages/BestCyberSecurity";
import Services from "./pages/Services";
import Services2 from "./pages/Services2";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BestCyberSecurity/>
      <Services/>
      <Services2/>
    </div>
  );
}
