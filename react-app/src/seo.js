import seo from './data/seo.json'

export const ORIGIN = 'https://nayadaur.digital'
const OG_IMAGE = `${ORIGIN}/assets/images/og-image.jpg`
const OG_IMAGE_ALT = 'NayaDaur Digital logo with service icons: Digital Soch, Behter Karobar'

export function getSeo(path) {
  const key = path.endsWith('/') ? path : path + '/'
  return seo[key] || seo['/404/']
}

/** Every <meta>/<link> a page needs in <head>, built from its entry in data/seo.json */
export function buildTags(e) {
  const url = e.canonical ? ORIGIN + e.canonical : null
  const ogUrl = e.ogUrl ? ORIGIN + e.ogUrl : url
  const tags = []
  const meta = (key, content, attr = 'name') => tags.push({ tag: 'meta', attrs: { [attr]: key, content } })

  meta('description', e.description)
  if (e.robots) meta('robots', e.robots)
  if (url) tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } })
  meta('og:type', e.ogType || 'website', 'property')
  meta('og:site_name', 'NayaDaur Digital', 'property')
  meta('og:locale', 'en_PK', 'property')
  meta('og:title', e.ogTitle || e.title, 'property')
  meta('og:description', e.description, 'property')
  if (ogUrl) meta('og:url', ogUrl, 'property')
  meta('og:image', OG_IMAGE, 'property')
  meta('og:image:width', '1200', 'property')
  meta('og:image:height', '630', 'property')
  meta('og:image:alt', OG_IMAGE_ALT, 'property')
  meta('twitter:card', 'summary_large_image')
  meta('twitter:title', e.twitterTitle || e.title)
  meta('twitter:description', e.description)
  meta('twitter:image', OG_IMAGE)
  for (const x of e.extra || []) {
    const { tag, ...attrs } = x
    tags.push({ tag, attrs })
  }
  return tags
}

/** Browser: keep <title>, meta tags and JSON-LD in sync with the current route */
export function applySeo(e) {
  document.title = e.title
  document.head.querySelectorAll('[data-seo]').forEach((n) => n.remove())
  for (const { tag, attrs } of buildTags(e)) {
    const el = document.createElement(tag)
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
    el.setAttribute('data-seo', '')
    document.head.appendChild(el)
  }
  if (e.jsonLd) {
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.setAttribute('data-seo', '')
    s.textContent = JSON.stringify(e.jsonLd)
    document.head.appendChild(s)
  }
}

const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Server / prerender: same tags as an HTML string */
export function headToString(e) {
  const out = [`<title>${esc(e.title)}</title>`]
  for (const { tag, attrs } of buildTags(e)) {
    const a = Object.entries(attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(' ')
    out.push(`<${tag} ${a} data-seo>`)
  }
  if (e.jsonLd) {
    out.push(`<script type="application/ld+json" data-seo>${JSON.stringify(e.jsonLd).replace(/</g, '\\u003c')}</script>`)
  }
  return out.join('\n')
}
