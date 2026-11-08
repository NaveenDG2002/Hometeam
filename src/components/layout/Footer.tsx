import { Link } from 'react-router'
import Container from '../ui/Container'
import { contact, navItems } from '../../data/site'
import { independenceNote } from '../../data/businesses'
import logo from '../../assets/logos/hometeam.webp'

const footerLinks = [...navItems, { label: 'Contact', to: '/contact' }]

const linkClass =
  'text-muted hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'

const columnTitle = 'text-sm font-semibold uppercase tracking-widest !text-ink'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-16">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Hometeam, Integrated IT Solutions"
                width={984}
                height={311}
                loading="lazy"
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-muted">
              Hometeam is an IT consultancy and digital solutions company helping businesses
              plan and build the right technology.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className={columnTitle}>Explore</h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnTitle}>Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className={linkClass}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={contact.linkedinHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <h2 className={columnTitle}>Connected businesses</h2>
          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-8">
            <li>
              <a
                href="https://dcode-cloud-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} font-semibold`}
              >
                DcodeCloud
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href="https://1hhome.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} font-semibold`}
              >
                1H-Home
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            DcodeCloud and 1H-Home are separately operated businesses with shared founder
            involvement. {independenceNote}
          </p>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
          &copy; {new Date().getFullYear()} Hometeam. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
