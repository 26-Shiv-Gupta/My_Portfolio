import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="container-page">
        <div className="mt-4 flex items-center justify-between rounded-full border border-ink-900/10 bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-md dark:border-paper-100/10 dark:bg-ink-900/60">
          <NavLink to="/" className="focus-ring flex items-center gap-2 rounded-full px-2 py-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-white">
              SG
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">Shiv Gupta</span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-ink-900 dark:text-paper-50'
                      : 'text-ink-900/60 hover:text-ink-900 dark:text-paper-100/60 dark:hover:text-paper-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-full bg-ink-900/[0.06] dark:bg-paper-50/10"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 dark:border-paper-100/15 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-page overflow-hidden md:hidden"
          >
            <div className="mt-3 flex flex-col gap-1 rounded-2xl border border-ink-900/10 bg-white/80 p-3 backdrop-blur-md dark:border-paper-100/10 dark:bg-ink-900/80">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `focus-ring rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-ink-900/[0.06] text-ink-900 dark:bg-paper-50/10 dark:text-paper-50'
                        : 'text-ink-900/60 dark:text-paper-100/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
