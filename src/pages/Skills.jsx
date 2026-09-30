import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'
import { skillGroups, softSkills } from '../data/skills.js'

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const chip = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
}

export default function Skills() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        kicker="Skills"
        title="What I work with"
        description="Languages, frameworks, and tools I've used to design, build, and ship full-stack projects."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: groupIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card hover={false} className="h-full">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <motion.div
                variants={chipContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chip}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="rounded-full border border-ink-900/10 bg-ink-900/[0.03] px-3.5 py-1.5 text-sm text-ink-900/80 transition-colors hover:border-violet-400/40 hover:text-violet-600 dark:border-paper-100/10 dark:bg-paper-50/[0.04] dark:text-paper-100/80 dark:hover:border-cyan-300/40 dark:hover:text-cyan-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Soft skills */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6"
      >
        <Card hover={false}>
          <h3 className="text-lg font-semibold">Soft Skills</h3>
          <motion.div
            variants={chipContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {softSkills.map((skill) => (
              <motion.span
                key={skill}
                variants={chip}
                whileHover={{ y: -3, scale: 1.04 }}
                className="rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-400/10 px-3.5 py-1.5 text-sm text-ink-900/80 ring-1 ring-inset ring-violet-400/20 transition-colors hover:ring-violet-400/50 dark:text-paper-100/80"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}
