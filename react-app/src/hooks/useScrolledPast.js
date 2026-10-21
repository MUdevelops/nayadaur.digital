import { useEffect, useState } from 'react'

/** true once the page is scrolled more than `px` pixels (rAF-throttled, passive) */
export default function useScrolledPast(px) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    let ticking = false
    const update = () => {
      setPast(window.scrollY > px)
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [px])
  return past
}
