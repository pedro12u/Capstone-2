import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AnimatedDivider } from '../components/AnimatedDivider'
import { SectionHeader } from '../components/SectionHeader'
import { fadeInFromRight } from '../styles/motion'

export function Architecture() {
  const { t } = useTranslation()
  const flows = t('architecture.items', { returnObjects: true }) as Array<{
    title: string
    steps: string[]
    metrics: string[]
  }>

  return (
    <section id="architecture" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label={t('architecture.label')}
          title={t('architecture.title')}
          subtitle={t('architecture.subtitle')}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {flows.map((flow, idx) => (
            <motion.div
              key={flow.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-2xl"
              {...fadeInFromRight(idx * 0.1)}
            >
              <div className="absolute inset-0 bg-hero-gradient opacity-10 blur-3xl" />
              <div className="relative">
                <p className="pill w-fit">Pipeline</p>
                <h3 className="text-xl font-semibold text-white">{flow.title}</h3>
                <p className="text-sm text-gray-300">{t('architecture.flowSubtitle')}</p>
                <AnimatedDivider />
                <div className="flex flex-wrap gap-2">
                  {flow.steps.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90"
                    >
                      {step}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-surface/70 p-3">
                  <p className="text-[12px] uppercase tracking-[0.2em] text-gray-400">Métricas alvo</p>
                  <div className="grid grid-cols-1 gap-2 text-sm text-white md:grid-cols-2">
                    {flow.metrics.map((metric) => (
                      <div key={metric} className="rounded-xl bg-white/5 p-2">{metric}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
