import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { projects } from '../data/projects.js'
import { toolMarquee } from '../data/skills.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const heroStats = [
  { label: 'Projects completed', value: '10+' },
  { label: 'Years at Webologix', value: '2+' },
  { label: 'Learners mentored', value: '100+' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-16 pb-20 sm:pt-24 sm:pb-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/60 px-4 py-1.5 text-sm text-ink-900/70 backdrop-blur-sm dark:border-paper-100/10 dark:bg-ink-800/50 dark:text-paper-100/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Full-Stack Developer at Webologix — Noida, UP
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
          >
            Hi, I'm Shiv Gupta —
            <br />
            <span className="text-gradient">I build full-stack web apps.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-900/65 dark:text-paper-100/65"
          >
            A full-stack developer working across the MERN stack. Currently building web
            applications at Webologix in Noida — and before that, I shipped a 15-feature LMS
            with real Stripe payments and a real-time ride-hailing platform synced over WebSockets.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button as={Link} to="/projects">
              View my projects <ArrowUpRight size={16} />
            </Button>
            <Button as={Link} to="/about" variant="outline">
              About me
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/26-Shiv-Gupta' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/26shivgupta/' },
              { icon: Mail, href: 'mailto:shivgupta2370@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-ink-900/50 transition-colors hover:text-violet-500 dark:text-paper-100/50 dark:hover:text-cyan-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-14 grid grid-cols-3 gap-6 border-t border-ink-900/10 pt-8 dark:border-paper-100/10">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-gradient sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-ink-900/55 dark:text-paper-100/55 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee of tools */}
      <section className="border-y border-ink-900/10 bg-white/40 py-6 dark:border-paper-100/10 dark:bg-ink-800/30">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-10 pr-10">
            {[...toolMarquee, ...toolMarquee].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="font-mono text-sm uppercase tracking-wide text-ink-900/40 dark:text-paper-100/40"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-page py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Selected work"
            title="Projects I've shipped end-to-end"
            description="Two full-stack builds — from database schema to deployed, production-style UI."
          />
          <Link
            to="/projects"
            className="focus-ring group inline-flex shrink-0 items-center gap-1.5 rounded-full text-sm font-medium text-ink-900/70 hover:text-ink-900 dark:text-paper-100/70 dark:hover:text-paper-50"
          >
            All projects
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="group h-full">
                <div className={`mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r ${project.accent}`} />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-900/40 dark:text-paper-100/40">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-900/65 dark:text-paper-100/65">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {project.highlights.slice(0, 2).map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-ink-900/65 dark:text-paper-100/65">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-violet-500 dark:text-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ink-900/[0.05] px-3 py-1 text-xs text-ink-900/60 dark:bg-paper-50/[0.06] dark:text-paper-100/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
