import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/atoms/Container'
import { Button } from '@/components/atoms/Button'
import { Seo } from '@/seo/Seo'
import { siteIdentity } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'

type Category = 'all' | 'social' | 'ads' | 'branding' | 'web'

type CaseStudy = {
  id: string
  category: Exclude<Category, 'all'>
  image: string
  kpi: string
  span: string
  title: { en: string; ar: string }
  summary: { en: string; ar: string }
}

const caseStudies: CaseStudy[] = [
  {
    id: 'zenith-scale',
    category: 'ads',
    image: '/clients/client-hero.jpg',
    kpi: '+460% ROAS',
    span: 'sm:col-span-2 sm:row-span-2',
    title: {
      en: 'Zenith Retail Growth Sprint',
      ar: 'انطلاقة نمو زينث ريتيل',
    },
    summary: {
      en: 'Scaled paid media and creative testing to unlock compounding monthly revenue.',
      ar: 'توسيع الإعلانات واختبارات الإبداع لرفع الإيراد الشهري بشكل متصاعد.',
    },
  },
  {
    id: 'luna-rebrand',
    category: 'branding',
    image: '/clients/client-01.jpg',
    kpi: 'New identity',
    span: 'sm:row-span-2',
    title: {
      en: 'Luna Cosmetics Rebrand',
      ar: 'إعادة تموضع لونا كوزمتكس',
    },
    summary: {
      en: 'A complete visual refresh with a social-first content system.',
      ar: 'هوية بصرية جديدة مع نظام محتوى مصمم للسوشيال.',
    },
  },
  {
    id: 'pulse-community',
    category: 'social',
    image: '/clients/client-02.jpg',
    kpi: '2.3x engagement',
    span: 'sm:row-span-1',
    title: {
      en: 'Pulse Community Revival',
      ar: 'إحياء مجتمع Pulse',
    },
    summary: {
      en: 'Reactivated dormant audiences through weekly interactive formats.',
      ar: 'إعادة تنشيط الجمهور عبر صيغ تفاعلية أسبوعية.',
    },
  },
  {
    id: 'northline-site',
    category: 'web',
    image: '/clients/client-03.jpg',
    kpi: '43% CVR uplift',
    span: 'sm:row-span-2',
    title: {
      en: 'Northline Conversion Website',
      ar: 'موقع تحويلات Northline',
    },
    summary: {
      en: 'Built an SEO-ready funnel with fast pages and clear conversion flow.',
      ar: 'بناء مسار تحويل سريع ومهيأ لمحركات البحث.',
    },
  },
  {
    id: 'horizon-sale',
    category: 'ads',
    image: '/clients/client-04.jpg',
    kpi: '11.8x ROAS',
    span: 'sm:col-span-2 sm:row-span-1',
    title: {
      en: 'Horizon Seasonal Sale',
      ar: 'حملة Horizon الموسمية',
    },
    summary: {
      en: 'Coordinated creative sequencing and retargeting to maximize cart recovery.',
      ar: 'مزامنة الإبداع مع إعادة الاستهداف لزيادة استرداد السلة.',
    },
  },
]

