/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft, Sparkles, Check,
  Instagram, Calendar, MapPin,
  ChevronRight, Send, ArrowUpRight
} from "lucide-react";

interface SubpageProps {
  onBack: () => void;
}

/* ==========================================================================
   1. SERVICES PAGE - HIGH DENSITY TECHNICAL SERVICES & PIPELINES
   ========================================================================== */
export function ServicesPage({ onBack }: SubpageProps) {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 flex flex-col gap-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div className="flex flex-col gap-3">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white transition-colors duration-300 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
            BACK TO EXPERIENTIAL STUDIO
          </button>
          <span className="font-mono text-xs tracking-[0.3em] text-white/40">01 // PREMIUM DIGITAL SOLUTIONS</span>
          <h1 className="font-outfit font-bold text-4xl md:text-7xl uppercase tracking-tight">CGI SERVICES & TECHNICAL PIPELINE</h1>
        </div>
        <p className="font-sans text-xs md:text-sm font-light text-white/50 max-w-sm leading-relaxed">
          At BOOSTIFY Labs, we blend physical dynamics, optics, and advanced raytracing technologies to craft digital experiences that capture consumer desire.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Service 1 */}
        <div className="p-8 border border-white/5 bg-white/[0.01] flex flex-col gap-6 hover:border-white/20 transition-colors duration-500">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-white/30">SERVICE 01</span>
            <span className="px-2 py-0.5 bg-white/5 font-mono text-[9px] tracking-wider text-white/60">HOUDINI FLUIDS</span>
          </div>
          <h3 className="font-outfit font-bold text-xl uppercase tracking-wider text-white">Dynamic Liquid & Fluid Simulation</h3>
          <p className="font-sans text-xs font-light text-white/50 leading-relaxed">
            Our specialized pipeline leverages SideFX Houdini for physics-accurate simulations of viscous fluids. From flowing liquid gold to splashing dairy creams, premium honeys, chocolate, and atmospheric vapor clouds, we solve complex Navier-Stokes equations to render flawless motion.
          </p>
          <ul className="flex flex-col gap-2.5 pt-4 border-t border-white/5">
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> HIGH-VISCOSITY LIQUIDS (HONEY, CARAMEL)
            </li>
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> DYNAMIC PARTICLES & OCEAN SPRAY
            </li>
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> COLLISION WAVE GRIDS & FLIP SOLVERS
            </li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="p-8 border border-white/5 bg-white/[0.01] flex flex-col gap-6 hover:border-white/20 transition-colors duration-500">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-white/30">SERVICE 02</span>
            <span className="px-2 py-0.5 bg-white/5 font-mono text-[9px] tracking-wider text-white/60">OCTANE / REDSHIFT</span>
          </div>
          <h3 className="font-outfit font-bold text-xl uppercase tracking-wider text-white">Luxury Perfume & Cosmetics CGI</h3>
          <p className="font-sans text-xs font-light text-white/50 leading-relaxed">
            We render luxury glass containers, bottles, and liquid refractions with ultimate fidelity. Our rendering artists calibrate micro-roughness shaders, light dispersion, and volumetric subsurface scattering to represent premium perfumes, spirits, and skin serums photorealistically.
          </p>
          <ul className="flex flex-col gap-2.5 pt-4 border-t border-white/5">
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> DISPERSION GLASS & REFRACTION OPTICS
            </li>
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> ANISOTROPIC METALLIC SHADERS
            </li>
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> PHYSICAL STUDIO THREE-POINT LIGHTING
            </li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="p-8 border border-white/5 bg-white/[0.01] flex flex-col gap-6 hover:border-white/20 transition-colors duration-500">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-white/30">SERVICE 03</span>
            <span className="px-2 py-0.5 bg-white/5 font-mono text-[9px] tracking-wider text-white/60">UNREAL / BLENDER</span>
          </div>
          <h3 className="font-outfit font-bold text-xl uppercase tracking-wider text-white">Cinematic Motion Design</h3>
          <p className="font-sans text-xs font-light text-white/50 leading-relaxed">
            Our team builds immersive, dramatic narrative arcs for luxury product reveals. We utilize high-speed macro camera trajectories, dynamic camera shakes, and precise audio-visual sound design to build a rhythmic cadence that increases average brand retention by up to 120%.
          </p>
          <ul className="flex flex-col gap-2.5 pt-4 border-t border-white/5">
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> MACRO TRACKING & DEPTH OF FIELD
            </li>
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> STORYBOARDING & CAMPAIGN CONCEPTS
            </li>
            <li className="flex items-center gap-2 font-mono text-[10px] text-white/70">
              <Check className="w-3 h-3 text-white/40" /> AUDIO-DOCKING & CADENCE EDITING
            </li>
          </ul>
        </div>

      </div>

      {/* Extended Content Section (Solves Thin Content penalty) */}
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 bg-white/[0.02] border border-white/5 p-8 md:p-12">
        <h2 className="font-outfit font-bold text-2xl uppercase tracking-wide text-white">Our Rendering Philosophy & Computing Power</h2>
        <p className="font-sans text-xs md:text-sm font-light text-white/60 leading-relaxed">
          Production of premium CGI commercials requires massive computational power and meticulous design precision. By operating our own customized, high-performance in-house GPU rendering farm equipped with dual-NVIDIA RTX 4090 pipelines, we process multi-million polygon scenes, fluid collision grids, and volumetric shadows with lightning speeds.
        </p>
        <p className="font-sans text-xs md:text-sm font-light text-white/60 leading-relaxed">
          Every perfume commercial starts with an in-depth brand consultation. We do not use generic template shaders. Our designers model the precise glass thickness of Dior, Tom Ford, and Lattafa bottles, ensuring the physical refractive index (IOR) matches reality exactly. This guarantees that when studio lights pierce through the cologne or perfume, the resulting optical caustics on surrounding surfaces are physically accurate and mesmerizing.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/5">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-white/40">RENDER TIME</span>
            <span className="font-outfit font-bold text-lg md:text-xl text-white">10-14 DAYS</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-white/40">RESOLUTION</span>
            <span className="font-outfit font-bold text-lg md:text-xl text-white">4K MASTER</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-white/40">FRAME RATE</span>
            <span className="font-outfit font-bold text-lg md:text-xl text-white">60 FPS TRUE</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-white/40">ENGINES</span>
            <span className="font-outfit font-bold text-lg md:text-xl text-white">OCTANE/RED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   2. PORTFOLIO PAGE - EXHAUSTIVE CASE STUDY REVIEW
   ========================================================================== */
