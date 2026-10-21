import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import PostWebsiteOrSocial from './pages/PostWebsiteOrSocial.jsx'
import PostGoogleMaps from './pages/PostGoogleMaps.jsx'
import PostHiringDeveloper from './pages/PostHiringDeveloper.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Pricing from './pages/Pricing.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Services from './pages/Services.jsx'
import ServicesBusinessSoftware from './pages/ServicesBusinessSoftware.jsx'
import ServicesGoogleAds from './pages/ServicesGoogleAds.jsx'
import ServicesGoogleBusinessProfile from './pages/ServicesGoogleBusinessProfile.jsx'
import ServicesGraphicDesign from './pages/ServicesGraphicDesign.jsx'
import ServicesLogoDesignBranding from './pages/ServicesLogoDesignBranding.jsx'
import ServicesSocialMediaMarketing from './pages/ServicesSocialMediaMarketing.jsx'
import ServicesWebsiteDevelopment from './pages/ServicesWebsiteDevelopment.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

export const routes = [
  { path: "/", Page: Home },
  { path: "/about/", Page: About },
  { path: "/blog/", Page: Blog },
  { path: "/blog/does-small-business-need-website-or-just-social-media/", Page: PostWebsiteOrSocial },
  { path: "/blog/how-to-get-your-business-on-google-maps-in-pakistan/", Page: PostGoogleMaps },
  { path: "/blog/what-to-prepare-before-hiring-website-developer-pakistan/", Page: PostHiringDeveloper },
  { path: "/contact/", Page: Contact },
  { path: "/portfolio/", Page: Portfolio },
  { path: "/pricing/", Page: Pricing },
  { path: "/privacy-policy/", Page: PrivacyPolicy },
  { path: "/services/", Page: Services },
  { path: "/services/business-software/", Page: ServicesBusinessSoftware },
  { path: "/services/google-ads/", Page: ServicesGoogleAds },
  { path: "/services/google-business-profile/", Page: ServicesGoogleBusinessProfile },
  { path: "/services/graphic-design/", Page: ServicesGraphicDesign },
  { path: "/services/logo-design-branding/", Page: ServicesLogoDesignBranding },
  { path: "/services/social-media-marketing/", Page: ServicesSocialMediaMarketing },
  { path: "/services/website-development/", Page: ServicesWebsiteDevelopment },
  { path: "/terms/", Page: Terms },
]

export const NotFoundPage = NotFound
