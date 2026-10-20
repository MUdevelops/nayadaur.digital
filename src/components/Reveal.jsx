import { useEffect, useRef, useState } from 'react'
import { cx } from '../lib/cx.js'

/**
 * Fade/slide-in when scrolled into view (same effect as the original `.rv`
 * + IntersectionObserver). Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({ as: Tag = 'div', className, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={cx('rv', shown && 'in', className)} {...rest}>
      {children}
    </Tag>
  )
}
