import { Link } from 'react-router-dom'
import future from '../data/future.json'
import { waLink } from '../site.js'

const V = '?v=7'
const src = (name, w) => `/assets/images/${name}-${w}.webp${V}`
const WA_INTEREST = waLink('Assalam o Alaikum NayaDaur Digital! Mujhe aap ki Future Services (2027) mein dilchaspi hai. Meherbani kar ke mujhe update karein.')
const waFor = (topic) => waLink(`Assalam o Alaikum NayaDaur Digital! Mujhe ${topic} (2027) ke baare mein early update chahiye. Meherbani kar ke rabta karein.`)

export const FUTURE_FAQ = [
  ['Are these services available now?', 'No. These services are planned for 2027 and are not open for orders yet. Our current services, such as websites, branding, Google Business Profile and business software, are available today.'],
  ['What does early interest mean?', 'You tell us which services you care about. We note it, and we message you when that service is ready to launch. It is not an order and it does not commit you to anything.'],
  ['How much will these services cost?', 'Prices are not set yet. We will publish clear packages at launch, and we confirm the scope and price in writing before any work starts.'],
  ['Will every service launch at the same time?', 'No. We plan to launch them one by one, after testing each with early clients. The order and timing can change as we learn what businesses need most.'],
  ['Can I ask for something that is not on the list?', 'Yes. Message us with your idea. If it fits our skills we will tell you honestly, and we may add it to our plans.'],
]

