import { business, classes } from '../data/site.js'
import { useGymHours } from '../hooks/useGymHours.js'
import { thumb } from '../lib/asset.js'
import Layout from '../components/Layout.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import { CalendarIcon, ClockIcon, PhoneIcon } from '../components/Icon.jsx'

export default function ClassesPage() {
  const { day } = useGymHours()

  return (
    <Layout activePage="classes">
      <PageHero
        eyebrow="Classes"
        title="Seven classes."
        accent="One week."
        image="gym-22"
        imageAlt="Members after a group class at Muscle X Fitness"
        lede="A different class every evening at 7:30 PM, included with your membership.
              Zumba, yoga, pilates, dance and conditioning — taught on the studio floor,
              open to every level."
      >
        <div className="pagehero__facts">
          <span><ClockIcon /> Every day at 7:30 PM</span>
          <span><CalendarIcon /> Included with membership</span>
          <span><PhoneIcon /> Book on {business.classesPhone.display}</span>
        </div>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <div className="classlist">
            {classes.map((c, i) => (
              <Reveal
                as="article"
                className={`classcard ${c.day === day ? 'is-today' : ''}`}
                key={c.day}
                delay={(i % 3) * 70}
              >
                <div className="classcard__day">
                  <span>{c.dayName}</span>
                  {c.day === day && <span className="tag-today">Tonight</span>}
                </div>

                <div className="classcard__body">
                  <h2>{c.name}</h2>
                  <p>{c.long}</p>
                  <p className="classcard__for"><b>Good for:</b> {c.forYou}</p>
                </div>

                <div className="classcard__time">
                  <b>{c.time}</b>
                  <small>45–60 min</small>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="poster">
            <div className="poster__img">
              <img
                src={thumb('gym-27')}
                alt="The weekly class schedule poster on display at Muscle X Fitness"
                loading="lazy"
              />
            </div>
            <div className="poster__body">
              <p className="eyebrow">Straight from the wall</p>
              <h3 className="display">The schedule, as posted at the gym.</h3>
              <p className="lede">
                Timings occasionally shift around festivals and public holidays. If you&apos;re
                travelling in for a specific class, give us a ring first — we&apos;ll confirm
                it&apos;s running.
              </p>
              <a className="btn" href={`tel:${business.classesPhone.tel}`}>
                <PhoneIcon /> Call {business.classesPhone.display}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </Layout>
  )
}
