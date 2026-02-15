import { NavLink } from 'react-router-dom'
import { clsx } from 'clsx'

type Props = {
  to: string
  label: string
  onClick?: () => void
  variant?: 'default' | 'onDark'
  className?: string
}

export const NavLinkItem = ({ to, label, onClick, variant = 'default', className }: Props) => {
  const activeClass =
    variant === 'onDark'
      ? 'text-primary-50 bg-white/10'
      : 'text-primary-700 bg-primary-50'
  const idleClass =
    variant === 'onDark'
      ? 'text-primary-50/70 hover:text-primary-50 hover:bg-white/5'
      : 'text-muted hover:text-heading hover:bg-surface-elevated'

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          'text-sm font-medium transition-colors px-3 py-2 rounded-lg relative overflow-hidden group',
          'after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-8 after:-translate-x-1/2 after:origin-center after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:ease-in-out',
          'group-hover:after:scale-x-100',
          isActive ? activeClass : idleClass,
          className,
        )
      }
    >
      {label}
    </NavLink>
  )
}
