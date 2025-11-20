import { SocialLinks } from './SocialLinks'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-32 overflow-hidden pt-1">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-[0.55]"
        animate={{
          background: [
            'radial-gradient(circle at 25% 30%, rgba(124,58,237,0.18), transparent 70%)',
            'radial-gradient(circle at 60% 70%, rgba(34,211,238,0.17), transparent 70%)',
            'radial-gradient(circle at 40% 90%, rgba(158,240,26,0.12), transparent 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]
        bg-[radial-gradient(circle_at_1px_1px,#ffffff22,transparent_0)]
        bg-[length:50px_50px] pointer-events-none"
      />

      {/* Glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1.5px]
        bg-gradient-to-r from-transparent via-accent2/40 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'linear' }}
      />

      {/* FULL WIDTH CONTENT */}
      <div
        className="relative z-10 w-full px-10 py-12
        backdrop-blur-2xl bg-white/[0.02]
        border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 max-w-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-400">
              {t('common.name')}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed md:text-base">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="md:order-none order-last">
            <SocialLinks withLabels={false} variant="ghost" />
          </div>

          <div className="text-gray-500 text-xs md:text-right text-center">
            {t('footer.rights', { year })}
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-28 w-[55%]
        bg-gradient-to-r from-accent/20 via-accent2/20 to-transparent
        blur-[90px] opacity-40 pointer-events-none"
      />
    </footer>
  )
}
