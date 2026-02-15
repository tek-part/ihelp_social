import { ArrowRight, CalendarDays, Clock3, Search, Tag } from 'lucide-react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/atoms/Container'
import { Seo } from '@/seo/Seo'
import { siteIdentity } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'

type BlogItem = {
  id: string
  image: string
  category: string
  title: { en: string; ar: string }
  excerpt: { en: string; ar: string }
  author: string
  date: string
  readTime: string
  href: string
}

const blogItems: BlogItem[] = [
  {
    id: '1',
    image: '/clients/client-01.jpg',
    category: 'AI',
    title: {
      en: 'The Future of AI in Modern Business',
      ar: 'مستقبل الذكاء الاصطناعي في الأعمال الحديثة',
    },
    excerpt: {
      en: 'How AI-native operations can unlock faster decisions and stronger margins.',
      ar: 'كيف يسرّع الذكاء الاصطناعي اتخاذ القرار ويرفع كفاءة النمو.',
    },
    author: 'iHelp Editorial',
    date: 'May 16, 2026',
    readTime: '6 min',
    href: '/blog/social-audit-2026',
  },
  {
    id: '2',
    image: '/clients/client-02.jpg',
    category: 'Marketing',
    title: {
      en: 'Mastering Multichannel Marketing in 2026',
      ar: 'إتقان التسويق متعدد القنوات في 2026',
    },
    excerpt: {
      en: 'A practical framework for sequencing content, ads, and lifecycle touchpoints.',
      ar: 'إطار عملي لربط المحتوى والإعلانات ونقاط الاتصال عبر القنوات.',
    },
    author: 'iHelp Strategy',
    date: 'May 14, 2026',
    readTime: '5 min',
    href: '/blog/content-systems',
  },
  {
    id: '3',
    image: '/clients/client-03.jpg',
    category: 'Growth',
    title: {
      en: 'Scaling Your Startup from Seed to Series',
      ar: 'توسيع شركتك الناشئة من Seed إلى Series',
    },
    excerpt: {
      en: 'Growth loops, channel fit, and the KPIs investors actually watch.',
      ar: 'دورات النمو، مواءمة القنوات، والمؤشرات التي تهم المستثمرين فعلًا.',
    },
    author: 'Growth Team',
    date: 'May 10, 2026',
    readTime: '7 min',
    href: '/blog/social-audit-2026',
  },
  {
    id: '4',
    image: '/clients/client-04.jpg',
    category: 'Leadership',
    title: {
      en: 'Sustainable Tech: Building a Greener Future',
      ar: 'التقنية المستدامة: بناء مستقبل أكثر خضرة',
    },
    excerpt: {
      en: 'Where sustainability intersects with innovation, products, and brand trust.',
      ar: 'كيف يلتقي الابتكار مع الاستدامة لبناء ثقة طويلة المدى.',
    },
    author: 'Innovation Desk',
    date: 'May 08, 2026',
    readTime: '4 min',
    href: '/blog/content-systems',
  },
  {
    id: '5',
    image: '/clients/client-hero.jpg',
    category: 'Design',
    title: {
      en: 'The Psychology of User-Centric Marketing',
      ar: 'سيكولوجية التسويق المتمحور حول المستخدم',
    },
    excerpt: {
      en: 'Designing experiences that convert by reducing friction and increasing trust.',
      ar: 'تصميم تجربة تقلل الاحتكاك وتزيد الثقة والتحويل.',
    },
    author: 'Creative Lab',
    date: 'May 05, 2026',
    readTime: '5 min',
    href: '/blog/social-audit-2026',
  },
  {
    id: '6',
    image: '/clients/client-02.jpg',
    category: 'Remote',
    title: {
      en: 'Beyond Remote: The Hybrid Office Revolution',
      ar: 'ما بعد العمل عن بعد: ثورة المكاتب الهجينة',
    },
    excerpt: {
      en: 'How teams can align execution quality across distributed workflows.',
      ar: 'كيف تحافظ الفرق على جودة التنفيذ ضمن بيئات عمل هجينة.',
    },
    author: 'Ops Team',
    date: 'May 02, 2026',
    readTime: '6 min',
    href: '/blog/content-systems',
  },
]

