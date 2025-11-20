import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cardHover } from '../styles/motion'

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  badge?: string
  actionLabel?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  badge = 'Projeto',
  actionLabel = 'Ver mais',
}: ProjectCardProps) {
  // --- TILT PARALLAX ---
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-60, 60], [15, -15])
  const rotateY = useTransform(x, [-60, 60], [-15, 15])

  return (
    <motion.div
      className="relative group h-full"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
      }}
      style={{ perspective: 1200 }}
    >
      {/* GRADIENT BACKLIGHT */}
      <motion.div
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"
        animate={{
          background: [
            'radial-gradient(circle at 30% 20%, rgba(80,200,255,0.20), transparent)',
            'radial-gradient(circle at 70% 80%, rgba(150,120,255,0.25), transparent)',
            'radial-gradient(circle at 50% 50%, rgba(60,255,200,0.20), transparent)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      {/* GLOW BORDER PULSE */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100"
        animate={{
          boxShadow: [
            '0 0 0px rgba(90,200,255,0)',
            '0 0 20px rgba(90,200,255,0.4)',
            '0 0 35px rgba(90,200,255,0.2)',
            '0 0 0px rgba(90,200,255,0)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* PULSE LINE */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100"
      >
        <motion.div
          className="absolute top-0 left-[-150%] h-full w-[200%] bg-gradient-to-r from-transparent via-accentLight/30 to-transparent blur-2xl"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* CARD */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10
                   p-6 md:p-7 h-full shadow-[0_0_40px_rgba(0,0,0,0.45)]
                   group-hover:shadow-[0_0_60px_rgba(90,200,255,0.35)]
                   transition-all duration-300"
        {...cardHover}
      >
        {/* BADGE */}
        <span className="pill bg-accent/20 text-accent">{badge}</span>

        {/* TITLE */}
        <h3 className="mt-5 text-xl md:text-2xl font-semibold text-white group-hover:text-accentLight transition">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 text-gray-300 leading-relaxed">{description}</p>

        {/* TECHNOLOGIES */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-[6px] text-xs font-semibold uppercase 
                         tracking-wide text-gray-200 bg-white/5 backdrop-blur-md
                         hover:border-accentLight/40 hover:text-white transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ACTION BUTTON */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.07 }}
          className="mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentLight 
                     px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
        >
          {actionLabel}
          <ArrowUpRight size={16} />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
