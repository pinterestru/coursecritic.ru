/**
 * Registry of the ranked guides in the security & data vertical.
 * Same contract as ../vpn/articles.ts.
 *
 * This vertical was built brand-pages-first, so it carried no guides at all
 * until the antivirus ranking landed. `articlesByVertical` returns an empty
 * array for a vertical with no entries and the guides index skips it, so an
 * empty registry here is safe — but a vertical with brand pages and no guide
 * means those brands appear in no ranking, which is a coverage gap worth
 * closing rather than a steady state.
 */
import type { ArticleMeta } from '../guides/types'

export const securityArticles: ArticleMeta[] = [
  {
    slug: 'best-antivirus',
    vertical: 'security',
    topic: 'overall',
    shortTopic: 'Best antivirus',
    title: 'Best antivirus of 2026: four suites, two engines, one owner',
    metaTitle: 'Best Antivirus 2026 — 4 suites ranked on renewal price',
    metaDescription:
      'Bitdefender, Norton, Avast and AVG compared on the AV-TEST and AV-Comparatives results and the renewal price — and why three of the four are one company.',
    intent: 'best antivirus',
    blurb:
      'Norton, Avast and AVG are one company running one engine. Bitdefender is the independent alternative — ranked on lab results and what year two costs.',
    updated: '2026-08-21',
    readingTime: '9 min',
  },
  {
    slug: 'best-data-recovery-software',
    vertical: 'security',
    topic: 'for deleted and formatted drives',
    shortTopic: 'Data recovery',
    title: 'Best data recovery software 2026: four tools, and the physics none of them beat',
    metaTitle: 'Best Data Recovery Software 2026 — 4 tools ranked',
    metaDescription:
      'Disk Drill, EaseUS, Stellar and Recuva compared on what the free tier really recovers, one-off versus annual licences, and why none can promise recovery.',
    intent: 'best data recovery software',
    blurb:
      'What determines recovery is what you do in the first ten minutes, not which tool you buy. Four ranked on free caps, licence terms and refunds.',
    updated: '2026-08-21',
    readingTime: '11 min',
  },
  {
    slug: 'best-data-removal-services',
    vertical: 'security',
    topic: 'overall',
    shortTopic: 'Data removal',
    title: 'Best data removal services of 2026: what actually came down',
    metaTitle: 'Best Data Removal Services 2026 — ranked on results',
    metaDescription:
      'Optery, Incogni, EasyOptOuts and DeleteMe ranked on the only controlled test of the category, what each plan really covers, and what a year actually costs.',
    intent: 'best data removal service',
    blurb:
      'Only one controlled test of this category exists, and filing the opt-outs yourself beat every paid service in it. Four services ranked on what came down.',
    updated: '2026-08-21',
    readingTime: '11 min',
  },
]
