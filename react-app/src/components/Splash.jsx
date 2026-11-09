import { useEffect } from 'react'

const V = '?v=6'
const I = '/assets/images/'

// Intro animation. Markup is always rendered (so server and client match) but stays
// display:none unless the inline script in index.html adds `splash-on` to <html>
// (first visit of the session, home page, motion allowed).
export default function Splash() {
  useEffect(() => {
    const root = document.documentElement
    const el = document.getElementById('splash')
    if (!el || !root.classList.contains('splash-on')) return undefined
    let done = false
    let hide = 0
    const finish = () => {
      if (done) return
      done = true
      el.classList.add('is-leaving')
      hide = window.setTimeout(() => root.classList.remove('splash-on'), 650)
    }
    const timer = window.setTimeout(finish, 3300)
    const onKey = (e) => e.key === 'Escape' && finish()
    el.addEventListener('click', finish)
    document.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(hide)
      el.removeEventListener('click', finish)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div id="splash" className="splash" role="presentation">
      <span className="splash__aura" aria-hidden="true" />
      <span className="splash__grain" aria-hidden="true" />
      <div className="splash__stage">
        <span className="splash__pulse splash__pulse--a" aria-hidden="true" />
        <span className="splash__pulse splash__pulse--b" aria-hidden="true" />
        <img
          className="splash__orbit"
          src={`${I}splash-orbit-cut-480.webp${V}`}
          srcSet={`${I}splash-orbit-cut-480.webp${V} 480w, ${I}splash-orbit-cut-800.webp${V} 800w`}
          sizes="(max-width:700px) 92vw, 560px"
          width="800"
          height="800"
          alt=""
          decoding="async"
        />
        <span className="splash__core" aria-hidden="true" />
        <img
          className="splash__logo"
          src={`${I}logo-mark-256.webp${V}`}
          srcSet={`${I}logo-mark-256.webp${V} 256w, ${I}logo-mark-512.webp${V} 512w`}
          sizes="(max-width:700px) 34vw, 190px"
          width="512"
          height="512"
          alt="NayaDaur Digital"
        />
      </div>
      <div className="splash__text">
        <p className="splash__name">NayaDaur Digital</p>
        <p className="splash__tag ur" lang="ur">ڈیجیٹل سوچ، بہتر کاروبار</p>
      </div>
      <span className="splash__bar" aria-hidden="true"><i /></span>
      <button type="button" className="splash__skip">
        Skip intro
      </button>
    </div>
  )
}
