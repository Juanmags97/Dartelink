import { anim } from '../../animation/classNames'
import { CtaLink } from '../ui/CtaLink'
import { ArrowRightIcon } from '../icons'
import { media } from '../../data/content'

export function CompanyCta() {
  return (
    <section
      className={`${anim.section} relative z-10 mx-auto max-w-[1300px] px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-28`}
    >
      <div className="relative isolate overflow-hidden rounded-[28px] ring-1 ring-white/10 sm:rounded-[32px]">
        <img
          src={media.companyPhoto}
          alt={media.companyPhotoAlt}
          className={`${anim.parallax} absolute inset-0 -z-10 h-[112%] w-full object-cover`}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(160deg,rgba(6,12,16,.96) 0%,rgba(6,12,16,.88) 55%,rgba(6,12,16,.6) 100%)',
          }}
        />
        <div
          className="absolute inset-0 -z-10 lg:hidden"
          style={{ background: 'rgba(6,12,16,.35)' }}
        />

        <div className="flex min-h-[380px] items-center sm:min-h-[420px] lg:min-h-[460px]">
          <div className="max-w-[620px] px-6 py-12 sm:px-10 sm:py-14 lg:px-12">
            <p
              className={`${anim.rise} text-[10px] font-semibold tracking-[0.24em] text-brand uppercase sm:text-[10.5px] sm:tracking-[0.28em]`}
            >
              Para equipos
            </p>
            <h2
              className={`${anim.rise} mt-3 font-display text-[32px] font-semibold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-[40px] lg:text-[46px] lg:leading-[1.05]`}
            >
              Potenciá la imagen de tu empresa
            </h2>
            <p
              className={`${anim.rise} mt-4 max-w-[470px] text-[15.5px] leading-relaxed text-soft sm:mt-5 sm:text-[17px]`}
            >
              Brindando a todo el grupo corporativo la base para fidelizar con
              resultados inmediatos.
            </p>
            <CtaLink
              href="#contacto"
              className={`${anim.rise} mt-7 w-full px-7 sm:mt-9 sm:w-auto`}
            >
              Cotizar tarjetas
              <ArrowRightIcon size={17} />
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
