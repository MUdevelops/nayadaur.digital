import { Link } from 'react-router-dom'
import PortfolioGallery from '../components/PortfolioGallery.jsx'

export default function Portfolio() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">Portfolio</li></ol></nav>
          <h1 className="rv">Portfolio: Concept Samples</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>یہ نمونے فرضی کاروباری ناموں سے بنائے گئے ہیں۔ ان کا مقصد ہمارا انداز دکھانا ہے۔</span>
            <span>یہ حقیقی کلائنٹس کا کام نہیں ہیں۔ اصل کام اجازت ملنے پر شامل کیا جائے گا۔</span>
            <span>لوگو، برانڈ کٹ اور ڈیش بورڈ کے نمونے دیکھیں۔ پسند آئے تو واٹس ایپ پر رابطہ کریں۔</span>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/portfolio-640.webp" srcSet="/assets/images/portfolio-640.webp 640w, /assets/images/portfolio-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Brand identity desk with colour swatches" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="work" aria-labelledby="work-t">
        <div className="container">
          <h2 className="vh" id="work-t">Concept samples</h2>
          <PortfolioGallery />
          <p className="actions">
            <a className="btn btn--line" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20a%20design%20like%20your%20portfolio%20samples%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Want something like this? Chat with us</a>
          </p>
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
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20a%20project%20like%20your%20portfolio%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
