import { business, navLinks } from '../data/site.js'
import Brand from './Brand.jsx'

export default function Footer() {
  const reach = [
    { label: business.phone.display, href: `tel:${business.phone.tel}` },
    { label: `${business.classesPhone.display} (classes)`, href: `tel:${business.classesPhone.tel}` },
    { label: 'WhatsApp', href: business.whatsapp, external: true },
    { label: business.address.line1, href: business.mapsUrl, external: true },
    { label: business.address.line2, href: business.mapsUrl, external: true },
  ]

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            <Brand variant="full" />
            <p>{business.blurb}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Reach Us</h4>
            <ul>
              {reach.map((r, i) => (
                <li key={i}>
                  <a
                    href={r.href}
                    {...(r.external ? { target: '_blank', rel: 'noopener' } : {})}
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="foot__base">
          <span>© {new Date().getFullYear()} {business.displayName}. All rights reserved.</span>
          <span>Sector 54, Gurugram · Rated 4.9★ on Google</span>
        </div>
      </div>
    </footer>
  )
}
