import { useCallback, useEffect, useState } from 'react'
import { SECTION_OVERFLOW_EVENT } from '../lib/scrollToHash.js'

/** Hide once the visitor has clearly moved on under their own steam. */
const MOVED_THRESHOLD = 140
/** Or once the end of the section is nearly on screen. */
const END_MARGIN = 60
/** Or after this long, so it never becomes furniture. */
const TIMEOUT_MS = 8000

/**
 * A nudge shown only when a nav jump lands on a section that runs past the fold —
 * "Facilities" is taller than any viewport, so without this the grid looks like it ends
 * at the bottom of the screen.
 */
export default function ScrollCue() {
  const [target, setTarget] = useState(null)

  useEffect(() => {
    const onOverflow = (e) => setTarget(e.detail)
    window.addEventListener(SECTION_OVERFLOW_EVENT, onOverflow)
    return () => window.removeEventListener(SECTION_OVERFLOW_EVENT, onOverflow)
  }, [])

  useEffect(() => {
    if (!target) return

    // Compare against where the jump was aimed, not the scroll position at dispatch time —
    // the smooth scroll is still animating when this effect runs.
    const check = () => {
      const moved = Math.abs(window.scrollY - target.landedAt) > MOVED_THRESHOLD
      const reachedEnd = window.scrollY + window.innerHeight >= target.contentBottom - END_MARGIN
      if (moved || reachedEnd) setTarget(null)
    }

    // Let the smooth scroll finish before listening, or it dismisses itself.
    const arm = setTimeout(() => window.addEventListener('scroll', check, { passive: true }), 900)
    const bail = setTimeout(() => setTarget(null), TIMEOUT_MS)

    return () => {
      clearTimeout(arm)
      clearTimeout(bail)
      window.removeEventListener('scroll', check)
    }
  }, [target])

  const nudge = useCallback(() => {
    window.scrollBy({ top: Math.round(window.innerHeight * 0.8), behavior: 'smooth' })
    setTarget(null)
  }, [])

  if (!target) return null

  return (
    <button className="scrollmore" onClick={nudge} aria-label="Scroll down for more">
      <span>Scroll for more</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  )
}
