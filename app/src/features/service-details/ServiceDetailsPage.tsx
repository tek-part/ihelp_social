import { useParams, Navigate } from 'react-router-dom'
import { services } from '@/config/content'
import { Container } from '@/components/atoms/Container'
import { Card } from '@/components/atoms/Card'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { Badge } from '@/components/atoms/Badge'
import { Seo } from '@/seo/Seo'
import { useLocale } from '@/context/LocaleContext'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/presets'

const ServiceDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useLocale()
  const isArabic = locale === 'ar'
  const service = services.find((item) => item.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  return (
    <motion.main
      className="bg-surface py-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <Seo
        title={`${service.title[locale]} | iHelp Social`}
        description={service.summary[locale]}
        locale={locale}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title[locale],
          description: service.summary[locale],
          provider: { '@type': 'Organization', name: 'iHelp Social' },
          areaServed: 'Saudi Arabia',
        }}
      />
      <Container className="space-y-8">
        <SectionHeading
          eyebrow={isArabic ? 'تفاصيل الخدمة' : 'Service details'}
          title={service.title[locale]}
          description={service.summary[locale]}
        />
        <motion.div
          className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <motion.div variants={fadeUp}>
            <Card>
              <h3 className="text-lg font-semibold text-heading">
                {isArabic ? 'النتائج المتوقعة' : 'Key outcomes'}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.outcomes[locale].map((item) => (
                  <Badge key={item} tone="neutral">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card>
              <h3 className="text-lg font-semibold text-heading">
                {isArabic ? 'مقاييس النجاح' : 'Success metrics'}
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {service.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-border bg-surface-elevated p-3"
                  >
                    <div className="font-semibold text-heading">{metric.value}</div>
                    <div className="text-muted">{metric.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </motion.main>
  )
}

export default ServiceDetailsPage
