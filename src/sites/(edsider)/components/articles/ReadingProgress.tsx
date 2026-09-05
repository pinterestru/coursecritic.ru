'use client'

import { useEffect, useState } from 'react'

/**
 * Thin scroll-progress bar pinned under the site header. Pure client-side
 * affordance — gives the long rating guides a sense of length and position.
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
      className="fixed inset-x-0 top-0 z-40 h-1"
      style={{ background: 'rgb(var(--color-rule) / 0.4)' }}
      aria-hidden
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: 'rgb(var(--color-primary))' }}
      />
    </div>
  )
}
