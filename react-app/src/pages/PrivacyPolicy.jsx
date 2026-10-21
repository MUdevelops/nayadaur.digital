import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">Privacy Policy</li></ol></nav>
          <h1>Privacy Policy</h1>
          <p className="phero__lead">Last updated: 20 October 2026</p>
        </div>
      </section>
      <section className="section" id="legal" aria-labelledby="legal-t">
        <div className="container container--narrow">
          <div className="prose legal">
            <h2 className="vh" id="legal-t">Privacy Policy</h2>
            <p>This policy explains how NayaDaur Digital ("we", "us") handles information on nayadaur.digital.</p>
            <h2>What this website collects</h2>
            <p>This website does not use accounts, does not store the details you type into forms on our servers and does not run analytics or advertising trackers. The enquiry form on the contact page builds a message in your browser. Nothing is sent to us until you choose to send it yourself by WhatsApp or email.</p>
            <h2>Information you send us</h2>
            <p>When you message us by WhatsApp, phone or email, we receive the details you choose to share, such as your name, phone number, business name and project details. We use them only to reply, prepare quotes and deliver the services you request.</p>
            <h2>Third-party services</h2>
            <ul>
              <li><strong>Google Fonts:</strong> this site loads fonts from Google, which may receive your IP address and browser information when fonts load.</li>
              <li><strong>WhatsApp and email providers:</strong> messages you send through them are handled under their own privacy policies.</li>
            </ul>
            <h2>Cookies</h2>
            <p>This website does not set cookies of its own.</p>
            <h2>Sharing and retention</h2>
            <p>We do not sell your information. We keep enquiry messages only as long as needed to handle your request and our business records.</p>
            <h2>Your choices</h2>
            <p>You can ask us to correct or delete the information you have sent us by contacting us at <a href="mailto:info@nayadaur.digital">info@nayadaur.digital</a>.</p>
            <h2>Changes</h2>
            <p>If we add analytics or other tools, we will update this policy and add a consent notice where required.</p>
          </div>
        </div>
      </section>
    </>
  )
}
