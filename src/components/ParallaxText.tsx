/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface WordProps {
  key?: number | string;
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  // Translate scroll progress range to opacity, slight scale, and slight text blur
  const opacity = useTransform(progress, range, [0.12, 1]);
  const scale = useTransform(progress, range, [0.96, 1]);
  const blur = useTransform(progress, range, ["blur(2px)", "blur(0px)"]);

  return (
    <motion.span 
      style={{ opacity, scale, filter: blur }}
      className="inline-block mr-3 md:mr-6 transition-all duration-300 font-outfit uppercase font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-none text-white select-none"
    >
      {children}
    </motion.span>
  );
}

export default function ParallaxText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this text block specifically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when the top of the container enters the bottom of the viewport
    // End tracking when the bottom of the container leaves the top of the viewport
    offset: ["start 80%", "end 20%"]
  });

  const statement = "WE DON'T JUST RENDER PRODUCTS. WE ANIMATE SOULS.";
  const words = statement.split(" ");

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-black py-24 md:py-48 flex items-center justify-center overflow-hidden"
      id="cinematic-poetry-block"
    >
      {/* Decorative luxury abstract radial background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 text-center md:text-left">
        {/* Step indicator */}
        <div className="flex justify-center md:justify-start">
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"></span>
            02 // THE MANIFESTO
          </span>
        </div>

        {/* Word-by-word reveal container */}
        <div className="flex flex-wrap justify-center md:justify-start max-w-5xl leading-none">
          {words.map((word, index) => {
            // Distribute active ranges evenly across scroll progress
            const start = index / words.length;
            const end = (index + 1) / words.length;
            return (
              <Word 
                key={index} 
                progress={scrollYProgress} 
                range={[start, end]}
              >
                {word}
              </Word>
            );
          })}
        </div>

        {/* Cinematic subtitle details */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-between items-center mt-6 border-t border-white/5 pt-8 font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase"
        >
          <div>CGI DIRECTED BY BOOSTIFY LABS</div>
          <div>ESTABLISHED 2026 // NEURAL FLUID INTEGRATED</div>
        </motion.div>
      </div>
    </div>
  );
}
