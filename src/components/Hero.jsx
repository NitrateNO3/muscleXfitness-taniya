import { useEffect, useState } from 'react'
import { business } from '../data/site.js'
import { useGymHours } from '../hooks/useGymHours.js'
import Reveal from './Reveal.jsx'
import { ClockIcon, DumbbellIcon, PhoneIcon, PinIcon, Stars } from './Icon.jsx'
import { photo } from '../lib/asset.js'

const HEADLINE = [
  [{ text: 'Strength is' }],
  [{ text: 'built here.' }],
  [{ text: 'Not ' }, { text: 'bought.', accent: true }],
]

export default function Hero() {
  const { short } = useGymHours()
  // Lines slide up on first paint; flip the flag after mount so the transition runs.
  const [entered, setEntered] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <img
          src={photo('gym-24')}
          alt="The main training floor at Muscle X Fitness, Sector 54 Gurugram"
          fetchPriority="high"
        />
      </div>

      <div className="hero__inner">
        <div className="wrap">
          <Reveal className="ratingpill">
            <span className="ratingpill__g">G</span>
            <span>
              <b>4.9</b> <Stars />
              <small>152 Google reviews · Sector 54, Gurugram</small>
            </span>
          </Reveal>

          <h1 className="display">
            {HEADLINE.map((line, i) => (
              <span className="ln" key={i}>
                <span
                  style={{
                    transform: entered ? 'none' : 'translateY(105%)',
                    transition: `transform .95s cubic-bezier(.22,1,.36,1) ${120 + i * 110}ms`,
                  }}
                >
                  {line.map((part, j) =>
                    part.accent ? <mark key={j}>{part.text}</mark> : part.text,
                  )}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero__row">
            <div>
              <Reveal as="p" className="lede">
                A wide, air-conditioned training floor in the heart of Suncity — loaded with
                strength racks, a full cardio line, cable and functional zones, and coaches who
                actually watch your form. Open from 5:30 in the morning.
              </Reveal>

              <Reveal className="hero__actions" delay={70}>
                <a className="btn" href={`tel:${business.phone.tel}`}>
                  <PhoneIcon /> Call {business.phone.display}
                </a>
                <a className="btn btn--ghost" href={business.directionsUrl} target="_blank" rel="noopener">
                  <PinIcon /> Get Directions
                </a>
              </Reveal>
            </div>

            <Reveal className="hero__meta" delay={140}>
              <div>
                <ClockIcon />
                <span><b>{short}</b>Mornings &amp; evenings, 6 days</span>
              </div>
              <div>
                <PinIcon />
                <span><b>A10, Suncity</b>{business.address.line2}</span>
              </div>
              <div>
                <DumbbellIcon />
                <span><b>7 classes a week</b>Every evening at 7:30 PM</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="scrollcue"><span>Scroll</span><i /></div>
    </section>
  )
}
