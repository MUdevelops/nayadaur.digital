import { Link } from 'react-router-dom'
import { SITE, DEFAULT_WA_TEXT, waLink } from '../site.js'

export default function Contact() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">Contact</li></ol></nav>
          <h1 className="rv">Contact NayaDaur Digital</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>واٹس ایپ پر ہمیں پیغام بھیجیں۔ یا براہِ راست فون پر کال کریں۔</span>
            <span>آپ ای میل بھی کر سکتے ہیں۔ نیچے دیے گئے کارڈ پر ایک ٹیپ کافی ہے۔</span>
            <span>ہم آپ کو واضح اگلے مراحل بتاتے ہیں۔ کوئی دباؤ نہیں، صرف سیدھی اور سچی بات۔</span>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/contact-640.webp?v=4" srcSet="/assets/images/contact-640.webp?v=4 640w, /assets/images/contact-1200.webp?v=4 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Phone, telephone and envelope illustrating contact options" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="contact" aria-labelledby="contact-t">
        <div className="container">
          <div className="rv" style={{ textAlign: "center", marginBottom: "var(--s6)" }}>
            <h2 id="contact-t">Reach us directly</h2>
            <p style={{ margin: "0 auto" }}>Pick the way that suits you. We reply with clear next steps, no pressure.</p>
          </div>
          <ul className="ccards">
            <li className="rv" style={{ "--i": "0" }}>
              <a className="ccard ccard--wa" href={waLink(DEFAULT_WA_TEXT)} target="_blank" rel="noopener">
                <img className="ccard__img" src="/assets/contact/whatsapp.webp?v=2" width="256" height="256" alt="" loading="lazy" decoding="async" />
                <span className="ccard__label">WhatsApp</span>
                <span className="ccard__value">{SITE.phoneDisplay}</span>
                <span className="ccard__cta">Chat on WhatsApp</span>
              </a>
            </li>
            <li className="rv" style={{ "--i": "1" }}>
              <a className="ccard ccard--ph" href={SITE.phoneHref}>
                <img className="ccard__img" src="/assets/contact/phone.webp?v=2" width="256" height="256" alt="" loading="lazy" decoding="async" />
                <span className="ccard__label">Phone</span>
                <span className="ccard__value">{SITE.phoneDisplay}</span>
                <span className="ccard__cta">Call now</span>
              </a>
            </li>
            <li className="rv" style={{ "--i": "2" }}>
              <a className="ccard ccard--em" href={`mailto:${SITE.email}`}>
                <img className="ccard__img" src="/assets/contact/email.webp?v=2" width="256" height="256" alt="" loading="lazy" decoding="async" />
                <span className="ccard__label">Email</span>
                <span className="ccard__value">{SITE.email}</span>
                <span className="ccard__cta">Send an email</span>
              </a>
            </li>
          </ul>
          <p className="note" style={{ textAlign: "center", margin: "var(--s6) auto 0" }}>Okara, Punjab, and clients across Pakistan online. Urdu, Roman Urdu and English.</p>
        </div>
      </section>
    </>
  )
}
