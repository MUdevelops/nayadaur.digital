import { Link } from 'react-router-dom'
import Counter from '../components/Counter.jsx'
import FallingWords from '../components/FallingWords.jsx'
import FutureTeaser from '../components/FutureTeaser.jsx'
import { waLink } from '../site.js'

const OFFER_WA = waLink('Assalam o Alaikum NayaDaur Digital! Mujhe Startup Offer (free Hostinger hosting ke saath website development) ke baare mein baat karni hai. Meherbani kar ke rabta karein.')

export default function Home() {
  return (
    <>
      <section className="hero2" aria-labelledby="hero-t">
        <div className="hero2__bg" aria-hidden="true"><FallingWords /></div>
        <div className="container hero2__grid">
          <div className="hero2__copy">
            <p className="hero2__badge rv"><span className="dot" />NayaDaur Digital · Okara, Pakistan</p>
            <h1 id="hero-t" className="rv" style={{ "--i": "1" }}>
              <span className="ur" lang="ur" dir="rtl">ڈیجیٹل سوچ، بہتر کاروبار</span>
              <span className="roman">Digital Soch, Behter Karobar</span>
            </h1>
            <p className="hero2__lead rv" style={{ "--i": "2" }}>Website development, logo design, Google Business Profile, Google Ads and business software for businesses in Okara and across Pakistan.</p>
            <p className="hero2__lead2 rv" style={{ "--i": "3" }}>Apna Karobar Online Laayein Taaky Zyada Customers ap tk pohanchein.</p>
            <p className="hero2__offer rv" style={{ "--i": "3" }}>
              <a href="#startup-offer"><b>Startup offer</b><span>Free secure Hostinger hosting with your new website</span></a>
            </p>
            <p className="actions rv" style={{ "--i": "4" }}>
              <a className="btn btn--lg" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20apne%20business%20ke%20liye%20madad%20chahiye." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Chat on WhatsApp</a>
              <a className="btn btn--line btn--lg" href="#services">Explore services</a>
            </p>
            <ul className="hero2__trust rv" style={{ "--i": "5" }}>
              <li><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>Written scope before work</li>
              <li><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>Direct WhatsApp chat</li>
              <li><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>Urdu, Roman Urdu, English</li>
            </ul>
          </div>
          <div className="hero2__visual rv" style={{ "--i": "2" }}>
            <div className="orb">
              <img src="/assets/images/hero-orbit-512.webp?v=4" srcSet="/assets/images/hero-orbit-512.webp?v=4 512w, /assets/images/hero-orbit.webp?v=4 1024w" sizes="(max-width:899px) 70vw,460px" width="1024" height="1024" alt="NayaDaur Digital: Urdu letter Noon surrounded by service icons" fetchPriority="high" decoding="async" />
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="stats rv">
            <li><Counter to={8} /><span>Digital services</span></li>
            <li><Counter to={5} /><span>Step clear process</span></li>
            <li><Counter to={3} /><span>Languages supported</span></li>
            <li><b>24/7</b><span>WhatsApp access</span></li>
          </ul>
        </div>
        <svg className="wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30C240 70 480 0 720 25s480 45 720 5V60H0z" fill="var(--cream)" /></svg>
      </section>
      <section className="section section--tint offer" id="startup-offer" aria-labelledby="offer-t">
        <div className="container">
          <div className="offer__box rv">
            <div className="offer__copy">
              <span className="soon soon--inline">Startup offer</span>
              <h2 id="offer-t">Startup Offer: Free Secure Hosting on Official Hostinger</h2>
              <p>Starting a business or a startup? Have your website developed by NayaDaur Digital and we set up your hosting free of cost on <a href="https://www.hostinger.com" target="_blank" rel="noopener">official Hostinger</a>. Your site goes live on trusted, secure hosting from day one.</p>
              <ul className="checks">
                <li><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Free hosting with every new website development project</span></li>
                <li><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Hosted on official Hostinger, not unknown servers</span></li>
                <li><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>HTTPS (SSL) security set up for you</span></li>
                <li><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Written quote that lists what is included</span></li>
              </ul>
              <p className="actions">
                <a className="btn" href={OFFER_WA} target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>Claim startup offer</a>
                <Link className="btn btn--line" to="/services/website-development/">See website development</Link>
              </p>
              <p className="note">Domain name and ad budgets are paid separately. The free hosting period and plan are written in your quote.</p>
            </div>
            <div className="offer__side">
              <figure className="offer__fig rv" style={{ "--i": "1" }}>
                <img src="/assets/images/startup-offer-640.webp?v=8" srcSet="/assets/images/startup-offer-640.webp?v=8 640w, /assets/images/startup-offer-1200.webp?v=8 1200w" sizes="(max-width:859px) 92vw,440px" width="1200" height="800" alt="Laptop showing a website beside a glowing cloud server with a security shield, padlock and a star gift tag" loading="lazy" decoding="async" />
              </figure>
              <dl className="offer__facts" aria-label="Startup offer at a glance">
                <div><img src="/assets/images/offer-icon-hosting-free.webp?v=8" width="40" height="40" alt="" loading="lazy" decoding="async" /><dt>Hosting</dt><dd>Free</dd></div>
                <div><img src="/assets/images/offer-icon-security.webp?v=8" width="40" height="40" alt="" loading="lazy" decoding="async" /><dt>Security</dt><dd>HTTPS (SSL)</dd></div>
                <div><img src="/assets/images/offer-icon-website.webp?v=8" width="40" height="40" alt="" loading="lazy" decoding="async" /><dt>Applies to</dt><dd>New website projects</dd></div>
                <div><img src="/assets/images/offer-icon-launch.webp?v=8" width="40" height="40" alt="" loading="lazy" decoding="async" /><dt>Provider</dt><dd>Official Hostinger</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="about" aria-labelledby="about-t">
        <div className="container two two--center">
          <figure className="about__img rv">
            <img src="/assets/images/about-section-640.webp?v=4" srcSet="/assets/images/about-section-640.webp?v=4 640w, /assets/images/about-section-1200.webp?v=4 1200w" sizes="(max-width:859px) 92vw,520px" width="1200" height="805" alt="Illustration of a Pakistani high street with shops at sunrise" loading="lazy" decoding="async" />
          </figure>
          <div className="rv" style={{ "--i": "1" }}>
            <span className="eyebrow">Who we are</span>
            <h2 id="about-t">A local digital team that helps your shop, brand or startup grow online</h2>
            <p>NayaDaur Digital brings your logo, website, Google listing, ads and everyday business software together in one place, so you do not chase five different freelancers.</p>
            <ul className="checks">
              <li>
                <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                <span>Clear written scope and quote before we start</span>
              </li>
              <li>
                <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                <span>Bilingual design that works in Urdu and English</span>
              </li>
              <li>
                <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                <span>Honest advice with no promised rankings or sales</span>
              </li>
            </ul>
            <p className="actions">
              <Link className="btn" to="/about/">About us</Link>
              <Link className="btn btn--line" to="/contact/">Contact</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="services" aria-labelledby="services-t">
        <div className="container">
          <div className="sec-head sec-head--c rv">
            <span className="eyebrow">What we do</span>
            <h2 id="services-t">Digital services for Pakistani businesses</h2>
            <p>Eight focused services. Start with one and add more when you are ready.</p>
          </div>
          <div className="grid grid--3">
            <article className="card card--img rv" style={{ "--i": "0" }}>
              <div className="card__media">
                <img src="/assets/images/web-designing-service-640.webp?v=4" srcSet="/assets/images/web-designing-service-640.webp?v=4 640w, /assets/images/web-designing-service-1200.webp?v=4 1200w" sizes="(max-width:599px) 92vw,(max-width:959px) 46vw,360px" width="640" height="430" alt="Website design illustration: laptop and phone showing a business website" loading="lazy" decoding="async" />
              </div>
              <div className="card__body">
                <h3><Link to="/services/website-development/">Website Development</Link></h3>
                <p>Fast, mobile-friendly websites and stores that turn visitors into WhatsApp enquiries.</p>
                <span className="link-more" aria-hidden="true">Learn more</span>
              </div>
            </article>
            <article className="card card--img rv" style={{ "--i": "1" }}>
              <div className="card__media">
                <img src="/assets/images/logo-design-service-640.webp?v=4" srcSet="/assets/images/logo-design-service-640.webp?v=4 640w, /assets/images/logo-design-service-1200.webp?v=4 1200w" sizes="(max-width:599px) 92vw,(max-width:959px) 46vw,360px" width="640" height="430" alt="Logo design and branding desk with brand kit and colour swatches" loading="lazy" decoding="async" />
              </div>
              <div className="card__body">
                <h3><Link to="/services/logo-design-branding/">Logo Design &amp; Branding</Link></h3>
                <p>Logos, Urdu lettering and brand kits for a consistent look everywhere.</p>
                <span className="link-more" aria-hidden="true">Learn more</span>
              </div>
            </article>
            <article className="card card--img rv" style={{ "--i": "2" }}>
              <div className="card__media">
                <img src="/assets/images/google-business-profile-service-640.webp?v=4" srcSet="/assets/images/google-business-profile-service-640.webp?v=4 640w, /assets/images/google-business-profile-service-1200.webp?v=4 1200w" sizes="(max-width:599px) 92vw,(max-width:959px) 46vw,360px" width="640" height="430" alt="Google Maps pin over a shop with star reviews and QR code" loading="lazy" decoding="async" />
              </div>
              <div className="card__body">
                <h3><Link to="/services/google-business-profile/">Google Business Profile</Link></h3>
                <p>Show up on Google Maps with an accurate listing and genuine reviews.</p>
                <span className="link-more" aria-hidden="true">Learn more</span>
              </div>
            </article>
            <article className="card card--img rv" style={{ "--i": "3" }}>
              <div className="card__media">
                <img src="/assets/images/ads-compaign-management-service-640.webp?v=4" srcSet="/assets/images/ads-compaign-management-service-640.webp?v=4 640w, /assets/images/ads-compaign-management-service-1200.webp?v=4 1200w" sizes="(max-width:599px) 92vw,(max-width:959px) 46vw,360px" width="640" height="430" alt="Google Ads search bar with growth chart illustration" loading="lazy" decoding="async" />
              </div>
              <div className="card__body">
                <h3><Link to="/services/google-ads/">Google Ads</Link></h3>
                <p>Search and Maps ads aimed at people already looking for you.</p>
                <span className="link-more" aria-hidden="true">Learn more</span>
              </div>
            </article>
            <article className="card card--img rv" style={{ "--i": "4" }}>
              <div className="card__media">
                <img src="/assets/images/social-media-service-640.webp?v=4" srcSet="/assets/images/social-media-service-640.webp?v=4 640w, /assets/images/social-media-service-1200.webp?v=4 1200w" sizes="(max-width:599px) 92vw,(max-width:959px) 46vw,360px" width="640" height="430" alt="Social media profiles and megaphone illustration" loading="lazy" decoding="async" />
              </div>
              <div className="card__body">
                <h3><Link to="/services/social-media-marketing/">Social Media Marketing</Link></h3>
                <p>Tidy profiles, WhatsApp Business setup and managed Facebook and Instagram ads.</p>
                <span className="link-more" aria-hidden="true">Learn more</span>
              </div>
            </article>
            <article className="card card--img rv" style={{ "--i": "5" }}>
              <div className="card__media">
                <img src="/assets/images/business-software-setup-640.webp?v=4" srcSet="/assets/images/business-software-setup-640.webp?v=4 640w, /assets/images/business-software-setup-1200.webp?v=4 1200w" sizes="(max-width:599px) 92vw,(max-width:959px) 46vw,360px" width="640" height="430" alt="Invoice software on a desktop with ledger book and receipt printer" loading="lazy" decoding="async" />
              </div>
              <div className="card__body">
                <h3><Link to="/services/business-software/">Business Software</Link></h3>
                <p>Invoice and udhaar software for local shops, in Urdu and English.</p>
                <span className="link-more" aria-hidden="true">Learn more</span>
              </div>
            </article>
            <article className="card card--img rv" style={{ "--i": "6" }}>
              <div className="card__media">
                <img src="/assets/images/legal-services-hub-640.webp?v=6" srcSet="/assets/images/legal-services-hub-640.webp?v=6 640w, /assets/images/legal-services-hub-1200.webp?v=6 1200w" sizes="(max-width:599px) 92vw,(max-width:959px) 46vw,360px" width="640" height="430" alt="Scales of justice in front of a protective shield with a sealed certificate" loading="lazy" decoding="async" />
              </div>
              <div className="card__body">
                <h3><Link to="/services/legal-services/">Legal Services</Link></h3>
                <p>Trademark, copyright and brand protection, provided by Shine Legal Associates.</p>
                <span className="link-more" aria-hidden="true">Learn more</span>
              </div>
            </article>
            <article className="card card--cta rv" style={{ "--i": "7" }}>
              <h3><Link to="/contact/?service=Free%20Digital%20Audit">Not sure where to start?</Link></h3>
              <p>Ask for a free digital audit of your online presence. We reply with clear next steps.</p>
              <span className="link-more" aria-hidden="true">Get free audit</span>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--dark section--pattern on-dark" id="legal" aria-labelledby="legal-t">
        <div className="container">
          <div className="two two--center">
            <div>
              <div className="sec-head rv">
                <span className="eyebrow eyebrow--l">New: Legal Services</span>
                <h2 id="legal-t">Your brand, designed and legally protected</h2>
                <p>Trademark registration, copyright protection and action against copycats, provided by Shine Legal Associates.</p>
              </div>
              <ul className="checks checks--light">
                <li className="rv"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Register your name and logo as a trademark</span></li>
                <li className="rv" style={{ "--i": "1" }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Protect your designs, content and software</span></li>
                <li className="rv" style={{ "--i": "2" }}><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg><span>Remove copycat profiles and imitation listings</span></li>
              </ul>
              <p className="actions">
                <Link className="btn btn--lime" to="/services/legal-services/">Explore legal services</Link>
              </p>
            </div>
            <figure className="legal-fig rv">
              <img src="/assets/images/legal-shield-640.webp?v=6" srcSet="/assets/images/legal-shield-640.webp?v=6 640w, /assets/images/legal-shield-1100.webp?v=6 1100w" sizes="(max-width:859px) 80vw,420px" width="1100" height="1100" alt="A protective shield guarding a profile card, a shop and a sign from broken copies" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>
      <section className="section" id="why" aria-labelledby="why-t">
        <div className="container">
          <div className="sec-head sec-head--c rv"><span className="eyebrow">Why choose us</span><h2 id="why-t">Why NayaDaur Digital</h2></div>
          <div className="grid grid--4 why">
            <div className="card rv" style={{ "--i": "0" }}>
              <div className="card__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" /></svg>
              </div>
              <h3>Urdu and bilingual</h3>
              <p>Logos and layouts that work in Urdu and English.</p>
            </div>
            <div className="card rv" style={{ "--i": "1" }}>
              <div className="card__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></div>
              <h3>Clear written scope</h3>
              <p>You know what is included and what is not.</p>
            </div>
            <div className="card rv" style={{ "--i": "2" }}>
              <div className="card__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l9 5v10l-9 5-9-5V7z" /></svg></div>
              <h3>One team</h3>
              <p>Brand, website, ads and software in one place.</p>
            </div>
            <div className="card rv" style={{ "--i": "3" }}>
              <div className="card__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8M15 7h6v6" /></svg></div>
              <h3>Honest about results</h3>
              <p>No promised rankings, followers or sales.</p>
            </div>
          </div>
        </div>
      </section>
      <FutureTeaser id="future" className="section--tint" />
      <section className="section" id="portfolio" aria-labelledby="portfolio-t">
        <div className="container">
          <div className="sec-head rv">
            <h2 id="portfolio-t">Concept samples</h2>
            <p>Made to show our style, not real client projects. Real work will be added with permission.</p>
          </div>
          <div className="pf-grid">
            <figure className="pf rv" style={{ "--i": "0" }}>
              <Link className="pb" to="/portfolio/" aria-label="View portfolio: Brand identity">
                <img src="/assets/images/sample-1-700.webp?v=4" srcSet="/assets/images/sample-1-700.webp?v=4 700w, /assets/images/sample-1.webp?v=4 1400w" sizes="(max-width:559px) 92vw,(max-width:959px) 46vw,260px" width="1400" height="939" alt="Concept brand identity for a fictional botanicals brand, Baagh Botanicals, with color palette" loading="lazy" decoding="async" />
                <span className="pill">Concept sample</span>
              </Link>
              <figcaption>Brand identity</figcaption>
            </figure>
            <figure className="pf rv" style={{ "--i": "1" }}>
              <Link className="pb" to="/portfolio/" aria-label="View portfolio: Brand kit">
                <img src="/assets/images/sample-5-700.webp?v=4" srcSet="/assets/images/sample-5-700.webp?v=4 700w, /assets/images/sample-5.webp?v=4 1400w" sizes="(max-width:559px) 92vw,(max-width:959px) 46vw,260px" width="1400" height="939" alt="Concept brand kit for a fictional cafe called Chai Ghar" loading="lazy" decoding="async" />
                <span className="pill">Concept sample</span>
              </Link>
              <figcaption>Brand kit</figcaption>
            </figure>
            <figure className="pf rv" style={{ "--i": "2" }}>
              <Link className="pb" to="/portfolio/" aria-label="View portfolio: Bilingual logo">
                <img src="/assets/images/sample-7-700.webp?v=4" srcSet="/assets/images/sample-7-700.webp?v=4 700w, /assets/images/sample-7.webp?v=4 1400w" sizes="(max-width:559px) 92vw,(max-width:959px) 46vw,260px" width="1400" height="939" alt="Concept bilingual Urdu and English logo for a fictional bakery" loading="lazy" decoding="async" />
                <span className="pill">Concept sample</span>
              </Link>
              <figcaption>Bilingual logo</figcaption>
            </figure>
            <figure className="pf rv" style={{ "--i": "3" }}>
              <Link className="pb" to="/portfolio/" aria-label="View portfolio: Udhaar Manager dashboard">
                <img src="/assets/images/udhaar-ledger-system-640.webp?v=4" srcSet="/assets/images/udhaar-ledger-system-640.webp?v=4 640w, /assets/images/udhaar-ledger-system.webp?v=4 1200w" sizes="(max-width:559px) 92vw,(max-width:959px) 46vw,260px" width="1200" height="805" alt="Concept mockup of the Udhaar Manager dashboard showing customers, balances and payments" loading="lazy" decoding="async" />
                <span className="pill">Concept sample</span>
              </Link>
              <figcaption>Udhaar Manager dashboard</figcaption>
            </figure>
          </div>
          <p className="actions rv"><Link className="btn btn--line" to="/portfolio/">View all samples</Link></p>
        </div>
      </section>
      <section className="section section--dark on-dark" id="process" aria-labelledby="process-t">
        <div className="container">
          <div className="sec-head sec-head--c rv">
            <span className="eyebrow eyebrow--l">Our process</span>
            <h2 id="process-t">How a project works</h2>
          </div>
          <ol className="steps">
            <li className="rv" style={{ "--i": "0" }}><b>Discover</b><span>Learn your business and goals.</span></li>
            <li className="rv" style={{ "--i": "1" }}><b>Plan</b><span>Agree scope and timeline in writing.</span></li>
            <li className="rv" style={{ "--i": "2" }}><b>Design</b><span>Review the look and request changes.</span></li>
            <li className="rv" style={{ "--i": "3" }}><b>Build</b><span>Build and test on real devices.</span></li>
            <li className="rv" style={{ "--i": "4" }}><b>Launch</b><span>Go live with a short handover.</span></li>
          </ol>
        </div>
      </section>
      <section className="section pricing-packages" id="packages" aria-labelledby="packages-t">
        <div className="container">
          <div className="sec-head sec-head--c rv">
            <span className="eyebrow">Packages</span>
            <h2 id="packages-t">Packages that fit your stage</h2>
            <p>Starting prices are shown below. Every project still gets a written quote that lists what is and is not included.</p>
          </div>
          <div className="grid grid--4">
            <article className="pkg rv" style={{ "--i": "0" }}>
              <h3>Shuruaat (Starter)</h3>
              <ul>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Google Business Profile</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>WhatsApp Business setup</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>QR review system</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>3 Canva designs</span>
                </li>
              </ul>
              <p className="price ur" lang="ur" dir="rtl">1500 روپے</p>
              <a className="btn btn--line btn--sm" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital%21%20Mujhe%20Shuruaat%20%28Starter%29%20package%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener">Ask about this package</a>
            </article>
            <article className="pkg rv" style={{ "--i": "1" }}>
              <h3>Pehchan (Identity)</h3>
              <ul>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Logo and brand kit</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Urdu/bilingual logo option</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Menu/banner set</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Social media templates</span>
                </li>
              </ul>
              <p className="price ur" lang="ur" dir="rtl">2000 روپے</p>
              <a className="btn btn--line btn--sm" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital%21%20Mujhe%20Pehchan%20%28Identity%29%20package%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener">Ask about this package</a>
            </article>
            <article className="pkg pkg--pop rv" style={{ "--i": "2" }}>
              <span className="badge">Most requested</span>
              <h3>Taraqqi (Growth)</h3>
              <ul>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Landing page</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Social media setup</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Facebook/Instagram ads management</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Local search basics</span>
                </li>
              </ul>
              <p className="price ur" lang="ur" dir="rtl">5000 روپے</p>
              <a className="btn btn--line btn--sm" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital%21%20Mujhe%20Taraqqi%20%28Growth%29%20package%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener">Ask about this package</a>
            </article>
            <article className="pkg rv" style={{ "--i": "3" }}>
              <h3>Kamyabi (Complete)</h3>
              <ul>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Website or online store</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Catalog design</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Google and Meta ads</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Invoice or udhaar system</span>
                </li>
                <li>
                  <svg className="ic" aria-hidden="true" focusable="false"><use href="#i-check" /></svg>
                  <span>Monthly support</span>
                </li>
              </ul>
              <p className="price ur" lang="ur" dir="rtl">10000 روپے</p>
              <a className="btn btn--line btn--sm" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital%21%20Mujhe%20Kamyabi%20%28Complete%29%20package%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener">Ask about this package</a>
            </article>
          </div>
          <p className="note rv">Ad budgets and domain fees are paid separately. <Link to="/pricing/">See how pricing works</Link>.</p>
        </div>
      </section>
      <section className="section section--tint" id="faq" aria-labelledby="faq-t">
        <div className="container container--narrow">
          <div className="sec-head rv"><h2 id="faq-t">Questions</h2></div>
          <div className="faq">
            <details>
              <summary>Which businesses do you work with?</summary>
              <p>Small businesses, shops, startups, professionals and creators in Okara and across Pakistan.</p>
            </details>
            <details>
              <summary>Can you work with me if I am not in Okara?</summary>
              <p>Yes. We work remotely over WhatsApp, phone calls and email.</p>
            </details>
            <details>
              <summary>How do payments work?</summary>
              <p>Usually an advance first and the balance on delivery. Amounts are written in your quote.</p>
            </details>
            <details>
              <summary>Who pays for ad budgets and domains?</summary>
              <p>You do. Ad budgets go to Google or Meta and domains to the registrar. Our fee is separate.</p>
            </details>
            <details>
              <summary>How long does a project take?</summary>
              <p>Usually a few days for a logo and one to a few weeks for a website.</p>
            </details>
            <details>
              <summary>What is a free digital audit?</summary>
              <p>A review of your Google, social, WhatsApp and website presence, with clear next steps.</p>
            </details>
            <details>
              <summary>What is the startup offer?</summary>
              <p>If you have a new website developed by us, we set up your hosting free of cost on official Hostinger, with HTTPS security. The hosting period and plan are written in your quote.</p>
            </details>
            <details>
              <summary>Can I join NayaDaur Digital as an intern?</summary>
              <p>Yes. We run a free 1-year internship for a Graphic Designer, a Digital Network and Marketing specialist and an AI Application Engineer. Salary starts after the year. See Join Our Team.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="section offer offer--join" id="join" aria-labelledby="join-t">
        <div className="container">
          <div className="offer__box rv">
            <div className="offer__copy">
              <span className="soon soon--inline">Applications open</span>
              <h2 id="join-t">Join our team: free 1-year internship, then salary</h2>
              <p>We are looking for a hardworking Graphic Designer, a Digital Network &amp; Marketing specialist and an AI Application Engineer who loves learning by doing. Year one is free learning on real projects. After the year, salary starts.</p>
              <p className="actions">
                <Link className="btn" to="/join-our-team/">See open roles and apply</Link>
              </p>
            </div>
            <ul className="offer__roles" aria-label="Open roles">
              <li>Graphic Designer</li>
              <li>Digital Network &amp; Marketing</li>
              <li>AI Application Engineer</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cta-band on-dark" aria-labelledby="cta-t">
        <div className="container">
          <div className="cta-band__box rv">
            <div>
              <h2 id="cta-t">Ready to talk about your project?</h2>
              <p>Message us on WhatsApp. We reply with clear next steps, not a hard sell.</p>
            </div>
            <p className="actions">
              <a className="btn btn--lime" href="https://wa.me/923219211464?text=Assalam%20o%20Alaikum%20NayaDaur%20Digital!%20Mujhe%20apne%20project%20ke%20baare%20mein%20baat%20karni%20hai.%20Meherbani%20kar%20ke%20rabta%20karein." target="_blank" rel="noopener"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>WhatsApp us</a>
              <a className="btn btn--ghost" href="tel:+923219211464"><svg className="ic" aria-hidden="true" focusable="false"><use href="#i-phone" /></svg>Call 0321 9211464</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
