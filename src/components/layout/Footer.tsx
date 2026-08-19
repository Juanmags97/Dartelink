import { CtaLink } from '../ui/CtaLink'
import { InstagramIcon, MailOpenIcon, WhatsAppIcon } from '../icons'
import { footerColumns, site } from '../../data/content'

export function Footer() {
  return (
    <footer id="faq" className="relative z-10 px-5 pb-8 sm:px-8 sm:pb-10">
      <div className="mx-auto max-w-[1300px] rounded-[28px] bg-ink-soft p-6 ring-1 ring-white/8 sm:rounded-[32px] sm:p-10 lg:p-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-12 lg:gap-10">
          <div className="col-span-2 lg:col-span-4">
            <img
              src={site.logo}
              alt={site.name}
              className="h-8 w-auto brightness-0 invert sm:h-9"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-5 max-w-[280px] text-[14px] leading-relaxed text-subtle">
              Tarjetas personales digitales con tecnología NFC. Más de 20 años en el
              rubro gráfico y publicitario.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.instagram}
                aria-label={`Instagram de ${site.name}`}
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/12 transition-colors hover:ring-brand"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={site.email}
                aria-label={`Email de ${site.name}`}
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/12 transition-colors hover:ring-brand"
              >
                <MailOpenIcon size={17} />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="lg:col-span-2"
            >
              <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-white uppercase">
                {column.title}
              </p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-muted transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 lg:col-span-4 lg:text-right">
            <CtaLink
              href={site.whatsapp}
              size="sm"
              className="w-full py-3.5 text-[14px] shadow-brand-sm sm:w-auto sm:text-[14.5px]"
            >
              <WhatsAppIcon size={18} />
              Escribinos por WhatsApp
            </CtaLink>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-6 sm:gap-4 sm:pt-7 lg:mt-12">
          <p className="text-[12.5px] text-subtle sm:text-[13px]">
            © {site.name} 2026 · Tarjetas digitales · {site.location}
          </p>
          <p className="text-[12.5px] text-faint sm:text-[13px]">
            Hecho con tecnología NFC + QR
          </p>
        </div>
      </div>
    </footer>
  )
}
