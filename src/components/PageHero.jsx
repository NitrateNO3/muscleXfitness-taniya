import { thumb } from '../lib/asset.js'
import Reveal from './Reveal.jsx'

/** Compact banner for the standalone pages — the tall hero belongs to the homepage only. */
export default function PageHero({ eyebrow, title, accent, lede, image, imageAlt, children }) {
  return (
    <section className="pagehero">
      <div className="pagehero__bg">
        <img src={thumb(image)} alt={imageAlt} />
      </div>

      <div className="wrap">
        <Reveal className="pagehero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>{eyebrow}</span>
          </nav>

          <h1 className="display">
            {title}{accent && <> <mark>{accent}</mark></>}
          </h1>

          {lede && <p className="lede">{lede}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
