/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VideoItem } from "../types";
import { Eye, Film, Sparkles } from "lucide-react";

// The requested 14 items containing beautiful direct MP4 loop video files
const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: "Lattafa Eclaire",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782339956/Lattafa_Eclaire_-_Vanilla__Caramel__Sweet__Floral_-_Eau_de_Parfum_MP4_stkgpl.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782339956/Lattafa_Eclaire_-_Vanilla__Caramel__Sweet__Floral_-_Eau_de_Parfum_MP4_stkgpl.jpg",
    category: "Luxury Perfume",
    simulation: "Fluid Dynamics & Liquid Gold Caramel",
    year: "2026",
    aspectRatio: "portrait"
  },
  {
    id: 2,
    title: "The Kraken Gold Rum",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340209/Introducing_Kraken_Gold_Spiced_Rum__The_New_Gold_Standard_MP4_torkyr.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340209/Introducing_Kraken_Gold_Spiced_Rum__The_New_Gold_Standard_MP4_torkyr.jpg",
    category: "Premium Spirits",
    simulation: "Oceanic Waves & Dynamic Particle FX",
    year: "2026",
    aspectRatio: "video"
  },
  {
    id: 3,
    title: "Tom Ford Noir",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340521/_tomford__%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD__3%D0%B4%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F__%D0%B4%D1%83%D1%85%D0%B8__%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%D0%B4%D1%83%D1%85%D0%BE%D0%B2__%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%D0%B4%D1%83%D1%85%D0%BE%D0%B2___%D0%94%D1%83%D1%85%D0%B8_%D1%82%D0%BE%D0%BC_%D1%84%D0%BE%D1%80%D0%B4_piyd8v.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340521/_tomford__.jpg",
    category: "Luxury Fragrance",
    simulation: "Chiaroscuro Studio Lighting & Refraction",
    year: "2026",
    aspectRatio: "square"
  },
  {
    id: 4,
    title: "Pistachio-Chocolate Eruption",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340272/A_Pistachio-Chocolate_Eruption__MP4_d0qwir.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340272/A_Pistachio-Chocolate_Eruption__MP4_d0qwir.jpg",
    category: "Commercial Food Art",
    simulation: "High-Viscosity Fluid Simulation",
    year: "2026",
    aspectRatio: "portrait"
  },
  {
    id: 5,
    title: "Kahf Aesthetics",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340395/Motion_inspiration_-_Kahf_MP4_ygskhs.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340395/Motion_inspiration_-_Kahf_MP4_ygskhs.jpg",
    category: "Men's Grooming",
    simulation: "Dynamic Macro Camera Tracking",
    year: "2026",
    aspectRatio: "video"
  },
  {
    id: 6,
    title: "Saduluxury Perfumes",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340058/SADULUXURY_PERFUMES_MP4_esklhe.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340058/SADULUXURY_PERFUMES_MP4_esklhe.jpg",
    category: "High-End Scent",
    simulation: "Atmospheric Smoke & Dust Pass",
    year: "2026",
    aspectRatio: "square"
  },
  {
    id: 7,
    title: "Epica Exotic Adventure",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340680/%D0%AD%D0%BA%D0%B7%D0%BE%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B9%D0%BE%D0%B3%D1%83%D1%80%D1%82%D0%BE%D0%B2_EPICA__MP4_t43ttl.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340680/%D0%AD%D0%BA%D0%B7%D0%BE%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B9%D0%BE%D0%B3%D1%83%D1%80%D1%82%D0%BE%D0%B2_EPICA__MP4_t43ttl.jpg",
    category: "Creative Food/Beverage",
    simulation: "Dynamic Splashes & Rigid Body Physics",
    year: "2026",
    aspectRatio: "video"
  },
  {
    id: 8,
    title: "Genyum Perfume",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340406/Genyum_perfume_3d_motion_MP4_ykqvbi.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340406/Genyum_perfume_3d_motion_MP4_ykqvbi.jpg",
    category: "Minimalist Art Scent",
    simulation: "Soft Shadow Shadows & Studio Optics",
    year: "2026",
    aspectRatio: "portrait"
  },
  {
    id: 9,
    title: "Honey Motion Inspiration",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340363/Motion_inspiration_-_Honey_MP4_hcrkir.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340363/Motion_inspiration_-_Honey_MP4_hcrkir.jpg",
    category: "Organic Luxury",
    simulation: "Hyper-realistic Honey Viscosity Physics",
    year: "2026",
    aspectRatio: "square"
  },
  {
    id: 10,
    title: "Phlur Scent Motion",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340368/Moiton_inspiration_-_PHLUR_MP4_ylo6fv.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782340368/Moiton_inspiration_-_PHLUR_MP4_ylo6fv.jpg",
    category: "Modern Fragrance",
    simulation: "360-Degree Product Rotation & Volumetric Fog",
    year: "2026",
    aspectRatio: "video"
  },
  {
    id: 11,
    title: "Ferrari 256 GTB",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782410514/Ferrari_256_GTB_DMC_MP4_i2pkep.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782410514/Ferrari_256_GTB_DMC_MP4_i2pkep.jpg",
    category: "Luxury Automotive",
    simulation: "Ray-Traced Paint & Kinetic Aerodynamics",
    year: "2026",
    aspectRatio: "video"
  },
  {
    id: 12,
    title: "Orogem Fine Jewelry",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782410467/Orogem_Jewelers_MP4_xdswnm.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782410467/Orogem_Jewelers_MP4_xdswnm.jpg",
    category: "Luxury Jewelry",
    simulation: "Diamond Refraction & Specular Dispersion",
    year: "2026",
    aspectRatio: "video"
  },
  {
    id: 13,
    title: "Flora Gems",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782410327/Flora_Gems_MP4_vlwek0.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782410327/Flora_Gems_MP4_vlwek0.jpg",
    category: "Artisan Jewelry",
    simulation: "Gold Coating Caustics & Prismatic dispersion",
    year: "2026",
    aspectRatio: "portrait"
  },
  {
    id: 14,
    title: "Chronos Classic Watch",
    videoUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782410284/Watch_Video_Content_Bracelet_Brand_Jewellery_%D0%92%D0%B8%D0%B4%D0%B5%D0%BE_%D0%9A%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82_%D0%A7%D0%B0%D1%81%D1%8B_%D0%AE%D0%B2%D0%B5%D0%BB%D0%B8%D1%80%D0%BD%D1%8B%D0%B5_%D1%83%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F_MP4_mo2maz.mp4",
    posterUrl: "https://res.cloudinary.com/dxyxyw5o2/video/upload/v1782410284/Watch_Video_Content_Bracelet_Brand_Jewellery_%D0%92%D0%B8%D0%B4%D0%B5%D0%BE_%D0%9A%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82_%D0%A7%D0%B0%D1%81%D1%8B_%D0%AE%D0%B2%D0%B5%D0%BB%D0%B8%D1%80%D0%BD%D1%8B%D0%B5_%D1%83%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F_MP4_mo2maz.jpg",
    category: "Luxury Timepiece",
    simulation: "Mechanical Watch Train Gear Kinetics",
    year: "2026",
    aspectRatio: "video"
  }
];

