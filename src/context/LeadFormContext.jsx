import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { SERVICE_OPTIONS } from '../data/services.js'
import { buildMessage, buildTemplateMessage } from '../lib/message.js'

/**
 * Shared state for the enquiry form so any "Ask on WhatsApp" / "Get a Quote"
 * button elsewhere on the page can pre-select a service (same behaviour as the
 * original `pick()` function).
 */
const LeadFormContext = createContext(null)

const INITIAL_FIELDS = {
  name: '',
  business: '',
  service: SERVICE_OPTIONS[0],
  budget: '',
  city: '',
  details: '',
  language: 'ru',
}

export function LeadFormProvider({ children }) {
  const [fields, setFields] = useState(INITIAL_FIELDS)
  // Once the visitor edits the preview by hand, stop auto-rebuilding it.
  const [edited, setEdited] = useState(false)
  const [customMessage, setCustomMessage] = useState('')

  const message = edited ? customMessage : buildMessage(fields)

  const setField = useCallback((key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }))
  }, [])

  const setMessage = useCallback((value) => {
    setCustomMessage(value)
    setEdited(true)
  }, [])

  const resetMessage = useCallback(() => setEdited(false), [])

  const applyTemplate = useCallback((text) => {
    setCustomMessage(buildTemplateMessage(text))
    setEdited(true)
  }, [])

  /** Pre-select a service (or fall back to "Custom package" + details). */
  const pickService = useCallback((label) => {
    setFields((prev) =>
      SERVICE_OPTIONS.includes(label)
        ? { ...prev, service: label }
        : { ...prev, service: 'Custom package', details: label },
    )
    setEdited(false)
  }, [])

  const value = useMemo(
    () => ({ fields, message, setField, setMessage, resetMessage, applyTemplate, pickService }),
    [fields, message, setField, setMessage, resetMessage, applyTemplate, pickService],
  )

  return <LeadFormContext.Provider value={value}>{children}</LeadFormContext.Provider>
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext)
  if (!ctx) throw new Error('useLeadForm must be used inside <LeadFormProvider>')
  return ctx
}
