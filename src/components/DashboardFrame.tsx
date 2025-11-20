import { useTranslation } from 'react-i18next'

type DashboardFrameProps = {
  title: string
  kpis: string[]
  description: string
}

export function DashboardFrame({ title, kpis, description }: DashboardFrameProps) {
  const { t } = useTranslation()
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-2xl">
      <div className="absolute inset-0 bg-hero-gradient opacity-10 blur-3xl" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="pill w-fit">{t('dashboards.label', { defaultValue: 'Dashboard' })}</p>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        <div className="h-14 w-14 rounded-2xl bg-white/10 shadow-glow" />
      </div>
      <div className="relative mt-4 grid grid-cols-2 gap-3">
        {kpis.map((kpi) => (
          <div key={kpi} className="rounded-2xl bg-white/5 p-3 text-sm text-white/90">
            <div className="mb-1 h-1 w-full rounded-full bg-gradient-to-r from-accent to-accent2" />
            {kpi}
          </div>
        ))}
      </div>
    </div>
  )
}
