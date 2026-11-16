/**
 * NayaDaur particle field.
 *
 * Soft, perfectly round glow particles that drift across a whole section, connect to their
 * neighbours with fading hairlines, and gently move away from the pointer (with thin lines
 * drawn from the cursor to nearby particles).
 *
 * Why Canvas 2D instead of WebGL: the field now lives in many sections (hero, every blue
 * band, footer). Canvas 2D has no per-page context limit, draws round sprites exactly, and a
 * single shared loop keeps the cost near zero.
 *
 * Performance rules:
 * - one requestAnimationFrame loop for all fields; only fields that are on screen are drawn
 * - the loop sleeps when no field is visible or the tab is hidden
 * - DPR capped, particle count follows the section area, fewer on phones / slow devices
 * - adaptive quality: if the first frames are slow, particles are thinned out once
 * - prefers-reduced-motion: one still frame, no loop, no pointer tracking
 */

// [r, g, b] palette: sky blues plus a little white and a deeper blue for depth
const PALETTE = [
  [56, 189, 248],
  [125, 211, 252],
  [186, 230, 253],
  [96, 165, 250],
  [255, 255, 255],
]
const PALETTE_WEIGHTS = [0.34, 0.3, 0.16, 0.12, 0.08]

const SPRITE = 64
const sprites = []

/** One pre-rendered round glow per palette colour: bright core, soft halo, transparent edge. */
function buildSprites() {
  if (sprites.length) return
  for (let i = 0; i < PALETTE.length; i += 1) {
    const [r, g, b] = PALETTE[i]
    const c = document.createElement('canvas')
    c.width = SPRITE
    c.height = SPRITE
    const x = c.getContext('2d')
    const h = SPRITE / 2
    const grad = x.createRadialGradient(h, h, 0, h, h, h)
    grad.addColorStop(0, `rgba(255,255,255,1)`)
    grad.addColorStop(0.1, `rgba(${r},${g},${b},1)`)
    grad.addColorStop(0.24, `rgba(${r},${g},${b},0.62)`)
    grad.addColorStop(0.5, `rgba(${r},${g},${b},0.16)`)
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
    x.fillStyle = grad
    x.beginPath()
    x.arc(h, h, h, 0, Math.PI * 2)
    x.fill()
    sprites.push(c)
  }
}

// deterministic random so every visit starts from the same composition
function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function pickColor(rand, weights = PALETTE_WEIGHTS) {
  let n = rand()
  for (let i = 0; i < weights.length; i += 1) {
    n -= weights[i]
    if (n <= 0) return i
  }
  return 0
}

const DARK_LOOK = { theme: 'dark', line: [125, 211, 252], lineAlpha: [0.1, 0.2, 0.34], cursor: [186, 230, 253], cursorAlpha: 0.55, dprMax: 2 }

const VARIANTS = {
  // density = px² of section area per particle; cap = maximum particles; alpha = overall strength
  hero: { ...DARK_LOOK, density: 9500, cap: 170, min: 36, alpha: 1, link: 138, hub: 0.07 },
  section: { ...DARK_LOOK, density: 15500, cap: 96, min: 26, alpha: 0.9, link: 120, hub: 0.05 },
  soft: { ...DARK_LOOK, density: 22000, cap: 60, min: 20, alpha: 0.7, link: 110, hub: 0.04 },
}

const fields = new Set()
const pointer = { x: -9999, y: -9999, active: false }
let quality = 1
let raf = 0
let last = 0
let clock = 0
let sampled = 0
let slow = 0
let listening = false
let started = false

const reduced = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)

function makeParticle(rand, w, h, hubChance, weights) {
  const z = rand() // depth 0 (far) .. 1 (near)
  const hub = rand() < hubChance
  const ang = rand() * Math.PI * 2
  const speed = (5 + rand() * 13) * (0.35 + z * 0.9)
  return {
    x: rand() * w,
    y: rand() * h,
    vx: Math.cos(ang) * speed,
    vy: Math.sin(ang) * speed,
    ex: 0,
    ey: 0,
    z,
    r: hub ? 3.4 + rand() * 1.8 : 1.05 + z * 1.9 + rand() * 0.5,
    a: hub ? 0.95 : 0.34 + z * 0.56,
    c: hub ? (rand() < 0.5 ? 0 : 1) : pickColor(rand, weights),
    tw: rand() * 6.283,
    ts: 0.5 + rand() * 1.3,
    hub,
  }
}

