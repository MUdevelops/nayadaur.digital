import { Link } from 'react-router-dom'

const V = '?v=7'
const img = (w) => `/assets/images/future-services-hub-${w}.webp${V}`
const ITEMS = ['AI automation and chatbots', 'Custom software and Android apps', 'AR and 3D for products', 'Dashboards, payments and more']

/** Short "Coming 2027" promo used on the home and services pages. */
export default function FutureTeaser({ id = 'future', className = '' }) {
  return (
    <section className={`section ${className}`.trim()} id={id} aria-labelledby={`${id}-t`}>
      <div className="container">
        <div className="two two--center">
          <div>
            <div className="sec-head rv">
              <span className="soon soon--inline">Coming 2027</span>
              <h2 id={`${id}-t`}>Future services: AI, apps and 3D</h2>
              <p>We are preparing 12 new services. They are not open for orders yet. Register your interest to hear first.</p>
            </div>
            <ul className="checks">
              {ITEMS.map((t, i) => (
                <li className="rv" style={{ '--i': String(i) }} key={t}>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="actions">
              <Link className="btn" to="/services/future-services/">Explore future services</Link>
            </p>
          </div>
          <figure className="fut-fig rv">
            <img
              src={img(640)}
              srcSet={`${img(640)} 640w, ${img(1200)} 1200w`}
              sizes="(max-width:859px) 92vw,520px"
              width="1200"
              height="805"
              alt="A glowing roadmap arrow rising through icons for AI, apps, chatbots, 3D and analytics"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
