import { Mail, MessageCircle, Phone } from 'lucide-react'
import { Container } from '../atoms/Container'
import { SectionHeading } from '../atoms/SectionHeading'
import { Input, TextArea } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { contact } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'
import { t } from '@/utils/i18n'
import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/presets'

export const ContactSection = () => {
  const { locale } = useLocale()
  const isArabic = locale === 'ar'

  return (
    <section className="section-shell bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
      <Container className="grid gap-10 py-14 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <SectionHeading
            eyebrow={t(locale, 'contact')}
            title={t(locale, 'contact_title')}
            description={
              isArabic
                ? 'شارك أهدافك وسنعود لك بخطة واضحة قابلة للتنفيذ.'
                : 'Tell us your goals and we will return with a practical plan.'
            }
          />
          <div className="mt-6 grid gap-3 text-sm text-muted">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 transition hover:text-primary-600"
            >
              <Phone className="h-4 w-4" />
              0536011619
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 transition hover:text-primary-600"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              className="inline-flex items-center gap-2 transition hover:text-primary-600"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              {contact.whatsapp}
            </a>
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ delay: 0.1 }}
          className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-soft"
        >
          <Input
            name="name"
            placeholder={isArabic ? 'الاسم الكامل' : 'Full name'}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder={isArabic ? 'البريد الإلكتروني' : 'Email'}
            required
          />
          <Input
            name="service"
            placeholder={isArabic ? 'نوع الخدمة' : 'Service of interest'}
          />
          <TextArea
            name="message"
            placeholder={isArabic ? 'رسالتك' : 'Tell us about your goals'}
            rows={4}
          />
          <Button type="submit" block>
            {isArabic ? 'إرسال' : 'Send'}
          </Button>
          <p className="text-xs text-muted">
            {isArabic
              ? 'بالإرسال، أنت توافق على سياسة الخصوصية.'
              : 'By submitting you agree to our privacy notice.'}
          </p>
        </motion.form>
      </Container>
    </section>
  )
}
