'use client'

import { useState } from 'react'

import type { PromoCode } from '../../data/netology/types'

const MONTHS = [
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

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

/**
 * Early-page promo note: the code plus the two disclosures the page owes the
 * reader, in one compact block.
 *
 * Sits right after the opening paragraph because these are ad landers — someone
 * arriving on «промокод нетология» wants the code, not a scroll. The full
 * PromoCodeCard with its CTA still comes later in the body; this one is
 * deliberately quiet, with no button, so it informs without competing with it.
 *
 * Both disclosures matter: prices on the school's site move with every promo
 * cycle, so the capture date keeps a stale number from reading as a promise;
 * and the outbound links are commercial, which the reader is told before they
 * click rather than after.
 */
export default function PromoNote({
  promo,
  asOf,
  where = 'Вводится на этапе оплаты',
}: {
  promo: PromoCode
  /** ISO date the prices in the article were captured — usually meta.updated. */
  asOf: string
  /** Short note on where the code goes in. */
  where?: string
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
      className="rounded-xl border-l-4 py-4 pr-4 pl-4 sm:pl-5"
      style={{
        borderColor: 'rgb(var(--color-primary))',
        background: 'rgb(var(--color-surface))',
        borderTopWidth: '1px',
        borderRightWidth: '1px',
        borderBottomWidth: '1px',
        borderTopColor: 'rgb(var(--color-rule))',
        borderRightColor: 'rgb(var(--color-rule))',
        borderBottomColor: 'rgb(var(--color-rule))',
      }}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <code
          className="rounded-md border px-2.5 py-1 font-mono text-sm font-bold tracking-wider select-all"
          style={{
            borderColor: 'rgb(var(--color-rule))',
            background: 'rgb(var(--color-bg))',
            color: 'rgb(var(--color-fg))',
          }}
        >
          {promo.code}
        </code>
        <span className="text-sm font-bold" style={{ color: 'rgb(var(--color-primary))' }}>
          {promo.label}
        </span>
        <span className="text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
          {where}
        </span>
        <button
          type="button"
          onClick={copy}
          className="text-sm font-semibold underline underline-offset-2 hover:opacity-70"
          style={{ color: 'rgb(var(--color-fg))' }}
          aria-live="polite"
        >
          {copied ? 'Скопировано' : 'Скопировать'}
        </button>
      </div>
      <p
        className="mt-2.5 text-[13px] leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        Цены и промокоды проверены {formatDate(asOf)} и меняются с каждой акцией школы — перед
        оплатой сверяйтесь с текущими на сайте.
      </p>
    </aside>
  )
}