const WorksPage = () => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'
  const [activeCategory, setActiveCategory] = useState<Category>('all')

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

  const categoryTabs: { key: Category; label: string }[] = isArabic
    ? [
        { key: 'all', label: 'الكل' },
        { key: 'social', label: 'سوشيال' },
        { key: 'ads', label: 'إعلانات' },
        { key: 'branding', label: 'هوية' },
        { key: 'web', label: 'مواقع' },
      ]
    : [
        { key: 'all', label: 'All' },
        { key: 'social', label: 'Social' },
        { key: 'ads', label: 'Ads' },
        { key: 'branding', label: 'Branding' },
        { key: 'web', label: 'Web' },
      ]

  const visibleCases = useMemo(
    () =>
      activeCategory === 'all'
        ? caseStudies
        : caseStudies.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const transformationPoints = isArabic
    ? [
        'توحيد الهوية بين المحتوى والإعلانات.',
        'تحسين رحلة التحويل من الزيارة إلى الطلب.',
        'لوحات أداء أسبوعية قابلة للتنفيذ.',
      ]
    : [
        'Unified messaging across content and paid media.',
        'Optimized conversion flow from click to purchase.',
        'Weekly reporting dashboards tied to decision-making.',
      ]

  const successStats = isArabic
    ? [
        { value: '250+', label: 'حملة تم إطلاقها' },
        { value: '$1.5M', label: 'إنفاق إعلاني مُدار' },
        { value: '46+', label: 'علامة تم خدمتها' },
        { value: '460%', label: 'متوسط نمو الحسابات' },
      ]
    : [
        { value: '250+', label: 'Campaigns launched' },
        { value: '$1.5M', label: 'Managed ad spend' },
        { value: '46+', label: 'Brands served' },
        { value: '460%', label: 'Average account growth' },
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
        title={`${isArabic ? 'أعمالنا' : 'Works'} | ${siteIdentity.name}`}
        description={
          isArabic
            ? 'استعرض نماذج أعمال iHelp Social ونتائج النمو التي حققناها مع العملاء.'
            : 'Explore iHelp Social case studies and the measurable growth we delivered for clients.'
        }
        locale={locale}
      />

      <section className="section-shell bg-surface/92 [--section-fade:rgba(28,14,15,0.94)]">
        <Container className="py-14 md:py-16">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[radial-gradient(circle_at_20%_20%,rgba(245,233,220,0.12),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(93,44,46,0.35),transparent_35%),linear-gradient(135deg,rgba(28,14,15,0.98),rgba(42,20,21,0.92))] p-7 shadow-card md:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-primary-500/10 blur-3xl" />
            <p className="inline-flex rounded-full border border-primary-700/25 bg-surface-elevated/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-500">
              {isArabic ? 'أعمال مختارة' : 'Featured Case Study'}
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-display font-semibold leading-tight text-primary-50 sm:text-4xl lg:text-5xl">
              {isArabic
                ? 'كيف رفعنا Zenith A1 إلى إيراد شهري بقيمة 2M$'
                : 'Scaling Zenith A1 to $2M Monthly Revenue'}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-100 sm:text-base">
              {isArabic
                ? 'مزيج من اختبار الإبداع، تحسين الإنفاق، وضبط رحلة العميل أدى إلى نمو ثابت وقابل للتوسع.'
                : 'A tight loop of creative testing, spend optimization, and funnel refinement produced consistent, scalable revenue growth.'}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {(isArabic
                ? ['تجارة إلكترونية', 'Meta + TikTok', '16 أسبوع']
                : ['E-commerce', 'Meta + TikTok', '16-week sprint']
              ).map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-primary-700/25 bg-surface-elevated/75 px-3 py-1 text-primary-200"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="/contact">
                {isArabic ? 'ابدأ مشروعك' : 'Start your project'}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-700/30 px-4 py-2.5 text-sm font-semibold text-primary-100 transition hover:border-primary-500/60 hover:text-primary-50"
              >
                {isArabic ? 'عرض الخدمات' : 'Explore services'}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/90 [--section-fade:rgba(28,14,15,0.9)]">
        <Container className="py-8 md:py-12">
          <div className="text-center">
            <h2 className="text-3xl font-display font-semibold text-heading sm:text-4xl">
              {isArabic ? 'مشاريع تحرك النتائج' : 'Projects That Move The Needle'}
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                  activeCategory === tab.key
                    ? 'bg-primary-600 text-white'
                    : 'border border-border bg-surface-elevated text-muted hover:border-primary-300 hover:text-heading'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid auto-rows-[120px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleCases.map((item) => (
              <article
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition hover:-translate-y-1 hover:shadow-card ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.title[locale]}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.62))]" />
                <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-surface-elevated/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-700">
                    {item.category}
                  </span>
                  <span className="rounded-full border border-white/35 bg-white/10 px-2 py-1 text-[10px] font-semibold text-white">
                    {item.kpi}
                  </span>
                </div>
                <div className="absolute inset-x-3 bottom-3 rounded-xl bg-surface-elevated/90 p-3 backdrop-blur-sm">
                  <h3 className="text-sm font-semibold text-heading">{item.title[locale]}</h3>
                  <p className="mt-1 text-xs text-muted">{item.summary[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/90 [--section-fade:rgba(28,14,15,0.9)]">
        <Container className="py-14">
          <div className="grid gap-8 rounded-3xl border border-border bg-surface-elevated p-7 shadow-soft lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-600">
                {isArabic ? 'قصة التحول' : 'The Power of Transformation'}
              </p>
              <h3 className="mt-3 text-3xl font-display font-semibold text-heading">
                {isArabic
                  ? 'من حملات مشتتة إلى نظام نمو متكامل'
                  : 'From scattered campaigns to a growth system'}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {isArabic
                  ? 'نقلنا فريق العميل من قرارات تكتيكية قصيرة الأمد إلى تشغيل تسويقي منظم يربط الأداء بالأهداف التجارية.'
                  : 'We shifted the client from short-term tactics to a structured growth operation where every channel decision mapped to business outcomes.'}
              </p>
              <ul className="mt-5 space-y-2">
                {transformationPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:text-primary-500"
              >
                {isArabic ? 'اطلب دراسة حالة مشابهة' : 'Request a similar case study'}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="overflow-hidden rounded-xl border border-border">
                <img src="/clients/client-01.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <img src="/clients/client-02.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <img src="/clients/client-03.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/90 [--section-fade:rgba(28,14,15,0.9)]">
        <Container className="py-4 md:py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {successStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-surface-elevated px-5 py-4 text-center shadow-soft"
              >
                <p className="text-2xl font-display font-semibold text-heading">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/90 [--section-fade:rgba(28,14,15,0.9)]">
        <Container className="py-14">
          <div className="grid gap-6 rounded-3xl border border-border bg-primary-50/20 p-6 shadow-soft md:p-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img src="/clients/client-hero.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-600">
                {isArabic ? 'أثر قابل للقياس' : 'Measured Impact'}
              </p>
              <h3 className="mt-3 text-3xl font-display font-semibold text-heading">
                {isArabic
                  ? 'نقيس نجاحنا بنمو عملائنا'
                  : 'We measured our success by the growth of our clients.'}
              </h3>
              <div className="mt-5 space-y-3">
                <blockquote className="rounded-xl border border-border bg-surface-elevated p-4 text-sm text-muted">
                  {isArabic
                    ? '"الفريق كان دقيقًا وسريعًا، وشفافية التقارير ساعدتنا نتخذ قرارات أفضل كل أسبوع."'
                    : '"The team moved fast with clear priorities, and reporting gave us confidence every week."'}
                </blockquote>
                <blockquote className="rounded-xl border border-border bg-surface-elevated p-4 text-sm text-muted">
                  {isArabic
                    ? '"أهم فرق لمسناه كان ربط المحتوى بالأرقام، وليس الاكتفاء بالنشر فقط."'
                    : '"The biggest shift was connecting creative output directly to business numbers."'}
                </blockquote>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface/90 [--section-fade:rgba(28,14,15,0.9)]">
        <Container className="pt-4">
          <div className="rounded-2xl border border-primary-700/20 bg-gradient-to-r from-primary-700 via-secondary-500 to-primary-900 p-8 text-center shadow-soft md:p-10">
            <h3 className="text-2xl font-display font-semibold text-primary-50 md:text-3xl">
              {isArabic
                ? 'جاهز تكون قصة النجاح القادمة؟'
                : 'Ready to become our next success story?'}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-100 md:text-base">
              {isArabic
                ? 'دعنا نحول أهدافك إلى خطة تنفيذ واضحة بنتائج ملموسة.'
                : 'Let us turn your business goals into an execution-ready growth roadmap.'}
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                as="a"
                href="/contact"
                className="bg-primary-500 text-primary-900 hover:bg-primary-400"
              >
                {isArabic ? 'ابدأ الآن' : 'Start now'}
                <TrendingUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  )
}

export default WorksPage
