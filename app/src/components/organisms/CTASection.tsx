import { ArrowRight, PhoneCall } from 'lucide-react'
import { Container } from '../atoms/Container'
import { Button } from '../atoms/Button'
import { heroCtaLinks } from '@/config/constants'
import { useLocale } from '@/context/LocaleContext'
import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/presets'

export const CTASection = () => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'

  return (
    <section className="section-shell bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
      <Container className="py-14 md:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="flex flex-col gap-4 rounded-2xl border border-border bg-surface-elevated p-8 shadow-soft md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-2xl font-display font-semibold text-heading">
              {isArabic ? 'جاهز لنتائج أوضح؟' : 'Ready for clearer results?'}
            </h3>
            <p className="text-muted">
              {isArabic
                ? 'اترك إدارة قنواتك الرقمية لنا لتحصل على نمو يمكن قياسه.'
                : 'Let us run your social channels so you get measurable growth.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href={heroCtaLinks.whatsapp} target="_blank" rel="noreferrer">
              <PhoneCall className="h-4 w-4" />
              {isArabic ? 'تحدث الآن' : 'Talk now'}
            </Button>
            <Button as="a" href="/contact" variant="ghost">
              {isArabic ? 'أرسل طلبًا' : 'Send a request'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
