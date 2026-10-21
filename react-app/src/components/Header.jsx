import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useScrolledPast from '../hooks/useScrolledPast.js'
import { prefersReducedMotion, waLink } from '../site.js'

export const SERVICES = [
  ['Website Development', '/services/website-development/'],
  ['Logo Design & Branding', '/services/logo-design-branding/'],
  ['Google Business Profile', '/services/google-business-profile/'],
  ['Google Ads', '/services/google-ads/'],
  ['Social Media Marketing', '/services/social-media-marketing/'],
  ['Business Software', '/services/business-software/'],
  ['Graphic Design', '/services/graphic-design/'],
]

const LINKS = [
  ['Portfolio', '/portfolio/'],
  ['Pricing', '/pricing/'],
  ['About', '/about/'],
  ['Guides', '/blog/'],
  ['Contact', '/contact/'],
]

const CTA_TEXT = 'Assalam o Alaikum NayaDaur Digital! Mujhe apne business ke liye madad chahiye. Meherbani kar ke rabta karein.'

// "page" on the exact page, "true" on a parent section (e.g. Services while on a service page)
const current = (pathname, href) => {
  const p = pathname.endsWith('/') ? pathname : pathname + '/'
  if (p === href) return 'page'
  return p.startsWith(href) ? 'true' : undefined
}

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const stuck = useScrolledPast(8)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  // close menus after any navigation
  useEffect(() => {
    setOpen(false)
    setSubOpen(false)
  }, [pathname])

  // Escape, click outside, and leaving the mobile layout close the menu
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointer = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(false)
    }
    const mq = window.matchMedia('(min-width: 900px)')
    const onMq = (e) => e.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const goTop = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    }
  }

  return (
    <header className={'site-header' + (stuck ? ' is-stuck' : '')} ref={headerRef}>
      <div className="container nav">
        <Link className="brand" to="/" aria-label="NayaDaur Digital home" onClick={goTop}>
          <img
            src="/assets/images/logo.webp"
            srcSet="/assets/images/logo-320.webp 320w, /assets/images/logo.webp 640w"
            sizes="132px"
            width="137"
            height="52"
            alt="NayaDaur Digital"
          />
        </Link>
        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path className="i-open" d="M4 7h16M4 12h16M4 17h16" />
            <path className="i-close" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <nav
          id="site-nav"
          className={'nav__menu' + (open ? ' is-open' : '')}
          aria-label="Primary"
          onClick={(e) => e.target.closest('a') && setOpen(false)}
        >
          <ul className="nav__list">
            <li className={'has-sub' + (subOpen ? ' is-open' : '')}>
              <Link className="nav__link" to="/services/" aria-current={current(pathname, '/services/')}>Services</Link>
              <button
                type="button"
                className="sub-toggle"
                aria-expanded={subOpen}
                aria-label="Show services menu"
                onClick={() => setSubOpen((v) => !v)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </button>
              <ul className="subnav">
                {SERVICES.map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} aria-current={current(pathname, href) === 'page' ? 'page' : undefined}>{label}</Link>
                  </li>
                ))}
              </ul>
            </li>
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <Link className="nav__link" to={href} aria-current={current(pathname, href)}>{label}</Link>
              </li>
            ))}
          </ul>
          <a className="btn btn--sm nav__cta" href={waLink(CTA_TEXT)} target="_blank" rel="noopener">
            <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
