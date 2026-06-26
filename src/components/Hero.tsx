/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { MousePointerClick } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax values for the typography
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-end luxury feel
  const springX = useSpring(x, { damping: 20, stiffness: 100 });
  const springY = useSpring(y, { damping: 20, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate cursor position from center normalized (-0.5 to 0.5)
    const normalizedX = (e.clientX / width) - 0.5;
    const normalizedY = (e.clientY / height) - 0.5;

    // Subtle opposite offset (e.g. max 25px offset)
    x.set(normalizedX * -30);
    y.set(normalizedY * -30);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Headline split-words
  const words = "CRAFTING DIGITAL SENSATIONS".split(" ");

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-screen h-screen overflow-hidden bg-black flex flex-col justify-end"
      id="hero-section"
    >
      {/* Background Video (100% Opacity, crisp, no dark mask) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
        src="https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340281/DIOR_-_SAUVAGE___Commercial_in_Blender_MP4_d4zlom.mp4"
      />

      {/* Asymmetric Typography Overlay (Subtle Parallax Offset) */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:px-12 md:pb-24 pointer-events-none flex flex-col gap-6"
      >
        <div className="flex flex-col gap-3">
          {/* Tagline/Category Indicator */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="h-px w-8 bg-white/40"></span>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/70 uppercase">
              COSMIC VISUAL PRODUCTION STUDIO
            </span>
          </motion.div>

          {/* High-fashion, futuristic typography split text */}
          <h1 className="font-outfit font-bold text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.95] tracking-tight text-white select-none">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block overflow-hidden mr-3 md:mr-6 pb-2">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1.4, 
                    delay: 0.3 + (wordIndex * 0.15),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subtext - Premium description */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-2">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm md:text-base font-light tracking-wide text-white/80 max-w-md leading-relaxed"
          >
            Premium 3D Commercials & CGI Animations for Luxury Brands. Blending physics, light, and neural fluid mechanics to elevate digital products into sculptures.
          </motion.p>

          {/* Micro interaction helper */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
            className="hidden md:flex items-center gap-2 text-[10px] font-mono tracking-widest text-white/50"
          >
            <MousePointerClick className="w-3 h-3" />
            MOVE CURSOR TO EXPERIENCE DEPTH
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
