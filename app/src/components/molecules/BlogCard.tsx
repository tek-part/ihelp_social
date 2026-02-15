import { Card } from '../atoms/Card'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeScale } from '@/animations/presets'

type Props = {
  slug: string
  title: string
  summary: string
  category: string
  readTime: string
  index?: number
}

export const BlogCard = ({
  slug,
  title,
  summary,
  category,
  readTime,
  index = 0,
}: Props) => (
  <Link to={`/blog/${slug}`} className="block h-full">
    <motion.div
      variants={fadeScale}
      custom={0.05 * index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full transition-all hover:-translate-y-1">
        <div className="flex items-start justify-between gap-3">
          <div className="text-xs font-semibold uppercase text-primary-600">{category}</div>
          <ArrowUpRight className="h-4 w-4 text-primary-500" />
        </div>
        <h3 className="mt-2 text-xl font-semibold text-heading">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
        <div className="mt-3 text-xs text-muted">
          <span aria-hidden="true">⏱</span> {readTime}
        </div>
      </Card>
    </motion.div>
  </Link>
)
