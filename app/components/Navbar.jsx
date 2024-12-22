"use client";
import React, { useState, useRef, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import Image from "next/image";

const navData = ["Home", "Features", "Services", "Blogs","Process"];

const Navbar = () => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false);

    if (item === "Blogs") {
      router.push('/blogs');
      return;
    }
    if (item === "Process") {
      router.push('/process');
      return;
    }

    if (item === "Home") {
        // Check if we're already on the home page
        if (router.pathname !== '/') {
            router.push('/');  // Navigate to home if we're on a different page
        } else {
            // If we're already on home, just scroll to top
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        return;
    }

    const section = document.getElementById(item);
    if (section) {
      const offset = section.offsetTop;
      const customOffset = {
        Home: offset,
        Features: offset,
        Services: offset + 100,
      };

      window.scrollTo({
        top: customOffset[item],
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { x: "100%", display: "none" },
          { x: "0%", display: "flex", duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(mobileMenuRef.current, { display: "none" });
          },
        });
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full text-white px-4 py-2 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-[350px] h-[90px]">
          <Image
            src="/Logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navData.map((item) => (
            <button
              key={item}
              className={`relative text-gray-300 text-sm md:text-md py-1.5 px-4 border font-medium border-transparent   ${
                activeNav === item ? "nav-gradient hover:underline" : ""
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <AlignJustify />
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 w-64 h-full bg-black/90 z-50 flex-col pt-16 hidden"
        >
          <div
            className="absolute top-4 left-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X color="white" size={30} />
          </div>

          {navData.map((item) => (
            <button
              key={item}
              className={`text-white text-lg py-3 px-6 text-left hover:bg-gray-800 w-full ${
                activeNav === item ? "bg-gray-700" : ""
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;