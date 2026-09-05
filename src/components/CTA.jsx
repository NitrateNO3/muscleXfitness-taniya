import { business } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { thumb } from '../lib/asset.js'

export default function CTA() {
  return (
    <section className="sec cta">
      <div className="cta__bg"><img src={thumb('gym-10')} alt="" loading="lazy" /></div>
      <div className="wrap">
        <Reveal as="p" className="eyebrow center">Start This Week</Reveal>
        <Reveal as="h2" className="display" delay={70}>
          Walk in.<br /><mark>Work in.</mark>
        </Reveal>
        <Reveal as="p" className="lede" delay={140}>
          Come take a look at the floor, meet the coaches and see the equipment for yourself.
          Call us and we&apos;ll set up a session that fits your schedule.
        </Reveal>
        <Reveal className="cta__actions" delay={210}>
          <a className="btn" href={`tel:${business.phone.tel}`}>
            Call {business.phone.display}
          </a>
          <a className="btn btn--ghost" href={business.whatsapp} target="_blank" rel="noopener">
            Message on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
