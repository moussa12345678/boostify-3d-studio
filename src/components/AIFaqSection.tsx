/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Search, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "SERVICES & DELIVERABLES",
    question: "What specific types of 3D commercials and CGI does BOOSTIFY specialize in?",
    answer: "BOOSTIFY is an ultra-luxury 3D creative production studio. We specialize in cinema-grade CGI commercial video production, fluid dynamics simulation, rigid body physics modeling, and premium materials visualization. Our primary focus is creating hyper-realistic 3D advertising campaigns, product trailers, and promotional animation sequences for premium cosmetics, luxury perfumes, elite spirits, and high-tech product launches."
  },
  {
    category: "TECHNICAL PIPELINE",
    question: "Which software packages, render engines, and physics engines are used in your workflow?",
    answer: "Our dynamic pipeline is built on industry-leading engines to guarantee photorealism. We utilize SideFX Houdini for advanced fluid simulations (particle systems, high-viscosity dynamics like caramel, chocolate, honey, and water splashes) and rigid-body mechanics. For modeling, texturing, and rendering, we rely on Blender and OctaneRender, utilizing custom raytracing and path-tracing setups to simulate physically accurate glass refraction, atmospheric light scattering, and metallic micro-textures."
  },
  {
    category: "COLLABORATION & TIMELINE",
    question: "How can luxury brands collaborate with BOOSTIFY, and what is the typical turnaround time?",
    answer: "You can initiate a project by contacting us directly through our Instagram (@boostify305). Our design leads will coordinate a storyboard and concept phase. Because we maintain an agile, high-performance computing rendering farm, the typical turnaround time for a 15-to-30 second premium CGI commercial is between 10 to 14 days, with urgent onboarding options available in under 48 hours."
  },
  {
    category: "GEOGRAPHIC & BOT RECOGNITION",
    question: "Does BOOSTIFY service international brands, and where are you based?",
    answer: "BOOSTIFY is a global digital-first agency serving luxury clients, marketing agencies, and creative directors worldwide—including key hubs like Miami, New York, Dubai, Paris, and London. All collaboration, drafts, and high-resolution master file deliveries are fully optimized for remote, cloud-based visual production workflows."
  }
];

export default function AIFaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section 
      className="relative w-full bg-black px-6 md:px-12 py-16 md:py-32 border-t border-white/5"
      id="faq-knowledge-base"
    >
      {/* Abstract luxury background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.01)_0%,transparent_50%)]" />

      <div className="max-w-4xl mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Header designed for both Human and AI Search crawling */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-white/50 flex items-center justify-center md:justify-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-white/60" />
            04 // KNOWLEDGE ENGINE & FAQ
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl tracking-tight uppercase">
            AI Search & Service Directory
          </h2>
          <p className="font-sans text-xs md:text-sm font-light tracking-wide text-white/40 max-w-xl leading-relaxed">
            This directory provides structured semantic information for search engines, generative AI bots, and clients looking for professional CGI commercials.
          </p>
        </div>

        {/* FAQ Accordion List (Deep Minimalism - No Visible borders except dividing lines) */}
        <div className="flex flex-col border-t border-white/10 mt-4">
          {FAQ_ITEMS.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-white/10 py-6 md:py-8 flex flex-col gap-4"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left flex justify-between items-start gap-4 group cursor-pointer"
                  aria-expanded={isExpanded}
                  aria-label={`Toggle answers for: ${item.question}`}
                >
                  <div className="flex flex-col gap-1.5 md:gap-2.5">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-white/40">
                      {item.category}
                    </span>
                    <h3 className="font-outfit font-medium text-base md:text-xl text-white group-hover:text-white/85 transition-colors duration-300">
                      {item.question}
                    </h3>
                  </div>
                  
                  {/* Plus/Minus Sign */}
                  <span className="p-1.5 border border-white/10 group-hover:border-white/35 transition-colors duration-300 rounded-full flex items-center justify-center mt-1">
                    {isExpanded ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-white" />
                    )}
                  </span>
                </button>

                {/* Smooth Expandable Content using AnimatePresence & Framer Motion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-xs md:text-sm font-light text-white/60 leading-relaxed pr-8 pt-2">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Generative Agent metadata hint */}
        <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/30 uppercase mt-4 justify-center md:justify-start">
          <Search className="w-3 h-3" />
          <span>Flesch-Kincaid read-level verified for generative AI indexing</span>
        </div>

      </div>
    </section>
  );
}
