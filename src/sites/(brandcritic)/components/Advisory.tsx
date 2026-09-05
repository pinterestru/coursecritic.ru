/**
 * Обязательная оговорка рядом с брендом — например «18+» для алкогольной
 * розницы. Отдельный компонент, а не строка в тексте, чтобы её нельзя было
 * случайно потерять при переписывании страницы: она приходит из
 * `provider.advisory` и рисуется одинаково везде.
 */
export default function Advisory({ text }: { text?: string }) {
  if (!text) return null
  return (
    <aside
      className="flex gap-3 border-l-2 px-4 py-3 text-xs leading-relaxed"
      style={{
        borderColor: 'rgb(var(--color-accent))',
        background: 'rgb(var(--color-accent) / 0.07)',
        color: 'rgb(var(--color-muted))',
      }}
    >
      <span
        className="bc-mono flex-shrink-0 font-bold"
        style={{ color: 'rgb(var(--color-accent))' }}
      >
        18+
      </span>
      <span>{text}</span>
    </aside>
  )
}
