type SectionHeadingProps = {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      )}
      <Tag className="text-3xl font-bold sm:text-4xl">{title}</Tag>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  )
}