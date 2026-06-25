/**
 * Post-build script: Pre-render static subpage HTML files for SEO.
 *
 * Why: GitHub Pages returns 404 (or 404.html) for /services, /portfolio, etc.
 * Google Search Console flags 404s in sitemap.xml. By generating static
 * dist/<route>/index.html files with correct meta tags + semantic HTML +
 * the SPA script tag, every sitemap URL returns HTTP 200 with the right
 * page-specific SEO metadata.
 *
 * Strategy: read dist/index.html as a template, then for each route:
 * 1. Replace <title> and meta description/og:title/og:description/og:url/canonical
 * 2. Replace the semantic HTML inside <div id="root">...</div> with
 *    route-specific semantic content
 * 3. Write to dist/<route>/index.html
 *
 * The SPA script tag is preserved — when the browser loads the page,
 * React hydrates #root and App.tsx routes based on window.location.pathname.
 *
 * Usage: node scripts/prerender-subpages.mjs
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const DIST = path.join(ROOT, "dist");
const TEMPLATE = path.join(DIST, "index.html");

if (!fs.existsSync(TEMPLATE)) {
  console.error("[prerender] dist/index.html not found. Run `npm run build:pages` first.");
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE, "utf8");
const SITE_BASE = "https://moussa12345678.github.io/boostify-3d-studio";

const SUBPAGES = [
  {
    route: "services",
    title: "CGI Services & Technical Pipeline | BOOSTIFY",
    description:
      "BOOSTIFY offers premium 3D commercial production, fluid dynamics simulation in Houdini, and luxury perfume CGI rendering in OctaneRender. Explore our cinema-grade pipeline.",
    ogType: "website",
    semantic: `
      <header>
        <h1>CGI Services & Technical Pipeline — BOOSTIFY Labs</h1>
        <p>Premium 3D commercial production for luxury perfume, cosmetics, spirits, and lifestyle brands.</p>
        <nav>
          <a href="${SITE_BASE}/">Back to BOOSTIFY Studio</a>
          <a href="${SITE_BASE}/services">Services</a>
          <a href="${SITE_BASE}/portfolio">Portfolio</a>
          <a href="${SITE_BASE}/about-us">About</a>
          <a href="${SITE_BASE}/blog">Blog</a>
          <a href="${SITE_BASE}/contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="services">
          <h2>Core CGI & 3D Animation Services</h2>
          <ul>
            <li>
              <h3>Dynamic Liquid & Fluid Simulation</h3>
              <p>SideFX Houdini FLIP solver for high-viscosity caramel, chocolate, honey, and water splashes. Navier-Stokes physics, surface tension, and OpenVDB meshing.</p>
            </li>
            <li>
              <h3>Luxury Perfume & Cosmetics CGI</h3>
              <p>Photorealistic glass refraction (IOR 1.52), dispersion (Abbe 35–45), anisotropic metallic shaders, and three-point studio lighting in OctaneRender.</p>
            </li>
            <li>
              <h3>Cinematic Motion Design</h3>
              <p>High-speed macro camera trajectories, dynamic depth-of-field, storyboarding, and audio-visual synchronization for luxury product reveals.</p>
            </li>
          </ul>
        </section>
        <section id="rendering-philosophy">
          <h2>Rendering Philosophy & Computing Power</h2>
          <p>BOOSTIFY Labs operates a customized high-performance in-house GPU rendering farm equipped with dual-NVIDIA RTX 4090 pipelines. We process multi-million polygon scenes, fluid collision grids, and volumetric shadows at lightning speeds. Every perfume commercial starts with an in-depth brand consultation — we model the precise glass thickness of Dior, Tom Ford, and Lattafa bottles to ensure physically accurate refractive index (IOR) and optical caustics.</p>
          <ul>
            <li>Render time: 10-14 days standard</li>
            <li>Resolution: 4K master</li>
            <li>Frame rate: 60 FPS true</li>
            <li>Engines: Octane / Redshift / Blender Cycles</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 BOOSTIFY Labs. Cinema-grade CGI for luxury brands worldwide.</p>
      </footer>
    `,
  },
  {
    route: "portfolio",
    title: "3D Portfolio & CGI Case Studies | BOOSTIFY",
    description:
      "Explore BOOSTIFY's 3D portfolio — Lattafa Eclaire, Kraken Gold Rum, Tom Ford Noir, Ferrari 256 GTB, Orogem Jewelry, and more. Detailed CGI case studies with simulation solvers and render engines.",
    ogType: "website",
    semantic: `
      <header>
        <h1>Selected 3D Masterpieces — BOOSTIFY Portfolio</h1>
        <p>Technical case studies of cinema-grade CGI commercials for luxury perfume, spirits, automotive, jewelry, and timepiece brands.</p>
        <nav>
          <a href="${SITE_BASE}/">Back to BOOSTIFY Studio</a>
          <a href="${SITE_BASE}/services">Services</a>
          <a href="${SITE_BASE}/portfolio">Portfolio</a>
          <a href="${SITE_BASE}/about-us">About</a>
          <a href="${SITE_BASE}/blog">Blog</a>
          <a href="${SITE_BASE}/contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="case-studies">
          <h2>CGI Case Studies</h2>
          <article>
            <h3>Lattafa Eclaire — Vanilla & Caramel CGI Commercial</h3>
            <p>Client: Lattafa Perfumes. Simulation: Houdini Fluid Dynamics. Render: OctaneRender Path-Tracing. A sensory display simulating high-viscosity caramel fluids, rotating vanilla flowers, and golden liquid caustics wrapping around the glass bottle.</p>
          </article>
          <article>
            <h3>The Kraken Gold Spiced Rum — Oceanic Kinetic CGI</h3>
            <p>Client: Proximo Spirits. Simulation: Ocean Splash & Wave Physics. Render: Redshift Volumetric Lighting. Massive dark oceanic waves crashing against bottle collisions with high-velocity gold particle systems.</p>
          </article>
          <article>
            <h3>Tom Ford Noir Extreme — Chiaroscuro Studio Optics</h3>
            <p>Client: Tom Ford Beauty. Simulation: Glass Refraction & Optics. Render: Octane Caustics. Dramatic chiaroscuro play of shadow and light with high-end glass dispersion models.</p>
          </article>
          <article>
            <h3>Pistachio-Chocolate Eruption — Viscous Splash CGI</h3>
            <p>Client: Epica Foods. Simulation: Viscous Liquid Mechanics. Render: Blender Cycles. A dual-fluid collision simulation featuring organic cream and dense melted chocolate swirling in slow motion.</p>
          </article>
          <article>
            <h3>Ferrari 256 GTB — Luxury Automotive CGI</h3>
            <p>Client: DMC Automotive / Ferrari. Simulation: Ray-Traced Paint & Kinetic Aerodynamics. Render: Unreal Engine Lumen / Octane. Multi-layered automotive clear-coat shaders with sub-surface carbon fiber structures.</p>
          </article>
          <article>
            <h3>Orogem Fine Jewelry — Specular Diamond Refraction</h3>
            <p>Client: Orogem Jewelers. Simulation: Diamond Refraction & Specular Dispersion. Render: Redshift Spectral Path-Tracing. Majestic display of diamond necklaces where every facet acts as a perfect physical prism.</p>
          </article>
          <article>
            <h3>Flora Gems — Artisan Gold Caustics</h3>
            <p>Client: Flora Fine Jewelry. Simulation: Gold Coating Caustics & Fluid Shading. Render: Octane Spectral Mode. Organic exploration of flora-inspired rings and emerald gemstones with realistic micro-scratches.</p>
          </article>
          <article>
            <h3>Chronos Classic Watch — Mechanical Gear Kinetics</h3>
            <p>Client: Chronos Luxury Group. Simulation: Mechanical Watch Train Gear Kinetics. Render: Octane Path-Tracing Caustics. Intricate micro-mechanical breakdown of a luxury chronograph movement.</p>
          </article>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 BOOSTIFY Labs. Cinema-grade CGI for luxury brands worldwide.</p>
      </footer>
    `,
  },
  {
    route: "about-us",
    title: "About BOOSTIFY Labs | Luxury CGI Production Studio",
    description:
      "Founded in 2026, BOOSTIFY Labs is a digital-first high-fashion design house creating premium 3D content for luxury perfume, cosmetics, and spirits brands worldwide. Serving Miami, New York, London, Paris, Dubai.",
    ogType: "website",
    semantic: `
      <header>
        <h1>About BOOSTIFY Labs — Our Story & Manifesto</h1>
        <p>Founded in 2026, BOOSTIFY Labs is a digital-first high-fashion design house creating premium 3D content for luxury perfume, cosmetics, spirits, and lifestyle goods.</p>
        <nav>
          <a href="${SITE_BASE}/">Back to BOOSTIFY Studio</a>
          <a href="${SITE_BASE}/services">Services</a>
          <a href="${SITE_BASE}/portfolio">Portfolio</a>
          <a href="${SITE_BASE}/about-us">About</a>
          <a href="${SITE_BASE}/blog">Blog</a>
          <a href="${SITE_BASE}/contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="manifesto">
          <h2>We Don't Just Render Products. We Animate Souls.</h2>
          <p>BOOSTIFY Labs was founded in early 2026 out of a desire to break the boundaries of sterile commercial product renders. Most corporate CGI animations look lifeless, resembling basic industrial CAD files. We believe luxury brands deserve better. Our studio treats luxury products as fine dynamic sculptures that interact beautifully with light, water, smoke, and gravity.</p>
          <p>By integrating fluid mechanics, physical optics, and atmospheric volumetric rendering, we make products feel alive. Our studio pioneers what we call Neural Fluid Mechanics — using modern computer graphics simulations to create fluid flows (caramel, gold, perfumes, spirits, honey) that carry a poetic, organic pacing rather than dry engineering physics.</p>
        </section>
        <section id="values">
          <h2>The Three Foundational Laws of BOOSTIFY Labs</h2>
          <ol>
            <li><strong>Physical Caustics are Essential:</strong> Luxury products contain glass and gold. Glass reflects and refracts light. If caustics are absent, the human mind instinctively knows the image is fake. We compute physical light rays on every single frame.</li>
            <li><strong>Motion Must Have Cadence:</strong> Camera movements should never be linear. We design custom cubic camera curves with elastic deceleration, creating a high-fashion rhythmic pacing that matches our premium sound design.</li>
            <li><strong>Absolute Density of Quality:</strong> We do not accept mediocre details. If chocolate flows, it must follow correct surface tension. If water splashes, we generate up to 10 million particles to capture beautiful micro-droplets.</li>
          </ol>
        </section>
        <section id="locations">
          <h2>Global Service Hubs</h2>
          <p>We service luxury clients worldwide, with primary creative coordination in Miami, New York, London, Paris, and Dubai. All collaboration, drafts, and high-resolution master file deliveries are fully optimized for remote, cloud-based visual production workflows.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 BOOSTIFY Labs. Cinema-grade CGI for luxury brands worldwide.</p>
      </footer>
    `,
  },
  {
    route: "blog",
    title: "CGI & 3D Animation Blog | BOOSTIFY Labs",
    description:
      "Technical breakdowns of fluid simulation in SideFX Houdini, photorealistic glass refraction in Blender & OctaneRender, and luxury CGI pipeline insights from BOOSTIFY Labs' principal design leads.",
    ogType: "website",
    semantic: `
      <header>
        <h1>The Digital Art Blog — BOOSTIFY Labs</h1>
        <p>Technical insights, shader breakdowns, and fluid simulation methodologies shared by our principal CGI design leads.</p>
        <nav>
          <a href="${SITE_BASE}/">Back to BOOSTIFY Studio</a>
          <a href="${SITE_BASE}/services">Services</a>
          <a href="${SITE_BASE}/portfolio">Portfolio</a>
          <a href="${SITE_BASE}/about-us">About</a>
          <a href="${SITE_BASE}/blog">Blog</a>
          <a href="${SITE_BASE}/contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="articles">
          <h2>Technical 3D Graphics & CGI Articles</h2>
          <article>
            <h3>Deep-Dive into Viscous Fluid Simulation inside SideFX Houdini</h3>
            <p><small>Published June 18, 2026 by BOOSTIFY Technical Team — 6 min read</small></p>
            <p>Simulating high-viscosity fluids for commercials (caramel, chocolate, honey) poses a major challenge for 3D animators. Viscous fluids must exhibit complex behaviors like folding, coiling, and sticking to surrounding objects while maintaining high resolution.</p>
            <p>Our pipeline configures the FLIP Solver viscosity constants between 1000 and 5000, coupling the solver with temperature dynamics so viscosity decays realistically when flowing near heated product bottles. We add a custom Surface Tension coefficient (typically 0.05 to 0.1 dynes/cm) to secure the cohesive liquid sheath, and mesh using OpenVDB with ultra-fine voxel spacing (0.005) to ensure perfect optical caustics reflection in OctaneRender.</p>
          </article>
          <article>
            <h3>Achieving Photorealistic Glass Refraction inside Blender & OctaneRender</h3>
            <p><small>Published May 29, 2026 by BOOSTIFY Materials Director — 5 min read</small></p>
            <p>Luxury fragrance packaging relies entirely on beautiful glass bottles. In standard computer graphics, glass can easily look like flat gray plastic. To create Dior-level caustics and light refractions, you must model glass physically and utilize spectral path-tracing.</p>
            <p>Our artists model glass walls and inner fluid volume pockets with explicit boundary intersections to eliminate negative IOR refraction bugs. We configure flint glass specifications with an Index of Refraction (IOR) of 1.52 and model spectral dispersion using an Abbe Number constant of 35 to 45. Using path-tracing direct caustics with speculative depths up to 24 results in spectacular physical caustic reflections on the product table surface.</p>
          </article>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 BOOSTIFY Labs. Cinema-grade CGI for luxury brands worldwide.</p>
      </footer>
    `,
  },
  {
    route: "contact",
    title: "Collaborate with BOOSTIFY Labs | Request a Storyboard",
    description:
      "Request a luxury CGI commercial storyboard from BOOSTIFY Labs. Reach our digital team via Instagram (@boostify305). Urgent delivery in 48 hours, standard 10-14 days. Serving Miami, New York, London, Paris, Dubai.",
    ogType: "website",
    semantic: `
      <header>
        <h1>Collaborate with BOOSTIFY Labs</h1>
        <p>Request a luxury CGI commercial storyboard. We onboard luxury brands worldwide for cinema-grade 3D advertising production.</p>
        <nav>
          <a href="${SITE_BASE}/">Back to BOOSTIFY Studio</a>
          <a href="${SITE_BASE}/services">Services</a>
          <a href="${SITE_BASE}/portfolio">Portfolio</a>
          <a href="${SITE_BASE}/about-us">About</a>
          <a href="${SITE_BASE}/blog">Blog</a>
          <a href="${SITE_BASE}/contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="onboarding">
          <h2>BOOSTIFY Labs Onboarding</h2>
          <p>We process creative campaigns globally from key artistic nodes. Our onboarding pipeline is fully streamlined for fast, remote, cloud-based visual production.</p>
          <ul>
            <li><strong>Instagram Direct Message:</strong> <a href="https://www.instagram.com/boostify305?igsh=N3U1czgyMWlteGox" target="_blank" rel="noopener noreferrer">@boostify305</a></li>
            <li><strong>Regional Hubs:</strong> Worldwide — Miami, Paris, London, Dubai, New York</li>
            <li><strong>Project Turnarounds:</strong> Urgent delivery within 48 hours | Standard 10-14 days</li>
          </ul>
        </section>
        <section id="brief">
          <h2>Project Onboarding Brief</h2>
          <p>Ready to turn your high-fashion cosmetic or fragrance product into a cinema-grade CGI masterwork? Reach out to our design leads via Instagram or use the in-app form on this page.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 BOOSTIFY Labs. Cinema-grade CGI for luxury brands worldwide.</p>
      </footer>
    `,
  },
];

function replaceTag(html, tagName, newContent) {
  const re = new RegExp(`<${tagName}[^>]*>[\\s\\S]*?</${tagName}>`, "i");
  return html.replace(re, `<${tagName}>${newContent}</${tagName}>`);
}

function replaceMetaContent(html, attrSelector, newContent) {
  const re = new RegExp(
    `(<meta[^>]*${attrSelector.replace(/"/g, '\\"')}[^>]*content=")[^"]*(")`,
    "i",
  );
  return html.replace(re, `$1${newContent}$2`);
}

function replaceLinkHref(html, rel, newHref) {
  const re = new RegExp(
    `(<link[^>]*rel="${rel}"[^>]*href=")[^"]*(")`,
    "i",
  );
  return html.replace(re, `$1${newHref}$2`);
}

function replaceRootContents(html, newContents) {
  const re = /(<div[^>]*id="root"[^>]*>)[\s\S]*?(<\/div>)/i;
  return html.replace(re, `$1${newContents}$2`);
}

let generated = 0;
for (const page of SUBPAGES) {
  const liveUrl = `${SITE_BASE}/${page.route}/`;
  let html = template;

  html = replaceTag(html, "title", page.title);
  html = replaceMetaContent(html, 'name="description"', page.description);
  html = replaceMetaContent(html, 'property="og:title"', page.title);
  html = replaceMetaContent(html, 'property="og:description"', page.description);
  html = replaceMetaContent(html, 'property="og:url"', liveUrl);
  html = replaceMetaContent(html, 'property="og:type"', page.ogType);
  html = replaceMetaContent(html, 'name="twitter:title"', page.title);
  html = replaceMetaContent(html, 'name="twitter:description"', page.description);
  html = replaceLinkHref(html, "canonical", liveUrl);
  html = replaceRootContents(html, page.semantic);

  const outDir = path.join(DIST, page.route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
  console.log(`[prerender] wrote dist/${page.route}/index.html`);
  generated++;
}

console.log(`[prerender] done — ${generated} subpage files generated.`);
