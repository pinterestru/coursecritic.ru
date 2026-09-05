import Link from 'next/link'

import type { Store } from '../data/types'
import BrandMark from './BrandMark'

/**
 * The brand preview: a wordmark tile with that brand's headline offer on a
 * coloured footer bar.
 *
 * This is the home page's main browse surface. It exists to answer "is my shop
 * here, and is there anything worth clicking" in one glance, which is why the
 * footer bar carries the offer's value label rather than a generic "View
 * codes" — a tile that says `Outlet` or `Bank offer` has already told you what
 * kind of saving is behind it.
 */
export default function BrandTile({ store }: { store: Store }) {
  const headline = store.offers.find((o) => o.best) ?? store.offers[0]
  const codes = store.offers.filter((o) => o.kind === 'code').length

  return (
    <Link href={`/stores/${store.slug}`} className="group block">
      <article
        className="flex h-full flex-col overflow-hidden rounded-xl border transition-all group-hover:-translate-y-[2px] group-hover:shadow-[0_20px_40px_-30px_rgb(18_20_26_/_0.6)]"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-surface))',
        }}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 py-7">
          <BrandMark
            name={store.name}
            badge={store.badge}
            color={store.color}
            size="md"
            className="border-0"
          />
          <span className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
            {store.offers.length} offer{store.offers.length === 1 ? '' : 's'}
            {codes > 0 ? ` · ${codes} code${codes === 1 ? '' : 's'}` : ''}
          </span>
        </div>
        {/*
          Solid orange means "there is a code behind this tile"; a quiet tinted
          bar means the saving needs no code. Most shops here are the second
          case, so filling every bar with solid colour would make the grid loud
          and, worse, make the handful of shops that DO have a code invisible.
        */}
        <div
          className="border-t px-3 py-2.5 text-center text-[13px] font-bold"
          style={
            codes > 0
              ? {
                  borderColor: 'rgb(var(--color-accent))',
                  background: 'rgb(var(--color-accent))',
                  color: 'rgb(var(--color-accent-fg))',
                }
              : {
                  borderColor: 'rgb(var(--color-rule))',
                  background: 'rgb(var(--color-primary) / 0.07)',
                  color: 'rgb(var(--color-primary))',
                }
          }
        >
          {headline.value}
        </div>
      </article>
    </Link>
  )
}
