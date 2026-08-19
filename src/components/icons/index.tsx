import type { SVGProps } from 'react'

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'strokeWidth'> & {
  /** Rendered width & height in px. */
  size?: number
  strokeWidth?: number
}

type StrokeIconProps = IconProps

function StrokeIcon({
  size = 20,
  strokeWidth = 1.8,
  children,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export function MailIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon strokeWidth={2} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </StrokeIcon>
  )
}

export function MailOpenIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </StrokeIcon>
  )
}

export function ArrowRightIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon strokeWidth={2.2} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </StrokeIcon>
  )
}

export function CheckIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon strokeWidth={2.6} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </StrokeIcon>
  )
}

export function CloseIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon strokeWidth={2} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </StrokeIcon>
  )
}

export function DeviceIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M8 20v-4" />
      <path d="M16 20v-4" />
    </StrokeIcon>
  )
}

export function PencilIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </StrokeIcon>
  )
}

export function LeafIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </StrokeIcon>
  )
}

export function CheckCircleIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m9 12 2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </StrokeIcon>
  )
}

export function LinkIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.8 1.7" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.8-1.7" />
    </StrokeIcon>
  )
}

export function UserIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </StrokeIcon>
  )
}

export function PhoneIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9Z" />
    </StrokeIcon>
  )
}

export function PinIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </StrokeIcon>
  )
}

export function DownloadIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </StrokeIcon>
  )
}

export function ShareIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4" />
      <path d="m15.4 6.5-6.8 4" />
    </StrokeIcon>
  )
}

export function PaletteIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="10.5" r="2.5" />
      <circle cx="8.5" cy="7.5" r="2.5" />
      <circle cx="6.5" cy="12.5" r="2.5" />
      <path d="M12 22a10 10 0 0 1 0-20 8 8 0 0 1 0 16 4 4 0 0 0 0 4Z" />
    </StrokeIcon>
  )
}

export function HamburgerIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon strokeWidth={1.9} {...props}>
      <path d="M3.5 7h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17h17" />
    </StrokeIcon>
  )
}

export function MenuLinesIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h10" />
    </StrokeIcon>
  )
}

export function InstagramIcon(props: StrokeIconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M17.5 6.5h.01" />
    </StrokeIcon>
  )
}

export function WhatsAppIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.16-1.33-.8-.72-1.34-1.6-1.5-1.9-.15-.3-.01-.47.14-.62.16-.16.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.2-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.06 3.28 5.02 4.46 2.95 1.17 2.95.78 3.48.73.53-.05 1.72-.7 1.96-1.38.25-.68.25-1.26.17-1.38-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.75.46 3.44 1.32 4.93L2 22l5.35-1.4a9.83 9.83 0 0 0 4.69 1.2c5.44 0 9.87-4.43 9.87-9.87S17.48 2 12.04 2Zm0 17.98a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.19-.31a8.09 8.09 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.11-8.1s8.1 3.63 8.1 8.1-3.64 8.11-8.11 8.11Z" />
    </svg>
  )
}
