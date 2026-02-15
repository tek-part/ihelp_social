import { Link } from 'react-router-dom'
import { Button } from '@/components/atoms/Button'
import { Seo } from '@/seo/Seo'
import { useLocale } from '@/context/LocaleContext'
import { motion } from 'framer-motion'

const NotFoundPage = () => {
  const { locale } = useLocale()
  return (
    <motion.div
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-surface text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <Seo title="404 | iHelp Social" description="Page not found" />
      <div className="text-6xl font-bold text-heading">404</div>
      <p className="text-muted">{locale === 'ar' ? 'الصفحة غير موجودة' : 'Page not found'}</p>
      <Link to="/">
        <Button>{locale === 'ar' ? 'العودة للرئيسية' : 'Back home'}</Button>
      </Link>
    </motion.div>
  )
}

export default NotFoundPage
