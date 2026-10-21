import { useCallback, useRef, useState } from 'react'
import data from '../data/portfolio.json'
import Lightbox from './Lightbox.jsx'

const { items, tabs } = data

export default function PortfolioGallery() {
  const [filter, setFilter] = useState('all')
  const [status, setStatus] = useState('')
  const [openN, setOpenN] = useState(null) // id of the sample shown in the lightbox
  const opener = useRef(null)

  const visible = items.filter((it) => filter === 'all' || it.cat === filter)
  const index = visible.findIndex((it) => it.n === openN)

  const choose = (key) => {
    setFilter(key)
    const shown = items.filter((it) => key === 'all' || it.cat === key).length
    setStatus(`Showing ${shown} ${shown === 1 ? 'sample' : 'samples'}`)
  }

  const step = useCallback(
    (k) => {
      setOpenN((n) => {
        const list = items.filter((it) => filter === 'all' || it.cat === filter)
        const i = list.findIndex((it) => it.n === n)
        return list[(i + k + list.length) % list.length].n
      })
    },
    [filter]
  )

  const close = useCallback(() => {
    setOpenN(null)
    opener.current?.focus()
  }, [])

  return (
    <>
      <div className="tabs" role="group" aria-label="Filter concept samples">
        {tabs.map(([key, label]) => (
          <button key={key} type="button" aria-pressed={filter === key} onClick={() => choose(key)}>{label}</button>
        ))}
      </div>
      <p className="vh" id="pf-status" role="status">{status}</p>
      <div className="pf-grid" id="pf-grid">
        {items.map((it, i) => (
          <figure
            key={it.n}
            className="pf rv"
            data-cat={it.cat}
            hidden={filter !== 'all' && it.cat !== filter}
            style={{ '--i': String(i % 4) }}
          >
            <button
              type="button"
              className="pb"
              aria-label={`View larger: ${it.cap}`}
              onClick={(e) => {
                opener.current = e.currentTarget
                setOpenN(it.n)
              }}
            >
              <img
                src={it.thumb.src}
                srcSet={it.thumb.srcSet}
                sizes={it.thumb.sizes}
                width={it.thumb.w}
                height={it.thumb.h}
                alt={it.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="pill">Concept sample</span>
            </button>
            <figcaption>{it.cap}</figcaption>
          </figure>
        ))}
      </div>
      {index >= 0 && <Lightbox items={visible} index={index} onStep={step} onClose={close} />}
    </>
  )
}
