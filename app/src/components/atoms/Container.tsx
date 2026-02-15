import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={clsx('mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8', className)}>
    {children}
  </div>
)
