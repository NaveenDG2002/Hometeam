import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { navItems } from '../../data/site'
import logo from '../../assets/logos/hometeam.webp'

export default function Navbar() {
  const { pathname } = useLocation()
  // The menu counts as open only on the page where it was opened,
  // so it closes by itself after navigation.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname
  const toggleRef = useRef<HTMLButtonElement>(null)

  // While the menu is open: Escape closes it, and page scrolling is locked.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenOn(null)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // If the window grows to desktop width while the menu is open, close it.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenOn(null)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `border-b-2 py-1 text-[15px] font-semibold transition-colors ${
      isActive
        ? 'border-brand-700 text-brand-700'
        : 'border-transparent text-ink hover:text-brand-600'
    }`

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `block border-b border-line py-4 font-heading text-xl font-semibold ${
      isActive ? 'text-brand-700' : 'text-ink'
    }`

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <Container className="flex h-[72px] items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Hometeam, Integrated IT Solutions"
              width={984}
              height={311}
              className="h-11 w-auto"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={desktopLink}>
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" className="ml-2 !py-2.5">
              Discuss Your Project
            </Button>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpenOn(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-11 items-center justify-center rounded-sm text-brand-700 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 lg:hidden"
          >
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </Container>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-30 overflow-y-auto bg-white pt-[72px] lg:hidden">
          <Container className="flex flex-col py-6">
            <nav aria-label="Mobile">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} className={mobileLink}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Button to="/contact" className="mt-8 w-full">
              Discuss Your Project
            </Button>
          </Container>
        </div>
      )}
    </>
  )
}