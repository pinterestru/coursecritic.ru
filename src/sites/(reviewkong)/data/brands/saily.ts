/**
 * Brand page data for Saily (route: /brands/saily).
 *
 * SOURCES — every figure below is taken from Saily's own published pages and
 * from Nord Security's press area, not from vendor marketing summaries:
 *   - https://saily.com/all-destinations/ — "over 200 destinations"
 *   - https://saily.com/esim-europe/ — the Europe ladder (€4.49 / 1 GB / 7 days
 *     up to €85.49 / 50 GB / 90 days), the 35-country list, the unlimited plan
 *     from €44.49 and its stated terms: 3 GB a day without a speed limit, then
 *     unlimited data at up to 1 Mbps; also the 30-day activation window and the
 *     Trustpilot and app-store badges Saily renders
 *   - https://saily.com/esim-united-states/ — the country ladder (€3.49 / 1 GB
 *     / 7 days up to €32.99 / 20 GB / 30 days)
 *   - https://saily.com/esim-global/ — the Global plan: 121 destinations,
 *     from €7.99, up to 50 GB / 365 days at €115.99
 *   - https://saily.com/esim-phone-number/ — the optional US (+1) number at
 *     €0.99/mo plus a call-and-text plan, and the in-app identity verification
 *   - https://nordsecurity.com/press-area/browse-the-world-with-saily-an-esim-solution-designed-especially-for-travelers
 *     and https://nordsecurity.com/press-area/travel-esim-app-saily-debuts-ultra-a-new-premium-plan-for-unparalleled-journeys
 *     — Nord Security ownership, the March 2024 launch, and Saily Ultra
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * saily.com before launch and before each campaign. Three specific warnings:
 *   1. Saily prices in euros on its own pages; the registry `priceNote` in
 *      ../travel/providers.ts quotes dollars. The cheapest 1 GB seen was €3.49
 *      (United States), not the €4.49 the Europe page leads with — the "from"
 *      figure depends entirely on which destination page you land on.
 *   2. The registry says "150+ destinations". Saily now publishes "over 200".
 *      Registry file is owned elsewhere — flag it, do not edit it here.
 *   3. Saily Ultra's price is NOT published in the Nord Security announcement.
 *      Third-party reviews quote a monthly figure; none of them is a primary
 *      source, so no price for Ultra appears on this page. Do not add one
 *      without reading it off Saily's own checkout.
 * Trustpilot itself could not be read directly (bot protection), so the score
 * below is the one Saily's own widget renders. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const saily: BrandPage = {
  slug: 'saily',
  providerId: 'saily',
  schemaType: 'Product',
  metaTitle: 'Saily review 2026 — the NordVPN team’s travel eSIM',
  metaDescription:
    'An independent Saily review: what Nord Security ownership buys you, the optional US phone number, and why per-gigabyte price is not why you pick it.',
  intro:
    'Saily is the travel eSIM built by Nord Security, the company behind NordVPN — and the family resemblance is the point. It is not the cheapest data in the category and does not pretend to be. What it sells is a tidy app, plainly stated terms, privacy tooling folded into the plan, and an optional phone number that solves the problem every other travel eSIM leaves you with.',
  about: [
    'Saily launched in March 2024 under Nord Security, which also owns NordVPN, NordPass, NordLayer and Surfshark. That matters twice over. It explains why a travel data plan ships with an ad blocker, malicious-site filtering and a virtual-location switch, which no other eSIM here bundles. It also means anyone comparing Saily against NordVPN as two separate purchases is comparing two products from the same company.',
    'The catalogue now runs to more than 200 destinations, sold three ways: single-country plans, regional bundles — the Europe plan covers 35 countries — and a Global plan spanning 121 destinations. The gap between "200+ destinations" and a 121-destination global plan is worth registering: broad coverage exists, but the single eSIM that follows you everywhere covers rather less of it than the headline suggests.',
    'Pricing is mid-to-upper for the category. A 1 GB, seven-day plan for the United States is €3.49; the same allowance on the Europe regional plan is €4.49; 10 GB across Europe for thirty days is €31.99. Saily also sells unlimited plans, and unusually it says exactly what unlimited means: 3 GB a day at full speed, then unlimited data at up to 1 Mbps. Publishing the throttle rather than burying it is the single most creditable thing on the pricing page.',
  ],
  facts: [
    { label: 'Launched', value: 'March 2024' },
    { label: 'Owner', value: 'Nord Security' },
    { label: 'Coverage', value: '200+ destinations' },
    { label: 'Phone number', value: 'Optional add-on' },
  ],
  plans: {
    title: 'How the plans are priced',
    note: 'Prices are the euro figures published on saily.com and differ by destination, so the "from" price you see depends on which country page you open. Saily is not the value pick on cost per gigabyte: 10 GB across Europe for thirty days is €31.99 here against €19.89 for the same allowance and window at Nomad. Buy Saily for the app, the terms and the add-ons, not the arithmetic.',
    items: [
      {
        name: 'Single-country plans',
        price: 'from €3.49 for 1 GB / 7 days (United States)',
        detail:
          'The cheapest way in, and the right choice for a trip that stays in one country. Ladders up to €32.99 for 20 GB over 30 days.',
        pick: true,
      },
      {
        name: 'Europe regional (35 countries)',
        price: 'from €4.49 for 1 GB / 7 days; €31.99 for 10 GB / 30 days',
        detail:
          'One eSIM across the EU plus the UK, Switzerland, Norway, Iceland and a few smaller states. Convenient, not cheap.',
      },
      {
        name: 'Global (121 destinations)',
        price: 'from €7.99; up to €115.99 for 50 GB / 365 days',
        detail:
          'For genuinely unpredictable, continent-crossing travel. The year-long validity is the real feature here, not the rate.',
      },
      {
        name: 'Unlimited and Saily Ultra',
        price: 'Europe unlimited from €44.49 for 15 days',
        detail:
          'Unlimited plans give 3 GB a day without a speed limit, then unlimited data at up to 1 Mbps. Ultra is the premium tier, adding Nord Security subscriptions and priority support; its price is not published in the announcement.',
      },
    ],
  },
  pros: [
    {
      title: 'Privacy tooling that no other travel eSIM bundles',
      body: 'Every plan includes an ad blocker, blocking of malicious sites and trackers, and a virtual-location switch. Saily claims the ad blocker cuts data use by up to 28.6%, which — if it holds — partly offsets the higher per-gigabyte price.',
    },
    {
      title: 'A phone number is actually available',
      body: 'For €0.99 a month plus a call-and-text plan, Saily adds a US (+1) number for calls and SMS to the same app. Identity verification is required in-app after purchase. It is an add-on rather than part of the plan, but it is a route around the category’s biggest dead end.',
    },
    {
      title: 'The unlimited terms are written down',
      body: 'The Europe page states the fair-use position on the plan tile: 3 GB a day at full speed, then unlimited at up to 1 Mbps. Competitors selling unlimited data mostly leave the threshold in per-destination technical specs. This is the honest way to do it.',
    },
    {
      title: 'One eSIM, reused, with a clean app',
      body: 'Install once and add plans to the same profile for later trips. Support is live chat around the clock, and the purchase flow is short enough to complete in a departure lounge.',
    },
  ],
  cons: [
    {
      title: 'Data only unless you pay extra — and then it is a US number',
      body: 'The standard plans carry no number and no SMS, which breaks bank verification codes and some app signups. The add-on fixes that with a +1 US number, which is useful for US services but will not satisfy a bank that only texts the number it already has on file at home. Keep your home SIM active for SMS.',
    },
    {
      title: 'You pay for the polish',
      body: 'Ten gigabytes across Europe for thirty days is €31.99 at Saily and €19.89 at Nomad — over 60% more for the same allowance and window. On a single short trip the difference is a coffee; on repeat long stays it is not.',
    },
    {
      title: 'Younger, and thinner where it matters',
      body: 'Saily launched in March 2024, so it has the shortest track record of the major eSIM apps, and coverage in smaller countries is patchier than Airalo’s. The Global plan reaches 121 destinations against a catalogue of 200-plus — check your specific destination rather than the headline number.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.7,
      note: '97,400+ reviews on the widget Saily displays, checked August 2026',
    },
    {
      source: 'App Store (iOS)',
      value: 4.7,
      note: '61,900+ ratings per the badge on saily.com',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite: high marks for transparency and tooling, marked down for price and a short track record',
    },
  ],
  bestFor: [
    'Travellers who already use NordVPN or other Nord Security products',
    'Anyone who wants a phone number available alongside travel data in one app',
    'Buyers who would rather read a stated throttle than discover one',
    'Mainstream destinations, where coverage is not the deciding factor',
  ],
  notFor: [
    'Anyone optimising for cost per gigabyte — Nomad is materially cheaper',
    'Trips to small or remote countries, where Airalo’s catalogue is deeper',
    'Travellers who need a local number in the country they are visiting, rather than a US one',
    'Buyers deliberately spreading their spending across independent companies: Saily, NordVPN and Surfshark share an owner',
  ],
  faq: [
    {
      q: 'Is Saily the same company as NordVPN?',
      a: 'They share an owner. Both Saily and NordVPN sit under Nord Security, along with NordPass, NordLayer and Surfshark. If you are choosing Saily because you already trust NordVPN, that is a coherent reason; if you are choosing it to spread risk across separate companies, it does not achieve that.',
    },
    {
      q: 'Can I get a phone number with Saily?',
      a: 'Yes, as a paid add-on. Saily sells a US (+1) number at €0.99 a month, to which you add a call-and-text plan, all managed in the same app. Identity verification is required in-app after purchase. The number is persistent, so it stays yours as your data plans change.',
    },
    {
      q: 'What do the built-in security features actually do?',
      a: 'Three things: block ads, block sites and trackers flagged as malicious, and let you present a virtual location. They are conveniences rather than a full VPN, and the ad blocking has a practical side effect — Saily says it cuts data consumption by up to 28.6%, which stretches a fixed allowance.',
    },
    {
      q: 'What happens if I buy a plan and do not travel?',
      a: 'Saily plans carry a 30-day activation period. If you have not activated the plan by then it activates automatically and the clock starts running, so buy close to departure rather than months ahead. Nomad, by comparison, allows 60 days.',
    },
    {
      q: 'Is Saily good value against the cheaper eSIM apps?',
      a: 'Not on price alone. Its Europe plans run well above Nomad’s for the same data and validity. The case for Saily rests on the app, the published unlimited terms, the bundled privacy features and the optional number — if none of those matter to you, buy on cost per gigabyte instead.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'saily.com/all-destinations',
}
