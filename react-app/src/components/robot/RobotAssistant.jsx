import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DEFAULT_WA_TEXT, prefersReducedMotion, waLink } from '../../site.js'
import * as audio from './audio.js'
import { BYE, CLOSING, FUNNY, HINT, INTRO, STEPS, UI } from './tour.js'
import './robot.css'

/* sprites: every frame shares one canvas, so swapping src never moves the robot */
const frame = (p) => `/assets/robot/robot-${p}.webp?v=2`
const CORE = ['sleep', 'idle', 'idle_blink_half', 'idle_blink', 'idle_talk', 'greet']
const MORE = ['wave2', 'wink', 'happy', 'celebrate', 'point', 'tablet', 'present', 'think', 'whatsapp',
  'salaam', 'thumbs_up', 'call', 'email', 'idea', 'surprised', 'laugh', 'thanks', 'working', 'shield', 'price', 'confused', 'sorry', 'listen', 'blink_half', 'blink_closed']
const warmed = new Set()
const preload = (list) =>
  list.forEach((p) => {
    if (warmed.has(p)) return
    warmed.add(p)
    const img = new Image()
    img.decoding = 'async'
    img.src = frame(p)
  })

const ls = {
  get: (k) => {
    try {
      return window.localStorage.getItem(k)
    } catch {
      return null
    }
  },
  set: (k, v) => {
    try {
      window.localStorage.setItem(k, v)
    } catch { /* storage can be blocked */ }
  },
}
const K_MUTE = 'nd-rb-muted'
const K_WOKE = 'nd-rb-woke'
const K_HINT = 'nd-rb-hint'
const norm = (p) => (p.endsWith('/') ? p : p + '/')
const IDLE_MS = 120000
const QUIP_MS = 4500 // how long a funny line (and its look) stays
const QUIP_FADE_MS = 260 // line fades out while the look blends back to normal

