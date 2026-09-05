import { business } from '../data/site.js'

export default function Brand({ href = '/' }) {
  const onClick = (e) => {
    if (window.location.pathname === new URL(href, window.location.origin).pathname) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <a className="brand" href={href} onClick={onClick}>
      <span className="brand__mark"><span>MX</span></span>
      <span className="brand__txt">
        <b>MUSCLE X</b>
        <small>{business.tagline}</small>
      </span>
    </a>
  )
}
