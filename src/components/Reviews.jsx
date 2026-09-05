import { business } from '../data/site.js'
import { ratingSummary, reviews } from '../data/reviews.js'
import { useReveal } from '../hooks/useReveal.js'
import Reveal from './Reveal.jsx'
import { Stars } from './Icon.jsx'

function Breakdown() {
  const [ref, visible] = useReveal()

  return (
    <div className="rev__bars" ref={ref}>
      {ratingSummary.breakdown.map((row) => (
        <div className="rev__bar" key={row.stars}>
          <span>{row.stars} star</span>
          <i><b style={{ width: visible ? `${row.pct}%` : 0 }} /></i>
          <span>{row.count}</span>
        </div>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      className="sec"
      id="reviews"
      style={{ background: 'var(--ink-2)', borderBlock: '1px solid var(--line)' }}
    >
      <div className="wrap">
        <Reveal className="sechead center">
          <p className="eyebrow center">Word of Mouth</p>
          <h2 className="display">
            {ratingSummary.total} reviews.<br /><mark>{ratingSummary.score} stars.</mark>
          </h2>
        </Reveal>

        <Reveal className="rev__top">
          <div className="rev__score">
            <b>{ratingSummary.score}</b>
            <Stars />
            <small>Based on {ratingSummary.total} Google reviews</small>
          </div>
          <Breakdown />
        </Reveal>

        <Reveal className="rev__grid">
          {reviews.map((r, i) => (
            <article className="rcard" key={r.name + r.when}>
              <div className="rcard__head">
                <span className={`rcard__av v${(i % 4) + 1}`}>
                  {r.name.trim().charAt(0).toUpperCase()}
                </span>
                <span>
                  <b>{r.name}</b>
                  <small>{r.when}</small>
                </span>
              </div>
              <Stars count={r.stars} />
              <p>
                {r.text}
                {r.clipped && (
                  <>
                    {' '}
                    <a
                      href={business.mapsUrl}
                      target="_blank"
                      rel="noopener"
                      style={{ color: 'var(--volt)' }}
                    >
                      more
                    </a>
                  </>
                )}
              </p>
              <div className="rcard__g">Posted on Google</div>
            </article>
          ))}
        </Reveal>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a className="btn btn--ghost" href={business.mapsUrl} target="_blank" rel="noopener">
            Read all {ratingSummary.total} reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
