import { useReveal } from '../hooks/useReveal.js'

/**
 * Wraps children in an element that fades up once it enters the viewport.
 * `as` picks the tag, `delay` staggers siblings.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`r ${visible ? 'in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
