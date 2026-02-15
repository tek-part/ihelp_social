import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { Container } from '../atoms/Container'
import { Button } from '../atoms/Button'
import { t } from '@/utils/i18n'
import { useLocale } from '@/context/LocaleContext'
import type { Locale } from '@/context/LocaleContext'
import { heroCtaLinks } from '@/config/constants'

const HeroBackground = () => (
  <>
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 bg-[url('/backgrounds/site-bg.png')] bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    />
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(circle_at_66%_46%,rgba(245,233,220,0.07),transparent_36%),linear-gradient(180deg,rgba(22,8,9,0.42)_0%,rgba(22,8,9,0.74)_56%,rgba(22,8,9,0.9)_100%)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    />
  </>
)

const HeroCenterLogo = ({ mobile = false }: { mobile?: boolean }) => (
  <motion.div
    aria-hidden="true"
    className={
      mobile
        ? 'relative z-30 w-full max-w-[460px] text-center sm:max-w-[520px]'
        : 'pointer-events-none relative z-30 w-[min(56vw,880px)] text-center'
    }
    initial={mobile ? { opacity: 0, y: 14, scale: 0.98 } : { opacity: 0, scale: 0.95 }}
    animate={mobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, scale: 1 }}
    exit={mobile ? { opacity: 0, y: -10, scale: 0.98 } : { opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.82, ease: [0.2, 0.8, 0.2, 1] }}
  >
    <motion.div
      className="w-full overflow-hidden"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity }}
    >
      <img
        src="/ihelp-logo-main.svg"
        alt="iHelp Social"
        className={
          mobile
            ? 'h-auto w-full object-contain -translate-y-[28%] opacity-95 drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]'
            : 'h-auto max-h-[72vh] w-full object-contain opacity-95 drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]'
        }
        loading="eager"
      />
    </motion.div>
  </motion.div>
)

type HeroLeftContentProps = {
  locale: Locale
  isArabic: boolean
  mobile?: boolean
  className?: string
}

const HeroLeftContent = ({ locale, isArabic, mobile = false, className }: HeroLeftContentProps) => {
  const wrapperClass = mobile
    ? 'relative z-40 mx-auto max-w-[420px] space-y-5 text-center'
    : clsx('relative z-40 max-w-[460px] space-y-6 text-left', className)

  const actionsClass = mobile
    ? 'flex flex-col gap-3'
    : 'flex items-center gap-4 justify-start'

  return (
    <motion.div
      className={wrapperClass}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.72, ease: [0.4, 0, 0.2, 1], delay: 0.12 }}
    >
      <h1 className={mobile ? 'text-[clamp(36px,9vw,56px)] font-display font-medium leading-[0.92] text-primary-50' : 'text-[clamp(36px,3.8vw,62px)] font-display font-medium leading-[0.92] tracking-[-0.02em] text-primary-50'}>
        {isArabic ? (
          t(locale, 'hero_title')
        ) : (
          <>
            Social media that
            <br />
            works like a
            <span className="block italic text-primary-300">growth engine.</span>
          </>
        )}
      </h1>

      <p className={mobile ? 'text-base leading-relaxed text-primary-100/85' : 'text-[clamp(16px,1.15vw,19px)] leading-relaxed text-primary-100/85'}>
        {t(locale, 'hero_subtitle')}
      </p>

      <div className={actionsClass}>
        <Button
          as="a"
          href={heroCtaLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          className={
            mobile
              ? 'h-11 w-full border border-[#f5e9dc] bg-[#f5e9dc] px-6 text-base font-semibold text-[#4a3025] shadow-[0_12px_28px_-14px_rgba(0,0,0,0.75)] hover:bg-[#ecdece]'
              : 'h-11 border border-[#f5e9dc] bg-[#f5e9dc] px-6 text-base font-semibold text-[#4a3025] shadow-[0_12px_28px_-14px_rgba(0,0,0,0.75)] hover:bg-[#ecdece]'
          }
        >
          {t(locale, 'book_call')}
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button
          as="a"
          href="/services"
          variant="ghost"
          className={
            mobile
              ? 'h-11 w-full border border-[#f5e9dc]/80 bg-transparent px-6 text-base font-medium text-[#f5e9dc] hover:bg-[#f5e9dc]/12'
              : 'h-11 border border-[#f5e9dc]/80 bg-transparent px-6 text-base font-medium text-[#f5e9dc] hover:bg-[#f5e9dc]/12'
          }
        >
          {t(locale, 'view_services')}
        </Button>
      </div>
    </motion.div>
  )
}

export const Hero = () => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'

  return (
    <motion.section
      className="section-shell relative min-h-screen overflow-hidden [--section-fade:rgba(28,14,15,0.95)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <HeroBackground />

      <Container className="relative z-10 min-h-screen px-6">
        <motion.div
          className="absolute inset-0 z-30 hidden items-center justify-center lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="grid w-full max-w-[1200px] grid-cols-[minmax(320px,460px)_minmax(0,1fr)] items-center gap-12 px-6">
            <HeroLeftContent locale={locale} isArabic={isArabic} className="justify-self-start" />
            <div className="flex justify-center">
              <HeroCenterLogo />
            </div>
          </div>
        </motion.div>

        <div className="relative z-20 flex min-h-screen flex-col items-center justify-start gap-8 pt-32 pb-10 lg:hidden">
          <HeroCenterLogo mobile />
          <HeroLeftContent locale={locale} isArabic={isArabic} mobile />
        </div>
      </Container>
    </motion.section>
  )
}
