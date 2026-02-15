import { Container } from '../atoms/Container'
import { SectionHeading } from '../atoms/SectionHeading'
import { BlogCard } from '../molecules/BlogCard'
import { blogPosts } from '@/config/content'
import { useLocale } from '@/context/LocaleContext'
import { t } from '@/utils/i18n'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/presets'

export const BlogSection = () => {
  const { locale } = useLocale()
  return (
    <section className="section-shell bg-surface/85 backdrop-blur-sm [--section-fade:rgba(28,14,15,0.85)]">
      <Container className="space-y-10 py-14 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <SectionHeading
            eyebrow={t(locale, 'blog_title')}
            title={locale === 'ar' ? 'معرفة قابلة للتنفيذ' : 'Actionable knowledge'}
            description={
              locale === 'ar'
                ? 'مقالات مختصرة حول الأداء والإعلانات وبناء أنظمة محتوى فعالة.'
                : 'Concise articles on performance, ads, and content systems.'
            }
            align="center"
          />
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          {blogPosts.map((post, idx) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title[locale]}
              summary={post.summary[locale]}
              category={post.category}
              readTime={post.readTime}
              index={idx}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
