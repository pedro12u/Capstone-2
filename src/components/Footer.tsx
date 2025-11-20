import { SocialLinks } from './SocialLinks'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative mt-28 overflow-hidden">
      {/* Fundo vivo Solana-like */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(120,80,255,0.15), transparent 70%)',
            'radial-gradient(circle at 70% 60%, rgba(60,220,255,0.18), transparent 70%)',
            'radial-gradient(circle at 40% 80%, rgba(80,255,200,0.12), transparent 70%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Sutil grid on-chain */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid.svg')] bg-repeat pointer-events-none" />

      {/* Pulse line superior */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accentLight/40 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 flex flex-col gap-10 md:flex-row md:items-center md:justify-between border-t border-white/10 backdrop-blur-2xl bg-white/[0.02] rounded-t-3xl">
        
        {/* Info */}
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Pedro Toscano
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            Engenharia, dados e Web3 unidos para criar produtos eficientes e elegantes.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end">
          <SocialLinks variant="ghost" />
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs text-center md:text-right">
          © {new Date().getFullYear()} — Construído com tecnologia e propósito.
        </div>
      </div>

      {/* Reflexo holográfico inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-[60%] bg-accent/20 blur-[100px] opacity-40 pointer-events-none" />
    </footer>
  )
}
