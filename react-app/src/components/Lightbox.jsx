import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

/** Accessible image viewer: Esc closes, arrows step, Tab stays inside, focus returns to the opener. */
export default function Lightbox({ items, index, onStep, onClose }) {
  const boxRef = useRef(null)
  const closeRef = useRef(null)
  const item = items[index]

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onStep(-1)
      else if (e.key === 'ArrowRight') onStep(1)
      else if (e.key === 'Tab' && boxRef.current) {
        const btns = boxRef.current.querySelectorAll('button')
        const first = btns[0]
        const last = btns[btns.length - 1]
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
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, onStep])

  if (!item) return null

  return createPortal(
    <div
      className="lightbox"
      ref={boxRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={(e) => {
        if (e.target.closest('.lightbox__close') || !e.target.closest('.lightbox__fig, button')) onClose()
      }}
    >
      <button type="button" className="lightbox__close" aria-label="Close image viewer" ref={closeRef}>&times;</button>
      <button type="button" className="lb-prev" aria-label="Previous image" onClick={() => onStep(-1)}>&#8249;</button>
      <figure className="lightbox__fig">
        <img key={item.n} src={item.src} alt={item.alt} width={item.w} height={item.h} />
        <figcaption>{item.cap} ({index + 1} of {items.length})</figcaption>
      </figure>
      <button type="button" className="lb-next" aria-label="Next image" onClick={() => onStep(1)}>&#8250;</button>
    </div>,
    document.body
  )
}
