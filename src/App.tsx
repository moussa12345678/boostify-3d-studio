/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TransitionMask from "./components/TransitionMask";
import PortfolioGrid from "./components/PortfolioGrid";
import IndustriesWeServe from "./components/IndustriesWeServe";
import ParallaxText from "./components/ParallaxText";
import StudioCapabilities from "./components/StudioCapabilities";
import AIFaqSection from "./components/AIFaqSection";
import Footer from "./components/Footer";
import { ServicesPage, PortfolioPage, AboutUsPage, BlogPage, ContactPage } from "./components/Subpages";

export default function App() {
  const [route, setRoute] = useState(() => {
    const h = window.location.hash;
    // Strip trailing slash so both "/services" and "/services/" match
    const p = window.location.pathname.replace(/\/+$/, "");
    if (h && h !== "#/") return h;
    if (p === "/services" || p.endsWith("/services")) return "#/services";
    if (p === "/portfolio" || p.endsWith("/portfolio")) return "#/portfolio";
    if (p === "/about-us" || p.endsWith("/about-us")) return "#/about-us";
    if (p === "/blog" || p.endsWith("/blog")) return "#/blog";
    if (p === "/contact" || p.endsWith("/contact")) return "#/contact";
    return "#/";
  });

  useEffect(() => {
    const handleNavigationChange = () => {
      const h = window.location.hash;
      const p = window.location.pathname.replace(/\/+$/, "");
      let currentRoute = "#/";
      if (h && h !== "#/") {
        currentRoute = h;
      } else if (p === "/services" || p.endsWith("/services")) {
        currentRoute = "#/services";
      } else if (p === "/portfolio" || p.endsWith("/portfolio")) {
        currentRoute = "#/portfolio";
      } else if (p === "/about-us" || p.endsWith("/about-us")) {
        currentRoute = "#/about-us";
      } else if (p === "/blog" || p.endsWith("/blog")) {
        currentRoute = "#/blog";
      } else if (p === "/contact" || p.endsWith("/contact")) {
        currentRoute = "#/contact";
      }
      setRoute(currentRoute);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };

    window.addEventListener("hashchange", handleNavigationChange);
    window.addEventListener("popstate", handleNavigationChange);

    // Initial scroll sync on boot
    const h = window.location.hash;
    if (h && h !== "#/") {
      window.scrollTo({ top: 0 });
    }

    return () => {
      window.removeEventListener("hashchange", handleNavigationChange);
      window.removeEventListener("popstate", handleNavigationChange);
    };
  }, []);

  const navigateTo = (newRoute: string) => {
    if (newRoute.startsWith("#/")) {
      window.location.hash = newRoute;
    } else {
      window.history.pushState(null, "", newRoute);
      // Trigger navigation change manually for pathnames
      window.dispatchEvent(new Event("popstate"));
    }
  };

  const renderSubpage = () => {
    switch (route) {
      case "#/services":
        return <ServicesPage onBack={() => navigateTo("#/")} />;
      case "#/portfolio":
        return <PortfolioPage onBack={() => navigateTo("#/")} />;
      case "#/about-us":
        return <AboutUsPage onBack={() => navigateTo("#/")} />;
      case "#/blog":
        return <BlogPage onBack={() => navigateTo("#/")} />;
      case "#/contact":
        return <ContactPage onBack={() => navigateTo("#/")} />;
      default:
        return null;
    }
  };

  const isHome = route === "#/" || route === "" || !route.startsWith("#/");

  return (
    <div className="relative w-screen min-h-screen bg-black overflow-x-hidden text-white noise-overlay selection:bg-white/20 selection:text-white">
      {/* Floating high-end Navbar */}
      <Navbar />

      {isHome ? (
        <main className="w-full">
          {/* Fullscreen Video Entrance with Parallax interaction */}
          <Hero />

          {/* Linear gradient seamless divider mask */}
          <TransitionMask />

          {/* Asymmetric borderless high-end loops display */}
          <PortfolioGrid />

          {/* Dynamic multi-industry bento layout */}
          <IndustriesWeServe />

          {/* Scroll-velocity based Word Reveal manifesto */}
          <ParallaxText />

          {/* Studio technical pipeline & capabilities */}
          <StudioCapabilities />

          {/* Semantic AI Knowledge Base & FAQ directory */}
          <AIFaqSection />

          {/* Ambient background CTA with pulsing Aura */}
          <Footer />
        </main>
      ) : (
        <main className="w-full min-h-screen">
          {renderSubpage()}
          {/* Include a subtle elegant footer for subpages */}
          <div className="border-t border-white/5 py-8 text-center text-[10px] font-mono tracking-widest text-white/30 uppercase">
            © 2026 BOOSTIFY. All Rights Reserved. Creative Directed by BOOSTIFY Labs.
          </div>
        </main>
      )}
    </div>
  );
}
