import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">Guides</li></ol></nav>
          <h1 className="rv">Guides for Small Businesses in Pakistan</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>چھوٹے کاروباروں کے لیے آسان اور عملی گائیڈز۔ آن لائن نظر آنے کا طریقہ سیکھیں۔</span>
            <span>گوگل میپس پر اپنا کاروبار شامل کرنا سمجھیں۔ ویب سائٹ ڈویلپر رکھنے سے پہلے کیا تیار کریں۔</span>
            <span>ہر گائیڈ سادہ زبان میں لکھی گئی ہے۔ پڑھیں، سمجھیں اور اپنا کاروبار آگے بڑھائیں۔</span>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/blog-640.webp" srcSet="/assets/images/blog-640.webp 640w, /assets/images/blog-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Open guide book with magnifying glass" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" aria-labelledby="all-t">
        <div className="container">
          <h2 className="vh" id="all-t">All guides</h2>
          <div className="grid grid--3">
            <article className="card rv" style={{ "--i": "0" }}>
              <p className="meta">Google Maps · 6 min read</p>
              <h3>
                <Link to="/blog/how-to-get-your-business-on-google-maps-in-pakistan/">How to Get Your Business on Google Maps in Pakistan</Link>
              </h3>
              <p>Steps, verification and common mistakes.</p>
            </article>
            <article className="card rv" style={{ "--i": "1" }}>
              <p className="meta">Website · 6 min read</p>
              <h3>
                <Link to="/blog/does-small-business-need-website-or-just-social-media/">Does Your Small Business Need a Website or Just Social Media?</Link>
              </h3>
              <p>Choose based on how customers find you.</p>
            </article>
            <article className="card rv" style={{ "--i": "2" }}>
              <p className="meta">Website · 7 min read</p>
              <h3>
                <Link to="/blog/what-to-prepare-before-hiring-website-developer-pakistan/">What to Prepare Before Hiring a Website Developer in Pakistan</Link>
              </h3>
              <p>Goals, content, domain ownership and questions to ask.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Ready to talk about your project?</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20my%20project%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
