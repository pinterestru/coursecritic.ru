import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <Newsletter />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <Brand />
        <Column title="Навигация">
          <FooterLink href="/">Главная</FooterLink>
          <FooterLink href="/about">О проекте</FooterLink>
          <FooterLink href="/contacts">Контакты</FooterLink>
        </Column>
        <Column title="Правовое">
          <FooterLink href="/terms">Соглашение</FooterLink>
          <FooterLink href="/privacy">Конфиденциальность</FooterLink>
          <FooterLink href="/cookies">Cookie</FooterLink>
        </Column>
        <Column title="Куда писать">
          <MailRow label="Редакция" addr="hello@edsider.ru" />
          <MailRow label="Школам" addr="editors@edsider.ru" />
          <MailRow label="152-ФЗ" addr="privacy@edsider.ru" />
        </Column>
      </div>

      <BottomBar />
    </footer>
  )
}

function Newsletter() {
  return (
    <div
      className="border-b"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-bg))',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
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
              Письмо месяца
            </span>
          </div>
          <p
            className="font-editorial mt-3 text-3xl leading-[1.1] font-bold"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Раз в месяц — подборка новых обзоров.
          </p>
          <p className="mt-2 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            Без рекламы и партнёрских материалов. Только редакция.
          </p>
        </div>

        <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Электронная почта
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.ru"
            className="h-12 flex-1 rounded-sm border-[1.5px] px-4 text-sm outline-none focus:ring-0"
            style={{
              borderColor: 'rgb(var(--color-fg))',
              background: 'rgb(var(--color-surface))',
              color: 'rgb(var(--color-fg))',
            }}
          />
          <button
            type="button"
            className="h-12 rounded-sm px-6 text-sm font-bold tracking-wider whitespace-nowrap uppercase transition-transform hover:-translate-y-[1px]"
            style={{
              background: 'rgb(var(--color-primary))',
              color: 'rgb(var(--color-primary-fg))',
            }}
          >
            Подписаться
          </button>
        </div>
      </div>
    </div>
  )
}

function Brand() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-md text-sm font-extrabold tracking-tight"
          style={{
            background: 'rgb(var(--color-primary))',
            color: 'rgb(var(--color-primary-fg))',
          }}
        >
          ED
        </span>
        <div>
          <p className="font-editorial text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            EDсайдер
          </p>
          <p
            className="text-[11px] tracking-[0.12em] uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            витрина онлайн-курсов
          </p>
        </div>
      </div>
      <p
        className="font-editorial mt-6 max-w-sm text-[17px] leading-[1.5] italic"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        «Независимый каталог российских онлайн-школ. Читаем учебные планы целиком и не берём денег
        за место в подборке.»
      </p>
      <div
        className="mt-6 flex items-center gap-3 text-[11px] tracking-[0.12em] uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        <span
          className="inline-block h-[1px] w-8"
          style={{ background: 'rgb(var(--color-fg))' }}
          aria-hidden
        />
        <span>Редакция EDсайдер</span>
      </div>
    </div>
  )
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
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

function FooterLink({ href, children }: { href: string; children: string }) {
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
    <li className="flex flex-col">
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
    </li>
  )
}

function BottomBar() {
  const today = new Date()
  const updated = today.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
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
          <span className="tracking-[0.08em] uppercase">Каталог обновлён · {updated}</span>
        </p>
        <p className="opacity-70">
          © {today.getFullYear()} EDсайдер. Информационный проект — не является образовательной
          организацией.
        </p>
        <p className="flex items-center gap-1.5 tracking-[0.08em] uppercase opacity-70">
          Сделано в&nbsp;России
        </p>
      </div>
    </div>
  )
}
