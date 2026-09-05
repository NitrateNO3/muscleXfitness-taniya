import { useMemo, useState } from 'react'
import { gallery, galleryFilters } from '../data/gallery.js'
import { thumb } from '../lib/asset.js'
import Layout from '../components/Layout.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import CTA from '../components/CTA.jsx'

export default function GalleryPage() {
  const [filter, setFilter] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)

  const shown = useMemo(
    () => (filter === 'all' ? gallery : gallery.filter((p) => p.tag === filter)),
    [filter],
  )

  const counts = useMemo(() => {
    const map = { all: gallery.length }
    for (const p of gallery) map[p.tag] = (map[p.tag] || 0) + 1
    return map
  }, [])

  return (
    <Layout activePage="gallery">
      <PageHero
        eyebrow="Gallery"
        title="The whole floor,"
        accent="unedited."
        image="gym-24"
        imageAlt="The cardio deck at Muscle X Fitness"
        lede={`Every one of the ${gallery.length} photos below was taken inside the gym at
               A10 Suncity. No stock imagery, no rendered mock-ups — this is the room you'll
               be training in.`}
      />

      <section className="sec" style={{ paddingTop: 'clamp(40px,5vw,64px)' }}>
        <div className="wrap">
          <Reveal className="filters">
            {galleryFilters.map((f) => (
              <button
                key={f.id}
                className={`filter ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => { setFilter(f.id); setOpenIndex(null) }}
                aria-pressed={filter === f.id}
              >
                {f.label} <i>{counts[f.id] || 0}</i>
              </button>
            ))}
          </Reveal>

          {/* Keyed on the filter so the masonry re-lays out and the reveal replays. */}
          <div className="gal" key={filter}>
            {shown.map((photo, i) => (
              <figure key={photo.id} onClick={() => setOpenIndex(i)}>
                <img src={thumb(photo.id)} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <Lightbox
          items={shown}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      </section>

      <CTA />
    </Layout>
  )
}
