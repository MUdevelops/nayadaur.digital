/**
 * "Venom" contact effect.
 *
 * A bundle of lattice-like tendrils hangs from underneath the contact button. They are verlet
 * ropes (distance constraints + gravity) tied together by soft spacing constraints, so they
 * bulge into diamond cells and pinch together at the tip. The tip is pulled toward the pointer
 * anywhere inside the section; the rope stretches (rest length grows) so it can reach it.
 *
 * - Hidden by default: the tendrils stay folded up inside the button (and the canvas is
 *   transparent) until the pointer enters the section. They then unfurl out of the button;
 *   when the pointer leaves they pull back into it and fade away.
 * - Touch: the tendrils appear when a finger touches the section, follow the finger (also while
 *   the page scrolls) and pull back about a second after the finger lifts. Touch events are used
 *   because pointer events are cancelled by the browser as soon as a scroll starts.
 * - Reduced motion: no effect is shown at all.
 * - The loop only runs while the effect is visible, the section is on screen and the tab is visible.
 */

const STRANDS_DESKTOP = 5
const STRANDS_SMALL = 4
const POINTS = 24
const GRAVITY = 0.28
const DAMP = 0.965
const PARK = 0.35 // rope segment length while folded away inside the button

const NAVY = '#0B192C'
const SKY = '#38BDF8'

/**
 * @param {HTMLElement} section  the white contact section (pointer area)
 * @param {HTMLCanvasElement} canvas  absolutely positioned over the whole section
 * @param {HTMLElement} button  the contact button the tendrils hang from
 * @param {{reduced?: boolean}} opts
 * @returns {{destroy: () => void} | null}
 */
