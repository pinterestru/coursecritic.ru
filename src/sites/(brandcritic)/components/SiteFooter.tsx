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

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <Brand />
        <Column title="Что разбираем">
          {verticals.map((v) => (
            <li key={v.id} className="text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
              {v.name}
            </li>
          ))}
        </Column>
        <Column title="Сайт">
          <FooterLink href="/">Главная</FooterLink>
          <FooterLink href="/brands">Разборы брендов</FooterLink>
          <FooterLink href="/about">О проекте и методике</FooterLink>
          <FooterLink href="/disclosure">Партнёрские ссылки</FooterLink>
        </Column>
        <Column title="Документы">
          <FooterLink href="/terms">Условия использования</FooterLink>
          <FooterLink href="/privacy">Персональные данные</FooterLink>
          <FooterLink href="/cookies">Файлы cookie</FooterLink>
          <FooterLink href="/contacts">Контакты</FooterLink>
        </Column>
      </div>

      <BottomBar />
    </footer>
  )
}

/**
 * Раскрытие о партнёрских ссылках в футере каждой страницы. Для проекта,
 * который живёт на комиссии, это обязательное чтение — и в ряде случаев
 * обязательное размещение.
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
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="bc-kicker">на что живёт сайт</span>
          <p
            className="mt-4 text-2xl leading-[1.2] font-bold sm:text-3xl"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Часть ссылок приносит нам комиссию. Ни одна не покупает место в рейтинге.
          </p>
          <p className="mt-3 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            Коммерческие ссылки помечены в коде страницы как sponsored. Бренды, которые не платят
            нам ничего, остаются в рейтинге и помечены прямо на карточке.
          </p>
        </div>

        <Link
          href="/disclosure"
          className="bc-mono inline-flex flex-shrink-0 items-center px-6 py-3.5 text-xs font-bold tracking-[0.1em] whitespace-nowrap uppercase transition-transform hover:-translate-y-[1px]"
          style={{
            background: 'rgb(var(--color-primary))',
            color: 'rgb(var(--color-primary-fg))',
          }}
        >
          Как мы зарабатываем
        </Link>
      </div>
    </div>
  )
}

function Brand() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          className="bc-mono flex h-11 w-11 items-center justify-center text-sm font-bold"
          style={{
            background: 'rgb(var(--color-primary))',
            color: 'rgb(var(--color-primary-fg))',
          }}
        >
          {SITE.badge}
        </span>
        <div>
          <p className="text-lg font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            {SITE.name}
          </p>
          <p
            className="bc-mono text-[10px] tracking-[0.14em] uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {SITE.market}
          </p>
        </div>
      </div>
      <p
        className="mt-6 max-w-sm text-[15px] leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        Мы читаем правила программ, условия брони и разделы об отмене — и печатаем то, что меняет
        решение о покупке.
      </p>
      <div className="mt-6 space-y-3">
        <MailRow label="Редакция" addr={inboxes.editorial} />
        <MailRow label="Сотрудничество" addr={inboxes.partnerships} />
        <MailRow label="Персональные данные" addr={inboxes.privacy} />
      </div>
    </div>
  )
}

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p
        className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
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
        className="transition-colors hover:text-[rgb(var(--color-primary))]"
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
        className="bc-mono text-[10px] tracking-[0.14em] uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {label}
      </span>
      <a
        href={`mailto:${addr}`}
        className="text-[15px] font-semibold transition-colors hover:text-[rgb(var(--color-primary))]"
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
    <div className="border-t" style={{ borderColor: 'rgb(var(--color-rule))' }}>
      <div
        className="bc-mono mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-[11px] lg:flex-row lg:items-center lg:justify-between"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        <p className="tracking-[0.1em] uppercase" style={{ color: 'rgb(var(--color-fg))' }}>
          {SITE.name} · независимые разборы
        </p>
        <p>
          © {SITE.since}–{year} {SITE.name}. Информационный проект: мы ничего не продаём.
        </p>
        <p>Цены и условия меняются — сверяйтесь с сайтом компании перед покупкой.</p>
      </div>
    </div>
  )
}
