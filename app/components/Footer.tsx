import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-[#064E3B] text-white pt-20 pb-10 px-6 overflow-hidden relative">
      {/* Decorative Overhang Logo (Optional) */}
      <div className="absolute -bottom-20 -right-20 opacity-5 select-none pointer-events-none">
         <h1 className="text-[200px] font-black">SERENCEY</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* BRAND COLUMN */}
        <div className="">
          <Image 
            src="/Untitled_design__1_-removebg-preview.png" 
            alt="SerenCey Logo" 
            width={500} 
            height={500} 
            className="brightness-0 invert mb-0 h-auto w-100" 
          />
          {/* <p className="text-emerald-100/70 text-sm max-w-sm leading-relaxed mb-6">
            Crafting luxury journeys that bridge the gap between freedom and elegance. Explore Sri Lanka through the eyes of locals.
          </p> */}
          <div className="flex space-x-4">
             {/* Social Icons would go here */}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-emerald-300">Explore</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-emerald-300 transition-colors">About Us</Link></li>
            <li><Link href="/packages" className="hover:text-emerald-300 transition-colors">Tour Packages</Link></li>
            <li><Link href="/booking" className="hover:text-emerald-300 transition-colors">Book a Trip</Link></li>
          </ul>
        </div>
        
        <div className="flex space-x-6 mt-0">
  {/* INSTAGRAM */}
  
  <Link href="https://www.instagram.com/serencey_journeys" target="_blank" className="text-emerald-100/50 hover:text-white transition-all hover:scale-110">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </Link>

  {/* YOUTUBE */}
  <Link href="https://www.youtube.com/@serenceyVlogs" target="_blank" className="text-emerald-100/50 hover:text-white transition-all hover:scale-110">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
    </svg>
  </Link>

  {/* FACEBOOK */}
  <Link href="https://www.facebook.com/your_page" target="_blank" className="text-emerald-100/50 hover:text-white transition-all hover:scale-110">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  </Link>
</div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-emerald-300">Contact</h4>
          <ul className="space-y-4 text-sm text-emerald-100/80">
            <li className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-emerald-400">WhatsApp</span>
              <span className="font-bold">+94 712345678</span>
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-emerald-400">Email</span>
              <span className="font-bold">hello@serencey.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-200/50">
          © 2026 SerenCey . All rights reserved.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-200/50">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;