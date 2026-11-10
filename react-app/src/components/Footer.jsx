import { Link, useLocation } from 'react-router-dom'
import { SERVICES } from './Header.jsx'
import { SITE, waLink, waTextForPath } from '../site.js'

const COMPANY = [
  ['About', '/about/'],
  ['Portfolio', '/portfolio/'],
  ['Pricing', '/pricing/'],
  ['Guides', '/blog/'],
  ['Join Our Team', '/join-our-team/'],
  ['Contact', '/contact/'],
  ['Privacy Policy', '/privacy-policy/'],
  ['Terms', '/terms/'],
]

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" aria-label="NayaDaur Digital home">
            <img className="footer__logo" src="/assets/images/logo-320.webp?v=4" width="126" height="48" alt="NayaDaur Digital" loading="lazy" decoding="async" />
          </Link>
          <p className="footer__note">
            <strong className="ur" lang="ur">ڈیجیٹل سوچ، بہتر کاروبار</strong>
            <br />
            <strong>Digital Soch, Behter Karobar</strong>
            <br />
            Okara, Punjab, serving clients across Pakistan.
            <br />
            Legal services by Shine Legal Associates.
          </p>
        </div>
        <nav aria-label="Services">
          <h2 className="footer__title">Services</h2>
          <div className="footer__links">
            {SERVICES.map(([label, href]) => (
              <Link key={href} to={href}>{label}</Link>
            ))}
          </div>
        </nav>
        <nav aria-label="Company">
          <h2 className="footer__title">Company</h2>
          <div className="footer__links">
            {COMPANY.map(([label, href]) => (
              <Link key={href} to={href}>{label}</Link>
            ))}
          </div>
        </nav>
        <div>
          <h2 className="footer__title">Contact</h2>
          <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          <a href={waLink(waTextForPath(pathname))} target="_blank" rel="noopener">WhatsApp</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
        <p className="footer__legal">
          &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> NayaDaur Digital. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
