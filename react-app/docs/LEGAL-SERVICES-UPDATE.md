# Legal Services update (9 Nov 2026)

## What was added
- **Legal Services hub**: `/services/legal-services/` (Shine Legal Associates strip, 7 service cards, "designed and protected" section, FAQ, CTA).
- **7 service pages** under `/services/legal-services/`: `ipo-services`, `trademark-registration`, `copyright-legal-protection`, `ip-rights-consultancy`, `brand-protection-enforcement`, `business-legal-consultancy`, `litigation-dispute-resolution`. One template (`src/pages/LegalService.jsx`), content in `src/data/legal.json`.
- **Blog post**: `/blog/trademark-registration-pakistan-brand-protection/`, listed first on `/blog/`.
- **Intro animation**: `src/components/Splash.jsx` + `legal.css`. Home page only, once per browser session, skipped for reduced-motion users, Skip button and Esc, 6 s failsafe.
- **Navigation**: Legal Services added to the Services menu and footer; Home and Services pages show the new service (Home counter now 8).
- **Contact form**: 8 new "Legal" options; `?service=` links preselect them.
- **SEO**: titles, descriptions, JSON-LD (Service, FAQPage, BlogPosting, ItemList), sitemap URLs, per-page social image (`ogImage` in `seo.json`).
- **Responsive pass**: `src/styles/legal.css` (bottom section) hardens grids, buttons, safe areas, small phones and tablets for all pages.

## Edit the legal copy
All text for the 7 services is in `src/data/legal.json`. `seo.json` entries were generated from it, so if you change a title, description or FAQ answer, change it in both files.

## Assets (public/assets/images/)
| Files | Used for |
| --- | --- |
| `legal-services-hub-*`, `legal-ipo-services-*`, `legal-trademark-*`, `legal-copyright-*`, `legal-ip-consultancy-*`, `legal-brand-protection-*`, `legal-business-consultancy-*`, `legal-litigation-*` (640 / 1200 WebP) | Service heroes and cards |
| `legal-shield-640/1100`, `legal-partner-banner-800/1600` | "Designed and protected" sections |
| `shine-logo-320/640` | Shine Legal Associates card logo |
| `shine-logo-gold-640.webp` | Transparent gold version for dark backgrounds (not used yet) |
| `splash-orbit-cut-480/800` (transparent cut-out), `logo-mark-256/512` | Intro animation (old `splash-bg-*`, `splash-mobile-*`, `splash-orbit-480/800` are no longer used) |
| `legal-pattern-1600.webp` | Dark section background |
| `og-legal.jpg`, `og-blog-ip.jpg` | Social share images (1200x630) |
Not used: the scales-of-justice badge (`Screenshot ...102550`). Keep it for a favicon or social avatar.

## Build and deploy
```bash
cd react-app
npm install
npm run build      # outputs dist/ (prerendered)
```
Upload everything in `dist/` (including `.htaccess`) to `public_html`. The ready-made static release at the repository root is the OLD version until you rebuild and replace it.

This update was written without network access, so it could not be built or opened in a browser here. Run `npm run dev` first and check: Home (intro animation), `/services/`, `/services/legal-services/`, one legal page, the new blog post, and the menu on a phone-width window.
