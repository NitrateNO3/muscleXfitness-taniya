import { useEffect, useState } from 'react'
import { business, navLinks } from '../data/site.js'
import { hashFromHref, scrollToHash } from '../lib/scrollToHash.js'
import Brand from './Brand.jsx'

export default function Nav({ activePage }) {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Landing on /#visit from another page: the browser's own jump fires before the lazy
  // images below have reserved their space, so re-run it once everything has settled.
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const go = () => scrollToHash(hash, { smooth: false })
    go()
    window.addEventListener('load', go)
    const t = setTimeout(go, 700)

    return () => {
      window.removeEventListener('load', go)
      clearTimeout(t)
    }
  }, [])

  // A '/#section' link would otherwise reload the homepage; when the section is already
  // on this page, scroll to it instead — and land it below the sticky nav, not under it.
  const handleClick = (e, href) => {
    setOpen(false)
    const hash = hashFromHref(href)
    if (!hash) return

    if (scrollToHash(hash)) {
      e.preventDefault()
      window.history.replaceState(null, '', hash)
    }
  }

  return (
    <header className={`nav ${stuck ? 'is-stuck' : ''}`}>
      <div className="wrap">
        <Brand />

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.page && link.page === activePage ? 'is-current' : undefined}
              aria-current={link.page && link.page === activePage ? 'page' : undefined}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta">
          <a className="btn" href={`tel:${business.phone.tel}`}>Book a Trial</a>
          <button
            className={`burger ${open ? 'is-open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i /><i /><i />
          </button>
        </div>
      </div>
    </header>
  )
}
