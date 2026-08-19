import { anim } from '../../animation/classNames'
import { CtaLink } from '../ui/CtaLink'
import { ArrowRightIcon } from '../icons'
import { site } from '../../data/content'

export function FinalCta() {
  return (
    <section
      id="contacto"
      className={`${anim.section} relative z-10 overflow-hidden py-20 sm:py-24 lg:py-32`}
    >
      <div
        className={`${anim.halo} pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] lg:h-[480px] lg:w-[860px] lg:blur-[130px]`}
        style={{ background: 'rgba(41,171,226,.26)' }}
      />
      <div className="relative mx-auto max-w-[820px] px-5 text-center sm:px-8">
        <h2
          className={`${anim.rise} font-display text-[34px] font-semibold leading-[1.06] tracking-tight text-white sm:text-[46px] lg:text-[58px] lg:leading-[1.02]`}
        >
          Seguimos en contacto
        </h2>
        <CtaLink
          href={site.whatsapp}
          size="lg"
          className={`${anim.rise} mt-8 w-full shadow-brand-lg sm:mt-11 sm:w-auto`}
        >
          Quiero mi tarjeta
          <ArrowRightIcon size={18} />
        </CtaLink>
        <p className={`${anim.rise} mt-6 text-[14.5px] text-subtle sm:mt-8 sm:text-[15px]`}>
          Al instante, sin dejar pasar oportunidades de negocios.
        </p>
      </div>
    </section>
  )
}
