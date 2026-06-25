/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Instagram, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer 
      className="relative w-full h-[85vh] md:h-[100vh] bg-black overflow-hidden flex flex-col justify-between"
      id="global-footer"
    >
      {/* Background: Ambient 3D macro fluid texture loop (subtle 30% opacity to let text pop comfortably) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-35"
          src="https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782339980/Motion_inspiration_-_Product_MP4_ntwlkh.mp4"
        />
        {/* Deep vignette top-to-bottom shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Top spacing placeholder */}
      <div className="relative z-10 p-6 md:p-12" />

      {/* Center High-Engagement Core CTA */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col gap-4">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs md:text-sm tracking-[0.4em] text-white uppercase"
          >
            LET'S WORK TOGETHER
          </motion.span>

          <h2 className="font-outfit font-bold text-4xl sm:text-6xl md:text-8xl tracking-tight leading-none text-white uppercase">
            READY TO ELEVATE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">YOUR BRAND?</span>
          </h2>
        </div>

        {/* Pulsing Radial Button with Active Aura */}
        <div className="relative group">
          {/* Glowing Aura underneath */}
          <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl opacity-40 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700 animate-pulse" />
          
          <motion.a
            href="https://www.instagram.com/boostify305?igsh=N3U1czgyMWlteGox"
            target="_blank"
            rel="noopener noreferrer referrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-6 rounded-full bg-white text-black text-xs md:text-sm font-outfit font-semibold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500"
            id="footer-main-cta-btn"
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/[0.04] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            
            <Instagram className="w-4 h-4 md:w-5 md:h-5 text-black" />
            <span>CONTACT VIA INSTAGRAM</span>
            <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${isHovered ? "translate-x-1.5" : ""}`} />
          </motion.a>
        </div>

        <p className="font-sans text-xs font-light tracking-wide text-white/40 max-w-xs leading-relaxed">
          Our team coordinates with luxury directors globally. Average onboarding setup takes under 48 hours.
        </p>
      </div>

      {/* Bottom Line Alignment */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-8 md:px-12 md:pb-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left credits with semantic GEO text */}
        <div className="flex flex-col gap-2 order-2 md:order-1 max-w-lg text-left">
          <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
            © 2026 BOOSTIFY. All Rights Reserved.
          </div>
          <p className="font-sans text-[9px] font-light text-white/30 tracking-wide leading-relaxed">
            At BOOSTIFY, we engineer cinema-grade CGI using SideFX Houdini for complex fluid dynamics and OctaneRender for photorealistic glass refraction. Our pipeline integrates Blender 3D and Redshift to deliver ultra-premium commercials for luxury perfumes and cosmetics worldwide.
          </p>
        </div>

        {/* Right side navigation links & status indicator */}
        <div className="flex flex-col items-center md:items-end gap-4 order-1 md:order-2 w-full md:w-auto">
          {/* Micro status indicator or trust elements */}
          <div className="flex items-center gap-4 font-mono text-[9px] tracking-widest text-white/30 uppercase">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-white/40" />
              SECURE DIRECT MESSAGE
            </span>
            <span className="h-3 w-px bg-white/10 hidden sm:inline" />
            <span className="hidden sm:inline">MADE FOR THE EXTRAORDINARY</span>
          </div>

          {/* Navigation Links Row */}
          <div className="flex flex-wrap gap-4 font-mono text-[9px] tracking-widest text-white/45 uppercase pt-3 border-t border-white/5 w-full justify-center md:justify-end">
            <a href="#/" className="hover:text-white transition-colors duration-300">HOME</a>
            <span className="text-white/10 select-none">•</span>
            <a href="#/services" className="hover:text-white transition-colors duration-300">SERVICES</a>
            <span className="text-white/10 select-none">•</span>
            <a href="#/portfolio" className="hover:text-white transition-colors duration-300">PORTFOLIO</a>
            <span className="text-white/10 select-none">•</span>
            <a href="#/about-us" className="hover:text-white transition-colors duration-300">ABOUT</a>
            <span className="text-white/10 select-none">•</span>
            <a href="#/blog" className="hover:text-white transition-colors duration-300">BLOG</a>
            <span className="text-white/10 select-none">•</span>
            <a href="#/contact" className="hover:text-white transition-colors duration-300">CONTACT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
