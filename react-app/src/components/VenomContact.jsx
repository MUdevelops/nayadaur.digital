import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { prefersReducedMotion } from '../site.js'

/**
 * Home page contact section: white background, blue "Contact now" button, and a venom-style
 * tendril effect. The tendrils stay hidden behind the button until the pointer enters the
 * section; then they come out of the button and stretch toward the pointer.
 * - The server renders the section, heading and a working link; the effect is added afterwards,
 *   so prerendered HTML, SEO and no-JS visitors are unaffected.
 * - The effect code is a separate chunk loaded when the browser is idle.
 */
export default function VenomContact() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const conn = navigator.connection
    if (conn && conn.saveData) return undefined

    let cancelled = false
    let fx = null

    const boot = () => {
      import('../lib/venom.js')
        .then((m) => {
          if (cancelled) return
          fx = m.createVenom(sectionRef.current, canvasRef.current, buttonRef.current, {
            reduced: prefersReducedMotion(),
          })
        })
        .catch(() => {})
    }

    const ric = window.requestIdleCallback
    const handle = ric ? ric(boot, { timeout: 1500 }) : window.setTimeout(boot, 350)

    return () => {
      cancelled = true
      if (ric) window.cancelIdleCallback(handle)
      else window.clearTimeout(handle)
      if (fx) fx.destroy()
    }
  }, [])

  return (
    <section ref={sectionRef} className="contact-now" id="contact-now" aria-labelledby="contact-now-t">
      <canvas ref={canvasRef} className="venom" aria-hidden="true" />
      <div className="container contact-now__inner">
        <span className="eyebrow rv">Contact</span>
        <h2 id="contact-now-t" className="rv" style={{ '--i': '1' }}>Let’s build your online presence</h2>
        <p className="rv" style={{ '--i': '2' }}>Tell us what your business needs. We reply with clear next steps, not a hard sell.</p>
        <Link ref={buttonRef} className="vbtn rv" style={{ '--i': '3' }} to="/contact/">
          <span className="vbtn__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 3.5L10.5 14.5" /><path d="M21.5 3.5l-6.8 18-4.2-7-7-4.2z" /></svg>
          </span>
          <span className="vbtn__label">Contact now</span>
        </Link>
      </div>
    </section>
  )
}
