import { contrastText } from './contrastText'

/**
 * The brand "logo" preview.
 *
 * We do not hold merchant logo files and are not going to hotlink them from the
 * merchants' own servers — that is a trademark conversation, a hotlinking one
 * and a privacy one, for artwork we would then have to keep in sync. So a brand
 * preview here is the brand's NAME set as a wordmark in the brand's own colour.
 *
 * It works better than it sounds. A large share of these brands really do use a
 * wordmark (FARFETCH, Steelcase, Timberland, DHgate), the tiles stay visually
 * consistent in a grid where real logos never do, and it makes no claim to be
 * the registered mark.
 *
 * `mono` renders the compact initials tile instead, for places too small for a
 * name — breadcrumb-scale rows and the search dropdown.
 */
export default function BrandMark({
  name,
  badge,
  color,
  size = 'md',
  mono = false,
  align = 'center',
  className,
}: {
  name: string
  badge: string
  color: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Initials tile instead of the wordmark. */
  mono?: boolean
  /**
   * 'center' is the tile treatment — a fixed-width box with the name centred,
   * which keeps a grid of them aligned. 'left' drops the fixed width so the
   * wordmark sits flush against whatever is beside it; use it inside a card
   * that has its own padding, where a centred fixed box reads as indented.
   */
  align?: 'center' | 'left'
  className?: string
}) {
  if (mono) {
    const monoDims = {
      xs: 'h-8 w-8 rounded-md text-[10px]',
      sm: 'h-9 w-9 rounded-md text-[11px]',
      md: 'h-11 w-11 rounded-lg text-[13px]',
      lg: 'h-14 w-14 rounded-xl text-base',
    }[size]
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center font-extrabold tracking-tight ${monoDims} ${className ?? ''}`}
        style={{ background: color, color: contrastText(color) }}
        aria-hidden
      >
        {badge}
      </span>
    )
  }

  // Long names have to set smaller or they wrap to three lines in a tile that
  // is the same size for every brand. The step is by character count rather
  // than by a `text-xs sm:text-sm` guess, because "H&M" and
  // "Joe's New Balance Outlet" need genuinely different treatment.
  const long = name.length
  const box = {
    xs: 'h-10 w-[68px] rounded-md px-1.5',
    sm: 'h-12 w-[92px] rounded-lg px-2',
    md: 'h-16 w-[124px] rounded-xl px-3',
    lg: 'h-20 w-[168px] rounded-2xl px-4',
  }[size]
  const scale =
    size === 'lg'
      ? long > 18
        ? 'text-base'
        : long > 11
          ? 'text-xl'
          : 'text-2xl'
      : size === 'md'
        ? long > 18
          ? 'text-[11px]'
          : long > 11
            ? 'text-[13px]'
            : 'text-base'
        : long > 14
          ? 'text-[9px]'
          : 'text-[11px]'

  if (align === 'left') {
    return (
      <span className={`inline-flex min-w-0 items-center ${className ?? ''}`} aria-hidden>
        <span className={`pp-wordmark ${scale} text-left`} style={{ color }}>
          {name}
        </span>
      </span>
    )
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border ${box} ${className ?? ''}`}
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
      aria-hidden
    >
      <span className={`pp-wordmark ${scale}`} style={{ color }}>
        {name}
      </span>
    </span>
  )
}
