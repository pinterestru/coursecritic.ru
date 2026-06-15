'use client'

import { useEffect, useState } from 'react'

export interface TocItem {
  id: string
  label: string
}

// Sticky sidebar navigation with scrollspy: the entry for the section
// currently in view is highlighted via an IntersectionObserver.
export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // Trigger when a heading sits in the upper third of the viewport.
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    )

    const observed = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    observed.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="Содержание">
      <ul className="space-y-2 text-sm">
        {items.map((item) => {
          const isActive = active === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block leading-snug no-underline transition-colors"
                style={{
                  color: isActive ? 'rgb(var(--color-primary))' : 'rgb(var(--color-muted))',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
