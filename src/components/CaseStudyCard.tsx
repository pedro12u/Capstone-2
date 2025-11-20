import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { cardHover, fadeInUp } from '../styles/motion'

type Metric = { label: string; value: string }

type CaseStudyCardProps = {
  title: string
  outcome: string
  problem: string
  approach: string
  impact: string
  metrics: Metric[]
  stack: string[]
}

export function CaseStudyCard({ title, outcome, problem, approach, impact, metrics, stack }: CaseStudyCardProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-glass backdrop-blur-2xl"
      {...cardHover}
      {...fadeInUp()}
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-10 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="pill w-fit">{t('caseCard.pill')}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-accent2">{outcome}</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white"
        >
          {t('caseCard.action')} <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="relative mt-4 grid gap-3 text-sm text-gray-200">
        <div>
          <p className="text-gray-400 text-[12px] uppercase tracking-[0.2em]">{t('caseCard.problem')}</p>
          <p>{problem}</p>
        </div>
        <div>
          <p className="text-gray-400 text-[12px] uppercase tracking-[0.2em]">{t('caseCard.approach')}</p>
          <p>{approach}</p>
        </div>
        <div>
          <p className="text-gray-400 text-[12px] uppercase tracking-[0.2em]">{t('caseCard.impact')}</p>
          <p>{impact}</p>
        </div>
      </div>

      <div className="relative mt-4 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
        <p className="text-[12px] uppercase tracking-[0.2em] text-gray-400">{t('caseCard.metrics')}</p>
        <div className="grid grid-cols-2 gap-2 text-sm text-white">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl bg-white/5 p-2">
              <p className="text-gray-400">{metric.label}</p>
              <p className="text-base font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-3 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
