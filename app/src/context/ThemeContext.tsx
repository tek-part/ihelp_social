import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
const STORAGE_KEY = 'ihelp-theme'

const getPreferredTheme = (): Theme => 'light'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
    window.localStorage.setItem(STORAGE_KEY, 'light')
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme('light'),
      setTheme: () => setTheme('light'),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
