import { Link } from 'react-router-dom'

export default function ServicesSocialMediaMarketing() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li aria-current="page">Social Media Marketing</li>
            </ol>
          </nav>
          <h1 className="rv">Social Media Setup, WhatsApp Business and Facebook &amp; Instagram Ads</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ "--i": "1" }}>
            <span>فیس بک اور انسٹاگرام کے صاف ستھرے پروفائلز۔ واٹس ایپ بزنس کی مکمل سیٹنگ۔</span>
            <span>ایسے اشتہارات جو لوگوں کو چیٹ تک لائیں۔ پروفائل، کیٹلاگ اور فوری جوابات۔</span>
            <span>فالوورز یا سیلز کا کوئی جھوٹا دعویٰ نہیں۔ آپ کا کاروبار ہر جگہ ایک جیسا دکھائی دے۔</span>
          </p>
          <p className="actions rv" style={{ "--i": "2" }}>
            <a className="btn" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20social%20media%20marketing%20and%20ads%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
            <Link className="btn btn--line" to="/contact/?service=Facebook%20and%20Instagram%20Ads%20Management">Request a quote</Link>
          </p>
          <figure className="phero__img rv" style={{ "--i": "2" }}>
            <img src="/assets/images/social-media-service-640.webp" srcSet="/assets/images/social-media-service-640.webp 640w, /assets/images/social-media-service-1200.webp 1200w" sizes="(max-width:899px) 92vw,520px" width="1200" height="805" alt="Social media profiles and megaphone illustration" decoding="async" />
          </figure>
        </div>
      </section>
      <section className="section" id="deliver" aria-labelledby="deliver-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="deliver-t">What you get</h2>
            <p>Unanswered messages and half-finished profiles lose customers quietly. We set up a tidy base first, then run ads.</p>
          </div>
          <div className="featlist">
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Social media setup</h3>
                <p>Facebook, Instagram, TikTok and YouTube profiles with consistent names and images.</p>
              </div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>WhatsApp Business setup</h3>
                <p>Profile, catalog, quick replies and labels to answer faster.</p>
              </div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Ad creatives</h3><p>Post, story and ad designs that match your brand.</p></div>
            </div>
            <div className="feat rv" style={{ "--i": "1" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div>
                <h3>Facebook and Instagram ads</h3>
                <p>Campaign setup, audiences, testing and adjustments.</p>
              </div>
            </div>
            <div className="feat rv" style={{ "--i": "0" }}>
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
              <div><h3>Click-to-WhatsApp ads</h3><p>Ads that open a chat with you.</p></div>
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
                  <span>Businesses selling or booking through Facebook, Instagram or WhatsApp</span>
                </li>
                <li className="rv" style={{ "--i": "1" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>New businesses launching their first profiles</span>
                </li>
                <li className="rv" style={{ "--i": "2" }}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Shops with many repeat questions</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="shots rv">
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
            <li className="rv" style={{ "--i": "0" }}><b>Discover</b><span>Review your profiles, offer and customers.</span></li>
            <li className="rv" style={{ "--i": "1" }}><b>Plan</b><span>Choose platforms and the goal of your ads.</span></li>
            <li className="rv" style={{ "--i": "2" }}><b>Design</b><span>Prepare profile images, posts and ad creatives.</span></li>
            <li className="rv" style={{ "--i": "3" }}><b>Build</b><span>Set up profiles, WhatsApp Business and campaigns.</span></li>
            <li className="rv" style={{ "--i": "4" }}><b>Launch</b><span>Watch early results and refine.</span></li>
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
                <li>Ad budgets, paid directly to Meta; our fee is separate</li>
                <li>Bought followers or likes, and guaranteed reach or sales</li>
                <li>Meta reviews ads and can reject or limit them</li>
              </ul>
            </details>
            <details>
              <summary>Do you post for me every day?</summary>
              <p>Our listed services are setup, creatives and ads. Ask if you need regular posting and we will say plainly whether we can.</p>
            </details>
            <details>
              <summary>Who pays for ads?</summary>
              <p>You pay Meta directly from your own ad account. We manage the campaigns.</p>
            </details>
            <details>
              <summary>What is WhatsApp Business setup?</summary>
              <p>A business profile with your details, catalog, quick replies and labels.</p>
            </details>
            <details>
              <summary>Can you design the posts too?</summary>
              <p>Yes. We create matching creatives, or you can order them separately.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="related" aria-labelledby="related-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="related-t">Related</h2></div>
          <div className="rels">
            <Link className="rel rv" to="/services/graphic-design/"><strong>Graphic Design</strong></Link>
            <Link className="rel rv" to="/services/logo-design-branding/"><strong>Logo Design &amp; Branding</strong></Link>
            <Link className="rel rv" to="/services/google-business-profile/"><strong>Google Business Profile</strong></Link>
            <Link className="rel rv" to="/blog/does-small-business-need-website-or-just-social-media/">
              <strong>Does Your Small Business Need a Website or Just Social Media?</strong>
              <span>Guide · 6 min read</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Talk to us about social media marketing</h2>
              <p>Message us on WhatsApp. We reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20social%20media%20marketing%20and%20ads%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
