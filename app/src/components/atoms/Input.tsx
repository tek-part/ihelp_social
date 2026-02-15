import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { clsx } from 'clsx'

const baseClasses =
  'w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200'

export const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={clsx(baseClasses, className)} {...props} />
)

export const TextArea = ({
  className,
  rows = 4,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={clsx(baseClasses, 'resize-none', className)}
    rows={rows}
    {...props}
  />
)
