/**
 * Build a URL for a file in /public, honouring Vite's `base`.
 * Keeps the site working whether it's served from the domain root or a subfolder.
 */
export function asset(path) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

/** Gallery grid / page images (~900px). */
export const thumb = (id) => asset(`thumb/${id}.jpg`)

/** Full-resolution originals, used by the lightbox. */
export const photo = (id) => asset(`img/${id}.jpg`)
