import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import { Badge } from './Badge'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  badgeTone?: 'primary' | 'neutral'
  kicker?: string
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  badgeTone = 'primary',
  kicker,
  children,
}: PropsWithChildren<Props>) => (
  <div
    className={clsx(
      'max-w-3xl space-y-3',
      align === 'center' && 'mx-auto text-center',
    )}
  >
    {eyebrow && <Badge tone={badgeTone}>{eyebrow}</Badge>}
    {kicker && <p className="text-xs uppercase tracking-[0.2em] text-muted">{kicker}</p>}
    <h2 className="text-3xl font-display font-semibold text-heading sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="text-muted text-base leading-relaxed sm:text-lg">{description}</p>
    )}
    {children}
  </div>
)
