# NayaDaur Digital (React + Vite)

The full NayaDaur Digital website as a React app. Same design, content and URLs as the static site.
Every page is also prerendered to plain HTML at build time, so Google, WhatsApp previews and slow phones get real content before any JavaScript runs.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/ (prerendered, ready to upload)
npm run preview    # serve dist/ locally
```

Needs Node 18 or newer.

## Where things live

| What | Where |
| --- | --- |
| Page content (one file per page) | `src/pages/*.jsx` |
| URLs | `src/routes.js` |
| Title, description, social tags, JSON-LD per page | `src/data/seo.json` |
| Header, footer, menu, back-to-top, WhatsApp button | `src/components/` |
| Contact form options | `src/data/form-options.json` |
| Portfolio samples and filters | `src/data/portfolio.json` |
| Phone, WhatsApp number, email | `src/site.js` (and in page text where written out) |
| Styles | `src/styles/style.css` |
| Images, favicon, robots.txt, sitemap.xml, .htaccess | `public/` |

To add a page: create `src/pages/NewPage.jsx`, add it to `src/routes.js`, add its entry to `src/data/seo.json` and `public/sitemap.xml`.

## Deploy on Hostinger

1. Run `npm run build`.
2. hPanel > Websites > nayadaur.digital > File Manager > `public_html`. Delete the default placeholder if present.
3. Upload everything inside `dist/` (including the hidden `.htaccess`) so `index.html` sits directly in `public_html`.
4. Check that SSL is active, then open `/`, `/services/`, `/blog/`, `/contact/` and a wrong URL (shows the branded 404).
5. Search Console: submit `https://nayadaur.digital/sitemap.xml`.

`.htaccess` is unchanged from the static version: it forces HTTPS, redirects www to the bare domain, serves `/404.html` for unknown URLs and caches hashed assets for a year.

## Old Netlify address

Hostinger cannot redirect `nddigital.netlify.app`. In Netlify either make `nayadaur.digital` the primary domain, or add a `netlify.toml` to the old site:

```toml
[[redirects]]
  from = "https://nddigital.netlify.app/*"
  to = "https://nayadaur.digital/:splat"
  status = 301
  force = true
```
