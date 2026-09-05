import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { KanbanHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-produkt-menedzheru')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <KanbanHero
          guide={guide}
          heading="Что подарить продакт-менеджеру"
          accent="продакт-менеджеру"
          columns={[
            { title: 'Backlog', cards: ['Гипотеза', 'Метрики'] },
            { title: 'В работе', cards: ['MVP', 'A/B-тест'] },
            { title: 'Готово', cards: ['Релиз'] },
          ]}
        />
      }
    />
  )
}
