// Small Web Audio engine for the robot guide. Every export is safe to call: any failure is silent.
// Nothing is created or played until unlock() runs inside a real click, tap or key press.

const BASE = '/assets/robot/audio/'
const MUSIC_VOL = 0.25
const FX_VOL = { 'robot-wake': 0.7, 'robot-wake-short': 0.7, 'robot-click': 0.6, 'robot-goodbye': 0.6 }
const FADE_IN = 1.5
const FADE_OUT = 1.2

let ctx = null
let music = null // { src, g }
let muted = false
let wantMusic = false
let hidden = false
let suspendTimer = 0
const buffers = new Map()
const playing = new Map()

export const saveData = () => {
  try {
    return !!(navigator.connection && navigator.connection.saveData)
  } catch {
    return false
  }
}

export function unlock() {
  try {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext
      if (!AC) return false
      ctx = new AC()
    }
    if (ctx.state === 'suspended') {
      const p = ctx.resume()
      if (p && p.catch) p.catch(() => {})
    }
    return true
  } catch {
    return false
  }
}

const decode = (data) =>
  new Promise((resolve, reject) => {
    const p = ctx.decodeAudioData(data, resolve, reject)
    if (p && p.catch) p.catch(reject)
  })

function load(file) {
  if (!ctx) return Promise.resolve(null)
  if (!buffers.has(file)) {
    buffers.set(
      file,
      fetch(BASE + file)
        .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error('missing'))))
        .then(decode)
        .catch(() => null)
    )
  }
  return buffers.get(file)
}

// Fetch the short sounds into the HTTP cache so the wake sound has no delay. Nothing is played.
export function warm() {
  if (saveData()) return
  ;['robot-wake.mp3', 'robot-wake-short.mp3', 'robot-click.mp3'].forEach((f) => {
    try {
      fetch(BASE + f).catch(() => {})
    } catch { /* ignore */ }
  })
}

const loadMusic = async () => {
  let ogg = false
  try {
    ogg = !!document.createElement('audio').canPlayType('audio/ogg; codecs="vorbis"')
  } catch { /* mp3 */ }
  return (ogg && (await load('robot-theme.ogg'))) || load('robot-theme.mp3')
}

export function preloadMusic() {
  if (!ctx || saveData()) return
  loadMusic().catch(() => {})
}

const ramp = (g, to, sec) => {
  try {
    const t = ctx.currentTime
    g.gain.cancelScheduledValues(t)
    g.gain.setValueAtTime(g.gain.value, t)
    g.gain.linearRampToValueAtTime(to, t + sec)
  } catch { /* ignore */ }
}

export function playFx(name) {
  if (muted || !ctx) return Promise.resolve(false)
  return load(name + '.mp3')
    .then((buf) => {
      if (!buf || muted) return false
      const src = ctx.createBufferSource()
      const g = ctx.createGain()
      g.gain.value = FX_VOL[name] ?? 0.6
      src.buffer = buf
      src.connect(g)
      g.connect(ctx.destination)
      const h = { src, g }
      playing.set(name, h)
      src.onended = () => {
        try {
          src.disconnect()
          g.disconnect()
        } catch { /* ignore */ }
        if (playing.get(name) === h) playing.delete(name)
      }
      src.start()
      return true
    })
    .catch(() => false)
}

export function stopFx(name) {
  try {
    const h = playing.get(name)
    if (!h) return
    playing.delete(name)
    ramp(h.g, 0, 0.15)
    setTimeout(() => {
      try {
        h.src.stop()
      } catch { /* ignore */ }
    }, 200)
  } catch { /* ignore */ }
}

const target = () => (muted || hidden ? 0 : MUSIC_VOL)

export async function startMusic() {
  wantMusic = true
  try {
    if (!ctx || saveData()) return
    const buf = await loadMusic()
    if (!buf || !wantMusic || music) return
    const src = ctx.createBufferSource()
    const g = ctx.createGain()
    g.gain.value = 0
    src.buffer = buf
    src.loop = true
    src.connect(g)
    g.connect(ctx.destination)
    src.start()
    music = { src, g }
    ramp(g, target(), FADE_IN)
  } catch { /* silent */ }
}

export function stopMusic(fade = FADE_OUT) {
  wantMusic = false
  try {
    if (!ctx || !music) return
    const m = music
    music = null
    ramp(m.g, 0, fade)
    setTimeout(() => {
      try {
        m.src.stop()
        m.src.disconnect()
        m.g.disconnect()
      } catch { /* ignore */ }
    }, fade * 1000 + 150)
  } catch { /* ignore */ }
}

export function setMuted(m) {
  muted = !!m
  try {
    if (muted) Array.from(playing.keys()).forEach(stopFx)
    if (music) ramp(music.g, target(), muted ? 0.35 : 0.8)
    else if (!muted && wantMusic) startMusic()
  } catch { /* ignore */ }
}

export const isMuted = () => muted

// Fade out when the tab is hidden, fade back in when it returns.
export function setHidden(h) {
  hidden = !!h
  try {
    if (!ctx) return
    clearTimeout(suspendTimer)
    if (hidden) {
      if (music) ramp(music.g, 0, 0.5)
      suspendTimer = setTimeout(() => {
        if (hidden && ctx.state === 'running') ctx.suspend().catch(() => {})
      }, 700)
    } else {
      const p = ctx.resume()
      if (p && p.catch) p.catch(() => {})
      if (music) ramp(music.g, target(), 1)
    }
  } catch { /* ignore */ }
}
