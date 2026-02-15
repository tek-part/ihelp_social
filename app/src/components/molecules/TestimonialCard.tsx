import { Star } from 'lucide-react'

type Props = {
  quote: string
  name: string
  role: string
}

export const TestimonialCard = ({ quote, name, role }: Props) => {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return (
    <div className="h-full rounded-xl border border-border bg-surface-elevated p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-center gap-1 text-secondary-500">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className="h-4 w-4 fill-secondary-500" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">&quot;{quote}&quot;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-700">
          {initials}
        </div>
        <div className="text-xs text-muted">
          <div className="text-sm font-semibold text-heading">{name}</div>
          <div>{role}</div>
        </div>
      </div>
    </div>
  )
}
