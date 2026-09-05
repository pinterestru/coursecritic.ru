/**
 * Типы, не зависящие от вертикали: рейтинговые статьи и страницы брендов.
 *
 * Разбор всегда одной формы: упорядоченный список сервисов, подпись автора,
 * полоса фактов, FAQ и размеченные CTA. Между вертикалями меняется только
 * реестр сервисов (data/retail/providers.ts, data/cruise/providers.ts, …), а
 * data/providers.ts сливает их в один справочник id → Provider — поэтому общим
 * компонентам не нужно знать, какую вертикаль они сейчас рисуют.
 */
import type { VerticalId } from '../verticals'

export interface ProviderRating {
  /** Откуда взята оценка — всегда публичный сторонний агрегатор. */
  source: string
  value: number
}

/** Одна из граней нашей оценки. Сумма даёт итоговый балл сервиса. */
export interface ScoreLine {
  label: string
  /** 0–5, один знак после запятой. */
  value: number
}

/** Сервис или магазин: появляется в разборах и, опционально, на своей странице. */
export interface Provider {
  id: string
  name: string
  /** Плитка на 2–3 символа. */
  badge: string
  /** Фон плитки, hex. */
  color: string
  vertical: VerticalId
  /** Голый домен (+ опционально путь) для исходящей ссылки. */
  domain: string
  /** Человекочитаемая подпись сайта под кнопками. */
  siteLabel: string
  /** Наш редакционный балл, 0–5 (один знак). */
  score: number
  /** Разбивка итогового балла по критериям — рисуется полосами. */
  scorecard: ScoreLine[]
  /** Позиционирование одной строкой. */
  tagline: string
  /** Опорный факт: с какого года работает. */
  founded: string
  /** Масштаб: магазины, города, флот — то, чем меряется вертикаль. */
  reach: string
  /** Ценовая заметка по умолчанию (в статье можно переопределить). */
  priceNote: string
  /** Короткое описание формата/тарифа. */
  format: string
  /** Ключевые пункты. */
  highlights: string[]
  pros: string[]
  cons: string[]
  /** Сигналы доверия: возвраты, лицензии, юрлицо, гарантии. */
  trust: string[]
  ratings: ProviderRating[]
  /**
   * Обязательная оговорка, которую нельзя опустить ни на одной странице с этим
   * сервисом (например, «18+» для алкоголя). Рисуется отдельной плашкой.
   */
  advisory?: string
  /**
   * false — сервис не монетизируется: ссылки ведут прямо на сайт с
   * rel="nofollow" вместо размеченного редиректа /click. По умолчанию true.
   */
  tracked?: boolean
  /** Текст кнопки для первого места, например «Смотреть каталог →». */
  topCta?: string
  /** Слаг страницы бренда под /brands, если она есть. */
  brandSlug?: string
}

/** Позиция одного сервиса внутри конкретного разбора. */
export interface RankEntry {
  providerId: string
  /** Полная прямая ссылка ИМЕННО для этого разбора (перебивает дефолт). */
  deepLink?: string
  /** Цена для этого разбора (перебивает дефолт сервиса). */
  price?: string
  /** Вердикт редакции в контексте этого разбора. */
  verdict: string
  /** Одна строка: кому это подходит. */
  bestFor: string
  /**
   * Балл по оси ЭТОГО разбора — когда рейтинг строится не по общему качеству
   * сервиса, а по одному признаку («честность ценовой механики», «удобство
   * выбора каюты»). Если задан, компоненты показывают его вместо общего балла
   * и НЕ рисуют разбивку `scorecard`: она объясняет общий балл и к этой оси
   * отношения не имеет. Без него порядок в разборе обязан совпадать с порядком
   * по `provider.score`, иначе на экране рядом с местом 2 стоит цифра меньше,
   * чем рядом с местом 3.
   */
  score?: number
  /** Плюсы и минусы для этого разбора (иначе берутся дефолтные). */
  pros?: string[]
  cons?: string[]
  /**
   * Переопределение фактов уровня продукта: у бренда дефолтные `format` и
   * `highlights` описывают один конкретный продукт, поэтому разбор про другой
   * его продукт обязан их переписать.
   */
  format?: string
  highlights?: string[]
  /** Позиционирование именно этого продукта (перебивает tagline сервиса). */
  tagline?: string
  /** Отдельно вынесенный факт: условие, ограничение, деталь тарифа. */
  spotlight?: { label: string; body: string }
}

/** Ячейка полосы фактов (диапазон цен, охват, срок возврата…). */
export interface FactItem {
  label: string
  value: string
}

export interface FaqItem {
  q: string
  a: string
}

/** Лёгкие метаданные для индекса и перелинковки между разборами. */
export interface ArticleMeta {
  slug: string
  vertical: VerticalId
  /** Короткая метка для карточек, например «Вино онлайн». */
  shortTopic: string
  /** H1 и заголовок карточки. */
  title: string
  /** Содержимое тега <title>. */
  metaTitle: string
  metaDescription: string
  /** Основной поисковый интент. */
  intent: string
  /** Тизер на карточке индекса. */
  blurb: string
  /** ISO-дата последней редакционной проверки. */
  updated: string
  readingTime: string
}

/** Постоянный автор вертикали. */
export interface Author {
  name: string
  role: string
  bio: string
  initials: string
  credentials: string[]
}

/**
 * Собрать размеченную партнёрскую ссылку из прямой:
 *   affiliateHref('winelab.ru/catalog') → '/click/winelab.ru/catalog'
 * Принимает полный URL или домен с путём; отрезает протокол и www. Роут /click
 * (src/sites/_shared/app/click) фиксирует клик и передаёт посетителя дальше.
 */
export function affiliateHref(domainOrUrl: string): string {
  const clean = domainOrUrl.replace(/^https?:\/\//, '').replace(/^www\./, '')
  return `/click/${clean}`
}

/** Обычная внешняя ссылка для брендов, которых мы не монетизируем. */
export function directHref(domainOrUrl: string): string {
  if (/^https?:\/\//.test(domainOrUrl)) return domainOrUrl
  return `https://${domainOrUrl}`
}
