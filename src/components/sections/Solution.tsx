import { anim } from '../../animation/classNames'
import { SectionHeading } from '../ui/SectionHeading'
import { PhoneFrame } from '../ui/PhoneFrame'
import { CheckIcon } from '../icons'
import { media, solutionFeatures } from '../../data/content'

export function Solution() {
  return (
    <section
      className={`${anim.section} relative z-10 mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:py-28`}
    >
      <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <PhoneFrame
            className={anim.parallax}
            src={media.solutionVideo}
            title="Demo de una tarjeta digital DarteLink"
            widthClassName="w-[240px] sm:w-[280px] lg:w-[320px]"
            screenHeightClassName="h-[400px] sm:h-[470px] lg:h-[540px]"
          />
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <SectionHeading
            index="02"
            label="La solución"
            titleClassName="max-w-[560px] text-[34px] leading-[1.06] sm:text-[44px] lg:text-[52px] lg:leading-[1.04]"
            title="Con Dartelink, cada contacto cuenta"
            description={
              <p className="max-w-[520px] text-[15.5px] leading-[1.7] text-muted sm:text-[17px] sm:leading-[1.75]">
                Centralizá toda tu información en una sola tarjeta digital.
              </p>
            }
          />

          <ul className="mt-7 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3 lg:pl-[52px]">
            {solutionFeatures.map((feature) => (
              <li
                key={feature}
                className={`${anim.rise} inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] font-medium text-white sm:gap-2.5 sm:px-5 sm:py-3 sm:text-[14px]`}
              >
                <CheckIcon size={16} className="text-brand" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
