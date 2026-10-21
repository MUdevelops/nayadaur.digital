import Sprite from './Sprite.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ToTop from './ToTop.jsx'
import WhatsAppFloat from './WhatsAppFloat.jsx'
import useSiteEffects from '../hooks/useSiteEffects.js'

export default function Layout({ children }) {
  useSiteEffects()
  return (
    <>
      <Sprite />
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer />
      <ToTop />
      <WhatsAppFloat />
    </>
  )
}
