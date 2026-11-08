export type PortfolioProject = {
  id: string
  name: string
  /** Label shown on the card. Keep the relationship wording exact. */
  label: string
  /** Optional line about the client. */
  clientNote?: string
  description: string
  services: string[]
  /** Live website. */
  url: string
  /** Screenshot path inside /public, e.g. '/portfolio/1h-home.webp'. Leave undefined until the image exists. */
  image?: string
  imageAlt: string
  /** While true, the card shows a visible "Placeholder" tag. Set to false once the entry is final. */
  placeholder: boolean
}

/** Services Hometeam actually delivered. Confirmed by the owner. Do not add others without confirmation. */
const deliveredServices = ['UI/UX Design', 'React Development', 'Website Deployment']

export const portfolio: PortfolioProject[] = [
  {
    id: '1h-home',
    name: '1H-Home website',
    label: 'Website built by Hometeam',
    clientNote: 'Client: 1H-Home, a separate business',
    description:
      'A website for 1H-Home, a creative design and video production business, designed and built by Hometeam.',
    services: deliveredServices,
    url: 'https://1hhome.vercel.app/',
    image: '/portfolio/1h-home.webp',
    imageAlt: 'Screenshot of the 1H-Home website',
    placeholder: false,
  },
  {
    id: 'dcodecloud',
    name: 'DcodeCloud website',
    label: 'Website built by Hometeam',
    clientNote: 'Client: DcodeCloud, a separate business',
    description:
      'A website for DcodeCloud, a software engineering business, designed and built by Hometeam.',
    services: deliveredServices,
    url: 'https://dcode-cloud-website.vercel.app/',
    image: '/portfolio/dcodecloud.webp',
    imageAlt: 'Screenshot of the DcodeCloud website',
    placeholder: false,
  },
  {
    id: 'thenu-portfolio',
    name: 'Thenu Rajapakshe portfolio website',
    label: 'Portfolio website development',
    description:
      'A personal portfolio website for an architecture undergraduate, designed and built by Hometeam.',
    services: deliveredServices,
    url: 'https://architect-portfolio-thenu.vercel.app/',
    image: '/portfolio/thenu-portfolio.webp',
    imageAlt: 'Screenshot of the Thenu Rajapakshe portfolio website',
    placeholder: false,
  },
  {
    id: 'vertex-360',
    name: 'Vertex 360 website',
    label: 'Previous project',
    description: 'A previous website development project.',
    services: deliveredServices,
    url: 'https://vertex360-two.vercel.app/',
    image: '/portfolio/vertex-360.webp',
    imageAlt: 'Screenshot of the Vertex 360 website',
    placeholder: false,
  },
]
