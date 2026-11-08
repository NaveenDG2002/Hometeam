import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { services } from '../../data/services'

export default function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading" className="bg-brand-50">
      <Container className="py-14 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="What we do"
            title="Services for businesses planning their next digital step."
            intro="Hometeam advises, plans and delivers web solutions. When a project needs deeper software engineering, we introduce a specialist business that handles it under its own agreement."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-12 grid border-t border-brand-100 lg:grid-cols-2">
            {services.map(({ id, title, icon: Icon, summary, deliveredBy }, index) => (
              <li
                key={id}
                className="border-b border-brand-100 py-7 lg:odd:pr-10 lg:even:pl-10"
              >
                <div className="flex gap-4">
                  <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-brand-600" />
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-muted">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{summary}</p>
                    <p className="mt-3 text-sm font-semibold text-brand-600">{deliveredBy}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              Where a service involves DcodeCloud, it is a separate business with its own
              agreement, pricing and responsibilities.
            </p>
            <Button to="/services" variant="link">
              See all services
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
