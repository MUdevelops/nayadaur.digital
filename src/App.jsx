import { LeadFormProvider } from './context/LeadFormContext.jsx'
import { TESTIMONIALS } from './data/content.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Packages from './components/Packages.jsx'
import Product from './components/Product.jsx'
import Process from './components/Process.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'

export default function App() {
  return (
    <LeadFormProvider>
      <a className="skip-link" href="#top">
        Skip to main content
      </a>
      <Header />
      <main id="top" tabIndex={-1}>
        <Hero />
        <Services />
        <WhyUs />
        <Packages />
        <Product />
        <Process />
        <Portfolio />
        {TESTIMONIALS.length > 0 && <Testimonials />}
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </LeadFormProvider>
  )
}
