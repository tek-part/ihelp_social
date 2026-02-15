import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

export const Badge = ({
  children,
  tone = 'primary',
  className,
}: PropsWithChildren<{ tone?: 'primary' | 'neutral'; className?: string }>) => (
  <span
    className={clsx(
      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold',
      tone === 'primary'
        ? 'bg-primary-50 text-primary-700 border border-primary-100'
        : 'bg-surface-elevated text-muted border border-border',
      className,
    )}
  >
    {children}
  </span>
)
