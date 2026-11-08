import { Puzzle, RefreshCw, Target, Users, Wrench } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

const reasons = [
  {
    icon: Target,
    title: 'Business-focused thinking',
    text: 'We start with your goals, customers and budget, then choose technology to suit them, not the other way round.',
  },
  {
    icon: Wrench,
    title: 'Practical technical solutions',
    text: 'We recommend what will work and can be maintained, rather than the most complicated option.',
  },
  {
    icon: Puzzle,
    title: 'Creative problem-solving',
    text: 'Every business has different constraints. We look for sensible approaches that fit yours instead of forcing a template.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    text: 'We work closely with you and, when a project needs it, bring in connected specialists, with a clear agreement for each.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous innovation',
    text: 'We keep learning about new tools and methods, and apply them only where they genuinely help the business.',
  },
]

export default function WhyHometeam() {
  return (
    <section aria-labelledby="why-heading" className="bg-brand-50">
      <Container className="py-14 sm:py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            id="why-heading"
            eyebrow="Why Hometeam"
            title="A practical, business-first approach to technology."
            intro="Good digital work starts with understanding the business. This is how we approach every project."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <li key={title} className="border-t border-brand-100 pt-6">
                <Icon aria-hidden="true" className="size-7 text-brand-600" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </li>
            ))}

            <li className="flex flex-col justify-center border-t border-brand-100 pt-6">
              <p className="font-heading text-lg font-semibold text-brand-700">
                Have a project in mind?
              </p>
              <p className="mt-2 leading-relaxed text-muted">
                Tell us what you are trying to achieve and we will help you work out the next step.
              </p>
              <div className="mt-5">
                <Button to="/contact" className="w-full sm:w-auto">
                  Discuss Your Project
                </Button>
              </div>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
