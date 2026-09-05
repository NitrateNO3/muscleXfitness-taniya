import { business } from '../data/site.js'
import { Stars } from './Icon.jsx'

/** One Google review. `tone` cycles the avatar colour across a grid. */
export default function ReviewCard({ review, tone = 1 }) {
  return (
    <article className="rcard">
      <div className="rcard__head">
        <span className={`rcard__av v${tone}`}>
          {review.name.trim().charAt(0).toUpperCase()}
        </span>
        <span>
          <b>{review.name}</b>
          <small>{review.when}</small>
        </span>
      </div>

      <Stars count={review.stars} />

      <p>
        {review.text}
        {review.clipped && (
          <>
            {' '}
            <a href={business.mapsUrl} target="_blank" rel="noopener" style={{ color: 'var(--red)' }}>
              more
            </a>
          </>
        )}
      </p>

      <div className="rcard__g">Posted on Google</div>
    </article>
  )
}
