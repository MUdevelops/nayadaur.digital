import { useRef, useState } from 'react'
import { waHref } from '../config/site.js'
import { BUDGETS, LANGUAGES, QUICK_TEMPLATES } from '../data/contact.js'
import { SERVICE_OPTIONS } from '../data/services.js'
import { useLeadForm } from '../context/LeadFormContext.jsx'
import { copyText } from '../lib/clipboard.js'

/** WhatsApp enquiry builder: fills a message live, lets the visitor edit it, then opens WhatsApp. */
export default function ContactForm() {
  const { fields, message, setField, setMessage, resetMessage, applyTemplate } = useLeadForm()
  const [errors, setErrors] = useState({ name: '', message: '' })
  const [status, setStatus] = useState('')
  const nameRef = useRef(null)
  const messageRef = useRef(null)

  const bind = (key) => ({
    value: fields[key],
    onChange: (e) => {
      setField(key, e.target.value)
      setStatus('')
      if (key === 'name' && errors.name) setErrors((er) => ({ ...er, name: '' }))
    },
  })

  const onMessageChange = (e) => {
    setMessage(e.target.value)
    setStatus('')
    if (errors.message) setErrors((er) => ({ ...er, message: '' }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {
      name: fields.name.trim() ? '' : 'Please enter your name.',
      message: message.trim() ? '' : 'Message cannot be empty.',
    }
    setErrors(next)
    if (next.name) {
      nameRef.current?.focus()
    } else if (next.message) {
      messageRef.current?.focus()
    } else {
      window.open(`${waHref}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
    }
  }

  const onCopy = async () => {
    const ok = await copyText(message)
    if (ok) {
      setStatus('Message copied')
    } else {
      messageRef.current?.select()
      setStatus('Copy not supported. Please copy the selected text manually.')
    }
  }

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate aria-label="Send an enquiry on WhatsApp">
      <div className="field">
        <label htmlFor="lf-name">Name *</label>
        <input
          id="lf-name"
          name="name"
          ref={nameRef}
          autoComplete="name"
          aria-required="true"
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby="lf-name-err"
          {...bind('name')}
        />
        <div className="err" id="lf-name-err" role="alert">
          {errors.name}
        </div>
      </div>

      <div className="field">
        <label htmlFor="lf-business">Business name</label>
        <input id="lf-business" name="business" autoComplete="organization" {...bind('business')} />
      </div>

      <div className="field field--full">
        <label htmlFor="lf-service">Service needed</label>
        <select id="lf-service" name="service" {...bind('service')}>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="lf-budget">Budget (optional)</label>
        <select id="lf-budget" name="budget" {...bind('budget')}>
          <option value="">Not sure</option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="lf-city">City</label>
        <input id="lf-city" name="city" autoComplete="address-level2" {...bind('city')} />
      </div>

      <div className="field field--full">
        <label htmlFor="lf-details">Details</label>
        <textarea id="lf-details" name="details" rows={2} {...bind('details')} />
      </div>

      <div className="field field--full">
        <label htmlFor="lf-language">Preferred language</label>
        <select id="lf-language" name="language" {...bind('language')}>
          {LANGUAGES.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field field--full">
        <span className="field__label" id="lf-templates-label">
          Quick templates
        </span>
        <div className="chips" role="group" aria-labelledby="lf-templates-label">
          {QUICK_TEMPLATES.map((t) => (
            <button type="button" key={t} onClick={() => applyTemplate(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="field field--full">
        <label htmlFor="lf-message">Message preview (you can edit) *</label>
        <textarea
          id="lf-message"
          name="message"
          ref={messageRef}
          rows={6}
          aria-required="true"
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby="lf-message-err lf-message-count"
          value={message}
          onChange={onMessageChange}
        />
        <div className="err" id="lf-message-err" role="alert">
          {errors.message}
        </div>
        <small id="lf-message-count">{message.length} characters</small>
      </div>

      <div className="field field--full form-actions">
        <button type="submit" className="btn">
          Send on WhatsApp
        </button>
        <button type="button" className="btn btn--outline" onClick={onCopy}>
          Copy message
        </button>
        <button type="button" className="btn btn--outline" onClick={() => {
            resetMessage()
            setStatus('')
          }}>
          Reset message
        </button>
      </div>
      <p className="form-status field--full" role="status">
        {status}
      </p>
    </form>
  )
}
