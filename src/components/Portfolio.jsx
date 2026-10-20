import { useCallback, useState } from 'react'
import { SAMPLES } from '../data/content.js'
import { asset } from '../lib/asset.js'
import Lightbox from './Lightbox.jsx'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Portfolio() {
  const [active, setActive] = useState(null)

  const navigate = useCallback((step) => {
    setActive((i) => (i === null ? i : (i + step + SAMPLES.length) % SAMPLES.length))
  }, [])
  const close = useCallback(() => setActive(null), [])

  return (
    <Section id="portfolio" titleId="portfolio-title" pattern>
      <div className="sec-head">
        <h2 id="portfolio-title">Concept Samples</h2>
        <p className="sub">Concept samples made to show our style. Real client work will be added as we grow.</p>
      </div>

      <div className="pf-grid">
        {SAMPLES.map((s, i) => (
          <Reveal as="figure" className="pf" key={s.n}>
            <button type="button" className="pb" aria-label={`View larger: ${s.caption}`} onClick={() => setActive(i)}>
              <img
                src={asset(`images/sample-${s.n}-700.webp`)}
                srcSet={`${asset(`images/sample-${s.n}-700.webp`)} 700w, ${asset(`images/sample-${s.n}.webp`)} 1400w`}
                sizes="(max-width: 560px) 92vw, (max-width: 900px) 46vw, 340px"
                width="700"
                height="470"
                alt={s.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="pill">Concept sample</span>
            </button>
            <figcaption>{s.caption}</figcaption>
          </Reveal>
        ))}
      </div>

      {active !== null && <Lightbox items={SAMPLES} index={active} onClose={close} onNavigate={navigate} />}
    </Section>
  )
}
