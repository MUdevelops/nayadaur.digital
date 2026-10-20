import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE } from './src/config/site.js'
import { buildJsonLd } from './src/seo/structuredData.js'

/**
 * Build-time SEO helper:
 *  - replaces %SITE_URL% / %SITE_TITLE% / %SITE_DESCRIPTION% in index.html
 *  - injects JSON-LD (generated from the real content data)
 *  - emits robots.txt and sitemap.xml with the correct domain
 */
function seoPlugin(siteUrl) {
  return {
    name: 'nayadaur-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const jsonLd = JSON.stringify(buildJsonLd(siteUrl)).replace(/</g, '\\u003c')
        return html
          .replaceAll('%SITE_URL%', siteUrl)
          .replaceAll('%SITE_TITLE%', SITE.title)
          .replaceAll('%SITE_DESCRIPTION%', SITE.description)
          .replace('<!--JSON_LD-->', `<script type="application/ld+json">${jsonLd}</script>`)
      },
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n` +
          `</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = (process.env.VITE_SITE_URL || env.VITE_SITE_URL || SITE.defaultUrl).replace(/\/+$/, '')

  return {
    plugins: [react(), seoPlugin(siteUrl)],
    build: {
      target: 'es2020',
      cssCodeSplit: false,
      assetsInlineLimit: 0,
    },
  }
})
