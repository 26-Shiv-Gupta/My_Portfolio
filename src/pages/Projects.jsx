import { motion } from 'framer-motion'
import { CheckCircle2, ExternalLink, Github } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        kicker="Projects"
        title="Things I've built"
        description="Two full-stack projects, built solo, covering payments, real-time data, and role-based auth from the ground up."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="flex h-full flex-col">
              <div className={`mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r ${project.accent}`} />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-900/40 dark:text-paper-100/40">
                {project.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-900/65 dark:text-paper-100/65">
                {project.description}
              </p>

              <ul className="mt-4 flex-1 space-y-2">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-ink-900/70 dark:text-paper-100/70">
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

              <div className="mt-6 flex items-center gap-4 border-t border-ink-900/10 pt-4 dark:border-paper-100/10">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink-900/70 hover:text-ink-900 dark:text-paper-100/70 dark:hover:text-paper-50"
                >
                  <Github size={15} /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink-900/70 hover:text-ink-900 dark:text-paper-100/70 dark:hover:text-paper-50"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
