import { FAQS } from '../data/content.js'
import Section from './Section.jsx'

export default function Faq() {
  return (
    <Section id="faq" titleId="faq-title" narrow>
      <div className="sec-head">
        <h2 id="faq-title">FAQ</h2>
      </div>
      <div className="faq">
        {FAQS.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
