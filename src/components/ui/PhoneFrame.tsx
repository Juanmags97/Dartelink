type PhoneFrameProps = {
  src: string
  /** Accessible description of the screen recording. */
  title: string
  /** Tailwind width for the device, e.g. `w-[320px]`. */
  widthClassName?: string
  /** Tailwind height for the screen, e.g. `h-[540px]`. */
  screenHeightClassName?: string
  /** Colour of the ambient glow behind the device. */
  glowColor?: string
  className?: string
}

export function PhoneFrame({
  src,
  title,
  widthClassName = 'w-[320px]',
  screenHeightClassName = 'h-[540px]',
  glowColor = 'rgba(41,171,226,.24)',
  className = '',
}: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto ${widthClassName} ${className}`}>
      <div
        className="pointer-events-none absolute -inset-10 rounded-full blur-[110px]"
        style={{ background: glowColor }}
      />
      <div className="relative rounded-[2.5rem] border border-white/14 bg-surface-raised p-2.5 shadow-device">
        <div className="overflow-hidden rounded-[2rem] bg-black">
          <video
            className={`${screenHeightClassName} w-full object-cover`}
            src={src}
            title={title}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </div>
  )
}
