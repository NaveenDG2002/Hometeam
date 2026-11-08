import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { businesses, independenceNote } from '../../data/businesses'

export default function BusinessEcosystem() {
  return (
    <section aria-labelledby="ecosystem-heading" className="border-t border-line">
      <Container className="py-14 sm:py-20 lg:py-28">
        <Reveal>
          <SectionHeading
            id="ecosystem-heading"
            eyebrow="Our business network"
            title="Three independent businesses, one collaborative network."
            intro="Hometeam, DcodeCloud and 1H-Home are separately operated businesses with shared founder involvement. When a project needs a specialism, Hometeam may introduce you to the right one."
            align="center"
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {businesses.map((business, index) => (
            <li key={business.id} className="flex">
              <Reveal delay={index * 0.1} className="flex w-full">
                <article
                  style={{ borderTopColor: business.accent }}
                  className="flex w-full flex-col rounded-panel border border-t-4 border-line bg-white p-7 transition-shadow hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-24 items-center">
                    <img
                      src={business.logo}
                      alt={business.logoAlt}
                      width={business.logoWidth}
                      height={business.logoHeight}
                      loading="lazy"
                      className={`${business.logoClass} w-auto max-w-full`}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{business.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600">{business.role}</p>
                  <p className="mt-4 leading-relaxed text-muted">{business.description}</p>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted">
                    Specialisation
                  </p>
                  <ul className="mt-3 space-y-2 border-t border-line pt-3 text-sm text-ink">
                    {business.specialisations.map((item) => (
                      <li key={item} className="border-b border-line pb-2">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Button
                      variant="secondary"
                      className="w-full"
                      {...(business.external ? { href: business.href } : { to: business.href })}
                    >
                      {business.cta}
                      {business.external && (
                        <span className="sr-only"> (opens in a new tab)</span>
                      )}
                    </Button>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="font-semibold text-ink">{independenceNote}</p>
            <div className="mt-3">
              <Button to="/network" variant="link">
                How the businesses work together
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