function createField(host, variantName) {
  const cfg = VARIANTS[variantName] || VARIANTS.section
  const canvas = document.createElement('canvas')
  canvas.className = 'pfield'
  canvas.setAttribute('aria-hidden', 'true')
  host.insertBefore(canvas, host.firstChild)
  host.classList.add('pf-host')
  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) {
    canvas.remove()
    host.classList.remove('pf-host')
    return null
  }

  const rand = rng(31337 + fields.size * 97)
  const f = {
    host,
    canvas,
    ctx,
    cfg,
    rand,
    w: 0,
    h: 0,
    dpr: 1,
    list: [],
    visible: true,
    linkScale: 1,
    ro: null,
    io: null,
    live: false,
  }

  f.target = () => {
    const small = f.w < 700
    let n = Math.round((f.w * f.h) / cfg.density)
    if (small) n = Math.round(n * 0.62)
    n = Math.max(cfg.min * (small ? 0.7 : 1), Math.min(cfg.cap, n))
    return Math.round(n * quality)
  }

  f.resize = () => {
    const rect = host.getBoundingClientRect()
    const w = Math.max(1, Math.round(rect.width))
    const h = Math.max(1, Math.round(rect.height))
    const oldW = f.w
    const oldH = f.h
    f.w = w
    f.h = h
    f.dpr = Math.min(window.devicePixelRatio || 1, w < 700 ? Math.min(1.5, cfg.dprMax) : cfg.dprMax)
    canvas.width = Math.round(w * f.dpr)
    canvas.height = Math.round(h * f.dpr)
    ctx.setTransform(f.dpr, 0, 0, f.dpr, 0, 0)
    f.linkScale = w < 700 ? 0.8 : 1

    // keep the composition when the section changes size
    if (oldW && oldH) {
      const sx = w / oldW
      const sy = h / oldH
      for (let i = 0; i < f.list.length; i += 1) {
        f.list[i].x *= sx
        f.list[i].y *= sy
      }
    }
    const want = f.target()
    while (f.list.length < want) f.list.push(makeParticle(rand, w, h, cfg.hub, PALETTE_WEIGHTS))
    if (f.list.length > want) f.list.length = want
  }

  f.draw = (dt, t) => {
    const { w, h, list } = f
    const n = list.length
    ctx.clearRect(0, 0, w, h)

    // pointer in this field's local space
    let mx = -9999
    let my = -9999
    let near = false
    if (pointer.active) {
      const r = host.getBoundingClientRect()
      mx = pointer.x - r.left
      my = pointer.y - r.top
      near = mx > -40 && my > -40 && mx < w + 40 && my < h + 40
    }
    const R = w < 700 ? 110 : 150

    // 1. move
    const damp = Math.pow(0.9, dt * 60)
    for (let i = 0; i < n; i += 1) {
      const p = list[i]
      p.x += (p.vx + p.ex) * dt
      p.y += (p.vy + p.ey) * dt
      p.ex *= damp
      p.ey *= damp
      // gentle flowing sway so paths curve instead of running straight
      p.x += Math.sin(t * 0.35 + p.tw + p.y * 0.006) * 6 * dt * (0.4 + p.z)
      p.y += Math.cos(t * 0.3 + p.tw + p.x * 0.006) * 6 * dt * (0.4 + p.z)

      const m = 24
      if (p.x < -m) p.x = w + m
      else if (p.x > w + m) p.x = -m
      if (p.y < -m) p.y = h + m
      else if (p.y > h + m) p.y = -m

      if (near) {
        const dx = p.x - mx
        const dy = p.y - my
        const d2 = dx * dx + dy * dy
        if (d2 < R * R && d2 > 1) {
          const d = Math.sqrt(d2)
          const k = (1 - d / R) * (1 - d / R) * 140 * dt * 60 * 0.06
          p.ex += (dx / d) * k
          p.ey += (dy / d) * k
        }
      }
    }

    // 2. links between close particles (batched into 3 alpha levels)
    const L = cfg.link * f.linkScale
    const L2 = L * L
    ctx.lineWidth = 0.8
    const levels = [[], [], []]
    for (let i = 0; i < n; i += 1) {
      const a = list[i]
      for (let j = i + 1; j < n; j += 1) {
        const b = list[j]
        const dx = a.x - b.x
        if (dx > L || dx < -L) continue
        const dy = a.y - b.y
        const d2 = dx * dx + dy * dy
        if (d2 > L2) continue
        const s = 1 - Math.sqrt(d2) / L
        const strength = s * Math.min(a.a, b.a)
        const lv = strength > 0.34 ? 2 : strength > 0.16 ? 1 : 0
        levels[lv].push(i, j)
      }
    }
    const lineAlpha = cfg.lineAlpha
    const [lr, lg, lb] = cfg.line
    for (let lv = 0; lv < 3; lv += 1) {
      const arr = levels[lv]
      if (!arr.length) continue
      ctx.strokeStyle = `rgba(${lr},${lg},${lb},${lineAlpha[lv] * cfg.alpha})`
      ctx.beginPath()
      for (let k = 0; k < arr.length; k += 2) {
        const a = list[arr[k]]
        const b = list[arr[k + 1]]
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
      }
      ctx.stroke()
    }

    // 3. cursor links
    if (near) {
      ctx.lineWidth = 0.9
      for (let i = 0; i < n; i += 1) {
        const p = list[i]
        const dx = p.x - mx
        const dy = p.y - my
        const d2 = dx * dx + dy * dy
        const lim = R * 1.2
        if (d2 > lim * lim) continue
        const s = 1 - Math.sqrt(d2) / lim
        ctx.strokeStyle = `rgba(${cfg.cursor[0]},${cfg.cursor[1]},${cfg.cursor[2]},${s * cfg.cursorAlpha * cfg.alpha})`
        ctx.beginPath()
        ctx.moveTo(mx, my)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
      }
    }

    // 4. particles: round sprites with a soft twinkle
    const set = sprites
    for (let i = 0; i < n; i += 1) {
      const p = list[i]
      const tw = 0.82 + 0.18 * Math.sin(t * p.ts + p.tw)
      const size = p.r * 2 * (p.hub ? 5.2 : 3.4) // sprite includes halo
      ctx.globalAlpha = Math.min(1, p.a * tw * cfg.alpha)
      ctx.drawImage(set[p.c], p.x - size / 2, p.y - size / 2, size, size)
    }
    ctx.globalAlpha = 1
  }

  f.init = () => {
    f.resize()
    f.draw(0, 0)
    canvas.classList.add('is-live')
    host.classList.add('has-pf')
    f.live = true
  }

  f.dispose = () => {
    f.ro && f.ro.disconnect()
    f.io && f.io.disconnect()
    fields.delete(f)
    canvas.remove()
    host.classList.remove('pf-host', 'has-pf')
    f.live = false
  }

  return f
}

