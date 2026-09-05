import { business } from '../data/site.js'
import { PinIcon } from './Icon.jsx'

export default function MapBlock({ ratio }) {
  return (
    <>
      <div className="map" style={ratio ? { aspectRatio: ratio, maxHeight: 'none' } : undefined}>
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
    </>
  )
}
