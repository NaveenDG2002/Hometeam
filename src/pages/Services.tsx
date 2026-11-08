import Seo from '../components/layout/Seo'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ContactCta from '../components/sections/ContactCta'
import { services } from '../data/services'
import { independenceNote } from '../data/businesses'

const details = [
  { key: 'problem', label: 'The problem it solves' },
  { key: 'audience', label: 'Who needs it' },
  { key: 'approach', label: 'How we approach it' },
] as const

export function Component() {
  return (
    <>
      <Seo
        title="Services | Hometeam"
        description="Business analysis, IT consulting, technology research and web solutions from Hometeam, with engineering support from connected specialists when a project needs it."
        path="/services"
      />

      {/* Intro */}
      <section aria-labelledby="services-page-heading">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              as="h1"
              id="services-page-heading"
              eyebrow="Our services"
              title="Technology advice and web solutions for growing businesses."
              intro="Hometeam advises, plans and delivers web solutions. When a project needs deeper software engineering, we introduce a specialist business that handles it under its own agreement."
            />

            <nav aria-label="Services on this page" className="mt-10">
              <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
                {services.map(({ id, title }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="font-semibold text-brand-600 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </Container>
      </section>

      {/* The six services */}
      <section aria-label="Service details" className="border-t border-line">
        <Container>
          {services.map((service, index) => {
            const { id, title, icon: Icon, summary, deliveredBy } = service
            return (
              <Reveal key={id}>
                <article
                  id={id}
                  aria-labelledby={`${id}-title`}
                  className="grid scroll-mt-24 gap-8 border-b border-line py-12 last:border-b-0 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon aria-hidden="true" className="size-7 text-brand-600" />
                      <p className="text-xs font-semibold tracking-widest text-muted">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                    <h2 id={`${id}-title`} className="mt-4 text-2xl font-bold sm:text-3xl">
                      {title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted">{summary}</p>
                    <p className="mt-5 inline-block border-t border-brand-100 pt-3 text-sm font-semibold text-brand-600">
                      {deliveredBy}
                    </p>
                  </div>

                  <dl className="border-t border-line">
                    {details.map(({ key, label }) => (
                      <div key={key} className="border-b border-line py-5">
                        <dt className="text-xs font-semibold uppercase tracking-widest text-muted">
                          {label}
                        </dt>
                        <dd className="mt-2 leading-relaxed text-ink">{service[key]}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            )
          })}
        </Container>
      </section>

      {/* How delivery works */}
      <section aria-labelledby="delivery-heading" className="bg-brand-50">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              id="delivery-heading"
              eyebrow="How delivery works"
              title="Who does what on a project."
              intro="Most projects start with a conversation with Hometeam. From there, the work is delivered by whichever business is right for the scope."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="border-t border-brand-100 pt-6">
                <h3 className="text-lg font-semibold">Hometeam</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Advises, plans and delivers web solutions, and is usually your first point of
                  contact. Hometeam covers business analysis, IT consulting, technology research,
                  solution planning, and websites and straightforward web solutions.
                </p>
              </div>
              <div className="border-t border-brand-100 pt-6">
                <h3 className="text-lg font-semibold">DcodeCloud</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  A separate specialist software business that engineers and implements the
                  technical work. This includes custom software, complex web applications, ERP and
                  Zoho implementation (Creator, Deluge, CRM and Books), integrations, automation,
                  and SaaS and AI products.
                </p>
              </div>
            </div>

            <div className="mt-10 max-w-3xl">
              <p className="leading-relaxed text-muted">
                Hometeam may introduce you to DcodeCloud or 1H-Home when a project needs their
                specialism. 1H-Home is a separate creative business for design and video
                production.
              </p>
              <p className="mt-3 font-semibold text-ink">{independenceNote}</p>
              <div className="mt-6">
                <Button to="/network" variant="link">
                  Explore the business network
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
