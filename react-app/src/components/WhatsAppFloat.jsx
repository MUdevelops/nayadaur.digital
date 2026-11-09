import { useLocation } from 'react-router-dom'
import { waLink, waTextForPath } from '../site.js'

export default function WhatsAppFloat() {
  const { pathname } = useLocation()
  return (
    <a
      className="wa-float"
      href={waLink(waTextForPath(pathname))}
      target="_blank"
      rel="noopener"
      aria-label="Chat with NayaDaur Digital on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa" /></svg>
    </a>
  )
}