export default function RobotAssistant() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [shown, setShown] = useState(false)
  const [hint, setHint] = useState(false)
  const [mode, setModeState] = useState('sleep') // sleep | waking | intro | tour | bye
  const [pose, setPose] = useState('sleep')
  const [step, setStep] = useState(-1)
  const [title, setTitle] = useState('')
  const [full, setFull] = useState('')
  const [typed, setTyped] = useState('')
  const [quip, setQuip] = useState('')
  const [quipOut, setQuipOut] = useState(false)
  const [say, setSay] = useState('')
  const [drifted, setDrifted] = useState(false)
  const [muted, setMuted] = useState(false)
  const rootRef = useRef(null)
  const btnRef = useRef(null)
  const leanRef = useRef(null)
  const R = useRef({
    timers: new Set(), type: 0, nav: 0, base: 'sleep', talking: false, mode: 'sleep', path: pathname,
    kb: false, spot: null, prog: 0, quipAt: 0, quipLast: -1, quipT: 0, quipOutT: 0, poseT: 0, tap: 0, fx: '',
  })
  R.current.path = pathname

  const setMode = useCallback((m) => {
    R.current.mode = m
    setModeState(m)
  }, [])
  const later = useCallback((fn, ms) => {
    const id = setTimeout(() => {
      R.current.timers.delete(id)
      fn()
    }, ms)
    R.current.timers.add(id)
    return id
  }, [])
  const clearTimers = useCallback(() => {
    R.current.timers.forEach(clearTimeout)
    R.current.timers.clear()
  }, [])
  const unspot = useCallback(() => {
    const el = R.current.spot
    if (el) el.classList.remove('rb-spot')
    R.current.spot = null
  }, [])
  const spot = useCallback((el) => {
    unspot()
    el.classList.add('rb-spot')
    R.current.spot = el
  }, [unspot])

  /* typed word by word, with the mouth swapping between idle and idle_talk */
  const speak = useCallback((text) => {
    const r = R.current
    const id = ++r.type
    setFull(text)
    if (prefersReducedMotion()) {
      r.talking = false
      setTyped(text)
      setPose(r.base)
      return
    }
    setTyped('')
    r.talking = true
    const words = text.split(' ')
    let i = 0
    let open = false
    const tick = () => {
      if (r.type !== id) return
      i += 1
      setTyped(words.slice(0, i).join(' '))
      open = !open
      setPose(open ? 'idle_talk' : 'idle')
      if (i < words.length) {
        const w = words[i - 1]
        later(tick, 60 + Math.min(w.length, 9) * 9 + (/[.,!?]$/.test(w) ? 180 : 0))
      } else {
        later(() => {
          if (r.type !== id) return
          r.talking = false
          setPose(r.base)
        }, 180)
      }
    }
    later(tick, 80)
  }, [later])

  const blinkOnce = useCallback(() => {
    const ok = () => R.current.base === 'idle' && !R.current.talking
    let t = 0
    ;[['idle_blink_half', 70], ['idle_blink', 90], ['idle_blink_half', 70], ['idle', 0]].forEach(([p, d]) => {
      later(() => ok() && setPose(p), t)
      t += d
    })
  }, [later])

  /* ------------------------------------------------------------- tour */
  const goStep = useCallback((i) => {
    const r = R.current
    const token = ++r.nav
    r.type += 1
    r.talking = false
    clearTimers()
    const n = STEPS.length
    const idx = Math.max(0, Math.min(i, n))
    const closing = idx >= n
    const s = closing ? CLOSING : STEPS[idx]
    setMode('tour')
    setStep(idx)
    setDrifted(false)
    setQuip('')
    setTitle(s.title)
    setFull(s.text)
    setTyped('')
    setSay(`${closing ? '' : UI.step(idx + 1, n) + '. '}${s.title}. ${s.text}`)
    r.base = s.pose
    setPose(s.pose)
    unspot()
    if (closing) {
      later(() => speak(s.text), 700)
      return
    }
    const route = norm(s.route)
    const needNav = norm(window.location.pathname) !== route
    if (needNav) navigate(s.route)
    let tries = 0
    const begin = (el) => {
      if (token !== r.nav) return
      const smooth = !prefersReducedMotion()
      if (el) {
        spot(el)
        r.prog = performance.now() + 1600
        try {
          if (s.selector === 'top') window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' })
          else el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' })
        } catch { /* scrolling is a nicety */ }
      }
      later(() => token === r.nav && speak(s.text), smooth ? 600 : 50)
    }
    const find = () => {
      if (token !== r.nav) return
      const el = norm(r.path) === route ? document.querySelector(s.selector) : null
      if (el) later(() => begin(document.querySelector(s.selector) || el), needNav ? 260 : 0)
      else if (++tries < 40) later(find, 100)
      else begin(null)
    }
    find()
  }, [clearTimers, later, navigate, setMode, speak, spot, unspot])

  /* ------------------------------------------------------- wake / sleep */
  const arrive = useCallback(() => {
    const r = R.current
    setMode('intro')
    setStep(-1)
    setTitle(INTRO.title)
    setFull(INTRO.text)
    setTyped('')
    setSay(INTRO.text)
    r.base = 'greet'
    setPose('greet')
    audio.startMusic()
    later(() => {
      r.base = 'idle'
      speak(INTRO.text)
    }, 1000)
  }, [later, setMode, speak])

  const wake = useCallback((byKeyboard) => {
    const r = R.current
    const ok = audio.unlock() // must run synchronously inside the user gesture
    const first = ls.get(K_WOKE) !== '1'
    const silent = !ok || audio.isMuted()
    if (!silent) ls.set(K_WOKE, '1')
    const short = !first || silent
    r.fx = short ? 'robot-wake-short' : 'robot-wake'
    r.kb = byKeyboard
    setHint(false)
    setStep(-1)
    setQuip('')
    setMode('waking')
    if (ok) {
      audio.playFx(r.fx)
      audio.preloadMusic()
    }
    preload(CORE)
    preload(MORE)
    r.base = 'idle_blink_half'
    setPose('idle_blink_half')
    later(() => {
      r.base = 'idle'
      setPose('idle')
    }, short ? 380 : 1250)
    if (!short) {
      later(blinkOnce, 2300)
      later(blinkOnce, 3700)
    }
    later(arrive, short ? 1300 : 4950) // the ta-da of the wake sound
  }, [arrive, blinkOnce, later, setMode])

  const bye = useCallback(() => {
    const r = R.current
    if (r.mode === 'sleep' || r.mode === 'bye') return
    r.nav += 1
    r.type += 1
    r.talking = false
    clearTimers()
    unspot()
    audio.stopFx('robot-wake')
    audio.stopFx('robot-wake-short')
    audio.playFx('robot-goodbye')
    audio.stopMusic()
    setMode('bye')
    setDrifted(false)
    setQuip('')
    setStep(-1)
    setTitle('')
    setFull(BYE)
    setTyped(BYE)
    setSay(BYE)
    r.base = 'salaam'
    setPose('salaam')
    if (rootRef.current && rootRef.current.contains(document.activeElement) && btnRef.current) btnRef.current.focus()
    later(() => {
      r.base = 'sleep'
      setPose('sleep')
      setMode('sleep')
      setTyped('')
      setFull('')
      setSay('')
    }, 3100)
  }, [clearTimers, later, setMode, unspot])

  /* ------------------------------------------------- awake taps and hover */
  const sayQuip = useCallback(() => {
    const r = R.current
    // shuffled bag: every funny line (and its look) is shown once before any repeats
    if (!r.bag || !r.bag.length) {
      const a = FUNNY.map((_, n) => n)
      for (let n = a.length - 1; n > 0; n--) {
        const m = Math.floor(Math.random() * (n + 1))
        ;[a[n], a[m]] = [a[m], a[n]]
      }
      if (a[a.length - 1] === r.quipLast && a.length > 1) a.unshift(a.pop())
      r.bag = a
    }
    const k = r.bag.pop()
    r.quipLast = k
    r.quipAt = Date.now()
    setQuip(FUNNY[k].text)
    setQuipOut(false)
    clearTimeout(r.quipT)
    clearTimeout(r.quipOutT)
    r.quipOutT = setTimeout(() => setQuipOut(true), QUIP_MS - QUIP_FADE_MS)
    r.quipT = setTimeout(() => {
      setQuip('')
      setQuipOut(false)
    }, QUIP_MS)
    return FUNNY[k]
  }, [])

  const onRobot = (e) => {
    const r = R.current
    if (r.mode === 'sleep') return wake(e.detail === 0)
    if (r.mode === 'waking') {
      clearTimers()
      audio.stopFx(r.fx)
      return arrive()
    }
    if (r.mode === 'bye') return undefined
    const q = sayQuip()
    setSay(q.text)
    if (!r.talking) {
      setPose(q.pose)
      if (r.poseT) {
        clearTimeout(r.poseT)
        r.timers.delete(r.poseT)
      }
      // the look leaves at the same moment the line starts to fade, so both are gone together
      r.poseT = later(() => setPose(r.base), QUIP_MS - QUIP_FADE_MS)
    }
    return undefined
  }
  const onHover = (e) => {
    const r = R.current
    if (e.pointerType !== 'mouse' || (r.mode !== 'intro' && r.mode !== 'tour') || r.talking) return
    if (Date.now() - r.quipAt > 7000) sayQuip()
  }
  const click = (fn) => () => {
    audio.playFx('robot-click')
    fn()
  }
  const toggleMute = () => {
    const m = !audio.isMuted()
    audio.setMuted(m)
    ls.set(K_MUTE, m ? '1' : '0')
    setMuted(m)
    if (!m) audio.playFx('robot-click')
  }

  /* --------------------------------------------------------------- effects */
  useEffect(() => {
    // appear after the splash
    let dead = false
    let t = 0
    let iv = 0
    const show = () => {
      if (dead) return
      setShown(true)
      document.body.classList.add('rb-on')
      const idle = window.requestIdleCallback || ((f) => setTimeout(f, 300))
      idle(() => {
        preload(CORE)
        audio.warm()
      })
      if (!ls.get(K_HINT)) {
        ls.set(K_HINT, '1')
        setHint(true)
        t = setTimeout(() => setHint(false), 8500)
      }
    }
    const root = document.documentElement
    if (!root.classList.contains('splash-on')) t = setTimeout(show, 500)
    else {
      let tries = 0
      iv = setInterval(() => {
        tries += 1
        if (!root.classList.contains('splash-on') || tries > 25) {
          clearInterval(iv)
          t = setTimeout(show, 500)
        }
      }, 300)
    }
    const m = ls.get(K_MUTE) === '1'
    audio.setMuted(m)
    setMuted(m)
    const vis = () => audio.setHidden(document.hidden)
    document.addEventListener('visibilitychange', vis)
    const key = (e) => {
      R.current.kb = true
      if (e.key === 'Escape') bye()
    }
    const ptr = () => {
      R.current.kb = false
    }
    window.addEventListener('keydown', key)
    window.addEventListener('pointerdown', ptr, true)
    const r = R.current
    return () => {
      dead = true
      clearTimeout(t)
      clearInterval(iv)
      clearTimeout(r.quipT)
      clearTimeout(r.quipOutT)
      clearTimers()
      unspot()
      audio.stopMusic(0.2)
      document.removeEventListener('visibilitychange', vis)
      window.removeEventListener('keydown', key)
      window.removeEventListener('pointerdown', ptr, true)
      document.body.classList.remove('rb-on', 'rb-open')
    }
  }, [bye, clearTimers, unspot])

  useEffect(() => {
    document.body.classList.toggle('rb-open', mode === 'intro' || mode === 'tour' || mode === 'bye')
  }, [mode])

  // blinking while idle
  useEffect(() => {
    if (mode !== 'intro' && mode !== 'tour') return undefined
    let t = 0
    const loop = () => {
      t = setTimeout(() => {
        if (R.current.base === 'idle' && !R.current.talking) blinkOnce()
        loop()
      }, 2600 + Math.random() * 3200)
    }
    loop()
    return () => clearTimeout(t)
  }, [mode, blinkOnce])

  // 2 minutes without activity: say goodbye
  useEffect(() => {
    if (mode !== 'intro' && mode !== 'tour') return undefined
    let t = 0
    let last = 0
    const arm = () => {
      clearTimeout(t)
      t = setTimeout(bye, IDLE_MS)
    }
    const poke = () => {
      const now = Date.now()
      if (now - last < 1000) return
      last = now
      arm()
    }
    arm()
    const ev = ['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart', 'wheel']
    ev.forEach((n) => window.addEventListener(n, poke, { passive: true }))
    return () => {
      clearTimeout(t)
      ev.forEach((n) => window.removeEventListener(n, poke))
    }
  }, [mode, bye])

  // the visitor scrolled far from the current section: stop steering, offer a way back
  useEffect(() => {
    if (mode !== 'tour') return undefined
    let raf = 0
    const on = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = R.current
        const el = r.spot
        if (performance.now() < r.prog || !el || !document.contains(el)) return
        const b = el.getBoundingClientRect()
        const vh = window.innerHeight
        setDrifted(b.bottom < -vh * 0.75 || b.top > vh * 1.75)
      })
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => {
      window.removeEventListener('scroll', on)
      cancelAnimationFrame(raf)
    }
  }, [mode])

  // robot leans toward the pointer (mouse only)
  useEffect(() => {
    if (mode !== 'intro' && mode !== 'tour') return undefined
    if (prefersReducedMotion() || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return undefined
    let raf = 0
    const move = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const b = btnRef.current
        const l = leanRef.current
        if (!b || !l) return
        const r = b.getBoundingClientRect()
        const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / 500))
        const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / 500))
        l.style.setProperty('--lx', `${(dx * 6).toFixed(1)}px`)
        l.style.setProperty('--ly', `${(dy * 3).toFixed(1)}px`)
        l.style.setProperty('--rot', `${(dx * 3).toFixed(1)}deg`)
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [mode])

  // keyboard users: keep focus on the main action when the card changes
  useEffect(() => {
    if (!R.current.kb || (mode !== 'intro' && mode !== 'tour')) return
    const a = document.activeElement
    if (a && rootRef.current && rootRef.current.contains(a) && a !== btnRef.current && !a.disabled) return
    const el = rootRef.current && rootRef.current.querySelector('[data-rb-primary]')
    if (el) el.focus({ preventScroll: true })
  }, [mode, step])

  if (!shown) return null

  const n = STEPS.length
  const awake = mode === 'intro' || mode === 'tour'
  const card = mode === 'intro' || mode === 'tour' || mode === 'bye'
  const closing = mode === 'tour' && step >= n
  const touring = mode === 'tour' && !closing

  return (
    <div className={`rb-root rb-m-${mode}`} ref={rootRef}>
      <div className="rb-vh" aria-live="polite" aria-atomic="true">{say}</div>

      {card && (
        <section id="rb-card" className="rb-card" aria-label="NayaDaur Assistant">
          {mode !== 'bye' && (
            <div className="rb-head">
              <p className="rb-title">{title}</p>
              {touring && <span className="rb-count" aria-hidden="true">{step + 1}/{n}</span>}
              <button
                type="button"
                className="rb-icon"
                aria-pressed={muted}
                aria-label={muted ? UI.unmute : UI.mute}
                title={muted ? UI.unmute : UI.mute}
                onClick={toggleMute}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 9.5v5h4l5 4v-13l-5 4z" />
                  {muted ? <path d="M17 9.5l4 5M21 9.5l-4 5" /> : <path d="M16.5 9a4 4 0 010 6M19 6.5a8 8 0 010 11" />}
                </svg>
              </button>
            </div>
          )}
          <p className="rb-text">
            <span className="rb-ghost">{full}</span>
            <span className="rb-typed" aria-hidden="true">{typed}</span>
          </p>
          {quip && mode !== 'bye' && <p className={`rb-quip${quipOut ? ' is-out' : ''}`} aria-hidden="true">{quip}</p>}

          {touring && (
            <ol className="rb-dots" aria-hidden="true">
              {STEPS.map((s, i) => <li key={s.id} className={i === step ? 'is-now' : i < step ? 'is-done' : ''} />)}
              <li />
            </ol>
          )}
          {closing && <ol className="rb-dots" aria-hidden="true">{STEPS.map((s) => <li key={s.id} className="is-done" />)}<li className="is-now" /></ol>}

          {drifted && touring && (
            <div className="rb-row">
              <button type="button" className="rb-btn rb-btn--sky" onClick={click(() => goStep(step))}>{UI.back}</button>
            </div>
          )}

          {mode === 'intro' && (
            <div className="rb-row">
              {n > 0 && <button type="button" className="rb-btn rb-btn--sky" data-rb-primary onClick={click(() => goStep(0))}>{UI.start}</button>}
              <button type="button" className="rb-btn" data-rb-primary={n === 0 ? '' : undefined} onClick={click(bye)}>{UI.later}</button>
            </div>
          )}
          {touring && (
            <>
              <div className="rb-row">
                <button type="button" className="rb-btn" disabled={step === 0} onClick={click(() => goStep(step - 1))}>{UI.prev}</button>
                <button type="button" className="rb-btn rb-btn--sky" data-rb-primary onClick={click(() => goStep(step + 1))}>{UI.next}</button>
              </div>
              <button type="button" className="rb-link" onClick={click(bye)}>{UI.stop}</button>
            </>
          )}
          {closing && (
            <>
              <div className="rb-row">
                <a className="rb-btn rb-btn--wa" data-rb-primary href={waLink(DEFAULT_WA_TEXT)} target="_blank" rel="noopener" onClick={() => audio.playFx('robot-click')}>
                  <svg className="rb-ic" aria-hidden="true" focusable="false"><use href="#i-wa" /></svg>
                  {UI.wa}
                </a>
                <button type="button" className="rb-btn" onClick={click(() => goStep(0))}>{UI.again}</button>
              </div>
              <button type="button" className="rb-link" onClick={click(bye)}>{UI.stop}</button>
            </>
          )}
        </section>
      )}

      {hint && mode === 'sleep' && <span className="rb-hint" aria-hidden="true">{HINT}</span>}

      <button
        ref={btnRef}
        type="button"
        className={`rb-bot${mode === 'sleep' ? ' is-sleep' : ''}`}
        aria-label={awake || mode === 'bye' ? UI.labelAwake : UI.label}
        aria-expanded={awake}
        aria-controls={card ? 'rb-card' : undefined}
        onClick={onRobot}
        onPointerEnter={onHover}
      >
        <span ref={leanRef} className="rb-lean">
          <img className="rb-img" src={frame(pose)} width="416" height="480" alt="" draggable="false" decoding="async" />
        </span>
        <span className="rb-floor" aria-hidden="true" />
        {mode === 'sleep' && <span className="rb-zs" aria-hidden="true"><i>z</i><i>z</i><i>Z</i></span>}
      </button>
    </div>
  )
}
