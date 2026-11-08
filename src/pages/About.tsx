import Seo from '../components/layout/Seo'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ContactCta from '../components/sections/ContactCta'
import { independenceNote } from '../data/businesses'

/** Founder photo path inside /public, e.g. '/about/naveen-gunasekara.webp'. Leave undefined until the image exists. */
const founderPhoto: string | undefined = '/about/naveen-gunasekara.webp'

const values = [
  {
    title: 'Clarity',
    text: 'We explain options and decisions in plain language, so you always know what is being done and why.',
  },
  {
    title: 'Practicality',
    text: 'We recommend solutions that fit the business and can be maintained, not the most complicated option.',
  },
  {
    title: 'Honesty',
    text: 'We say what we can and cannot do, and we do not make promises we cannot keep.',
  },
  {
    title: 'Collaboration',
    text: 'We work closely with clients and bring in connected specialists only when a project genuinely needs them.',
  },
  {
    title: 'Continuous learning',
    text: 'We keep learning about tools and methods, and use new ideas only where they help the business.',
  },
]

const approach = [
  {
    title: 'Understand',
    text: 'We learn how the business operates and what it is trying to achieve.',
  },
  {
    title: 'Plan',
    text: 'We define clear requirements and recommend a realistic solution.',
  },
  {
    title: 'Deliver',
    text: 'We build and launch web solutions ourselves, or introduce the right specialist when the scope needs it.',
  },
  {
    title: 'Improve',
    text: 'We review how the solution is working and help it grow with the business.',
  },
]

export function Component() {
  return (
    <>
      <Seo
        title="About Us | Hometeam"
        description="Learn about Hometeam, its business-focused approach to IT consulting and digital solutions, and the independent businesses connected through its founder."
        path="/about"
      />

      {/* Intro */}
      <section aria-labelledby="about-heading">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              as="h1"
              id="about-heading"
              eyebrow="About Hometeam"
              title="An IT consultancy focused on what the business actually needs."
            />
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Hometeam is an IT consultancy and digital solutions company. We help businesses
                understand their needs, choose the right technology and deliver practical web
                solutions.
              </p>
              <p>
                We work with startups, small and medium businesses, entrepreneurs and
                organisations, in Sri Lanka and internationally.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Vision and Mission */}
      <section aria-labelledby="vision-heading" className="bg-brand-50">
        <Container className="py-14 sm:py-20 lg:py-24">
          <h2 id="vision-heading" className="sr-only">
            Vision and mission
          </h2>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="border-t border-brand-100 pt-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                  Our vision
                </p>
                <p className="mt-4 font-heading text-2xl font-semibold leading-snug text-brand-700">
                  Businesses of every size using technology confidently, because it was planned
                  around how they actually work.
                </p>
              </div>
              <div className="border-t border-brand-100 pt-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                  Our mission
                </p>
                <p className="mt-4 font-heading text-2xl font-semibold leading-snug text-brand-700">
                  To give businesses clear technology advice and dependable web solutions, and to
                  connect them with the right specialist when a project needs one.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              id="values-heading"
              eyebrow="Our values"
              title="How we work with clients."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ title, text }) => (
                <li key={title} className="border-t border-line pt-6">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-heading" className="bg-brand-50">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              id="approach-heading"
              eyebrow="Our approach"
              title="A simple, repeatable way of working."
              intro="Every project is different, but the approach stays the same: understand first, then plan, deliver and improve."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map(({ title, text }, index) => (
                <li key={title} className="border-t border-brand-100 pt-6">
                  <p className="text-xs font-semibold tracking-widest text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-heading">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                Our philosophy
              </p>
              <h2
                id="philosophy-heading"
                className="mt-4 text-2xl font-bold leading-snug sm:text-3xl"
              >
                Technology should serve the business, not the other way round.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                The best solution is the one that fits your goals, your team and your budget. We
                would rather recommend something simple that works than something impressive that
                does not.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founder */}
      <section aria-labelledby="founder-heading" className="bg-brand-50">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-panel border border-line bg-white">
              {founderPhoto ? (
                <img
                  src={founderPhoto}
                  alt="Naveen Gunasekara, Founder and Owner of Hometeam"
                  className="size-full object-cover object-top"
                />
              ) : (
                <div className="flex size-full items-center justify-center">
                  <p className="text-sm font-semibold text-muted">Photo to be added</p>
                </div>
              )}
              {!founderPhoto && (
                <span className="absolute left-3 top-3 rounded-sm bg-white px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted ring-1 ring-line">
                  Placeholder
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Our founder
            </p>
            <h2 id="founder-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
              Naveen Gunasekara
            </h2>
            <p className="mt-1 font-semibold text-ink">Founder &amp; Owner, Hometeam</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              A software developer and IT entrepreneur focused on building digital solutions, web
              applications, and technology-driven solutions for modern businesses.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Network note */}
      <section aria-labelledby="network-note-heading">
        <Container className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                Our business network
              </p>
              <h2 id="network-note-heading" className="mt-3 text-2xl font-bold sm:text-3xl">
                Connected through shared founder involvement.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Naveen is also involved, together with a co-founder, in two other businesses:
                DcodeCloud, an engineering and implementation business, and 1H-Home, a creative
                design and video production business. They are separately operated businesses
                that collaborate with Hometeam when a project needs their specialism.
              </p>
              <p className="mt-4 font-semibold text-ink">{independenceNote}</p>
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
