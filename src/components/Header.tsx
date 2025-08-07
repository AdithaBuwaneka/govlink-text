// components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// Beautiful Lotus Icon for Navbar
const NavbarLotusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100">
    {/* Outer layer petals */}
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(72 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(144 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(216 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#8D153A" opacity="0.8" transform="rotate(288 50 50)"/>

    {/* Middle layer petals */}
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(36 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(108 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(180 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(252 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#FF5722" opacity="0.9" transform="rotate(324 50 50)"/>

    {/* Inner petals */}
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(90 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(180 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#FFC72C" transform="rotate(270 50 50)"/>

    {/* Center */}
    <circle cx="50" cy="50" r="6" fill="#FFC72C"/>
    <circle cx="50" cy="50" r="3" fill="#FF8F00"/>
  </svg>
);

// Navigation handled by scroll functions

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between p-2 md:p-3">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-background/50 to-card/50 rounded-lg p-0.5 flex items-center justify-center border border-border/20 relative overflow-visible">
              <NavbarLotusIcon className="w-10 h-10 absolute" />
            </div>
            <span className="text-xl font-bold text-gradient">GovLink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => smoothScrollTo('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => smoothScrollTo('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => smoothScrollTo('contact')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/chat" className="bg-gradient-to-r from-[#FFC72C] to-[#FF5722] hover:from-[#FF5722] hover:to-[#8D153A] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Chat
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button onClick={toggleMobileMenu} className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-x-0 top-0 z-50 origin-top bg-background/98 backdrop-blur-md p-6 md:hidden border-b border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-background/50 to-card/50 rounded-lg p-0.5 flex items-center justify-center border border-border/20 relative overflow-visible">
                  <NavbarLotusIcon className="w-10 h-10 absolute" />
                </div>
                <span className="text-2xl font-bold text-gradient">GovLink</span>
              </Link>
              <button onClick={toggleMobileMenu} className="p-2 hover:bg-accent rounded-lg transition-colors">
                 <X className="h-5 w-5" />
                 <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="space-y-4">
              <button onClick={() => smoothScrollTo('services')} className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
                Services
              </button>
              <button onClick={() => smoothScrollTo('about')} className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
                About
              </button>
              <button onClick={() => smoothScrollTo('contact')} className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
                Contact
              </button>
              <div className="pt-4 border-t border-border">
                 <Link href="/chat" className="block w-full text-center bg-gradient-to-r from-[#FFC72C] to-[#FF5722] hover:from-[#FF5722] hover:to-[#8D153A] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                    Start Chat
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};