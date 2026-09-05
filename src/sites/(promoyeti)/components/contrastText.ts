/**
 * Pick a readable foreground for an arbitrary background colour.
 *
 * Store badge tiles are filled with each merchant's own hex from
 * data/stores/*.ts, which we do not control. Hardcoding white text over all of
 * them puts the light ones below readable contrast. This returns whichever of
 * ink or white actually contrasts better with the given colour, per the WCAG
 * relative luminance formula.
 *
 * Note this guarantees the *better* option, not a passing one: a mid-tone hex
 * can fail 4.5:1 against both. Keep new store colours dark or light enough to
 * clear it.
 */

/** WCAG sRGB channel linearisation. */
function linearise(channel: number): number {
  const c = channel / 255
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

/** WCAG relative luminance of a #rrggbb colour, 0 (black) – 1 (white). */
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

/** WCAG contrast ratio between two luminances, 1:1 – 21:1. */
function ratio(a: number, b: number): number {
  const hi = Math.max(a, b)
  const lo = Math.min(a, b)
  return (hi + 0.05) / (lo + 0.05)
}

const INK = 'rgb(var(--color-fg))'
const WHITE = '#fff'
/** Luminance of --color-fg (#15161F) — the ink token, resolved once. */
const INK_LUMINANCE = luminance('#15161F')
const WHITE_LUMINANCE = 1

/**
 * Foreground colour for text sitting on `background`: the ink token or white,
 * whichever contrasts more. Falls back to white for unparseable input.
 */
export function contrastText(background: string): string {
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(background.trim())) return WHITE
  const bg = luminance(background)
  return ratio(bg, INK_LUMINANCE) >= ratio(bg, WHITE_LUMINANCE) ? INK : WHITE
}
