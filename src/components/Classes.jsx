import { business, classes } from '../data/site.js'
import { useGymHours } from '../hooks/useGymHours.js'
import Reveal from './Reveal.jsx'

export default function Classes() {
  const { day } = useGymHours()

  return (
    <section className="sec sched" id="classes">
      <div className="wrap">
        <Reveal className="sechead sechead--split">
          <div>
            <p className="eyebrow">Weekly Class Schedule</p>
            <h2 className="display">Every evening,<br /><mark>7:30 PM</mark> sharp.</h2>
          </div>
          <p className="lede">
            Included with membership. Turn up five minutes early — the floor fills fast.
            For class bookings call{' '}
            <a href={`tel:${business.classesPhone.tel}`} style={{ color: 'var(--volt)' }}>
              {business.classesPhone.display}
            </a>.
          </p>
        </Reveal>

        <Reveal className="sched__list">
          {classes.map((c) => {
            const isToday = c.day === day
            return (
              <div className={`sched__row ${isToday ? 'is-today' : ''}`} key={c.day}>
                <span className="sched__day">{c.dayName}</span>
                <span className="sched__name">{c.name}</span>
                <span className="sched__desc">{c.desc}</span>
                <span className="sched__time">{c.time}</span>
                {isToday && <span className="tag-today">Tonight</span>}
              </div>
            )
          })}
        </Reveal>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a className="btn btn--ghost" href="/classes/">What each class actually involves</a>
        </div>
      </div>
    </section>
  )
}
