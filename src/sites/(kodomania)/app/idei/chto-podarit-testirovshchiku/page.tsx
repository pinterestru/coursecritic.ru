import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { TestReportHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-testirovshchiku')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <TestReportHero
          guide={guide}
          heading="Что подарить тестировщику"
          accent="тестировщику"
          passed={47}
          total={48}
        />
      }
    />
  )
}
