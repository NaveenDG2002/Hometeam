import { Link, Outlet, ScrollRestoration } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Temporary navigation, replaced by the real Navbar in the next stage */}
      <nav aria-label="Temporary" className="flex gap-6 border-b border-line p-4 text-sm">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/network">Network</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <main id="main">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  )
}
