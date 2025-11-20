import { useEffect, useState } from 'react'

const isMobile = () => typeof window !== 'undefined' && /Mobi|Android/i.test(window.navigator.userAgent)

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isMobile()) return
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const handleLeave = () => setVisible(false)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  if (isMobile()) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <div
        className="absolute h-24 w-24 rounded-full bg-accent/20 blur-[32px] transition duration-150"
        style={{ transform: `translate(${pos.x - 48}px, ${pos.y - 48}px)`, opacity: visible ? 1 : 0 }}
      />
      <div
        className="absolute h-10 w-10 rounded-full border border-accent/60 bg-white/5 shadow-glow transition duration-100"
        style={{ transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`, opacity: visible ? 1 : 0 }}
      />
    </div>
  )
}
