import { useMemo, useState } from 'react'
import { business } from '../data/site.js'
import { ratingSummary, reviews, reviewTopics } from '../data/reviews.js'
import Layout from '../components/Layout.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import RatingSummary from '../components/RatingSummary.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import CTA from '../components/CTA.jsx'
import { Stars } from '../components/Icon.jsx'

const PAGE_SIZE = 24

export default function ReviewsPage() {
  const [topic, setTopic] = useState('all')
  const [shown, setShown] = useState(PAGE_SIZE)

  const filtered = useMemo(
    () => (topic === 'all' ? reviews : reviews.filter((r) => r.topics.includes(topic))),
    [topic],
  )

  const counts = useMemo(() => {
    const map = { all: reviews.length }
    for (const r of reviews) for (const t of r.topics) map[t] = (map[t] || 0) + 1
    return map
  }, [])

  const pick = (id) => { setTopic(id); setShown(PAGE_SIZE) }
  const visible = filtered.slice(0, shown)

  return (
    <Layout activePage="reviews">
      <PageHero
        eyebrow="Reviews"
        title="Rated 4.9 by"
        accent="152 members."
        image="gym-11"
        imageAlt="Members at Muscle X Fitness, Sector 54 Gurugram"
        lede="Every review below was left on Google by someone who trains here — reproduced
              word for word, names and all. Nothing was written for us."
      >
        <div className="pagehero__facts">
          <span><Stars /> 4.9 average</span>
          <span>145 five-star reviews</span>
          <span>{reviews.length} reproduced here</span>
        </div>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <Reveal className="rev__top">
            <RatingSummary />
          </Reveal>

          <Reveal className="filters">
            {reviewTopics.map((t) => (
              <button
                key={t.id}
                className={`filter ${topic === t.id ? 'is-active' : ''}`}
                onClick={() => pick(t.id)}
                aria-pressed={topic === t.id}
              >
                {t.label} <i>{counts[t.id] || 0}</i>
              </button>
            ))}
          </Reveal>

          {/* Keyed on the topic so the masonry re-lays out cleanly when filtering. */}
          <div className="rev__grid" key={topic}>
            {visible.map((r, i) => (
              <ReviewCard key={r.name + r.when + i} review={r} tone={(i % 3) + 1} />
            ))}
          </div>

          <div className="revcta">
            {shown < filtered.length ? (
              <button className="btn" onClick={() => setShown((n) => n + PAGE_SIZE)}>
                Show more ({filtered.length - shown} left)
              </button>
            ) : (
              <p className="revcta__note">
                That&apos;s all {filtered.length} {topic === 'all' ? '' : 'matching '}reviews
                reproduced here.
              </p>
            )}
            <a className="btn btn--ghost" href={business.mapsUrl} target="_blank" rel="noopener">
              See all {ratingSummary.total} on Google
            </a>
          </div>

          <p className="revnote">
            Showing the {reviews.length} four- and five-star reviews long enough to be worth
            reading. The remaining {ratingSummary.total - reviews.length} are one-liners,
            reviews with no text, ones still naming the previous business at this address, and
            four critical reviews — all of them readable on our{' '}
            <a href={business.mapsUrl} target="_blank" rel="noopener">Google listing</a>.
          </p>
        </div>
      </section>

      <CTA />
    </Layout>
  )
}
