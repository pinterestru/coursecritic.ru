'use client'

import { useEffect, useState } from 'react'

/**
 * Полоса прогресса чтения по верхней кромке экрана.
 *
 * Намеренно занимает то же место, что и сигнальная линия в шапке: на обычных
 * страницах линия целая, в разборе она «наполняется» по мере прокрутки. Дорожка
 * непрозрачная — иначе линия шапки просвечивала бы насквозь и полоса всегда
 * выглядела бы полной.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const height = el.scrollHeight - el.clientHeight
      setProgress(height > 0 ? Math.min(100, (scrolled / height) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-0 z-40 h-[2px]"
      style={{ background: 'rgb(var(--color-rule))' }}
      aria-hidden
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: 'rgb(var(--color-primary))' }}
      />
    </div>
  )
}
