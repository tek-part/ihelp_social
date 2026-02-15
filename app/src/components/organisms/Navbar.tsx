import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/config/navigation'
import { site } from '@/config/constants'
import { useLocale } from '@/context/LocaleContext'
import { t } from '@/utils/i18n'
import { clsx } from 'clsx'
import { MobileMenu } from './MobileMenu'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { locale, toggleLocale } = useLocale()
  const scrolled = useScrollPosition(16)
  const isArabic = locale === 'ar'
  const tagline = isArabic ? 'وكالة سوشيال ميديا' : 'Social Media Agency'
  const ctaLabel = isArabic ? 'ابدأ مشروعك' : 'Start a project'

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1200px] px-4 py-4 sm:px-6 lg:px-8">
          <div
            className={clsx(
              'flex w-full items-center gap-4 rounded-full border border-primary-700/20 px-4 py-3 backdrop-blur-md transition',
              scrolled
                ? 'bg-primary-500/95 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.2)]'
                : 'bg-primary-500/90',
            )}
          >
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700/20">
                <img src="/logo.svg" alt="" className="h-6 w-6 object-contain" loading="lazy" />
              </div>
              <div className="hidden leading-tight sm:block">
                <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary-800">
                  {site.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary-700/70">
                  {tagline}
                </div>
              </div>
              <span className="sr-only">{site.name}</span>
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    clsx(
                      'rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] transition',
                      isActive
                        ? 'bg-primary-700/10 text-primary-800'
                        : 'text-primary-700/80 hover:text-primary-800',
                    )
                  }
                >
                  {t(locale, link.key as any)}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-primary-700/25 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-700 transition hover:border-primary-700/45 hover:text-primary-800 sm:inline-flex"
                onClick={toggleLocale}
                aria-label={isArabic ? 'تغيير اللغة' : 'Toggle language'}
              >
                {t(locale, 'language')}
              </button>
              <Link
                to="/contact"
                className="hidden rounded-full bg-primary-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.35)] transition hover:bg-primary-700 sm:inline-flex"
              >
                {ctaLabel}
              </Link>
              <button
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary-700/25 text-primary-700 transition hover:border-primary-700/45 hover:text-primary-800 md:hidden"
                onClick={() => setOpen((p) => !p)}
                aria-label={isArabic ? 'فتح القائمة' : 'Toggle menu'}
              >
                <AnimatePresence initial={false} mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.18, ease: 'easeInOut' }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.18, ease: 'easeInOut' }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={closeMenu} />
    </>
  )
}
