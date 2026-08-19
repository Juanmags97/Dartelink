import { anim } from '../../animation/classNames'
import { CtaLink } from '../ui/CtaLink'
import { ArrowRightIcon } from '../icons'
import { heroStats, media, site } from '../../data/content'

const headlineLines = ['Tarjetas', 'personales', 'inteligentes.']

export function Hero() {
  return (
    <section
      className={`${anim.section} ${anim.hero} relative z-10 overflow-hidden pt-12 pb-12 sm:pt-16 lg:pt-20 lg:pb-16`}
    >
      <div
        className={`${anim.halo} pointer-events-none absolute -left-40 top-[-120px] h-[420px] w-[520px] rounded-full blur-[110px] lg:h-[620px] lg:w-[820px] lg:blur-[130px]`}
        style={{ background: 'rgba(41,171,226,.26)' }}
      />
      <div
        className={`${anim.halo} pointer-events-none absolute right-[-160px] top-[180px] h-[380px] w-[440px] rounded-full blur-[110px] lg:h-[520px] lg:w-[620px] lg:blur-[130px]`}
        style={{ background: 'rgba(14,127,184,.22)' }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-y-12 lg:gap-y-14">
        <div className="col-span-12 px-5 sm:px-8 lg:col-span-7 lg:pl-[70px] lg:pr-10">
          <div className="flex items-start gap-6">
            <span
              className={`${anim.rise} text-vertical mt-2 hidden font-display text-[11px] tracking-[0.42em] text-brand uppercase select-none lg:block`}
              aria-hidden="true"
            >
              NFC · 2026
            </span>

            <div className="min-w-0">
              <p
                className={`${anim.rise} mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/4 px-3.5 py-1.5 text-[9.5px] font-semibold tracking-[0.2em] text-brand uppercase sm:px-4 sm:text-[10.5px] sm:tracking-[0.26em] lg:mb-7`}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                Tarjetas digitales · {site.location}
              </p>

              <h1
                className="font-display font-semibold tracking-tight text-white"
                style={{ fontSize: 'clamp(2.6rem,9vw,5.6rem)', lineHeight: 0.95 }}
              >
                {headlineLines.map((line, index) => (
                  <span key={line} className="line-clip">
                    <span
                      className={`${anim.line} block ${index === 2 ? 'text-brand' : ''}`}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              <p
                className={`${anim.rise} mt-6 max-w-[540px] text-[15.5px] leading-[1.7] text-muted sm:mt-8 sm:text-[17px] sm:leading-[1.75]`}
              >
                La herramienta comercial con tecnología NFC diseñada para destacar tu
                marca y generar negocios. Acercás la tarjeta al celular y compartís
                todos tus datos al instante.
              </p>

              <div
                className={`${anim.rise} mt-8 flex flex-col items-stretch gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4`}
              >
                <CtaLink href="#contacto">
                  Quiero mi tarjeta
                  <ArrowRightIcon size={17} />
                </CtaLink>
                <CtaLink href="#demos" variant="outline">
                  Ver demos
                </CtaLink>
              </div>

              <dl
                className={`${anim.rise} mt-10 grid grid-cols-2 gap-4 border-t border-white/8 pt-6 sm:flex sm:flex-wrap sm:items-center sm:gap-7 sm:pt-7 lg:mt-12`}
              >
                {heroStats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center gap-5 sm:gap-7">
                    {index > 0 ? (
                      <span
                        className="hidden h-9 w-px bg-white/10 sm:block"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div>
                      <dt className="font-display text-[22px] font-semibold leading-none text-white sm:text-[26px]">
                        {stat.value}
                      </dt>
                      <dd className="mt-1.5 text-[10.5px] tracking-wide text-subtle uppercase sm:text-[11.5px]">
                        {stat.label}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="col-span-12 pl-5 sm:pl-8 lg:col-span-5 lg:pl-0">
          <div className={`${anim.heroMedia} relative`}>
            <div
              className="pointer-events-none absolute -inset-8 rounded-l-[3rem] blur-[90px]"
              style={{ background: 'rgba(41,171,226,.3)' }}
            />
            <img
              src={media.heroCard}
              alt="Tarjeta personal digital DarteLink con tecnología NFC"
              className="relative h-[380px] w-full rounded-l-3xl object-cover ring-1 ring-white/12 sm:h-[500px] lg:h-[600px]"
              loading="eager"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-l-3xl"
              style={{
                background: 'linear-gradient(90deg,#0A0A0B 0%,rgba(10,10,11,0) 34%)',
              }}
            />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/12 bg-ink/72 px-4 py-3 backdrop-blur-md sm:bottom-7 sm:left-7 sm:px-5 sm:py-4">
              <p className="text-[10px] font-semibold tracking-[0.24em] text-brand uppercase sm:text-[10.5px]">
                Sin apps
              </p>
              <p className="mt-1 font-display text-[13.5px] font-medium text-white sm:text-[15px]">
                Acercá · Se abre tu perfil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
