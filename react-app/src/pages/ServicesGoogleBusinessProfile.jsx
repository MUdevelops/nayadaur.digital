import { Link } from 'react-router-dom'

export default function ServicesGoogleBusinessProfile() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li aria-current="page">Google Business Profile</li>
            </ol>
          </nav>
          <h1 className="rv">Google Business Profile and Google Maps Setup for Local Businesses</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>گوگل میپس پر درست تفصیلات کے ساتھ نظر آئیں۔ صحیح پتہ، اوقات اور فون نمبر۔</span>
            <span>اچھی تصاویر اور مکمل پروفائل۔ اصلی گاہکوں کے سچے ریویوز۔</span>
            <span>قریب کے لوگ آپ کو آسانی سے ڈھونڈ لیں۔ مقامی کاروباروں کے لیے سب سے اہم قدم۔</span>
          </p>
          <p className="actions rv" style={{ "--i": "2" }}>
            <a className="btn" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20Google%20Business%20Profile%20setup%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
            <Link className="btn btn--line" to="/contact/?service=Google%20Business%20Profile%20Setup%20and%20Optimization">Request a quote</Link>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/google-business-profile-service-640.webp" srcSet="/assets/images/google-business-profile-service-640.webp 640w, /assets/images/google-business-profile-service-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Google Maps pin over a shop with star reviews" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="deliver" aria-labelledby="deliver-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="deliver-t">What you get</h2>
            <p>Many local businesses are missing from Maps or show wrong hours and pins. A complete profile helps nearby customers choose you.</p>
          </div>
          <div className="featlist">
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Profile setup or cleanup</h3>
                <p>Name, category, address or service area, hours and contact details.</p>
              </div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Map pin check</h3><p>Customers are sent to the right place.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Photos and description</h3><p>A complete profile that explains what you offer.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Verification support</h3><p>We guide you through the options Google offers.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>QR review system</h3><p>A QR code and short link to your review page.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Consistent details</h3>
                <p>Name, phone and address match across website and profiles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="who" aria-labelledby="who-t">
        <div className="container">
          <div className="two">
            <div>
              <div className="sec-head rv"><h2 id="who-t">Who this is for</h2></div>
              <ul className="checks">
                <li className="rv" style={{ "--i": "0" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Shops, clinics, salons and workshops with a location</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Service businesses that travel to customers</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Owners with an old or duplicate listing, or few reviews</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="shots rv">
                <figure className="shot">
                  <img src="/assets/images/sample-4-700.webp" srcSet="/assets/images/sample-4-700.webp 700w, /assets/images/sample-4.webp 1400w" width="1400" height="939" alt="Concept QR review stand for a fictional salon" sizes="(max-width:859px) 92vw,260px" loading="lazy" decoding="async" />
                  <figcaption>QR review stand</figcaption>
                </figure>
              </div>
              <p className="note">Concept samples, not real client projects. <Link to="/portfolio/">See all samples</Link>.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--dark on-dark" id="process" aria-labelledby="process-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="process-t">How it works</h2></div>
          <ol className="steps">
            <li className="rv" style={{ "--i": "0" }}><b>Discover</b><span>Check for existing or duplicate listings.</span></li>
            <li className="rv" style={{ "--i": "1" }}><b>Plan</b><span>Choose categories and storefront or service-area setup.</span></li>
            <li className="rv" style={{ "--i": "2" }}><b>Design</b><span>Prepare description, photos and review QR.</span></li>
            <li className="rv" style={{ "--i": "3" }}><b>Build</b><span>Set up the profile and start verification.</span></li>
            <li className="rv" style={{ "--i": "4" }}><b>Launch</b><span>Learn to reply to reviews and keep hours current.</span></li>
          </ol>
        </div>
      </section>
      <section className="section" id="faq" aria-labelledby="faq-t">
        <div className="container container--narrow">
          <div className="sec-head rv"><h2 id="faq-t">Scope and questions</h2></div>
          <div className="faq">
            <details>
              <summary>What is not included?</summary>
              <ul>
                <li>Google decides verification and ranking; we cannot speed up or guarantee either</li>
                <li>We never buy, fake or incentivise reviews</li>
                <li>Business details must be real: no fake addresses or virtual locations</li>
              </ul>
            </details>
            <details>
              <summary>Is a Google Business Profile free?</summary>
              <p>Yes. Creating and managing a profile is free. You pay only for our setup work.</p>
            </details>
            <details>
              <summary>I have no shop. Can I still be on Google?</summary>
              <p>Often yes, as a service-area business that hides its address, if Google rules allow.</p>
            </details>
            <details>
              <summary>How long does verification take?</summary>
              <p>It depends on the method Google offers. We cannot control the timing.</p>
            </details>
            <details>
              <summary>Can I get more reviews?</summary>
              <p>Yes, from genuine customers. The QR system makes it easy for them to leave one.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="related" aria-labelledby="related-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="related-t">Related</h2></div>
          <div className="rels">
            <Link className="rel rv" to="/services/website-development/"><strong>Website Development</strong></Link>
            <Link className="rel rv" to="/services/google-ads/"><strong>Google Ads</strong></Link>
            <Link className="rel rv" to="/services/social-media-marketing/"><strong>Social Media Marketing</strong></Link>
            <Link className="rel rv" to="/blog/how-to-get-your-business-on-google-maps-in-pakistan/">
              <strong>How to Get Your Business on Google Maps in Pakistan</strong>
              <span>Guide · 6 min read</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Talk to us about google business profile</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20Google%20Business%20Profile%20setup%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
