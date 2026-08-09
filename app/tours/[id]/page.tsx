"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getTourBySlug } from "../data";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

export default function TourDetailPage() {
  const params = useParams();
  const slug = params.id as string;
  const tour = getTourBySlug(slug);
  const [openDay, setOpenDay] = useState<number | null>(0);

  if (!tour) {
    return (
      <>
        <Navbar2 />
        <main className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
          <div className="text-center px-6">
            <h1 className="text-6xl font-black text-[#064E3B] mb-4">404</h1>
            <p className="text-gray-500 text-lg mb-8">
              Tour not found. It may have been removed or the link is incorrect.
            </p>
            <Link
              href="/packages"
              className="bg-[#064E3B] text-white px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-[#065F46] transition-all"
            >
              Browse All Packages
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar2 />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16">
          {/* Tag & Sale Badges */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-white/20">
              {tour.tag}
            </span>
            <span className="bg-red-500 text-white text-[10px] font-black tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg">
              {tour.sale}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-4"
            style={{
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            {tour.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-lg max-w-2xl leading-relaxed"
          >
            {tour.description}
          </motion.p>
        </div>
      </section>

      {/* ─── QUICK INFO BAR ─── */}
      <section className="bg-[#064E3B] text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center md:text-left">
            <p className="text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-1">
              Duration
            </p>
            <p className="font-bold text-sm">{tour.duration}</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-1">
              Price From
            </p>
            <p className="font-bold text-sm">{tour.price}</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-1">
              Group Size
            </p>
            <p className="font-bold text-sm">{tour.groupSize}</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-1">
              Type
            </p>
            <p className="font-bold text-sm">{tour.tag} Tour</p>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW & HIGHLIGHTS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Overview */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#064E3B] font-bold tracking-[0.4em] uppercase text-xs mb-3 block">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-6">
                  About This Tour
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {tour.longDescription}
                </p>
              </motion.div>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100"
              >
                <h3 className="text-lg font-black text-[#064E3B] mb-5 tracking-tight">
                  ✦ Tour Highlights
                </h3>
                <ul className="space-y-3">
                  {tour.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#064E3B] mt-0.5 flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ITINERARY ─── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#064E3B] font-bold tracking-[0.4em] uppercase text-xs mb-3 block">
              Day by Day
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Your Itinerary
            </h2>
          </motion.div>

          <div className="space-y-4">
            {tour.itinerary.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenDay(openDay === i ? null : i)}
                  className={`w-full text-left rounded-2xl transition-all duration-300 ${
                    openDay === i
                      ? "bg-white shadow-lg border border-gray-100"
                      : "bg-white/60 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-5 p-5 md:p-6">
                    {/* Day Number */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-sm transition-colors duration-300 ${
                        openDay === i
                          ? "bg-[#064E3B] text-white"
                          : "bg-emerald-50 text-[#064E3B]"
                      }`}
                    >
                      {String(day.day).padStart(2, "0")}
                    </div>

                    {/* Title & Location */}
                    <div className="flex-grow min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base truncate">
                        {day.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-0.5">
                        {day.location}
                      </p>
                    </div>

                    {/* Toggle Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openDay === i
                          ? "bg-[#064E3B] text-white rotate-180"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {openDay === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 md:px-6 md:pb-6 pl-[4.75rem] md:pl-[5.25rem]">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOTELS / ACCOMMODATION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#064E3B] font-bold tracking-[0.4em] uppercase text-xs mb-3 block">
              Where You&apos;ll Stay
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Accommodation
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
              Handpicked hotels and resorts. Properties may vary based on availability — we always guarantee equivalent or higher quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tour.hotels.map((hotel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-[#064E3B]/20 transition-all duration-300 group"
              >
                {/* Hotel Icon */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#064E3B] mb-4 group-hover:bg-[#064E3B] group-hover:text-white transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4v18" />
                    <path d="M19 21V11l-6-4" />
                    <path d="M9 9h1" />
                    <path d="M9 13h1" />
                    <path d="M9 17h1" />
                  </svg>
                </div>

                {/* Hotel Name */}
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {hotel.name}
                </h4>

                {/* Location */}
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mb-3">
                  {hotel.location}
                </p>

                {/* Stars & Nights */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: hotel.stars }).map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#064E3B" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                    {Array.from({ length: 5 - hotel.stars }).map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-[#064E3B] tracking-wider uppercase bg-emerald-50 px-2.5 py-1 rounded-full">
                    {hotel.nights} {hotel.nights === 1 ? "Night" : "Nights"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INCLUDES / EXCLUDES ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Includes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100"
            >
              <h3 className="font-black text-[#064E3B] text-sm tracking-[0.2em] uppercase mb-6">
                ✓ What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {tour.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Excludes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-8 border border-red-100"
            >
              <h3 className="font-black text-red-700 text-sm tracking-[0.2em] uppercase mb-6">
                ✕ Not Included
              </h3>
              <ul className="space-y-3">
                {tour.excludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20 bg-[#064E3B] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 opacity-5 select-none pointer-events-none">
          <h1 className="text-[180px] font-black text-white leading-none">
            CEYLON
          </h1>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Ready to go?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Book This Adventure
            </h2>
            <p className="text-emerald-100/80 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Secure your spot on this incredible journey through Sri Lanka. Our
              team will customize every detail to make it perfect for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="bg-white text-[#064E3B] px-10 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  Book This Tour
                </button>
              </Link>
              <Link
                href="https://wa.me/qr/7QLTL3XRQMITA1"
                target="_blank"
              >
                <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300 hover:border-white/60">
                  Ask a Question
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
