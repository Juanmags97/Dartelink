import { anim } from '../../animation/classNames'
import { SectionHeading } from '../ui/SectionHeading'
import { advantages } from '../../data/content'

export function Advantages() {
  return (
    <section
      className={`${anim.section} relative z-10 mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:py-28`}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            className="lg:sticky lg:top-28"
            index="07"
            label="Ventajas"
            titleClassName="text-[32px] leading-[1.08] sm:text-[38px] lg:text-[44px] lg:leading-[1.06]"
            title="Genera reacciones inmediatas frente a tus clientes"
          />
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-white/8 border-t border-white/8">
            {advantages.map((advantage) => (
              <li
                key={advantage.index}
                className={`${anim.rise} py-6 sm:py-8 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-6`}
              >
                <span
                  className="mb-2 block font-display text-[12px] tracking-[0.28em] text-white/25 sm:text-[13px] lg:col-span-2 lg:mb-0"
                  aria-hidden="true"
                >
                  {advantage.index}
                </span>
                <h3 className="font-display text-[20px] font-semibold text-white sm:text-[24px] lg:col-span-4">
                  {advantage.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted sm:text-[15px] lg:col-span-6 lg:mt-0">
                  {advantage.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
