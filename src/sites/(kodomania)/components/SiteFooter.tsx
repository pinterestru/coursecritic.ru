import Link from 'next/link'

const sections: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: 'Идеи',
    links: [
      { href: '/idei', label: 'Все подборки' },
      { href: '/idei/chto-podarit-programmistu', label: 'Программисту' },
      { href: '/idei/obuchenie-v-podarok', label: 'Обучение в подарок' },
    ],
  },
  {
    title: 'О проекте',
    links: [
      { href: '/about', label: 'О нас' },
      { href: '/contacts', label: 'Контакты' },
    ],
  },
  {
    title: 'Документы',
    links: [
      { href: '/terms', label: 'Условия' },
      { href: '/privacy', label: 'Данные' },
      { href: '/cookies', label: 'Cookie' },
    ],
  },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-28">
      {/* CTA band */}
      <div style={{ background: 'rgb(var(--color-primary))' }}>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="kdm-display text-2xl leading-tight font-extrabold sm:text-3xl"
              style={{ color: 'rgb(var(--color-primary-fg))' }}
            >
              Не знаете, что подарить?
            </p>
            <p className="mt-2 text-sm" style={{ color: 'rgb(var(--color-primary-fg) / 0.85)' }}>
              Загляните в подборки идей — по получателю и обучение в подарок.
            </p>
          </div>
          <Link
            href="/idei"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold no-underline transition-transform hover:scale-[1.03]"
            style={{
              background: 'rgb(var(--color-primary-fg))',
              color: 'rgb(var(--color-primary))',
            }}
          >
            Смотреть идеи подарков →
          </Link>
        </div>
      </div>

      {/* Links */}
      <div style={{ background: 'rgb(var(--color-fg))' }}>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-lg"
                  style={{ background: 'rgb(var(--color-primary))' }}
                  aria-hidden
                >
                  🎁
                </span>
                <span
                  className="kdm-display text-lg font-extrabold"
                  style={{ color: 'rgb(var(--color-bg))' }}
                >
                  Kodomania
                </span>
              </div>
              <p
                className="mt-5 max-w-xs text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-bg) / 0.6)' }}
              >
                Подборки идей подарков на любой повод и для любого человека. Помогаем находить
                подарки, которые остаются с человеком надолго.
              </p>
            </div>

            {sections.map((s) => (
              <div key={s.title}>
                <p
                  className="text-[11px] font-bold tracking-[0.16em] uppercase"
                  style={{ color: 'rgb(var(--color-bg) / 0.45)' }}
                >
                  {s.title}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="transition-opacity hover:opacity-60"
                        style={{ color: 'rgb(var(--color-bg) / 0.8)' }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-12 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
            style={{
              borderColor: 'rgb(var(--color-bg) / 0.14)',
              color: 'rgb(var(--color-bg) / 0.5)',
            }}
          >
            <p>© {year} Kodomania — информационный проект. Не продаём товары и услуги.</p>
            <a
              href="mailto:hi@kodomania.ru"
              className="transition-opacity hover:opacity-70"
              style={{ color: 'rgb(var(--color-bg) / 0.75)' }}
            >
              hi@kodomania.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
