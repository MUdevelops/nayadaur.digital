import { useState } from 'react'
import { CATEGORIES, SERVICES } from '../data/services.js'
import { useLeadForm } from '../context/LeadFormContext.jsx'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import { CategoryIcon } from './Icons.jsx'

const FILTERS = ['all', ...Object.keys(CATEGORIES)]

export default function Services() {
  const [filter, setFilter] = useState('all')
  const { pickService } = useLeadForm()
  const visible = filter === 'all' ? SERVICES : SERVICES.filter((s) => s.category === filter)

  return (
    <Section id="services" titleId="services-title">
      <div className="sec-head">
        <Reveal as="h2" id="services-title">Our Services</Reveal>
        <Reveal as="p" className="sub">
          Online dukan banwayen, brand banayen, customers payen aur hisaab asaan karein.
        </Reveal>
      </div>

      <div className="tabs" role="group" aria-label="Filter services">
        {FILTERS.map((key) => (
          <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}>
            {key === 'all' ? 'All' : CATEGORIES[key]}
          </button>
        ))}
      </div>
      <p className="vh" role="status">
        Showing {visible.length} {visible.length === 1 ? 'service' : 'services'}
      </p>

      <div className="grid">
        {visible.map((s) => (
          <Reveal as="article" className="card" key={s.id}>
            <div className="card__icon">
              <CategoryIcon name={s.category} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <a className="btn btn--sm btn--outline" href="#contact" onClick={() => pickService(s.title)}>
              Ask on WhatsApp
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
