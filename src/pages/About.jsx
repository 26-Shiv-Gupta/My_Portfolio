import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'

const experience = [
  {
    year: 'Sept 2024 — Present',
    role: 'Full Stack Developer',
    org: 'Webologix, Noida, UP',
    description:
      'Working as a Full Stack Developer building and maintaining web applications across the MERN stack in a professional team environment.',
  },
]

const education = [
  {
    year: '2020 — 2024',
    role: 'B.Tech, Computer Science & Engineering',
    org: 'Galgotias University, Greater Noida',
    description:
      'Graduated with a 7.92 CGPA. Spent the final two years building full-stack projects end-to-end — from schema design to deployed UI.',
  },
]

const certifications = [
  'Database Programming with SQL',
  'Mastering Data Structures & Algorithms — GeeksforGeeks',
]

const stats = [
  { label: 'Projects completed', value: '10+' },
  { label: 'Years at Webologix', value: '2+' },
  { label: 'Learners mentored', value: '100+' },
]

export default function About() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        kicker="About"
        title="Full-stack developer, always building"
        description="I'm a Full Stack Developer at Webologix in Noida, working across the MERN stack — and still building my own projects on the side."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2"
        >
          <Card hover={false} className="h-full">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-2xl font-bold text-white">
              SG
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-900/70 dark:text-paper-100/70">
              I'm currently working as a Full Stack Developer at Webologix in Noida, building
              and maintaining web applications across the MERN stack. Before that, I built
              everything from a 15-feature learning platform with Stripe payments to a
              real-time ride-hailing app with live socket updates and GSAP-driven interactions.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-900/70 dark:text-paper-100/70">
              Alongside my work, I've mentored 100+ learners in MERN stack development —
              running code reviews and helping others write better, faster applications.
            </p>

            <dl className="mt-8 grid grid-cols-3 border-t border-ink-900/10 pt-6 dark:border-paper-100/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-2xl font-semibold text-gradient">{stat.value}</dd>
                  <dt className="text-xs text-ink-900/50 dark:text-paper-100/50">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Card>
        </motion.div>

        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-ink-900/60 dark:text-paper-100/60">
            <Briefcase size={16} /> Experience
          </div>
          <ol className="relative space-y-8 border-l border-ink-900/10 pl-8 dark:border-paper-100/10">
            {experience.map((entry, index) => (
              <motion.li
                key={entry.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-paper-50 bg-gradient-to-br from-violet-500 to-cyan-400 dark:border-ink-900" />
                <p className="text-xs font-medium uppercase tracking-wide text-ink-900/40 dark:text-paper-100/40">
                  {entry.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold">
                  {entry.role}
                  <span className="font-normal text-ink-900/50 dark:text-paper-100/50"> · {entry.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/65 dark:text-paper-100/65">
                  {entry.description}
                </p>
              </motion.li>
            ))}
          </ol>

          <div className="mb-4 mt-10 flex items-center gap-2 text-sm font-medium text-ink-900/60 dark:text-paper-100/60">
            <GraduationCap size={16} /> Education
          </div>
          <ol className="relative space-y-8 border-l border-ink-900/10 pl-8 dark:border-paper-100/10">
            {education.map((entry, index) => (
              <motion.li
                key={entry.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-paper-50 bg-gradient-to-br from-violet-500 to-cyan-400 dark:border-ink-900" />
                <p className="text-xs font-medium uppercase tracking-wide text-ink-900/40 dark:text-paper-100/40">
                  {entry.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold">
                  {entry.role}
                  <span className="font-normal text-ink-900/50 dark:text-paper-100/50"> · {entry.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/65 dark:text-paper-100/65">
                  {entry.description}
                </p>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            <Card hover={false}>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-ink-900/60 dark:text-paper-100/60">
                <Award size={16} /> Certifications
              </div>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-sm text-ink-900/75 dark:text-paper-100/75">
                    {cert}
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false}>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-ink-900/60 dark:text-paper-100/60">
                <Users size={16} /> Mentorship
              </div>
              <p className="text-sm leading-relaxed text-ink-900/75 dark:text-paper-100/75">
                Guided and mentored 100+ learners in MERN stack development, conducted code
                reviews, and helped improve coding practices and application performance.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
