import { Link } from 'react-router-dom'

export default function ServicesBusinessSoftware() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li aria-current="page">Business Software</li>
            </ol>
          </nav>
          <h1 className="rv">Custom Business Software: Invoicing, Udhaar and Automation Tools</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>ادھار، انوائس اور روزانہ رپورٹس کے لیے آسان سافٹ ویئر۔ آپ کی دکان کے کام کے مطابق بنایا گیا۔</span>
            <span>اردو اور انگریزی دونوں میں۔ حساب کتاب میں غلطیاں کم۔</span>
            <span>گاہکوں کے بقایاجات ایک ہی جگہ۔ سادہ، تیز اور استعمال میں آسان۔</span>
          </p>
          <p className="actions rv" style={{ "--i": "2" }}>
            <a className="btn" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20business%20software%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
            <Link className="btn btn--line" to="/contact/?service=Udhaar%20Management%20System">Request a quote</Link>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/business-software-setup-640.webp" srcSet="/assets/images/business-software-setup-640.webp 640w, /assets/images/business-software-setup-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Invoice software desktop with ledger and receipt printer" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="deliver" aria-labelledby="deliver-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="deliver-t">What you get</h2>
            <p>Paper notebooks work until a page is lost or a balance is disputed. A small, focused tool does exactly what your shop needs.</p>
          </div>
          <div className="featlist">
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Udhaar management</h3>
                <p>Customer ledger with balances, payments, reminders and a daily summary.</p>
              </div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Invoice system</h3>
                <p>Create, save and print invoices with customer and item details.</p>
              </div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Reports</h3><p>Daily and monthly views of sales, dues and payments.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Urdu and English interface</h3><p>Labels and print layouts in your staff language.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Custom tools</h3>
                <p>Repeated tasks such as spreadsheet-to-bills; scope agreed case by case.</p>
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
                  <span>Shops and wholesalers that sell on credit</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Businesses writing invoices by hand or in spreadsheets</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Owners repeating the same data entry every day</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="shots rv">
                <figure className="shot">
                  <img src="/assets/images/udhaar-ledger-system-640.webp" srcSet="/assets/images/udhaar-ledger-system-640.webp 640w, /assets/images/udhaar-ledger-system.webp 1200w" width="1200" height="805" alt="Concept mockup of the Udhaar Manager dashboard showing customers, balances and payment status" sizes="(max-width:859px) 92vw,260px" loading="lazy" decoding="async" />
                  <figcaption>Concept mockup of an udhaar dashboard, not a real screenshot.</figcaption>
                </figure>
              </div>
              <p className="note">Concept mockup, not a real screenshot.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--dark on-dark" id="process" aria-labelledby="process-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="process-t">How it works</h2></div>
          <ol className="steps">
            <li className="rv" style={{ "--i": "0" }}><b>Discover</b><span>Watch how you keep records today.</span></li>
            <li className="rv" style={{ "--i": "1" }}><b>Plan</b><span>Agree screens, data and exact scope.</span></li>
            <li className="rv" style={{ "--i": "2" }}><b>Design</b><span>See mock screens before any code.</span></li>
            <li className="rv" style={{ "--i": "3" }}><b>Build</b><span>Build and test with sample data.</span></li>
            <li className="rv" style={{ "--i": "4" }}><b>Launch</b><span>Install, train your staff, discuss support.</span></li>
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
                <li>Tax filing or full accounting software</li>
                <li>Data storage and backups are agreed before building; backups are your responsibility unless agreed otherwise</li>
                <li>The mockup on this site is a concept, not a client system</li>
              </ul>
            </details>
            <details>
              <summary>What is an udhaar management system?</summary>
              <p>Software that records what each customer owes, their payments and balance, replacing the paper notebook.</p>
            </details>
            <details>
              <summary>Does it work in Urdu?</summary>
              <p>Yes. The interface and printed bills can be in Urdu, English or both.</p>
            </details>
            <details>
              <summary>Can you build something custom?</summary>
              <p>Yes. Tell us the repeated task and we will say honestly if a small tool is the right fix.</p>
            </details>
            <details>
              <summary>What happens after delivery?</summary>
              <p>Ask about support when you request a quote. We will state what is included.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="related" aria-labelledby="related-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="related-t">Related</h2></div>
          <div className="rels">
            <Link className="rel rv" to="/services/website-development/"><strong>Website Development</strong></Link>
            <Link className="rel rv" to="/services/graphic-design/"><strong>Graphic Design</strong></Link>
            <Link className="rel rv" to="/services/google-business-profile/"><strong>Google Business Profile</strong></Link>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Talk to us about business software</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20business%20software%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
