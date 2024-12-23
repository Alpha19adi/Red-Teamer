import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark w-full mt-24 sm:mt-32 lg:mt-40 border-t border-neutral-800">
      <Container className="py-12 sm:py-16">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Company Description */}
            <div className="space-y-6">
              <Link href="/" aria-label="Home">
                <Logo className="h-8 text-white hover:text-neutral-300 transition-colors duration-200" fillOnHover>
                  RedTeamer Agency
                </Logo>
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Securing digital landscapes with advanced penetration testing and cybersecurity solutions.
              </p>
            </div>

            {/* Main Navigation */}
            <div className="md:col-span-2">
              <FooterNavigation />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-neutral-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-y-6">
              {/* Legal Links */}
              <div className="flex items-center space-x-6">
                <Link 
                  href="/privacy" 
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>

              {/* Copyright */}
              <p className="text-sm text-neutral-400">
                © {new Date().getFullYear()} RedTeamer Agency Inc. All rights reserved.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
};

export default Footer;