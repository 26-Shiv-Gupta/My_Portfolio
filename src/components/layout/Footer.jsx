import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const socials = [
  { href: 'https://github.com/26-Shiv-Gupta', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/26shivgupta/', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:shivgupta2370@gmail.com', label: 'Email', icon: Mail },
  { href: 'tel:+916232362243', label: 'Phone', icon: Phone },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="container-page flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-900/60 dark:text-paper-100/60">
          © {new Date().getFullYear()} Shiv Gupta. Based in Noida, India. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-900/70 transition-colors hover:border-violet-400/50 hover:text-violet-500 dark:border-paper-100/10 dark:text-paper-100/70 dark:hover:text-cyan-300"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
