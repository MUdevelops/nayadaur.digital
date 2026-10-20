import { UDHAAR_FEATURES } from '../data/content.js'
import { useLeadForm } from '../context/LeadFormContext.jsx'
import { asset } from '../lib/asset.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Product() {
  const { pickService } = useLeadForm()

  return (
    <Section id="product" titleId="product-title" dark pattern>
      <div className="two">
        <Reveal>
          <h2 id="product-title">Udhaar &amp; Invoice Software</h2>
          <p className="ur ur--sub" lang="ur">ادھار اور انوائس سافٹ ویئر</p>
          <p className="sub">
            Udhaar management software and invoice software for Pakistani shops, built in Python and made simple.
          </p>
          <ul className="checklist checklist--light">
            {UDHAAR_FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <a className="btn btn--lime" href="#contact" onClick={() => pickService('Udhaar Management System')}>
            Request a Demo
          </a>
        </Reveal>

        <Reveal as="figure" className="product__fig">
          <img
            className="product__img"
            src={asset('images/udhaar-ledger-system.webp')}
            srcSet={`${asset('images/udhaar-ledger-system-640.webp')} 640w, ${asset('images/udhaar-ledger-system.webp')} 1200w`}
            sizes="(max-width: 800px) 92vw, 540px"
            width="1200"
            height="805"
            alt="Concept mockup of the Udhaar Manager dashboard showing customers, balances and payment status"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Concept mockup, not a real screenshot.</figcaption>
        </Reveal>
      </div>
    </Section>
  )
}
