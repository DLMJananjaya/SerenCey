"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/5">
      {/* FIXED: Changed h-17 to h-20 (mobile) and h-28 (desktop) to fit the logo */}
      <div className="w-full px-4 md:px-11 h-20 md:h-17 flex items-center justify-between relative">
        
        {/* --- LOGO SECTION (LEFT) --- */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/Untitled_design__1_-removebg-preview.png" 
              alt="SerenCey Logo"
              width={400} 
              height={400} 
              /* FIXED: Responsive heights h-14 (mobile), h-20 (tablet), h-40 (desktop) */
              className="h-39 md:h-20 lg:h-50 w-auto object-contain translate-y-1"
              priority
            />
          </Link>
        </div>

        {/* --- CENTER LINKS (ABSOLUTE CENTERING) --- */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-10 transition-all">
          <Link href="/" className="group relative font-black text-sm tracking-wide">
            <span 
              className="text-[#064E3B] transition-all duration-500 group-hover:text-[#065F46]"
              style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }}
            >
              Home
            </span>
          </Link>

          <Link href="/about" className="group relative font-black text-sm tracking-wide">
            <span 
              className="text-[#064E3B] transition-all duration-600 group-hover:text-[#065F46]"
              style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }}
            >
              About Us
            </span>
          </Link>
        </div>

        {/* --- CONTACT BUTTON (RIGHT) --- */}
        <div className="hidden md:flex items-center">
          <Link href="https://wa.me/qr/7QLTL3XRQMITA1" target="_blank" rel="noopener noreferrer"> 
             <button className="bg-[#064E3B] hover:bg-[#065F46] text-white font-black px-5 py-2 rounded-xl transition-all shadow-lg text-xs uppercase tracking-widest">
              Contact Us
            </button>
          </Link>
        </div>

        {/* --- MOBILE HAMBURGER ICON --- */}
        <div className="md:hidden flex items-center">
            
          <button 
  onClick={() => setIsOpen(!isOpen)} 
  className="text-[#064E3B] p-2 focus:outline-none px-0 transition-all duration-300"
  /* FIXED: Style is now a prop inside the opening tag */
  style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }}
>
  {isOpen ? (
    <X size={30} className="text-[#064E3B]" /> 
  ) : (
    <Menu size={30} />
  )}
</button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className="md:hidden bg-white shadow-lg absolute top-16 w-full left-0 z-50"></div>
<AnimatePresence>
  {isOpen && (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      /* 1. bg-white/5 + backdrop-blur: This IS the glass.
         2. pointer-events-auto: This ensures you can actually click/hover the links.
         3. z-index: Higher than images, lower than Navbar logo.
      */
      
      style={{ WebkitBackdropFilter: 'blur(20px)' }} 
    >
      <div className="flex flex-col items-center p-12 space-y-10 relative z-50">
        
        {/* HOME LINK WITH HOVER */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)} 
          className="group relative transition-all duration-300"
        >
          <span className="text-[#064E3B] font-black text-xs tracking-[0.5em] uppercase group-hover:text-[#064E3B] transition-colors duration-300"
          style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }}
          >
            Home
          </span>
          {/* Subtle underline hover effect */}
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#064E3B] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        {/* ABOUT LINK WITH HOVER */}
        <Link 
          href="/about" 
          onClick={() => setIsOpen(false)} 
          className="group relative transition-all duration-300"
        >
          <span className="text-[#064E3B] font-black text-xs tracking-[0.5em] uppercase group-hover:text-[#064E3B] transition-colors duration-300"
          style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))" }}
          >
            About Us
          </span>
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#064E3B] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* BUTTON WITH HOVER SCALE */}
        <Link href="https://wa.me/qr/7QLTL3XRQMITA1" target="_blank" className="w-full max-w-[200px]">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#064E3B" }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg transition-all border border-transparent hover:border-[#064E3B]"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      
    </nav>
  );
};

export default Navbar;