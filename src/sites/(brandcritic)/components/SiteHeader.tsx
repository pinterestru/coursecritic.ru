import Link from 'next/link'

import { SITE } from '../data/site'

/**
 * Шапка сайта. Обратите внимание, чего в навигации НЕТ: /articles. Разборы —
 * лендинги прямого открытия для платного трафика, поэтому просматриваемый сайт
 * это главная, страницы брендов и юридические страницы. См. data/articles.ts.
 */
export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-bg) / 0.88)',
      }}
    >
      {/* Сигнальная линия по верхней кромке — фирменная деталь вместо тёмной плашки */}
      <div className="h-[2px]" style={{ background: 'rgb(var(--color-primary))' }} aria-hidden />

      <div className="mx-auto flex max-w-6xl items-center gap-5 px-6 py-4">
        <Link href="/" className="flex flex-shrink-0 items-center gap-3 no-underline">
          <span
            className="bc-mono flex h-9 w-9 items-center justify-center text-[13px] font-bold"
            style={{
              background: 'rgb(var(--color-primary))',
              color: 'rgb(var(--color-primary-fg))',
            }}
          >
            {SITE.badge}
          </span>
          <span className="text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            Brand
            <span style={{ color: 'rgb(var(--color-primary))' }}>Critic</span>
          </span>
        </Link>

        <span
          className="hidden h-5 w-px flex-shrink-0 lg:block"
          style={{ background: 'rgb(var(--color-rule))' }}
          aria-hidden
        />
        <span
          className="bc-mono hidden flex-1 truncate text-[11px] tracking-[0.1em] uppercase lg:block"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {SITE.tagline}
        </span>

        <nav className="ml-auto flex items-center gap-5 sm:gap-7">
          <NavLink href="/brands">Бренды</NavLink>
          <NavLink href="/about">Методика</NavLink>
          <NavLink href="/contacts">Контакты</NavLink>
        </nav>
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
      className="bc-mono border-b-2 border-transparent pb-0.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))]"
      style={{ color: 'rgb(var(--color-fg))' }}
    >
      {children}
    </Link>
  )
}
