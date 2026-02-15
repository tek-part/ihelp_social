import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'

export type Locale = 'en' | 'ar'

type LocaleContextValue = {
  locale: Locale
  toggleLocale: () => void
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)
const STORAGE_KEY = 'ihelp-locale'

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored === 'en' || stored === 'ar') return stored
  return navigator.language.startsWith('ar') ? 'ar' : 'en'
}

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    const html = document.documentElement
    html.setAttribute('lang', locale)
    html.setAttribute('dir', dir)
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      toggleLocale: () => setLocale((prev) => (prev === 'en' ? 'ar' : 'en')),
      setLocale,
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
