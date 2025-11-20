import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Globe2, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { fadeInUp } from '../styles/motion'
import { CvDownloadModal } from './CvDownloadModal'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [showCvModal, setShowCvModal] = useState(false)
  const { t, i18n } = useTranslation()
  const [langOpen, setLangOpen] = useState(false)
  const links = t('navbar.links', { returnObjects: true }) as Array<{ href: string; label: string }>
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'pt'

useEffect(() => {
  const close = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest('.lang-dropdown')) setLangOpen(false)
  }
  document.addEventListener('click', close)
  return () => document.removeEventListener('click', close)
}, [])


  const grouped = {
    main: links.slice(0, 3),
    explore: links.slice(3, 6),
    other: links.slice(6),
  }

  const changeLanguage = (lng: 'pt' | 'en') => {
    i18n.changeLanguage(lng)
    setOpen(false)
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-[999] w-full backdrop-blur-xl bg-[rgba(0,0,0,0.25)]">
        <div className="mx-auto max-w-7xl px-4 pt-4 pb-2 relative z-10">
          <motion.div
            className="relative flex items-center justify-between rounded-2xl border border-white/10 
                       bg-white/5 backdrop-blur-xl p-3 md:p-4 shadow-[0_0_25px_rgba(0,0,0,0.45)]"
          >
            {/* LEFT — logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10
                              bg-gradient-to-br from-white/10 to-white/5 text-white font-semibold shadow-inner">
                PT
              </div>

              <div className="hidden md:block">
                <p className="text-sm text-gray-400">{t('common.name')}</p>
                <p className="text-base font-semibold text-white leading-tight">{t('common.role')}</p>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-5">
              {grouped.main.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-sm text-gray-300 hover:text-white 
                             transition before:absolute before:left-1/2 before:-bottom-1 before:h-[2px] 
                             before:w-0 before:-translate-x-1/2 before:bg-accent2 before:transition-all
                             hover:before:w-3/4"
                >
                  {item.label}
                </a>
              ))}

              {/* EXPLORE DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setExploreOpen(!exploreOpen)}
                  className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition"
                >
                  {t('navbar.explore')}
                </button>

                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-44 rounded-xl bg-black/80 backdrop-blur-xl
                               border border-white/10 shadow-xl p-2"
                  >
                    {grouped.explore.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/10"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* other */}
              {grouped.other.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}

              {/* LANGUAGE SELECTOR — novo estilo */}
{/* LANGUAGE DROPDOWN — versão premium */}
<div className="relative lang-dropdown">
  <button
    onClick={() => setLangOpen(!langOpen)}
    className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold 
               uppercase text-gray-300 hover:text-white transition bg-black/30 
               border border-white/10 backdrop-blur-xl shadow-inner"
  >
    <Globe2 size={16} className="text-accent2" />
    {currentLang.toUpperCase()}
  </button>

  {langOpen && (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.15 }}
      className="absolute right-0 mt-2 w-28 rounded-xl bg-black/80 backdrop-blur-xl 
                 border border-white/10 shadow-xl p-2 z-[999]"
    >
      {(['pt', 'en'] as const).map((lng) => (
        <button
          key={lng}
          onClick={() => {
            changeLanguage(lng)
            setLangOpen(false)
          }}
          className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition
            ${
              currentLang === lng
                ? 'bg-gradient-to-r from-accent to-accent2 text-white font-semibold'
                : 'text-gray-300 hover:bg-white/10'
            }`}
        >
          {t(`navbar.toggle.${lng}`)}
        </button>
      ))}
    </motion.div>
  )}
</div>


              {/* Resume Button */}
              <button
                onClick={() => setShowCvModal(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r 
                           from-accent to-accent2 px-4 py-2 text-sm font-semibold 
                           text-white shadow-glow"
              >
                <Download size={16} />
                {t('navbar.resume')}
              </button>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden rounded-xl border border-white/20 bg-white/10 p-2 text-white shadow-inner"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>

          {/* MOBILE MENU */}
          {open && (
            <motion.div
              {...fadeInUp()}
              className="mt-3 rounded-2xl border border-white/10 bg-black/70 
                         backdrop-blur-xl shadow-xl p-4 flex flex-col gap-2 md:hidden"
            >
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm text-gray-100 hover:bg-white/10 transition"
                >
                  {item.label}
                </a>
              ))}

              {/* mobile lang */}
              <div className="flex items-center gap-2">
                {(['pt', 'en'] as const).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`flex-1 rounded-xl px-3 py-3 text-sm font-semibold ${
                      currentLang === lng
                        ? 'bg-gradient-to-r from-accent to-accent2 text-white'
                        : 'bg-white/5 text-gray-200'
                    }`}
                  >
                    <Globe2 size={16} />
                    {t(`navbar.toggle.${lng}`)}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowCvModal(true)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r 
                           from-accent to-accent2 px-3 py-3 text-sm font-semibold text-white shadow-glow"
              >
                <Download size={16} />
                {t('navbar.resume')}
              </button>
            </motion.div>
          )}
        </div>
      </header>

      {/* MODAL — AGORA FORA DO HEADER (correção final do bug) */}
      <CvDownloadModal show={showCvModal} onClose={() => setShowCvModal(false)} />
    </>
  )
}
