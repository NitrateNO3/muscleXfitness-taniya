import { business } from '../data/site.js'
import { asset } from '../lib/asset.js'

/**
 * The brand lockup. `mark` uses the monogram beside a text wordmark (nav, footer);
 * `full` drops in the complete logo artwork.
 */
export default function Brand({ href = '/', variant = 'mark' }) {
  const onClick = (e) => {
    if (window.location.pathname === new URL(href, window.location.origin).pathname) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (variant === 'full') {
    return (
      <a className="brand brand--full" href={href} onClick={onClick}>
        <img src={asset('logo.png')} alt={business.name} />
      </a>
    )
  }

  return (
    <a className="brand" href={href} onClick={onClick}>
      <img className="brand__mark" src={asset('logo-mark.png')} alt="" />
      <span className="brand__txt">
        <b>Muscle<i>X</i>Fitness</b>
        <small>{business.tagline}</small>
      </span>
    </a>
  )
}
