/**
 * Brand page data for PlayStation Store (route: /brands/playstation).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.playstation.com/en-us/legal/psn-terms-of-service/ — refund
 *     clause language, region-locked accounts
 *   - https://www.playstation.com/en-us/support/store/ps-store-refund-request/
 *     — the 14-day refund window and the download/stream rule
 *   - https://www.playstation.com/en-us/ps-plus/ — PS Plus tier names and prices
 *   - https://en.wikipedia.org/wiki/PlayStation_Store — launch date (Nov 2006),
 *     country/territory count, content types sold
 *   - https://platprices.com/blog/13-ps-store-sales-calendar — seasonal sale
 *     calendar and discount-depth pattern
 *   - https://www.smartcustomer.com/reviews/playstation.com (Sitejabber) —
 *     rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const playstation: BrandPage = {
  slug: 'playstation',
  providerId: 'playstation',
  metaTitle: 'PlayStation Store review 2026 — pricing, PS Plus, refunds',
  metaDescription:
    'An independent PlayStation Store review: how regional pricing and PS Plus tiers work, the 14-day refund rule, and who the storefront actually suits.',
  intro:
    "PlayStation Store is Sony's own digital storefront for PS4 and PS5, selling games, add-ons and PlayStation Plus memberships directly rather than through third-party sellers. Every purchase is a genuine first-party key, which removes the chargeback and revoked-key risk that follows marketplaces like G2A or Kinguin. What it costs in return is flexibility: regional pricing is fixed to your account's country for life, refunds require you to not have downloaded the content, and playing online at all needs a paid PS Plus tier.",
  about: [
    'PlayStation Store launched alongside the PlayStation 3 in November 2006 and now runs as a separate storefront for roughly seventy countries and territories, each with its own currency and, increasingly, its own set prices rather than a straight dollar conversion. Unlike Kinguin, G2A or Gamivo, nothing here is resold by an independent third party: Sony sells every game, add-on and subscription directly, so there is no seller rating to check and no possibility of a key that later gets revoked because a previous buyer used a stolen card.',
    'Buying a game outright needs no subscription, but playing most titles online does: PlayStation Plus is required for multiplayer and comes in three tiers, Essential, Extra and Premium, priced from around eleven dollars a month up to about twenty. Extra and Premium add a rotating library of PS4 and PS5 titles to download at no extra cost, which is where the value case for a subscription is actually made. Refunds are limited to fourteen days after purchase and only if the content has not been downloaded or streamed, so buying on a whim before checking reviews is the mistake to avoid.',
    'Sony runs several named sales a year, spring, summer, Days of Play, Black Friday and a holiday sale among them, plus shorter weekly deals in between, and discounts on popular titles regularly reach thirty to seventy percent off. What buyers give up for that legitimacy is the rock-bottom pricing of a resale marketplace: a first-party PlayStation Store key will rarely match Kinguin or Gamivo’s cheapest listing for the same game. The trade is straightforward: pay more, get a purchase that cannot be revoked, disputed by a publisher, or blocked by a stolen-card chargeback months later.',
  ],
  facts: [
    { label: 'Launched', value: '2006' },
    { label: 'Coverage', value: '69 countries/territories' },
    { label: 'Refund window', value: '14 days, pre-download' },
    { label: 'Account region', value: 'Locked for account life' },
  ],
  plans: {
    title: 'What it costs to buy and play',
    note: 'Game prices are set per country in local currency; PlayStation Plus is optional to buy a game but required to play most titles online.',
    items: [
      {
        name: 'Individual games & add-ons',
        price: 'Set per title, regional pricing',
        detail:
          'No subscription needed to buy and own a game outright. Prices vary by country and move with Sony’s periodic sales.',
      },
      {
        name: 'PlayStation Plus Essential',
        price: 'About $11/month or $80/year',
        detail:
          'The tier required for online multiplayer on most games, plus a handful of monthly free games and cloud saves.',
      },
      {
        name: 'PlayStation Plus Extra',
        price: 'About $17/month or $135/year',
        detail:
          'Adds a rotating catalogue of hundreds of PS4 and PS5 games to download and play at no extra cost per title.',
        pick: true,
      },
      {
        name: 'PlayStation Plus Premium',
        price: 'About $20/month or $160/year',
        detail:
          'Adds a classics catalogue of older PlayStation games, timed trials before you buy, and cloud streaming on supported titles.',
      },
    ],
  },
  pros: [
    {
      title: 'Every key is first-party and always works',
      body: 'There is no seller to vet and no risk of a key revoked months later because an earlier buyer used a stolen card. What you buy is what Sony sold you, full stop.',
    },
    {
      title: 'Deep sales run several times a year',
      body: 'Spring, summer, Days of Play, Black Friday and a holiday sale each bring genuine cuts on popular titles, often thirty to seventy percent off, on top of shorter weekly deals.',
    },
    {
      title: 'One library tied to your account, not a disc',
      body: 'Buy once and the game stays in your library across every PS4 and PS5 you sign into, with cloud saves carrying progress between consoles if you pay for PS Plus.',
    },
    {
      title: 'No chargeback or revoked-key drama',
      body: 'The disputes that dog marketplaces like G2A or Kinguin, stolen-card fraud, cancelled keys, seller disappearances, simply do not apply here. Sony is the only seller of record.',
    },
  ],
  cons: [
    {
      title: 'No refund once a download starts',
      body: 'The fourteen-day window closes the moment content is downloaded or streamed, faulty games excepted. Buy on a whim and there is no changing your mind after the fact.',
    },
    {
      title: 'Your account’s region is fixed for life',
      body: 'The country set when you create your account cannot be changed afterwards, and it decides which store, currency and prices you see. Moving country later does not help.',
    },
    {
      title: 'Multiplayer costs extra on top of the game',
      body: 'Owning a game does not include the right to play it online. Most titles need an active PlayStation Plus subscription as well, which is a recurring cost on top of the purchase.',
    },
  ],
  reputation: [
    {
      source: 'Sitejabber',
      value: 2.0,
      note: '176 reviews, skews toward refund and account-support complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.4,
      note: 'first-party reliability weighed against pricing rigidity and the PS Plus paywall',
    },
  ],
  bestFor: [
    'Anyone who wants a purchase that is guaranteed genuine, no exceptions',
    'Players who use PS Plus Extra or Premium for its game catalogue, not just multiplayer',
    'Buyers who shop the seasonal sales rather than paying full price at launch',
    'People who want one account and library across every PlayStation they own',
  ],
  notFor: [
    'Bargain hunters who would rather take marketplace risk for a lower price',
    'Anyone who buys on impulse and might want to change their mind after downloading',
    'Players who only want single-player games and see PS Plus as dead weight',
  ],
  faq: [
    {
      q: 'Can I get a refund after downloading a game?',
      a: 'Only if the game is faulty, crashes, will not launch or has a major defect. A simple change of mind does not qualify once the download or stream has started, so it is worth reading reviews before buying rather than after.',
    },
    {
      q: 'Do I need PlayStation Plus to buy games?',
      a: 'No. Buying and owning individual games and add-ons needs no subscription at all. PlayStation Plus only becomes necessary if you want to play most games online against other people, or if you want access to the Extra and Premium game catalogues.',
    },
    {
      q: 'Why do prices differ between PS Plus tiers?',
      a: 'Essential is the entry tier and covers online play and monthly free games. Extra adds a large downloadable back-catalogue at no per-title cost, and Premium adds classic-era games, timed trials and cloud streaming, which is why it costs roughly double Essential.',
    },
    {
      q: 'Can I change the region on my PlayStation account?',
      a: 'No, and this catches people out. The country selected when the account is created fixes the store, currency and available content for the life of that account, so check you are registering in the right country before you sign up.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'store.playstation.com',
}
