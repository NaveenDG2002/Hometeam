import { createBrowserRouter } from 'react-router'
import RootLayout from './components/layout/RootLayout'
// Home loads immediately. The other pages are code-split and load on demand.
import { Component as Home } from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'about', lazy: () => import('./pages/About') },
      { path: 'services', lazy: () => import('./pages/Services') },
      { path: 'network', lazy: () => import('./pages/Network') },
      { path: 'contact', lazy: () => import('./pages/Contact') },
      { path: '*', lazy: () => import('./pages/NotFound') },
    ],
  },
])