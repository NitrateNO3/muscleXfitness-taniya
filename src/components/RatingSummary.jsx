import { ratingSummary } from '../data/reviews.js'
import { useReveal } from '../hooks/useReveal.js'
import { Stars } from './Icon.jsx'

/** Score card plus the star breakdown; bars fill when scrolled into view. */
export default function RatingSummary() {
  const [ref, visible] = useReveal()

  return (
    <>
      <div className="rev__score">
        <b>{ratingSummary.score}</b>
        <Stars />
        <small>Based on {ratingSummary.total} Google reviews</small>
      </div>

      <div className="rev__bars" ref={ref}>
        {ratingSummary.breakdown.map((row) => (
          <div className="rev__bar" key={row.stars}>
            <span>{row.stars} star</span>
            <i><b style={{ width: visible ? `${row.pct}%` : 0 }} /></i>
            <span>{row.count}</span>
          </div>
        ))}
      </div>
    </>
  )
}