export default function PortfolioGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section 
      className="relative w-full bg-black px-6 md:px-12 py-16 md:py-32"
      id="portfolio-section"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Heading & Sub-heading in strict, minimalist style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-16">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.3em] text-white/50">
              01 // PROJECTS SHOWCASE
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-5xl tracking-tight uppercase">
              Selected 3D Masterpieces
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm font-light tracking-wide text-white/40 max-w-sm leading-relaxed">
            Every clip is simulated natively, combining high-velocity particle kinetics with hyper-realistic materials. Hover over the viewport to inspect metadata.
          </p>
        </div>

        {/* Asymmetric Alternating Showcase Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {PORTFOLIO_VIDEOS.map((video, idx) => {
            // Determine column layout and width dynamically to keep the layout asymmetric and cinematic
            let gridClasses = "md:col-span-12"; // default fallback
            let heightClasses = "aspect-[16/9]"; // default fallback

            // Note: previously the odd-indexed branches used `md:ml-auto`
            // (margin-left:auto) to push the card to the right. That broke
            // CSS Grid sizing: with `aspect-ratio`-based children, the
            // auto-margin absorbed the entire track as free space, the
            // item's intrinsic width collapsed to 0, and the child's
            // aspect-ratio then produced height=0 → the card disappeared
            // in desktop view (7 of 14 cards were invisible).
            // The fix is to drop `md:ml-auto` entirely — grid auto-flow
            // already places odd cards next to even ones, preserving the
            // asymmetric cinematic feel via `col-span` alternation and
            // the `translate-y` offsets below.
            if (video.aspectRatio === "portrait") {
              gridClasses = "md:col-span-5";
              heightClasses = "aspect-[3/4]";
            } else if (video.aspectRatio === "square") {
              gridClasses = "md:col-span-6";
              heightClasses = "aspect-square";
            } else { // landscape video (16:9)
              gridClasses = "md:col-span-7";
              heightClasses = "aspect-[16/9]";
            }

            // Adjust layout sequence spacing
            const verticalOffset = idx % 3 === 1 ? "md:translate-y-12" : idx % 3 === 2 ? "md:-translate-y-8" : "";

            return (
              <motion.div
                key={video.id}
                className={`${gridClasses} ${verticalOffset} relative group cursor-pointer overflow-hidden rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(video.id)}
                onBlur={() => setHoveredId(null)}
                tabIndex={0}
                role="button"
                aria-label={`${video.title} — ${video.category}. ${video.simulation || ""}. Press Tab to focus, then Escape to release.`}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setHoveredId(null);
                    (e.currentTarget as HTMLDivElement).blur();
                  }
                }}
                id={`portfolio-item-${video.id}`}
              >
                {/* Borderless Video Wrapper */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.div
                    animate={{ scale: hoveredId === video.id ? 1.03 : 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative w-full ${heightClasses} overflow-hidden`}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={video.posterUrl}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-700"
                      src={video.videoUrl}
                    />
                    
                    {/* Fallback image for crawler / index bots to index the screenshot/poster */}
                    {video.posterUrl && (
                      <img 
                        src={video.posterUrl} 
                        alt={`${video.title} - ${video.category} premium 3D CGI commercial rendering. Simulation of ${video.simulation} by BOOSTIFY Studio.`} 
                        className="hidden pointer-events-none" 
                        style={{ display: "none" }}
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </motion.div>

                  {/* High-End Glassmorphic Metadata Overlay */}
                  <AnimatePresence>
                    {hoveredId === video.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 pointer-events-none"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase">
                              {video.category}
                            </span>
                            <span className="font-mono text-[10px] tracking-wider text-white/40">
                              {video.year}
                            </span>
                          </div>
                          
                          <h3 className="font-outfit font-semibold text-lg md:text-2xl text-white uppercase tracking-wide">
                            {video.title}
                          </h3>
                          
                          {video.simulation && (
                            <p className="font-sans text-xs font-light text-white/60 max-w-sm mt-1 leading-relaxed">
                              {video.simulation}
                            </p>
                          )}

                          <div className="flex items-center gap-2 mt-2 text-[10px] text-white/40 font-mono tracking-widest uppercase">
                            <Film className="w-3 h-3 text-white/50" />
                            <span>100% Raw CGI Render</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Static Indicator for Mobile/Touch screens */}
                  <div className="absolute top-4 right-4 md:hidden bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-white/80">
                    <Sparkles className="w-2.5 h-2.5" />
                    CGI SHOT
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
