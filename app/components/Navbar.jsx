"use client"

import React from 'react'
import Link from "next/link";
import { useState } from "react";


const navData = [
    "Home",
    "Features",
    "Pricing",
    "Pages",
    "Support"
];

const Navbar = () => {

    const [activeNav, setActiveNav] = useState("Home");

  const handleNavClick = (item) => {
    setActiveNav(item);
  };

  return (
    <nav className="text-white flex items-center gap-x-48 justify-start md:-ml-[25rem] -ml-[12rem]">
            <div>
                <img src="Logo.png" alt="Logo" width={250}   />
            </div>
            <div className=" hidden justify-between gap-x-6 md:flex  ">
                {navData.map((item) => (
                    <button
                    key={item}
                    className={`relative text-gray-300 text-sm md:text-md py-1.5 px-4 border font-medium border-transparent  hover:underline  ${
                      activeNav === item ? "nav-gradient hover:underline " : ""
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