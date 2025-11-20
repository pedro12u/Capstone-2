import { useTranslation } from 'react-i18next'
import { DashboardFrame } from '../components/DashboardFrame'
import { SectionHeader } from '../components/SectionHeader'

export function Dashboards() {
  const { t } = useTranslation()
  const dashboards = t('dashboards.items', { returnObjects: true }) as Array<{
    title: string
    kpis: string[]
    description: string
  }>

  return (
    <section id="dashboards" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label={t('dashboards.label')}
          title={t('dashboards.title')}
          subtitle={t('dashboards.subtitle')}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {dashboards.map((mock) => (
            <DashboardFrame key={mock.title} {...mock} />
          ))}
        </div>
      </div>
    </section>
  )
}