export default function FutureServices() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li aria-current="page">Future Services</li>
            </ol>
          </nav>
          <span className="soon soon--inline rv">Coming 2027</span>
          <h1 className="rv">Future Services from NayaDaur Digital</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ '--i': '1' }}>
            <span>ہم 2027 کے لیے نئی سروسز تیار کر رہے ہیں۔</span>
            <span>اے آئی آٹومیشن، چیٹ بوٹس، اینڈرائیڈ ایپس اور تھری ڈی۔</span>
            <span>اپنی دلچسپی درج کروائیں۔ سروس تیار ہوتے ہی آپ کو بتایا جائے گا۔</span>
          </p>
          <p className="phero__lead rv" style={{ '--i': '1' }}>
            We are preparing 12 new services in AI, software, apps and 3D. They are not open for orders yet.
            Register your interest and we will tell you when each one is ready.
          </p>
          <p className="actions rv" style={{ '--i': '2' }}>
            <a className="btn" href={WA_INTEREST} target="_blank" rel="noopener">
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>
              Register early interest
            </a>
            <a className="btn btn--line" href="#all">See all 12 services</a>
          </p>
          <figure className="phero__img rv" style={{ '--i': '2' }}>
            <img
              src={src('future-services-hub', 640)}
              srcSet={`${src('future-services-hub', 640)} 640w, ${src('future-services-hub', 1200)} 1200w`}
              sizes="(max-width:899px) 92vw,520px"
              width="1200"
              height="805"
              alt="A glowing roadmap arrow rising through icons for AI, apps, chatbots, 3D and analytics"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section section--tight" aria-label="Availability">
        <div className="container">
          <p className="fut-note rv">
            <strong>Status:</strong> planned for 2027. These services cannot be ordered yet, and scope and timing may change.
            For work you can start today, see <Link to="/services/">our current services</Link>.
          </p>
        </div>
      </section>

      <section className="section section--tint" id="all" aria-labelledby="all-t">
        <div className="container">
          <div className="sec-head rv">
            <span className="eyebrow">Planned for 2027</span>
            <h2 id="all-t">12 services in preparation</h2>
            <p>Each card shows what we plan to include. Tap a button to ask about one, or register interest in several.</p>
          </div>
          <div className="grid grid--3">
            {future.map((s, i) => (
              <article className="card card--img fut-card rv" style={{ '--i': String(i % 3) }} id={s.slug} key={s.slug}>
                <div className="card__media">
                  <img
                    src={src(s.img, 640)}
                    srcSet={`${src(s.img, 640)} 640w, ${src(s.img, 1200)} 1200w`}
                    sizes="(max-width:599px) 92vw,(max-width:959px) 46vw,360px"
                    width="640"
                    height="430"
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="soon">Coming 2027</span>
                </div>
                <div className="card__body">
                  <h3>
                    <span className="fut-ic" aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false"><path d={s.icon} /></svg>
                    </span>
                    {s.name}
                  </h3>
                  <p>{s.card}</p>
                  <p className="fut-label">Planned scope</p>
                  <ul className="fut-list">
                    {s.planned.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <a className="link-more" href={waFor(s.wa)} target="_blank" rel="noopener" aria-label={`Ask about ${s.name} on WhatsApp`}>Ask about this</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark section--pattern on-dark" id="rollout" aria-labelledby="rollout-t">
        <div className="container">
          <div className="sec-head rv">
            <span className="eyebrow eyebrow--l">How we will launch</span>
            <h2 id="rollout-t">One service at a time, tested first</h2>
            <p>We would rather launch fewer things properly than many things badly. Each service follows the same four steps.</p>
          </div>
          <ol className="steps steps--4">
            <li className="rv"><b>Research</b><span>Talk to businesses and define what is really needed.</span></li>
            <li className="rv" style={{ '--i': '1' }}><b>Design</b><span>Plan the service, the scope and the deliverables.</span></li>
            <li className="rv" style={{ '--i': '2' }}><b>Pilot</b><span>Test with a few early clients and fix what we learn.</span></li>
            <li className="rv" style={{ '--i': '3' }}><b>Launch</b><span>Open the service with clear packages and written scope.</span></li>
          </ol>
          <figure className="legal-banner rv">
            <img
              src={src('future-roadmap-banner', 800)}
              srcSet={`${src('future-roadmap-banner', 800)} 800w, ${src('future-roadmap-banner', 1600)} 1600w`}
              sizes="(max-width:1120px) 92vw,1120px"
              width="1600"
              height="679"
              alt="Floating glass interface panels above a glowing horizon line"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section" id="today" aria-labelledby="today-t">
        <div className="container">
          <div className="sec-head rv">
            <span className="eyebrow">Available today</span>
            <h2 id="today-t">Need something now?</h2>
            <p>You do not have to wait for 2027. These services are open today and are a good base for what comes next.</p>
          </div>
          <div className="grid grid--3">
            <article className="card card--svc rv">
              <div className="card__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 4h18v12H3zM8 20h8M12 16v4" /></svg></div>
              <h3><Link to="/services/website-development/">Website Development</Link></h3>
              <p>Fast, mobile-friendly websites and stores that turn visitors into WhatsApp enquiries.</p>
            </article>
            <article className="card card--svc rv" style={{ '--i': '1' }}>
              <div className="card__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 4h16v16H4zM8 9h8M8 13h5" /></svg></div>
              <h3><Link to="/services/business-software/">Business Software</Link></h3>
              <p>Invoice and udhaar software for local shops, in Urdu and English.</p>
            </article>
            <article className="card card--svc rv" style={{ '--i': '2' }}>
              <div className="card__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2l9 5v10l-9 5-9-5V7z" /></svg></div>
              <h3><Link to="/services/logo-design-branding/">Logo Design &amp; Branding</Link></h3>
              <p>Logos, Urdu lettering and brand kits for a consistent look everywhere.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tint" id="faq" aria-labelledby="faq-t">
        <div className="container container--narrow">
          <div className="sec-head rv"><h2 id="faq-t">Questions about Future Services</h2></div>
          <div className="faq">
            {FUTURE_FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Want to hear first?</h2>
              <p>Tell us which services interest you. We will message you when they are ready. No obligation.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href={WA_INTEREST} target="_blank" rel="noopener">
                <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us
              </a>
              <Link className="btn btn--ghost" to={`/contact/?service=${encodeURIComponent('Future Services (2027): Early Interest')}`}>Send an enquiry</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
