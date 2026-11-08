import Seo from '../components/layout/Seo'

export function Component() {
  return (
    <>
      <Seo
        title="About Us | Hometeam"
        description="Learn about Hometeam, its business-focused approach to IT consulting and digital solutions, and the independent businesses connected through its founder."
        path="/about"
      />
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-muted">Placeholder page. Content comes in a later stage.</p>
      </section>
    </>
  )
}
