import { anim } from '../../animation/classNames'
import { SectionHeading } from '../ui/SectionHeading'
import { CtaLink } from '../ui/CtaLink'
import { CheckIcon } from '../icons'
import { packs, type Pack } from '../../data/content'

function PackCard({ pack }: { pack: Pack }) {
  const featured = Boolean(pack.featured)

  return (
    <div className={anim.rise}>
      <div
        className={`group relative flex h-full flex-col rounded-[28px] p-6 transition-all duration-300 sm:p-8 lg:hover:-translate-y-1.5 ${
          featured
            ? 'ring-1 ring-brand/55 hover:ring-brand'
            : 'bg-surface ring-1 ring-white/8 hover:ring-brand/55'
        }`}
        style={
          featured
            ? { background: 'linear-gradient(160deg,rgba(41,171,226,.14),#101012 55%)' }
            : undefined
        }
      >
        {featured ? (
          <>
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[34px] blur-[70px]"
              style={{ background: 'rgba(41,171,226,.18)' }}
            />
            <span className="absolute -top-3 left-6 rounded-full bg-brand px-3.5 py-1 text-[10px] font-bold tracking-[0.16em] text-on-brand uppercase shadow-brand-sm sm:left-8 sm:text-[10.5px]">
              Más elegido
            </span>
          </>
        ) : null}

        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[22px] font-semibold text-white sm:text-[26px]">
            {pack.name}
          </h3>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase sm:text-[10.5px] ${
              featured ? 'bg-white/10 text-white' : 'bg-white/8 text-white/70'
            }`}
          >
            Incluye
          </span>
        </div>

        <p className="mt-2 text-[12.5px] tracking-[0.2em] text-brand uppercase">
          {pack.period}
        </p>

        <ul
          className={`mt-6 flex-1 space-y-3.5 border-t pt-6 sm:mt-8 sm:space-y-4 sm:pt-7 ${
            featured ? 'border-white/10' : 'border-white/8'
          }`}
        >
          {pack.items.map((item) => (
            <li
              key={item}
              className={`flex gap-3 text-[14px] leading-relaxed sm:text-[14.5px] ${
                featured ? 'text-soft' : 'text-muted'
              }`}
            >
              <CheckIcon size={16} className="mt-1 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>

        <CtaLink
          href="#contacto"
          size="sm"
          variant={featured ? 'primary' : 'outline'}
          className={`mt-7 w-full py-3.5 text-[14px] sm:mt-9 ${featured ? 'shadow-brand-sm' : ''}`}
        >
          Consultar precio
        </CtaLink>
      </div>
    </div>
  )
}

export function Packs() {
  return (
    <section
      id="demos"
      className={`${anim.section} relative z-10 mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:py-28`}
    >
      <SectionHeading index="08" label="Nuestros packs" title="Elegí el que va con vos" />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packs.map((pack) => (
          <PackCard key={pack.name} pack={pack} />
        ))}
      </div>
    </section>
  )
}