export function createVenom(section, canvas, button, opts = {}) {
  const ctx = canvas.getContext('2d')
  if (!ctx || !button) return null
  const reduced = !!opts.reduced

  let W = 1
  let H = 1
  let dpr = 1
  let S = STRANDS_DESKTOP
  let strands = []
  let ax = 0
  let ay = 0
  let spacing = 14
  let baseW = 22
  let rest = PARK
  let t = 0
  let shown = false
  let hideTimer = 0
  let touchTimer = 0

  const raw = { x: 0, y: 0 }
  const tgt = { x: 0, y: 0 }
  let active = false

  function layout() {
    const sr = section.getBoundingClientRect()
    const br = button.getBoundingClientRect()
    W = Math.max(1, Math.round(sr.width))
    H = Math.max(1, Math.round(sr.height))
    dpr = Math.min(window.devicePixelRatio || 1, W < 700 ? 1.5 : 2)
    canvas.width = Math.round(W * dpr)
    canvas.height = Math.round(H * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const small = W < 700
    const wantS = small ? STRANDS_SMALL : STRANDS_DESKTOP
    ax = br.left - sr.left + br.width / 2
    ay = br.bottom - sr.top - 16 // attach well inside the bottom edge so the join is hidden
    spacing = Math.max(8, Math.min(16, br.width * 0.055))
    baseW = spacing * 1.6

    if (wantS !== S || !strands.length) {
      S = wantS
      build()
    } else {
      // keep the shape, just move the pins
      strands.forEach((s, i) => {
        s.pts[0].x = ax + (i - (S - 1) / 2) * spacing
        s.pts[0].y = ay
      })
    }
    if (!active) {
      tgt.x = ax
      tgt.y = ay
    }
  }

  function build() {
    strands = []
    for (let i = 0; i < S; i += 1) {
      const off = (i - (S - 1) / 2) * spacing
      const pts = []
      for (let k = 0; k < POINTS; k += 1) {
        const x = ax + off * 0.15
        const y = ay - k * 0.2 // folded up inside the button
        pts.push({ x, y, px: x, py: y })
      }
      strands.push({ pts, off })
    }
  }

  function step(dt) {
    t += dt
    // where the tip wants to go
    let gx
    let gy
    let restTarget
    if (active) {
      gx = Math.max(8, Math.min(W - 8, raw.x))
      gy = Math.max(8, Math.min(H - 8, raw.y))
      const dist = Math.hypot(gx - ax, gy - ay)
      restTarget = Math.max(8, Math.min(30, (dist / (POINTS - 1)) * 1.04))
    } else {
      // pointer left: pull back up into the button
      gx = ax
      gy = ay
      restTarget = PARK
    }
    tgt.x += (gx - tgt.x) * 0.12
    tgt.y += (gy - tgt.y) * 0.12
    rest += (restTarget - rest) * (active ? 0.06 : 0.1)

    const pull = active ? 0.02 : 0.05

    for (let i = 0; i < S; i += 1) {
      const s = strands[i]
      const p0 = s.pts[0]
      p0.x = ax + s.off
      p0.y = ay
      p0.px = p0.x
      p0.py = p0.y

      for (let k = 1; k < POINTS; k += 1) {
        const p = s.pts[k]
        const u = k / (POINTS - 1)
        const vx = (p.x - p.px) * DAMP
        const vy = (p.y - p.py) * DAMP
        p.px = p.x
        p.py = p.y
        p.x += vx + Math.sin(t * 1.3 + k * 0.5 + i) * 0.12 * u
        p.y += vy + GRAVITY
        // pull toward the target, strongest at the tip; strands fan out a little around it
        const w = u * u * u
        const spread = s.off * (1 - u * 0.75)
        p.x += (tgt.x + spread - p.x) * pull * w
        p.y += (tgt.y - p.y) * pull * w
      }
    }

    for (let it = 0; it < 5; it += 1) {
      // rope length
      for (let i = 0; i < S; i += 1) {
        const pts = strands[i].pts
        for (let k = 1; k < POINTS; k += 1) {
          const a = pts[k - 1]
          const b = pts[k]
          let dx = b.x - a.x
          let dy = b.y - a.y
          const d = Math.hypot(dx, dy) || 0.0001
          const diff = (d - rest) / d
          dx *= diff
          dy *= diff
          if (k === 1) {
            b.x -= dx
            b.y -= dy
          } else {
            a.x += dx * 0.5
            a.y += dy * 0.5
            b.x -= dx * 0.5
            b.y -= dy * 0.5
          }
        }
      }
      // soft spacing between neighbouring strands: swells into diamonds, pinches at the tip
      for (let i = 0; i < S - 1; i += 1) {
        const A = strands[i].pts
        const B = strands[i + 1].pts
        for (let k = 2; k < POINTS; k += 1) {
          const u = k / (POINTS - 1)
          const bulge = Math.sin(Math.PI * Math.min(1, u * 1.05)) * 2.1 + 0.25
          const want = baseW * bulge * (1 + 0.35 * Math.sin(k * 0.55 + i * 1.7))
          const a = A[k]
          const b = B[k]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const d = Math.hypot(dx, dy) || 0.0001
          const f = ((d - want) / d) * 0.09
          a.x += dx * f
          a.y += dy * f
          b.x -= dx * f
          b.y -= dy * f
        }
      }
    }
  }

  function strandPath(pts) {
    ctx.beginPath()
    ctx.moveTo(pts[0].x, pts[0].y)
    for (let k = 1; k < POINTS - 1; k += 1) {
      const mx = (pts[k].x + pts[k + 1].x) / 2
      const my = (pts[k].y + pts[k + 1].y) / 2
      ctx.quadraticCurveTo(pts[k].x, pts[k].y, mx, my)
    }
    ctx.lineTo(pts[POINTS - 1].x, pts[POINTS - 1].y)
  }

  function draw() {
    ctx.clearRect(0, 0, W, H)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    // cross links: X patterns between neighbouring strands make the diamond lattice
    ctx.strokeStyle = 'rgba(11,25,44,.78)'
    ctx.lineWidth = 1.7
    ctx.beginPath()
    for (let i = 0; i < S - 1; i += 1) {
      const A = strands[i].pts
      const B = strands[i + 1].pts
      for (let k = 2; k + 3 < POINTS; k += 3) {
        ctx.moveTo(A[k].x, A[k].y)
        ctx.lineTo(B[k + 3].x, B[k + 3].y)
        ctx.moveTo(B[k].x, B[k].y)
        ctx.lineTo(A[k + 3].x, A[k + 3].y)
      }
    }
    ctx.stroke()

    // strands: dark tube with a bright blue core
    ctx.strokeStyle = NAVY
    ctx.lineWidth = 3.4
    for (let i = 0; i < S; i += 1) {
      strandPath(strands[i].pts)
      ctx.stroke()
    }
    ctx.strokeStyle = 'rgba(56,189,248,.75)'
    ctx.lineWidth = 1.1
    for (let i = 0; i < S; i += 1) {
      strandPath(strands[i].pts)
      ctx.stroke()
    }

    // joints
    ctx.fillStyle = SKY
    ctx.strokeStyle = NAVY
    ctx.lineWidth = 1.2
    for (let i = 0; i < S; i += 1) {
      const pts = strands[i].pts
      for (let k = 2; k < POINTS; k += 3) {
        ctx.beginPath()
        ctx.arc(pts[k].x, pts[k].y, 2.3, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
      }
    }
  }

  // ---- loop ------------------------------------------------------------------------------
  let raf = 0
  let running = false
  let onScreen = true
  let last = 0
  let acc = 0
  let destroyed = false
  const FIXED = 1 / 60

  function tick(now) {
    raf = 0
    if (!running || destroyed) return
    const dt = Math.min(0.05, last ? (now - last) / 1000 : FIXED)
    last = now
    acc += dt
    let n = 0
    while (acc >= FIXED && n < 3) {
      step(FIXED)
      acc -= FIXED
      n += 1
    }
    draw()
    raf = requestAnimationFrame(tick)
  }
  function start() {
    if (running || destroyed || reduced) return
    running = true
    last = 0
    raf = requestAnimationFrame(tick)
  }
  function stop() {
    running = false
    if (raf) cancelAnimationFrame(raf)
    raf = 0
  }
  function sync() {
    if (shown && onScreen && !document.hidden) start()
    else stop()
  }

  // ---- pointer ---------------------------------------------------------------------------
  const local = (e) => {
    const r = section.getBoundingClientRect()
    raw.x = e.clientX - r.left
    raw.y = e.clientY - r.top
  }
  function reveal() {
    if (hideTimer) {
      clearTimeout(hideTimer)
      hideTimer = 0
    }
    if (!shown) {
      shown = true
      canvas.classList.add('is-live')
    }
    sync()
  }
  function hide(delay = 900) {
    // the ropes pull back into the button first, then the canvas fades and the loop sleeps
    if (hideTimer) clearTimeout(hideTimer)
    hideTimer = window.setTimeout(() => {
      hideTimer = 0
      canvas.classList.remove('is-live')
      hideTimer = window.setTimeout(() => {
        hideTimer = 0
        shown = false
        stop()
        build()
        rest = PARK
        tgt.x = ax
        tgt.y = ay
        ctx.clearRect(0, 0, W, H)
      }, 650)
    }, delay)
  }
  // mouse and pen: pointer events
  const onEnter = (e) => {
    if (e.pointerType === 'touch') return
    local(e)
    active = true
    reveal()
  }
  const onMove = (e) => {
    if (e.pointerType === 'touch') return
    local(e)
    active = true
    reveal()
  }
  const onLeave = (e) => {
    if (e.pointerType === 'touch' || !active) return
    active = false
    hide()
  }

  // touch: touch events (they keep firing while the page scrolls under the finger)
  const touchPos = (e) => {
    const t = e.touches[0] || e.changedTouches[0]
    if (!t) return false
    const r = section.getBoundingClientRect()
    raw.x = t.clientX - r.left
    raw.y = t.clientY - r.top
    return true
  }
  const onTouch = (e) => {
    if (!touchPos(e)) return
    if (touchTimer) {
      clearTimeout(touchTimer)
      touchTimer = 0
    }
    active = true
    reveal()
  }
  const onTouchEnd = () => {
    if (touchTimer) clearTimeout(touchTimer)
    // let the tendrils linger for a moment after the finger lifts, then pull back
    touchTimer = window.setTimeout(() => {
      touchTimer = 0
      active = false
      hide(150)
    }, 1100)
  }

  if (!reduced) {
    section.addEventListener('pointerenter', onEnter, { passive: true })
    section.addEventListener('pointermove', onMove, { passive: true })
    section.addEventListener('pointerleave', onLeave, { passive: true })
    section.addEventListener('touchstart', onTouch, { passive: true })
    section.addEventListener('touchmove', onTouch, { passive: true })
    section.addEventListener('touchend', onTouchEnd, { passive: true })
    section.addEventListener('touchcancel', onTouchEnd, { passive: true })
  }
  const onVis = () => sync()
  document.addEventListener('visibilitychange', onVis)

  let io = null
  let ro = null
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      onScreen = entries[entries.length - 1].isIntersecting
      sync()
    })
    io.observe(section)
  }
  if ('ResizeObserver' in window) {
    let pending = 0
    ro = new ResizeObserver(() => {
      cancelAnimationFrame(pending)
      pending = requestAnimationFrame(() => {
        layout()
        if (!running && shown) draw()
      })
    })
    ro.observe(section)
  }

  layout()
  ctx.clearRect(0, 0, W, H) // nothing is drawn until the pointer enters the section
  sync()

  return {
    destroy() {
      if (destroyed) return
      destroyed = true
      stop()
      io && io.disconnect()
      ro && ro.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      if (hideTimer) clearTimeout(hideTimer)
      if (touchTimer) clearTimeout(touchTimer)
      section.removeEventListener('pointerenter', onEnter)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      section.removeEventListener('touchstart', onTouch)
      section.removeEventListener('touchmove', onTouch)
      section.removeEventListener('touchend', onTouchEnd)
      section.removeEventListener('touchcancel', onTouchEnd)
      ctx.clearRect(0, 0, W, H)
      canvas.classList.remove('is-live')
    },
  }
}
