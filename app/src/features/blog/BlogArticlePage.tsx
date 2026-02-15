import { useParams, Navigate } from 'react-router-dom'
import { blogPosts } from '@/config/content'
import { Container } from '@/components/atoms/Container'
import { Seo } from '@/seo/Seo'
import { useLocale } from '@/context/LocaleContext'

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useLocale()
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="bg-surface py-16">
      <Seo
        title={`${post.title[locale]} | iHelp Social`}
        description={post.summary[locale]}
        locale={locale}
        type="article"
      />
      <Container className="space-y-4">
        <p className="text-sm uppercase text-primary-600">{post.category}</p>
        <h1 className="text-3xl font-bold text-heading">{post.title[locale]}</h1>
        <p className="text-muted">{post.summary[locale]}</p>
        <div className="rounded-xl border border-border bg-surface-elevated p-6 text-muted">
          {locale === 'ar'
            ? 'المقال الكامل سيُضاف قريبًا. حاليًا هذا مجرد ملخص سريع.'
            : 'Full article coming soon. For now, this is a concise preview.'}
        </div>
      </Container>
    </div>
  )
}

export default BlogArticlePage
