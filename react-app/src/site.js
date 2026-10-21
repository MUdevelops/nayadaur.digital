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
