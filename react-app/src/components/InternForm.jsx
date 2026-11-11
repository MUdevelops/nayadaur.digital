import { useRef, useState } from 'react'
import { SITE } from '../site.js'

export const TRACKS = [
  'Graphic Designer',
  'Digital Network & Marketing',
  'AI Application Engineer',
  'Not sure yet',
]

const initial = { name: '', city: '', track: TRACKS[0], background: '', about: '', language: 'ur-roman' }

// Builds the application text. Empty fields show [placeholders].
function buildMessage(f) {
  const n = f.name.trim() || '[Name]'
  const c = f.city.trim() || '[City]'
  const bg = f.background.trim()
  const ab = f.about.trim()
  if (f.language === 'en') {
    return 'Hello NayaDaur Digital! My name is ' + n + ' from ' + c + '. I would like to apply for the free 1-year internship, role: ' + f.track + '.' +
      (bg ? ' Background: ' + bg + '.' : '') + (ab ? ' About me: ' + ab + '.' : '') + ' Please tell me the next steps.'
  }
  return 'Assalam o Alaikum NayaDaur Digital! Mera naam ' + n + ' hai (' + c + '). Mujhe 1 saal ki free internship ke liye apply karna hai, role: ' + f.track + '.' +
    (bg ? ' Background: ' + bg + '.' : '') + (ab ? ' Mere baare mein: ' + ab + '.' : '') + ' Meherbani kar ke agle steps bata dein.'
}

export default function InternForm() {
  const [fields, setFields] = useState(initial)
  const [edited, setEdited] = useState(false)
  const [custom, setCustom] = useState('')
  const [errors, setErrors] = useState({ name: '', message: '' })
  const [status, setStatus] = useState('')
  const nameRef = useRef(null)
  const messageRef = useRef(null)

  const message = edited ? custom : buildMessage(fields)

  const onField = (key) => (e) => {
    const v = e.target.value
    setFields((f) => ({ ...f, [key]: v }))
    setEdited(false)
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
    setStatus('WhatsApp opened with your application. Press send there.')
  }

  const sendEmail = () => {
    if (!validate()) return
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Internship application: ' + fields.track)}&body=${encodeURIComponent(message)}`
    setStatus('Your email app should open with the application ready to send.')
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
    <form className="lead-form" id="intern-form" aria-label="Prepare your internship application" noValidate onSubmit={sendWhatsApp}>
      <div className="field">
        <label htmlFor="if-name">Name *</label>
        <input
          id="if-name" name="name" ref={nameRef} required autoComplete="name"
          aria-required="true" aria-describedby="if-name-err"
          aria-invalid={errors.name ? 'true' : undefined}
          value={fields.name} onChange={onField('name')}
        />
        <div className="err" id="if-name-err" role="alert">{errors.name}</div>
      </div>
      <div className="field">
        <label htmlFor="if-city">City</label>
        <input id="if-city" name="city" autoComplete="address-level2" value={fields.city} onChange={onField('city')} />
      </div>
      <div className="field field--full">
        <label htmlFor="if-track">Role you are interested in</label>
        <select id="if-track" name="track" value={fields.track} onChange={onField('track')}>
          {TRACKS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field field--full">
        <label htmlFor="if-bg">Education or background</label>
        <input id="if-bg" name="background" placeholder="For example: BSCS student, 4th semester" value={fields.background} onChange={onField('background')} />
      </div>
      <div className="field field--full">
        <label htmlFor="if-about">What have you tried or built? (optional)</label>
        <textarea id="if-about" name="about" rows={2} placeholder="Projects, skills or links to your work" value={fields.about} onChange={onField('about')} />
      </div>
      <div className="field field--full">
        <label htmlFor="if-language">Message language</label>
        <select id="if-language" name="language" value={fields.language} onChange={onField('language')}>
          <option value="ur-roman">Roman Urdu</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="field field--full">
        <label htmlFor="if-message">Message preview (you can edit) *</label>
        <textarea
          id="if-message" name="message" ref={messageRef} rows={6} required
          aria-required="true" aria-describedby="if-message-err"
          aria-invalid={errors.message ? 'true' : undefined}
          value={message} onChange={onMessage}
        />
        <div className="err" id="if-message-err" role="alert">{errors.message}</div>
      </div>
      <div className="field field--full form-actions">
        <button className="btn btn--wa" type="submit">
          <svg className="wi" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><use href="#i-wa" /></svg>
          Apply on WhatsApp
        </button>
        <button className="btn btn--outline" type="button" onClick={sendEmail}>Apply by email</button>
        <button className="btn btn--outline" type="button" onClick={copy}>Copy message</button>
      </div>
      <p className="form-status field--full" id="if-status" role="status">{status}</p>
      <p className="fine field--full">
        This form does not send data to our servers. It prepares a message that opens in your WhatsApp or email app, and you press send there.
      </p>
    </form>
  )
}
