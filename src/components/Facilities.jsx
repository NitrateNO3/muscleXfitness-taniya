import { facilities } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { thumb } from '../lib/asset.js'

export default function Facilities() {
  return (
    <section className="sec" id="facilities" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="sechead sechead--split">
          <div>
            <p className="eyebrow">What&apos;s Inside</p>
            <h2 className="display">Every zone you<br />actually <mark>need</mark>.</h2>
          </div>
          <p className="lede">
            Strength, cardio, cables, functional and a class studio — laid out with enough room
            between stations that peak hour still feels like off-peak.
          </p>
        </Reveal>

        <div className="fac">
          {facilities.map((f, i) => (
            <Reveal as="article" className="fac__card" key={f.num} delay={(i % 4) * 70}>
              <img src={thumb(f.img)} alt={f.alt} loading="lazy" />
              <div className="fac__body">
                <span className="fac__num">{f.num} — {f.kicker}</span>
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
