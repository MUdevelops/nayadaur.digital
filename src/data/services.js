export const CATEGORIES = {
  id: 'Identity',
  pr: 'Presence',
  gr: 'Growth',
  op: 'Operations',
}

export const SERVICES = [
  { id: 'logo-brand-kit', category: 'id', title: 'Logo and Brand Kit', description: 'Colors, fonts and social templates so your business looks the same everywhere.' },
  { id: 'urdu-bilingual-logo', category: 'id', title: 'Urdu and Bilingual Logo / Calligraphy', description: 'Urdu naam ko khoobsurat logo mein badlein, Urdu logo design Pakistan style.' },
  { id: 'product-photo-catalog', category: 'id', title: 'Product Photography Editing and Catalog Design', description: 'Clean photos and catalogs that help products sell.' },
  { id: 'menu-banners-labels', category: 'id', title: 'Menu Cards, Banners and Packaging Labels', description: 'Print-ready menu card design, banners and labels.' },
  { id: 'canva-designs', category: 'id', title: 'Canva Designs', description: 'Posts, stories, flyers and presentations ready to use.' },
  { id: 'landing-pages', category: 'pr', title: 'Landing Pages and Frontend Websites', description: 'Fast, mobile-friendly website design Pakistan customers can find.' },
  { id: 'ecommerce-store', category: 'pr', title: 'Online E-Commerce Store', description: 'Online dukan banwayen and sell products from your phone.' },
  { id: 'google-business-profile', category: 'pr', title: 'Google Business Profile Setup and Optimization', description: 'Show up on Google Maps when people search nearby.' },
  { id: 'social-media-setup', category: 'pr', title: 'Social Media Setup', description: 'Facebook, Instagram, TikTok and YouTube set up properly.' },
  { id: 'whatsapp-business', category: 'pr', title: 'WhatsApp Business Setup', description: 'Profile, catalog, quick replies and labels to answer faster.' },
  { id: 'google-ads', category: 'gr', title: 'Google Ads (Search and Maps)', description: 'Reach people searching for what you sell. Google Ads Pakistan.' },
  { id: 'meta-ads', category: 'gr', title: 'Facebook and Instagram Ads Management', description: 'Campaigns managed for steady enquiries.' },
  { id: 'qr-review-system', category: 'gr', title: 'QR-Based Review System', description: 'Customers scan, then review you on Google.' },
  { id: 'invoice-system', category: 'op', title: 'Local Invoice System', description: 'Invoice software built in Python for your shop.' },
  { id: 'udhaar-system', category: 'op', title: 'Udhaar Management System', description: 'Customer credit ledger, balances and reminders, Urdu-friendly.' },
]

/** Options of the "Service needed" select: every service + 3 extras. */
export const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  'Free Digital Audit',
  'Custom package',
  'Other',
]
