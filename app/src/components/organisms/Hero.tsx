import { ArrowRight } from 'lucide-react'
import { Container } from '../atoms/Container'
import { Button } from '../atoms/Button'
import { Badge } from '../atoms/Badge'
import { t } from '@/utils/i18n'
import { useLocale } from '@/context/LocaleContext'
import { heroCtaLinks } from '@/config/constants'
import { motion } from 'framer-motion'

export const Hero = () => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'

  return (
    <section className="section-shell relative overflow-hidden bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-50/70 via-transparent to-secondary-500/10"
      />
      <div aria-hidden="true" className="absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary-100" />
        <div className="absolute right-10 top-24 h-32 w-32 rounded-full bg-secondary-500/25" />
        <div className="absolute left-1/3 top-1/2 h-56 w-56 -translate-y-1/2 rotate-6 rounded-[32px] bg-primary-200/40" />
        <div className="absolute right-1/3 bottom-10 h-44 w-44 rotate-[-8deg] rounded-[36px] bg-primary-50" />
      </div>

      <Container className="relative z-10 grid min-h-[80vh] items-center gap-16 py-16 md:py-24 lg:grid-cols-2">
        <div className="space-y-7">
          <Badge tone="neutral" className="bg-surface-elevated text-primary-700">
            {t(locale, 'stats_title')}
          </Badge>

          <motion.h1
            className="text-4xl font-display font-semibold leading-tight text-heading sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
          >
            {isArabic ? (
              <>
                السوشيال ميديا <span className="text-primary-600">تعمل كآلة نمو</span>
              </>
            ) : (
              <>
                Social media that works like a{' '}
                <span className="italic text-primary-600">growth engine</span>.
              </>
            )}
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          >
            {t(locale, 'hero_subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
          >
            <Button
              as="a"
              href={heroCtaLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-600 text-white hover:bg-primary-700"
            >
              {t(locale, 'book_call')}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              as="a"
              href="/services"
              variant="ghost"
              className="border border-border text-heading"
            >
              {t(locale, 'view_services')}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <div className="relative h-[420px] w-[420px] max-w-full">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary-200/60" />
            <div className="absolute left-6 top-8 h-28 w-28 rounded-full bg-primary-100" />
            <div className="absolute right-4 top-24 h-24 w-24 rounded-[18px] bg-secondary-500/35" />
            <div className="absolute left-1/4 bottom-6 h-32 w-32 rounded-[18px] bg-primary-300/45" />
            <div className="absolute right-1/4 bottom-12 h-28 w-40 rotate-6 rounded-[22px] bg-primary-50" />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-700/20" />
            <img
              src="/og-image.svg"
              alt="iHelp Social collage"
              className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
