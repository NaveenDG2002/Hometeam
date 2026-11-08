import hometeamLogo from '../assets/logos/hometeam.webp'
import dcodecloudLogo from '../assets/logos/dcodecloud.webp'
import oneHHomeLogo from '../assets/logos/1h-home.webp'

export type Business = {
  id: string
  name: string
  /** Short role label shown above the description. */
  role: string
  description: string
  specialisations: string[]
  logo: string
  logoAlt: string
  logoWidth: number
  logoHeight: number
  /** Tailwind height class for the logo inside its panel. */
  logoClass: string
  /** Accent colour, used only inside this business's own panel. */
  accent: string
  /** Where the Explore button goes. Internal path or external URL. */
  href: string
  external: boolean
  cta: string
}

export const independenceNote =
  'Each business operates independently and has its own agreements, pricing and responsibilities.'

export const businesses: Business[] = [
  {
    id: 'hometeam',
    name: 'Hometeam',
    role: 'IT consultancy and digital solutions',
    description:
      'Hometeam advises, plans and delivers web solutions. It is usually the first point of contact for a project.',
    specialisations: [
      'Business analysis',
      'IT consulting and technology research',
      'Websites and web solutions',
      'Solution planning',
    ],
    logo: hometeamLogo,
    logoAlt: 'Hometeam, Integrated IT Solutions',
    logoWidth: 984,
    logoHeight: 311,
    logoClass: 'h-14',
    accent: '#0868A8',
    href: '/services',
    external: false,
    cta: 'Explore Hometeam services',
  },
  {
    id: 'dcodecloud',
    name: 'DcodeCloud',
    role: 'Engineering and implementation',
    description:
      'IT Solutions | AI Powered | SaaS Product. A separate software business where development and solution engineering is carried out.',
    specialisations: [
      'Custom software and complex web applications',
      'ERP and Zoho implementation (Creator, Deluge, CRM, Books)',
      'Integrations and automation',
      'SaaS and AI products',
    ],
    logo: dcodecloudLogo,
    logoAlt: 'DcodeCloud',
    logoWidth: 1149,
    logoHeight: 255,
    logoClass: 'h-11',
    accent: '#C81818',
    href: 'https://dcode-cloud-website.vercel.app/',
    external: true,
    cta: 'Explore DcodeCloud',
  },
  {
    id: '1h-home',
    name: '1H-Home',
    role: 'Creative design and video production',
    description:
      'A separate creative business producing visual content, from design and video to motion and music visuals.',
    specialisations: [
      'Graphic design and creative branding',
      'Video editing',
      'Motion graphics and animation',
      'Lyric videos and music visuals',
    ],
    logo: oneHHomeLogo,
    logoAlt: '1H-Home',
    logoWidth: 640,
    logoHeight: 640,
    logoClass: 'h-20',
    accent: '#00B4D8',
    href: 'https://1hhome.vercel.app/',
    external: true,
    cta: 'Explore 1H-Home',
  },
]
