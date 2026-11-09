import { Link } from 'react-router-dom'
import legal from '../data/legal.json'
import ShineStrip from '../components/ShineStrip.jsx'
import { waLink } from '../site.js'

const V = '?v=6'
const src = (name, w) => `/assets/images/${name}-${w}.webp${V}`
const WA = waLink('Assalam o Alaikum NayaDaur Digital! Mujhe legal services ke baare mein baat karni hai. Meherbani kar ke rabta karein.')

const FAQ = [
  ['Who provides the legal services?', 'Shine Legal Associates, an independent law firm. NayaDaur Digital is a digital agency that introduces you and coordinates the design and digital side of your brand.'],
  ['Is NayaDaur Digital a law firm?', 'No. We do not give legal advice. Legal advice, filings and representation come from Shine Legal Associates.'],
  ['Do I need a logo before I register a trademark?', 'Not always. You can register a name first. If you want to register a logo, it helps to finish the design first. We can design it for you.'],
  ['How much do legal services cost?', 'Fees depend on the service and the amount of work. Shine confirms the scope and fee in writing before anything starts.'],
  ['Can you help if someone is already copying my brand?', 'Yes. Send us the links, photos and dates. Shine will assess your position and advise on notices, platform complaints and further steps. Outcomes cannot be guaranteed.'],
]

export default function LegalServices() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li aria-current="page">Legal Services</li>
            </ol>
          </nav>
          <h1 className="rv">Legal Services for Brands and Businesses in Pakistan</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ '--i': '1' }}>
            <span>ٹریڈ مارک، کاپی رائٹ اور برانڈ کا مکمل قانونی تحفظ۔</span>
            <span>تمام قانونی خدمات شین لیگل ایسوسی ایٹس فراہم کرتے ہیں۔</span>
            <span>آپ کی محنت اور آپ کا برانڈ، دونوں محفوظ۔</span>
          </p>
          <p className="phero__lead rv" style={{ '--i': '1' }}>
            We build brands, logos and websites. Shine Legal Associates protects them. Together we help you register,
            defend and grow what you have built.
          </p>
          <p className="actions rv" style={{ '--i': '2' }}>
            <a className="btn" href={WA} target="_blank" rel="noopener">
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>
              Chat on WhatsApp
            </a>
            <Link className="btn btn--line" to={`/contact/?service=${encodeURIComponent('Legal Services')}`}>Request a quote</Link>
          </p>
          <figure className="phero__img rv" style={{ '--i': '2' }}>
            <img
              src={src('legal-services-hub', 640)}
              srcSet={`${src('legal-services-hub', 640)} 640w, ${src('legal-services-hub', 1200)} 1200w`}
              sizes="(max-width:899px) 92vw,520px"
              width="1200"
              height="805"
              alt="Scales of justice in front of a protective shield with the NayaDaur mark and a sealed certificate"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <ShineStrip stats />

      <section className="section section--tint" id="all" aria-labelledby="all-t">
        <div className="container">
          <div className="sec-head rv">
            <span className="eyebrow">Provided by Shine Legal Associates</span>
            <h2 id="all-t">Our legal services</h2>
            <p>Seven services that cover registration, protection, advice and disputes. Start with one and add more as your brand grows.</p>
          </div>
          <div className="grid grid--3">
            {legal.map((s, i) => (
              <article className="card card--img rv" style={{ '--i': String(i % 3) }} key={s.slug}>
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
                </div>
                <div className="card__body">
                  <h3><Link to={`/services/legal-services/${s.slug}/`}>{s.cardTitle}</Link></h3>
                  <p>{s.card}</p>
                  <span className="link-more" aria-hidden="true">Learn more</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark section--pattern on-dark" id="together" aria-labelledby="together-t">
        <div className="container">
          <div className="two two--center">
            <div>
              <div className="sec-head rv">
                <span className="eyebrow eyebrow--l">Design and protection, together</span>
                <h2 id="together-t">Your brand, designed and legally protected</h2>
                <p>
                  Logos, websites and social profiles take real effort to build. Without legal protection they are easy to copy.
                  Working with NayaDaur Digital and Shine Legal Associates means one team builds it and another secures it.
                </p>
              </div>
              <ul className="checks checks--light">
                <li className="rv"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Register your trademark right after your logo is approved</span></li>
                <li className="rv" style={{ '--i': '1' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Keep ownership of designs and content clear in writing</span></li>
                <li className="rv" style={{ '--i': '2' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Get help removing copycat profiles and imitation listings</span></li>
              </ul>
            </div>
            <figure className="legal-fig rv">
              <img
                src={src('legal-shield', 640)}
                srcSet={`${src('legal-shield', 640)} 640w, ${src('legal-shield', 1100)} 1100w`}
                sizes="(max-width:859px) 80vw,440px"
                width="1100"
                height="1100"
                alt="A protective shield guarding a profile card, a shop and a sign from broken copies"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <figure className="legal-banner rv">
            <img
              src={src('legal-partner-banner', 800)}
              srcSet={`${src('legal-partner-banner', 800)} 800w, ${src('legal-partner-banner', 1600)} 1600w`}
              sizes="(max-width:1120px) 92vw,1056px"
              width="1600"
              height="668"
              alt="A design laptop linked to scales of justice and a shield"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section" id="faq" aria-labelledby="faq-t">
        <div className="container container--narrow">
          <div className="sec-head rv"><h2 id="faq-t">Questions about legal services</h2></div>
          <div className="faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <p className="note">General information only, not legal advice.</p>
        </div>
      </section>

      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Protect your brand with Shine Legal Associates</h2>
              <p>Message us on WhatsApp. We pass your enquiry on and reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href={WA} target="_blank" rel="noopener">
                <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us
              </a>
              <a className="btn btn--ghost" href="tel:+923219211464">
                <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
