type SeoProps = {
  title: string
  description: string
  path?: string
  noIndex?: boolean
}

const SITE_NAME = 'Hometeam'
const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')

export default function Seo({ title, description, path = '/', noIndex = false }: SeoProps) {
  const url = siteUrl ? `${siteUrl}${path}` : undefined

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {siteUrl && <meta property="og:image" content={`${siteUrl}/og-image.png`} />}
      {siteUrl && <meta name="twitter:card" content="summary_large_image" />}
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      {noIndex && <meta name="robots" content="noindex" />}
    </>
  )
}
