# BOOSTIFY — Premium 3D Advertising & CGI Animation Studio

Cinematic-grade 3D advertising & CGI animation studio website. Built with React 19, Vite 6, TypeScript, and Tailwind CSS 4. Deployed to GitHub Pages via GitHub Actions.

## Live Site

**https://moussa12345678.github.io/boostify-3d-studio/**

## Tech Stack

- React 19 + TypeScript
- Vite 6 (build tool)
- Tailwind CSS 4 (utility-first styling)
- Motion (Framer Motion successor) — scroll, layout, and gesture animations
- lucide-react — icon library

## Run Locally

**Prerequisites:** Node.js 20+ (see `.nvmrc`)

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build for Production

```bash
npm run build        # type-check + production build to /dist
npm run build:pages  # production build with GitHub Pages base path
npm run preview      # preview the production build locally
```

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on every push to `main`.

Repository settings required (set once):
- **Settings → Pages → Build and deployment → Source:** GitHub Actions

## Project Structure

```
.
├── index.html              # Vite entry — contains SEO meta, JSON-LD schema, semantic HTML fallback
├── public/
│   ├── 404.html           # SPA fallback for GitHub Pages deep links
│   ├── .nojekyll          # Disables Jekyll processing on GitHub Pages
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx            # Root component + hash/path router
│   ├── main.tsx           # React 19 bootstrap
│   ├── index.css          # Tailwind + base styles + custom utilities
│   ├── types.ts
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── TransitionMask.tsx
│       ├── PortfolioGrid.tsx
│       ├── IndustriesWeServe.tsx
│       ├── ParallaxText.tsx
│       ├── StudioCapabilities.tsx
│       ├── AIFaqSection.tsx
│       ├── Footer.tsx
│       └── Subpages.tsx    # Services, Portfolio, About, Blog, Contact pages
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .github/workflows/deploy.yml
```

## SEO Features

- Rich JSON-LD `ProfessionalService` + `VideoObject` schema
- Open Graph & Twitter Card meta tags
- Canonical URL
- `robots.txt` + `sitemap.xml`
- Semantic HTML5 fallback inside `#root` for crawlers (manifesto, services, portfolio, blog, FAQ, contact)
- Descriptive `alt` text on all images
- Mobile-friendly viewport

## License

Apache-2.0
