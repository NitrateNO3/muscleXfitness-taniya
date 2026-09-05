import { business } from '../data/site.js'
import { featuredReviews, ratingSummary } from '../data/reviews.js'
import Reveal from './Reveal.jsx'
import RatingSummary from './RatingSummary.jsx'
import ReviewCard from './ReviewCard.jsx'

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
          <RatingSummary />
        </Reveal>

        <Reveal className="rev__grid rev__grid--3">
          {featuredReviews.map((r, i) => (
            <ReviewCard key={r.name + r.when} review={r} tone={(i % 3) + 1} />
          ))}
        </Reveal>

        <div className="revcta">
          <a className="btn" href="/reviews/">Read more reviews</a>
          <a className="btn btn--ghost" href={business.mapsUrl} target="_blank" rel="noopener">
            See all {ratingSummary.total} on Google
          </a>
        </div>
      </div>
    </section>
  )
}
