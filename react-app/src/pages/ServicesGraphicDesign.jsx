import { Link } from 'react-router-dom'

export default function ServicesGraphicDesign() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li aria-current="page">Graphic Design</li>
            </ol>
          </nav>
          <h1 className="rv">Graphic Design for Business: Social Posts, Menus, Labels and Catalogs</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>مینو کارڈ، بینرز، لیبل اور سوشل پوسٹس۔ صاف اور آپ کے برانڈ کے مطابق ڈیزائن۔</span>
            <span>پرنٹ یا پوسٹ کے لیے تیار فائلیں۔ کیٹلاگ اور پیکجنگ کے لیے بھی۔</span>
            <span>اردو اور انگریزی دونوں انداز میں۔ آپ کا کاروبار پیشہ ورانہ نظر آئے۔</span>
          </p>
          <p className="actions rv" style={{ "--i": "2" }}>
            <a className="btn" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20graphic%20design%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
            <Link className="btn btn--line" to="/contact/?service=Menu%20Cards%2C%20Banners%20and%20Packaging%20Labels">Request a quote</Link>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/logo-design-service-640.webp" srcSet="/assets/images/logo-design-service-640.webp 640w, /assets/images/logo-design-service-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Graphic design desk with colour swatches and brand materials" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="deliver" aria-labelledby="deliver-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="deliver-t">What you get</h2>
            <p>Crowded text and mismatched fonts look amateur on a counter or a feed. We lay things out clearly in your brand colors.</p>
          </div>
          <div className="featlist">
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Menus, banners and labels</h3><p>Print-ready layouts sized for your printer.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Photo editing and catalogs</h3><p>Cleaned-up product images in a clear catalog.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Canva designs</h3><p>Posts, stories, flyers and presentations you can edit later.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Bilingual layouts</h3><p>Urdu and English designed together.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Consistent branding</h3><p>Colors and fonts matched to your brand kit.</p></div>
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
                  <span>Restaurants and cafes needing menus and banners</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Product sellers needing labels and catalogs</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Boutiques posting offers regularly</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="shots rv">
                <figure className="shot">
                  <img src="/assets/images/sample-2-700.webp" srcSet="/assets/images/sample-2-700.webp 700w, /assets/images/sample-2.webp 1400w" width="1400" height="939" alt="Concept packaging label for a fictional honey brand" sizes="(max-width:859px) 92vw,260px" loading="lazy" decoding="async" />
                  <figcaption>Packaging label</figcaption>
                </figure>
                <figure className="shot">
                  <img src="/assets/images/sample-3-700.webp" srcSet="/assets/images/sample-3-700.webp 700w, /assets/images/sample-3.webp 1400w" width="1400" height="939" alt="Concept clothing catalog layout for a fictional boutique" sizes="(max-width:859px) 92vw,260px" loading="lazy" decoding="async" />
                  <figcaption>Catalog design</figcaption>
                </figure>
                <figure className="shot">
                  <img src="/assets/images/sample-6-700.webp" srcSet="/assets/images/sample-6-700.webp 700w, /assets/images/sample-6.webp 1400w" width="1400" height="939" alt="Concept menu card and banner for a fictional fast-food restaurant" sizes="(max-width:859px) 92vw,260px" loading="lazy" decoding="async" />
                  <figcaption>Menu and banner</figcaption>
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
            <li className="rv" style={{ "--i": "0" }}><b>Discover</b><span>Tell us the purpose, size and where it is used.</span></li>
            <li className="rv" style={{ "--i": "1" }}><b>Plan</b><span>Agree content, sizes and revisions.</span></li>
            <li className="rv" style={{ "--i": "2" }}><b>Design</b><span>Review the draft and request changes.</span></li>
            <li className="rv" style={{ "--i": "3" }}><b>Build</b><span>Finalise print-ready or social-ready files.</span></li>
            <li className="rv" style={{ "--i": "4" }}><b>Launch</b><span>Receive files and printing or posting tips.</span></li>
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
                <li>On-site photography; we edit photos you supply</li>
                <li>Printing and material costs, paid to your printer</li>
                <li>Revision rounds beyond what the quote states</li>
              </ul>
            </details>
            <details><summary>Do you design in Urdu?</summary><p>Yes. Urdu, English or bilingual layouts.</p></details>
            <details>
              <summary>Can I edit Canva designs later?</summary>
              <p>Yes. We hand over Canva designs so your team can change text and photos.</p>
            </details>
            <details>
              <summary>Will the files work for printing?</summary>
              <p>Yes. We agree sizes with you or your printer first.</p>
            </details>
            <details>
              <summary>Can you edit my product photos?</summary>
              <p>Yes. We clean up supplied photos for catalogs and social posts.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="related" aria-labelledby="related-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="related-t">Related</h2></div>
          <div className="rels">
            <Link className="rel rv" to="/services/logo-design-branding/"><strong>Logo Design &amp; Branding</strong></Link>
            <Link className="rel rv" to="/services/social-media-marketing/"><strong>Social Media Marketing</strong></Link>
            <Link className="rel rv" to="/services/business-software/"><strong>Business Software</strong></Link>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Talk to us about graphic design</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20graphic%20design%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
