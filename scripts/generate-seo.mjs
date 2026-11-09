// Generates public/sitemap.xml and public/robots.txt from VITE_SITE_URL.
// Runs automatically before every build (see "prebuild" in package.json).
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

try {
  process.loadEnvFile()
} catch {
  // No .env file (for example on the build server). Variables come from the environment.
}

const routes = ['/', '/about', '/services', '/network', '/contact']

let siteUrl = process.env.VITE_SITE_URL?.trim().replace(/\/+$/, '')
if (siteUrl && !/^https?:\/\//.test(siteUrl)) {
  console.warn(`[seo] VITE_SITE_URL must start with http:// or https:// (got "${siteUrl}"). Ignoring it.`)
  siteUrl = undefined
}

const publicDir = resolve(process.cwd(), 'public')
mkdirSync(publicDir, { recursive: true })

if (siteUrl) {
  const today = new Date().toISOString().slice(0, 10)
  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${siteUrl}${route === '/' ? '/' : route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
    )
    .join('\n')

  writeFileSync(
    resolve(publicDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
  writeFileSync(
    resolve(publicDir, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  )
  console.log(`[seo] Wrote sitemap.xml and robots.txt for ${siteUrl}`)
} else {
  rmSync(resolve(publicDir, 'sitemap.xml'), { force: true })
  writeFileSync(resolve(publicDir, 'robots.txt'), 'User-agent: *\nAllow: /\n')
  console.warn(
    '[seo] VITE_SITE_URL is not set, so no sitemap was written and robots.txt has no Sitemap line. Set it before the final deploy.',
  )
}
