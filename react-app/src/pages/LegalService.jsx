import { Link } from 'react-router-dom'
import legal from '../data/legal.json'
import ShineStrip from '../components/ShineStrip.jsx'
import { waLink } from '../site.js'

const V = '?v=6'
const src = (name, w) => `/assets/images/${name}-${w}.webp${V}`

export default function LegalService({ slug }) {
  const s = legal.find((x) => x.slug === slug)
  const related = s.related.map((r) => legal.find((x) => x.slug === r))
  const wa = waLink(`Assalam o Alaikum NayaDaur Digital! Mujhe ${s.wa} ke baare mein baat karni hai. Meherbani kar ke rabta karein.`)
  const quote = `/contact/?service=${encodeURIComponent(s.form)}`
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services/">Services</Link></li>
              <li><Link to="/services/legal-services/">Legal Services</Link></li>
              <li aria-current="page">{s.name}</li>
            </ol>
          </nav>
          <h1 className="rv">{s.h1}</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ '--i': '1' }}>
            {s.ur.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="phero__lead rv" style={{ '--i': '1' }}>{s.lead}</p>
          <p className="actions rv" style={{ '--i': '2' }}>
            <a className="btn" href={wa} target="_blank" rel="noopener">
              <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>
              Chat on WhatsApp
            </a>
            <Link className="btn btn--line" to={quote}>Request a quote</Link>
          </p>
          <figure className="phero__img rv" style={{ '--i': '2' }}>
            <img
              src={src(s.img, 640)}
              srcSet={`${src(s.img, 640)} 640w, ${src(s.img, 1200)} 1200w`}
              sizes="(max-width:899px) 92vw,520px"
              width="1200"
              height="805"
              alt={s.alt}
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <ShineStrip />

      <section className="section" id="deliver" aria-labelledby="deliver-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="deliver-t">{s.includesTitle}</h2>
            <p>Handled by Shine Legal Associates, with NayaDaur Digital coordinating the design and digital side of your brand.</p>
          </div>
          <div className="featlist">
            {s.includes.map(([title, text], i) => (
              <div className="feat rv" style={{ '--i': String(i % 2) }} key={title}>
                <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="who" aria-labelledby="who-t">
        <div className="container">
          <div className="two two--center">
            <div>
              <div className="sec-head rv"><h2 id="who-t">Who this is for</h2></div>
              <ul className="checks">
                {s.who.map((w, i) => (
                  <li className="rv" style={{ '--i': String(i) }} key={w}>
                    <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <p className="actions">
                <Link className="btn btn--line" to="/services/logo-design-branding/">Need a logo first?</Link>
              </p>
            </div>
            <figure className="legal-fig rv">
              <img
                src={src('legal-shield', 640)}
                srcSet={`${src('legal-shield', 640)} 640w, ${src('legal-shield', 1100)} 1100w`}
                sizes="(max-width:859px) 80vw,420px"
                width="1100"
                height="1100"
                alt="A protective shield guarding a profile card, a shop and a sign from copies"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--dark on-dark" id="process" aria-labelledby="process-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="process-t">How it works</h2></div>
          <ol className="steps">
            {s.steps.map(([b, t], i) => (
              <li className="rv" style={{ '--i': String(i) }} key={b}>
                <b>{b}</b>
                <span>{t}</span>
              </li>
            ))}
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
                {s.notIncluded.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </details>
            {s.faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <p className="note">
            General information only, not legal advice. Shine Legal Associates confirms scope, fees and timelines in writing.
          </p>
        </div>
      </section>

      <section className="section section--tint" id="related" aria-labelledby="related-t">
        <div className="container">
          <div className="sec-head rv"><h2 id="related-t">Related</h2></div>
          <div className="rels">
            {related.map((r) => (
              <Link className="rel rv" to={`/services/legal-services/${r.slug}/`} key={r.slug}>
                <strong>{r.cardTitle}</strong>
              </Link>
            ))}
            <Link className="rel rv" to="/services/legal-services/"><strong>All legal services</strong></Link>
          </div>
        </div>
      </section>

      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Talk to us about {s.cardTitle}</h2>
              <p>Message us on WhatsApp. We pass your enquiry to Shine Legal Associates and reply with clear next steps.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href={wa} target="_blank" rel="noopener">
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
