"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

const BookingPage = () => {
  return (
    <main className="bg-[#F8F9FA]"> {/* Premium Off-White Background */}
      <Navbar2 />
      
      <section className="relative min-h-screen pt-32 pb-20 px-4 overflow-hidden">
        {/* Subtle Luxury Pattern Layer */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23064E3B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-100 shadow-2xl rounded-[2rem] p-8 md:p-16"
          >
            <header className="mb-12 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black text-[#064E3B] uppercase tracking-tighter leading-none">
                Request a <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: "1px #064E3B" }}>Booking</span>
              </h1>
              <p className="text-gray-500 mt-4 font-medium tracking-[0.2em] uppercase text-xs">
                Your Sri Lankan escape starts here
              </p>
            </header>

            <form className="space-y-8">
              {/* NAME FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-[0.2em] mb-3">First Name</label>
                  <input type="text" placeholder="Barry" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#064E3B] transition-colors text-gray-800 font-bold placeholder:text-gray-300 bg-transparent" />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-[0.2em] mb-3">Last Name</label>
                  <input type="text" placeholder="Allen" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#064E3B] transition-colors text-gray-800 font-bold placeholder:text-gray-300 bg-transparent" />
                </div>
              </div>

              {/* WHATSAPP & EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-[0.2em] mb-3">WhatsApp Contact</label>
                  <input type="tel" placeholder="+94 7..." className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#064E3B] transition-colors text-gray-800 font-bold bg-transparent" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-[0.2em] mb-3">Your Email</label>
                  <input type="email" placeholder="example@mail.com" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#064E3B] transition-colors text-gray-800 font-bold bg-transparent" />
                </div>
              </div>

              {/* PACKAGE SELECTION */}
              <div>
                <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-[0.2em] mb-3">Choose Your Package</label>
                <select className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-[#064E3B] transition-colors text-gray-700 font-bold bg-transparent cursor-pointer appearance-none">
                  <option>8 Days Sri Lanka Classic</option>
                  <option>10 Days Adventure Tour</option>
                  <option>Luxury Honeymoon Package</option>
                  <option>Customized Journey</option>
                </select>
              </div>

              {/* SPECIAL NOTES */}
              <div>
                <label className="block text-[10px] font-black text-[#064E3B] uppercase tracking-[0.2em] mb-3">Travel Preferences / Notes</label>
                <textarea rows={4} className="w-full border-2 border-gray-50 rounded-2xl p-4 outline-none focus:border-[#064E3B] transition-all text-gray-800 font-medium bg-gray-50/50" placeholder="Tell us about your dream trip..."></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#064E3B] text-white font-black py-5 rounded-2xl shadow-xl shadow-[#064E3B]/20 uppercase tracking-[0.3em] text-xs transition-all hover:bg-[#08634b]"
              >
                Send Booking Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookingPage;