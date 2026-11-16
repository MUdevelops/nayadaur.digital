import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Puts the particle field behind the blue (dark) areas of the site only:
 * the home hero, every inner-page hero, each dark section, the CTA band and the footer.
 * Cream and white sections stay clean, with no particles at all.
 *
 * - Renders nothing, so prerendered HTML, SEO and hydration are unchanged.
 * - The engine is a separate chunk, loaded when the browser is idle (never on the critical path).
 * - Skipped when the visitor has data-saver on. If anything fails, the page simply stays
 *   as it was (the hero keeps its falling-words background).
 * - A new blue section only needs one of the classes in TARGETS to get the effect.
 */
const TARGETS = [
  ['.hero2', 'hero'],
  ['.phero', 'hero'],
  ['.section--dark', 'section'],
  ['.cta-band', 'section'],
  ['.site-footer', 'soft'],
]

export default function Particles() {
  const { pathname } = useLocation()

  useEffect(() => {
    const conn = navigator.connection
    if (conn && conn.saveData) return undefined

    let cancelled = false
    const mounted = []

    const boot = () => {
      import('../lib/particles.js')
        .then((m) => {
          if (cancelled) return
          TARGETS.forEach(([selector, variant]) => {
            document.querySelectorAll(selector).forEach((host) => {
              const handle = m.mountParticles(host, variant)
              if (handle) mounted.push(handle)
            })
          })
        })
        .catch(() => {})
    }

    const ric = window.requestIdleCallback
    const handle = ric ? ric(boot, { timeout: 1200 }) : window.setTimeout(boot, 300)

    return () => {
      cancelled = true
      if (ric) window.cancelIdleCallback(handle)
      else window.clearTimeout(handle)
      mounted.forEach((h) => h.destroy())
    }
  }, [pathname])

  return null
}
