import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, SendHorizonal } from 'lucide-react'
import { SocialLinks } from '../components/SocialLinks'
import { fadeInFromRight, fadeInUp } from '../styles/motion'

const contactItems = [
  { label: 'Email', value: 'toscanopedroall@gmail.com', icon: Mail, href: 'mailto:toscanopedroall@gmail.com' },
  { label: 'Telefone', value: '+55 45 99103-0908', icon: Phone, href: 'tel:+5545991030908' },
  { label: 'Local', value: 'Maringá, Paraná, Brasil', icon: MapPin },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#040507] via-[#06070A] to-black"
    >
      {/* BACKGROUND LIGHTING */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[60%] rounded-full bg-accent/20 blur-[160px] opacity-50" />
        <div className="absolute bottom-0 right-[15%] h-96 w-96 rounded-full bg-green-400/10 blur-[130px] opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto space-y-6"
          {...fadeInUp()}
        >
          <p className="pill mx-auto">Contato</p>

          <h2 className="section-heading text-4xl md:text-5xl !leading-tight">
            Vamos construir algo extraordinário?
          </h2>

          <p className="section-subtitle text-lg md:text-xl">
            Aberto a oportunidades, freelas, colaborações e produtos de impacto.  
            Se você quer tirar uma ideia do papel ou elevar um sistema a outro nível, vamos conversar.
          </p>
        </motion.div>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* LEFT SIDE - CTA */}
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
            {...fadeInUp(0.1)}
          >
            {/* Gradient sheen */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent mix-blend-overlay" />

            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Vamos conversar
              </h3>

              <p className="text-gray-300 text-lg">
                Me envie um email, chame no Whats ou conecte pelo LinkedIn.
                Costumo responder muito rápido especialmente para projetos interessantes.
              </p>

              <div className="pt-2">
                <SocialLinks withLabels />
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:toscanopedroall@gmail.com"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentLight px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Enviar mensagem
                <SendHorizonal size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid gap-6">
            {contactItems.map((item, idx) => {
              const Icon = item.icon
              const content = (
                <div className="flex w-full items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{item.label}</p>
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                  </div>
                  <span className="rounded-2xl bg-white/10 p-4 text-accent backdrop-blur-md shadow-inner">
                    <Icon size={20} />
                  </span>
                </div>
              )

              return (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg shadow-black/30 hover:shadow-accent/20 transition"
                  {...fadeInFromRight(idx * 0.15)}
                >
                  {item.href ? (
                    <a href={item.href} className="block hover:text-white">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
