/** Pure functions that build the WhatsApp enquiry text (same wording as the original site). */

export function buildMessage(f) {
  const n = f.name.trim() || '[Name]'
  const b = f.business.trim() || '[Business]'
  const c = f.city.trim() || '[City]'
  const s = f.service
  const d = f.details.trim()
  const x = f.budget ? ' Budget: ' + f.budget + '.' : ''

  if (f.language === 'en') {
    return `Hello NayaDaur Digital! My name is ${n}. My business is ${b} (${c}). I need: ${s}.${d ? ' ' + d + '.' : ''}${x} Please get in touch.`
  }
  if (f.language === 'ur') {
    return `السلام علیکم نیا دور ڈیجیٹل! میرا نام ${n} ہے۔ میرا کاروبار ${b} (${c}) ہے۔ مجھے ${s} چاہیے۔${d ? ' ' + d + '۔' : ''}${x} مہربانی کر کے رابطہ کریں۔`
  }
  return `Assalam o Alaikum NayaDaur Digital! Mera naam ${n} hai. Mera business ${b} hai (${c}). Mujhe ${s} chahiye.${d ? ' ' + d + '.' : ''}${x} Meherbani kar ke rabta karein.`
}

export function buildTemplateMessage(text) {
  return 'Assalam o Alaikum NayaDaur Digital! ' + text + '. Meherbani kar ke rabta karein.'
}
