import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { PipelineHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-devops-inzheneru')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <PipelineHero
          guide={guide}
          heading="Что подарить DevOps-инженеру"
          accent="DevOps-инженеру"
          stages={['build', 'test', 'deploy', 'monitor']}
        />
      }
    />
  )
}
