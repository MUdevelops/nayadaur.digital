import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li aria-current="page">Terms of Use</li></ol></nav>
          <h1>Terms of Use</h1>
          <p className="phero__lead">Last updated: 20 October 2026</p>
        </div>
      </section>
      <section className="section" id="legal" aria-labelledby="legal-t">
        <div className="container container--narrow">
          <div className="prose legal">
            <h2 className="vh" id="legal-t">Terms of Use</h2>
            <p>By using nayadaur.digital you agree to these terms.</p>
            <h2>Website content</h2>
            <p>The content on this website is provided for general information. Portfolio items marked as concept samples are illustrations made to show our style, and are not real client projects. Content and design on this website belong to NayaDaur Digital unless stated otherwise. Please do not copy it without permission.</p>
            <h2>Quotes and projects</h2>
            <p>Services are provided under a written quote that states the scope, price, timeline, number of revisions and what is not included. Work outside the agreed scope may be quoted separately.</p>
            <h2>Payments</h2>
            <p>Payment is usually an advance first and the balance on delivery. Exact amounts and method are confirmed in your quote.</p>
            <h2>Third-party costs</h2>
            <p>Ad budgets, domain registration, printing and fees charged by third parties are separate from our fees, unless the quote says otherwise.</p>
            <h2>Results</h2>
            <p>We do not guarantee search rankings, follower counts, reach, leads or sales. Third-party platforms such as Google and Meta set their own policies and may approve, reject or change how their services work.</p>
            <h2>Your materials</h2>
            <p>You confirm that text, photos and logos you give us are yours to use, or that you have permission to use them.</p>
            <h2>Limitation of liability</h2>
            <p>To the extent permitted by law, we are not liable for indirect or consequential losses arising from use of this website or from third-party platforms.</p>
            <h2>Governing law and contact</h2>
            <p>These terms are governed by the laws of Pakistan. Questions: <a href="mailto:info@nayadaur.digital">info@nayadaur.digital</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
