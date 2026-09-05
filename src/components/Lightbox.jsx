import { useCallback, useEffect } from 'react'
import { photo } from '../lib/asset.js'

export default function Lightbox({ items, index, onClose, onIndexChange }) {
  const isOpen = index !== null
  const total = items.length

  const step = useCallback(
    (delta) => onIndexChange((index + delta + total) % total),
    [index, total, onIndexChange],
  )

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') step(-1)
      if (e.key === 'ArrowRight') step(1)
    }

    document.addEventListener('keydown', onKey)
    // Freeze the page behind the overlay.
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, onClose, step])

  const current = isOpen ? items[index] : null

  return (
    <div
      className={`lb ${isOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      aria-hidden={!isOpen}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <button className="lb__close" onClick={onClose} aria-label="Close">✕</button>
      <button className="lb__nav prev" onClick={() => step(-1)} aria-label="Previous">‹</button>
      {current && <img src={photo(current.id)} alt={current.alt} />}
      <button className="lb__nav next" onClick={() => step(1)} aria-label="Next">›</button>
      <div className="lb__count">{isOpen ? `${index + 1} / ${total}` : ''}</div>
    </div>
  )
}
