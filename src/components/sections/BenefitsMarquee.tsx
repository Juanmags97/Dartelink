import { Marquee } from '../ui/Marquee'
import { marqueeBenefits } from '../../data/content'

export function BenefitsMarquee() {
  return (
    <section
      aria-label="Beneficios de DarteLink"
      className="relative z-10 border-y border-white/8 bg-ink-soft py-5 sm:py-6"
    >
      <Marquee>
        {marqueeBenefits.map((benefit) => (
          <span
            key={benefit}
            className="flex items-center gap-3 px-5 font-display text-[15px] font-medium text-white/85 sm:gap-4 sm:px-8 sm:text-[19px]"
          >
            {benefit}
            <span className="text-brand" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}
