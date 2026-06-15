import Link from 'next/link'
import type { Route } from 'next'

import Logo from '../components/Logo'

const posts: { href: Route; title: string; excerpt: string; date: string }[] = [
  {
    href: '/kursy-frontend-razrabotchika',
    title: 'Топ-7 курсов фронтенд-разработчика в 2026 году',
    excerpt: 'Сравнила семь школ — цены, сроки, стек и гарантии. Честный разбор без хайпа.',
    date: '15 июня 2026',
  },
  {
    href: '/kursy-analitika-dannyh',
    title: 'Топ-7 курсов аналитика данных в 2026 году',
    excerpt: 'Разложила по полочкам цены, сроки и гарантии семи популярных курсов.',
    date: '15 июня 2026',
  },
  {
    href: '/kursy-menedzhera-proektov',
    title: 'Топ-7 курсов менеджера проектов в 2026 году',
    excerpt: 'IT без кода: семь курсов от нормальных школ, честно про цены и сроки.',
    date: '15 июня 2026',
  },
  {
    href: '/kak-ya-ushla-v-it',
    title: 'Как я ушла из копирайтинга в бэкенд',
    excerpt: 'Честный отзыв спустя год: что было тяжело, что помогло, сколько заработала.',
    date: '14 февраля 2026',
  },
]

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-xl px-6 py-20">
      <header className="mb-20">
        <Logo />
      </header>

      <section>
        <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Привет, я Аня.
        </h1>

        <p className="mt-6 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
          Шесть лет работала копирайтером. В 2023-м ушла в бэкенд-разработку и теперь пишу на Python
          в небольшой продуктовой команде. Этот блог — мои заметки о том, как всё это выглядит
          изнутри: учёба, первые месяцы в новой работе, прокрастинация, собеседования.
        </p>
      </section>

      <section className="mt-16 border-t pt-10" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        <h2 className="font-serif text-xl font-semibold">Статьи</h2>
        <ul className="mt-6 space-y-6">
          {posts.map((post) => (
            <li key={post.href}>
              <Link href={post.href} className="group block no-underline">
                <div
                  className="text-xs tabular-nums"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {post.date}
                </div>
                <h3
                  className="mt-1 font-serif text-lg leading-snug font-semibold underline-offset-4 group-hover:underline"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {post.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t pt-10" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        <h2 className="font-serif text-xl font-semibold">О блоге</h2>
        <p className="mt-4 leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
          Я пишу редко и длинно. Без «успешного успеха» и без курсовой мотивации. Просто
          пересказываю то, что пригодилось бы мне самой пару лет назад, когда я сомневалась — идти в
          IT или нет.
        </p>
        <p className="mt-4 leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
          Новые посты выходят примерно раз в месяц. Иногда реже — когда на работе завал или когда
          честно нечего сказать.
        </p>
      </section>

      <section className="mt-16 border-t pt-10" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        <h2 className="font-serif text-xl font-semibold">Написать</h2>
        <p className="mt-4 leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
          Если хочется обсудить пост, задать вопрос про учёбу или просто поделиться опытом — пишите
          на почту:{' '}
          <a
            href="mailto:anya@coursecritic.ru"
            className="underline underline-offset-2"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            anya@coursecritic.ru
          </a>
          . Отвечаю не сразу, но всегда.
        </p>
      </section>

      <footer className="mt-24 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
        <p>© {new Date().getFullYear()} Анна Широкова</p>
      </footer>
    </main>
  )
}
