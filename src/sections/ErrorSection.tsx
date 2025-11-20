import { AlertTriangle, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function ErrorSection() {
  const { t } = useTranslation()

  return (
    <section id="error" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-danger/20 p-3 text-danger">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="pill w-fit">{t('error.label')}</p>
              <h3 className="text-3xl font-semibold text-white">{t('error.title')}</h3>
              <p className="text-gray-300">{t('error.description')}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-white shadow-glow">
              <Home size={16} />
              {t('common.ctaBackHome')}
            </button>
            <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent">
              {t('common.ctaStatus')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
