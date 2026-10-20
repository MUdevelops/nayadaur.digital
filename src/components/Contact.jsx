import { useEffect, useState } from 'react'
import { CONTACT, mailHref, telHref, waHref } from '../config/site.js'
import { copyText } from '../lib/clipboard.js'
import ContactForm from './ContactForm.jsx'
import Section from './Section.jsx'

export default function Contact() {
  const [copied, setCopied] = useState('')

  useEffect(() => {
    if (!copied) return undefined
    const t = setTimeout(() => setCopied(''), 4000)
    return () => clearTimeout(t)
  }, [copied])

  const copyValue = async (value) => {
    const ok = await copyText(value)
    setCopied(ok ? `Copied: ${value}` : `Copy not supported. Please copy manually: ${value}`)
  }

  const socials = Object.entries(CONTACT.social).filter(([, url]) => url && url !== '#')

  return (
    <Section id="contact" titleId="contact-title" dark pattern>
      <div className="two two--top">
        <div>
          <h2 id="contact-title">Contact Us</h2>
          <p className="ur ur--sub" lang="ur">رابطہ کریں</p>
          <p className="sub">Free audit ya quote ke liye message likhein, ya seedha call karein.</p>

          <div className="cb">
            <a className="btn btn--lime" href={telHref}>
              Call Now
            </a>
            <a className="btn btn--outline" href={waHref} target="_blank" rel="noopener">
              WhatsApp
            </a>
            <a className="btn btn--outline" href={mailHref}>
              Email
            </a>
          </div>

          <p>
            Phone:{' '}
            <button type="button" className="btn btn--outline btn--sm cpb" onClick={() => copyValue(CONTACT.phoneDisplay)}>
              <span>{CONTACT.phoneDisplay}</span>
              <small>tap to copy</small>
            </button>
          </p>
          <p>
            Email:{' '}
            <button type="button" className="btn btn--outline btn--sm cpb" onClick={() => copyValue(CONTACT.email)}>
              <span>{CONTACT.email}</span>
              <small>tap to copy</small>
            </button>
          </p>

          {socials.length > 0 && (
            <p className="soc">
              {socials.map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              ))}
            </p>
          )}
          <p className="copy-status" role="status">
            {copied}
          </p>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
