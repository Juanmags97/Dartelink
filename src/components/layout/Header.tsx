import { useEffect, useId, useState } from 'react'
import { CtaLink } from '../ui/CtaLink'
import { CloseIcon, HamburgerIcon, MailIcon } from '../icons'
import { MobileMenu } from './MobileMenu'
import { useScrollLock } from '../../hooks/useScrollLock'
import { navLinks, site } from '../../data/content'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useScrollLock(menuOpen)

  /* Close the drawer as soon as the desktop nav becomes visible. */
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return (
    <>
      {/* `backdrop-blur` makes the header a containing block for fixed children,
          so the drawer is rendered as a sibling instead of a descendant. */}
      <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-ink/72 backdrop-blur-xl">
        <div className="mx-auto flex h-header max-w-[1300px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-header-lg">
          <a href="#" className="flex shrink-0 items-center gap-3">
            <img
              src={site.logo}
              alt={`${site.name} tarjetas digitales`}
              className="h-7 w-auto brightness-0 invert sm:h-8"
              loading="eager"
              decoding="async"
            />
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-9 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.active ? 'page' : undefined}
                className={`text-[13.5px] font-medium transition-colors hover:text-brand ${
                  link.active ? 'text-white' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <CtaLink href="#contacto" size="sm" className="shadow-brand-sm">
                <MailIcon size={15} />
                Quiero mi tarjeta
              </CtaLink>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="grid h-11 w-11 place-items-center rounded-full text-white ring-1 ring-white/14 transition-colors hover:text-brand hover:ring-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
            >
              {menuOpen ? <CloseIcon size={20} /> : <HamburgerIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu id={menuId} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
