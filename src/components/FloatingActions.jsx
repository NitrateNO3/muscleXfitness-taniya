import { business } from '../data/site.js'
import { PhoneIcon, WhatsAppIcon } from './Icon.jsx'

export default function FloatingActions() {
  return (
    <div className="fab">
      <a className="wa" href={business.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
      <a className="ph" href={`tel:${business.phone.tel}`} aria-label="Call">
        <PhoneIcon strokeWidth={2.2} />
      </a>
    </div>
  )
}
