import { TESTIMONIALS } from '../data/content.js'
import Section from './Section.jsx'

/** Rendered only when real reviews exist in data/content.js (TESTIMONIALS). */
export default function Testimonials() {
  if (!TESTIMONIALS.length) return null
  return (
    <Section id="testimonials" titleId="testimonials-title">
      <div className="sec-head">
        <h2 id="testimonials-title">What Clients Say</h2>
      </div>
      <div className="grid">
        {TESTIMONIALS.map((t) => (
          <figure className="card quote" key={t.author}>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption>
              <b>{t.author}</b>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
