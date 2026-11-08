import { Outlet, ScrollRestoration } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </>
  )
}
