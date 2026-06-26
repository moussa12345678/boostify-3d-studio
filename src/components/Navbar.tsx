/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "SERVICES", href: "#/services" },
  { label: "PORTFOLIO", href: "#/portfolio" },
  { label: "ABOUT", href: "#/about-us" },
  { label: "BLOG", href: "#/blog" },
  { label: "CONTACT", href: "#/contact" },
];

export default function Navbar() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Magnetic button values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for a high-end feel
  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Close mobile menu when route changes (hashchange) or on resize to desktop
  useEffect(() => {
    const closeOnNavigate = () => setMobileOpen(false);
    window.addEventListener("hashchange", closeOnNavigate);
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("hashchange", closeOnNavigate);
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

    // Calculate distance from center of button
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Max movement threshold (px)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Apply a magnetic pull factor (e.g. 0.35)
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-none"
      id="global-navbar"
    >
      {/* Brand logo - Interactive tracking */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="pointer-events-auto"
      >
        <a
          href="#/"
          className="font-mono text-lg md:text-xl font-bold tracking-[0.4em] text-white hover:text-white/80 transition-colors duration-500 ease-out flex items-center gap-1"
          aria-label="BOOSTIFY home"
        >
          BOOSTIFY
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-80"></span>
        </a>
      </motion.div>

      {/* Center Minimal Menu - Premium internal linking */}
      <nav
        className="hidden md:flex items-center gap-8 px-6 py-2.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-md pointer-events-auto"
        aria-label="Primary navigation"
      >
        {NAV_LINKS.map((link, idx) => (
          <React.Fragment key={link.href}>
            <a
              href={link.href}
              className="font-mono text-[10px] tracking-widest text-white/50 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
            {idx < NAV_LINKS.length - 1 && <span className="h-2 w-px bg-white/10" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </nav>

      {/* Right side: Magnetic CTA (desktop) + Hamburger (mobile) */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Magnetic Call to Action - desktop only */}
        <motion.a
          ref={buttonRef}
          href="https://www.instagram.com/boostify305?igsh=N3U1czgyMWlteGox"
          target="_blank"
          rel="noopener noreferrer referrer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          className="hidden md:inline-flex relative items-center gap-2 px-5 py-2.5 md:px-7 md:py-3 rounded-full text-xs md:text-sm font-outfit font-medium tracking-wider uppercase overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300"
          id="navbar-cta-btn"
          aria-label="Let's collaborate — open Instagram"
        >
          {/* Subtle internal glow background */}
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] animate-[shimmer_3s_infinite]" />

          <motion.span
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex items-center gap-1.5 text-white"
          >
            Let's Collaborate
            <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? "rotate-45" : ""}`} />
          </motion.span>

          {/* Hover pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? "inset 0 0 12px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.05)"
                : "inset 0 0 0px rgba(255, 255, 255, 0)"
            }}
            style={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.a>

        {/* Mobile Instagram CTA - shown on small screens */}
        <a
          href="https://www.instagram.com/boostify305?igsh=N3U1czgyMWlteGox"
          target="_blank"
          rel="noopener noreferrer referrer"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white"
          aria-label="Let's collaborate — open Instagram"
        >
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile slide-down navigation menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 right-0 mx-6 mt-2 p-6 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl pointer-events-auto flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-300 py-2.5 border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
