/**
 * Подобрать читаемый цвет текста для произвольного фона.
 *
 * Плитки брендов заливаются их собственным hex из data/*\/providers.ts, а его
 * мы не контролируем: у «Красное & Белое» это яркий красный, у SimpleWine —
 * почти чёрный синий. Жёстко белый текст на всех подряд опускает часть плиток
 * ниже читаемости. Функция возвращает то из двух — графит или белый, — что
 * реально контрастнее, по формуле относительной яркости WCAG.
 *
 * Гарантируется ЛУЧШИЙ вариант, а не обязательно проходной: средний по
 * светлоте hex может не добрать 4.5:1 ни с тем, ни с другим. Новые цвета
 * брендов держите достаточно тёмными или достаточно светлыми.
 *
 * Графит взят литералом, а не из --color-fg: на тёмной теме токен текста почти
 * белый, и подстановка его сюда сломала бы весь расчёт.
 */

/** Линеаризация канала sRGB по WCAG. */
function linearise(channel: number): number {
  const c = channel / 255
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

/** Относительная яркость цвета #rrggbb по WCAG, 0 (чёрный) – 1 (белый). */
function luminance(hex: string): number {
  const h = hex.replace('#', '')
  const full =
    h.length === 3
      ? h
          .split('')
          .map((c) => c + c)
          .join('')
      : h
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  return 0.2126 * linearise(r) + 0.7152 * linearise(g) + 0.0722 * linearise(b)
}

/** Коэффициент контраста WCAG между двумя яркостями, 1:1 – 21:1. */
function ratio(a: number, b: number): number {
  const hi = Math.max(a, b)
  const lo = Math.min(a, b)
  return (hi + 0.05) / (lo + 0.05)
}

/** Графит #0C0E12 — тот же, что --color-bg. */
const INK = '#0C0E12'
const WHITE = '#FFFFFF'
const INK_LUMINANCE = luminance(INK)
const WHITE_LUMINANCE = 1

/**
 * Цвет текста поверх `background`: графит или белый — что контрастнее.
 * На неразбираемом значении возвращает белый.
 */
export function contrastText(background: string): string {
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(background.trim())) return WHITE
  const bg = luminance(background)
  return ratio(bg, INK_LUMINANCE) >= ratio(bg, WHITE_LUMINANCE) ? INK : WHITE
}
