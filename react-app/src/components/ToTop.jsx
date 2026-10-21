import useScrolledPast from '../hooks/useScrolledPast.js'
import { prefersReducedMotion } from '../site.js'

export default function ToTop() {
  const show = useScrolledPast(600)
  return (
    <button
      type="button"
      className={'to-top' + (show ? ' show' : '')}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 15l6-6 6 6" />
      </svg>
    </button>
  )
}
