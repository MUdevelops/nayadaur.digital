import { useEffect, useRef, useState } from 'react'

const WORDS = ['کاروبار', 'کامیابی', 'ترقی', 'نیا دور', 'ڈیجیٹل', 'سوچ', 'بہتر', 'اعتماد', 'منافع', 'گاہک', 'دکان', 'آن لائن']
const rnd = (a, b) => a + Math.random() * (b - a)

/** Decorative Urdu words drifting down the hero. Generated after mount so server HTML stays stable. */
export default function FallingWords() {
  const ref = useRef(null)
  const [state, setState] = useState({ h: 0, items: [] })

  useEffect(() => {
    const count = window.innerWidth < 600 ? 10 : 20
    const items = Array.from({ length: count }, (_, k) => ({
      word: WORDS[k % WORDS.length],
      style: {
        left: `${rnd(0, 94)}%`,
        fontSize: `${rnd(1.1, 2.7).toFixed(2)}rem`,
        '--o': rnd(0.12, 0.26).toFixed(2),
        '--dx': `${Math.round(rnd(-30, 30))}px`,
        '--t': `${Math.round(rnd(0, 80))}%`,
        animationDuration: `${rnd(11, 23).toFixed(1)}s`,
        animationDelay: `${(-rnd(0, 20)).toFixed(1)}s`,
      },
    }))
    setState({ h: ref.current.offsetHeight + 90, items })
  }, [])

  return (
    <div className="falling" ref={ref} style={state.h ? { '--h': `${state.h}px` } : undefined}>
      {state.items.map((it, i) => (
        <span key={i} className="fw" aria-hidden="true" style={it.style}>{it.word}</span>
      ))}
    </div>
  )
}
