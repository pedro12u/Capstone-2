type SectionHeaderProps = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ label, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {label ? <span className="pill w-fit">{label}</span> : null}
      <h2 className="section-heading">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  )
}