const BlogPage = () => {
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

  const filters = isArabic
    ? ['الكل', 'تسويق', 'ذكاء اصطناعي', 'قيادة', 'تقنية']
    : ['All', 'Marketing', 'AI', 'Leadership', 'Technology']

  return (
    <motion.main
      className="bg-surface pb-16 text-body"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <Seo
        title={`${isArabic ? 'المدونة' : 'Blog'} | ${siteIdentity.name}`}
        description={
          isArabic
            ? 'مقالات عملية حول التسويق الرقمي، النمو، والتحليل.'
            : 'Actionable writing on digital marketing, growth, and analytics.'
        }
        locale={locale}
        type="article"
      />

      <section className="section-shell bg-surface/92 pt-12 [--section-fade:rgba(28,14,15,0.92)]">
        <Container className="space-y-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="inline-flex rounded-full border border-primary-700/25 bg-surface-elevated px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-500">
                {isArabic ? 'مقالات وموارد' : 'Insights & Resources'}
              </p>
              <h1 className="mt-3 text-4xl font-display font-semibold text-heading sm:text-5xl">
                {isArabic ? 'مدونتنا' : 'Our Blog'}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {isArabic
                  ? 'محتوى مصمم لمساعدة الفرق على تحويل الأفكار إلى تنفيذ قابل للقياس.'
                  : 'Thoughtful articles for teams that want to turn ideas into measurable execution.'}
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-surface-elevated p-2 shadow-soft">
              <img
                src="/clients/client-03.jpg"
                alt=""
                className="h-20 w-32 rounded-lg object-cover sm:h-24 sm:w-40"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  index === 0
                    ? 'bg-primary-600 text-primary-50'
                    : 'border border-border bg-surface-elevated text-muted hover:border-primary-400 hover:text-heading'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.35fr]">
            <div className="grid gap-5 md:grid-cols-2">
              {blogItems.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-soft"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title[locale]}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-primary-700/30 bg-surface/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-200">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-4">
                    <h2 className="line-clamp-2 text-lg font-semibold text-heading">
                      {post.title[locale]}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt[locale]}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[11px] text-muted">
                      <span>{post.author}</span>
                      <span className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </span>
                    </div>

                    <Link
                      to={post.href}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-500 transition hover:text-primary-400"
                    >
                      {isArabic ? 'اقرأ المزيد' : 'Read more'}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-4">
              <div className="rounded-xl border border-border bg-surface-elevated p-4 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {isArabic ? 'ابحث' : 'Search'}
                </p>
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5">
                  <Search className="h-4 w-4 text-muted" />
                  <input
                    className="w-full bg-transparent text-sm text-heading outline-none placeholder:text-muted/70"
                    placeholder={isArabic ? 'ابحث في المقالات...' : 'Search articles...'}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-elevated p-4 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {isArabic ? 'مقالات شائعة' : 'Popular posts'}
                </p>
                <div className="mt-3 space-y-3">
                  {blogItems.slice(0, 3).map((post) => (
                    <Link
                      key={`${post.id}-popular`}
                      to={post.href}
                      className="block rounded-lg border border-border bg-surface p-3 transition hover:border-primary-400"
                    >
                      <p className="text-xs font-semibold text-heading">{post.title[locale]}</p>
                      <p className="mt-1 text-[11px] text-muted">{post.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-elevated p-4 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {isArabic ? 'الفئات' : 'Categories'}
                </p>
                <div className="mt-3 space-y-2">
                  {['Marketing', 'Growth', 'AI', 'Leadership'].map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-xs text-muted"
                    >
                      <span className="inline-flex items-center gap-1">
                        <Tag className="h-3.5 w-3.5 text-primary-500" />
                        {category}
                      </span>
                      <span>{Math.floor(Math.random() * 8) + 3}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-primary-700/20 bg-gradient-to-br from-primary-700 via-secondary-500 to-primary-900 p-4 text-primary-50 shadow-soft">
                <p className="text-lg font-display font-semibold">
                  {isArabic ? 'ابدأ قصة النمو القادمة' : 'Start Your Next Story'}
                </p>
                <p className="mt-1 text-xs text-primary-100">
                  {isArabic
                    ? 'احجز جلسة استراتيجية مجانية مع فريقنا.'
                    : 'Book a free strategy session with our team.'}
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-3 py-2 text-xs font-semibold text-primary-900 transition hover:bg-primary-400"
                >
                  {isArabic ? 'تواصل الآن' : 'Contact us'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>

          <section className="rounded-2xl border border-border bg-surface-elevated p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-display font-semibold text-heading">
                {isArabic ? 'الأكثر تداولًا هذا الأسبوع' : 'Trending This Week'}
              </h3>
              <Link
                to="/blog/content-systems"
                className="text-xs font-semibold text-primary-500 hover:text-primary-400"
              >
                {isArabic ? 'عرض الكل' : 'View all'}
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {blogItems.slice(0, 3).map((post) => (
                <Link
                  key={`${post.id}-trending`}
                  to={post.href}
                  className="overflow-hidden rounded-xl border border-border bg-surface transition hover:border-primary-400"
                >
                  <img
                    src={post.image}
                    alt={post.title[locale]}
                    className="h-28 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <p className="line-clamp-2 text-sm font-semibold text-heading">
                      {post.title[locale]}
                    </p>
                    <p className="mt-1 text-[11px] text-muted">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </motion.main>
  )
}

export default BlogPage
