"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Importing your specific logo! 
// (Using ../../ to climb out of app/components to reach the public folder)
import logoImg from '../../public/logoNav.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md relative z-50">
      
      {/* 2. Your New Logo Section */}
      <Link href="/">
        <Image 
          src={logoImg} 
          alt="SerenCey Travel Logo" 
          width={150} 
          height={50} 
          priority // Loads the logo instantly
          className="h-10 w-auto" // Keeps the height consistent
        />
      </Link>

      {/* 3. Desktop Menu Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-800 hover:text-green-600 font-medium">Home</Link>
        <Link href="/about" className="text-gray-800 hover:text-green-600 font-medium">About Us</Link>
        <Link href="/contact" className="text-gray-800 hover:text-green-600 font-medium">Contact</Link>
      </div>

      {/* 4. Mobile Hamburger Button */}
      <button 
        className="md:hidden text-gray-800 p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* 5. Mobile Menu (Using the safe wrapper div we fixed earlier) */}
      <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden' }}
              className="flex flex-col px-4 pt-2 pb-4 space-y-3"
            >
              <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-green-600">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-green-600">About Us</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-green-600">Contact Us</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    </nav>
  );
}
