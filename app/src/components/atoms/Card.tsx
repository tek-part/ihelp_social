import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type CardProps = {
  className?: string
  padded?: boolean
}

export const Card = ({
  children,
  className,
  padded = true,
}: PropsWithChildren<CardProps>) => (
  <div
    className={clsx(
      'rounded-xl border border-border bg-surface-elevated shadow-soft transition-all duration-300',
      'hover:-translate-y-1 hover:shadow-card',
      padded && 'p-6',
      className,
    )}
  >
    {children}
  </div>
)
