import { ExternalLink, Mail, MessageCircle, Phone } from 'lucide-react'
import Seo from '../components/layout/Seo'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ContactForm from '../components/sections/ContactForm'
import { contact } from '../data/site'
import { independenceNote } from '../data/businesses'

const linkClass =
  'font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'

export function Component() {
  return (
    <>
      <Seo
        title="Contact | Hometeam"
        description="Discuss your project with Hometeam. Send an enquiry about web solutions, business analysis, IT consulting or technology research."
        path="/contact"
      />

      <section aria-labelledby="contact-heading" className="bg-brand-50">
        <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
          <Reveal>
            <SectionHeading
              as="h1"
              id="contact-heading"
              eyebrow="Contact"
              title="Discuss your project."
              intro="Send us a short description of what you are trying to achieve. We will reply with the sensible next step."
            />

            <ul className="mt-10 space-y-4 border-t border-brand-100 pt-6">
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand-600"
                />
                <div>
                  <p className="text-sm text-muted">WhatsApp</p>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {contact.phone}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <a href={contact.phoneHref} className={linkClass}>
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand-600"
                />
                <div>
                  <p className="text-sm text-muted">LinkedIn</p>
                  <a
                    href={contact.linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Hometeam on LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-8 border-t border-brand-100 pt-6 text-sm leading-relaxed text-muted">
              Hometeam may introduce you to DcodeCloud or 1H-Home when a project needs their
              specialism. {independenceNote}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
