import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS, SITE } from '../config/site.js'
import { useScrolled } from '../hooks/useScrolled.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useLeadForm } from '../context/LeadFormContext.jsx'
import { asset } from '../lib/asset.js'
import { cx } from '../lib/cx.js'
import { MenuIcon, WhatsAppIcon } from './Icons.jsx'

const SPY_IDS = ['home', 'services', 'why', 'packages', 'product', 'process', 'portfolio', 'faq', 'contact']
const LOGO_RATIO = 1939 / 736

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(10)
  const active = useActiveSection(SPY_IDS)
  const { pickService } = useLeadForm()
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  // Close the mobile menu: Escape, click outside, or growing to desktop width.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointer = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(false)
    }
    const mq = window.matchMedia('(min-width: 961px)')
    const onResize = () => {
      if (mq.matches) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    mq.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      mq.removeEventListener('change', onResize)
    }
  }, [open])

  return (
    <header ref={headerRef} className={cx('site-header', scrolled && 'is-scrolled')}>
      <div className="container nav">
        <a className="brand" href="#top" aria-label={`${SITE.name} - back to top`}>
          <img
            src={asset('images/logo.webp')}
            srcSet={`${asset('images/logo-320.webp')} 320w, ${asset('images/logo.webp')} 640w`}
            sizes="140px"
            width={Math.round(52 * LOGO_RATIO)}
            height="52"
            alt={`${SITE.name} logo`}
            decoding="async"
          />
        </a>

        <nav id="site-nav" className={cx('nav__menu', open && 'is-open')} aria-label="Primary">
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  className="nav__link"
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="btn btn--wa btn--sm nav__cta"
          href="#contact"
          aria-label="WhatsApp Us"
          onClick={() => {
            pickService('Free Digital Audit')
            setOpen(false)
          }}
        >
          <WhatsAppIcon className="wi" />
          <span className="nav__cta-text">WhatsApp Us</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  )
}
