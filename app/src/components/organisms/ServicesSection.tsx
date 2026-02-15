import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../atoms/SectionHeading'
import { Container } from '../atoms/Container'
import { ServiceCard } from '../molecules/ServiceCard'
import { services as servicesContent } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'
import { t } from '@/utils/i18n'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/presets'

type Props = {
  limit?: number
  variant?: 'default' | 'showcase'
}

const iconBars = [
  ['h-3', 'h-5', 'h-4'],
  ['h-5', 'h-3', 'h-6'],
  ['h-4', 'h-6', 'h-3'],
  ['h-6', 'h-4', 'h-5'],
]

export const ServicesSection = ({ limit, variant = 'default' }: Props) => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'
  const list = limit ? servicesContent.slice(0, limit) : servicesContent

  if (variant === 'showcase') {
    return (
      <section className="section-shell bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
        <Container className="py-14 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-surface-elevated px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
                {isArabic ? 'خبرتنا' : 'Our Expertise'}
              </span>
              <h2 className="mt-5 text-3xl font-display font-semibold text-heading md:text-4xl">
                {isArabic ? 'حلول اجتماعية شاملة' : 'Comprehensive Social Solutions'}
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted">
                {isArabic
                  ? 'من الاستراتيجية إلى المحتوى والتصميم والإعلانات، فريق واحد يدعم نموك.'
                  : 'From strategy to content, design, and ads - one team that scales your growth.'}
              </p>
            </div>
            <Link
              to="/services"
              aria-label={isArabic ? 'كل الخدمات' : 'All services'}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary-300 hover:text-heading"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((service, idx) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group rounded-2xl border border-border bg-surface-elevated p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50">
                  <div className="flex items-end gap-1">
                    {iconBars[idx % iconBars.length].map((height, barIdx) => (
                      <span
                        key={`${service.id}-bar-${barIdx}`}
                        className={`w-0.5 ${height} rounded-full bg-primary-600`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-heading">{service.title[locale]}</h3>
                <p className="mt-2 text-sm text-muted">{service.summary[locale]}</p>
                <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-600 transition group-hover:text-primary-500">
                  {isArabic ? 'اعرف المزيد' : 'Learn more'}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="section-shell bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
      <Container className="space-y-8 py-14 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <SectionHeading
            eyebrow={t(locale, 'services')}
            title={isArabic ? 'حلول تغطي رحلتك الرقمية' : 'Solutions across your digital journey'}
            description={
              isArabic
                ? 'من الاستراتيجية إلى التصميم والإعلانات والتحليل، فريق واحد متكامل.'
                : 'From strategy to design, ads, and analytics - one integrated team.'
            }
          />
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          {list.map((service, idx) => (
            <ServiceCard
              key={service.id}
              title={service.title[locale]}
              summary={service.summary[locale]}
              outcomes={service.outcomes[locale]}
              metrics={service.metrics}
              to={`/services/${service.slug}`}
              index={idx}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
