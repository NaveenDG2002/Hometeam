import { ClipboardList, Compass, Globe } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const pillars = [
  {
    icon: ClipboardList,
    title: 'Business analysis and requirements',
    text: 'We clarify what the business needs before anything is built, so the solution fits the problem.',
  },
  {
    icon: Compass,
    title: 'IT consulting and technology research',
    text: 'Practical guidance on tools, platforms and approach, based on research rather than guesswork.',
  },
  {
    icon: Globe,
    title: 'Websites and web solutions',
    text: 'Clear, well-built web solutions designed around how your business and your customers work.',
  },
]

export default function Introduction() {
  return (
    <section aria-labelledby="intro-heading" className="border-t border-line">
      <Container className="grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-28">
        <Reveal>
          <SectionHeading
            id="intro-heading"
            eyebrow="Who we are"
            title="Technology advice and web solutions, grounded in how your business works."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Hometeam is an IT consultancy and digital solutions company. We start by
              understanding the business: how it operates, where the friction is, and what a
              better setup would need to achieve.
            </p>
            <p>
              From there we help clients choose the right digital solution, plan it properly,
              and deliver web solutions ourselves. When a project needs deeper software
              engineering, such as ERP or custom systems, we can introduce DcodeCloud, an
              independent specialist software business.
            </p>
          </div>

          <ul className="mt-10 border-t border-line">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 border-b border-line py-5">
                <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-brand-600" />
                <div>
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}