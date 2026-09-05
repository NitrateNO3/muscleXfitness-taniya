import { business } from '../data/site.js'
import { CalendarIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icon.jsx'

export const contacts = [
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

export default function ContactTiles({ columns = 2 }) {
  return (
    <div className="cgrid" style={{ '--cgrid-cols': columns }}>
      {contacts.map((c) => {
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
  )
}
