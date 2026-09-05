/**
 * Умскул as a provider for the promo-code landers.
 *
 * A second entry alongside the one in ../ege/schools.ts, for the reason set out
 * on `RankEntry` in ../guides/types: a provider's format and highlights always
 * describe one specific offer, and these articles are about a different one.
 * The ranking guides describe the school as a place to prepare for an exam;
 * here it is described as a purchase — what it costs, how the discount attaches
 * itself, and what you can see before paying.
 *
 * Captured from umschool.net in August 2026.
 */
import type { GuideProvider } from '../guides/types'

export const umschool: GuideProvider = {
  id: 'umschool',
  name: 'Умскул',
  badge: 'УМ',
  color: '#FF8A3D',
  domain: 'umschool.net',
  siteLabel: 'umschool.net',
  score: 4.7,
  tagline:
    'Годовой курс на 45 315 ₽, скидка считается сама в корзине, а промокод открывает бесплатный мини-курс',
  founded: 'на рынке 9 лет',
  students: '600 000+ выпускников',
  priceNote: '45 315 ₽ за предмет, около 22 700 ₽ в комплекте из четырёх',
  format:
    'Годовой курс с еженедельными занятиями, куратором в чате и тренажёром, подсвечивающим слабые темы',
  highlights: [
    'Бесплатный мини-курс по промокоду — с теорией, практикой и пробником',
    'Скидка применяется автоматически в корзине: −50% за четыре предмета, −15% за два',
    'Рассрочка до 12 месяцев без переплат и Яндекс Сплит',
    'Возврат 13% через налоговый вычет — школа готовит документы бесплатно',
  ],
  pros: [
    'Промокод даёт полноценный курс, а не один вводный урок — школу видно до оплаты',
    'Комплект из четырёх предметов снижает цену предмета вдвое',
    'Куратор отвечает в чате за 5 минут, на уроке есть кнопка «Непонятно»',
  ],
  cons: [
    'Отдел продаж звонит настойчиво — на это жалуются даже в положительных отзывах',
    'Преподаватели неравномерны: разница между сильным и средним курсом заметная',
    'Скидки идут по таймеру почти непрерывно, поэтому «полная» цена условна',
  ],
  trust: [
    'Образовательная лицензия',
    'Налоговый вычет 13%',
    'Рассрочка без переплат и Яндекс Сплит',
    'Умкоины за домашние задания в счёт следующих курсов',
  ],
  ratings: [
    { source: 'оценка курсов на сайте школы', value: 4.9 },
    { source: 'Т-Банк', value: 4.9 },
  ],
  tracked: true,
  topCta: 'Смотреть цену на umschool.net →',
}

/** Registry shape the shared article components expect. */
export const umschoolSchools: Record<string, GuideProvider> = { umschool }
