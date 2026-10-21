import { waLink } from '../site.js'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink('Assalam o Alaikum NayaDaur Digital! Mujhe madad chahiye.')}
      target="_blank"
      rel="noopener"
      aria-label="Chat with NayaDaur Digital on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa" /></svg>
    </a>
  )
}
