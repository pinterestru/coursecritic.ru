/**
 * Форма страницы бренда (маршрут: /brands/<slug>).
 *
 * Страницы брендов — это данные, а не отдельная вёрстка: все они отвечают на
 * одни и те же вопросы в одном порядке, поэтому их рисует один шаблон, а новый
 * бренд — это один файл плюс строка в ./index.ts. Рейтинговые разборы под
 * /articles устроены наоборот: они написаны руками, потому что аргумент в
 * каждом свой.
 *
 * Чего здесь намеренно нет — отдельных отзывов пользователей. Мы не публикуем
 * выдуманные отзывы. Вместо этого `reputation` несёт сводные оценки с названным
 * публичным источником у каждой строки.
 */
import type { FaqItem } from '../guides/types'

export interface BrandFact {
  label: string
  value: string
}

export interface BrandPoint {
  title: string
  body: string
}

export interface BrandPlan {
  name: string
  /** Заявленная цена вместе с условием, при котором она действует. */
  price: string
  /** Что происходит с ценой дальше, если это не то же самое. */
  renews?: string
  detail: string
  /** Вариант, который выбрали бы мы. */
  pick?: boolean
}

export interface BrandReputation {
  source: string
  value: number
  /** Объём выборки или контекст, например «сводно по магазинам». */
  note: string
}

export interface BrandPage {
  slug: string
  /** Ключ в data/providers.ts — оттуда имя, плитка, балл и ссылки. */
  providerId: string
  metaTitle: string
  metaDescription: string
  /** Лид под H1. */
  intro: string
  /** Текст раздела «О сервисе», по одной строке на абзац. */
  about: string[]
  facts: BrandFact[]
  plans: {
    title: string
    /** Оговорка под таблицей — обычно о том, где цена меняется. */
    note: string
    items: BrandPlan[]
  }
  pros: BrandPoint[]
  cons: BrandPoint[]
  reputation: BrandReputation[]
  /** Кому подходит и кому нет. */
  bestFor: string[]
  notFor: string[]
  faq: FaqItem[]
  /** ISO-дата последней редакционной проверки страницы. */
  updated: string
  /** Ссылка для кнопок страницы (по умолчанию — домен сервиса). */
  deepLink?: string
}
