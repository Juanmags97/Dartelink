import type { ComponentType } from 'react'
import { anim } from '../../animation/classNames'
import { SectionHeading } from '../ui/SectionHeading'
import {
  CheckCircleIcon,
  DeviceIcon,
  LeafIcon,
  PencilIcon,
  type IconProps,
} from '../icons'
import { nfcFeatures, type NfcFeatureIcon } from '../../data/content'

const iconMap: Record<NfcFeatureIcon, ComponentType<IconProps>> = {
  device: DeviceIcon,
  pencil: PencilIcon,
  leaf: LeafIcon,
  checkCircle: CheckCircleIcon,
}

export function NfcTech() {
  return (
    <section
      className={`${anim.section} relative z-10 overflow-hidden py-16 sm:py-20 lg:py-28`}
    >
      <div
        className={`${anim.halo} pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] lg:h-[560px] lg:w-[900px] lg:blur-[130px]`}
        style={{ background: 'rgba(41,171,226,.26)' }}
      />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="03"
              label="Lo nuevo"
              titleClassName="text-[40px] leading-none sm:text-[48px] lg:text-[56px]"
              title={
                <>
                  Tecnología
                  <br />
                  NFC
                </>
              }
            />
          </div>
          <div className="flex items-end lg:col-span-6">
            <p
              className={`${anim.rise} max-w-[480px] text-[15.5px] leading-[1.7] text-muted sm:text-[18px] sm:leading-[1.75]`}
            >
              Compartir tus datos en un sólo toque. Acercás la tarjeta NFC y se abre tu
              perfil en el celular al instante.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {nfcFeatures.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div key={feature.title} className={anim.rise}>
                <div className="h-full rounded-3xl bg-surface p-6 ring-1 ring-white/8 transition-all duration-300 hover:ring-brand/50 sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand/10 ring-1 ring-brand/22 sm:h-12 sm:w-12">
                    <Icon size={22} className="text-brand" />
                  </span>
                  <p className="mt-6 font-display text-[18px] font-semibold text-white sm:mt-8 sm:text-[19px]">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-subtle">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
