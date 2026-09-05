import { hours, hoursOrder } from '../data/site.js'
import { useGymHours } from '../hooks/useGymHours.js'

/**
 * The week's opening hours with today highlighted.
 * `split` breaks each day into its morning and evening sessions instead of one string.
 */
export default function HoursTable({ split = false }) {
  const { day } = useGymHours()

  if (!split) {
    return (
      <div className="hours">
        {hoursOrder.map((d) => (
          <div className={`hours__row ${d === day ? 'is-today' : ''}`} key={d}>
            <span>{hours[d].name}</span>
            <span>{hours[d].label}</span>
          </div>
        ))}
      </div>
    )
  }

  const fmt = (m) => {
    const h = Math.floor(m / 60)
    const mm = m % 60
    return `${h % 12 || 12}${mm ? `:${String(mm).padStart(2, '0')}` : ''}`
  }

  return (
    <div className="hoursgrid">
      <div className="hoursgrid__head">
        <span>Day</span><span>Morning</span><span>Evening</span>
      </div>
      {hoursOrder.map((d) => {
        const [morning, evening] = hours[d].slots
        return (
          <div className={`hoursgrid__row ${d === day ? 'is-today' : ''}`} key={d}>
            <span className="hoursgrid__day">
              {hours[d].name}
              {d === day && <em>Today</em>}
            </span>
            <span>{morning ? `${fmt(morning[0])} – ${fmt(morning[1])} am` : '—'}</span>
            <span className={evening ? '' : 'is-closed'}>
              {evening ? `${fmt(evening[0])} – ${fmt(evening[1])} pm` : 'Closed'}
            </span>
          </div>
        )
      })}
    </div>
  )
}
