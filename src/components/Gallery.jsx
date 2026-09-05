import { useState } from 'react'
import { gallery } from '../data/gallery.js'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import { thumb } from '../lib/asset.js'

// The homepage shows a taste; /gallery/ has the full set.
const PREVIEW_COUNT = 12

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)
  const preview = gallery.slice(0, PREVIEW_COUNT)

  return (
    <section className="sec" id="gallery">
      <div className="wrap">
        <Reveal className="sechead center">
          <p className="eyebrow center">Inside the Gym</p>
          <h2 className="display">See it before<br />you <mark>step in</mark>.</h2>
          <p className="lede">Real photos from the floor — no stock, no staging.</p>
        </Reveal>

        <Reveal className="gal">
          {preview.map((photo, i) => (
            <figure key={photo.id} onClick={() => setOpenIndex(i)}>
              <img src={thumb(photo.id)} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </Reveal>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a className="btn btn--ghost" href="/gallery/">
            See all {gallery.length} photos
          </a>
        </div>
      </div>

      <Lightbox
        items={preview}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </section>
  )
}
