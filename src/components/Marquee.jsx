import { marqueeItems } from '../data/site.js'

export default function Marquee() {
  // Rendered twice so the -50% keyframe loops without a visible seam.
  const track = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </div>
  )
}
