import { useEffect } from 'react'

type StructuredData = Record<string, unknown>

type SeoProps = {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile' | string
  locale?: string
  structuredData?: StructuredData | StructuredData[]
}

const setMeta = (name: string, content?: string | null) => {
  if (!content) return
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const setProperty = (property: string, content?: string | null) => {
  if (!content) return
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const setStructuredData = (data?: StructuredData | StructuredData[]) => {
  const existing = document.getElementById('structured-data')
  if (existing) {
    existing.remove()
  }
  if (!data) return
  const script = document.createElement('script')
  script.id = 'structured-data'
  script.type = 'application/ld+json'
  script.text = JSON.stringify(data)
  document.head.appendChild(script)
}

export const Seo = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  locale = 'en',
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.title = title
    setMeta('description', description)
    if (keywords?.length) setMeta('keywords', keywords.join(', '))
    setProperty('og:title', title)
    setProperty('og:description', description)
    setProperty('og:type', type)
    if (url) setProperty('og:url', url)
    if (image) setProperty('og:image', image)
    setProperty('og:locale', locale === 'ar' ? 'ar_AR' : 'en_US')
    setMeta('twitter:card', image ? 'summary_large_image' : 'summary')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    if (image) setMeta('twitter:image', image)
    setStructuredData(structuredData)
  }, [title, description, keywords, image, url, type, locale, structuredData])

  return null
}
