import { perks } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { thumb } from '../lib/asset.js'

export default function About() {
  return (
    <section className="sec about" id="about">
      <div className="wrap">
        <div className="about__grid">
          <Reveal className="about__media">
            <div className="m1">
              <img src={thumb('gym-19')} alt="Cable and rack area at Muscle X Fitness" loading="lazy" />
            </div>
            <div className="m2">
              <img src={thumb('gym-17')} alt="Dumbbell rack under the neon wall" loading="lazy" />
            </div>
            <div className="badge">
              Under new<b>Ownership</b><em>Rebuilt floor to ceiling</em>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <p className="eyebrow">The Gym</p>
            <h2 className="display" style={{ fontSize: 'clamp(32px,5vw,60px)', margin: '0 0 24px' }}>
              A serious floor,<br />a friendly room.
            </h2>

            <p>
              MUSCLE X FITNESS is an indoor training space in Gurgaon&apos;s Sector 54, built for
              people who want to actually train — not queue. <strong>Wide, uncluttered floors</strong>,
              a full line of Pro Bodyline machines, free weights up to serious loads, a dedicated
              cardio deck and an open functional zone all sit under one air-conditioned roof.
            </p>

            <p>
              Under new ownership the whole place was rebuilt from the ground up — new equipment,
              new flooring, tighter hygiene, and a coaching team that gives you a plan instead of a
              shrug. Members keep saying the same three things: <strong>it&apos;s spacious,
              it&apos;s spotless, and the trainers show up.</strong>
            </p>

            <div className="chips">
              {perks.map((perk) => <span className="chip" key={perk}>{perk}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
