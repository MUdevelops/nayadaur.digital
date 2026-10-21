import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import options from '../data/form-options.json'
import { SITE } from '../site.js'

const { values, labels } = options

const initial = {
  name: '',
  business: '',
  service: values.service[0],
  budget: '',
  city: '',
  details: '',
  language: values.language[0],
}

// Builds the enquiry text in the chosen language. Empty fields show [placeholders].
function buildMessage(f) {
  const n = f.name.trim() || '[Name]'
  const b = f.business.trim() || '[Business]'
  const c = f.city.trim() || '[City]'
  const s = f.service
  const det = f.details.trim()
  const x = f.budget ? ' Budget: ' + f.budget + '.' : ''
  if (f.language === 'en') {
    return 'Hello NayaDaur Digital! My name is ' + n + '. My business is ' + b + ' (' + c + '). I need: ' + s + '.' + (det ? ' ' + det + '.' : '') + x + ' Please get in touch.'
  }
  if (f.language === 'ur') {
    return 'السلام علیکم نیا دور ڈیجیٹل! میرا نام ' + n + ' ہے۔ میرا کاروبار ' + b + ' (' + c + ') ہے۔ مجھے ' + s + ' چاہیے۔' + (det ? ' ' + det + '۔' : '') + x + ' مہربانی کر کے رابطہ کریں۔'
  }
  return 'Assalam o Alaikum NayaDaur Digital! Mera naam ' + n + ' hai. Mera business ' + b + ' hai (' + c + '). Mujhe ' + s + ' chahiye.' + (det ? ' ' + det + '.' : '') + x + ' Meherbani kar ke rabta karein.'
}

export default function LeadForm() {
  const { search } = useLocation()
  const [fields, setFields] = useState(initial)
  const [edited, setEdited] = useState(false) // true once the person types in the message box
  const [custom, setCustom] = useState('')
  const [errors, setErrors] = useState({ name: '', message: '' })
  const [status, setStatus] = useState('')
  const nameRef = useRef(null)
  const messageRef = useRef(null)

  const message = edited ? custom : buildMessage(fields)

  // /contact/?service=Free%20Digital%20Audit preselects the service
  useEffect(() => {
    const q = new URLSearchParams(search).get('service')
    if (q && values.service.includes(q)) setFields((f) => ({ ...f, service: q }))
  }, [search])

  const onField = (key) => (e) => {
    const v = e.target.value
    setFields((f) => ({ ...f, [key]: v }))
    setEdited(false) // changing a field rebuilds the message
    setStatus('')
    if (key === 'name') setErrors((er) => ({ ...er, name: '' }))
  }

  const onMessage = (e) => {
    setCustom(e.target.value)
    setEdited(true)
    setErrors((er) => ({ ...er, message: '' }))
  }

  const validate = () => {
    if (!fields.name.trim()) {
      setErrors({ name: 'Please enter your name.', message: '' })
      nameRef.current?.focus()
      return false
    }
    if (!message.trim()) {
      setErrors({ name: '', message: 'Message cannot be empty.' })
      messageRef.current?.focus()
      return false
    }
    setErrors({ name: '', message: '' })
    return true
  }

  const sendWhatsApp = (e) => {
    e.preventDefault()
    if (!validate()) return
    window.open(`https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
    setStatus('WhatsApp opened with your message. Press send there.')
  }

  const sendEmail = () => {
    if (!validate()) return
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Enquiry: ' + fields.service)}&body=${encodeURIComponent(message)}`
    setStatus('Your email app should open with the message ready to send.')
  }

  const copy = () => {
    const fail = () => {
      messageRef.current?.select()
      setStatus('Copy not supported. Please copy the selected text manually.')
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).then(() => setStatus('Message copied'), fail)
    } else fail()
  }

  return (
    <form className="lead-form" id="lead-form" aria-label="Build your enquiry message" noValidate onSubmit={sendWhatsApp}>
      <div className="field">
        <label htmlFor="lf-name">Name *</label>
        <input
          id="lf-name" name="name" ref={nameRef} required autoComplete="name"
          aria-required="true" aria-describedby="lf-name-err"
          aria-invalid={errors.name ? 'true' : undefined}
          value={fields.name} onChange={onField('name')}
        />
        <div className="err" id="lf-name-err" role="alert">{errors.name}</div>
      </div>
      <div className="field">
        <label htmlFor="lf-business">Business name</label>
        <input id="lf-business" name="business" autoComplete="organization" value={fields.business} onChange={onField('business')} />
      </div>
      <div className="field field--full">
        <label htmlFor="lf-service">Service needed</label>
        <select id="lf-service" name="service" value={fields.service} onChange={onField('service')}>
          {values.service.map((v, i) => (
            <option key={v} value={v}>{labels.service[i]}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="lf-budget">Budget (optional)</label>
        <select id="lf-budget" name="budget" value={fields.budget} onChange={onField('budget')}>
          {values.budget.map((v, i) => (
            <option key={v} value={v}>{labels.budget[i]}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="lf-city">City</label>
        <input id="lf-city" name="city" autoComplete="address-level2" value={fields.city} onChange={onField('city')} />
      </div>
      <div className="field field--full">
        <label htmlFor="lf-details">Details</label>
        <textarea id="lf-details" name="details" rows={2} value={fields.details} onChange={onField('details')} />
      </div>
      <div className="field field--full">
        <label htmlFor="lf-language">Message language</label>
        <select id="lf-language" name="language" value={fields.language} onChange={onField('language')}>
          {values.language.map((v, i) => (
            <option key={v} value={v}>{labels.language[i]}</option>
          ))}
        </select>
      </div>
      <div className="field field--full">
        <label htmlFor="lf-message">Message preview (you can edit) *</label>
        <textarea
          id="lf-message" name="message" ref={messageRef} rows={6} required
          aria-required="true" aria-describedby="lf-message-err"
          aria-invalid={errors.message ? 'true' : undefined}
          value={message} onChange={onMessage}
        />
        <div className="err" id="lf-message-err" role="alert">{errors.message}</div>
      </div>
      <div className="field field--full form-actions">
        <button className="btn btn--wa" type="submit">
          <svg className="wi" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><use href="#i-wa" /></svg>
          Send on WhatsApp
        </button>
        <button className="btn btn--outline" type="button" onClick={sendEmail}>Send by email</button>
        <button className="btn btn--outline" type="button" onClick={copy}>Copy message</button>
      </div>
      <p className="form-status field--full" id="lf-status" role="status">{status}</p>
      <p className="fine field--full">
        This form does not send data to our servers. It prepares a message that opens in your WhatsApp or email app, and you press send there.
      </p>
    </form>
  )
}
