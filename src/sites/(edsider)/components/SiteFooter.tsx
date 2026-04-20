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
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="text-sm font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            EdSider
          </p>
          <p
            className="mt-2 max-w-xs text-xs leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Независимый каталог онлайн-школ и курсов. Помогаем выбрать обучение на основе программ,
            отзывов и реальных цен.
          </p>
        </div>
        <div>
          <p
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Навигация
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <FooterLink href="/">Главная</FooterLink>
            <FooterLink href="/yandex-practicum">Яндекс Практикум</FooterLink>
            <FooterLink href="/about">О проекте</FooterLink>
            <FooterLink href="/contacts">Контакты</FooterLink>
          </ul>
        </div>
        <div>
          <p
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Правовая информация
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <FooterLink href="/terms">Пользовательское соглашение</FooterLink>
            <FooterLink href="/privacy">Политика конфиденциальности</FooterLink>
            <FooterLink href="/cookies">Использование cookie</FooterLink>
          </ul>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        <div
          className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs sm:flex-row sm:justify-between"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          <p>© {new Date().getFullYear()} EdSider. Все права защищены.</p>
          <p>
            Проект EdSider — информационный ресурс. Не является образовательной организацией и не
            оказывает образовательных услуг.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <li>
      <Link href={href} className="hover:underline" style={{ color: 'rgb(var(--color-fg))' }}>
        {children}
      </Link>
    </li>
  )
}
