import Seo from '../components/layout/Seo'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ContactCta from '../components/sections/ContactCta'
import { businesses, independenceNote } from '../data/businesses'

const steps = [
  {
    title: 'Start with Hometeam',
    text: 'You tell us about the project. Hometeam does the business analysis and recommends the right solution.',
  },
  {
    title: 'An introduction, if needed',
    text: 'If the project needs ERP, Zoho or custom engineering, Hometeam introduces DcodeCloud. If it needs branding or video, Hometeam introduces 1H-Home.',
  },
  {
    title: 'A separate agreement',
    text: 'You agree terms with each business directly. Each has its own agreement, pricing and responsibilities.',
  },
]

export function Component() {
  return (
    <>
      <Seo
        title="Our Business Network | Hometeam"
        description="Hometeam, DcodeCloud and 1H-Home are independent businesses with shared founder involvement. Explore each business and what it specialises in."
        path="/network"
      />

      {/* Intro */}
      <section aria-labelledby="network-heading">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              as="h1"
              id="network-heading"
              eyebrow="Business network"
              title="Three independent businesses, one collaborative network."
              intro="Hometeam, DcodeCloud and 1H-Home are separately operated businesses with shared founder involvement and a collaborative relationship."
            />
            <p className="mt-6 max-w-2xl border-l-2 border-brand-700 pl-4 text-lg font-semibold text-ink">
              {independenceNote}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The three businesses */}
      <section aria-label="The businesses" className="border-t border-line">
        <Container>
          {businesses.map((business) => (
            <Reveal key={business.id}>
              <article
                aria-labelledby={`${business.id}-name`}
                className="grid gap-8 border-b border-line py-12 last:border-b-0 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
              >
                <div
                  style={{ borderTopColor: business.accent }}
                  className="flex min-h-48 items-center justify-center rounded-panel border border-t-4 border-line bg-white p-8"
                >
                  <img
                    src={business.logo}
                    alt={business.logoAlt}
                    width={business.logoWidth}
                    height={business.logoHeight}
                    loading="lazy"
                    className={`${business.logoClass} w-auto max-w-full`}
                  />
                </div>

                <div>
                  <h2 id={`${business.id}-name`} className="text-2xl font-bold sm:text-3xl">
                    {business.name}
                  </h2>
                  <p className="mt-1 font-semibold text-brand-600">{business.role}</p>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{business.description}</p>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted">
                    Specialisation
                  </p>
                  <ul className="mt-3 border-t border-line">
                    {business.specialisations.map((item) => (
                      <li key={item} className="border-b border-line py-3 text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      variant="secondary"
                      className="w-full sm:w-auto"
                      {...(business.external ? { href: business.href } : { to: business.href })}
                    >
                      {business.cta}
                      {business.external && (
                        <span className="sr-only"> (opens in a new tab)</span>
                      )}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* How we work together */}
      <section aria-labelledby="together-heading" className="bg-brand-50">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              id="together-heading"
              eyebrow="How we work together"
              title="One conversation to start, the right specialist when needed."
              intro="Hometeam may introduce you to DcodeCloud or 1H-Home when a project needs their specialism. Each business has its own agreement, pricing and responsibilities."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-3">
              {steps.map(({ title, text }, index) => (
                <li key={title} className="border-t border-brand-100 pt-6">
                  <p className="text-xs font-semibold tracking-widest text-muted">
                    STEP {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Shared founder involvement */}
      <section aria-labelledby="founder-note-heading">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                Shared founder involvement
              </p>
              <h2 id="founder-note-heading" className="mt-3 text-2xl font-bold sm:text-3xl">
                Connected through people, not ownership.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Naveen Gunasekara founded and owns Hometeam. He is also involved, together with a
                co-founder, in DcodeCloud and in 1H-Home. That shared involvement is why the
                businesses collaborate easily. It does not make them one company: Hometeam does
                not own DcodeCloud or 1H-Home, and each one is run as its own business.
              </p>
              <p className="mt-4 font-semibold text-ink">{independenceNote}</p>
              <div className="mt-6">
                <Button to="/about" variant="link">
                  About Hometeam and its founder
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactCta />
    </>
  )
}
