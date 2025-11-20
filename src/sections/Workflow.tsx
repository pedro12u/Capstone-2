import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '../components/SectionHeader'
import { fadeInFromRight } from '../styles/motion'

export function Workflow() {
  const { t } = useTranslation()
  const steps = t('workflow.steps', { returnObjects: true }) as Array<{ title: string; description: string }>
  const footnote = t('workflow.footnote', {
    defaultValue: 'Entregáveis, risco e métricas pactuadas em cada fase.',
  })

  return (
    <section id="workflow" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label={t('workflow.label')}
          title={t('workflow.title')}
          subtitle={t('workflow.subtitle')}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl"
              {...fadeInFromRight(idx * 0.08)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <span className="pill bg-accent/20 text-accent">0{idx + 1}</span>
              </div>
              <p className="mt-2 text-gray-200">{step.description}</p>
              <div className="mt-3 h-[1px] w-full bg-gradient-to-r from-accent via-accent2 to-accent3" />
              <p className="mt-3 text-sm text-gray-400">{footnote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
