import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">Services</li></ol></nav>
          <h1>Digital Services for Businesses in Okara and Pakistan</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>پہلے لوگو سے لے کر چلتی ہوئی ویب سائٹ تک۔ گوگل لسٹنگ اور اشتہارات بھی ایک ہی جگہ۔</span>
            <span>آپ ایک سروس منتخب کر سکتے ہیں۔ یا ضرورت کے مطابق کئی سروسز ملا سکتے ہیں۔</span>
            <span>ہر کام کا دائرہ کار پہلے تحریری طور پر طے ہوتا ہے۔ شروعات کے لیے واٹس ایپ پر رابطہ کریں۔</span>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/services-page-640.webp" srcSet="/assets/images/services-page-640.webp 640w, /assets/images/services-page-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Seven NayaDaur Digital service icons" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" aria-labelledby="all-t">
        <div className="container">
          <h2 className="vh" id="all-t">All services</h2>
          <div className="grid grid--4">
            <article className="card card--svc rv" style={{ "--i": "0" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 4h18v12H3zM8 20h8M12 16v4" /></svg>
              </div>
              <h3><Link to="/services/website-development/">Website Development</Link></h3>
              <p>Fast, mobile-friendly websites and stores that turn visitors into WhatsApp enquiries.</p>
            </article>
            <article className="card card--svc rv" style={{ "--i": "1" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2l9 5v10l-9 5-9-5V7z" /></svg>
              </div>
              <h3><Link to="/services/logo-design-branding/">Logo Design &amp; Branding</Link></h3>
              <p>Logos, Urdu lettering and brand kits for a consistent look everywhere.</p>
            </article>
            <article className="card card--svc rv" style={{ "--i": "2" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                </svg>
              </div>
              <h3><Link to="/services/google-business-profile/">Google Business Profile</Link></h3>
              <p>Show up on Google Maps with an accurate listing and genuine reviews.</p>
            </article>
            <article className="card card--svc rv" style={{ "--i": "3" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 17l6-6 4 4 8-8M15 7h6v6" /></svg>
              </div>
              <h3><Link to="/services/google-ads/">Google Ads</Link></h3>
              <p>Search and Maps ads aimed at people already looking for you.</p>
            </article>
            <article className="card card--svc rv" style={{ "--i": "4" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" /></svg>
              </div>
              <h3><Link to="/services/social-media-marketing/">Social Media Marketing</Link></h3>
              <p>Tidy profiles, WhatsApp Business setup and managed Facebook and Instagram ads.</p>
            </article>
            <article className="card card--svc rv" style={{ "--i": "5" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 4h16v16H4zM8 9h8M8 13h5" /></svg>
              </div>
              <h3><Link to="/services/business-software/">Business Software</Link></h3>
              <p>Invoice and udhaar software for local shops, in Urdu and English.</p>
            </article>
            <article className="card card--svc rv" style={{ "--i": "6" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 20l4-1 11-11-3-3L5 16zM14 6l3 3" /></svg>
              </div>
              <h3><Link to="/services/graphic-design/">Graphic Design</Link></h3>
              <p>Menu cards, banners, labels and social posts, ready to print or post.</p>
            </article>
            <article className="card card--svc rv" style={{ "--i": "7" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5" /></svg>
              </div>
              <h3><Link to="/contact/?service=Free%20Digital%20Audit">Not sure where to start?</Link></h3>
              <p>Ask for a free digital audit of your online presence.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--tint" aria-labelledby="list-t">
        <div className="container container--narrow">
          <div className="sec-head rv"><h2 id="list-t">Everything we offer</h2></div>
          <div className="faq">
            <details>
              <summary>See the full list (15 items)</summary>
              <ul>
                <li>Logo and Brand Kit</li>
                <li>Urdu and Bilingual Logo / Calligraphy</li>
                <li>Product Photo Editing and Catalog Design</li>
                <li>Menu Cards, Banners and Packaging Labels</li>
                <li>Canva Designs</li>
                <li>Landing Pages and Frontend Websites</li>
                <li>Online E-Commerce Store</li>
                <li>Google Business Profile Setup</li>
                <li>Social Media Setup</li>
                <li>WhatsApp Business Setup</li>
                <li>Google Ads (Search and Maps)</li>
                <li>Facebook and Instagram Ads Management</li>
                <li>QR-Based Review System</li>
                <li>Local Invoice System</li>
                <li>Udhaar Management System</li>
              </ul>
            </details>
          </div>
          <p className="note">Not sure where to start? Most businesses begin with a Google Business Profile or a simple website. <Link to="/pricing/">See packages</Link>.</p>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Not sure where to start?</h2>
              <p>Tell us what you sell. We suggest the first step, or review your online presence with a free digital audit.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20your%20services%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
