import { useEffect, useRef, useState } from 'react'

/**
 * Fades an element in the first time it scrolls into view.
 * Returns [ref, isVisible] — spread the class yourself so callers stay in control.
 */
export function useReveal({ threshold = 0.12, once = true } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) io.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once])

  return [ref, visible]
}
