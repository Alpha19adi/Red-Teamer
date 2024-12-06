"use client"
import React, { useState, useRef, useEffect } from 'react'
import { AlignJustify, X } from 'lucide-react';
import { gsap } from 'gsap';

const navData = [
    "Home",
    "Features",
    "Pricing",
    "Pages",
    "Support"
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleNavClick = (item) => {
      setActiveNav(item);
      setIsMobileMenuOpen(false);
  };

  useEffect(() => {
      if (mobileMenuRef.current) {
          if (isMobileMenuOpen) {
              gsap.fromTo(
                  mobileMenuRef.current, 
                  { x: '100%', display: 'none' },
                  { 
                      x: '0%', 
                      display: 'flex', 
                      duration: 0.3, 
                      ease: 'power2.out' 
                  }
              );
          } else {
              gsap.to(mobileMenuRef.current, {
                  x: '100%', 
                  duration: 0.3, 
                  ease: 'power2.in',
                  onComplete: () => {
                      gsap.set(mobileMenuRef.current, { display: 'none' });
                  }
              });
          }
      }
  }, [isMobileMenuOpen]);

  return (
      <nav className="text-white flex items-center gap-x-48 justify-start md:-ml-[25rem] relative">
          {/* Desktop Navbar */}
          <div>
              <img src="Logo.png" alt="Logo" width={250} className='pt-2' />
          </div>
          <div className="hidden justify-between gap-x-6 md:flex">
              {navData.map((item) => (
                  <button
                      key={item}
                      className={`relative text-gray-300 text-sm md:text-md py-1.5 px-4 border font-medium border-transparent hover:underline ${
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
              className='mr-5 flex items-center justify-center md:hidden cursor-pointer'
              onClick={() => setIsMobileMenuOpen(true)}
          >
              <AlignJustify />
          </div>

          {/* Mobile Slide-out Menu */}
          <div 
              ref={mobileMenuRef}
              className="fixed top-0 right-0 w-64 h-full bg-black/90 z-50 flex-col pt-16 hidden"
          >
              {/* Close Button */}
              <div 
                  className="absolute top-4 left-4 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
              >
                  <X color="white" size={30} />
              </div>

              {/* Mobile Navigation Items */}
              {navData.map((item) => (
                  <button
                      key={item}
                      className={`text-white text-lg py-3 px-6 text-left hover:bg-gray-800 ${
                          activeNav === item ? "bg-gray-700" : ""
                      }`}
                      onClick={() => handleNavClick(item)}
                  >
                      {item}
                  </button>
              ))}
          </div>
      </nav>
  )
}

export default Navbar