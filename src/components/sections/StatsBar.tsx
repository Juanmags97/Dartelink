import { anim } from '../../animation/classNames'
import { statCards } from '../../data/content'

export function StatsBar() {
  return (
    <section
      aria-label="DarteLink en números"
      className={`${anim.section} relative z-10 mx-auto max-w-[1300px] px-5 py-12 sm:px-8 sm:py-16`}
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/8 lg:grid-cols-4">
        {statCards.map((stat) => (
          <div
            key={stat.description}
            className={`${anim.rise} bg-surface px-5 py-7 sm:px-8 sm:py-9`}
          >
            <p
              className={`font-display text-[32px] font-semibold leading-none sm:text-[44px] ${
                stat.accent ? 'text-brand' : 'text-white'
              }`}
            >
              {stat.prefix}
              <span className={anim.count} data-to={stat.to}>
                {stat.to}
              </span>
            </p>
            <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted sm:mt-3 sm:text-[13px]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
