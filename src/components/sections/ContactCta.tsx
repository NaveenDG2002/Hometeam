import { Mail, Phone } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { contact } from '../../data/site'

export default function ContactCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-brand-700">
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
        <Reveal>
          <h2 id="cta-heading" className="text-3xl font-bold !text-white sm:text-4xl">
            Tell us about your project.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Whether you need a website, a clearer technology plan or advice on where to start,
            send us a short description of what you are trying to achieve. We will reply with
            the sensible next step.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Button to="/contact" variant="inverse" className="w-full">
              Discuss Your Project
            </Button>
            <Button href={contact.whatsappHref} variant="inverseOutline" className="w-full">
              Message on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </Button>
          </div>

          <ul className="mt-8 space-y-3 border-t border-white/25 pt-6 text-white">
            <li className="flex items-center gap-3">
              <Mail aria-hidden="true" className="size-5 shrink-0" />
              <a
                href={`mailto:${contact.email}`}
                className="break-all underline underline-offset-4 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone aria-hidden="true" className="size-5 shrink-0" />
              <a
                href={contact.phoneHref}
                className="underline underline-offset-4 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {contact.phone}
              </a>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
