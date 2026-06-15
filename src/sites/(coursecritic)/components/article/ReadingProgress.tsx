'use client'

import { useEffect, useState } from 'react'

// Thin progress bar pinned to the top of the viewport that fills as the
// reader scrolls through the article.
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrollable = el.scrollHeight - el.clientHeight
      setProgress(scrollable > 0 ? Math.min(100, (el.scrollTop / scrollable) * 100) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1" aria-hidden>
      <div
        className="h-full origin-left transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: 'rgb(var(--color-primary))' }}
      />
    </div>
  )
}
