# NayaDaur Digital - Website (React + Vite)

Digital Soch, Behter Karobar. Single-page marketing site for NayaDaur Digital, converted from a single `index.html` into a maintainable React project. Same content, theme and features, no backend.

## Run it

Requires Node.js 20.19+ (or 22+).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist (also writes sitemap.xml + robots.txt)
npm run preview    # serve the production build locally
```

Deploy: Netlify is pre-configured (`netlify.toml`: build `npm run build`, publish `dist`).

## Deploy on Hostinger (from GitHub)

**Option A - Shared / Business hosting (hPanel > Git)**
1. Set your domain in `.env` (`VITE_SITE_URL=https://yourdomain.com`), run `npm install && npm run build`, and commit the updated `dist/` folder.
2. In hPanel open **Advanced > Git**, paste the repo URL, branch `main`, leave the directory empty (public_html), click **Create**, then **Deploy**.
3. The root `.htaccess` serves `/dist` as the site root, forces HTTPS and blocks source files. Enable "Auto deployment" with the webhook for deploys on every push.

**Option B - Hostinger Node.js Web Apps (Business/Cloud)**
1. **Websites > Add website > Node.js Apps > Import Git repository**, pick this repo.
2. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`, Node 20 or 22.
3. Add the environment variable `VITE_SITE_URL=https://yourdomain.com` and deploy.

## Before going live

1. Set your real domain in `.env` (`VITE_SITE_URL=https://yourdomain.com`, no trailing slash).
   It feeds the canonical URL, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt`.
   (The original file used `https://www.nddigital.netlify.app/`, which is not a valid Netlify address, so the fallback is `https://nddigital.netlify.app`.)
2. Add real social profile URLs in `src/config/site.js` (`CONTACT.social`). Entries left as `#` are hidden.
3. When you have real client reviews, add them to `TESTIMONIALS` in `src/data/content.js` and the section appears.

## Where to edit things

| What | File |
| --- | --- |
| Phone, WhatsApp, email, social links, nav, SEO title/description | `src/config/site.js` |
| Services, categories, form service options | `src/data/services.js` |
| Why-us, packages, process steps, FAQ, portfolio captions/alt text, testimonials | `src/data/content.js` |
| Budgets, languages, quick-template chips | `src/data/contact.js` |
| WhatsApp message wording | `src/lib/message.js` |
| Colors, radius, spacing, fonts | `src/styles/tokens.css` |
| Images | `public/images/` (WebP; `sample-N.webp` is 1400w, `sample-N-700.webp` is 700w) |

## Structure

```
index.html              SEO head (meta, OG, preloads, fonts) + noscript fallback
vite.config.js          React plugin + SEO plugin (JSON-LD, sitemap.xml, robots.txt)
public/                 images, favicons, site.webmanifest
src/
  main.jsx, App.jsx
  components/           Header, Hero, Services, WhyUs, Packages, Product, Process,
                        Portfolio, Lightbox, Testimonials, Faq, Contact, ContactForm,
                        Footer, FloatingActions, Reveal, Section, Icons, FallingWords
  context/              LeadFormContext (shared enquiry form state)
  hooks/                useScrolled, useActiveSection, useMediaQuery
  data/                 all site content as plain data
  lib/                  message builder, clipboard, asset path, cx
  seo/                  JSON-LD builder (generated from the same data as the page)
  styles/               tokens, base, buttons, layout, sections, contact, motion
```

## SEO notes

- Unique title and meta description, canonical, Open Graph + Twitter large-image card (1200x630 `og-image.jpg`), theme color, manifest.
- JSON-LD in the static HTML: `ProfessionalService` (with the real 15 services as an offer catalog), `WebSite`, and `FAQPage` built from the visible FAQ.
- Semantic landmarks, one `h1`, ordered `h2`/`h3`, skip link, labelled form fields, `aria-current` in the nav.
- Images are WebP with `srcset`, explicit width/height (no layout shift), lazy loading below the fold, and the hero image is preloaded.
- Google Fonts load non-blocking with `display=swap`.
- The page is rendered in the browser (Google handles this well). If you later want fully pre-rendered HTML for other crawlers, add a prerender step.
