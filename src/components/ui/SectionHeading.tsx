import type { ReactNode } from 'react'
import { anim } from '../../animation/classNames'

type SectionHeadingProps = {
  /** Editorial index, e.g. `01`. */
  index: string
  label: string
  title: ReactNode
  description?: ReactNode
  /** Extra classes for the text column. */
  contentClassName?: string
  titleClassName?: string
  className?: string
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  contentClassName = '',
  titleClassName = 'text-[32px] leading-[1.06] sm:text-[40px] lg:text-[48px] lg:leading-[1.04]',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`flex items-start gap-3.5 sm:gap-5 ${className}`}>
      <span
        className={`${anim.rise} mt-1.5 font-display text-[11px] font-medium tracking-[0.3em] text-brand sm:mt-2 sm:text-[13px]`}
        aria-hidden="true"
      >
        {index}
      </span>
      <div className={contentClassName}>
        <p
          className={`${anim.rise} text-[10px] font-semibold tracking-[0.24em] text-brand uppercase sm:text-[10.5px] sm:tracking-[0.28em]`}
        >
          {label}
        </p>
        <h2
          className={`${anim.rise} mt-3 font-display font-semibold tracking-tight text-white sm:mt-4 ${titleClassName}`}
        >
          {title}
        </h2>
        {description ? (
          <div className={`${anim.rise} mt-5 sm:mt-6`}>{description}</div>
        ) : null}
      </div>
    </div>
  )
}
