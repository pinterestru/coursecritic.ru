import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md"
      style={{
        background: 'rgb(var(--color-bg) / 0.85)',
      }}
    >
      {/* Editorial issue strip */}
      <div
        className="border-b"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-fg))',
          color: 'rgb(var(--color-bg))',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 text-[11px] tracking-[0.18em] uppercase">
          <span>Еженедельный обзор онлайн-школ</span>
          <span className="hidden sm:inline">№&nbsp;14&nbsp;·&nbsp;{formatIssueWeek()}</span>
        </div>
      </div>

      <div className="border-b" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-md text-[13px] font-extrabold tracking-tight"
              style={{
                background: 'rgb(var(--color-primary))',
                color: 'rgb(var(--color-primary-fg))',
              }}
            >
              ED
            </span>
            <span
              className="font-editorial text-2xl font-bold tracking-tight"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              EDсайдер
            </span>
          </Link>
          <nav className="flex items-center gap-7 text-sm">
            <Link
              href="/about"
              className="transition-colors hover:opacity-70"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              О проекте
            </Link>
            <Link
              href="/contacts"
              className="transition-colors hover:opacity-70"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

function formatIssueWeek(): string {
  const now = new Date()
  const jan1 = new Date(now.getFullYear(), 0, 1)
  const week = Math.ceil(((now.getTime() - jan1.getTime()) / 86400000 + jan1.getDay() + 1) / 7)
  return `неделя ${week}`
}
