import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">About</li></ol></nav>
          <h1 className="rv">About NayaDaur Digital</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>نیا دور کا مطلب ہے ایک نیا زمانہ۔ ہمارا سلوگن «ڈیجیٹل سوچ، بہتر کاروبار» ہے۔</span>
            <span>یعنی ڈیجیٹل سوچ سے بہتر کاروبار۔ ہم اوکاڑہ اور پورے پاکستان کے کاروباروں کے ساتھ کام کرتے ہیں۔</span>
            <span>لوگو، ویب سائٹ، گوگل پروفائل اور اشتہارات ایک ہی ٹیم سے۔ صاف بات، تحریری منصوبہ اور سیدھا رابطہ۔</span>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/about-section-640.webp" srcSet="/assets/images/about-section-640.webp 640w, /assets/images/about-section-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Illustration of a Pakistani high street at sunrise" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" aria-labelledby="what-t">
        <div className="container container--narrow">
          <div className="prose rv">
            <h2 id="what-t">What we do</h2>
            <p>We are a digital services business in Okara, Punjab, working with small businesses, shops, startups and creators across Pakistan.</p>
            <p>We cover the basics of being found and trusted online: logo, website, Google listing, social media, ads and simple software.</p>
          </div>
        </div>
      </section>
      <section className="section section--tint" aria-labelledby="how-t">
        <div className="container">
          <div className="two">
            <div>
              <div className="sec-head rv"><h2 id="how-t">How we work</h2></div>
              <ul className="checks">
                <li className="rv" style={{ "--i": "0" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>We talk in Urdu, Roman Urdu or English.</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Scope and price are written down before we start.</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>We explain technical things in everyday language.</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="sec-head rv"><h2 id="not-t">What we do not do</h2></div>
              <ul className="checks">
                <li className="rv" style={{ "--i": "0" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Promise Google rankings, followers or sales.</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Buy or fake reviews.</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Show fake clients. Our samples are labelled as concepts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Let us talk about your business</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20NayaDaur%20Digital%20services%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
