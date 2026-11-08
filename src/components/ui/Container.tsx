import type { ElementType, ReactNode } from 'react'

type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

export default function Container({ as: Tag = 'div', className = '', children }: ContainerProps) {
  return <Tag className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</Tag>
}