import type { FactItem } from '../../data/guides/types'

/**
 * Полоса опорных чисел категории: цена, охват, сроки.
 *
 * Разделители сделаны через `gap-px` на цветной подложке, а не бордерами у
 * ячеек: при перестроении 4 → 2 колонки бордеры оставляют висящие линии по
 * краю, а зазор перестраивается вместе с сеткой.
 */
export default function FactStrip({ title, facts }: { title?: string; facts: FactItem[] }) {
  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
          {title}
        </h2>
      )}
      <dl
        className="mt-5 grid grid-cols-2 gap-px border sm:grid-cols-4"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-rule))' }}
      >
        {facts.map((f) => (
          <div key={f.label} className="p-4" style={{ background: 'rgb(var(--color-surface))' }}>
            <dt
              className="bc-mono text-[10px] tracking-[0.14em] uppercase"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {f.label}
            </dt>
            <dd className="mt-1.5 text-lg font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
