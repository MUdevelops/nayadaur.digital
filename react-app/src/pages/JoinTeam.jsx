import { Link } from 'react-router-dom'
import InternForm from '../components/InternForm.jsx'

const V = '?v=7'
const src = (name, w) => `/assets/images/${name}-${w}.webp${V}`

const TRACKS = [
  {
    name: 'Graphic Designer',
    icon: 'M3 4h18v16H3zM3 9h18M9 9v11',
    text: 'Design logos, social posts, menus, banners and brand kits for real clients, in Urdu and English.',
    items: ['Logos, brand kits and bilingual lettering', 'Social media posts, banners and menus', 'Canva, Figma, Photoshop or Illustrator', 'Feedback and revisions on real client briefs'],
  },
  {
    name: 'Digital Network & Marketing',
    icon: 'M3 17l6-6 4 4 8-8M15 7h6v6',
    text: 'Grow our clients online through social media, Google, WhatsApp Business and local connections.',
    items: ['Social media and WhatsApp Business setup', 'Google Business Profile and local search basics', 'Meta and Google ads support', 'Networking, outreach and simple reports'],
  },
  {
    name: 'AI Application Engineer',
    featured: true,
    icon: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',
    text: 'A builder who learns whatever technology a project needs, from Android and web to AI, automation and cloud.',
    items: ['Web apps with React and Android apps with Kotlin', 'AI tools, chatbots, APIs and automation with Python', 'Databases, hosting and deployment', 'Debugging, testing and shipping real features'],
  },
]

const QUALITIES = [
  ['Hardworking and consistent', 'You show up, finish tasks and improve with feedback.'],
  ['Learning by doing', 'You learn practically, on real projects, not only from videos.'],
  ['Growth before money', 'You care more about skills and long-term growth than quick income.'],
  ['Honest and reliable', 'You communicate clearly, meet deadlines and work well in a team.'],
]

const FAQ = [
  ['Is the internship paid?', 'Year one is a free learning year with no salary and no joining fee. After one year, salary starts for team members who complete the year and continue with the team. The amount and terms are shared in writing before year two.'],
  ['Which roles are open?', 'Graphic Designer, Digital Network & Marketing, and AI Application Engineer. Choose one in the form, or choose "Not sure yet" and we will help you decide.'],
  ['Do I need experience?', 'Not always. Tell us what you have tried, and share any projects or links. We may give a short task before confirming a place. Attitude matters more than a perfect CV.'],
  ['Can I join from another city?', 'Tell us your city when you apply. We will confirm how the internship runs for your location.'],
  ['How many hours a week?', 'The internship is part-time, so your studies and other commitments can continue. We agree weekly hours with you at the start.'],
  ['What do I get at the end of year one?', 'A certificate of completion, a portfolio of real work, honest mentor feedback, and the start of a salaried role with the team.'],
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
          <h1 className="rv">Join Our Team: Free 1-Year Internship, Then a Paid Role</h1>
          <p className="phero__ur rv" lang="ur" dir="rtl" style={{ '--i': '1' }}>
            <span>ہمارے ساتھ ایک سال کی مفت انٹرن شپ۔</span>
            <span>گرافک ڈیزائنر، ڈیجیٹل نیٹ ورک و مارکیٹنگ اور اے آئی ایپلیکیشن انجینئر کی ٹیم۔</span>
            <span>عملی کام سے سیکھیں، اور ایک سال کے بعد تنخواہ شروع ہو گی۔</span>
          </p>
          <p className="phero__lead rv" style={{ '--i': '1' }}>
            We are building a hardworking core team in Okara and across Pakistan: a Graphic Designer, a Digital
            Network &amp; Marketing specialist and an AI Application Engineer. Learn on real projects for one year at
            no cost. After the year, salary starts.
          </p>
          <p className="actions rv" style={{ '--i': '2' }}>
            <a className="btn" href="#apply">Apply now</a>
            <a className="btn btn--line" href="#tracks">See the roles</a>
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
            <div><dt>Open roles</dt><dd>3 to choose from</dd></div>
            <div><dt>After year 1</dt><dd>Salary starts</dd></div>
          </dl>
        </div>
      </section>

      <section className="section section--tint" id="tracks" aria-labelledby="tracks-t">
        <div className="container">
          <div className="sec-head rv">
            <span className="eyebrow">Open roles</span>
            <h2 id="tracks-t">Roles we are hiring for</h2>
            <p>Pick the role closest to your skills and goals. Not sure yet? Choose that option in the form and we will help you decide.</p>
          </div>
          <div className="grid grid--3 roles">
            {TRACKS.map((t, i) => (
              <article className={`card fut-track rv${t.featured ? ' fut-track--feat' : ''}`} style={{ '--i': String(i % 3) }} key={t.name}>
                {t.featured && <span className="soon soon--card">Learns every technology</span>}
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
                <h2 id="benefits-t">Learn practically, on real client work</h2>
                <p>Year one is learning-first. You work on tasks that matter to our projects and get mentor feedback on every step, so your skills grow quickly.</p>
              </div>
              <ul className="checks checks--light">
                <li className="rv"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Tasks from real NayaDaur Digital projects</span></li>
                <li className="rv" style={{ '--i': '1' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Mentor feedback and code or design reviews</span></li>
                <li className="rv" style={{ '--i': '2' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Portfolio pieces you can show to future employers</span></li>
                <li className="rv" style={{ '--i': '3' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>A certificate of completion, then a salaried role with the team after year one</span></li>
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
                <li className="rv" style={{ '--i': '1' }}><b>Months 4 to 9: Real projects</b><span>Take on project tasks with mentor review. Engineers build app features end to end.</span></li>
                <li className="rv" style={{ '--i': '2' }}><b>Months 10 to 12: Portfolio</b><span>Finish your best work, present it, and agree your role for year two.</span></li>
                <li className="rv" style={{ '--i': '3' }}><b>After year 1: Salary starts</b><span>Team members who complete the year and continue with us move to a salaried role. Amount and terms are shared in writing first.</span></li>
              </ol>
              <p className="note">The outline may be adjusted for each team member's role and pace.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint" id="who" aria-labelledby="who-t">
        <div className="container container--narrow">
          <div className="sec-head rv">
            <span className="eyebrow">Who can apply</span>
            <h2 id="who-t">The team we are looking for</h2>
            <p>Students, fresh graduates and self-taught learners are all welcome. What we value most is character and effort.</p>
          </div>
          <ul className="checks">
            {QUALITIES.map(([t, d], i) => (
              <li className="rv" style={{ '--i': String(i) }} key={t}>
                <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                <span><b>{t}.</b> {d}</span>
              </li>
            ))}
            <li className="rv" style={{ '--i': '4' }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span><b>Basic setup.</b> A laptop or phone and a reliable internet connection.</span></li>
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
              <h2 id="apply-t">Apply to join the team</h2>
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
