import { Link } from 'react-router-dom'
import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react'
import { navLinks } from '@/config/navigation'
import { heroCtaLinks, site } from '@/config/constants'
import { useLocale } from '@/context/LocaleContext'
import { t } from '@/utils/i18n'
import { Container } from '@/components/atoms/Container'

export const Footer = () => {
  const { locale } = useLocale()
  const locations =
    locale === 'ar' ? ['الرياض', 'جدة', 'دبي'] : ['Riyadh', 'Jeddah', 'Dubai']
  const socialLinks = [
    {
      label: 'Instagram',
      href: `https://www.instagram.com/${site.instagram}`,
      icon: Instagram,
    },
    {
      label: 'WhatsApp',
      href: heroCtaLinks.whatsapp,
      icon: MessageCircle,
    },
    {
      label: 'Call',
      href: heroCtaLinks.phone,
      icon: Phone,
    },
    {
      label: 'Email',
      href: heroCtaLinks.email,
      icon: Mail,
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-primary-900/95 text-primary-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_bottom,rgba(28,14,15,0.2),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-full text-[rgb(var(--color-surface))]"
      >
        <svg
          className="block h-16 w-full md:h-24"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96 C240,160 480,160 720,96 C960,32 1200,32 1440,96 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      <Container className="relative z-10 pb-10 pt-24 md:pt-32">
        <div className="mb-12 flex flex-col gap-4 text-[11px] uppercase tracking-[0.4em] text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className="text-white/80">{site.name}</span>
            <span aria-hidden="true" className="h-px w-10 bg-white/30" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <span className="text-white/50">{locale === 'ar' ? 'تواصل معنا' : 'Contact'}</span>
            <a
              href={heroCtaLinks.email}
              className="text-white/70 transition hover:text-white"
            >
              {site.email}
            </a>
            <span className="text-white/20">•</span>
            <a
              href={heroCtaLinks.phone}
              className="text-white/70 transition hover:text-white"
            >
              {site.phone}
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            {locale === 'ar'
              ? 'نتائج قابلة للقياس وتأثير واضح'
              : 'Measurable growth, clear impact'}
          </p>
          <h2 className="mt-6 text-3xl font-display font-light leading-tight text-white md:text-5xl">
            {locale === 'ar'
              ? 'هل تريد تحقيق أهداف ملموسة؟'
              : 'Want to achieve tangible goals?'}
            <span className="mt-3 block font-semibold">
              {locale === 'ar' ? 'اعمل معنا!' : 'Work with us!'}
            </span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/60 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white/10"
            >
              {locale === 'ar' ? 'ابدأ مشروعك' : 'Start new project'}
              <span className="text-base leading-none">+</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-[0.32em] text-white/50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white/50 transition hover:text-white"
            >
              {t(locale, link.key as any)}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className={`text-center ${locale === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
            <div className="text-sm font-semibold text-white">{site.name}</div>
            <p className="text-xs text-white/60">
              {locale === 'ar' ? 'ابق على تواصل معنا' : 'Keep in touch with us'}
            </p>
            <div
              className={`mt-3 flex justify-center gap-3 ${locale === 'ar' ? 'md:justify-end' : 'md:justify-start'}`}
            >
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={link.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/60 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
          <div className={`text-center text-xs text-white/50 ${locale === 'ar' ? 'md:text-left' : 'md:text-right'}`}>
            <div
              className={`flex flex-wrap justify-center gap-4 uppercase tracking-[0.3em] ${locale === 'ar' ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {locations.map((location) => (
                <span key={location}>{location}</span>
              ))}
            </div>
            <div className="mt-4">
              {locale === 'ar'
                ? '© 2026 جميع الحقوق محفوظة لـ iHelp Social'
                : '© 2026 All rights reserved iHelp Social'}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
