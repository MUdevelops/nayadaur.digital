import { telHref, waHref } from '../config/site.js'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

/** Fixed WhatsApp + Call buttons (icon-only on mobile, labelled from 768px). */
export default function FloatingActions() {
  return (
    <div className="fl">
      <a className="fb wa" href={waHref} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
        <span className="t">WhatsApp</span>
      </a>
      <a className="fb ca" href={telHref} aria-label="Call NayaDaur Digital">
        <PhoneIcon />
        <span className="t">Call</span>
      </a>
    </div>
  )
}
