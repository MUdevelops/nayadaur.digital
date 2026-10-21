import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { applySeo, getSeo } from '../seo.js'
import { prefersReducedMotion } from '../site.js'

/**
 * Everything that has to happen when the route changes:
 * head tags, body class, scroll position, focus, entrance reveals, hero parallax.
 */
export default function useSiteEffects() {
  const { pathname, hash } = useLocation()
  const navType = useNavigationType()
  const firstRender = useRef(true)

  // <title>, meta tags, JSON-LD
  useEffect(() => {
    applySeo(getSeo(pathname))
  }, [pathname])

  // body.home (some styles depend on it)
  useEffect(() => {
    document.body.classList.toggle('home', pathname === '/')
  }, [pathname])

  // scroll + focus
  useEffect(() => {
    const first = firstRender.current
    firstRender.current = false
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) requestAnimationFrame(() => el.scrollIntoView())
      return
    }
    if (first || navType === 'POP') return // let the browser restore its position
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash, navType])

  // one fade-up entrance per element
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.rv:not(.in)'))
    if (!els.length) return
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [pathname])

  // gentle hero orb parallax (pointer devices only)
  useEffect(() => {
    const hero = document.querySelector('.hero2')
    const orb = document.querySelector('.orb')
    if (!hero || !orb || prefersReducedMotion() || !window.matchMedia('(hover:hover)').matches) return
    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      orb.style.transform = `translate(${x * 14}px,${y * 10}px)`
    }
    hero.addEventListener('mousemove', onMove)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      orb.style.transform = ''
    }
  }, [pathname])
}
