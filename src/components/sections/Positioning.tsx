import { anim } from '../../animation/classNames'
import { SectionHeading } from '../ui/SectionHeading'
import { Marquee } from '../ui/Marquee'
import { positioningWords, type PositioningWord } from '../../data/content'

const wordStyles: Record<PositioningWord['style'], string> = {
  solid: 'text-white',
  outline: 'text-stroked',
  brand: 'text-brand',
}

export function Positioning() {
  return (
    <section
      className={`${anim.section} relative z-10 overflow-hidden border-y border-white/8 bg-ink-soft py-16 sm:py-20 lg:py-24`}
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <SectionHeading
          index="05"
          label="Posicionamiento"
          contentClassName="max-w-[620px]"
          title="Generá nuevas oportunidades"
          description={
            <p className="text-[15.5px] leading-[1.7] text-muted sm:text-[17px] sm:leading-[1.75]">
              Mientras otros solo comparten datos, con Dartelink vas a dar un paso más
              allá. Una tecnología diseñada para:
            </p>
          }
        />
      </div>

      <Marquee className="mt-10 sm:mt-14" durationClassName="[animation-duration:46s]">
        {positioningWords.map((word) => (
          <span key={word.text} className="flex items-center">
            <span
              className={`px-5 font-display text-[44px] font-semibold leading-none tracking-tight sm:px-8 sm:text-[64px] lg:px-10 lg:text-[86px] ${wordStyles[word.style]}`}
            >
              {word.text}
            </span>
            <span
              className="px-3 font-display text-[36px] leading-none text-brand sm:px-5 sm:text-[52px] lg:px-6 lg:text-[70px]"
              aria-hidden="true"
            >
              /
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}
