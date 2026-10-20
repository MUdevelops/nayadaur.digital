export const WHY_US = [
  { title: 'Urdu and bilingual design', text: 'Logos and layouts that work in Urdu and English.' },
  { title: 'Everything under one roof', text: 'Brand, website, ads and software from one team.' },
  { title: 'Simple Roman Urdu', text: 'No jargon. Clear baat-cheet on WhatsApp.' },
  { title: 'Clear scope and timelines', text: 'You know what you get and when.' },
  { title: 'Tools made for local shops', text: 'Udhaar and invoice software that fits Pakistani business.' },
  { title: 'Ongoing support', text: 'Help after launch, not just before.' },
]

export const PACKAGES = [
  { id: 'shuruaat', title: 'Shuruaat (Starter)', items: ['Google Business Profile', 'WhatsApp Business setup', 'QR review system', '3 Canva designs'] },
  { id: 'pehchan', title: 'Pehchan (Identity)', items: ['Logo and brand kit', 'Urdu/bilingual logo option', 'menu/banner set', 'social media templates'] },
  { id: 'taraqqi', title: 'Taraqqi (Growth)', items: ['Landing page', 'social setup', 'Facebook/Instagram ads management', 'local SEO basics'], popular: true },
  { id: 'kamyabi', title: 'Kamyabi (Complete)', items: ['Website or online store', 'catalog design', 'Google and Meta ads', 'invoice or udhaar system', 'monthly support'] },
]

export const PROCESS_STEPS = [
  'Tell us about your business',
  'Free audit and plan',
  'Design and build',
  'Review and revisions',
  'Launch and support',
]

export const UDHAAR_FEATURES = [
  'Customer ledger (khata) with balances',
  'Payment tracking',
  'Printable invoices',
  'Daily reports',
  'Urdu / English interface',
]

/* Portfolio images live in /public/images as sample-N.webp (1400w) and sample-N-700.webp */
export const SAMPLES = [
  { alt: 'Concept brand identity for a fictional botanicals brand, Baagh Botanicals, with color palette', caption: 'Brand identity' },
  { alt: 'Concept packaging label for a fictional honey brand', caption: 'Packaging label' },
  { alt: 'Concept clothing catalog layout for a fictional boutique', caption: 'Catalog design' },
  { alt: 'Concept QR review stand for a fictional salon', caption: 'QR review stand' },
  { alt: 'Concept brand kit for a fictional cafe called Chai Ghar', caption: 'Brand kit' },
  { alt: 'Concept menu card and banner for a fictional fast-food restaurant', caption: 'Menu and banner' },
  { alt: 'Concept bilingual Urdu and English logo for a fictional bakery', caption: 'Bilingual logo' },
].map((s, i) => ({ ...s, n: i + 1 }))

/*
 * TESTIMONIALS: the section stays hidden until real reviews exist.
 * To show it, add real reviews here, e.g.
 *   { quote: 'Real review text', author: 'Client name, business' }
 */
export const TESTIMONIALS = []

export const FAQS = [
  { q: 'What services do you offer?', a: 'Logo and brand design, websites and online stores, Google Business Profile, social and WhatsApp setup, Google and Meta ads, and invoice or udhaar software.' },
  { q: 'How long does a logo or website take?', a: 'Usually a few days for a logo and one to a few weeks for a website. It depends on the project and how fast feedback arrives.' },
  { q: 'Do you work in Urdu and English?', a: 'Yes. We work in Urdu, English and Roman Urdu.' },
  { q: 'How do payments work?', a: 'Usually an advance first and the balance on delivery. Confirm the details on WhatsApp.' },
  { q: 'Who pays for ad budgets?', a: 'You pay Meta or Google directly. We manage the campaigns.' },
  { q: 'What is a digital audit?', a: 'A free review of your online presence (Google, social, WhatsApp, website) with clear next steps.' },
  { q: 'Do you offer support after delivery?', a: 'Yes. Ask us about support when you request a quote.' },
  { q: 'Which cities do you serve?', a: 'Online across Pakistan.' },
]

export const FALLING_WORDS = ['کاروبار', 'کامیابی', 'ترقی', 'نیا دور', 'ڈیجیٹل', 'سوچ', 'بہتر', 'اعتماد', 'منافع', 'گاہک', 'دکان', 'آن لائن']
