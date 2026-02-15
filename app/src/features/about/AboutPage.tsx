import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Globe2,
  Medal,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/atoms/Container'
import { Button } from '@/components/atoms/Button'
import { Seo } from '@/seo/Seo'
import { siteIdentity } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'

const journeyIcons = [Compass, Globe2, Target, Sparkles]

const AboutPage = () => {
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

  const stats = isArabic
    ? [
        {
          icon: Users,
          value: '250+',
          label: 'عميل موثوق',
          iconTone: 'text-primary-700 bg-primary-100',
        },
        {
          icon: Sparkles,
          value: '1.2k',
          label: 'حملة مدارة',
          iconTone: 'text-primary-600 bg-primary-50',
        },
        {
          icon: TrendingUp,
          value: '85%',
          label: 'متوسط النمو',
          iconTone: 'text-secondary-500 bg-primary-100',
        },
        {
          icon: Medal,
          value: '14',
          label: 'جائزة إبداعية',
          iconTone: 'text-primary-800 bg-primary-200',
        },
      ]
    : [
        {
          icon: Users,
          value: '250+',
          label: 'Clients served',
          iconTone: 'text-primary-700 bg-primary-100',
        },
        {
          icon: Sparkles,
          value: '1.2k',
          label: 'Campaigns managed',
          iconTone: 'text-primary-600 bg-primary-50',
        },
        {
          icon: TrendingUp,
          value: '85%',
          label: 'Avg. engagement growth',
          iconTone: 'text-secondary-500 bg-primary-100',
        },
        {
          icon: Medal,
          value: '14',
          label: 'Creative awards',
          iconTone: 'text-primary-800 bg-primary-200',
        },
      ]

  const journey = isArabic
    ? [
        {
          title: 'البداية',
          description: 'وضوح استراتيجي ورؤية دقيقة للسوق والفرص.',
        },
        {
          title: 'التوسع الإقليمي',
          description: 'مواءمة الرسالة مع اختلاف الأسواق والجمهور.',
        },
        {
          title: 'استراتيجية رقمية',
          description: 'خطة تنفيذ قابلة للقياس بمؤشرات أداء واضحة.',
        },
        {
          title: 'تحسين مستمر',
          description: 'تطوير متواصل يحافظ على نمو مستدام.',
        },
      ]
    : [
        {
          title: 'The Genesis',
          description: 'Strategic clarity and a sharp market foundation.',
        },
        {
          title: 'Regional Expansion',
          description: 'Localized positioning in high-opportunity markets.',
        },
        {
          title: 'AI-First Strategy',
          description: 'Framework-led execution with measurable milestones.',
        },
        {
          title: 'Future Horizons',
          description: 'Relentless optimization to sustain performance.',
        },
      ]

  return (
    <motion.main
      className="bg-surface pb-20 text-body"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <Seo
        title={`${isArabic ? 'من نحن' : 'About'} | ${siteIdentity.name}`}
        description={siteIdentity.description[locale]}
        locale={locale}
      />

      <section className="section-shell bg-surface/92 [--section-fade:rgba(28,14,15,0.92)]">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div>
              <p className="inline-flex rounded-full border border-primary-700/25 bg-surface-elevated px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-500">
                {isArabic ? 'من نحن' : 'About Us'}
              </p>

              <h1 className="mt-5 text-4xl font-display font-semibold leading-tight text-heading sm:text-5xl">
                {isArabic ? 'رؤيتنا،' : 'Our Vision,'}
                <span className="block text-primary-500">
                  {isArabic ? 'إرثك الرقمي.' : 'Your Legacy.'}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {isArabic
                  ? 'نبني استراتيجيات تسويقية ذكية تربط الإبداع بالأداء، وتحول الحضور الرقمي إلى نتائج قابلة للقياس.'
                  : 'We build strategy-led marketing systems that connect creative output to measurable business performance.'}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button as="a" href="/contact">
                  {isArabic ? 'تحدث معنا' : 'Start a Project'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-xs text-muted">
                  {isArabic ? 'موثوق من 250+ علامة' : 'Trusted by 250+ brands'}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/92 [--section-fade:rgba(28,14,15,0.92)]">
        <Container className="py-6 md:py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-surface-elevated px-5 py-6 text-center shadow-soft"
                >
                  <span
                    className={`mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full ${item.iconTone}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-2xl font-display font-semibold text-heading">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/92 [--section-fade:rgba(28,14,15,0.92)]">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-display font-semibold text-heading sm:text-4xl">
              {isArabic ? 'التميّز الاستراتيجي' : 'Strategic Excellence'}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {isArabic
                ? 'مزيج فريد من الذكاء التسويقي وفهم دقيق لخصوصية السوق.'
                : 'A unique fusion of digital marketing standards and deep regional understanding.'}
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft">
              <p className="text-sm font-semibold text-heading">
                {isArabic ? 'الرؤية الشاملة' : 'The Global Perspective'}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {isArabic
                  ? 'نمزج التحليل الدقيق مع التنفيذ الذكي لمساعدة العلامات على المنافسة في أعلى المستويات.'
                  : 'We blend world-class analytics with data-driven execution to help brands compete at the highest level.'}
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted">
                <li>{isArabic ? 'قرارات قائمة على البيانات' : 'Data-led decision making'}</li>
                <li>{isArabic ? 'أداء مخصص لكل علامة' : 'Personalized performance'}</li>
                <li>{isArabic ? 'نماذج نمو قابلة للتوسّع' : 'Scalable growth models'}</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-primary-700/25 bg-primary-50/15 p-6 shadow-soft">
              <p className="text-sm font-semibold text-heading">
                {isArabic ? 'ذكاء تنفيذي' : 'Execution Intelligence'}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {isArabic
                  ? 'نحوّل النية الاستراتيجية إلى خطوات عملية ومتابعة أداء مستمرة.'
                  : 'We turn strategic intent into practical execution routines with clear KPI ownership.'}
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted">
                <li>{isArabic ? 'اختبارات سريعة' : 'Fast testing loops'}</li>
                <li>{isArabic ? 'رؤى أسبوعية' : 'Weekly insights'}</li>
                <li>{isArabic ? 'تحسين مستمر' : 'Continuous optimization'}</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/92 [--section-fade:rgba(28,14,15,0.92)]">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-display font-semibold text-heading sm:text-4xl">
                {isArabic ? 'رحلتنا' : 'Our Journey'}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {isArabic
                  ? 'أربع مراحل من الابتكار المستمر والتنفيذ المنضبط.'
                  : 'Four years of relentless innovation and consistent delivery.'}
              </p>
            </div>
            <button className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-elevated px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted transition hover:border-primary-400 hover:text-heading">
              {isArabic ? 'انضم للمهمة' : 'Join the mission'}
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-10 right-10 top-5 hidden h-px bg-border lg:block"
            />

            {journey.map((step, index) => {
              const Icon = journeyIcons[index % journeyIcons.length]
              return (
                <article key={step.title} className="relative p-1 text-center">
                  <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-700/30 bg-surface-elevated text-primary-500">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-heading">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
                </article>
              )
            })}
          </div>
        </Container>
      </section>
    </motion.main>
  )
}

export default AboutPage
