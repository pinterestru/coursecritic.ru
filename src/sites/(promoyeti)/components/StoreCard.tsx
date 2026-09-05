import Link from 'next/link'

import { getCategory } from '../data/categories'
import type { Store } from '../data/types'
import BrandMark from './BrandMark'

/** A store in a browse grid: wordmark, positioning line, offer counts. */
export default function StoreCard({ store }: { store: Store }) {
  const category = getCategory(store.category)
  const codes = store.offers.filter((o) => o.kind === 'code').length
  const deals = store.offers.length - codes

  return (
    <Link href={`/stores/${store.slug}`} className="group block h-full">
      <article
        className="flex h-full flex-col rounded-xl border p-5 transition-all group-hover:-translate-y-[2px] group-hover:shadow-[0_20px_40px_-30px_rgb(18_20_26_/_0.6)]"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-surface))',
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <BrandMark
            name={store.name}
            badge={store.badge}
            color={store.color}
            size="md"
            align="left"
          />
          <span
            className="mt-1 text-[10px] font-bold tracking-[0.14em] uppercase"
            style={{ color: category.accent }}
          >
            {category.label}
          </span>
        </div>

        <p
          className="mt-4 line-clamp-3 text-[13px] leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {store.blurb}
        </p>

        <div
          className="mt-auto flex items-center justify-between gap-2 border-t pt-4 text-[11px]"
          style={{ borderColor: 'rgb(var(--color-rule))' }}
        >
          <span style={{ color: 'rgb(var(--color-muted))' }}>
            {codes > 0 && `${codes} code${codes === 1 ? '' : 's'}`}
            {codes > 0 && deals > 0 && ' · '}
            {deals > 0 && `${deals} deal${deals === 1 ? '' : 's'}`}
          </span>
          <span
            className="font-bold tracking-wider uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            Open →
          </span>
        </div>
      </article>
    </Link>
  )
}
