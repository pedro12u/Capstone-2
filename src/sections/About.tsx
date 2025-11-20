import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Globe2, Sparkles } from 'lucide-react'
import aboutOne from '../assets/about1.jpeg'
import aboutTwo from '../assets/about2.jpeg'
import aboutThree from '../assets/about3.jpeg'
import { fadeInFromRight, fadeInUp } from '../styles/motion'

const journeyParagraphs = [
  `Sou graduado em Análise e Desenvolvimento de Sistemas e estou atualmente no último ano de Engenharia de Software. Minha trajetória sempre foi guiada pela curiosidade sobre como sistemas realmente funcionam da lógica ao design, da infraestrutura aos dados.`,
  `Nos últimos anos consolidei experiência sólida criando aplicações completas, produtos digitais modernos, pipelines inteligentes e sistemas que lidam com dados em tempo real. Desenvolvo desde interfaces refinadas até arquiteturas distribuídas, integrando backend, frontend e automação.`,
  `Minha motivação vem de resolver problemas reais e construir soluções de impacto. A tecnologia sempre foi minha forma de transformar ideias em produtos, e cada projeto que desenvolvo reflete a evolução da minha forma de pensar, criar e entregar valor.`,
]

const facts = [
  {
    title: 'Formação Acadêmica',
    description:
      'Graduado em Análise e Desenvolvimento de Sistemas (2023–2025). Último ano de Engenharia de Software (2025–2027).',
    icon: BookOpen,
  },
  {
    title: 'Experiência Técnica',
    description:
      'Desenvolvimento Fullstack, sistemas distribuídos, pipelines de dados, integrações avançadas e aplicações Web3.',
    icon: Briefcase,
  },
  {
    title: 'Idiomas',
    description:
      'Português (nativo), Inglês (fluente), Espanhol (fluente) e Italiano (básico — progresso ativo).',
    icon: Globe2,
  },
  {
    title: 'Stack & Habilidades',
    description:
      'TypeScript, Node.js, React, Web3, MongoDB, SQL, microsserviços, arquitetura limpa, automação e UI moderna.',
    icon: Sparkles,
  },
]

const gallery = [
  { src: aboutOne, alt: 'Trabalho e imersão em tecnologia', delay: 0 },
  { src: aboutTwo, alt: 'Participação em projetos e apresentações', delay: 0.1 },
  { src: aboutThree, alt: 'Momentos pessoais e experiências', delay: 0.2 },
]

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#050608] via-[#06070A] to-[#040507]"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px] opacity-40" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-green-400/10 blur-[140px] opacity-40" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col gap-4 md:w-3/4">
          <p className="pill w-fit">Sobre mim</p>
          <h2 className="section-heading text-4xl md:text-5xl">
            Entre engenharia, dados e propósito
          </h2>
          <p className="section-subtitle">
            Combino engenharia, design e lógica para construir soluções elegantes, escaláveis e
            orientadas a impacto. Aqui está um pouco da minha jornada.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* LEFT - JOURNEY */}
          <motion.div
            className="md:col-span-7 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-2xl"
            {...fadeInUp()}
          >
            {journeyParagraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
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

          {/* RIGHT - FACTS */}
          <div className="md:col-span-5 grid gap-5">
            {facts.map((fact, idx) => {
              const Icon = fact.icon
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

        {/* GALLERY */}
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
