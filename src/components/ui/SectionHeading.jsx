import { motion } from 'framer-motion'

export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {kicker && (
        <span className="text-sm font-medium text-violet-500 dark:text-cyan-300">{kicker}</span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-ink-900/65 dark:text-paper-100/65">
          {description}
        </p>
      )}
    </motion.div>
  )
}
