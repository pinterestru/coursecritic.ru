import Link from 'next/link'

import type { Category } from '../data/categories'

export default function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link href={`/categories/${category.id}`} className="block h-full">
      <article
        className="flex h-full flex-col rounded-xl border-[1.5px] p-5 transition-all hover:shadow-[0_18px_36px_-22px_rgba(21,22,31,0.35)]"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <span
          className="inline-block h-1.5 w-10 rounded-full"
          style={{ background: category.accent }}
          aria-hidden
        />
        <h3
          className="font-display mt-4 text-base font-bold"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {category.name}
        </h3>
        <p
          className="mt-2 line-clamp-3 text-[13px] leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {category.blurb}
        </p>
        <p className="mt-auto pt-4 text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
          {count} store{count === 1 ? '' : 's'}
        </p>
      </article>
    </Link>
  )
}
