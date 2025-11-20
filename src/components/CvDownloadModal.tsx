import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type CvDownloadModalProps = {
  show: boolean
  onClose: () => void
}

const springTransition = { type: 'spring' as const, stiffness: 160, damping: 18 }

export function CvDownloadModal({ show, onClose }: CvDownloadModalProps) {
  const { t } = useTranslation()
  const base = import.meta.env.BASE_URL
  const [cancelOffset, setCancelOffset] = useState({ x: 0, y: 0 })
  const [downloadStarted, setDownloadStarted] = useState(false)

  useEffect(() => {
    if (!show) {
      setCancelOffset({ x: 0, y: 0 })
      setDownloadStarted(false)
    }
  }, [show])

  const moveCancel = () => {
    const rand = () => (Math.random() - 0.5) * 160
    setCancelOffset({ x: rand(), y: rand() })
  }

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
           className="fixed inset-0 z-[999999] isolate grid place-items-center bg-black/60 backdrop-blur-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative mx-4 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={springTransition}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-hero-gradient opacity-15 blur-3xl" />
            <div className="relative space-y-4">
              <div>
                <p className="pill w-fit">{t('modal.cv.badge')}</p>
                <h3 className="text-2xl font-semibold text-white">{t('modal.cv.title')}</h3>
                <p className="text-gray-300">{t('modal.cv.description')}</p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <a
                  href={`${base}files/Curriculo_Pedro_Toscano.pdf`}
                  onClick={() => setDownloadStarted(true)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                  download
                >
                  {t('modal.cv.pt')}
                </a>
                <a
                  href={`${base}files/Resume_Pedro_Toscano.pdf`}
                  onClick={() => setDownloadStarted(true)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-accent"
                  download
                >
                  {t('modal.cv.en')}
                </a>
              </div>

              {downloadStarted ? (
                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-white shadow-glow">
                  <p className="font-semibold">{t('modal.cv.downloadStarted')}</p>
                  <p className="text-gray-200">{t('modal.cv.downloadMessage')}</p>
                  <div className="mt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
                    >
                      {t('modal.cv.close')}
                    </button>
                  </div>
                </div>
              ) : null}

<div className="relative flex justify-center items-center py-6">
  <motion.button
    type="button"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-not-allowed rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
    style={{ transform: `translate(-50%, -50%) translate(${cancelOffset.x}px, ${cancelOffset.y}px)` }}
    whileHover={{ rotate: 8, scale: 1.05 }}
    onMouseEnter={moveCancel}
    onFocus={moveCancel}
    tabIndex={-1}
  >
    {t('modal.cv.cancel')}
  </motion.button>
</div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
