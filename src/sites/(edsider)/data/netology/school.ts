/**
 * Нетология as a provider for the promo-code landers.
 *
 * A second entry alongside the one in ../finance/providers.ts by design: that
 * one describes Нетология's finance programmes, this one its IT professions.
 * Per the note on `RankEntry` in ../guides/types, a school's format/highlights
 * always describe one specific course, so a different vertical restates them.
 *
 * Captured from netology.ru course pages on 28 August 2026.
 */
import type { GuideProvider } from '../guides/types'

export const netology: GuideProvider = {
  id: 'netology',
  name: 'Нетология',
  badge: 'НЕ',
  color: '#00C7B1',
  domain: 'netology.ru',
  siteLabel: 'netology.ru',
  score: 4.5,
  tagline: 'Диплом о профпереподготовке, вебинары с практиками и поле промокода на этапе оплаты',
  founded: 'на рынке с 2011 года',
  students: 'одна из крупнейших школ ДПО',
  priceNote: 'от 2 971 ₽ / мес в рассрочку на 36 месяцев',
  format:
    'Вебинары до двух раз в неделю после 19:00 мск, видеолекции и проекты с проверкой экспертами',
  highlights: [
    'Диплом о профессиональной переподготовке по государственной лицензии',
    'Рассрочка на 36 месяцев без переплат и скидка за оплату одним платежом',
    'Возврат полной суммы в течение первых трёх занятий',
    'Налоговый вычет 13% — школа помогает с документами',
  ],
  pros: [
    'Цену видно до заявки: тарифы, рассрочка и сумма одним платежом прямо на странице',
    'Промокод вводится самостоятельно на этапе оплаты, без разговора с менеджером',
    'Обучение можно поставить на паузу до 6 месяцев, записи хранятся 3 года',
  ],
  cons: [
    'Акции идут почти непрерывно, поэтому «полная» цена — величина условная',
    'Скидка за оплату одним платежом доступна только тем, у кого есть вся сумма сразу',
  ],
  trust: [
    'Государственная образовательная лицензия',
    'Диплом о профпереподготовке',
    'Налоговый вычет 13%',
    'Рассрочка на 36 месяцев без переплат',
  ],
  ratings: [{ source: 'оценка на сайте школы', value: 4.8 }],
  tracked: true,
  topCta: 'Смотреть цену на netology.ru →',
}

/** Registry shape the shared article components expect. */
export const netologySchools: Record<string, GuideProvider> = { netology }
