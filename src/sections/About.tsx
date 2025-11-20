import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Globe2, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { assets } from '../data/portfolio'
import { fadeInFromRight, fadeInUp } from '../styles/motion'

const factIcons = [BookOpen, Briefcase, Globe2, Sparkles]

export function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[]
  const facts = t('about.facts', { returnObjects: true }) as Array<{ title: string; description: string }>
  const galleryAlt = t('about.galleryAlt', { returnObjects: true }) as string[]

  const gallery = [
    { src: assets.about1, alt: galleryAlt[0], delay: 0 },
    { src: assets.about2, alt: galleryAlt[1], delay: 0.1 },
    { src: assets.about3, alt: galleryAlt[2], delay: 0.2 },
  ]

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#050608] via-[#06070A] to-[#040507]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px] opacity-40" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-green-400/10 blur-[140px] opacity-40" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 relative z-10">
        <div className="flex flex-col gap-4 md:w-3/4">
          <p className="pill w-fit">{t('about.label')}</p>
          <h2 className="section-heading text-4xl md:text-5xl">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <motion.div
            className="md:col-span-7 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-2xl"
            {...fadeInUp()}
          >
            {paragraphs.map((paragraph, idx) => (
              <motion.p
                key={paragraph}
                className="text-base md:text-lg leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <div className="md:col-span-5 grid gap-5">
            {facts.map((fact, idx) => {
              const Icon = factIcons[idx % factIcons.length]
              return (
                <motion.div
                  key={fact.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-lg shadow-black/30 hover:shadow-accent/20 transition"
                  {...fadeInFromRight(idx * 0.15)}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent backdrop-blur-md shadow-inner">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">{fact.title}</p>
                    <p className="text-gray-200 text-base">{fact.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <motion.div
              key={item.alt}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/40"
              {...fadeInUp(item.delay)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
