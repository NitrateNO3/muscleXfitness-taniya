import { business } from '../data/site.js'
import { Stars } from './Icon.jsx'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div>
          <Stars /> <b>4.9</b> · 152 Google reviews
        </div>
        <div className="t-right">
          <span className="t-hide">{business.address.line1}, Gurugram</span>
          <a href={`tel:${business.phone.tel}`}>
            <b>{business.phone.display}</b>
          </a>
        </div>
      </div>
    </div>
  )
}
