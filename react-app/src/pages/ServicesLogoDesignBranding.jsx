import { Link } from 'react-router-dom'

export default function ServicesLogoDesignBranding() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li aria-current="page">Logo Design &amp; Branding</li>
            </ol>
          </nav>
          <h1 className="rv">Logo Design and Brand Identity for Pakistani Businesses</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>ایک واضح لوگو اور برانڈ کٹ۔ سائن بورڈ، بل اور سوشل پیجز ایک جیسے نظر آئیں۔</span>
            <span>اردو اور دو زبانوں والے لوگو کا آپشن۔ رنگ، فونٹ اور استعمال کے اصول ساتھ۔</span>
            <span>آپ کا کاروبار ایک پہچان کے ساتھ سامنے آئے۔ پاکستانی کاروباروں کے لیے بنایا گیا ڈیزائن۔</span>
          </p>
          <p className="actions rv" style={{ "--i": "2" }}>
            <a className="btn" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20logo%20design%20and%20branding%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
            <Link className="btn btn--line" to="/contact/?service=Logo%20and%20Brand%20Kit">Request a quote</Link>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/logo-design-service-640.webp" srcSet="/assets/images/logo-design-service-640.webp 640w, /assets/images/logo-design-service-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Logo design and brand kit desk illustration" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="deliver" aria-labelledby="deliver-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="deliver-t">What you get</h2>
            <p>Mismatched signboards, bills and profiles make a business look smaller. A brand kit decides your look once.</p>
          </div>
          <div className="featlist">
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Logo design</h3><p>A primary logo plus profile-picture and one-colour versions.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Urdu and bilingual logo</h3>
                <p>Urdu lettering or calligraphy-style design, alone or with English.</p>
              </div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Brand kit</h3><p>Colors, fonts and usage notes so everything stays consistent.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Social templates</h3><p>Matching profile images and post templates.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Files ready to use</h3><p>Print and screen files, as agreed in your quote.</p></div>
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
                  <span>New businesses choosing a name and look</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Shops whose logo fails on signboards, bills or app icons</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Owners who want their Urdu name designed properly</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="shots rv">
                <figure className="shot">
                  <img src="/assets/images/sample-1-700.webp" srcSet="/assets/images/sample-1-700.webp 700w, /assets/images/sample-1.webp 1400w" width="1400" height="939" alt="Concept brand identity for a fictional botanicals brand, Baagh Botanicals, with color palette" sizes="(max-width:859px) 92vw,260px" loading="lazy" decoding="async" />
                  <figcaption>Brand identity</figcaption>
                </figure>
                <figure className="shot">
                  <img src="/assets/images/sample-5-700.webp" srcSet="/assets/images/sample-5-700.webp 700w, /assets/images/sample-5.webp 1400w" width="1400" height="939" alt="Concept brand kit for a fictional cafe called Chai Ghar" sizes="(max-width:859px) 92vw,260px" loading="lazy" decoding="async" />
                  <figcaption>Brand kit</figcaption>
                </figure>
                <figure className="shot">
                  <img src="/assets/images/sample-7-700.webp" srcSet="/assets/images/sample-7-700.webp 700w, /assets/images/sample-7.webp 1400w" width="1400" height="939" alt="Concept bilingual Urdu and English logo for a fictional bakery" sizes="(max-width:859px) 92vw,260px" loading="lazy" decoding="async" />
                  <figcaption>Bilingual logo</figcaption>
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
            <li className="rv" style={{ "--i": "0" }}><b>Discover</b><span>Share your customers and the feeling you want.</span></li>
            <li className="rv" style={{ "--i": "1" }}><b>Plan</b><span>Agree deliverables and revision rounds in writing.</span></li>
            <li className="rv" style={{ "--i": "2" }}><b>Design</b><span>Choose a direction; we refine it.</span></li>
            <li className="rv" style={{ "--i": "3" }}><b>Build</b><span>Prepare logo versions, brand kit and templates.</span></li>
            <li className="rv" style={{ "--i": "4" }}><b>Launch</b><span>Receive files and a guide to each version.</span></li>
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
                <li>Trademark registration, which is a separate legal process</li>
                <li>Concepts or revisions beyond what the quote states</li>
                <li>Printing and signboard making; we supply print-ready files</li>
              </ul>
            </details>
            <details>
              <summary>Can you design a logo in Urdu?</summary>
              <p>Yes, including calligraphy-style lettering. Share the name and the feeling you want.</p>
            </details>
            <details>
              <summary>What is a brand kit?</summary>
              <p>A short guide to your logo versions, colors, fonts and templates.</p>
            </details>
            <details>
              <summary>How long does a logo take?</summary>
              <p>Usually a few days, depending on how quickly feedback arrives.</p>
            </details>
            <details>
              <summary>Do I get files for printing?</summary>
              <p>Yes. Exact formats are confirmed in your quote.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="related" aria-labelledby="related-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="related-t">Related</h2></div>
          <div className="rels">
            <Link className="rel rv" to="/services/graphic-design/"><strong>Graphic Design</strong></Link>
            <Link className="rel rv" to="/services/website-development/"><strong>Website Development</strong></Link>
            <Link className="rel rv" to="/services/social-media-marketing/"><strong>Social Media Marketing</strong></Link>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Talk to us about logo design &amp; branding</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20logo%20design%20and%20branding%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
