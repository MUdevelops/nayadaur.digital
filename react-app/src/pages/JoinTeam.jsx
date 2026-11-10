import { Link } from 'react-router-dom'
import InternForm from '../components/InternForm.jsx'

const V = '?v=7'
const src = (name, w) => `/assets/images/${name}-${w}.webp${V}`

const TRACKS = [
  {
    name: 'Android App Development',
    featured: true,
    icon: 'M7 2h10a1 1 0 011 1v18a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2',
    text: 'Build real Android apps with Kotlin, from first screen to a tested release.',
    items: ['Kotlin and Android Studio', 'App screens, navigation and data', 'Testing on real devices', 'Publishing basics'],
  },
  {
    name: 'Web Development',
    icon: 'M3 4h18v12H3zM8 20h8M12 16v4',
    text: 'Create fast, responsive websites and learn how modern sites are made.',
    items: ['HTML, CSS and JavaScript', 'React fundamentals', 'Responsive layouts', 'SEO and performance basics'],
  },
  {
    name: 'AI & Automation',
    icon: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',
    text: 'Use AI tools responsibly and build small automations and chatbots.',
    items: ['Prompting and AI tools', 'Python basics', 'Simple chatbots and workflows', 'Testing AI output for mistakes'],
  },
  {
    name: 'UI/UX & Graphic Design',
    icon: 'M3 4h18v16H3zM3 9h18M9 9v11',
    text: 'Design clear screens, logos and social posts that follow a brand.',
    items: ['Layout, colour and typography', 'App and website screens', 'Logos and social posts', 'Design tools such as Canva and Figma'],
  },
  {
    name: 'Digital Marketing & Content',
    icon: 'M3 17l6-6 4 4 8-8M15 7h6v6',
    text: 'Plan and write content in Urdu and English, and learn how local search works.',
    items: ['Social media content', 'Google Business Profile basics', 'Writing in Urdu and English', 'Reading simple reports'],
  },
]

const FAQ = [
  ['Is the internship paid?', 'No. This is a free learning internship with no pay. There is also no joining fee, and interns are never asked to pay for anything.'],
  ['Do I need experience?', 'Not always. Tell us what you have tried, and share any projects or links. We may give a short task before confirming a place.'],
  ['Can I join from another city?', 'Tell us your city when you apply. We will confirm how the internship runs for your location.'],
  ['How many hours a week?', 'The internship is part-time, so your studies and other commitments can continue. We agree weekly hours with you at the start.'],
  ['What do I get at the end?', 'A certificate of completion, a portfolio of work you built, and honest feedback from your mentors.'],
  ['How do I apply?', 'Use the form on this page. It prepares a message for WhatsApp or email. You can also message us directly on 0321 9211464.'],
]

