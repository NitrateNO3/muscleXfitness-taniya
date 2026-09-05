import { business } from '../data/site.js'
import { useGymHours } from '../hooks/useGymHours.js'
import Layout from '../components/Layout.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import HoursTable from '../components/HoursTable.jsx'
import ContactTiles from '../components/ContactTiles.jsx'
import MapBlock from '../components/MapBlock.jsx'
import CTA from '../components/CTA.jsx'
import { ClockIcon, PinIcon } from '../components/Icon.jsx'

export default function VisitPage() {
  const { isOpen, label } = useGymHours()

  return (
    <Layout activePage="visit">
      <PageHero
        eyebrow="Visit"
        title="A10 Suncity,"
        accent="Sector 54."
        image="gym-15"
        imageAlt="The entrance to the training floor at Muscle X Fitness"
        lede="Inside the Suncity complex off Golf Course Road. Doors open at 5:30 in the
              morning six days a week, and again every evening."
      >
        <div className="pagehero__facts">
          <span className={isOpen ? 'is-open' : ''}><ClockIcon /> {label}</span>
          <span><PinIcon /> Plus code {business.address.plusCode.split(' ')[0]}</span>
        </div>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <Reveal className="sechead sechead--split">
            <div>
              <p className="eyebrow">Getting Here</p>
              <h2 className="display">Find the <mark>front door</mark>.</h2>
            </div>
            <p className="lede">
              The pin below is our Google listing, not an approximate address — tap Directions
              and it routes to the gym itself. If you get stuck at the gate, ring{' '}
              <a href={`tel:${business.phone.tel}`} style={{ color: 'var(--red)' }}>
                {business.phone.display}
              </a>{' '}
              and someone will come out.
            </p>
          </Reveal>

          <Reveal>
            <MapBlock ratio="21/9" />
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--ink-2)', borderBlock: '1px solid var(--line)' }}>
        <div className="wrap">
          <Reveal className="sechead sechead--split">
            <div>
              <p className="eyebrow">Opening Hours</p>
              <h2 className="display">Mornings and<br />evenings, <mark>six days</mark>.</h2>
            </div>
            <p className="lede">
              Two sessions a day with the floor closed in between. Two things catch people out:
              <strong> Friday is mornings only</strong>, and <strong>Thursday</strong> opens half
              an hour earlier and runs half an hour later than the rest of the week.
            </p>
          </Reveal>

          <Reveal>
            <HoursTable split />
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="sechead center">
            <p className="eyebrow center">Reach Us</p>
            <h2 className="display">Call, message<br />or just <mark>walk in</mark>.</h2>
          </Reveal>

          <Reveal>
            <ContactTiles columns={4} />
          </Reveal>
        </div>
      </section>

      <CTA />
    </Layout>
  )
}
