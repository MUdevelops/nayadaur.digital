import { Link } from 'react-router-dom'

export default function ServicesGoogleAds() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li aria-current="page">Google Ads</li>
            </ol>
          </nav>
          <h1 className="rv">Google Ads Management for Small Businesses in Pakistan</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>گوگل سرچ اور میپس پر اشتہارات۔ ان لوگوں تک جو پہلے ہی آپ کو ڈھونڈ رہے ہیں۔</span>
            <span>کالز اور چیٹس کی باقاعدہ ٹریکنگ۔ اشتہاری بجٹ آپ براہِ راست گوگل کو دیتے ہیں۔</span>
            <span>کسی نتیجے کا جھوٹا وعدہ نہیں کیا جاتا۔ چھوٹے کاروباروں کے لیے سادہ مینجمنٹ۔</span>
          </p>
          <p className="actions rv" style={{ "--i": "2" }}>
            <a className="btn" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20Google%20Ads%20management%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
            <Link className="btn btn--line" to="/contact/?service=Google%20Ads%20(Search%20and%20Maps)">Request a quote</Link>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/ads-compaign-management-service-640.webp" srcSet="/assets/images/ads-compaign-management-service-640.webp 640w, /assets/images/ads-compaign-management-service-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Google Ads search and growth chart illustration" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="deliver" aria-labelledby="deliver-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="deliver-t">What you get</h2>
            <p>Careless ads burn budget on clicks that never become customers. We narrow campaigns to the searches that matter.</p>
          </div>
          <div className="featlist">
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Account in your name</h3><p>You stay the owner of your account and data.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Keyword and location plan</h3>
                <p>Target the searches and areas that fit your business.</p>
              </div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Ad copy</h3><p>Clear ads that match what customers search for.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Call and WhatsApp tracking</h3><p>Results counted by enquiries, not only clicks.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Ongoing optimisation</h3><p>Keywords and budgets adjusted as data arrives.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Reporting</h3><p>Plain-language updates; frequency agreed in your quote.</p></div>
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
                  <span>Local businesses wanting calls from nearby searches</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Service providers who can reply quickly</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Owners who tried ads but could not tell what worked</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="rv">
                <svg aria-labelledby="ad-t" className="illus" role="img" viewBox="0 0 320 260">
                  <title id="ad-t">Illustration of how a Google search ad is laid out: sponsored label, business name, headline, description and call button</title>
                  <rect fill="#fff" height="248" rx="14" stroke="#0B5D3B" strokeOpacity=".3" strokeWidth="2" width="308" x="6" y="6" />
                  <rect fill="#f1f3f1" height="30" rx="15" stroke="#cfd6d0" width="276" x="22" y="22" />
                  <rect fill="#9aa59d" height="8" rx="4" width="130" x="38" y="33" />
                  <text fill="#0B5D3B" fontFamily="Outfit,sans-serif" fontSize="12" fontWeight="700" x="22" y="82">Sponsored</text>
                  <circle cx="34" cy="106" fill="#0B5D3B" r="9" />
                  <text fill="#333" fontFamily="Outfit,sans-serif" fontSize="12" x="50" y="110">Your business name</text>
                  <text fill="#0b4d9d" fontFamily="Outfit,sans-serif" fontSize="17" fontWeight="700" x="22" y="140">Headline that matches the search</text>
                  <rect fill="#c9d3cc" height="7" rx="3" width="250" x="22" y="152" />
                  <rect fill="#c9d3cc" height="7" rx="3" width="200" x="22" y="166" />
                  <rect fill="#0B5D3B" height="28" rx="14" width="84" x="22" y="196" />
                  <text fill="#fff" fontFamily="Outfit,sans-serif" fontSize="12" fontWeight="700" textAnchor="middle" x="64" y="214">Call now</text>
                  <rect fill="#128c4a" height="28" rx="14" width="104" x="116" y="196" />
                  <text fill="#fff" fontFamily="Outfit,sans-serif" fontSize="12" fontWeight="700" textAnchor="middle" x="168" y="214">WhatsApp</text>
                </svg>
                <h3>What a search ad is made of</h3>
                <ul className="checks">
                  <li className="rv" style={{ "--i": "0" }}>
                    <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                    <span>A headline that repeats the search</span>
                  </li>
                  <li className="rv" style={{ "--i": "1" }}>
                    <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                    <span>A short description of your offer</span>
                  </li>
                  <li className="rv" style={{ "--i": "2" }}>
                    <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                    <span>Buttons to call or open WhatsApp</span>
                  </li>
                </ul>
                <p className="note">Generic illustration, not a real ad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--dark on-dark" id="process" aria-labelledby="process-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="process-t">How it works</h2></div>
          <ol className="steps">
            <li className="rv" style={{ "--i": "0" }}><b>Discover</b><span>Learn your offer and what an enquiry is worth.</span></li>
            <li className="rv" style={{ "--i": "1" }}><b>Plan</b><span>Agree budget, locations, keywords and tracking.</span></li>
            <li className="rv" style={{ "--i": "2" }}><b>Design</b><span>Write ads; check your landing page matches.</span></li>
            <li className="rv" style={{ "--i": "3" }}><b>Build</b><span>Launch and test that tracking records calls.</span></li>
            <li className="rv" style={{ "--i": "4" }}><b>Launch</b><span>Review early data, trim waste, keep improving.</span></li>
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
                <li>The ad budget, paid directly to Google; our fee is separate</li>
                <li>Guaranteed leads, sales or return on spend</li>
                <li>Google reviews ads and may reject some</li>
              </ul>
            </details>
            <details>
              <summary>How much budget do I need?</summary>
              <p>It depends on city, competition and goal. After a short review we suggest a starting budget, and say honestly if ads are not the right first step.</p>
            </details>
            <details>
              <summary>Who pays Google?</summary>
              <p>You do, through your own Google Ads account. We manage the campaigns.</p>
            </details>
            <details>
              <summary>Ads or a Maps profile first?</summary>
              <p>Usually a Google Business Profile first: it is free and builds trust. Ads add speed.</p>
            </details>
            <details>
              <summary>How soon will I see results?</summary>
              <p>Ads can show soon after approval, but useful results take a few weeks of data.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="related" aria-labelledby="related-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="related-t">Related</h2></div>
          <div className="rels">
            <Link className="rel rv" to="/services/google-business-profile/"><strong>Google Business Profile</strong></Link>
            <Link className="rel rv" to="/services/website-development/"><strong>Website Development</strong></Link>
            <Link className="rel rv" to="/services/social-media-marketing/"><strong>Social Media Marketing</strong></Link>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Talk to us about google ads</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20Google%20Ads%20management%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
