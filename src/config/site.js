/**
 * Single place for brand + contact details.
 * This file is plain JS (no JSX / no browser APIs) so vite.config.js can
 * also import it to generate SEO files at build time.
 */

export const SITE = {
  name: 'NayaDaur Digital',
  tagline: 'Digital Soch, Behter Karobar',
  taglineUrdu: 'ڈیجیٹل سوچ، بہتر کاروبار',
  // Fallback only. The real value comes from VITE_SITE_URL in .env
  defaultUrl: 'https://yourdomain.com',
  title: 'NayaDaur Digital | Logo, Website, Google Ads & Software in Pakistan',
  description:
    'Logo design, websites, Google Business Profile, WhatsApp setup, ads and udhaar/invoice software for Pakistani businesses. Get a free digital audit.',
  themeColor: '#0B5D3B',
}

/* ===== EDIT CONTACT DETAILS HERE (one place) ===== */
export const CONTACT = {
  phoneDisplay: '0321 9211464',
  phoneIntl: '+923219211464',
  wa: '923219211464',
  email: 'logicryft@gmail.com',
  // EDIT: put real profile URLs. Entries left as '#' are not shown on the site.
  social: { Facebook: '#', Instagram: '#', LinkedIn: '#' },
}

export const telHref = `tel:${CONTACT.phoneIntl}`
export const waHref = `https://wa.me/${CONTACT.wa}`
export const mailHref = `mailto:${CONTACT.email}`

export const NAV_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'packages', label: 'Packages' },
  { id: 'process', label: 'Process' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]
