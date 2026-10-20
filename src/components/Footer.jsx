import { CONTACT, NAV_LINKS, SITE, mailHref, telHref } from '../config/site.js'
import { asset } from '../lib/asset.js'

const FOOTER_LINKS = NAV_LINKS.filter((l) => l.id !== 'portfolio')
const FOOTER_SERVICES = ['Logo & brand kit', 'Websites & online stores', 'Google & Meta ads', 'Invoice & udhaar software']

export default function Footer() {
  return (
    <footer className="site-footer pat">
      <div className="container footer__grid">
        <div>
          <a href="#top" aria-label={`${SITE.name} - back to top`}>
            <img
              className="footer__logo"
              src={asset('images/logo-320.webp')}
              width="126"
              height="48"
              alt={`${SITE.name} logo`}
              loading="lazy"
              decoding="async"
            />
          </a>
          <p>
            <b>{SITE.tagline}</b>
          </p>
          <p className="ur" lang="ur">
            {SITE.taglineUrdu}
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="footer__title">Quick links</h2>
          {FOOTER_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div>
          <h2 className="footer__title">Services</h2>
          {FOOTER_SERVICES.map((label) => (
            <a key={label} href="#services">
              {label}
            </a>
          ))}
        </div>

        <div>
          <h2 className="footer__title">Contact</h2>
          <a href={telHref}>{CONTACT.phoneDisplay}</a>
          <a href={mailHref}>{CONTACT.email}</a>
          <p className="footer__note">Online across Pakistan</p>
        </div>

        <p className="footer__legal">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