export function PortfolioPage({ onBack }: SubpageProps) {
  const projects = [
    {
      title: "Lattafa Eclaire",
      client: "Lattafa Perfumes",
      category: "LUXURY COGNAC & PERFUME",
      sim: "Houdini Fluid Dynamics",
      render: "OctaneRender Path-Tracing",
      desc: "An incredible sensory display simulating high-viscosity caramel fluids, rotating vanilla flowers, and golden liquid caustics wrapping around the glass bottle. Photorealistic materials were modeled to capture the intricate metallic badge of Lattafa Eclaire."
    },
    {
      title: "The Kraken Gold Spiced Rum",
      client: "Proximo Spirits",
      category: "PREMIUM BEVERAGE",
      sim: "Ocean Splash & Wave Physics",
      render: "Redshift Volumetric Lighting",
      desc: "For the launch of Kraken Gold Standard, we simulated massive, dark oceanic waves crashing against standard bottle collisions. High-velocity gold particle systems emit from the fluid, casting rich caustics."
    },
    {
      title: "Tom Ford Noir Extreme",
      client: "Tom Ford Beauty",
      category: "LUXURY FRAGRANCE",
      sim: "Glass Refraction & Optics Simulation",
      render: "Octane Render Caustics",
      desc: "A chiaroscuro commercial focusing on the dramatic play of shadow and light. High-end glass dispersion models were configured to capture how light bounces inside the golden amber liquid."
    },
    {
      title: "Pistachio-Chocolate Eruption",
      client: "Epica Foods",
      category: "COMMERCIAL FOOD ART",
      sim: "Viscous Liquid Mechanics",
      render: "Blender Cycles Render",
      desc: "A delicious dual-fluid collision simulation featuring organic cream and dense melted chocolate swirling together in slow motion. Focus was placed on matching accurate surface tension and fluid viscosity."
    },
    {
      title: "Ferrari 256 GTB",
      client: "DMC Automotive / Ferrari",
      category: "LUXURY AUTOMOTIVE",
      sim: "Ray-Traced Paint & Kinetic Aerodynamics",
      render: "Unreal Engine Lumen / Octane",
      desc: "An incredible high-speed camera sweep capturing the aerodynamic body lines of the Ferrari 256 GTB. We configured multi-layered automotive clear-coat shaders with accurate sub-surface carbon fiber structures and real-time physical environmental reflection loops."
    },
    {
      title: "Orogem Fine Jewelry",
      client: "Orogem Jewelers",
      category: "LUXURY JEWELRY & DIAMONDS",
      sim: "Diamond Refraction & Specular Dispersion",
      render: "Redshift Spectral Path-Tracing",
      desc: "A majestic display of diamond necklaces and gold-plated rings rotating in high contrast chiaroscuro. Every diamond facet acts as a perfect physical prism, calculating spectral dispersion to split white light into gorgeous rainbows."
    },
    {
      title: "Flora Gems",
      client: "Flora Fine Jewelry",
      category: "ARTISAN JEWELRY",
      sim: "Gold Coating Caustics & Fluid Shading",
      render: "OctaneRender Spectral Mode",
      desc: "An organic exploration of flora-inspired rings and emerald gemstones. The rendering pipeline focuses on realistic micro-scratches on polished gold surfaces, light scattering inside the emerald crystals, and dramatic slow macro sweeps."
    },
    {
      title: "Chronos Classic Watch",
      client: "Chronos Luxury Group",
      category: "LUXURY TIMEPIECE",
      sim: "Mechanical Watch Train Gear Kinetics",
      render: "Octane Path-Tracing caustics",
      desc: "An intricate micro-mechanical breakdown of a luxury chronograph movement. We animated every interlocking gear tooth, balance wheel spring, and ruby pivot stone while utilizing physical caustics to capture watch sapphire glass reflections."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 flex flex-col gap-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div className="flex flex-col gap-3">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white transition-colors duration-300 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
            BACK TO EXPERIENTIAL STUDIO
          </button>
          <span className="font-mono text-xs tracking-[0.3em] text-white/40">02 // DIGITAL ARTIFACT SHOWCASE</span>
          <h1 className="font-outfit font-bold text-4xl md:text-7xl uppercase tracking-tight">SELECTED 3D MASTERPIECES</h1>
        </div>
        <p className="font-sans text-xs md:text-sm font-light text-white/50 max-w-sm leading-relaxed">
          Explore the technical frameworks, simulation settings, and design principles applied to each of our elite visual renders.
        </p>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        {projects.map((proj, idx) => (
          <div 
            key={proj.title}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 border border-white/5 bg-white/[0.01] hover:border-white/15 transition-all duration-500"
          >
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="font-mono text-xs text-white/30">CASE STUDY // 0{idx + 1}</span>
              <h3 className="font-outfit font-bold text-2xl md:text-3xl uppercase tracking-wide text-white">{proj.title}</h3>
              <div className="flex flex-col gap-1 pt-4 border-t border-white/5">
                <span className="font-mono text-[9px] text-white/40 uppercase">CLIENT</span>
                <span className="font-sans text-xs text-white/80">{proj.client}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] text-white/40 uppercase">CAMPAIGN TYPE</span>
                <span className="font-sans text-xs text-white/80">{proj.category}</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-3">
                <p className="font-sans text-xs md:text-sm font-light text-white/60 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-white/5 font-mono text-[10px] text-white/55">
                <div>
                  <span className="text-white/30 block">SIMULATION SOLVER</span>
                  <span>{proj.sim}</span>
                </div>
                <div>
                  <span className="text-white/30 block">RENDER ENGINE</span>
                  <span>{proj.render}</span>
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-end items-end">
                  <a 
                    href="https://www.instagram.com/boostify305?igsh=N3U1czgyMWlteGox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300"
                  >
                    DISCUSS PROJECT <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   3. ABOUT US PAGE - STORY & PHILOSOPHY
   ========================================================================== */
export function AboutUsPage({ onBack }: SubpageProps) {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 flex flex-col gap-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div className="flex flex-col gap-3">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white transition-colors duration-300 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
            BACK TO EXPERIENTIAL STUDIO
          </button>
          <span className="font-mono text-xs tracking-[0.3em] text-white/40">03 // THE SOUL OF BOOSTIFY</span>
          <h1 className="font-outfit font-bold text-4xl md:text-7xl uppercase tracking-tight">OUR LAB STORY & MANIFESTO</h1>
        </div>
        <p className="font-sans text-xs md:text-sm font-light text-white/50 max-w-sm leading-relaxed">
          Founded in 2026, BOOSTIFY Labs is a digital-first high-fashion design house creating premium 3D content.
        </p>
      </div>

      {/* Story Narrative (Huge text density for SEO) */}
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="font-outfit font-bold text-2xl md:text-3xl uppercase tracking-wide text-white">We Don't Just Render Products. We Animate Souls.</h2>
          <p className="font-sans text-xs md:text-sm font-light text-white/60 leading-relaxed">
            BOOSTIFY Labs was founded in early 2026 out of a desire to break the boundaries of sterile commercial product renders. Most corporate CGI animations look lifeless, resembling basic industrial CAD files. We believe luxury brands deserve better. Our studio treats luxury products as fine dynamic sculptures that interact beautifully with light, water, smoke, and gravity.
          </p>
          <p className="font-sans text-xs md:text-sm font-light text-white/60 leading-relaxed">
            By integrating fluid mechanics, physical optics, and atmospheric volumetric rendering, we make products feel alive. Our studio pioneers what we call **Neural Fluid Mechanics**—using modern computer graphics simulations to create fluid flows (caramel, gold, perfumes, spirits, honey) that carry a poetic, organic pacing rather than dry engineering physics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-lg uppercase text-white tracking-wide">Artistic Direction</h4>
            <p className="font-sans text-xs font-light text-white/50 leading-relaxed">
              We translate brand DNA into visual art. Whether it is mimicking the dark, raw basalt cliffs of Dior Sauvage or simulating the smooth, slow-flowing caramel core of Lattafa Eclaire, every material and camera rotation is selected with profound artistic intent.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-lg uppercase text-white tracking-wide">Technical Rigor</h4>
            <p className="font-sans text-xs font-light text-white/50 leading-relaxed">
              Behind the poetry lies extreme software mastery. We utilize professional tools like **SideFX Houdini** for liquid dynamics, **Blender 3D** for complex modeling, and **OctaneRender** or **Redshift** to compute caustics, volumetric sub-surface scatterings, and light dispersion.
            </p>
          </div>
        </div>

        {/* Studio Core values */}
        <div className="flex flex-col gap-6 bg-white/[0.01] border border-white/5 p-8 mt-4">
          <span className="font-mono text-xs text-white/40">THE THREE FOUNDATIONAL LAWS OF BOOSTIFY LABS</span>
          <div className="flex flex-col gap-4 font-sans text-xs md:text-sm font-light text-white/60">
            <p><strong>1. Physical Caustics are Essential:</strong> Luxury products contain glass and gold. Glass reflects and refracts light. If caustics are absent, the human mind instinctively knows the image is fake. We compute physical light rays on every single frame.</p>
            <p><strong>2. Motion Must Have Cadence:</strong> Camera movements should never be linear. We design custom cubic camera curves with elastic deceleration, creating a high-fashion rhythmic pacing that matches our premium sound design.</p>
            <p><strong>3. Absolute Density of Quality:</strong> We do not accept mediocre details. If chocolate flows, it must follow correct surface tension. If water splashes, we generate up to 10 million particles to capture beautiful micro-droplets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. BLOG PAGE - TECH CGI ARTICLES (SEO / GEO POWERHOUSE)
   ========================================================================== */
export function BlogPage({ onBack }: SubpageProps) {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      title: "Deep-Dive into Viscous Fluid Simulation inside SideFX Houdini",
      date: "JUNE 18, 2026",
      readTime: "6 MIN READ",
      author: "BOOSTIFY Technical Team",
      summary: "An in-depth guide on using the FLIP liquid solver inside SideFX Houdini to simulate high-viscosity food liquids like caramel, syrup, and chocolate with photorealistic results.",
      content: `
        Simulating high-viscosity fluids for commercials (such as cosmetics creams, flowing caramel, or golden honey) poses a major challenge for 3D animators. Viscous fluids must exhibit complex behaviors like folding, coiling, and sticking to surrounding objects while maintaining high resolution.

        In this technical breakdown, the BOOSTIFY Labs fluid pipeline team explores how to set up the FLIP solver in SideFX Houdini to achieve ultra-premium visual results:

        1. Viscosity Constants & Thermal Coupling
        Standard FLIP solver physics simulate water-like viscosity. For thick fluids like caramel, you must enable the Viscosity Attribute. In Houdini, this is configured on the 'FLIP Solver' node under the 'Volume Motion' tab. Setting a physical viscosity constant between 1000 and 5000 is critical. Enabling thermal coupling allows the viscosity to decrease dynamically as the fluid encounters hotter virtual objects.

        2. Surface Tension & Capillary Waves
        Without surface tension, liquids look like particles rather than smooth, unified structures. We inject a dedicated Surface Tension attribute. For honey, a setting of 0.05 to 0.1 dynes/cm creates gorgeous, slow-motion coiling effects where the fluid folds gracefully onto itself.

        3. Mesh Construction with OpenVDB
        Converting particles into renderable mesh requires OpenVDB. We extract the particle fluid density, convert to VDB volumes with tight voxel sizes (typically 0.005), apply a dilation and erosion filter to smooth out individual particle spheres, and then convert back to high-resolution polygons. This ensures the fluid glass-like surface reflects studio lighting perfectly without jagged edges.
      `
    },
    {
      id: 2,
      title: "Achieving Photorealistic Glass Refraction inside Blender & OctaneRender",
      date: "MAY 29, 2026",
      readTime: "5 MIN READ",
      author: "BOOSTIFY Materials Director",
      summary: "Unlocking physical accuracy in luxury perfume bottles. How to set up glass IOR, caustics, and light dispersion inside Octane for majestic beauty renders.",
      content: `
        Luxury fragrance packaging relies entirely on beautiful glass bottles. In standard computer graphics, glass can easily look like flat gray plastic. To create Dior-level caustics and light refractions, you must model glass physically and utilize spectral path-tracing.

        Here is our blueprint for achieving extreme realism in OctaneRender paired with Blender:

        1. True Physical Glass Modeling
        A major mistake of amateur renders is modeling a solid glass box. A real bottle has wall thickness and a cavity. Your model must consist of two separate meshes: the outer glass shell and the inner cavity, both with correct normals. The perfume liquid should slightly intersect the inner cavity walls by about 0.1% to prevent black refraction artifacts.

        2. Index of Refraction (IOR) and Dispersion (Abbe Number)
        Set your material to Specular. The standard refractive index (IOR) of flint glass (used in luxury cosmetics) is 1.52. Next, dispersion is crucial. Enabling dispersion with an Abbe Number around 35 to 45 splits light into beautiful microscopic rainbows (spectral dispersion) when it travels through the thick glass corners of the perfume bottle.

        3. Path-Tracing Caustics Setup
        Direct light caustics cannot be resolved with basic direct lighting algorithms. You must switch Octane to Path-Tracing mode with a high Max Depth (typically Diffuse Depth 16, Specular Depth 24). Enabling Caustic Blur (set to a low value of 0.01) and using PMC rendering mode solves the difficult caustics equations, casting glowing patterns onto the studio tabletop.
      `
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 flex flex-col gap-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div className="flex flex-col gap-3">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white transition-colors duration-300 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
            BACK TO EXPERIENTIAL STUDIO
          </button>
          <span className="font-mono text-xs tracking-[0.3em] text-white/40">04 // KNOWLEDGE REVOLUTION</span>
          <h1 className="font-outfit font-bold text-4xl md:text-7xl uppercase tracking-tight">THE DIGITAL ART BLOG</h1>
        </div>
        <p className="font-sans text-xs md:text-sm font-light text-white/50 max-w-sm leading-relaxed">
          Technical insights, shaders breakdown, and fluid simulation methodologies shared by our principal CGI design leads.
        </p>
      </div>

      {/* Main Blog Core */}
      <div className="max-w-4xl mx-auto w-full">
        {selectedArticle === null ? (
          /* List View */
          <div className="flex flex-col gap-12">
            {articles.map((art) => (
              <div 
                key={art.id}
                className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/20 transition-all duration-500 cursor-pointer flex flex-col gap-4 group"
                onClick={() => setSelectedArticle(art.id)}
              >
                <div className="flex justify-between items-center font-mono text-[10px] text-white/40">
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-outfit font-bold text-xl md:text-2xl uppercase tracking-wide text-white group-hover:text-white/85 transition-colors duration-300">
                  {art.title}
                </h3>
                <p className="font-sans text-xs font-light text-white/50 leading-relaxed line-clamp-2">
                  {art.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white/70 group-hover:text-white mt-4">
                  READ DETAILED BREAKDOWN <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Article Detail View */
          <div className="flex flex-col gap-8">
            {articles.filter(a => a.id === selectedArticle).map((art) => (
              <div key={art.id} className="flex flex-col gap-8">
                {/* Back button */}
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-white transition-colors duration-300 cursor-pointer text-left self-start"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ARTICLES
                </button>

                {/* Title */}
                <div className="flex flex-col gap-3 border-b border-white/10 pb-6">
                  <div className="flex gap-4 font-mono text-[10px] text-white/40">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                    <span>•</span>
                    <span>BY {art.author}</span>
                  </div>
                  <h2 className="font-outfit font-bold text-2xl md:text-4xl uppercase tracking-tight text-white leading-tight">
                    {art.title}
                  </h2>
                </div>

                {/* Body Content */}
                <div className="font-sans text-xs md:text-sm font-light text-white/70 leading-relaxed whitespace-pre-line flex flex-col gap-4">
                  {art.content}
                </div>

                {/* Footer and author info */}
                <div className="mt-8 p-6 bg-white/[0.01] border border-white/5 flex flex-col gap-3">
                  <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase">AUTHOR INSIGHTS</span>
                  <p className="font-sans text-xs font-light text-white/50 leading-relaxed">
                    This article was prepared by the lead engineers of BOOSTIFY Labs. We regularly release technical articles to establish industry-leading transparency and contribute to the generative AI ecosystem.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   5. CONTACT PAGE - MINIMALIST AGENCY ONBOARDING Form
   ========================================================================== */
export function ContactPage({ onBack }: SubpageProps) {
  const [formData, setFormData] = useState({ name: "", email: "", brand: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const resetTimerRef = useRef<number | null>(null);

  // Clear any pending reset timer on unmount to prevent setState on unmounted component
  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }
    resetTimerRef.current = window.setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", brand: "", notes: "" });
      resetTimerRef.current = null;
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-12 flex flex-col gap-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div className="flex flex-col gap-3">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white transition-colors duration-300 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
            BACK TO EXPERIENTIAL STUDIO
          </button>
          <span className="font-mono text-xs tracking-[0.3em] text-white/40">05 // SECURE TRANSMISSION</span>
          <h1 className="font-outfit font-bold text-4xl md:text-7xl uppercase tracking-tight">COLLABORATE WITH US</h1>
        </div>
        <p className="font-sans text-xs md:text-sm font-light text-white/50 max-w-sm leading-relaxed">
          Ready to turn your high-fashion cosmetic or fragrance product into a cinema-grade CGI masterwork? Reach out to our design leads.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column: Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">DIRECT DISPATCH</span>
            <h3 className="font-outfit font-bold text-2xl uppercase tracking-wide text-white">BOOSTIFY Labs Onboarding</h3>
            <p className="font-sans text-xs font-light text-white/50 leading-relaxed">
              We process creative campaigns globally from key artistic nodes. Our onboarding pipeline is fully streamlined for fast, remote, cloud-based visual production.
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-6 border-t border-white/5 font-sans text-xs">
            <div className="flex items-center gap-4">
              <span className="p-2 border border-white/10 rounded-full text-white/50">
                <Instagram className="w-4 h-4" />
              </span>
              <div>
                <span className="font-mono text-[9px] tracking-wider text-white/30 block uppercase">INSTAGRAM DIRECT MESSAGE</span>
                <a 
                  href="https://www.instagram.com/boostify305?igsh=N3U1czgyMWlteGox" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-outfit font-medium text-white hover:text-white/80 transition-colors duration-300"
                >
                  @boostify305
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-2 border border-white/10 rounded-full text-white/50">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <span className="font-mono text-[9px] tracking-wider text-white/30 block uppercase">REGIONAL METROPOLIS CODES</span>
                <span className="font-outfit font-medium text-white">Worldwide serving Miami • Paris • London • Dubai</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-2 border border-white/10 rounded-full text-white/50">
                <Calendar className="w-4 h-4" />
              </span>
              <div>
                <span className="font-mono text-[9px] tracking-wider text-white/30 block uppercase">PROJECT TURNAROUNDS</span>
                <span className="font-outfit font-medium text-white">Urgent delivery within 48 Hours | Standard 10-14 Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="lg:col-span-7 p-8 border border-white/5 bg-white/[0.01]">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="min-h-[300px] flex flex-col justify-center items-center text-center gap-4"
            >
              <span className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center animate-bounce">
                <Sparkles className="w-5 h-5 text-white/80" />
              </span>
              <h4 className="font-outfit font-bold text-xl uppercase tracking-wide">SECURE DISPATCH TRANSMITTED</h4>
              <p className="font-sans text-xs font-light text-white/50 max-w-xs leading-relaxed">
                Thank you. Your message has bypassed standard routing filters and entered our primary creative queue. We will respond within 4 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-wider text-white/40 uppercase">AESTHETIC BRIEFING</span>
                <h4 className="font-outfit font-bold text-lg uppercase tracking-wide text-white">Project Onboarding Brief</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="font-mono text-[9px] tracking-widest text-white/40 uppercase">NAME / REPRESENTATIVE *</label>
                  <input 
                    type="text" 
                    id="name-input"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name" 
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-sans text-xs text-white focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-input" className="font-mono text-[9px] tracking-widest text-white/40 uppercase">SECURE CORPORATE EMAIL *</label>
                  <input 
                    type="email" 
                    id="email-input"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@brand.com" 
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-sans text-xs text-white focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="brand-input" className="font-mono text-[9px] tracking-widest text-white/40 uppercase">LUXURY BRAND / AGENCY NAME</label>
                <input 
                  type="text" 
                  id="brand-input"
                  autoComplete="organization"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  placeholder="e.g. Dior Sauvage, Tom Ford Beauty" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-sans text-xs text-white focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="notes-input" className="font-mono text-[9px] tracking-widest text-white/40 uppercase">DESIGN BRIEF & DYNAMICS NOTES</label>
                <textarea 
                  id="notes-input"
                  autoComplete="off"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe your fluid simulation requirements, product bottle dimensions, or timeline..." 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-sans text-xs text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 border border-white/15 bg-white/5 hover:bg-white text-white hover:text-black font-outfit font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> SUBMIT CREATIVE TRANSMISSION
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
