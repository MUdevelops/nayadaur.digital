import { WHY_US } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function WhyUs() {
  return (
    <Section id="why" titleId="why-title" dark pattern>
      <div className="sec-head">
        <h2 id="why-title">Why NayaDaur Digital</h2>
      </div>
      <div className="grid">
        {WHY_US.map((item) => (
          <Reveal className="card card--light" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
