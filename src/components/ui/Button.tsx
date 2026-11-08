import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'link'

type ButtonProps = {
  variant?: Variant
  to?: string
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  children: ReactNode
  onClick?: () => void
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'rounded-sm bg-brand-700 px-6 py-3 text-white hover:bg-brand-600',
  secondary:
    'rounded-sm border border-brand-700 px-6 py-3 text-brand-700 hover:bg-brand-50',
  link: 'text-brand-600 hover:text-brand-700',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  type = 'button',
  disabled,
  className = '',
  children,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {variant === 'link' && <ArrowRight aria-hidden="true" className="size-4" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}