import { Link } from 'react-router'
import Seo from '../components/layout/Seo'

export function Component() {
  return (
    <>
      <Seo
        title="Page not found | Hometeam"
        description="The page you are looking for does not exist."
        noIndex
      />
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block font-semibold text-brand-600 hover:text-brand-700">
          Back to home
        </Link>
      </section>
    </>
  )
}
