import type { ComponentType } from 'react'
import { anim } from '../../animation/classNames'
import { SectionHeading } from '../ui/SectionHeading'
import {
  DownloadIcon,
  LinkIcon,
  MenuLinesIcon,
  PaletteIcon,
  PhoneIcon,
  PinIcon,
  ShareIcon,
  UserIcon,
  type IconProps,
} from '../icons'
import {
  anatomyBlocks,
  media,
  type AnatomyBlock,
  type AnatomyIcon,
} from '../../data/content'

const iconMap: Record<AnatomyIcon, ComponentType<IconProps>> = {
  link: LinkIcon,
  user: UserIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  download: DownloadIcon,
  share: ShareIcon,
  palette: PaletteIcon,
  menu: MenuLinesIcon,
}

const cardBase =
  'rounded-3xl p-5 ring-1 transition-all duration-300 sm:p-6'

const cardVariants: Record<AnatomyBlock['variant'], string> = {
  raised: `${cardBase} flex h-full flex-col justify-between bg-surface-raised ring-white/8 hover:ring-brand/45`,
  flat: `${cardBase} flex h-full flex-col justify-between bg-surface ring-white/8 hover:ring-brand/45`,
  inline: `${cardBase} flex h-full items-center gap-4 bg-surface-raised ring-white/8 hover:ring-brand/45`,
  wide: `${cardBase} flex h-full items-start gap-4 ring-brand/25 hover:ring-brand/60`,
}

const isStacked = (variant: AnatomyBlock['variant']) =>
  variant === 'raised' || variant === 'flat'

export function Anatomy() {
  return (
    <section
      className={`${anim.section} relative z-10 mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-20 lg:py-28`}
    >
      <SectionHeading index="06" label="Anatomía" title="Características" />

      <div className="mt-10 grid grid-cols-1 gap-3.5 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:[grid-auto-rows:minmax(124px,auto)]">
        <div
          className={`${anim.rise} sm:col-span-2 lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-3`}
        >
          <div className="relative h-full overflow-hidden rounded-3xl bg-surface ring-1 ring-white/8">
            <img
              src={media.anatomy}
              alt="Partes de la tarjeta digital DarteLink"
              className="h-full min-h-[260px] w-full object-cover object-top sm:min-h-[360px] lg:min-h-[400px]"
              loading="lazy"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
              style={{
                background: 'linear-gradient(180deg,rgba(16,16,18,0),#101012)',
              }}
            />
            <p className="absolute bottom-5 left-5 font-display text-[14px] font-semibold text-white sm:bottom-6 sm:left-6 sm:text-[15px]">
              Todo, en una pantalla
            </p>
          </div>
        </div>

        {anatomyBlocks.map((block) => {
          const Icon = iconMap[block.icon]
          const stacked = isStacked(block.variant)
          return (
            <div key={block.icon} className={`${anim.rise} ${block.gridClassName}`}>
              <div
                className={cardVariants[block.variant]}
                style={
                  block.variant === 'wide'
                    ? {
                        background:
                          'linear-gradient(120deg,rgba(41,171,226,.13),rgba(16,16,18,1) 62%)',
                      }
                    : undefined
                }
              >
                <Icon
                  size={20}
                  className={`shrink-0 text-brand ${block.variant === 'wide' ? 'mt-[3px]' : ''}`}
                />
                <p
                  className={`text-[14.5px] leading-relaxed text-muted sm:text-[16px] ${
                    stacked ? 'mt-5 sm:mt-6' : ''
                  }`}
                >
                  {block.segments.map((segment, index) =>
                    segment.strong ? (
                      <strong
                        key={index}
                        className="font-semibold text-white"
                      >
                        {segment.text}
                      </strong>
                    ) : (
                      <span key={index}>{segment.text}</span>
                    ),
                  )}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
