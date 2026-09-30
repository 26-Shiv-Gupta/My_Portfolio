import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Full-viewport animated backdrop: a soft gradient-mesh of blobs that drift
 * on their own (CSS keyframes) plus a gentle parallax tilt that follows the
 * pointer (Framer Motion springs). Fixed position so it sits behind every
 * page without being re-mounted on route change.
 */
export default function AnimatedBackground() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 1 })

  const translateX = useTransform(springX, [-1, 1], [-24, 24])
  const translateY = useTransform(springY, [-1, 1], [-24, 24])

  useEffect(() => {
    function handlePointerMove(e) {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) * 2 - 1)
      mouseY.set((e.clientY / innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper-50 dark:bg-ink-900 transition-colors duration-500"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_10%,transparent_75%)]" />

      {/* Drifting gradient blobs */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute -left-24 top-[-10%] h-[26rem] w-[26rem] rounded-full bg-violet-500/30 blur-[100px] animate-blob-slow dark:bg-violet-500/25"
      />
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute right-[-8rem] top-1/4 h-[22rem] w-[22rem] rounded-full bg-cyan-400/25 blur-[100px] animate-blob-slower dark:bg-cyan-400/20"
      />
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-400/20 blur-[110px] animate-blob-slow dark:bg-violet-400/15"
      />

      {/* Vignette to keep content readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper-50 dark:to-ink-900" />
    </div>
  )
}
