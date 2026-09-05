/**
 * Registry of the ranked guides in the travel vertical.
 * Same contract as ../vpn/articles.ts.
 */
import type { ArticleMeta } from '../guides/types'

export const travelArticles: ArticleMeta[] = [
  {
    slug: 'best-esim-international-travel',
    vertical: 'travel',
    topic: 'for international travel',
    shortTopic: 'Travel eSIMs',
    title: 'Best eSIMs for international travel in 2026: four apps compared',
    metaTitle: 'Best Travel eSIMs 2026 — 4 apps compared on price and coverage',
    metaDescription:
      'Airalo, Holafly, Saily and Nomad compared on coverage, real per-gigabyte cost and the catch nobody mentions: a travel eSIM gives you no phone number.',
    intent: 'best esim for international travel',
    blurb:
      'Data plans that work the moment you land — and the per-gigabyte maths that decides which one to buy.',
    updated: '2026-08-10',
    readingTime: '8 min',
  },
  {
    slug: 'best-travel-insurance-long-trips',
    vertical: 'travel',
    topic: 'for long trips',
    shortTopic: 'Long-trip insurance',
    title: 'Best travel insurance for long trips in 2026: four policies compared',
    metaTitle: 'Best Travel Insurance for Long Trips 2026 — 4 policies compared',
    metaDescription:
      'Subscription cover versus fixed-term policies for trips over a month, compared on what each one excludes: SafetyWing, Genki, World Nomads, Insured Nomads.',
    intent: 'best travel insurance for long trips',
    blurb:
      'What each policy excludes matters more than what it advertises. Four long-stay options, exclusions first.',
    updated: '2026-08-11',
    readingTime: '9 min',
  },
  {
    slug: 'best-airlines-europe-asia',
    vertical: 'travel',
    topic: 'for one-stop Europe–Asia routes',
    shortTopic: 'Europe–Asia airlines',
    title: 'Best airlines for one-stop Europe–Asia flights in 2026: six carriers compared',
    metaTitle: 'Best Airlines Europe–Asia 2026 — 6 carriers compared',
    metaDescription:
      'Qatar Airways, Emirates, Etihad, Turkish, Air India and Malaysia Airlines compared on what each cheapest fare leaves out — bag, seat, changes — and which hub is easiest to connect in.',
    intent: 'best airline for europe to asia flights',
    blurb:
      'The headline fares are not like-for-like. What each carrier’s cheapest ticket excludes, and what it costs to put back.',
    updated: '2026-08-24',
    readingTime: '11 min',
  },
]
