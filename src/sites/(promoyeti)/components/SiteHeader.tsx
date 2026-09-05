import Link from 'next/link'

import { SITE } from '../data/site'

/**
 * Site chrome.
 *
 * The nav disappears below `sm` rather than collapsing into a hamburger: there
 * are three destinations, all of them are in the footer of every page, and a
 * menu button that opens a list of three links is a client component and a
 * bundle for nothing. Check SiteFooter before removing anything from there.
 */
export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface) / 0.9)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          {/* Yeti mark; /favicon.svg and /logo.svg carry the same artwork. */}
          <img src="/mark.svg" alt="" aria-hidden className="h-8 w-auto" />
          <span
            className="font-display text-xl font-extrabold tracking-tight"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {SITE.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <NavLink href="/stores">All stores</NavLink>
          <NavLink href="/categories">Categories</NavLink>
          <NavLink href="/about">How we work</NavLink>
        </nav>
      </div>
    </header>
  )
}

function NavLink({
  href,
  children,
}: {
  href: '/stores' | '/categories' | '/about'
  children: string
}) {
  return (
    <Link
      href={href}
      className="font-semibold transition-opacity hover:opacity-70"
      style={{ color: 'rgb(var(--color-fg))' }}
    >
      {children}
    </Link>
  )
}
