import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react'
import { clsx } from 'clsx'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: Variant
  size?: Size
  block?: boolean
  as?: 'button' | 'a'
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-card',
  ghost:
    'bg-transparent text-primary-600 hover:bg-primary-50 border border-primary-100',
  outline:
    'border border-border text-heading hover:border-primary-300 hover:text-primary-600',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  block,
  as = 'button',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const Element = (as === 'a' ? 'a' : 'button') as 'a' | 'button'
  return (
    <Element
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300',
        variantClasses[variant],
        sizeClasses[size],
        block && 'w-full justify-center',
        'hover:scale-[1.02] active:scale-[0.99]',
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  )
}
