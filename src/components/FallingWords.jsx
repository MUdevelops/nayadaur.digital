import { useMemo } from 'react'
import { FALLING_WORDS } from '../data/content.js'
import { useMediaQuery } from '../hooks/useMediaQuery.js'

/** Decorative Urdu words drifting down the hero (skipped for reduced motion). */
export default function FallingWords() {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const isSmall = useMediaQuery('(max-width: 699px)')
  const count = isSmall ? 7 : 14

  const words = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        text: FALLING_WORDS[i % FALLING_WORDS.length],
        left: (i * 97) / count + Math.random() * 5,
        size: 18 + Math.floor(Math.random() * 28),
        opacity: 0.1 + Math.random() * 0.15,
        color: i % 2 ? '#10B981' : '#0B5D3B',
        duration: 14 + Math.floor(Math.random() * 16),
        delay: Math.floor(Math.random() * 20),
      })),
    [count],
  )

  if (reduceMotion) return null

  return (
    <div className="fall" aria-hidden="true">
      {words.map((w, i) => (
        <span
          key={i}
          lang="ur"
          style={{
            left: `${w.left.toFixed(1)}%`,
            fontSize: `${w.size}px`,
            opacity: w.opacity.toFixed(2),
            color: w.color,
            animationDuration: `${w.duration}s`,
            animationDelay: `-${w.delay}s`,
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  )
}
