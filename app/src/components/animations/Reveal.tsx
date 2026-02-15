import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp } from '@/animations/presets'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

export const Reveal = ({ children, delay = 0, className }: Props) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '0px 0px -80px 0px' }}
    custom={delay}
  >
    {children}
  </motion.div>
)
