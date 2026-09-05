import { stats } from '../data/site.js'
import Reveal from './Reveal.jsx'

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap" style={{ paddingInline: 0 }}>
        <div className="stats__grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 70}>
              <b>{s.value}{s.accent && <i>{s.accent}</i>}</b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
