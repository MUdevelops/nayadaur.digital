import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">Pricing</li></ol></nav>
          <h1 className="rv">Packages and Pricing</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>ہر پروجیکٹ کا تحریری کوٹ بنتا ہے۔ کام شروع ہونے سے پہلے دائرہ کار لکھ کر دیا جاتا ہے۔</span>
            <span>قیمت بھی پہلے ہی طے اور تحریری ہوتی ہے۔ عموماً پہلے ایڈوانس اور باقی رقم ڈیلیوری پر۔</span>
            <span>اشتہاری بجٹ اور ڈومین کی فیس الگ ادا ہوتی ہے۔ پیکجز کی قیمتیں نیچے دیکھیں۔</span>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/pricing-640.webp" srcSet="/assets/images/pricing-640.webp 640w, /assets/images/pricing-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Stack of boxes illustrating package pricing" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section pricing-packages" aria-labelledby="pk-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="pk-t">Our four packages</h2>
            <p>Each package is a starting point that we adjust to your business.</p>
          </div>
          <div className="grid grid--4">
            <article className="pkg rv" style={{ "--i": "0" }}>
              <h3>Shuruaat (Starter)</h3>
              <ul>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Google Business Profile</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>WhatsApp Business setup</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>QR review system</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>3 Canva designs</span>
                </li>
              </ul>
              <p className="price ur" lang="ur" dir="rtl">1500 روپے</p>
              <a className="btn btn--line btn--sm" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20the%20Shuruaat%20(Starter)%20package%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener">Ask about this package</a>
            </article>
            <article className="pkg rv" style={{ "--i": "1" }}>
              <h3>Pehchan (Identity)</h3>
              <ul>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Logo and brand kit</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Urdu/bilingual logo option</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Menu/banner set</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Social media templates</span>
                </li>
              </ul>
              <p className="price ur" lang="ur" dir="rtl">2000 روپے</p>
              <a className="btn btn--line btn--sm" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20the%20Pehchan%20(Identity)%20package%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener">Ask about this package</a>
            </article>
            <article className="pkg pkg--pop rv" style={{ "--i": "2" }}>
              <span className="badge">Most requested</span>
              <h3>Taraqqi (Growth)</h3>
              <ul>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Landing page</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Social media setup</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Facebook/Instagram ads management</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Local search basics</span>
                </li>
              </ul>
              <p className="price ur" lang="ur" dir="rtl">5000 روپے</p>
              <a className="btn btn--line btn--sm" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20the%20Taraqqi%20(Growth)%20package%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener">Ask about this package</a>
            </article>
            <article className="pkg rv" style={{ "--i": "3" }}>
              <h3>Kamyabi (Complete)</h3>
              <ul>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Website or online store</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Catalog design</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Google and Meta ads</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Invoice or udhaar system</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Monthly support</span>
                </li>
              </ul>
              <p className="price ur" lang="ur" dir="rtl">10000 روپے</p>
              <a className="btn btn--line btn--sm" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20the%20Kamyabi%20(Complete)%20package%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener">Ask about this package</a>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--tint" aria-labelledby="aff-t">
        <div className="container">
          <div className="two">
            <div>
              <div className="sec-head rv"><h2 id="aff-t">What affects the price</h2></div>
              <ul className="checks">
                <li className="rv" style={{ "--i": "0" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Number of pages, products or designs</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Whether text, photos and logo are ready</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>English, Urdu or bilingual</span>
                </li>
                <li className="rv" style={{ "--i": "3" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Online ordering or custom software</span>
                </li>
                <li className="rv" style={{ "--i": "4" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Revision rounds and deadline</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="sec-head rv"><h2 id="sep-t">Usually paid separately</h2></div>
              <ul className="checks">
                <li className="rv" style={{ "--i": "0" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Ad budgets, paid to Google or Meta</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Domain registration, paid to the registrar</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Printing and packaging production</span>
                </li>
                <li className="rv" style={{ "--i": "3" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Third-party fees such as payment gateways</span>
                </li>
                <li className="rv" style={{ "--i": "4" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Paid stock photos or fonts, if you choose them</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--dark on-dark" aria-labelledby="q-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="q-t">How a quote works</h2></div>
          <ol className="steps">
            <li className="rv" style={{ "--i": "0" }}><b>Message us</b><span>Tell us what you need on WhatsApp.</span></li>
            <li className="rv" style={{ "--i": "1" }}><b>Short chat</b><span>We ask a few questions about your goals.</span></li>
            <li className="rv" style={{ "--i": "2" }}><b>Written quote</b><span>Scope, price, timeline and exclusions.</span></li>
            <li className="rv" style={{ "--i": "3" }}><b>Advance and start</b><span>Usually an advance, balance on delivery.</span></li>
            <li className="rv" style={{ "--i": "4" }}><b>Delivery</b><span>You review, request agreed revisions, we deliver.</span></li>
          </ol>
        </div>
      </section>
      <section className="section" aria-labelledby="faq-t">
        <div className="container container--narrow">
          <div className="sec-head rv"><h2 id="faq-t">Pricing questions</h2></div>
          <div className="faq">
            <details>
              <summary>Do you publish fixed prices?</summary>
              <p>Package prices are shown on this page in rupees. The final amount depends on scope and is confirmed in a written quote before you pay anything.</p>
            </details>
            <details>
              <summary>How does payment work?</summary>
              <p>Usually an advance first and the balance on delivery. Exact amounts and method are confirmed in your quote.</p>
            </details>
            <details>
              <summary>Do you offer support after delivery?</summary>
              <p>Ask when you request a quote. What is included will be stated.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Get a quote for your project</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20a%20quote%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
