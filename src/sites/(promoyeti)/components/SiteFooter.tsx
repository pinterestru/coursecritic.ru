import Link from 'next/link'
import type { ReactNode } from 'react'

import { categories } from '../data/categories'
import { SITE, inboxes } from '../data/site'

export default function SiteFooter() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <PromiseStrip />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <Brand />
        <Column title="Browse">
          {categories.slice(0, 6).map((c) => (
            <li key={c.id}>
              <Link
                href={`/categories/${c.id}`}
                className="transition-colors hover:underline"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {c.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/categories"
              className="font-semibold transition-colors hover:underline"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              All categories →
            </Link>
          </li>
        </Column>
        <Column title="Site">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/stores">All stores</FooterLink>
          <FooterLink href="/about">How we work</FooterLink>
          <FooterLink href="/disclosure">Affiliate disclosure</FooterLink>
        </Column>
        <Column title="Legal">
          <FooterLink href="/terms">Terms of use</FooterLink>
          <FooterLink href="/privacy">Privacy policy</FooterLink>
          <FooterLink href="/cookies">Cookie notice</FooterLink>
          <FooterLink href="/contacts">Contact</FooterLink>
        </Column>
      </div>

      <BottomBar />
    </footer>
  )
}

/**
 * The promise strip.
 *
 * One checkable claim, not a mission statement: we do not publish codes we have
 * not seen. A reader can verify it by opening any store page — everything there
 * is either a code with a source or a deal that says it needs no code. The
 * mechanics live on the disclosure page.
 */
function PromiseStrip() {
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-bg))' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: 'rgb(var(--color-accent))' }}
              aria-hidden
            />
            <span className="pp-eyebrow" style={{ color: 'rgb(var(--color-accent))' }}>
              How we work
            </span>
          </div>
          <p
            className="font-display mt-3 text-2xl leading-[1.15] font-extrabold sm:text-3xl"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            We do not invent codes.
          </p>
          <p className="mt-2 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            Every offer here is dated, says which country’s storefront it works on, and names the
            condition most likely to stop it at the checkout. Where a shop has no code, we say so
            instead of printing a string of letters that fails.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex h-12 items-center rounded-lg px-6 text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-transform hover:-translate-y-[1px]"
          style={{ background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }}
        >
          What that means
        </Link>
      </div>
    </div>
  )
}

function Brand() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <img src="/mark.svg" alt="" aria-hidden className="h-10 w-auto" />
        <div>
          <p
            className="font-display text-xl font-extrabold"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {SITE.name}
          </p>
          <p
            className="text-[11px] tracking-[0.12em] uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {SITE.market}
          </p>
        </div>
      </div>
      <p
        className="mt-6 max-w-sm text-[15px] leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {SITE.tagline}.
      </p>
      <div className="mt-6 space-y-2 text-sm">
        <MailRow label="Editorial" addr={inboxes.editorial} />
        <MailRow label="Partnerships" addr={inboxes.partnerships} />
        <MailRow label="Privacy requests" addr={inboxes.privacy} />
      </div>
    </div>
  )
}

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="pp-eyebrow" style={{ color: 'rgb(var(--color-primary))' }}>
        {title}
      </p>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href:
    | '/'
    | '/stores'
    | '/categories'
    | '/about'
    | '/disclosure'
    | '/terms'
    | '/privacy'
    | '/cookies'
    | '/contacts'
  children: string
}) {
  return (
    <li>
      <Link
        href={href}
        className="transition-colors hover:underline"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {children}
      </Link>
    </li>
  )
}

function MailRow({ label, addr }: { label: string; addr: string }) {
  return (
    <div className="flex flex-col">
      <span
        className="text-[10px] tracking-[0.12em] uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {label}
      </span>
      <a
        href={`mailto:${addr}`}
        className="font-display text-[15px] font-bold transition-colors hover:underline"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {addr}
      </a>
    </div>
  )
}

function BottomBar() {
  const year = new Date().getFullYear()
  return (
    <div
      className="border-t"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-fg))',
        color: 'rgb(var(--color-bg))',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs lg:flex-row lg:items-center lg:justify-between">
        <p className="flex items-center gap-2">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: 'rgb(var(--color-accent))' }}
            aria-hidden
          />
          <span className="tracking-[0.08em] uppercase">{SITE.name} · discount codes & deals</span>
        </p>
        <p className="opacity-70">
          © {SITE.since}–{year} {SITE.name}. We earn commission on some links.
        </p>
        <p className="opacity-70">
          Offers and terms change — check the shop’s own page before you pay.
        </p>
      </div>
    </div>
  )
}
