import { SITE, CONTACT } from '../config/site.js'
import { SERVICES } from '../data/services.js'
import { FAQS } from '../data/content.js'

/**
 * JSON-LD for the page. Built from the same data that renders the visible
 * content (services + FAQ), so structured data always matches what users see.
 * Injected into index.html at build/dev time by the plugin in vite.config.js.
 */
export function buildJsonLd(siteUrl) {
  const home = `${siteUrl}/`
  const orgId = `${home}#organization`

  const sameAs = Object.values(CONTACT.social).filter((u) => u && u !== '#')

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: SITE.name,
        slogan: SITE.tagline,
        description: SITE.description,
        url: home,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/images/icon-512.png`, width: 512, height: 512 },
        image: `${siteUrl}/images/og-image.jpg`,
        telephone: CONTACT.phoneIntl,
        email: CONTACT.email,
        areaServed: { '@type': 'Country', name: 'Pakistan' },
        availableLanguage: ['English', 'Urdu'],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: CONTACT.phoneIntl,
            email: CONTACT.email,
            areaServed: 'PK',
            availableLanguage: ['English', 'Urdu'],
          },
        ],
        ...(sameAs.length ? { sameAs } : {}),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'NayaDaur Digital services',
          itemListElement: SERVICES.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.description },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${home}#website`,
        url: home,
        name: SITE.name,
        inLanguage: 'en',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'FAQPage',
        '@id': `${home}#faq`,
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}
