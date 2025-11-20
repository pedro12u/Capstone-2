import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { projectImages } from '../data/portfolio'
import { fadeInUp } from '../styles/motion'

type ProjectItem = {
  title: string
  description: string
  technologies: string[]
  badge?: string
  imageKey?: string
}

export function Projects() {
  const { t } = useTranslation()
  const projects = t('projects.items', { returnObjects: true }) as ProjectItem[]
  const action = t('projects.action')

  return (
    <section id="projects" className="relative py-14 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <SectionHeader label={t('projects.label')} title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div key={project.title} {...fadeInUp(idx * 0.05)}>
              <ProjectCard
                {...project}
                image={project.imageKey ? projectImages[project.imageKey] : undefined}
                actionLabel={action}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
