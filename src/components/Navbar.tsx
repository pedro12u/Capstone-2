import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { fadeInUp } from '../styles/motion'

type NavbarProps = {
  resumeUrl: string
}

const links = [
  { href: '#home', label: 'Início' },
  { href: '#projects', label: 'Projetos' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
]

export function Navbar({ resumeUrl }: NavbarProps) {
  const [open, setOpen] = useState(false)

  // Tilt no logo
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-20, 20], [6, -6])
  const rotateY = useTransform(x, [-20, 20], [-6, 6])

  return (
    <header className="sticky top-0 z-[999] w-full backdrop-blur-2xl">
      {/* Aura luminosa atrás */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-40 w-[70%] bg-accent/20 blur-[120px] opacity-40 pointer-events-none" />

      {/* Pulse line inferior */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accentLight/50 to-transparent opacity-60"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="mx-auto max-w-7xl px-4 pt-4 pb-2 relative z-10">
        <motion.div
          className="relative flex items-center justify-between rounded-2xl border border-white/10 
                     bg-white/5 backdrop-blur-xl p-4 shadow-[0_0_35px_rgba(0,0,0,0.45)]
                     hover:shadow-[0_0_55px_rgba(90,200,255,0.35)] transition-all"
        >
          {/* LEFT - LOGO */}
          <motion.div
            className="flex items-center gap-3 md:gap-4 cursor-default"
            style={{ rotateX, rotateY }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              x.set(e.clientX - rect.left - rect.width / 2)
              y.set(e.clientY - rect.top - rect.height / 2)
            }}
          >
            {/* Ícone PT (ou ícone futuro de profile) */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 
                            bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-inner shadow-black/40 
                            text-lg font-semibold text-white">
              PT
            </div>

            <div>
              <p className="text-sm text-gray-400">Pedro Toscano</p>
              <p className="text-lg font-semibold text-white tracking-tight">
                Fullstack & Web3 Engineer
              </p>
            </div>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition
                           hover:text-white hover:tracking-wide"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.1 * index } },
                }}
                initial="hidden"
                animate="visible"
              >
                {/* Pequena bolinha neon que aparece no hover */}
                <span className="absolute left-1/2 top-full block h-1 w-1 -translate-x-1/2 rounded-full 
                                  bg-accentLight opacity-0 group-hover:opacity-100 transition"></span>
                {item.label}
              </motion.a>
            ))}

            {/* BOTÃO CURRÍCULO */}
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.07 }}
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r 
                         from-accent to-accentLight px-4 py-2 text-sm font-semibold 
                         text-white shadow-glow transition hover:brightness-110"
            >
              <Download size={16} />
              Currículo
            </motion.a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden rounded-xl border border-white/20 bg-white/10 p-2 text-white shadow-inner"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* MOBILE MENU */}
          {open && (
            <motion.div
              {...fadeInUp()}
              className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-white/10 
                         bg-black/60 backdrop-blur-xl shadow-xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4">
                {links.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-gray-100 hover:bg-white/10 
                               hover:text-white transition"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r 
                             from-accent to-accentLight px-3 py-3 text-sm font-semibold text-white shadow-glow"
                >
                  <Download size={16} />
                  Currículo
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </header>
  )
}
