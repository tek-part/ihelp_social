import { Container } from '../atoms/Container'
import { TestimonialCard } from '../molecules/TestimonialCard'
import { testimonials } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'
import { t } from '@/utils/i18n'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/presets'

export const TestimonialsSection = () => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'

  return (
    <section className="section-shell bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
      <Container className="py-14 md:py-24">
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
            {t(locale, 'testimonials_title')}
          </span>
          <h2 className="mt-5 text-3xl font-display font-semibold text-heading md:text-4xl">
            {isArabic ? 'موثوق من قادة الصناعة' : 'Trusted by Industry Leaders'}
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: idx * 0.08 },
                },
              }}
            >
              <TestimonialCard
                quote={testimonial.quote[locale]}
                name={testimonial.name}
                role={testimonial.role}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
