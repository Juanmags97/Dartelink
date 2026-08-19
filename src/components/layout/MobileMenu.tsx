import { useEffect, useRef } from 'react'
import type { KeyboardEvent } from 'react'
import { CtaLink } from '../ui/CtaLink'
import { ArrowRightIcon, CloseIcon, InstagramIcon, MailOpenIcon, WhatsAppIcon } from '../icons'
import { navLinks, site } from '../../data/content'

type MobileMenuProps = {
  id: string
  open: boolean
  onClose: () => void
}

const FOCUSABLE = 'a[href], button:not([disabled])'

/**
 * Full-height navigation drawer shown under the header below the `lg` breakpoint.
 * Traps focus while open and closes on Escape, backdrop click or link activation.
 */
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const first = panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)
    first?.focus()
  }, [open])

  if (!open) return null

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onClose()
      return
    }

    if (event.key !== 'Tab') return

    const items = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [],
    )
    if (!items.length) return

    const first = items[0]
    const last = items[items.length - 1]
    const active = document.activeElement

    if (event.shiftKey && active === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && active === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-header z-40 lg:hidden"
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        aria-label="Cerrar menú"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/70 backdrop-blur-sm"
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className="animate-panel-in relative flex max-h-full flex-col overflow-y-auto border-b border-white/10 bg-ink/98 px-6 pb-10 pt-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,.9)] backdrop-blur-xl"
      >
        <nav aria-label="Navegación principal (mobile)">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className="animate-panel-item-in border-b border-white/8"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  aria-current={link.active ? 'page' : undefined}
                  className={`flex items-center justify-between gap-4 py-4 font-display text-[24px] font-medium transition-colors hover:text-brand focus-visible:text-brand ${
                    link.active ? 'text-white' : 'text-muted'
                  }`}
                >
                  {link.label}
                  <ArrowRightIcon size={18} className="text-brand" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CtaLink
          href="#contacto"
          onClick={onClose}
          className="animate-panel-item-in mt-8 w-full shadow-brand-md"
          style={{ animationDelay: `${navLinks.length * 45}ms` }}
        >
          Quiero mi tarjeta
          <ArrowRightIcon size={17} />
        </CtaLink>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={site.whatsapp}
            aria-label={`WhatsApp de ${site.name}`}
            className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/12 transition-colors hover:ring-brand"
          >
            <WhatsAppIcon size={18} />
          </a>
          <a
            href={site.instagram}
            aria-label={`Instagram de ${site.name}`}
            className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/12 transition-colors hover:ring-brand"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={site.email}
            aria-label={`Email de ${site.name}`}
            className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/12 transition-colors hover:ring-brand"
          >
            <MailOpenIcon size={18} />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="ml-auto inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium text-subtle transition-colors hover:text-white"
          >
            <CloseIcon size={15} />
            Cerrar
          </button>
        </div>

        <p className="mt-7 text-[12px] tracking-[0.18em] text-faint uppercase">
          Tarjetas digitales · {site.location}
        </p>
      </div>
    </div>
  )
}
