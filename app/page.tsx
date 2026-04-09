"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Link from 'next/link';
import Login from './login/page';
import Footer from './components/Footer';

const images = [
  "/hero/1.jpg",
  "/hero/13.jpg",
  "/hero/16.jpeg",
  "/hero/17.jpeg",
  "/hero/21.jpeg",
  "/hero/47.jpg"
  ];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <Navbar />
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212]">
      
      {/* --- SEAMLESS BACKGROUND SLIDESHOW --- */}
<div className="absolute inset-0 z-0 bg-black">
  {/* Removed mode="wait" to allow images to overlap during transition */}
  <AnimatePresence initial={false}>
    <motion.img
      key={index}
      src={images[index]}
      // Cross-fade + Blur effect
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ 
        duration: 1.5, // Smooth transition time
        ease: "easeInOut" 
      }}
      // 'absolute' is critical so images sit on top of each other
      className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
    />
  </AnimatePresence>
</div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="relative z-10 text-center px-6 pt-40">
        
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-gray-200 font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
        >
          Crafting journeys that let you
          
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-none"
        >
          Map your <br/>

          <span className="text-transparent border-text">
            
            Freedom</span>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-6">
  {/* Correct Next.js Link with Capital 'L' */}
  <div className="flex flex-col sm:flex-row gap-5 justify-center mt-6">
          {/*  */}
        {/* <div className="hidden md:flex items-center"> */}
         <Link href="/booking" className="block w-fit mx-auto">
  {/* 2. The Button goes on the INSIDE */}
  <button className="bg-[#064E3B] text-white px-10 py-5 rounded-xl font-black text-lg tracking-widest hover:bg-white hover:text-[#064E3B] transition-all uppercase shadow-2xl hover:scale-105 active:scale-95 pointer-events-auto">
    Discover More
  </button>
</Link>
            
        </div>


                  {/* Optional: Our Packages Button */}
                      { /* <Link href="/packages">
                      <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl font-black text-xs tracking-widest hover:bg-white hover:text-black transition-all uppercase shadow-xl hover:scale-105 active:scale-95">
                           Our Packages
                            </button>
                              </Link> 
                                         */}
   </div>
          
          
        </motion.h1>

        {/* <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-gray-300 font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
        >
          into unforgettable experiences.
          
        </motion.span> */}
        
        
      </div>

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1.5px white;
        }
        @media (min-width: 768px) {
          .border-text {
            -webkit-text-stroke: 3px white;
          }
        }
      `}</style>
      
    </section>

    <section id ="login">
      <Login/>
    </section>

    <Footer />
    
    
    </>
    
  );
}