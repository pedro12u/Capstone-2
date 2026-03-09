import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '../components/SectionHeader'
import { fadeInUp } from '../styles/motion'

export function StackSection() {
  const { t } = useTranslation()
  const layers = t('stack.items', { returnObjects: true }) as Array<{
    title: string
    maturity?: string
    items: string[]
  }>

  return (
    <section id="stack" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label={t('stack.label')}
          title={t('stack.title')}
          subtitle={t('stack.subtitle')}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl"
              {...fadeInUp(idx * 0.05)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="pill w-fit">{layer.title}</p>
                  {layer.maturity ? (
                    <p className="text-gray-300">
                      {t('stack.maturityLabel', { defaultValue: 'Maturity: ' })}
                      {layer.maturity}
                    </p>
                  ) : null}
                </div>
                <div className="h-10 w-10 rounded-2xl bg-white/10 shadow-glow" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
