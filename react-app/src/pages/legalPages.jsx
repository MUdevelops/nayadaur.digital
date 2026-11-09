import LegalService from './LegalService.jsx'

// One small component per route, so routes.js stays a plain { path, Page } list.
export const LegalIpo = () => <LegalService slug="ipo-services" />
export const LegalTrademark = () => <LegalService slug="trademark-registration" />
export const LegalCopyright = () => <LegalService slug="copyright-legal-protection" />
export const LegalIpConsultancy = () => <LegalService slug="ip-rights-consultancy" />
export const LegalBrandProtection = () => <LegalService slug="brand-protection-enforcement" />
export const LegalBusiness = () => <LegalService slug="business-legal-consultancy" />
export const LegalLitigation = () => <LegalService slug="litigation-dispute-resolution" />
