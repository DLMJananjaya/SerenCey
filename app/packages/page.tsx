"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { tours } from "../tours/data";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const categories = ["All", "Classic", "Adventure", "Luxury"];

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? tours
      : tours.filter(
        (t) => t.tag.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <main className="bg-[#F8F9FA]">
      <Navbar2 />

      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[50vh] min-h-[380px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero/59.jpg"
            alt="Sri Lanka Tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#064E3B]/50 via-[#064E3B]/30 to-[#064E3B]/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-emerald-300/80 font-bold tracking-[0.5em] uppercase text-xs mb-6 block"
          >
            Explore Sri Lanka
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-4"
            style={{ textShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}
          >
            Tour <span className="text-emerald-300">Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Handcrafted journeys through the Pearl of the Indian Ocean.
            Choose your perfect Sri Lankan adventure.
          </motion.p>
        </div>
      </section>

      {/* ─── FILTERS ─── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 ${activeCategory === cat
                    ? "bg-[#064E3B] text-white shadow-lg shadow-[#064E3B]/20"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOUR CARDS GRID ─── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No tours found in this category yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#064E3B]/20 flex flex-col md:flex-row"
                >
                  {/* Image Side */}
                  <div className="relative w-full md:w-2/5 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black tracking-wider px-3 py-1 rounded-full border border-white/20">
                        {tour.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white text-[10px] font-black tracking-wider px-3 py-1 rounded-full">
                        {tour.sale}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 tracking-tight mb-2 leading-tight group-hover:text-[#064E3B] transition-colors">
                        {tour.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#064E3B] font-black text-lg">
                          {tour.price}
                        </span>
                        <span className="text-gray-400 text-[10px] font-bold tracking-wider uppercase">
                          {tour.duration}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {tour.description}
                      </p>
                      {/* Mini Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tour.highlights.slice(0, 3).map((h, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold text-[#064E3B] bg-emerald-50 px-3 py-1 rounded-full tracking-wide"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/tours/${tour.slug}`}
                      className="w-full bg-[#064E3B] hover:bg-[#065F46] text-white text-center py-3 rounded-xl text-xs font-black tracking-widest uppercase transition-all hover:shadow-lg"
                    >
                      View Full Itinerary
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── CUSTOM TOUR CTA ─── */}
      <section className="py-20 bg-[#064E3B] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 opacity-5 select-none pointer-events-none">
          <h1 className="text-[180px] font-black text-white leading-none">
            CUSTOM
          </h1>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Something Different?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Design Your Own Journey
            </h2>
            <p className="text-emerald-100/80 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Can&apos;t find exactly what you&apos;re looking for? Let us create a
              bespoke Sri Lankan adventure tailored entirely to your
              preferences, pace, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="bg-white text-[#064E3B] px-10 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  Request Custom Tour
                </button>
              </Link>
              <Link
                href="https://wa.me/qr/7QLTL3XRQMITA1"
                target="_blank"
              >
                <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300 hover:border-white/60">
                  Chat on WhatsApp
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
