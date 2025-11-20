import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { fadeInUp } from '../styles/motion'

const projects = [
  // —————————————————— SOLANA / WEB3 ——————————————————
  {
    title: 'Plataforma de Predict Markets e Analytics',
    description:
      'Aplicação Web3 completa para previsão de eventos, integrada a mercados descentralizados e dados externos. Inclui conexão de carteira, sistemas premium, automação de análises, dashboards, token interno, staking e arquitetura preparada para alto volume.',
    technologies: ['Solana', 'TypeScript', 'React', 'Real-time Data', 'Smart Flows'],
    badge: 'Web3',
  },
  {
    title: 'Sistema de Inteligência On-chain & Automação (Projeto Privado)',
    description:
      'Ferramenta avançada para análise técnica, monitoramento profundo, enriquecimento de dados, identificação de padrões, classificação de wallets, indexação de transações e execução automatizada de rotinas. Construído com foco em alta performance e segurança.',
    technologies: ['Solana', 'Node.js', 'MongoDB', 'TypeScript', 'Indexação'],
    badge: 'Web3',
  },
  {
    title: 'Token Pipeline & Creator Engine',
    description:
      'Pipeline completo para expansão, enriquecimento e análise de tokens e creators. Unifica dados, detecta comportamentos suspeitos, gera insights, filtra padrões e constrói visão consolidada do ecossistema. Processamento distribuído e assíncrono.',
    technologies: ['Solana', 'TypeScript', 'MongoDB', 'Automation', 'Pipelines'],
    badge: 'Data',
  },
  {
    title: 'Wallet Intersection Engine',
    description:
      'Ferramenta profissional de correlação de wallets, com fluxo totalmente assíncrono, barra de progresso em tempo real, paginação de +10k endereços, filtros avançados, relatórios e análises de clusters comportamentais.',
    technologies: ['Solana', 'React', 'Node.js', 'WebSockets', 'MongoDB'],
    badge: 'Analytics',
  },

  // —————————————————— WEB3 EXPERIMENTAL ——————————————————
  {
    title: 'Plataforma Interativa de Distribuição de Fees',
    description:
      'Sistema Web3 experimental onde holders recebiam parte das fees geradas por um token. Inclui animações, interface gamificada, lógica de distribuição, métricas e fluxo social tokenizado.',
    technologies: ['Solana', 'React', 'UI/UX', 'Tokenomics'],
    badge: 'Web3',
  },

  // —————————————————— SOFTWARE / PLUGIN ——————————————————
  {
    title: 'Plugin Profissional para SketchUp (Empresa)',
    description:
      'Ferramenta comercial criada para acelerar o fluxo de trabalho de designers e arquitetos. Inclui automações internas, UI customizada e integração com bibliotecas visuais.',
    technologies: ['Ruby', 'SketchUp API', 'UI Design'],
    badge: 'Software',
  },

  // —————————————————— EXPERIMENTAIS / ESTÉTICOS ——————————————————
  {
    title: 'Experiência 3D Interativa (Arcade Web)',
    description:
      'Prototipação web com animações físicas, modelo 3D e experiência visual imersiva usada para testes de design, interação e resposta dinâmica.',
    technologies: ['React', 'Three.js', 'Motion'],
    badge: '3D UI',
  },

  // —————————————————— PROJETOS ANTIGOS ——————————————————
  {
    title: 'Pokedex — estudo de APIs públicas',
    description:
      'Aplicação de estudo com busca, listagem dinâmica e consumo de API externa.',
    technologies: ['JavaScript', 'PokeAPI', 'Bootstrap'],
    badge: 'Projeto inicial',
  },
  {
    title: 'OceanLive — conteúdo educativo',
    description:
      'Projeto acadêmico combinando storytelling, UI minimalista e propósito social.',
    technologies: ['HTML', 'CSS', 'UX Writing'],
    badge: 'Projeto acadêmico',
  },
  {
    title: 'TinDog — landing page experimental',
    description:
      'Landing page criada para consolidar fundamentos de responsividade e layout.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    badge: 'Projeto inicial',
  },
]


export function Projects() {
  return (
    <section id="projects" className="relative py-14 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="pill w-fit">Projetos</p>
            <h2 className="section-heading">Seleção de projetos e protótipos</h2>
            <p className="section-subtitle">
              Experimentos, protótipos e entregas reais que mostram meu foco em produtos digitais, Web3 e
              experiências consistentes.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div key={project.title} {...fadeInUp(idx * 0.05)}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
