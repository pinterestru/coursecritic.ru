'use client'

import Link from 'next/link'
import { useState } from 'react'

import { affiliateHref, type Offer, type Store } from '../data/types'
import BrandMark from './BrandMark'
import { formatDate } from './format'

/**
 * One offer, drawn as a coupon ticket.
 *
 * The anatomy is the one every working coupon site converges on, because it
 * survives being scanned rather than read:
 *
 *   [ value rail ] ┊ [ brand · title · meta · details ] [ CTA ]
 *
 * The value rail is the reason the layout works — it gives the eye one big
 * thing per row. Ours carries a percentage only when the merchant published
 * one; the rest of the time it names the KIND of saving ("Outlet", "Member",
 * "Bank offer"). The competition fills that column with invented numbers, and
 * that is the most consequential lie in this category, because for most
 * visitors it is the only thing they read.
 *
 * Two mechanics are easy to get wrong:
 *
 *  1. **The merchant must open from the click itself.** Revealing the code and
 *     opening the shop happen in the same user gesture, on a real
 *     `<a target="_blank">`, so the browser does not treat the new tab as a
 *     popup and block it. Opening it from a later callback is what makes
 *     coupon sites feel broken.
 *  2. **Never render a reveal button with nothing behind it.** The registry in
 *     data/stores/index.ts refuses to build a `code` offer with no code; this
 *     component would otherwise be where that lie surfaced.
 */
