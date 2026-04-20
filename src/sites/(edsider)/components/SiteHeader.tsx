import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface) / 0.85)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-extrabold tracking-tight"
            style={{
              background: 'rgb(var(--color-primary))',
              color: 'rgb(var(--color-primary-fg))',
            }}
          >
            ES
          </span>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            EdSider
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/yandex-practicum"
            className="font-medium hover:underline"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Школы
          </Link>
          <Link
            href="/about"
            className="hidden hover:underline sm:inline"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            О проекте
          </Link>
          <Link
            href="/contacts"
            className="hidden hover:underline sm:inline"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  )
}
