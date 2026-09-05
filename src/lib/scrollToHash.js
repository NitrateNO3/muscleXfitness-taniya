/** Height of the sticky nav. */
export const NAV_HEIGHT = 70

/**
 * Fired after an anchor jump lands on a section too tall to fit the viewport, so the UI can
 * tell the visitor there's more below the fold. Detail carries where the scroll landed and
 * where the section's content ends.
 */
export const SECTION_OVERFLOW_EVENT = 'mx:section-overflow'

/** Never sit the content tighter than this under the nav... */
const MIN_GAP = 40
/** ...and never leave more air than this above it, even on a short section. */
const MAX_GAP = 96

/**
 * Sections carry large symmetric padding, so aligning the *element* under the nav leaves a
 * dead band of padding on screen and pushes the real content off the bottom. Measure the
 * content box instead and centre it in the space below the nav; sections taller than the
 * viewport can't be centred, so they get a consistent small gap instead.
 */
export function scrollToHash(hash, { smooth = true } = {}) {
  if (!hash || hash === '#') return false
  const el = document.querySelector(hash)
  if (!el) return false

  const style = getComputedStyle(el)
  const padTop = parseFloat(style.paddingTop) || 0
  const padBottom = parseFloat(style.paddingBottom) || 0

  const elTop = el.getBoundingClientRect().top + window.scrollY
  const contentTop = elTop + padTop
  const contentHeight = el.offsetHeight - padTop - padBottom

  const available = window.innerHeight - NAV_HEIGHT
  const gap =
    contentHeight <= available
      ? Math.min((available - contentHeight) / 2, MAX_GAP)
      : MIN_GAP

  const top = Math.max(0, contentTop - NAV_HEIGHT - gap)
  window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })

  if (contentHeight > available) {
    window.dispatchEvent(
      new CustomEvent(SECTION_OVERFLOW_EVENT, {
        detail: { id: hash.replace('#', ''), landedAt: top, contentBottom: contentTop + contentHeight },
      }),
    )
  }

  return true
}

/** '/#visit' and '#visit' both mean "a section"; '/classes/' does not. */
export function hashFromHref(href) {
  if (href.startsWith('#')) return href
  if (href.startsWith('/#')) return href.slice(1)
  return null
}
