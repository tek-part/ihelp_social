import type { Locale } from '@/context/LocaleContext'

export const siteIdentity = {
  name: 'iHelp Social',
  tagline: {
    en: 'Social media solutions that turn engagement into growth.',
    ar: 'حلول سوشيال ميديا تحول التفاعل إلى نمو حقيقي.',
  },
  description: {
    en: 'Specialized in social media solutions, empowering individuals and brands to build an impactful digital presence, boost engagement, and achieve clear results and reports through well-planned strategies.',
    ar: 'متخصصون في حلول السوشيال ميديا، نمكّن الأفراد والعلامات التجارية من بناء حضور رقمي مؤثر، رفع التفاعل، وتحقيق نتائج واضحة عبر استراتيجيات مدروسة.',
  },
}

export const contact = {
  phone: '966536011619',
  whatsapp: '966536011619',
  email: 'ihelp.sociall@gmail.com',
  instagram: 'ihelp.social',
  tiktok: 'ihelp.social',
}

export type Service = {
  id: string
  slug: string
  title: Record<Locale, string>
  summary: Record<Locale, string>
  outcomes: Record<Locale, string[]>
  metrics: { label: string; value: string }[]
}

export const services: Service[] = [
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: { en: 'Social Media Management', ar: 'إدارة حسابات التواصل' },
    summary: {
      en: 'Full-funnel content, scheduling, and community care that grows trust and reach.',
      ar: 'إدارة المحتوى والجدولة والتفاعل مع الجمهور لبناء ثقة وانتشار مستمر.',
    },
    outcomes: {
      en: ['Editorial calendars', 'Community engagement', 'Brand-safe moderation'],
      ar: ['جداول محتوى شهرية', 'تفاعل وإدارة المجتمع', 'ضبط التعليقات وحماية الهوية'],
    },
    metrics: [
      { label: 'Avg. engagement lift', value: '+32%' },
      { label: 'Response SLAs', value: '<30m' },
    ],
  },
  {
    id: 'graphic-design-branding',
    slug: 'graphic-design-branding',
    title: { en: 'Graphic Design & Branding', ar: 'التصميم والهوية البصرية' },
    summary: {
      en: 'Visual systems, templates, and campaigns crafted for social performance.',
      ar: 'أنظمة هوية وقوالب وحملات بصرية مصممة للأداء على السوشيال.',
    },
    outcomes: {
      en: ['Brand kits', 'Template systems', 'Motion snippets'],
      ar: ['أدلة هوية', 'قوالب جاهزة', 'مقاطع موشن قصيرة'],
    },
    metrics: [
      { label: 'Asset turnaround', value: '48h' },
      { label: 'Platforms', value: 'IG, TT, X, YT' },
    ],
  },
  {
    id: 'digital-ads',
    slug: 'digital-ads',
    title: { en: 'Digital Advertising Campaigns', ar: 'حملات إعلانية رقمية' },
    summary: {
      en: 'Performance-focused campaigns across Meta, TikTok, and Google with clear reporting.',
      ar: 'حملات أداء على ميتا وتيك توك وجوجل مع تقارير واضحة وقابلة للتنفيذ.',
    },
    outcomes: {
      en: ['Creative + media pairing', 'A/B testing', 'Pixel & event hygiene'],
      ar: ['مواءمة الإبداع مع شراء الوسائط', 'اختبارات A/B مستمرة', 'تهيئة البيكسل والأحداث'],
    },
    metrics: [
      { label: 'ROAS targets', value: '3-5x' },
      { label: 'Optimization windows', value: '7d' },
    ],
  },
  {
    id: 'websites',
    slug: 'websites',
    title: { en: 'Website Creation & Management', ar: 'إنشاء وإدارة المواقع' },
    summary: {
      en: 'Fast, SEO-first sites with analytics-ready foundations and ongoing care.',
      ar: 'مواقع سريعة ومهيأة لمحركات البحث مع بنية تحليلية وإدارة مستمرة.',
    },
    outcomes: {
      en: ['Landing pages', 'CMS handover', 'Performance budgets'],
      ar: ['صفحات هبوط', 'تسليم وإدارة CMS', 'ضوابط أداء تقنية'],
    },
    metrics: [
      { label: 'Core Web Vitals', value: 'AA' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'content-writing',
    slug: 'content-writing',
    title: { en: 'Marketing Content Writing', ar: 'كتابة المحتوى التسويقي' },
    summary: {
      en: 'Scripts, captions, and articles that stay on-brand and drive action.',
      ar: 'سكريبتات وتعليقات ومقالات متسقة مع هوية العلامة وتدفع للتفاعل.',
    },
    outcomes: {
      en: ['Tone-of-voice guides', 'Caption banks', 'Landing copy'],
      ar: ['أدلة نبرة الصوت', 'بنك تعليقات جاهز', 'كتابة صفحات الهبوط'],
    },
    metrics: [
      { label: 'Approval cycles', value: '<=2' },
      { label: 'Languages', value: 'AR / EN' },
    ],
  },
  {
    id: 'strategy',
    slug: 'strategy',
    title: { en: 'Marketing Strategy Planning', ar: 'تخطيط الاستراتيجية التسويقية' },
    summary: {
      en: 'Channel strategy, ICP clarity, and performance dashboards that leaders trust.',
      ar: 'استراتيجية قنوات واضحة، تحديد دقيق للجمهور، ولوحات أداء موثوقة للإدارة.',
    },
    outcomes: {
      en: ['Quarterly roadmaps', 'Audience maps', 'KPIs with owners'],
      ar: ['خطط ربع سنوية', 'خرائط الجمهور', 'مؤشرات أداء واضحة ومسؤوليات'],
    },
    metrics: [
      { label: 'Planning horizon', value: '90d' },
      { label: 'Reporting cadence', value: 'Weekly' },
    ],
  },
  {
    id: 'analytics',
    slug: 'analytics',
    title: { en: 'Performance Analysis & Reports', ar: 'تحليل الأداء والتقارير' },
    summary: {
      en: 'Clear, action-oriented dashboards and insights to steer spend and content.',
      ar: 'لوحات واضحة وتوصيات عملية لتوجيه الإنفاق وتحسين المحتوى.',
    },
    outcomes: {
      en: ['Attribution sanity', 'Experiment logs', 'Executive briefs'],
      ar: ['تحقق من دقة الإسناد', 'سجل التجارب', 'ملخصات تنفيذية للإدارة'],
    },
    metrics: [
      { label: 'Report speed', value: 'T+1d' },
      { label: 'Attribution', value: 'Multi-touch' },
    ],
  },
  {
    id: 'consulting',
    slug: 'consulting',
    title: { en: 'Marketing Consultancy', ar: 'استشارات تسويقية' },
    summary: {
      en: 'Advisory sessions to solve positioning, creative, or measurement gaps.',
      ar: 'جلسات استشارية لسد فجوات التموضع والإبداع والقياس.',
    },
    outcomes: {
      en: ['Workshop facilitation', 'Playbooks', 'Hiring support'],
      ar: ['ورش عمل', 'أدلة تشغيل', 'دعم التوظيف'],
    },
    metrics: [
      { label: 'Advisory format', value: 'Live + async' },
      { label: 'Follow-ups', value: '2 weeks' },
    ],
  },
]

export const testimonials = [
  {
    name: 'Layla M.',
    role: 'Brand Manager',
    quote: {
      en: 'The iHelp Social team translated our voice into engaging weekly stories and doubled our saves.',
      ar: 'فريق iHelp Social حوّل صوت علامتنا إلى قصص أسبوعية جذابة وضاعف معدلات الحفظ.',
    },
  },
  {
    name: 'Khalid A.',
    role: 'E-commerce Lead',
    quote: {
      en: 'Campaigns launched fast, reporting was clean, and optimizations were proactive.',
      ar: 'الإطلاق كان سريعًا، التقارير واضحة، والتحسينات كانت استباقية.',
    },
  },
]

export const blogPosts = [
  {
    slug: 'social-audit-2026',
    title: {
      en: 'How to Run a Social Audit in 2026',
      ar: 'كيف تجري تدقيقًا لحسابات السوشيال في 2026',
    },
    summary: {
      en: 'A concise checklist for reach, engagement, and conversion signals across platforms.',
      ar: 'قائمة تحقق مختصرة لمؤشرات الوصول والتفاعل والتحويل عبر المنصات.',
    },
    category: 'Strategy',
    readTime: '4 min',
  },
  {
    slug: 'content-systems',
    title: {
      en: 'Building Content Systems that Scale',
      ar: 'بناء أنظمة محتوى قابلة للتوسع',
    },
    summary: {
      en: 'Templates, roles, and feedback loops to keep publishing predictable.',
      ar: 'قوالب وأدوار ودورات تغذية راجعة تجعل عملية النشر أكثر انضباطًا.',
    },
    category: 'Operations',
    readTime: '3 min',
  },
]
