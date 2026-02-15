import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { LocaleProvider } from '@/context/LocaleContext'

export const AppProviders = ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    <LocaleProvider>{children}</LocaleProvider>
  </ThemeProvider>
)
