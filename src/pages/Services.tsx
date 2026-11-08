import Seo from '../components/layout/Seo'

export function Component() {
  return (
    <>
      <Seo
        title="Services | Hometeam"
        description="Business analysis, IT consulting, technology research and web solutions from Hometeam, with engineering support from connected specialists when a project needs it."
        path="/services"
      />
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-4 text-muted">Placeholder page. Content comes in a later stage.</p>
      </section>
    </>
  )
}
