/** Height of the sticky nav, plus a little breathing room. */
export const NAV_OFFSET = 78

/**
 * Scroll a same-page section into view just under the sticky nav.
 * Returns false if the target isn't on this page, so the caller can fall back
 * to a normal link navigation.
 */
export function scrollToHash(hash, { smooth = true } = {}) {
  if (!hash || hash === '#') return false
  const el = document.querySelector(hash)
  if (!el) return false

  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
    behavior: smooth ? 'smooth' : 'auto',
  })
  return true
}

/** '/#visit' and '#visit' both mean "a section"; '/classes/' does not. */
export function hashFromHref(href) {
  if (href.startsWith('#')) return href
  if (href.startsWith('/#')) return href.slice(1)
  return null
}
