import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { Container } from '../atoms/Container'
import { services as servicesContent } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/presets'

export const HomeShowcaseSection = () => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'
  const services = servicesContent.slice(0, 6)

  const features = isArabic
    ? [
        {
          title: 'خطة نمو واضحة',
          description: 'خارطة طريق ذكية تربط المحتوى بالمبيعات.',
        },
        {
          title: 'إبداع موجه للنتائج',
          description: 'تصاميم ورسائل تحفز التفاعل والتحويل.',
        },
        {
          title: 'تقارير سهلة القراءة',
          description: 'لوحات قياس أسبوعية تُظهر التقدم الحقيقي.',
        },
      ]
    : [
        {
          title: 'Clear growth roadmap',
          description: 'Strategic plans that connect content to sales.',
        },
        {
          title: 'Creative built for results',
          description: 'Design and copy crafted to drive action.',
        },
        {
          title: 'Readable performance reports',
          description: 'Weekly dashboards that show real progress.',
        },
      ]

  const projects = isArabic
    ? [
        {
          title: 'إطلاق علامة جديدة',
          tag: 'حملة اجتماعية',
          image: '/clients/client-01.jpg',
        },
        {
          title: 'محتوى فعاليات حية',
          tag: 'تصوير وإخراج',
          image: '/clients/client-02.jpg',
        },
        {
          title: 'حملة موسم رمضان',
          tag: 'إعلانات رقمية',
          image: '/clients/client-03.jpg',
        },
        {
          title: 'إدارة مجتمع نشط',
          tag: 'دعم وتجربة',
          image: '/clients/client-04.jpg',
        },
      ]
    : [
        {
          title: 'New brand launch',
          tag: 'Social campaign',
          image: '/clients/client-01.jpg',
        },
        {
          title: 'Live event coverage',
          tag: 'Production',
          image: '/clients/client-02.jpg',
        },
        {
          title: 'Ramadan seasonal push',
          tag: 'Digital ads',
          image: '/clients/client-03.jpg',
        },
        {
          title: 'Community care',
          tag: 'Support & CX',
          image: '/clients/client-04.jpg',
        },
      ]

  return (
    <section className="section-shell bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
      <Container className="space-y-12 py-14 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="relative min-h-[240px] bg-primary-50">
                <img
                  src="/clients/client-hero.jpg"
                  alt={isArabic ? 'مشروع عميل' : 'Client project'}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(255,255,255,0.35))]" />
                <div className="absolute left-6 top-6 rounded-full border border-border bg-surface-elevated/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-600">
                  {isArabic ? 'حالة نجاح' : 'Case Study'}
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-surface-elevated/90 p-4 text-xs text-muted shadow-soft">
                  {isArabic
                    ? 'نعمل مع العلامات المحلية لتحويل التفاعل إلى زيارات ومبيعات.'
                    : 'Helping local brands turn engagement into visits and sales.'}
                </div>
              </div>

              <div className="p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary-600">
                  {isArabic ? 'نحن iHelp' : 'We are iHelp'}
                </p>
                <h2 className="mt-4 text-2xl font-display font-semibold text-heading md:text-3xl">
                  {isArabic
                    ? 'نحوّل المتابعين إلى عملاء محليين.'
                    : 'We turn followers into local customers.'}
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {isArabic
                    ? 'محتوى، إعلانات، واستراتيجية متكاملة تركّز على النمو الحقيقي.'
                    : 'Content, ads, and strategy designed around measurable growth.'}
                </p>

                <div className="mt-6 grid gap-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex gap-3">
                      <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600/10 text-primary-600">
                        <Check className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-heading">{feature.title}</div>
                        <div className="text-xs text-muted">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="rounded-full bg-primary-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-primary-700"
                  >
                    {isArabic ? 'ابدأ مشروعًا' : 'Start a project'}
                  </Link>
                  <Link
                    to="/services"
                    className="rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-heading transition hover:border-primary-300"
                  >
                    {isArabic ? 'عرض الخدمات' : 'View services'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted">
            {isArabic ? 'الخدمات الأساسية' : 'Core services'}
          </p>
          <h3 className="mt-3 text-2xl font-display font-semibold text-heading md:text-3xl">
            {isArabic ? 'حلول متكاملة لكل مرحلة' : 'Complete solutions for every stage'}
          </h3>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          {services.map((service, idx) => (
            <motion.div key={service.id} variants={fadeUp} custom={idx * 0.05}>
              <Link
                to={`/services/${service.slug}`}
                className="group block rounded-xl border border-border bg-surface p-6 text-heading shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-xs font-semibold text-primary-600">
                  0{idx + 1}
                </div>
                <h4 className="mt-5 text-lg font-semibold">{service.title[locale]}</h4>
                <p className="mt-2 text-sm text-muted">{service.summary[locale]}</p>
                <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-600">
                  {isArabic ? 'اعرف المزيد' : 'Learn more'}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted">
              {isArabic ? 'أعمالنا الأخيرة' : 'Latest work'}
            </p>
            <h3 className="mt-2 text-2xl font-display font-semibold text-heading md:text-3xl">
              {isArabic ? 'أحدث المشاريع' : 'Our Latest Projects'}
            </h3>
          </div>
          <Link
            to="/contact"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-600 transition hover:text-primary-500"
          >
            {isArabic ? 'تواصل معنا' : 'Contact us'}
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          {projects.map((project, idx) => (
            <motion.div key={project.title} variants={fadeUp} custom={idx * 0.05}>
              <div className="rounded-xl border border-border bg-surface p-4 text-heading shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.2))]" />
                </div>
                <div className="mt-4 text-sm font-semibold">{project.title}</div>
                <div className="text-xs text-muted">{project.tag}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
