import type { AnchorHTMLAttributes, ReactNode } from 'react'

export type CtaVariant = 'primary' | 'outline'
export type CtaSize = 'sm' | 'md' | 'lg'

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: CtaVariant
  size?: CtaSize
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const variants: Record<CtaVariant, string> = {
  primary: 'bg-brand text-on-brand shadow-brand-md hover:bg-brand-light',
  outline:
    'border border-white/25 text-white hover:border-brand hover:text-brand',
}

const sizes: Record<CtaSize, string> = {
  sm: 'px-5 py-2.5 text-[13px]',
  md: 'px-8 py-4 text-[15px]',
  lg: 'px-10 py-5 text-[16px]',
}

export function CtaLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: CtaLinkProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