export default function JoinTeam() {
  return (
    <>
      <section className="phero">
        <div className="container phero__row">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Join Our Team</li>
            </ol>
          </nav>
          <span className="soon soon--inline rv">Applications open</span>
          <h1 className="rv">Join Our Team: Free 1-Year Internship</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ '--i': '1' }}>
            <span>ہمارے ساتھ ایک سال کی مفت انٹرن شپ۔</span>
            <span>اینڈرائیڈ ایپ ڈیولپمنٹ، ویب، اے آئی اور ڈیزائن میں سیکھیں۔</span>
            <span>حقیقی پروجیکٹس پر کام کریں اور اپنا پورٹ فولیو بنائیں۔</span>
          </p>
          <p className="phero__lead rv" style={{ '--i': '1' }}>
            Learn by building real projects with the NayaDaur Digital team. Choose a track, including Android app
            development, and grow your skills over one year.
          </p>
          <p className="actions rv" style={{ '--i': '2' }}>
            <a className="btn" href="#apply">Apply now</a>
            <a className="btn btn--line" href="#tracks">See the tracks</a>
          </p>
          <figure className="phero__img rv" style={{ '--i': '2' }}>
            <img
              src={src('join-team-hero', 640)}
              srcSet={`${src('join-team-hero', 640)} 640w, ${src('join-team-hero', 1200)} 1200w`}
              sizes="(max-width:899px) 92vw,520px"
              width="1200"
              height="805"
              alt="Team avatars climbing a glowing staircase toward a star badge, with laptops and a phone nearby"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section section--tight" aria-label="Internship at a glance">
        <div className="container">
          <dl className="fut-facts rv">
            <div><dt>Duration</dt><dd>1 year</dd></div>
            <div><dt>Joining fee</dt><dd>None</dd></div>
            <div><dt>Tracks</dt><dd>5 to choose from</dd></div>
            <div><dt>At the end</dt><dd>Certificate of completion</dd></div>
          </dl>
        </div>
      </section>

      <section className="section section--tint" id="tracks" aria-labelledby="tracks-t">
        <div className="container">
          <div className="sec-head rv">
            <span className="eyebrow">Choose your path</span>
            <h2 id="tracks-t">Internship tracks</h2>
            <p>Pick the track closest to your goals. Not sure yet? Choose that option in the form and we will help you decide.</p>
          </div>
          <div className="grid grid--3">
            {TRACKS.map((t, i) => (
              <article className={`card fut-track rv${t.featured ? ' fut-track--feat' : ''}`} style={{ '--i': String(i % 3) }} key={t.name}>
                {t.featured && <span className="soon soon--card">Featured track</span>}
                <div className="card__icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={t.icon} /></svg>
                </div>
                <h3>{t.name}</h3>
                <p>{t.text}</p>
                <ul className="fut-list">
                  {t.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark section--pattern on-dark" id="benefits" aria-labelledby="benefits-t">
        <div className="container">
          <div className="two two--center">
            <div>
              <div className="sec-head rv">
                <span className="eyebrow eyebrow--l">What you get</span>
                <h2 id="benefits-t">Learn on real work, with mentors</h2>
                <p>This is a learning-first internship. You work on tasks that matter to our projects and get feedback on every step.</p>
              </div>
              <ul className="checks checks--light">
                <li className="rv"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Tasks from real NayaDaur Digital projects</span></li>
                <li className="rv" style={{ '--i': '1' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Mentor feedback and code or design reviews</span></li>
                <li className="rv" style={{ '--i': '2' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Portfolio pieces you can show to future employers</span></li>
                <li className="rv" style={{ '--i': '3' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>A certificate of completion at the end of the year</span></li>
              </ul>
            </div>
            <figure className="fut-fig rv">
              <img
                src={src('join-team-workspace', 640)}
                srcSet={`${src('join-team-workspace', 640)} 640w, ${src('join-team-workspace', 1200)} 1200w`}
                sizes="(max-width:859px) 92vw,520px"
                width="1200"
                height="805"
                alt="A tidy desk with a laptop, phone and notebook beside floating code, design and chat icons"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section" id="outline" aria-labelledby="outline-t">
        <div className="container">
          <div className="two two--center">
            <figure className="fut-fig rv">
              <img
                src={src('join-team-certificate', 640)}
                srcSet={`${src('join-team-certificate', 640)} 640w, ${src('join-team-certificate', 1200)} 1200w`}
                sizes="(max-width:859px) 92vw,520px"
                width="1200"
                height="805"
                alt="A certificate with a ribbon seal on a stack of books beside a small trophy"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div>
              <div className="sec-head rv">
                <span className="eyebrow">Programme outline</span>
                <h2 id="outline-t">How the year works</h2>
              </div>
              <ol className="fut-phases">
                <li className="rv"><b>Months 1 to 3: Foundations</b><span>Learn the tools and workflow with small practice tasks and regular feedback.</span></li>
                <li className="rv" style={{ '--i': '1' }}><b>Months 4 to 9: Real projects</b><span>Take on project tasks with mentor review. Android interns build app features end to end.</span></li>
                <li className="rv" style={{ '--i': '2' }}><b>Months 10 to 12: Portfolio</b><span>Finish your best work, present it, and plan your next step.</span></li>
              </ol>
              <p className="note">The outline may be adjusted for each intern's track and pace.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint" id="who" aria-labelledby="who-t">
        <div className="container container--narrow">
          <div className="sec-head rv">
            <span className="eyebrow">Who can apply</span>
            <h2 id="who-t">Is this for you?</h2>
          </div>
          <ul className="checks">
            <li className="rv"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Students, fresh graduates and self-taught learners</span></li>
            <li className="rv" style={{ '--i': '1' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>People who want to learn steadily and finish what they start</span></li>
            <li className="rv" style={{ '--i': '2' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Anyone with a laptop or phone and a reliable internet connection</span></li>
          </ul>
        </div>
      </section>

      <section className="section" id="faq" aria-labelledby="faq-t">
        <div className="container container--narrow">
          <div className="sec-head rv"><h2 id="faq-t">Internship questions</h2></div>
          <div className="faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="apply" aria-labelledby="apply-t">
        <div className="container">
          <div className="two">
            <div className="rv">
              <span className="eyebrow">Apply</span>
              <h2 id="apply-t">Apply for the internship</h2>
              <p>Fill in a few details and we prepare your application message. You send it on WhatsApp or by email, and we reply with the next steps.</p>
              <dl className="dl">
                <dt>Phone and WhatsApp</dt>
                <dd><a href="tel:+923219211464">0321 9211464</a></dd>
                <dt>Email</dt>
                <dd><a href="mailto:info@nayadaur.digital">info@nayadaur.digital</a></dd>
              </dl>
            </div>
            <div className="rv" style={{ '--i': '1' }}><InternForm /></div>
          </div>
        </div>
      </section>
    </>
  )
}
