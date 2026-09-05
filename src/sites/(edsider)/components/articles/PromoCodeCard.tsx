'use client'

import { useState } from 'react'

import type { PromoCode } from '../../data/netology/types'
import { stackingLabel } from '../../data/netology/types'

import AffiliateButton from './AffiliateButton'

function formatExpiry(iso: string): string {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const d = new Date(iso)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

/**
 * The conversion unit of a promo lander: one code, copyable, with the CTA that
 * opens the checkout where it gets pasted.
 *
 * Client-only because of the clipboard copy — a promo page whose code you have
 * to select by hand loses people at exactly the wrong moment. The copy falls
 * back silently to the plain code text if the Clipboard API is unavailable
 * (older Safari, or any non-secure context), which is why the code itself is
 * always rendered as selectable text rather than hidden behind the button.
 */
export default function PromoCodeCard({
  promo,
  deepLink,
  cta = 'Открыть курс и применить код →',
  tracked = true,
}: {
  promo: PromoCode
  /** Course deep-link the CTA opens, e.g. 'netology.ru/programs/python-basic'. */
  deepLink: string
  cta?: string
  tracked?: boolean
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(promo.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — the code stays selectable on screen.
    }
  }

  return (
    <aside
      className="rounded-2xl border-2 border-dashed p-5 sm:p-6"
      style={{
        borderColor: 'rgb(var(--color-primary))',
        background: 'rgb(var(--color-primary) / 0.05)',
      }}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span
          className="font-editorial text-2xl font-bold sm:text-3xl"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          {promo.label}
        </span>
        <span className="text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
          {promo.scope}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <code
          className="rounded-lg border px-4 py-2.5 font-mono text-lg font-bold tracking-wider select-all"
          style={{
            borderColor: 'rgb(var(--color-rule))',
            background: 'rgb(var(--color-surface))',
            color: 'rgb(var(--color-fg))',
          }}
        >
          {promo.code}
        </code>
        <button
          type="button"
          onClick={copy}
          className="rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[rgb(var(--color-surface))]"
          style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
          aria-live="polite"
        >
          {copied ? 'Скопировано' : 'Скопировать'}
        </button>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
        {promo.note}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2 text-xs">
        <li
          className="rounded-full border px-3 py-1"
          style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
        >
          {promo.kind === 'fixed' ? 'Фиксированная сумма' : 'Процент от цены'}
        </li>
        <li
          className="rounded-full border px-3 py-1"
          style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
        >
          {stackingLabel(promo.stacking)}
        </li>
        {promo.expires && (
          <li
            className="rounded-full border px-3 py-1"
            style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
          >
            Действует до {formatExpiry(promo.expires)}
          </li>
        )}
      </ul>

      <div className="mt-5">
        <AffiliateButton to={deepLink} tracked={tracked}>
          {cta}
        </AffiliateButton>
      </div>
    </aside>
  )
}
