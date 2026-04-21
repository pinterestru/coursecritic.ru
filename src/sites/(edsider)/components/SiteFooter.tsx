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

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
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
        background:
          'linear-gradient(110deg, rgb(var(--color-primary) / 0.08) 0%, rgb(var(--color-primary) / 0.02) 60%, rgb(var(--color-surface)) 100%)',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p
            className="text-[11px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            Письмо месяца
          </p>
          <p
            className="mt-2 text-xl leading-snug font-bold"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Раз в месяц — подборка обновлённых обзоров и новых школ в каталоге.
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
            className="h-11 flex-1 rounded-lg border px-4 text-sm outline-none focus:ring-2"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
              color: 'rgb(var(--color-fg))',
            }}
          />
          <button
            type="button"
            className="h-11 rounded-lg px-5 text-sm font-semibold whitespace-nowrap transition-transform hover:-translate-y-[1px]"
            style={{
              background: 'rgb(var(--color-fg))',
              color: 'rgb(var(--color-surface))',
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
          className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-extrabold tracking-tight"
          style={{
            background: 'rgb(var(--color-primary))',
            color: 'rgb(var(--color-primary-fg))',
          }}
        >
          ED
        </span>
        <div>
          <p className="text-base font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            EDсайдер
          </p>
          <p className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
            витрина онлайн-курсов
          </p>
        </div>
      </div>
      <p
        className="mt-5 max-w-sm text-sm leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        Независимый каталог российских IT-школ. Сверяем учебные планы с вакансиями, читаем отзывы
        целиком и обновляем цены каждую неделю.
      </p>

      <dl
        className="mt-6 grid grid-cols-2 gap-3 rounded-xl border p-4"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-bg))',
        }}
      >
        <Stat value="24" label="школы" />
        <Stat value="420+" label="программы" />
        <Stat value="7.8к" label="отзывов" />
        <Stat value="2025" label="в работе" />
      </dl>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-lg font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
        {value}
      </span>
      <span
        className="text-[11px] tracking-wider uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {label}
      </span>
    </div>
  )
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        className="text-[11px] font-semibold tracking-[0.18em] uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
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
        className="text-[10px] tracking-wider uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {label}
      </span>
      <a
        href={`mailto:${addr}`}
        className="text-sm transition-colors hover:underline"
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
    <div className="border-t" style={{ borderColor: 'rgb(var(--color-rule))' }}>
      <div
        className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs lg:flex-row lg:items-center lg:justify-between"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        <p className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: 'rgb(var(--color-success))' }}
            aria-hidden
          />
          Каталог обновлён · {updated}
        </p>
        <p>
          © {today.getFullYear()} EDсайдер. Информационный проект — не является образовательной
          организацией.
        </p>
        <p className="flex items-center gap-1.5">
          <span aria-hidden>⌘</span>
          <span>Сделано в&nbsp;России</span>
        </p>
      </div>
    </div>
  )
}
