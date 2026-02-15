import { motion, AnimatePresence } from 'framer-motion'
import { NavLinkItem } from '../molecules/NavLinkItem'
import { navLinks } from '@/config/navigation'
import { t } from '@/utils/i18n'
import { useLocale } from '@/context/LocaleContext'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../atoms/Badge'

type Props = {
  open: boolean
  onClose: () => void
}

const overlayVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
}

export const MobileMenu = ({ open, onClose }: Props) => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'
  const BackIcon = isArabic ? ArrowRight : ArrowLeft

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-800 px-6 py-10 text-primary-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
        >
          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-10 pt-24 text-center text-4xl font-semibold text-primary-50 md:pt-28 md:text-5xl">
            <Link
              to="/"
              onClick={onClose}
              className="absolute left-1/2 top-6 inline-flex -translate-x-1/2 items-center justify-center gap-2 md:top-8"
            >
              <Badge
                tone="primary"
                className="inline-flex items-center gap-2 border-border bg-surface-elevated text-primary-700 shadow-sm"
              >
                <BackIcon className="h-4 w-4" />
                {isArabic ? 'العودة للرئيسية' : 'Back to home'}
              </Badge>
            </Link>

            {navLinks.map((link) => (
              <motion.div key={link.path} variants={itemVariants}>
                <NavLinkItem
                  to={link.path}
                  label={t(locale, link.key as any)}
                  variant="onDark"
                  onClick={onClose}
                  className="text-center text-4xl italic tracking-wide md:text-5xl"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
