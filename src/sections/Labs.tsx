import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { StatusPill } from '../components/StatusPill'
import { SectionHeader } from '../components/SectionHeader'
import { fadeInUp } from '../styles/motion'

export function Labs() {
  const { t } = useTranslation()
  const labs = t('labs.items', { returnObjects: true }) as Array<{
    title: string
    status: 'Alpha' | 'Beta' | 'Stable' | 'WIP'
    description: string
  }>
  const next = t('labs.next')

  return (
    <section id="labs" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label={t('labs.label')}
          title={t('labs.title')}
          subtitle={t('labs.subtitle')}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab, idx) => (
            <motion.div
              key={lab.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl"
              {...fadeInUp(idx * 0.06)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{lab.title}</h3>
                <StatusPill status={lab.status} />
              </div>
              <p className="mt-2 text-gray-200">{lab.description}</p>
              <div className="mt-3 h-[1px] w-full bg-gradient-to-r from-accent via-accent2 to-accent3" />
              <p className="mt-2 text-sm text-gray-400">{next}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
