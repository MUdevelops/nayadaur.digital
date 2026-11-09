const V = '?v=6'

// "Provided by Shine Legal Associates" band shown on every legal page.
export default function ShineStrip({ stats }) {
  return (
    <section className="section section--tight" aria-labelledby="shine-t">
      <div className="container">
        <div className="shine rv">
          <div className="shine__logo">
            <img
              src={`/assets/images/shine-logo-320.webp${V}`}
              srcSet={`/assets/images/shine-logo-320.webp${V} 320w, /assets/images/shine-logo-640.webp${V} 640w`}
              sizes="(max-width:599px) 60vw,260px"
              width="640"
              height="621"
              alt="Shine Legal Associates logo"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="shine__text">
            <span className="eyebrow">Legal services provided by</span>
            <h2 id="shine-t">Shine Legal Associates</h2>
            <p className="shine__tag">Protecting Ideas, Securing Futures</p>
            <p>
              Every legal service on this page is delivered by Shine Legal Associates, an independent law firm
              with a focus on intellectual property. NayaDaur Digital introduces you and keeps your brand work
              and legal work in step.
            </p>
            {stats ? (
              <ul className="shine__stats">
                <li><b>10+</b><span>years of intellectual property experience</span></li>
                <li><b>800+</b><span>clients served</span></li>
              </ul>
            ) : null}
            <p className="shine__fine">
              Figures are as reported by Shine Legal Associates. NayaDaur Digital is a digital agency and does not
              give legal advice. Fees and scope are confirmed in writing by Shine before any work starts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
