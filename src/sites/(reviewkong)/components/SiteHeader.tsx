import Link from 'next/link'

import { SITE } from '../data/site'

/**
 * Site chrome.
 *
 * Two things the nav deliberately does NOT do:
 *
 *  - It does not link /articles. The guides are reachable from the home page's
 *    "Ranked guides" strip, but the index itself is noindex and stays out of
 *    the navigation. See data/articles.ts.
 *  - It does not appear on phones at all — no links, and no hamburger standing
 *    in for them. The header there is the wordmark and nothing else. Every
 *    destination it would list (Brands, About, Contact) is in the footer of
 *    every page, so nothing becomes unreachable; check SiteFooter before
 *    removing anything from there.
 */
export default function SiteHeader() {
  return (
    <header style={{ background: 'rgb(var(--color-bg))' }}>
      <div className="border-b" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            {/* Star-eyed gorilla mark; /favicon.svg and /logo.svg carry the same artwork. */}
            <img src="/mark.svg" alt="" aria-hidden className="h-9 w-auto" />
            <span
              // The wordmark used to be hidden below 360px, where it collided with
              // the nav links. The nav is gone at that width now, so it fits at
              // every size and the brand is never reduced to a bare badge.
              className="font-editorial text-xl font-bold tracking-tight sm:text-2xl"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {SITE.name}
            </span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm sm:flex sm:gap-7">
            <NavLink href="/brands">Brands</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contacts">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

function NavLink({
  href,
  children,
}: {
  href: '/brands' | '/about' | '/contacts'
  children: string
}) {
  return (
    <Link
      href={href}
      className="transition-colors hover:opacity-70"
      style={{ color: 'rgb(var(--color-fg))' }}
    >
      {children}
    </Link>
  )
}
