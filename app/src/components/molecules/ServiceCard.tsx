import { Link } from 'react-router-dom'
import { Card } from '../atoms/Card'
import { Badge } from '../atoms/Badge'
import { clsx } from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeScale } from '@/animations/presets'

type Props = {
  title: string
  summary: string
  outcomes: string[]
  metrics: { label: string; value: string }[]
  to?: string
  compact?: boolean
  index?: number
}

export const ServiceCard = ({
  title,
  summary,
  outcomes,
  metrics,
  to,
  compact = false,
  index = 0,
}: Props) => {
  const content = (
    <motion.div
      variants={fadeScale}
      custom={0.05 * index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        className={clsx(
          'h-full transition-all hover:-translate-y-1 hover:shadow-card',
          compact && 'p-5',
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-heading">{title}</h3>
            <p className="mt-2 text-muted text-sm">{summary}</p>
          </div>
          {to && <ArrowUpRight className="h-5 w-5 text-primary-600" />}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {outcomes.slice(0, 3).map((item) => (
            <Badge key={item} tone="neutral" className="text-xs">
              {item}
            </Badge>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg bg-surface p-3">
              <div className="font-semibold text-heading">{metric.value}</div>
              <div>{metric.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )

  if (to) {
    return (
      <Link to={to} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
