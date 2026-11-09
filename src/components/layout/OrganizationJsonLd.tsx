import { contact, siteName } from '../../data/site'

const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')

export default function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    description:
      'Hometeam is an IT consultancy and digital solutions company helping businesses with business analysis, technology consulting and web solutions.',
    ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/icon-512.png` } : {}),
    email: contact.email,
    telephone: contact.phone,
    sameAs: [contact.linkedinHref],
    founder: {
      '@type': 'Person',
      name: 'Naveen Gunasekara',
      jobTitle: 'Founder & Owner',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
