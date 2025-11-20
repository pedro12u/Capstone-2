import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowUpRight, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cardHover } from '../styles/motion'

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  badge?: string
  actionLabel?: string
  image?: string
  private?: boolean
}

export function ProjectCard({
  title,
  description,
  technologies,
  badge,
  actionLabel,
  image,
  private: isPrivate = false,
}: ProjectCardProps) {
  const { t } = useTranslation()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-60, 60], [10, -10])
  const rotateY = useTransform(x, [-60, 60], [-10, 10])

  return (
    <motion.div
      className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-2xl"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
      }}
      style={{ perspective: 1200, rotateX, rotateY }}
      {...cardHover}
    >
      {image ? (
        <div className="relative h-40 w-full overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
        </div>
      ) : null}

      <div className="space-y-4 p-5 md:p-6">
        <div className="flex items-center justify-between">
          <span className="pill bg-accent/20 text-accent">
            {badge || t('projectCard.badge')}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>

        <p className="text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BOTÃO OU SELO PRIVADO */}
        {isPrivate ? (
          <span
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 
                       text-xs font-semibold text-gray-400 bg-white/5 cursor-not-allowed"
          >
            <Lock size={14} />
            {t('projectCard.private') || 'Acesso privado'}
          </span>
        ) : (
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 
                       px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            {actionLabel || t('projectCard.action')}
            <ArrowUpRight size={16} />
          </button>
        )}
      </div>
    </motion.div>
  )
}
