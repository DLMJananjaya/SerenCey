"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Local Expertise",
    description: "Born and raised in Sri Lanka, we know every hidden gem, secret trail, and local favorite that no guidebook will tell you.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Crafted with Care",
    description: "Every journey is handcrafted to your preferences. No cookie-cutter tours — just authentic, personalized experiences.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "From the moment you land to your last sunset, our team is always just a message away. Travel worry-free.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero/47.jpg"
            alt="Sri Lanka landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#064E3B]/45 via-[#064E3B]/30 to-[#064E3B]/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-emerald-300/80 font-bold tracking-[0.5em] uppercase text-xs mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-6"
            style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}
          >
            About <span className="text-emerald-300">SerenCey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We don&apos;t just plan trips — we craft journeys that let you discover the soul of Sri Lanka.
          </motion.p>
        </div>
      </section>

      {/* ─── MISSION SECTION ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30">
          <svg viewBox="0 0 500 500" preserveAspectRatio="none" className="w-full h-full">
            <path d="M200,0 C350,200 100,400 500,250 L500,0 Z" fill="#ecfdf5" />
            <path d="M300,0 C400,250 150,350 500,300 L500,0 Z" fill="#d1fae5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-[#064E3B] font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              Who We Are
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-6"
            >
              Mapping Your Freedom
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-[#064E3B] mx-auto mb-8 rounded-full" />
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              SerenCey was born from a love for Sri Lanka and a desire to share its magic with the world.
              We are a team of passionate locals and travel enthusiasts who believe every journey should
              be as unique as the traveler. From ancient temples to pristine beaches, misty mountains to
              wild safaris — we open doors to experiences you never knew existed.
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={index}
                className="group bg-white border border-gray-100 rounded-2xl p-8 text-center
                           hover:shadow-xl hover:border-[#064E3B]/20 transition-all duration-500
                           hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-50 flex items-center justify-center
                                text-[#064E3B] group-hover:bg-[#064E3B] group-hover:text-white transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SRI LANKA ─── */}
      <section className="py-24 bg-[#064E3B] relative overflow-hidden">
        {/* Decorative watermark */}
        <div className="absolute -bottom-10 -right-10 opacity-5 select-none pointer-events-none">
          <h1 className="text-[180px] font-black text-white leading-none">CEYLON</h1>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src="/hero/1.jpg" alt="Sri Lanka scenery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="/hero/47.jpg" alt="Sri Lanka culture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="/hero/13.jpg" alt="Sri Lanka wildlife" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src="/hero/16.jpeg" alt="Sri Lanka beaches" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-emerald-400 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
                The Pearl of the Indian Ocean
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 leading-tight">
                Why Sri Lanka?
              </h2>
              <div className="space-y-6 text-emerald-100/80 text-base leading-relaxed">
                <p>
                  A land where ancient ruins stand alongside lush rainforests. Where golden beaches
                  stretch for miles and misty highlands reveal endless tea plantations. Sri Lanka is
                  a compact island with an extraordinary diversity of experiences.
                </p>
                <p>
                  From the rock fortress of Sigiriya to the whale-watching waters of Mirissa,
                  from the spiritual heart of Kandy to the untamed wilderness of Yala — every
                  corner of this island tells a story waiting to be discovered.
                </p>
                <p>
                  With SerenCey, you don&apos;t just visit Sri Lanka — you <strong className="text-white">live</strong> it.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <button className="bg-white text-[#064E3B] px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase
                                     hover:bg-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                    Plan Your Journey
                  </button>
                </Link>
                <Link href="https://wa.me/qr/7QLTL3XRQMITA1" target="_blank">
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase
                                     hover:bg-white/10 transition-all duration-300 hover:border-white/60">
                    Talk to Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MEET THE TEAM ─── */}


      {/* ─── CTA SECTION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-6"
            >
              Ready to Explore?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Let us craft an unforgettable Sri Lankan adventure tailored just for you.
              Your journey starts with a single message.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link href="/booking">
                <button className="bg-[#064E3B] text-white px-12 py-5 rounded-xl font-black text-sm tracking-widest uppercase
                                   hover:bg-[#065F46] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
                  Start Your Journey
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;