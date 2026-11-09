import legal from './data/legal.json'

export const SITE = {
  name: 'NayaDaur Digital',
  origin: 'https://nayadaur.digital',
  waNumber: '923219211464',
  phoneDisplay: '0321 9211464',
  phoneHref: 'tel:+923219211464',
  email: 'info@nayadaur.digital',
}

export const waLink = (text) =>
  `https://wa.me/${SITE.waNumber}` + (text ? `?text=${encodeURIComponent(text)}` : '')

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// WhatsApp message that matches the page / service the visitor is looking at.
const WA_TOPICS = {
  '/services/': 'aap ki services',
  '/services/website-development/': 'website development',
  '/services/logo-design-branding/': 'logo design and branding',
  '/services/google-business-profile/': 'Google Business Profile setup',
  '/services/google-ads/': 'Google Ads management',
  '/services/social-media-marketing/': 'social media marketing and ads',
  '/services/business-software/': 'business software',
  '/services/graphic-design/': 'graphic design',
  '/services/legal-services/': 'legal services',
  '/blog/trademark-registration-pakistan-brand-protection/': 'trademark registration',
  '/blog/how-to-get-your-business-on-google-maps-in-pakistan/': 'Google Business Profile setup',
  '/blog/what-to-prepare-before-hiring-website-developer-pakistan/': 'website development',
  '/blog/does-small-business-need-website-or-just-social-media/': 'website aur social media',
  '/pricing/': 'pricing aur packages',
  '/portfolio/': 'aap ke portfolio jaisa project',
  '/about/': 'NayaDaur Digital services',
}

export const DEFAULT_WA_TEXT =
  'Assalam o Alaikum NayaDaur Digital! Mujhe apne business ke liye madad chahiye. Meherbani kar ke rabta karein.'

export const waTextForPath = (pathname = '/') => {
  const p = pathname.endsWith('/') ? pathname : pathname + '/'
  const m = p.match(/^\/services\/legal-services\/([^/]+)\/$/)
  const item = m && legal.find((x) => x.slug === m[1])
  const topic = item ? item.wa : WA_TOPICS[p]
  return topic
    ? `Assalam o Alaikum NayaDaur Digital! Mujhe ${topic} ke baare mein baat karni hai. Meherbani kar ke rabta karein.`
    : DEFAULT_WA_TEXT
}
