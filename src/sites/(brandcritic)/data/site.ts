/**
 * Единственный источник правды об идентичности сайта.
 *
 * Всё, где упоминается домен или название — canonical-ссылки, почтовые ящики,
 * юридические страницы, футер, sitemap, JSON-LD publisher — берётся отсюда.
 * Кроме этого файла домен записан только в `nginx.conf.brandcritic` и
 * `.env.local.brandcritic` в корне репозитория.
 */
export const SITE = {
  name: 'BrandCritic',
  /** Кириллическое написание — используется в текстах и юридических страницах. */
  nameRu: 'Брендкритик',
  /** Короткий бейдж для плитки в шапке, футере и на карточках. */
  badge: 'BC',
  /** Голый домен — без протокола и www. */
  domain: 'brandcritic.ru',
  /** Редакционная строка, повторяется в шапке и в OG-описании. */
  tagline: 'Разбираем сервисы до того, как вы за них заплатите',
  /** Рынок, для которого пишет редакция. */
  market: 'Россия · на русском',
  /** Год старта проекта — используется в копирайте футера. */
  since: 2026,
} as const

/** `https://` + текущий домен. Для canonical-ссылок и JSON-LD. */
export const siteUrl = `https://${SITE.domain}`

/** Собрать ящик на домене сайта: mailbox('hello') → hello@<domain>. */
export function mailbox(box: string): string {
  return `${box}@${SITE.domain}`
}

/** Публичные ящики, на которые ссылаются футер, контакты и юридические страницы. */
export const inboxes = {
  editorial: mailbox('hello'),
  partnerships: mailbox('partners'),
  privacy: mailbox('privacy'),
} as const
