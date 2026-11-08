import Container from '../ui/Container'
import Button from '../ui/Button'
import HeroGraphic from './HeroGraphic'

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
            IT consultancy and digital solutions
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Building Digital Solutions for Modern Businesses.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Hometeam is an IT consultancy and digital solutions company. We help businesses
            through web development, technology consulting and business-focused digital
            solutions, starting with a clear understanding of what the business actually needs.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" className="w-full sm:w-auto">
              Discuss Your Project
            </Button>
            <Button to="/services" variant="secondary" className="w-full sm:w-auto">
              Explore Our Services
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs sm:max-w-md lg:max-w-none">
          <HeroGraphic />
        </div>
      </Container>
    </section>
  )
}