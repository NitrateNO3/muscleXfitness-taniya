import { business, hours, hoursOrder } from '../data/site.js'
import { useGymHours } from '../hooks/useGymHours.js'
import Reveal from './Reveal.jsx'
import { CalendarIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icon.jsx'

const CONTACTS = [
  {
    icon: PinIcon,
    title: business.address.line1,
    sub: `${business.address.line2} · Plus code ${business.address.plusCode.split(' ')[0]}`,
    href: business.mapsUrl,
    external: true,
  },
  {
    icon: PhoneIcon,
    title: business.phone.display,
    sub: 'Membership & general enquiries',
    href: `tel:${business.phone.tel}`,
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp us',
    sub: 'Fastest way to ask about plans & timings',
    href: business.whatsapp,
    external: true,
  },
  {
    icon: CalendarIcon,
    title: business.classesPhone.display,
    sub: 'Group class bookings',
    href: `tel:${business.classesPhone.tel}`,
  },
]

export default function Visit() {
  const { day, isOpen, label } = useGymHours()

  return (
    <section className="sec visit" id="visit">
      <div className="wrap">
        {/* Heading and status sit full-width so the section opens tight under the nav. */}
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
            <div className="hours">
              {hoursOrder.map((d) => (
                <div className={`hours__row ${d === day ? 'is-today' : ''}`} key={d}>
                  <span>{hours[d].name}</span>
                  <span>{hours[d].label}</span>
                </div>
              ))}
            </div>

            <h3 className="visit__label">Get in touch</h3>
            <div className="cgrid">
              {CONTACTS.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    className="ctile"
                    key={c.title}
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
                  >
                    <Icon />
                    <b>{c.title}</b>
                    <small>{c.sub}</small>
                  </a>
                )
              })}
            </div>
          </Reveal>

          <Reveal className="visit__col" delay={70}>
            <h3 className="visit__label">Find us</h3>
            <div className="map">
              <iframe
                src={business.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing MUSCLE X FITNESS, A10 Suncity, Sector 54, Gurugram"
              />
            </div>
            <div className="map__actions">
              <a className="btn" href={business.directionsUrl} target="_blank" rel="noopener">
                <PinIcon /> Directions
              </a>
              <a className="btn btn--ghost" href={business.mapsUrl} target="_blank" rel="noopener">
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
