import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { portfolio } from '../../data/portfolio'

export default function OurWork() {
  return (
    <section aria-labelledby="work-heading">
      <Container className="py-14 sm:py-20 lg:py-28">
        <Reveal>
          <SectionHeading
            id="work-heading"
            eyebrow="Our work"
            title="Websites designed, built and deployed by Hometeam."
            intro="A selection of website projects delivered by Hometeam. Where a client is one of the connected businesses, it is a separate business and the website was built for it as a client project."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="region"
            aria-label="Portfolio projects"
            tabIndex={0}
            className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0"
          >
            {portfolio.map((project) => (
              <article
                key={project.id}
                className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-panel border border-line bg-white sm:w-[70%] md:w-auto"
              >
                <div className="relative aspect-[16/10] bg-brand-50">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="size-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center border-b border-line">
                      <p className="text-sm font-semibold text-muted">Screenshot to be added</p>
                    </div>
                  )}
                  {project.placeholder && (
                    <span className="absolute left-3 top-3 rounded-sm bg-white px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted ring-1 ring-line">
                      Placeholder
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    {project.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
                  {project.clientNote && (
                    <p className="mt-1 text-sm text-muted">{project.clientNote}</p>
                  )}
                  <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-sm border border-line px-2.5 py-1 text-xs font-semibold text-ink"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Button href={project.url} variant="link">
                      Visit live website
                      <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
