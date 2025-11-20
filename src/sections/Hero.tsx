import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SocialLinks } from '../components/SocialLinks'
import { assets } from '../data/portfolio'
import { fadeInFromRight, fadeInUp } from '../styles/motion'

type HeroProps = {
  resumeUrl: string
}

export function Hero({ resumeUrl }: HeroProps) {
  const { t } = useTranslation()
  const chips = t('hero.chips', { returnObjects: true }) as string[]

  return (
    <section id="home" className="relative overflow-hidden pb-12 pt-8 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-mesh-soft opacity-70" />
      <div className="pointer-events-none absolute inset-0 constellation-layer" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:py-8">
        <motion.div className="relative z-10 flex-1 space-y-6" {...fadeInUp()}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
            <Sparkles size={14} className="text-accent" />
            {t('hero.badge')}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                {t('common.name')}
                <span className="block text-lg font-normal text-gray-300 md:text-xl">{t('common.role')}</span>
              </h1>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                {t('hero.headline')}
              </p>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">{t('hero.description')}</p>

          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span key={chip} className="pill">
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              {t('common.ctaProjects')}
              <ArrowRight size={16} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent"
            >
              {t('common.ctaCv')}
            </a>
          </div>

          <SocialLinks withLabels />
        </motion.div>

        <motion.div className="relative z-10 flex-1 md:justify-end" {...fadeInFromRight(0.1)}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -z-10 translate-y-4 scale-110 rounded-full bg-gradient-to-br from-accent/30 via-accent2/20 to-green-500/14 blur-[70px]" />
            <div className="gradient-border shimmer-border overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-2xl">
              <img
                src={assets.heroImg}
                alt={t('hero.imageAlt')}
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
