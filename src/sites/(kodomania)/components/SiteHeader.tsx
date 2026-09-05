import Link from 'next/link'

const nav = [
  { href: '/idei', label: 'Идеи подарков' },
  { href: '/idei/obuchenie-v-podarok', label: 'Обучение в подарок' },
  { href: '/about', label: 'О нас' },
]

export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-bg) / 0.82)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-2xl text-xl shadow-sm"
            style={{ background: 'rgb(var(--color-primary))' }}
            aria-hidden
          >
            🎁
          </span>
          <span
            className="kdm-display text-xl font-extrabold"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Kodomania
          </span>
        </Link>

        <nav className="ml-auto flex items-center gap-5 text-[15px] font-medium sm:gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-60"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              <span className={item.href === '/idei/obuchenie-v-podarok' ? 'hidden md:inline' : ''}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
