import type { ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  /** Tailwind arbitrary property to override the default 30s loop. */
  durationClassName?: string
  className?: string
}

/** Edge-masked, infinitely scrolling row. Content is duplicated for the loop. */
export function Marquee({
  children,
  durationClassName = '',
  className = '',
}: MarqueeProps) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div className={`marquee-track ${durationClassName}`}>
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
