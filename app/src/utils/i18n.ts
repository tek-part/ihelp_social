import type { Locale } from '@/context/LocaleContext'

type Dictionary = Record<string, Record<Locale, string>>

const dictionary: Dictionary = {
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About', ar: 'من نحن' },
  services: { en: 'Services', ar: 'الخدمات' },
  works: { en: 'Works', ar: 'الأعمال' },
  blog: { en: 'Blog', ar: 'المدونة' },
  contact: { en: 'Contact', ar: 'تواصل' },
  hero_title: {
    en: 'Social media that works like a growth engine.',
    ar: 'سوشيال ميديا تعمل كآلة نمو حقيقية.',
  },
  hero_subtitle: {
    en: 'Strategy, content, ads, and analytics in one agile team.',
    ar: 'استراتيجية، محتوى، إعلانات وتحليلات من فريق واحد متكامل.',
  },
  view_services: { en: 'View Services', ar: 'عرض الخدمات' },
  book_call: { en: 'Book a call', ar: 'احجز مكالمة' },
  stats_title: { en: 'What we deliver', ar: 'ما نقدمه' },
  testimonials_title: { en: 'Client trust', ar: 'ثقة العملاء' },
  blog_title: { en: 'Insights', ar: 'رؤى' },
  contact_title: { en: 'Let’s talk', ar: 'هيا نتحدث' },
  cookie_message: {
    en: 'We use cookies to improve experience and measure performance.',
    ar: 'نستخدم الكوكيز لتحسين التجربة وقياس الأداء.',
  },
  accept: { en: 'Accept', ar: 'موافقة' },
  reject: { en: 'Reject', ar: 'رفض' },
  language: { en: 'AR', ar: 'EN' },
  theme: { en: 'Theme', ar: 'الوضع' },
}

export const t = (locale: Locale, key: keyof typeof dictionary) =>
  dictionary[key]?.[locale] ?? key
