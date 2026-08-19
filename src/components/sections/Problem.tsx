import { anim } from '../../animation/classNames'
import { SectionHeading } from '../ui/SectionHeading'
import { CloseIcon } from '../icons'
import { problems } from '../../data/content'

export function Problem() {
  return (
    <section
      className={`${anim.section} relative z-10 mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:py-28`}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="01"
            label="Tu problema"
            titleClassName="text-[38px] leading-[1.02] sm:text-[46px] lg:text-[52px]"
            title={
              <>
                ¿Te pasa
                <br />
                esto?
              </>
            }
            description={
              <p className="max-w-[330px] text-[15px] leading-relaxed text-subtle">
                Cada tarjeta de papel que entregás es una oportunidad que se pierde en
                un cajón.
              </p>
            }
          />
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-white/8 border-t border-white/8">
            {problems.map((problem) => (
              <li
                key={problem}
                className={`${anim.rise} flex items-center gap-4 py-5 sm:gap-5 sm:py-6`}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 ring-1 ring-brand/25 sm:h-10 sm:w-10">
                  <CloseIcon size={18} className="text-brand" />
                </span>
                <p className="text-[16px] font-medium text-white sm:text-[19px]">
                  {problem}
                </p>
              </li>
            ))}
          </ul>

          <p
            className={`${anim.rise} mt-9 font-display text-[22px] font-semibold leading-tight tracking-tight text-white/50 sm:text-[26px] lg:mt-12 lg:text-[30px]`}
          >
            Estás perdiendo oportunidades{' '}
            <span className="text-white">todos los días.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
