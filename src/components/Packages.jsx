import { PACKAGES } from '../data/content.js'
import { useLeadForm } from '../context/LeadFormContext.jsx'
import { cx } from '../lib/cx.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Packages() {
  const { pickService } = useLeadForm()

  return (
    <Section id="packages" titleId="packages-title">
      <div className="sec-head">
        <Reveal as="h2" id="packages-title">Packages</Reveal>
        <Reveal as="p" className="sub">
          Har karobar ka size alag hai, isliye har package ka custom quote milta hai.
        </Reveal>
      </div>

      <div className="grid grid--packages">
        {PACKAGES.map((pkg) => (
          <Reveal className={cx('card', 'card--package', pkg.popular && 'pop')} key={pkg.id}>
            {pkg.popular && <span className="badge">Most Popular</span>}
            <h3>{pkg.title}</h3>
            <ul className="checklist">
              {pkg.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="card__quote">
              <b>Custom quote</b>
            </p>
            <a className="btn btn--sm" href="#contact" onClick={() => pickService(`Package: ${pkg.title}`)}>
              Get a Quote on WhatsApp
            </a>
          </Reveal>
        ))}
      </div>
      <p className="note">Ad budgets are paid by the client directly to Meta/Google; we manage the campaigns.</p>
    </Section>
  )
}
