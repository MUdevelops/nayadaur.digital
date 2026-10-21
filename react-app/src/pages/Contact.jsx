import { Link } from 'react-router-dom'
import LeadForm from '../components/LeadForm.jsx'

export default function Contact() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">Contact</li></ol></nav>
          <h1 className="rv">Contact NayaDaur Digital</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>واٹس ایپ پر ہمیں پیغام بھیجیں۔ یا براہِ راست فون پر کال کریں۔</span>
            <span>آپ ای میل بھی کر سکتے ہیں۔ چاہیں تو نیچے فارم بھر کر پیغام تیار کریں۔</span>
            <span>ہم آپ کو واضح اگلے مراحل بتاتے ہیں۔ کوئی دباؤ نہیں، صرف سیدھی اور سچی بات۔</span>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/contact-640.webp" srcSet="/assets/images/contact-640.webp 640w, /assets/images/contact-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Phone, telephone and envelope illustrating contact options" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="contact" aria-labelledby="contact-t">
        <div className="container">
          <div className="two">
            <div className="rv">
              <h2 id="contact-t">Reach us directly</h2>
              <p className="actions">
                <a className="btn" href="https://wa.me/923219211464" target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
                <a className="btn btn--line" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
              </p>
              <dl className="dl">
                <dt>Phone and WhatsApp</dt>
                <dd><a href="tel:+923219211464">0321 9211464</a></dd>
                <dt>Email</dt>
                <dd><a href="mailto:info@nayadaur.digital">info@nayadaur.digital</a></dd>
                <dt>Where we work</dt>
                <dd>Okara, Punjab, and clients across Pakistan online</dd>
                <dt>Languages</dt>
                <dd>Urdu, Roman Urdu and English</dd>
              </dl>
              <p className="note">Not sure what you need? Choose <em>Free Digital Audit</em> in the form and we will review your online presence.</p>
            </div>
            <div className="rv" style={{ "--i": "1" }}><LeadForm /></div>
          </div>
        </div>
      </section>
    </>
  )
}
