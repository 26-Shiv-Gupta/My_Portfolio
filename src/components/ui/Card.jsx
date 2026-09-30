import { motion } from 'framer-motion'

export default function Card({ className = '', children, hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`rounded-2xl border border-ink-900/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-paper-100/10 dark:bg-ink-800/50 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
