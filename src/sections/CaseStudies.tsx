import { useTranslation } from 'react-i18next'
import { CaseStudyCard } from '../components/CaseStudyCard'
import { SectionHeader } from '../components/SectionHeader'

export function CaseStudies() {
  const { t } = useTranslation()
  const studies = t('caseStudies.items', { returnObjects: true }) as Array<{
    title: string
    outcome: string
    problem: string
    approach: string
    impact: string
    metrics: Array<{ label: string; value: string }>
    stack: string[]
  }>

  return (
    <section id="case-studies" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label={t('caseStudies.label')}
          title={t('caseStudies.title')}
          subtitle={t('caseStudies.subtitle')}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {studies.map((cs) => (
            <CaseStudyCard key={cs.title} {...cs} />
          ))}
        </div>
      </div>
    </section>
  )
}
