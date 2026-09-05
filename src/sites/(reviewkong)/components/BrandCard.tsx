import Link from 'next/link'

import { contrastText } from './contrastText'

/**
 * One review preview. Everything is pre-computed on the server — including the
 * formatted date — because the horizontal slider that also renders this card is
 * a client component: formatting a date there would use the visitor's locale
 * and the hydrated markup would not match what the server sent.
 */
export interface BrandPreview {
  slug: string
  name: string
  badge: string
  color: string
  score: number
  /** Short vertical label, e.g. 'Booking'. */
  category: string
  tagline: string
  /** Already formatted, e.g. '24 August 2026'. */
  reviewed: string
}

/**
 * Shared card for both hero treatments: the horizontal slider on small screens
 * and the vertical ticker on desktop. Kept presentational and hook-free so the
 * ticker can stay a server component.
 */
export default function BrandCard({ item }: { item: BrandPreview }) {
  return (
    <Link href={`/brands/${item.slug}`} className="block h-full">
      <article
        className="group flex h-full flex-col rounded-lg border-[1.5px] p-5 transition-all hover:shadow-[0_20px_40px_-20px_rgba(22,24,28,0.25)]"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-surface))',
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-[11px] font-extrabold tracking-tight"
            style={{ background: item.color, color: contrastText(item.color) }}
          >
            {item.badge}
          </span>
          <span
            className="rounded px-1.5 py-0.5 text-[11px] font-bold tabular-nums"
            style={{
              background: 'rgb(var(--color-accent))',
              color: 'rgb(var(--color-fg))',
            }}
          >
            ★ {item.score.toFixed(1)}
          </span>
        </div>

        <p
          className="mt-4 truncate text-sm font-bold tracking-tight"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {item.name}
        </p>
        <p
          className="mt-1 text-[11px] tracking-wide uppercase"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {item.category}
        </p>

        <p
          className="mt-3 line-clamp-3 text-[13px] leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {item.tagline}
        </p>

        <div
          className="mt-auto flex items-center justify-between gap-2 border-t pt-4 text-[11px]"
          style={{ borderColor: 'rgb(var(--color-rule))' }}
        >
          <span style={{ color: 'rgb(var(--color-muted))' }}>Reviewed {item.reviewed}</span>
          <span
            className="font-bold tracking-wider uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            Read →
          </span>
        </div>
      </article>
    </Link>
  )
}
