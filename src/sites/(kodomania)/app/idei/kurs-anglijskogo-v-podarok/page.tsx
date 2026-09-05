import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { ChatHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kurs-anglijskogo-v-podarok')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <ChatHero
          guide={guide}
          heading="Курс английского в подарок"
          accent="английского"
          messages={[
            { text: 'How was your English course?' },
            { mine: true, text: 'Now I lead calls with the US team 🚀' },
            { text: "That's a great gift!" },
          ]}
        />
      }
    />
  )
}
