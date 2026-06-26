/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, GlassWater, Cookie, Smartphone, Car, Gem } from "lucide-react";

interface Industry {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  pipelineDetails: string;
}

const INDUSTRIES: Industry[] = [
  {
    id: "cosmetics",
    name: "Luxury Perfumes & Cosmetics",
    icon: Sparkles,
    description: "Hyper-realistic glass refraction, fluid gold simulations, and neural fluid dynamics representing elite fragrances.",
    pipelineDetails: "Flint Glass IOR 1.52 // Abbe Dispersion // Volumetric Caustics"
  },
  {
    id: "beverages",
    name: "Beverages & Spirits",
    icon: GlassWater,
    description: "High-velocity fluid kinetics, complex splash grids, ice particles, and slow-motion condensation physics.",
    pipelineDetails: "Houdini FLIP Solvers // Air-Entrained Bubble Grids // Wave Collision"
  },
  {
    id: "food",
    name: "Food & Confectionery",
    icon: Cookie,
    description: "Viscous chocolate flows, caramel drip simulations, and organic surface textures for artisan brands.",
    pipelineDetails: "High-Viscosity Constant (2500) // Mesh OpenVDB Voxel 0.005 // Surface Tension"
  },
  {
    id: "tech",
    name: "Tech & Consumer Electronics",
    icon: Smartphone,
    description: "Sleek mechanical builds, holographic interface glow, and custom metallic shaders for premium product launches.",
    pipelineDetails: "Sub-pixel Shaders // Dynamic Emissive Grids // CNC Metal Satin Texture"
  },
  {
    id: "automotive",
    name: "Automotive & Luxury Vehicles",
    icon: Car,
    description: "Cinematic studio layouts, environmental light sweeps, and extreme detail automotive visual representations.",
    pipelineDetails: "Anisotropic Carbon Fiber // Path-Traced Clear Coat // Unreal Lumen Real-time"
  },
  {
    id: "jewelry",
    name: "Jewelry & Watches",
    icon: Gem,
    description: "Complex watch gear mechanisms, absolute macro camera tracking, diamond scattering, and premium gemstone caustics.",
    pipelineDetails: "Prismatic Dispersion // Micro-facet Roughness Shaders // Specular Max Depth 24"
  }
];

export default function IndustriesWeServe() {
  return (
    <section 
      className="relative w-full bg-black px-6 md:px-12 py-16 md:py-32 border-t border-white/5"
      id="industries-section"
    >
      {/* Background Subtle Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.3em] text-white/50">
              02 // INDUSTRIES WE SERVE
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-5xl tracking-tight uppercase">
              Industries We Transform
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm font-light tracking-wide text-white/40 max-w-sm leading-relaxed">
            BOOSTIFY Labs crafts hyper-realistic 3D advertising campaigns tailored for premium sectors. We do not use presets; every industry features custom-coded visual pipelines.
          </p>
        </div>

        {/* Dynamic Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                className="group relative p-8 border border-white/5 bg-white/[0.01] hover:border-white/15 transition-all duration-500 flex flex-col justify-between gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Overlay Accent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col gap-4">
                  {/* Icon & Index */}
                  <div className="flex justify-between items-center">
                    <div className="p-3 border border-white/10 bg-white/5 text-white/70 group-hover:text-white group-hover:border-white/30 transition-all duration-500">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="font-mono text-[10px] text-white/20 group-hover:text-white/40 transition-colors duration-500">
                      // 0{idx + 1}
                    </span>
                  </div>

                  {/* Name & Description */}
                  <div className="flex flex-col gap-2 mt-2">
                    <h3 className="font-outfit font-semibold text-lg uppercase tracking-wider text-white">
                      {ind.name}
                    </h3>
                    <p className="font-sans text-xs font-light text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                      {ind.description}
                    </p>
                  </div>
                </div>

                {/* Technical Specs Footer */}
                <div className="pt-4 border-t border-white/5 flex flex-col gap-1 font-mono text-[9px] tracking-wider text-white/30 group-hover:text-white/50 transition-colors duration-500">
                  <span className="uppercase text-[8px] text-white/25">PIPELINE PROTOCOL</span>
                  <span>{ind.pipelineDetails}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
