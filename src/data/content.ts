export const site = {
  name: 'DarteLink',
  logo: '/media/logo-darte-link.webp',
  whatsapp: 'https://wa.me/543876830100',
  instagram: 'https://www.instagram.com/dartelink',
  email: 'mailto:stgrafica@hotmail.com.ar',
  location: 'Salta, Argentina',
} as const

export const media = {
  heroCard: '/media/dartelink-f01-movi.webp',
  anatomy: '/media/caracteristica-principal.webp',
  solutionVideo: '/media/dartelink-vid01.webm',
  conversionVideo: '/media/dartelink-vid02.webm',
  companyPhoto:
    'https://images.pexels.com/photos/36713445/pexels-photo-36713445.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80',
  companyPhotoAlt:
    'Equipo corporativo trabajando de noche — foto de Vitaly Gariev on Pexels',
} as const

export type NavLink = { label: string; href: string; active?: boolean }

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#', active: true },
  { label: 'Demos', href: '#demos' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export const heroStats = [
  { value: '+20', label: 'Años de experiencia' },
  { value: '1 toque', label: 'Para compartir todo' },
] as const

export const marqueeBenefits = [
  'Sin aplicaciones',
  'Sin escribir datos',
  'Sin papel',
  'Sin errores',
  'Edición ilimitada',
  '+20 años de experiencia',
] as const

export type StatCard = {
  to: number
  prefix?: string
  accent?: boolean
  description: string
}

export const statCards: StatCard[] = [
  { to: 20, prefix: '+', description: 'años de experiencia en el rubro gráfico' },
  { to: 3, accent: true, description: 'packs disponibles según tu necesidad' },
  { to: 1, description: 'toque para compartir toda tu info' },
  { to: 0, description: 'apps para instalar, ni vos ni tu cliente' },
]

export const problems = [
  'Perdés contactos por no tener tu info lista',
  'Entregás tarjetas que nadie guarda',
  'Tu información queda desactualizada',
  'No sabés quién se interesó en tu negocio',
] as const

export const solutionFeatures = [
  'Datos de contacto',
  'WhatsApp directo',
  'Redes sociales',
  'Ubicación',
  'Productos o servicios',
] as const

export type NfcFeatureIcon = 'device' | 'pencil' | 'leaf' | 'checkCircle'

export const nfcFeatures: {
  icon: NfcFeatureIcon
  title: string
  description: string
}[] = [
  {
    icon: 'device',
    title: 'Sin aplicaciones',
    description: 'Ni vos ni tu cliente descargan nada.',
  },
  {
    icon: 'pencil',
    title: 'Sin escribir datos',
    description: 'Se cargan solos en el celular.',
  },
  {
    icon: 'leaf',
    title: 'Sin papel',
    description: 'Una sola tarjeta, para siempre.',
  },
  {
    icon: 'checkCircle',
    title: 'Sin errores',
    description: 'Nunca más un número mal dictado.',
  },
]

export type PositioningWord = {
  text: string
  style: 'solid' | 'outline' | 'brand'
}

export const positioningWords: PositioningWord[] = [
  { text: 'Destacar', style: 'solid' },
  { text: 'Conectar', style: 'outline' },
  { text: 'Convertir', style: 'brand' },
]

export type AnatomyIcon =
  | 'link'
  | 'user'
  | 'phone'
  | 'pin'
  | 'download'
  | 'share'
  | 'palette'
  | 'menu'

export type AnatomySegment = { text: string; strong?: boolean }

export type AnatomyBlock = {
  icon: AnatomyIcon
  segments: AnatomySegment[]
  /** Grid placement for the bento layout. */
  gridClassName: string
  /** Card surface + inner layout variant. */
  variant: 'raised' | 'flat' | 'inline' | 'wide'
}

export const anatomyBlocks: AnatomyBlock[] = [
  {
    icon: 'link',
    segments: [
      { text: 'Espacio para ' },
      { text: 'Logo', strong: true },
      { text: ' con enlace a tu página Web' },
    ],
    gridClassName: 'lg:col-start-1 lg:col-span-5 lg:row-start-1',
    variant: 'raised',
  },
  {
    icon: 'user',
    segments: [
      { text: 'Datos importantes', strong: true },
      { text: ' (Nombre y puesto)' },
    ],
    gridClassName: 'lg:col-start-6 lg:col-span-3 lg:row-start-1',
    variant: 'flat',
  },
  {
    icon: 'phone',
    segments: [
      { text: 'Enlaces directos de ' },
      { text: 'contacto', strong: true },
    ],
    gridClassName: 'lg:col-start-1 lg:col-span-4 lg:row-start-2',
    variant: 'flat',
  },
  {
    icon: 'pin',
    segments: [
      { text: 'Dirección', strong: true },
      { text: ' postal y ' },
      { text: 'teléfono', strong: true },
      { text: ' fijo' },
    ],
    gridClassName: 'lg:col-start-5 lg:col-span-4 lg:row-start-2',
    variant: 'raised',
  },
  {
    icon: 'download',
    segments: [
      { text: 'Iconos de ' },
      { text: 'descargar', strong: true },
      { text: ' tarjeta' },
    ],
    gridClassName: 'lg:col-start-1 lg:col-span-3 lg:row-start-3',
    variant: 'flat',
  },
  {
    icon: 'share',
    segments: [
      { text: 'Botón desplegable de ' },
      { text: 'compartir', strong: true },
      { text: ' tarjeta' },
    ],
    gridClassName: 'lg:col-start-4 lg:col-span-5 lg:row-start-3',
    variant: 'flat',
  },
  {
    icon: 'palette',
    segments: [{ text: 'Fondo', strong: true }, { text: ' modificable' }],
    gridClassName: 'lg:col-start-1 lg:col-span-4 lg:row-start-4',
    variant: 'inline',
  },
  {
    icon: 'menu',
    segments: [
      { text: 'Menú: ' },
      { text: 'Descripción', strong: true },
      { text: ', ' },
      { text: 'Galería', strong: true },
      { text: ' (fotos y videos), ' },
      { text: 'Formulario de contacto', strong: true },
      { text: ' y ' },
      { text: 'Geolocalización/Horario', strong: true },
    ],
    gridClassName: 'sm:col-span-2 lg:col-start-5 lg:col-span-8 lg:row-start-4',
    variant: 'wide',
  },
]

export const advantages = [
  {
    index: '/01',
    title: 'Causa impacto',
    description: 'Lograrás una imagen inolvidable desde el primer momento',
  },
  {
    index: '/02',
    title: 'Conéctate',
    description:
      'Estarás todo el tiempo a la mano de quien te necesite en cualquier dispositivo',
  },
  {
    index: '/03',
    title: 'Posiciónate',
    description:
      'Da a conocer tu lado innovador, y muéstrate como líder entre tus competidores',
  },
  {
    index: '/04',
    title: 'Comparte fácil',
    description:
      'Envía tus datos a clientes potenciales sin tener que estar en un lugar específico',
  },
  {
    index: '/05',
    title: 'Renueva ya',
    description:
      'Cambia los datos de tu tarjeta en cualquier momento y además en todas las ya entregadas',
  },
  {
    index: '/06',
    title: 'Ahorra y cuida',
    description:
      'Sin sucesivas impresiones y cuidando el medioambiente sin límites de unidades',
  },
] as const

export type Pack = {
  name: string
  period: string
  featured?: boolean
  items: string[]
}

export const packs: Pack[] = [
  {
    name: 'Pack Profesional',
    period: 'Anual',
    items: [
      'Logo / Foto / Datos / Fondo editable',
      'Iconos de contacto inmediato (WhatsApp / Redes sociales / Email / Teléfono)',
      'Desplegable con iconos de compartir tarjeta',
      'Iconos de guardar tarjeta en dispositivo',
      'Menú de información (Descripción / Galería / Formulario de contacto / Geolocalización)',
    ],
  },
  {
    name: 'Pack Empresa',
    period: 'Anual',
    featured: true,
    items: [
      'Logo / Foto / Datos - Fondo editable',
      'Icono de contacto inmediato (WhatsApp / Email / Teléfono)',
      'Desplegable con iconos de compartir tarjeta',
      'Iconos de guardar tarjeta y código QR',
      'Menú de información (Descripción / Galería de fotos y videos / Geolocalización)',
    ],
  },
  {
    name: 'Pack Eventos',
    period: '2 meses',
    items: [
      'Logo/Evento - Fondo editable',
      'Icono de contacto para confirmar asistencia (WhatsApp)',
      'Desplegable con iconos de compartir tarjeta (WhatsApp / Email)',
      'Iconos de guardar tarjeta y código QR',
      'Menú de información (Descripción con día y hora / Galería / Geolocalización)',
    ],
  },
]

export const footerColumns = [
  {
    title: 'Productos',
    links: [
      { label: 'Pack Profesional', href: '#demos' },
      { label: 'Pack Empresa', href: '#demos' },
      { label: 'Pack Eventos', href: '#demos' },
      { label: 'Demos', href: '#demos' },
    ],
  },
  {
    title: 'DarteLink',
    links: [
      { label: 'Inicio', href: '#' },
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
] as const
