import {
  ArrowRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/atoms/Container'
import { Seo } from '@/seo/Seo'
import { contact, siteIdentity } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'

const ContactPage = () => {
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

  return (
    <motion.main
      className="bg-surface pb-16 text-body"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <Seo
        title={`${isArabic ? 'تواصل' : 'Contact'} | ${siteIdentity.name}`}
        description={
          isArabic
            ? 'تواصل مع فريق iHelp Social لبناء خطة نمو عملية ومناسبة لهدف علامتك.'
            : 'Reach iHelp Social to craft a practical growth strategy tailored to your goals.'
        }
        locale={locale}
      />

      <section className="section-shell bg-surface/92 pt-12 [--section-fade:rgba(28,14,15,0.92)]">
        <Container className="space-y-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-primary-700/25 bg-surface-elevated px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-500">
              {isArabic ? 'تواصل باحترافية' : 'Connect with excellence'}
            </p>
            <h1 className="mt-4 text-4xl font-display font-semibold leading-tight text-heading sm:text-5xl">
              {isArabic ? 'جاهز لتحويل قصتك الرقمية؟' : 'Ready to Transform Your Digital Story?'}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {isArabic
                ? 'فريقنا جاهز لمراجعة حضورك الحالي وبناء خطة تسويق قابلة للتنفيذ حسب أولوياتك.'
                : 'Our experts are ready to audit your current presence and craft a strategy that drives measurable growth.'}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft sm:p-7">
              <h2 className="text-2xl font-display font-semibold text-heading">
                {isArabic ? 'اطلب عرضًا' : 'Request a Proposal'}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {isArabic
                  ? 'املأ النموذج وسيعود فريقنا إليك خلال 24 ساعة.'
                  : 'Fill out the form below and our strategy team will reply within 24 hours.'}
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-muted">
                    {isArabic ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input
                    className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-heading outline-none transition placeholder:text-muted/70 focus:border-primary-500"
                    placeholder={isArabic ? 'الاسم' : 'John Doe'}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-muted">
                    {isArabic ? 'اسم الشركة' : 'Company Name'}
                  </label>
                  <input
                    className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-heading outline-none transition placeholder:text-muted/70 focus:border-primary-500"
                    placeholder={isArabic ? 'الشركة' : 'Business LLC'}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-muted">
                    {isArabic ? 'البريد الإلكتروني' : 'Work Email'}
                  </label>
                  <input
                    type="email"
                    className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-heading outline-none transition placeholder:text-muted/70 focus:border-primary-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-muted">
                    {isArabic ? 'الخدمة المطلوبة' : 'Desired Service'}
                  </label>
                  <input
                    className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-heading outline-none transition placeholder:text-muted/70 focus:border-primary-500"
                    placeholder={isArabic ? 'مثال: إدارة إعلانات' : 'Ex: Paid Media'}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold text-muted">
                  {isArabic ? 'نبذة عن المشروع' : 'Tell us your goals'}
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-border bg-surface px-3 py-3 text-sm text-heading outline-none transition placeholder:text-muted/70 focus:border-primary-500"
                  placeholder={
                    isArabic
                      ? 'صف أهدافك، الجمهور، والميزانية المتوقعة...'
                      : 'Share your goals, target audience, and expected timeline...'
                  }
                />
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-700 via-secondary-500 to-primary-900 px-5 py-3 text-sm font-semibold text-primary-50 transition hover:opacity-95"
              >
                {isArabic ? 'إرسال الرسالة' : 'Send Message'}
                <Send className="h-4 w-4" />
              </button>

              <p className="mt-3 text-center text-[11px] text-muted">
                {isArabic
                  ? 'بالإرسال، أنت توافق على سياسة الخصوصية.'
                  : 'By submitting, you agree to our Privacy Policy.'}
              </p>
            </form>

            <div className="space-y-4">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-between rounded-xl border border-border bg-surface-elevated px-4 py-3 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                      {isArabic ? 'هاتف' : 'Phone'}
                    </p>
                    <p className="text-sm font-semibold text-heading">{contact.phone}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted" />
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-between rounded-xl border border-border bg-surface-elevated px-4 py-3 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                      {isArabic ? 'البريد' : 'Official Email'}
                    </p>
                    <p className="text-sm font-semibold text-heading">{contact.email}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted" />
              </a>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`https://www.instagram.com/${contact.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-surface-elevated px-4 py-3 shadow-soft"
                >
                  <div className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-primary-600" />
                    <span className="text-xs font-semibold text-heading">Instagram</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted" />
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-surface-elevated px-4 py-3 shadow-soft"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary-600" />
                    <span className="text-xs font-semibold text-heading">WhatsApp</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted" />
                </a>
              </div>

              <div className="rounded-xl border border-border bg-surface-elevated px-4 py-3 shadow-soft">
                <div className="flex items-start gap-2 text-sm text-muted">
                  <Clock3 className="mt-0.5 h-4 w-4 text-primary-600" />
                  <div>
                    <p className="font-semibold text-heading">
                      {isArabic ? 'وقت الرد' : 'Response Time'}
                    </p>
                    <p>{isArabic ? 'عادة خلال أقل من 24 ساعة.' : 'Usually within 24 hours.'}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-start gap-2 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary-600" />
                  <div>
                    <p className="font-semibold text-heading">
                      {isArabic ? 'المقر' : 'Headquarters'}
                    </p>
                    <p>{isArabic ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-primary-700/20 bg-gradient-to-r from-primary-700 via-secondary-500 to-primary-900 px-8 py-10 text-center text-primary-50 shadow-soft">
            <h3 className="text-3xl font-display font-semibold">
              {isArabic ? 'لا تكتفِ بالمنافسة. قد السوق.' : "Don't just join the market. Lead it."}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-100">
              {isArabic
                ? 'انضم إلى iHelp Social حيث تتحول العلامات الطموحة إلى قصص نمو قابلة للقياس.'
                : 'Join iHelp Social where ambitious brands turn into measurable growth stories.'}
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-primary-900 transition hover:bg-primary-400"
            >
              {isArabic ? 'تواصل الآن' : 'Contact Us Now'}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </motion.main>
  )
}

export default ContactPage
