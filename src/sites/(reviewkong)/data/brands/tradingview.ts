/**
 * Brand page data for TradingView (route: /brands/tradingview).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.tradingview.com/pricing/ — plan names (Basic, Essential,
 *     Plus, Premium, Ultimate) and the free Basic plan's limits (1 chart per
 *     tab, 2 indicators, 3 price alerts, 5K historical bars, 2 simultaneous
 *     chart connections, 1 watchlist of 30 symbols, 1 portfolio), fetched
 *     directly
 *   - https://apps.apple.com/us/app/tradingview-track-all-markets/id1205990992
 *     — App Store rating (4.8) and review count (405K), fetched directly
 *   - https://en.wikipedia.org/wiki/TradingView — founded 2011, described as
 *     a social/financial-analysis platform rather than a broker, HQ and
 *     funding history
 *   - Paid-plan USD pricing (Essential/Plus/Premium monthly figures) is
 *     triangulated from third-party pricing trackers rather than a USD-priced
 *     fetch of tradingview.com itself, which returned regional (CZK) pricing
 *     when fetched — treat the paid-plan numbers below as approximate and
 *     re-check the live USD price before using them in a campaign
 *
 * ⚠️ Prices and plan limits are working values captured on 2026-08-24 and
 * MUST be re-verified against tradingview.com before launch — pricing is
 * region-dependent and has moved at least once in 2026. A Trustpilot score
 * could not be verified (the page blocked automated access) and has
 * deliberately been left out rather than guessed. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const tradingview: BrandPage = {
  slug: 'tradingview',
  providerId: 'tradingview',
  schemaType: 'SoftwareApplication',
  metaTitle: 'TradingView review 2026 — what the free plan limits',
  metaDescription:
    'An independent TradingView review: exactly what the free Basic plan restricts, how the paid tiers scale, and why it is charting software, not a broker.',
  intro:
    'TradingView is charting and market-analysis software, not a place to actually hold a position — that distinction matters more than the marketing implies. The free Basic plan is genuinely usable for casual chart-watching, but it caps you at one chart and two indicators at a time, and the moment you want more than a handful of alerts you are looking at a paid tier.',
  about: [
    "TradingView launched in 2011 as a browser-based charting platform built around a social layer: published ideas, public scripts written in its own Pine Script language, and a feed of other traders' analysis sitting alongside the charts themselves. It is not a broker — it does not hold your money or execute trades on its own account — though it connects to a list of partner brokers for order execution. The distinction is easy to miss because the interface makes charting and trading feel like one product.",
    'The free Basic plan is not a crippled demo; it is a real, permanently free tier. But it is deliberately narrow: one chart per browser tab, two indicators on that chart, three price alerts and no separate watchlist alerts, five thousand bars of historical data, and only two simultaneous data connections. Anyone tracking more than a couple of instruments at once, or wanting more than a couple of indicators stacked on one chart, hits the ceiling quickly.',
    'The paid tiers — Essential, Plus, Premium and Ultimate — scale the same limits up rather than switching to a different product: more charts per tab, more indicators per chart, more alerts, deeper historical data, and features like intraday second-based intervals and multiple-chart layouts that Basic does not offer at all. What you are paying for at each tier is headroom on the same tool, not a fundamentally different one, which is worth knowing before assuming a jump in price buys a jump in capability.',
  ],
  facts: [
    { label: 'Founded', value: '2011' },
    { label: 'What it is', value: 'Charting tool, not a broker' },
    { label: 'Free tier', value: '1 chart, 2 indicators' },
    { label: 'Paid tiers', value: 'Essential to Ultimate' },
  ],
  plans: {
    title: 'What the free plan limits, and what paying removes',
    note: 'Paying does not change what TradingView is — you are still looking at charts, not routing trades through TradingView itself. Each tier up raises the same handful of ceilings: charts per tab, indicators per chart, and how many alerts you can run at once.',
    items: [
      {
        name: 'Basic (free)',
        price: '$0',
        detail:
          'One chart per tab, two indicators, three price alerts and no watchlist alerts, 5,000 bars of history, two simultaneous connections. Enough to watch a market casually; too tight for running several indicators on several instruments at once.',
        pick: true,
      },
      {
        name: 'Essential',
        price: 'Around $13–15/month depending on billing term',
        detail:
          "More charts per tab and more indicators per chart than Basic, a larger alert allowance, and deeper historical data. The entry point for anyone who has hit the free plan's indicator or alert ceiling.",
      },
      {
        name: 'Plus',
        price: 'Around $30–35/month depending on billing term',
        detail:
          'Further headroom again on charts, indicators and alerts, plus features Basic and Essential do not offer, such as finer intraday intervals.',
      },
      {
        name: 'Premium / Ultimate',
        price: 'Around $60–240/month depending on tier and billing term',
        detail:
          'The largest allowances across the board — charts per tab, indicators, historical bars and simultaneous alerts — aimed at active or professional traders running several instruments at once.',
      },
    ],
  },
  pros: [
    {
      title: 'The free plan is a real, permanent tier',
      body: 'Basic is not a time-limited trial — it stays free indefinitely, with genuine limits rather than a countdown. For someone who checks a couple of charts occasionally, it may never be necessary to pay.',
    },
    {
      title: 'Broker-agnostic by design',
      body: 'Because TradingView is not itself a broker, the same charting and analysis layer works whichever broker you actually trade through, for the partner brokers it connects to. You are not locked into one execution venue to use the charts.',
    },
    {
      title: 'A genuinely large public library of scripts and ideas',
      body: 'Pine Script indicators and strategies published by other users, many of them free, extend the platform well past what TradingView ships natively. Reading published analysis is also a fast way to see how other traders read the same chart.',
    },
    {
      title: 'App Store reception is strongly positive',
      body: 'The mobile app carries a high rating across a very large number of ratings, which for a charting tool used daily is a meaningful signal of day-to-day reliability.',
    },
  ],
  cons: [
    {
      title: "The free plan's indicator and chart caps bite fast",
      body: 'Two indicators on one chart, one chart per tab — anyone running a standard multi-indicator setup across a few instruments will hit the ceiling within the first session, not after months of casual use.',
    },
    {
      title: 'It is easy to mistake it for a broker',
      body: 'TradingView shows live prices, lets you place orders through connected brokers, and centres the whole experience on charts — but it does not execute or hold trades on its own account. Understand which partner broker is actually behind any order before you place one.',
    },
    {
      title: 'Pricing is regional and has moved during 2026',
      body: 'What a given tier costs depends on billing region and whether you pay monthly or annually, and TradingView has adjusted paid-tier pricing more than once this year. Check the live price for your billing country before comparing tiers.',
    },
  ],
  reputation: [
    {
      source: 'App Store (iOS)',
      value: 4.8,
      note: '405K ratings',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.5,
      note: 'our composite: strong charting depth and a genuine free tier, offset by tight free-plan limits',
    },
  ],
  bestFor: [
    "Traders who want serious charting tools without committing to one broker's built-in platform",
    'Anyone who reads published analysis and scripts before building their own view',
    'Casual chart-watchers who genuinely only need one chart and a couple of indicators',
    'Active traders willing to pay for more simultaneous charts, indicators and alerts',
  ],
  notFor: [
    'Anyone expecting TradingView itself to hold funds or execute trades as a broker',
    'Multi-indicator, multi-instrument workflows on the free Basic plan — the caps make that impractical',
    'Buyers who assume the advertised price is the same in every billing region',
  ],
  faq: [
    {
      q: 'Is TradingView a broker?',
      a: 'No. It is charting and analysis software with a social layer for published ideas and scripts. It connects to a list of partner brokers so you can place trades from inside the interface, but TradingView itself does not hold your funds or act as the counterparty.',
    },
    {
      q: 'What exactly does the free Basic plan not let me do?',
      a: 'It caps you at one chart per tab with two indicators on it, three price alerts with no separate watchlist alerts, five thousand bars of historical data, and two simultaneous data connections. Paid tiers raise every one of those numbers rather than adding a different product.',
    },
    {
      q: 'Does the free plan expire?',
      a: 'No. Basic is a permanent free tier, not a time-limited trial, and it stays free indefinitely rather than expiring after a set number of days. Paid plans typically come with their own trial period so you can test the higher limits before committing to a subscription.',
    },
    {
      q: 'Why does the price shown to me differ from a price I saw quoted elsewhere?',
      a: 'TradingView prices paid tiers by billing region and by whether you pay monthly or annually, and it has adjusted those prices more than once during 2026. Treat any specific figure as a starting point and check the price shown at checkout for your own billing country.',
    },
    {
      q: 'Do I need a paid plan to use Pine Script indicators other people have published?',
      a: "No — many published scripts are free to add to a chart on the Basic plan, subject to the plan's two-indicator limit. What paid tiers add is headroom to run more of them on more charts at once, not access to publishing itself.",
    },
  ],
  updated: '2026-08-24',
  deepLink: 'tradingview.com',
}
