import { anim } from '../../animation/classNames'
import { SectionHeading } from '../ui/SectionHeading'
import { PhoneFrame } from '../ui/PhoneFrame'
import { media } from '../../data/content'

export function Conversion() {
  return (
    <section
      className={`${anim.section} relative z-10 mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:py-28`}
    >
      <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <SectionHeading
            index="04"
            label="Diferencial"
            titleClassName="max-w-[540px] text-[36px] leading-[1.04] sm:text-[46px] lg:text-[54px] lg:leading-[1.02]"
            title="Tu herramienta de conversión"
            description={
              <p className="max-w-[540px] text-[15.5px] leading-[1.7] text-muted sm:text-[18px] sm:leading-[1.75]">
                No es solo una tarjeta. Generá contactos reales, llevá tráfico directo a
                tu WhatsApp y editá tu info de forma ilimitada.
              </p>
            }
          />

          <blockquote
            className={`${anim.rise} mt-7 border-l-2 border-brand pl-5 sm:mt-9 sm:pl-6 lg:ml-[52px]`}
          >
            <p className="font-display text-[19px] font-semibold leading-snug text-brand sm:text-[24px]">
              Cada vez que la compartís, estás más cerca de una venta.
            </p>
          </blockquote>
        </div>

        <div className="lg:col-span-5">
          <PhoneFrame
            className={anim.parallax}
            src={media.conversionVideo}
            title="Demo de conversión con una tarjeta DarteLink"
            widthClassName="w-[230px] sm:w-[270px] lg:w-[300px]"
            screenHeightClassName="h-[390px] sm:h-[460px] lg:h-[520px]"
            glowColor="rgba(14,127,184,.28)"
          />
        </div>
      </div>
    </section>
  )
}
