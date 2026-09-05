import { useGymHours } from '../hooks/useGymHours.js'
import Reveal from './Reveal.jsx'
import HoursTable from './HoursTable.jsx'
import ContactTiles from './ContactTiles.jsx'
import MapBlock from './MapBlock.jsx'

export default function Visit() {
  const { isOpen, label } = useGymHours()

  return (
    <section className="sec visit" id="visit">
      <div className="wrap">
        {/* Heading and status run full-width so the section opens tight under the nav. */}
        <Reveal className="visit__head">
          <div>
            <p className="eyebrow">Timings &amp; Location</p>
            <h2 className="display">Come see the floor.</h2>
          </div>
          <div className={`openflag ${isOpen ? 'open' : ''}`}>
            <i /><span>{label}</span>
          </div>
        </Reveal>

        <div className="visit__grid">
          <Reveal className="visit__col">
            <h3 className="visit__label">Opening hours</h3>
            <HoursTable />
            <h3 className="visit__label">Get in touch</h3>
            <ContactTiles />
          </Reveal>

          <Reveal className="visit__col" delay={70}>
            <h3 className="visit__label">Find us</h3>
            <MapBlock />
          </Reveal>
        </div>

        <div className="revcta">
          <a className="btn btn--ghost" href="/visit/">Directions, parking &amp; full timings</a>
        </div>
      </div>
    </section>
  )
}
