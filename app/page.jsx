import Image from "next/image";
import Hero from "./pages/Hero";
import BestCyberSecurity from "./pages/BestCyberSecurity";
import Services from "./pages/Services";
import Services2 from "./pages/Services2";
import FAQSection from "./components/FAQSection";
import Timeline from "./components/Timeline";
import LatestBlogs from "./pages/LatestBlogs ";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";

export default function Home() {
  const TimeCard = {
    "heading": "We deliver all passkey functions out-of-the-box as per FIDO2 standard",
    "card": [
      {
        "src":"/timeline3.png",
        "heading": "Intelligence Gathering",
        "description": "Quickly integrate passkes into your apps with SDKs & APIs"
      },
      {
        "src":"/timeline2.png",
        "heading": "Threat Modeling",
        "description": "Progressively onboard users with customizable flows"
      },
      {
        "src":"/timeline4.png",
        "heading": "Penetration Testing",
        "description": "Allow users to create and manage passkeys"
      },
      {
        "src":"/timeline5.png",
        "heading": "Reporting Timely",
        "description": "Send passkey related alerts via SMS and email."
      }
    ]
  }

  return (
    <div className="overflow-hidden md:cursor-none bg-dark scrollbar-hide">
      <Hero />
      <BestCyberSecurity />
      <Services />
      <Services2 />
      <Timeline props={TimeCard}/>
      <LatestBlogs />
      <FAQSection  />
      <Footer/>
    </div>
  );
}
