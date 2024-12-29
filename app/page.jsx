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
  const FIDOCard = {
    "heading": "We deliver all passkey functions out-of-the-box as per FIDO2 standard",
    "card": [
      {
        "src":"/timeline1.svg",
        "heading": "Intelligence Gathering",
        "description": "Quickly integrate passkes into your apps with SDKs & APIs"
      },
      {
        "src":"/timeline1.svg",
        "heading": "Threat Modeling",
        "description": "Progressively onboard users with customizable flows"
      },
      {
        "src":"/timeline1.svg",
        "heading": "Penetration Testing",
        "description": "Allow users to create and manage passkeys"
      },
      {
        "src":"/timeline1.svg",
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
      <Timeline props={FIDOCard}/>
      <LatestBlogs />
      <FAQSection  />
      <Footer/>
    </div>
  );
}
