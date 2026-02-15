import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brush,
  Check,
  FileText,
  Globe,
  Lightbulb,
  Megaphone,
  Search,
  TrendingUp,
  Users,
} from 'lucide-react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Seo } from '@/seo/Seo'
import { siteIdentity, services } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'
import { Container } from '@/components/atoms/Container'
import { Button } from '@/components/atoms/Button'

const serviceIcons = [
  Users,
  Brush,
  Megaphone,
  Globe,
  FileText,
  Lightbulb,
  BarChart3,
  TrendingUp,
]

const ServicesPage = () => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const rafId = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => {
      window.cancelAnimationFrame(rafId)
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  const frameworkSteps = isArabic
    ? [
        {
          title: 'اكتشاف وتحليل',
          description: 'نحلل الوضع الحالي والجمهور والمنافسين لتحديد أقوى فرص النمو.',
        },
        {
          title: 'استراتيجية وخطة تنفيذ',
          description: 'نحوّل الأهداف إلى خطة محتوى وإعلانات واضحة بجدول زمني ومؤشرات أداء.',
        },
        {
          title: 'تنفيذ سريع وتحسين مستمر',
          description: 'ننفذ الحملات والأصول الإبداعية مع اختبارات وتحسين أسبوعي.',
        },
        {
          title: 'تقارير وقرارات',
          description: 'نقدم تقارير واضحة وتوصيات عملية تساعدك على اتخاذ القرار بثقة.',
        },
      ]
    : [
        {
          title: 'Discovery & Audit',
          description:
            'We audit your current channels, audience behavior, and market landscape to find real growth opportunities.',
        },
        {
          title: 'Strategy & Planning',
          description:
            'We translate business targets into a focused content and media roadmap with clear KPIs.',
        },
        {
          title: 'Execution & Optimization',
          description:
            'Creative production, campaign launch, and weekly optimization loops keep momentum predictable.',
        },
        {
          title: 'Reporting & Decisions',
          description:
            'Actionable reporting highlights what worked, what changed, and what to scale next.',
        },
      ]

  return (
    <motion.main
      className="bg-surface pb-20"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <Seo
        title={`${isArabic ? 'الخدمات' : 'Services'} | ${siteIdentity.name}`}
        description={
          isArabic
            ? 'حلول متكاملة من إدارة المحتوى إلى الإعلانات والتحليل لرفع النمو الرقمي.'
            : 'Integrated services from social management to advertising and analytics to scale digital growth.'
        }
        locale={locale}
      />

      <section className="section-shell relative overflow-hidden bg-surface/90 [--section-fade:rgba(28,14,15,0.92)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-2 text-[120px] font-display font-semibold leading-none text-primary-500/10 sm:text-[170px]"
        >
          I
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-6 text-[120px] font-display font-semibold leading-none text-primary-500/10 sm:text-[170px]"
        >
          H
        </span>

        <Container className="relative py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border border-border bg-surface-elevated px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-600">
              {isArabic ? 'خدمات متكاملة' : 'Integrated Services'}
            </p>
            <h1 className="mt-6 text-4xl font-display font-semibold leading-tight text-heading sm:text-5xl md:text-6xl">
              {isArabic
                ? 'نرفع العلامات التجارية عبر ابتكار استراتيجي'
                : 'Elevating Brands Through Strategic Innovation'}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
              {isArabic
                ? 'نصمم حلولًا عملية تجمع بين المحتوى، الإعلانات، التصميم، والتحليل لتحقيق نتائج قابلة للقياس.'
                : 'We design practical systems across content, advertising, design, and analytics to deliver measurable momentum.'}
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/90 [--section-fade:rgba(28,14,15,0.9)]">
        <Container className="py-4 md:py-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length]

              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-primary-600 transition group-hover:text-primary-500" />
                  </div>

                  <h3 className="mt-4 text-base font-semibold leading-snug text-heading">
                    {service.title[locale]}
                  </h3>
                  <p className="mt-2 min-h-[62px] text-sm leading-relaxed text-muted">
                    {service.summary[locale]}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.outcomes[locale].slice(0, 3).map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-xs text-muted">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-600" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4 text-[11px]">
                    {service.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg bg-surface p-2.5">
                        <div className="font-semibold text-heading">{metric.value}</div>
                        <div className="text-muted">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/90 [--section-fade:rgba(28,14,15,0.9)]">
        <Container className="py-14 md:py-16">
          <div className="grid gap-8 rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-600">
                {isArabic ? 'إطار العمل' : 'Our Success Framework'}
              </p>
              <h2 className="mt-3 text-3xl font-display font-semibold text-heading">
                {isArabic
                  ? 'من الاستراتيجية إلى نتائج مستدامة'
                  : 'From Strategy to Sustainable Results'}
              </h2>

              <div className="mt-6 space-y-4">
                {frameworkSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-3 rounded-xl border border-border bg-surface p-4"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-700">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-heading">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
              <img
                src="/clients/client-hero.jpg"
                alt={isArabic ? 'فريق العمل' : 'Team workshop'}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-primary-700/20 bg-surface-elevated/90 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                  {isArabic ? 'نمو محسوب' : 'Performance Snapshot'}
                </p>
                <div className="mt-2 flex items-center gap-2 text-heading">
                  <Search className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'قرارات تسويق مبنية على بيانات' : 'Data-informed marketing decisions'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/90 [--section-fade:rgba(28,14,15,0.9)]">
        <Container className="pb-4 pt-4 md:pb-8">
          <div className="rounded-2xl border border-primary-700/20 bg-gradient-to-r from-primary-700 to-primary-900 p-8 text-center shadow-soft md:p-10">
            <h3 className="text-2xl font-display font-semibold text-primary-50 md:text-3xl">
              {isArabic
                ? 'جاهز لتوسيع حضورك الرقمي؟'
                : 'Ready to Scale Your Digital Impact?'}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-100 md:text-base">
              {isArabic
                ? 'ابدأ مع فريق iHelp Social بخطة واضحة وتنفيذ سريع ينعكس على النتائج.'
                : 'Partner with iHelp Social for clear strategy, fast execution, and measurable growth.'}
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                as="a"
                href="/contact"
                className="bg-primary-500 text-primary-900 hover:bg-primary-400"
              >
                {isArabic ? 'ابدأ مشروعك الآن' : 'Start Your Project'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  )
}

export default ServicesPage
