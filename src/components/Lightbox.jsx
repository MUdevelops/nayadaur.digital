import { useEffect, useRef } from 'react'
import { asset } from '../lib/asset.js'
import { ChevronIcon } from './Icons.jsx'

/**
 * Accessible modal image viewer: Escape / backdrop click to close, arrow keys
 * and buttons to browse, focus trapped inside and restored on close, page scroll locked.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const rootRef = useRef(null)
  const closeRef = useRef(null)
  const handlers = useRef({ onClose, onNavigate })
  handlers.current = { onClose, onNavigate }

  const item = items[index]
  const many = items.length > 1

  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') {
        handlers.current.onClose()
      } else if (e.key === 'ArrowLeft') {
        handlers.current.onNavigate(-1)
      } else if (e.key === 'ArrowRight') {
        handlers.current.onNavigate(1)
      } else if (e.key === 'Tab') {
        const focusable = rootRef.current ? [...rootRef.current.querySelectorAll('button')] : []
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (opener && typeof opener.focus === 'function') opener.focus()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={(e) => {
        if (!e.target.closest('.lightbox__fig, button')) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="lightbox__close" aria-label="Close image viewer" onClick={onClose}>
        &times;
      </button>

      {many && (
        <button type="button" className="lightbox__nav lightbox__nav--prev" aria-label="Previous image" onClick={() => onNavigate(-1)}>
          <ChevronIcon direction="left" />
        </button>
      )}

      <figure className="lightbox__fig">
        <img src={asset(`images/sample-${item.n}.webp`)} alt={item.alt} width="1400" height="939" decoding="async" />
        <figcaption>
          {item.caption} <span className="vh">({index + 1} of {items.length})</span>
        </figcaption>
      </figure>

      {many && (
        <button type="button" className="lightbox__nav lightbox__nav--next" aria-label="Next image" onClick={() => onNavigate(1)}>
          <ChevronIcon direction="right" />
        </button>
      )}
    </div>
  )
}
