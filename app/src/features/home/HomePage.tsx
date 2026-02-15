import { Seo } from '@/seo/Seo'
import { Hero } from '@/components/organisms/Hero'
import { HomeShowcaseSection } from '@/components/organisms/HomeShowcaseSection'
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection'
import { BlogSection } from '@/components/organisms/BlogSection'
import { ContactSection } from '@/components/organisms/ContactSection'
import { CTASection } from '@/components/organisms/CTASection'
import { useLocale } from '@/context/LocaleContext'
import { siteIdentity } from '@/config/content'
import { seoDefaults } from '@/config/constants'
import { motion } from 'framer-motion'

const HomePage = () => {
  const { locale } = useLocale()
  const marqueeItems =
    locale === 'ar'
      ? ['نمو', 'مجتمع', 'استراتيجية', 'محتوى']
      : ['growth', 'community', 'strategy', 'content']
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
    >
      <Seo
        title={seoDefaults.title}
        description={siteIdentity.description[locale]}
        url="https://ihelp.social"
        image={seoDefaults.image}
        locale={locale}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteIdentity.name,
          description: siteIdentity.description[locale],
          url: 'https://ihelp.social',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+966536011619',
              contactType: 'customer service',
              availableLanguage: ['en', 'ar'],
            },
          ],
        }}
      />
      <Hero />
      <section className="section-shell bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
        <div className="py-14 md:py-20">
          <div className="marquee">
            <div className="marquee-track">
              {marqueeItems.map((item) => (
                <span key={item} className="marquee-item">
                  {item}
                </span>
              ))}
              {marqueeItems.map((item) => (
                <span key={`${item}-duplicate`} className="marquee-item" aria-hidden="true">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HomeShowcaseSection />
      <CTASection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </motion.main>
  )
}

export default HomePage

