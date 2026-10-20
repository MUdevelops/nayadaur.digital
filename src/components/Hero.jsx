import { SITE } from '../config/site.js'
import { useLeadForm } from '../context/LeadFormContext.jsx'
import { asset } from '../lib/asset.js'
import FallingWords from './FallingWords.jsx'

const TRUST = ['Logo', 'Website', 'Google Profile', 'Ads', 'Software']

export default function Hero() {
  const { pickService } = useLeadForm()

  return (
    <section id="home" className="hero pat" aria-labelledby="hero-title">
      <FallingWords />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="ur hero__ur" lang="ur">
            {SITE.taglineUrdu}
          </p>
          <h1 id="hero-title">{SITE.tagline}</h1>
          <p className="sub hero__lead">Logo, website, Google profile, ads and business software for Pakistani businesses.</p>
          <p className="hero__strong">
            <b>Aapka karobar online, Google par aur WhatsApp par nazar aaye.</b>
          </p>
          <p className="hero__actions">
            <a className="btn" href="#contact" onClick={() => pickService('Free Digital Audit')}>
              Get a Free Digital Audit
            </a>
            <a className="btn btn--outline" href="#services">
              View Services
            </a>
          </p>
          <ul className="trust" aria-label="What we do">
            {TRUST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <img
            src={asset('images/hero-orbit-512.webp')}
            srcSet={`${asset('images/hero-orbit-512.webp')} 512w, ${asset('images/hero-orbit.webp')} 1024w`}
            sizes="(max-width: 800px) 340px, 460px"
            width="1024"
            height="1024"
            alt="NayaDaur Digital: glowing Urdu letter Noon surrounded by service icons"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
