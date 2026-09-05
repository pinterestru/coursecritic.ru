import Link from 'next/link'
import type { ReactNode } from 'react'

import { SITE, inboxes } from '../data/site'
import { verticals } from '../data/verticals'

export default function SiteFooter() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <DisclosureStrip />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <Brand />
        <Column title="What we cover">
          {verticals.map((v) => (
            <li key={v.id} className="text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
              {v.name}
            </li>
          ))}
        </Column>
        <Column title="Site">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/brands">Brand reviews</FooterLink>
          <FooterLink href="/about">About us</FooterLink>
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
 * Editorial promise in the footer of every page.
 *
 * Three checkable claims, not a mission statement: we sell nothing, every page
 * is dated, and every page names who should buy elsewhere. A reader can verify
 * all three by opening any review. The formal disclosure lives on its own page,
 * linked from the legal column above.
 */
function DisclosureStrip() {
  return (
    <div
      className="border-b"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-bg))',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: 'rgb(var(--color-primary))' }}
              aria-hidden
            />
            <span
              className="text-[11px] font-bold tracking-[0.22em] uppercase"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              How we work
            </span>
          </div>
          <p
            className="font-editorial mt-3 text-2xl leading-[1.15] font-bold sm:text-3xl"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            We do not sell anything we review.
          </p>
          <p className="mt-2 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            Every review is dated, names the sources behind its figures, and ends with a list of
            people who should buy something else instead.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex h-12 items-center rounded-sm px-6 text-sm font-bold tracking-wider whitespace-nowrap uppercase transition-transform hover:-translate-y-[1px]"
          style={{
            background: 'rgb(var(--color-primary))',
            color: 'rgb(var(--color-primary-fg))',
          }}
        >
          How we review
        </Link>
      </div>
    </div>
  )
}

function Brand() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <img src="/mark.svg" alt="" aria-hidden className="h-11 w-auto" />
        <div>
          <p className="font-editorial text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
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
        className="font-editorial mt-6 max-w-sm text-[17px] leading-[1.5] italic"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        “We read the renewal terms and the exclusions pages so that a decision you make once stays
        right for years.”
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
      <p
        className="text-[11px] font-bold tracking-[0.22em] uppercase"
        style={{ color: 'rgb(var(--color-primary))' }}
      >
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
    | '/brands'
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
        className="font-editorial text-[15px] font-bold transition-colors hover:underline"
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
            style={{ background: 'rgb(var(--color-primary))' }}
            aria-hidden
          />
          <span className="tracking-[0.08em] uppercase">
            {SITE.name} · independent buying guides
          </span>
        </p>
        <p className="opacity-70">
          © {SITE.since}–{year} {SITE.name}. Editorial project — we do not sell the products we
          review.
        </p>
        <p className="opacity-70">
          Prices and terms change; check the vendor’s own page before you buy.
        </p>
      </div>
    </div>
  )
}
