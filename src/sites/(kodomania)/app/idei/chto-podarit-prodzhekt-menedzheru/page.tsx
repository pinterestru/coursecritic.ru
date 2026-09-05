import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { KanbanHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-prodzhekt-menedzheru')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <KanbanHero
          guide={guide}
          heading="Что подарить проджект-менеджеру"
          accent="проджект-менеджеру"
          columns={[
            { title: 'To do', cards: ['Планирование', 'Риски'] },
            { title: 'Doing', cards: ['Спринт', 'Митинг'] },
            { title: 'Done', cards: ['Сдача'] },
          ]}
        />
      }
    />
  )
}
