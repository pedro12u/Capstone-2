import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import heroImg from '../assets/pedrohero_pic.jpeg'
import avatar from '../assets/pedro_pic.png'
import { SocialLinks } from '../components/SocialLinks'
import { fadeInFromRight, fadeInUp } from '../styles/motion'

type HeroProps = {
  resumeUrl: string
}

const highlightChips = [
  'TypeScript',
  'Node.js',
  'React + Tailwind',
  'Web3 Engineering',
  'Data Pipelines',
  'Real-time Systems'
]

export function Hero({ resumeUrl }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-12 md:pt-20 bg-gradient-to-b from-[#0B0E14] via-[#0A0C11] to-[#050608]"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* radial center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,200,255,0.15),rgba(0,0,0,0))]" />

        {/* top flare */}
        <div className="absolute top-0 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

        {/* floating particles */}
        <div className="animate-float pointer-events-none absolute right-[10%] top-[15%] h-64 w-64 rounded-full bg-accentLight/10 blur-3xl opacity-50" />
        <div className="animate-float-slow pointer-events-none absolute left-[5%] bottom-[5%] h-72 w-72 rounded-full bg-green-400/10 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 md:flex-row md:items-center md:gap-20">
        {/* LEFT SIDE */}
        <motion.div className="relative z-10 flex-1 space-y-10" {...fadeInUp()}>

          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md
                       px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-300 shadow-lg shadow-black/40"
          >
            <Sparkles size={14} className="text-accent" />
            Desenvolvedor Fullstack • Web3 & Data Engineering
          </motion.div>

          {/* NAME + AVATAR */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
                Pedro
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Toscano
                </span>
              </h1>
              <span className="block mt-3 text-xl font-light text-gray-300 md:text-2xl">
                Fullstack Engineer • Sistemas Distribuídos e Web3
              </span>
            </div>

            <motion.div
              className="hidden md:block h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-1 shadow-2xl"
              {...fadeInFromRight(0.2)}
            >
              <img src={avatar} alt="Pedro Toscano" className="h-full w-full rounded-xl object-cover" />
            </motion.div>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl text-balance">
            Graduado em Análise e Desenvolvimento de Sistemas e atualmente no último ano de Engenharia
            de Software, construo soluções modernas focadas em performance, automação e dados.
            Atuo com sistemas distribuídos, pipelines inteligentes, análise on-chain, infra em tempo
            real e interfaces avançadas unindo engenharia, design e tecnologia.
          </p>

          {/* CHIPS */}
          <div className="flex flex-wrap gap-3">
            {highlightChips.map((chip) => (
              <motion.span
                key={chip}
                whileHover={{ scale: 1.08 }}
                className="pill !px-4 !py-2 !text-sm shadow-md shadow-black/30 hover:shadow-accent/20"
              >
                {chip}
              </motion.span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-6 pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentLight 
                         px-6 py-3 text-sm font-semibold text-white shadow-glow backdrop-blur 
                         transition hover:brightness-110"
            >
              Ver projetos
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 
                         px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent"
            >
              Baixar CV
            </motion.a>
          </div>

          <SocialLinks withLabels />
        </motion.div>

        {/* RIGHT SIDE - PHOTO */}
        <motion.div
          className="relative z-10 flex-1 flex justify-center md:justify-end"
          {...fadeInFromRight(0.1)}
        >
          <div className="relative max-w-md w-full">
            {/* aura behind image */}
            <div className="absolute inset-0 -z-10 translate-y-4 scale-110 rounded-full bg-gradient-to-br 
                            from-accent/40 via-accentLight/20 to-green-400/20 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/5 
                            p-3 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl ring-1 ring-white/10">
              <img
                src={heroImg}
                alt="Pedro Toscano"
                className="h-full w-full rounded-[1.8rem] object-cover"
                loading="lazy"
              />

              {/* top gradient sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t 
                              from-transparent via-white/5 to-white/10 mix-blend-overlay" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
