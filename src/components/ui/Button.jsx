import { useMemo } from 'react'
import { motion } from 'framer-motion'

const base =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300'

const variants = {
  primary:
    'bg-ink-900 text-paper-50 hover:bg-ink-700 dark:bg-paper-50 dark:text-ink-900 dark:hover:bg-paper-200',
  outline:
    'border border-ink-900/15 text-ink-900 hover:border-ink-900/40 dark:border-paper-100/20 dark:text-paper-100 dark:hover:border-paper-100/50',
  ghost: 'text-ink-900/70 hover:text-ink-900 dark:text-paper-100/70 dark:hover:text-paper-100',
}

// Cache motion-wrapped versions of non-string components (e.g. React Router's
// Link) so we don't call motion(Component) fresh on every render, which
// would create a new component type and remount children each time.
const motionComponentCache = new WeakMap()

function resolveMotionComponent(as) {
  if (typeof as === 'string') {
    return motion[as] ?? motion.button
  }
  if (!motionComponentCache.has(as)) {
    motionComponentCache.set(as, motion(as))
  }
  return motionComponentCache.get(as)
}

export default function Button({
  as = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Component = useMemo(() => resolveMotionComponent(as), [as])
  return (
    <Component
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