export default function OfferCard({
  store,
  offer,
  showBrand = false,
}: {
  store: Store
  offer: Offer
  /** Show the brand wordmark and name — for feeds that mix merchants. */
  showBrand?: boolean
}) {
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)

  const href = affiliateHref(offer.deepLink ?? store.domain)
  const isCode = offer.kind === 'code' && !!offer.code
  // A value that starts with a digit or a currency symbol is a real published
  // figure and gets the big treatment; a word label sets smaller and wraps.
  const numeric = /^[\d$£€₹]/.test(offer.value)

  async function copyCode() {
    if (!offer.code) return
    try {
      await navigator.clipboard.writeText(offer.code)
      setCopied(true)
    } catch {
      // Clipboard access can be refused (permissions, insecure context, older
      // browsers). The code is on screen either way, so a failed copy is a
      // missing convenience, not a broken offer — say nothing.
    }
  }

  return (
    <article className="pp-ticket flex flex-col sm:flex-row">
      {/* ── Value rail ─────────────────────────────────────────────────── */}
      <div className="flex shrink-0 items-center gap-3 px-5 pt-5 sm:w-[124px] sm:flex-col sm:justify-center sm:px-4 sm:py-6 sm:pt-6">
        <span
          className={`pp-value ${numeric ? 'text-[34px] sm:text-[38px]' : 'pp-value--word text-lg sm:text-center sm:text-[19px]'}`}
          style={{ color: isCode ? 'rgb(var(--color-accent))' : 'rgb(var(--color-fg))' }}
        >
          {offer.value}
        </span>
        {numeric && (
          <span className="pp-eyebrow" style={{ color: 'rgb(var(--color-muted))' }} aria-hidden>
            off
          </span>
        )}
      </div>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <div className="pp-perf relative min-w-0 flex-1 border-t border-dashed p-5 sm:border-t-0 sm:border-l sm:py-6">
        {/* Punched at both ends of the divider — see .pp-notch in theme.css. */}
        <span className="pp-notch pp-notch--start" aria-hidden />
        <span className="pp-notch pp-notch--end" aria-hidden />

        {showBrand && (
          <Link
            href={`/stores/${store.slug}`}
            className="mb-3 inline-flex items-center gap-2.5 no-underline"
          >
            <BrandMark name={store.name} badge={store.badge} color={store.color} size="xs" mono />
            <span
              className="text-[13px] font-bold hover:underline"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {store.name}
            </span>
          </Link>
        )}

        <h3
          className="font-display text-[17px] leading-snug font-bold sm:text-[19px]"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {offer.title}
        </h3>

        <div
          className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px]"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          <span
            className="rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase"
            style={
              isCode
                ? {
                    background: 'rgb(var(--color-accent) / 0.12)',
                    color: 'rgb(var(--color-accent))',
                  }
                : {
                    background: 'rgb(var(--color-primary) / 0.1)',
                    color: 'rgb(var(--color-primary))',
                  }
            }
          >
            {isCode ? 'Code' : 'No code needed'}
          </span>
          {/* Suppressed in the mixed feed, where every row is this shop's pick
              and the chip would repeat on all of them. */}
          {offer.best && !showBrand && (
            <span
              className="rounded px-1.5 py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase"
              style={{ border: '1px solid rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
            >
              Our pick
            </span>
          )}
          <span>Checked {formatDate(offer.checked)}</span>
          {offer.expires && <span>· ends {formatDate(offer.expires)}</span>}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-3 text-[13px] font-semibold underline underline-offset-2 hover:opacity-70"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          {open ? 'Hide details' : 'See details'}
        </button>

        {open && (
          <div className="mt-3 space-y-2 text-[14px] leading-relaxed">
            <p style={{ color: 'rgb(var(--color-muted))' }}>{offer.detail}</p>
            {offer.terms && (
              <p
                className="border-l-2 pl-3"
                style={{
                  borderColor: 'rgb(var(--color-accent))',
                  color: 'rgb(var(--color-muted))',
                }}
              >
                <strong style={{ color: 'rgb(var(--color-fg))' }}>The catch: </strong>
                {offer.terms}
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <div className="flex shrink-0 flex-col justify-center gap-2 px-5 pb-5 sm:w-[212px] sm:px-5 sm:py-6 sm:pb-6">
        {isCode && revealed ? (
          <>
            <span
              className="pp-code-face rounded-lg border-2 border-dashed px-3 py-2.5 text-center text-[15px] break-all"
              style={{ borderColor: 'rgb(var(--color-accent))', color: 'rgb(var(--color-fg))' }}
            >
              {offer.code}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyCode}
                className="flex-1 rounded-lg border px-2 py-2 text-xs font-bold transition-colors hover:bg-[rgb(var(--color-bg))]"
                style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
              >
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
              <a
                href={href}
                target="_blank"
                rel="noopener sponsored"
                className="flex-1 rounded-lg px-2 py-2 text-center text-xs font-bold"
                style={{
                  background: 'rgb(var(--color-primary))',
                  color: 'rgb(var(--color-primary-fg))',
                }}
              >
                Shop →
              </a>
            </div>
            <span className="text-center text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
              Paste at checkout
            </span>
          </>
        ) : isCode ? (
          <>
            {/* The stub peeks out on the right so the button reads as covering
                a real string rather than as a link with a promise attached. */}
            <a
              href={href}
              target="_blank"
              rel="noopener sponsored"
              onClick={() => {
                setRevealed(true)
                void copyCode()
              }}
              className="group flex items-stretch overflow-hidden rounded-lg"
            >
              <span
                className="flex-1 px-3 py-3 text-center text-sm font-bold transition-transform group-hover:-translate-y-[1px]"
                style={{
                  background: 'rgb(var(--color-accent))',
                  color: 'rgb(var(--color-accent-fg))',
                }}
              >
                Show code
              </span>
              <span
                className="pp-stub flex w-[46px] items-center justify-center overflow-hidden text-[13px]"
                aria-hidden
              >
                {offer.code?.slice(-3)}
              </span>
            </a>
            <span className="text-center text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
              Opens {store.siteLabel}
            </span>
          </>
        ) : (
          <>
            <a
              href={href}
              target="_blank"
              rel="noopener sponsored"
              className="block rounded-lg px-3 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-[1px]"
              style={{
                background: 'rgb(var(--color-primary))',
                color: 'rgb(var(--color-primary-fg))',
              }}
            >
              Get deal →
            </a>
            <span className="text-center text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
              Opens {store.siteLabel}
            </span>
          </>
        )}
      </div>
    </article>
  )
}