// ---- shared loop -------------------------------------------------------------------------
function anyVisible() {
  for (const f of fields) if (f.visible) return true
  return false
}

function tick(now) {
  raf = 0
  if (document.hidden || !anyVisible()) {
    started = false
    return
  }
  const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016)
  last = now
  clock += dt

  for (const f of fields) if (f.visible) f.draw(dt, clock)

  // adaptive quality: thin the particles out once if the first ~1.5 s are slow
  if (quality === 1 && sampled < 90) {
    sampled += 1
    if (dt > 0.034) slow += 1
    if (sampled === 90 && slow > 45) {
      quality = 0.6
      for (const f of fields) f.resize()
    }
  }
  raf = requestAnimationFrame(tick)
}

function wake() {
  if (started || document.hidden || !anyVisible() || reduced()) return
  started = true
  last = 0
  raf = requestAnimationFrame(tick)
}

function onVisibility() {
  if (document.hidden) {
    if (raf) cancelAnimationFrame(raf)
    raf = 0
    started = false
  } else wake()
}

function onPointer(e) {
  if (e.pointerType === 'touch') return
  pointer.x = e.clientX
  pointer.y = e.clientY
  pointer.active = true
}

function onPointerOut(e) {
  if (!e.relatedTarget) pointer.active = false
}

function listen() {
  if (listening) return
  listening = true
  document.addEventListener('visibilitychange', onVisibility)
  if (!reduced()) {
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('pointerout', onPointerOut, { passive: true })
  }
}

function unlisten() {
  if (!listening || fields.size) return
  listening = false
  document.removeEventListener('visibilitychange', onVisibility)
  window.removeEventListener('pointermove', onPointer)
  document.removeEventListener('pointerout', onPointerOut)
  if (raf) cancelAnimationFrame(raf)
  raf = 0
  started = false
}

/**
 * Mount a particle field inside `host` (a section element).
 * @param {HTMLElement} host
 * @param {'hero'|'section'|'soft'} variant
 * @returns {{destroy: () => void} | null}
 */
export function mountParticles(host, variant = 'section') {
  if (!host || typeof document === 'undefined') return null
  if (Array.prototype.some.call(host.children, (c) => c.classList && c.classList.contains('pfield'))) return null
  buildSprites()
  if ((navigator.hardwareConcurrency || 4) <= 2) quality = Math.min(quality, 0.6)
  const f = createField(host, variant)
  if (!f) return null
  fields.add(f)
  f.init()
  listen()

  if ('IntersectionObserver' in window) {
    f.io = new IntersectionObserver(
      (entries) => {
        f.visible = entries[entries.length - 1].isIntersecting
        if (f.visible) wake()
      },
      { rootMargin: '80px' },
    )
    f.io.observe(host)
  }
  if ('ResizeObserver' in window) {
    let pending = 0
    f.ro = new ResizeObserver(() => {
      cancelAnimationFrame(pending)
      pending = requestAnimationFrame(() => {
        f.resize()
        if (!started) f.draw(0, clock) // keep a still frame correct while paused / reduced motion
      })
    })
    f.ro.observe(host)
  }
  wake()

  return {
    destroy() {
      f.dispose()
      unlisten()
    },
  }
}
