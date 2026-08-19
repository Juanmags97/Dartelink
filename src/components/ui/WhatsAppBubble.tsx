import { WhatsAppIcon } from '../icons'
import { site } from '../../data/content'

export function WhatsAppBubble() {
  return (
    <a
      href={site.whatsapp}
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid h-[54px] w-[54px] place-items-center rounded-full bg-whatsapp shadow-whatsapp transition-colors hover:bg-whatsapp-light sm:bottom-8 sm:right-8 sm:h-[60px] sm:w-[60px]"
    >
      <WhatsAppIcon size={26} className="text-on-brand sm:hidden" />
      <WhatsAppIcon size={30} className="hidden text-on-brand sm:block" />
    </a>
  )
}
