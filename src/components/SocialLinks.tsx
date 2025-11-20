import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

type SocialLinksProps = {
  className?: string
  withLabels?: boolean
  variant?: 'solid' | 'ghost'
}

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedro-toscano-674454218/',
    icon: Linkedin,
  },
  { label: 'GitHub', href: 'https://github.com/pedro12u', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/pedrotoscanoo/', icon: Instagram },
  { label: 'E-mail', href: 'mailto:toscanopedroall@gmail.com', icon: Mail },
  { label: 'Telefone', href: 'tel:+5545991030908', icon: Phone },
]

export function SocialLinks({
  className = '',
  withLabels = false,
  variant = 'solid',
}: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`
              group flex items-center gap-2 rounded-2xl px-4 py-2 
              text-sm font-medium transition-all border 
              ${
                variant === 'solid'
                  ? 'bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10'
                  : 'bg-transparent border-white/10 hover:border-accentLight hover:bg-white/5'
              }
            `}
            whileHover={{
              y: -3,
              scale: 1.06,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* BACKLIGHT */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 20%, rgba(80,200,255,0.10), transparent 60%)',
                  'radial-gradient(circle at 70% 70%, rgba(180,120,255,0.12), transparent 60%)',
                  'radial-gradient(circle at 50% 50%, rgba(60,255,200,0.10), transparent 60%)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* ICON WRAPPER */}
            <motion.span
              className={`rounded-xl p-1.5 transition-all
                ${
                  variant === 'solid'
                    ? 'bg-white/10 text-accent'
                    : 'bg-white/5 text-accentLight'
                }
              `}
              whileHover={{
                rotate: 8,
                scale: 1.2,
              }}
            >
              <Icon size={18} />
            </motion.span>

            {/* LABEL */}
            {withLabels && (
              <span className="whitespace-nowrap text-gray-200 group-hover:text-white transition">
                {item.label}
              </span>
            )}

            {/* OUTER NEON RING */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-transparent pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(90,200,255,0)',
                  '0 0 12px rgba(90,200,255,0.25)',
                  '0 0 0px rgba(90,200,255,0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.a>
        )
      })}
    </div>
  )
}
