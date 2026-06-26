/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  keywords: string;
  techStack: string[];
}

const CAPABILITIES: Capability[] = [
  {
    id: "premium-3d",
    number: "01",
    title: "Premium 3D Commercials",
    description: "Cinema-grade product videos and commercials for luxury perfume, cosmetics, and spirits. We model light refraction, realistic material micro-textures, and high-fashion aesthetics.",
    details: [
      "Photorealistic glass and liquid rendering of perfume containers.",
      "Studio lighting setups mimicking classic high-end photography.",
      "Volumetric atmosphere, dust passes, and realistic lens depth-of-field."
    ],
    keywords: "Blender 3D, CGI Commercials, Product Renders, Luxury Brand Advertising, Photorealism",
    techStack: ["Blender", "OctaneRender", "Houdini"]
  },
  {
    id: "fluid-simulation",
    number: "02",
    title: "Fluid Dynamics & Particles",
    description: "Advanced simulation of viscous liquids, flowing gold, splashing caramel, or volumetric smoke. Perfect for cosmetic eruptions, melting chocolates, and dynamic marine scent experiences.",
    details: [
      "High-viscosity fluid physics modeling (honey, molten chocolate, syrups).",
      "Dynamic splash mechanics and particle emission grids.",
      "Atmospheric fog, vapor clouds, and hyper-detailed smoke simulations."
    ],
    keywords: "Fluid Simulation CGI, Liquid Dynamics, Particle FX, High-Viscosity Physics, Flip Fluids",
    techStack: ["Houdini FX", "RealFlow", "MantaFlow"]
  },
  {
    id: "cgi-art-direction",
    number: "03",
    title: "CGI Art Direction & Cinematic CGI",
    description: "Translating brand DNA into highly creative 3D sensory concepts. We design abstract, futuristic, and neural worlds that evoke direct emotional responses from luxury clientele.",
    details: [
      "Custom concept art and storyboard mapping for commercial campaigns.",
      "Asymmetric layouts and Swiss modern digital-art aesthetics.",
      "Precision pacing, timing, and dynamic audio-visual synchronization."
    ],
    keywords: "CGI Art Direction, Creative Director 3D, Luxury Brand Strategy, Motion Graphics, Visual FX",
    techStack: ["DaVinci Resolve", "After Effects", "Figma"]
  }
];

export default function StudioCapabilities() {
  const [activeTab, setActiveTab] = useState<string>("premium-3d");

  return (
    <section 
      className="relative w-full bg-black px-6 md:px-12 py-20 md:py-40 border-t border-white/5"
      id="studio-capabilities"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
        
        {/* Semantic Headers - Optimized for AI Agents */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.3em] text-white/50">
              03 // STUDIO CAPABILITIES
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-5xl tracking-tight uppercase">
              Technical Pipeline & CGI Services
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm font-light tracking-wide text-white/40 max-w-sm leading-relaxed">
            A comprehensive overview of our technical frameworks, custom rendering pipelines, and high-performance simulation capabilities.
          </p>
        </div>

        {/* Tab Layout - Deep Minimalism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Left: Interactive Tab Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {CAPABILITIES.map((cap) => {
              const isActive = activeTab === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  className="w-full text-left p-6 md:p-8 rounded-none border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 flex items-start gap-4 group cursor-pointer"
                  style={{
                    borderColor: isActive ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.05)",
                    background: isActive ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.01)"
                  }}
                  aria-label={`View details for ${cap.title}`}
                >
                  <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors duration-300 mt-1">
                    {cap.number}
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="font-outfit font-semibold text-lg md:text-xl text-white uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-500">
                      {cap.title}
                    </h3>
                    <p className="font-sans text-xs font-light text-white/50 line-clamp-2 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Content Display with entrance animation */}
          <div className="lg:col-span-7 min-h-[350px] relative">
            <AnimatePresence mode="wait">
              {CAPABILITIES.map((cap) => {
                if (cap.id !== activeTab) return null;
                return (
                  <motion.div
                    key={cap.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-8 p-6 md:p-10 border border-white/10 bg-white/[0.02]"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start border-b border-white/5 pb-6">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                          CGI SPECIFICATION PIPELINE
                        </span>
                        <h4 className="font-outfit font-bold text-2xl text-white uppercase tracking-wide">
                          {cap.title}
                        </h4>
                      </div>
                      <div className="flex gap-2">
                        {cap.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2.5 py-1 bg-white/5 rounded-none font-mono text-[9px] tracking-wider text-white/60 uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features checklist (High density semantics) */}
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">
                        Core Pipeline Standards
                      </span>
                      <ul className="flex flex-col gap-3">
                        {cap.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 w-3 h-3 rounded-full bg-white/10 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-white/80" />
                            </span>
                            <span className="font-sans text-xs md:text-sm font-light text-white/70 leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hidden/Semantic keywords for AIO search crawlers */}
                    <div className="mt-4 pt-6 border-t border-white/5">
                      <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase block mb-2">
                        Target Advertising Niches
                      </span>
                      <p className="font-mono text-[10px] tracking-wide text-white/40 leading-relaxed">
                        {cap.keywords}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
