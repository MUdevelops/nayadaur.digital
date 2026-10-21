import { useRef, useState } from 'react'
import { useIsoLayoutEffect } from '../hooks/useIsoLayoutEffect.js'
import { prefersReducedMotion } from '../site.js'

/** Counts up to `to` the first time it is mostly on screen. Server and no-JS show the final number. */
export default function Counter({ to }) {
  const ref = useRef(null)
  const [value, setValue] = useState(to)

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return
    let raf = 0
    setValue(0)
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (t) => {
          const p = Math.min((t - t0) / 1200, 1)
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )
    io.observe(ref.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return <b ref={ref}>{value}</b>
}
