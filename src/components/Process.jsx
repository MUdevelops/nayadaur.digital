import { PROCESS_STEPS } from '../data/content.js'
import Section from './Section.jsx'

export default function Process() {
  return (
    <Section id="process" titleId="process-title">
      <div className="sec-head">
        <h2 id="process-title">How It Works</h2>
      </div>
      <ol className="steps">
        {PROCESS_STEPS.map((step) => (
          <li key={step}>
            <b>{step}</b>
          </li>
        ))}
      </ol>
    </Section>
  )
}
