/**
 * Provider registry for the travel vertical — eSIM data plans and long-trip
 * insurance. Same contract as ../vpn/providers.ts.
 *
 * Insurance is the one category where we are deliberately conservative in the
 * copy: what a policy excludes matters more than what it advertises, so every
 * entry names its limits in `cons` and the guides repeat them.
 *
 * SOURCES — coverage, plan prices, validity windows, policy limits and fare
 * rules come from each provider's own pages:
 *   - https://www.airalo.com/ · https://esim.holafly.com/ · https://saily.com/
 *     · https://www.getnomad.app/
 *   - https://safetywing.com/nomad-insurance · https://genki.world/
 *     · https://www.worldnomads.com/ · https://insurednomads.com/
 *   - https://www.etihad.com/en/plan/fly-with-etihad/our-cabins and
 *     https://www.etihad.com/en-us/help/baggage-information
 *   - Ratings: Trustpilot, the iOS App Store, Skytrax and AirHelp listings for
 *     each brand
 *
 * ⚠️ Prices, coverage limits and country counts are working values captured
 * while building the site and MUST be re-verified against each provider's own
 * page before this goes live. The README flags SafetyWing's `priceNote` (name
 * the product) and World Nomads' `trust` line (2026 ownership change) as the
 * two highest-risk entries here. See ../../README.md.
 */
import type { Author, Provider } from '../guides/types'

export const travelProviders: Record<string, Provider> = {
  // ── eSIM data ─────────────────────────────────────────────────────
  airalo: {
    id: 'airalo',
    name: 'Airalo',
    badge: 'AI',
    color: '#F26E21',
    vertical: 'travel',
    domain: 'airalo.com',
    siteLabel: 'airalo.com',
    score: 4.6,
    tagline: 'The default eSIM store: widest country coverage and the largest catalogue',
    founded: 'launched 2019',
    reach: 'plans in 200+ countries and regions',
    priceNote: 'local plans from around $4.50 for 1 GB',
    format: 'Prepaid data eSIMs bought in-app, installed before you fly',
    highlights: [
      'Coverage in more than 200 countries and regions — the broadest catalogue here',
      'Regional bundles for multi-country trips instead of one eSIM per border',
      'Top-ups keep the same eSIM, so you install once and reuse it',
      'Loyalty credit that actually accumulates if you travel often',
    ],
    pros: [
      'If a destination has eSIM service at all, Airalo almost certainly sells it',
      'Install and activate before departure, so you land already connected',
      'Support responds in-app and understands carrier-side problems',
    ],
    cons: [
      'Data-only: no local number for SMS verification codes',
      'Cheapest local plans undercut the regional bundles — compare before buying',
    ],
    trust: [
      'Data-only prepaid plans, no contract',
      'Refund policy for eSIMs that fail to activate',
      'In-app support 24/7',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.4 },
      { source: 'App Store', value: 4.6 },
    ],
    tracked: true,
    topCta: 'Browse Airalo plans →',
    brandSlug: 'airalo',
  },
  holafly: {
    id: 'holafly',
    name: 'Holafly',
    badge: 'HF',
    color: '#00C08B',
    vertical: 'travel',
    domain: 'holafly.com',
    siteLabel: 'holafly.com',
    score: 4.2,
    tagline: 'Unlimited-data plans for people who tether and stream on the road',
    founded: 'launched 2018',
    reach: 'plans in 190+ destinations',
    priceNote: 'unlimited plans from around $6/day',
    format: 'Fixed-duration unlimited data eSIMs, sold by trip length',
    highlights: [
      'Unlimited data plans rather than a gigabyte allowance',
      'Priced per day, which suits short trips with heavy usage',
      'Multi-country plans for Europe, Asia and Latin America',
      '24/7 support in several languages',
    ],
    pros: [
      'Genuinely useful if you tether a laptop or work while travelling',
      'No mid-trip anxiety about a data counter',
    ],
    cons: [
      'Speed is throttled after a fair-use threshold on some destinations',
      'Works out expensive on long trips compared with a gigabyte plan',
    ],
    trust: ['24/7 multilingual support', 'Refunds for activation failures'],
    ratings: [
      { source: 'Trustpilot', value: 4.5 },
      { source: 'App Store', value: 4.4 },
    ],
    tracked: true,
    brandSlug: 'holafly',
  },
  saily: {
    id: 'saily',
    name: 'Saily',
    badge: 'SA',
    color: '#2563EB',
    vertical: 'travel',
    domain: 'saily.com',
    siteLabel: 'saily.com',
    score: 4.1,
    tagline: 'Travel eSIM from the Nord Security team, with privacy tooling built in',
    founded: 'launched 2024',
    reach: 'plans in 150+ destinations',
    priceNote: 'plans from around $3 for 1 GB',
    format: 'Prepaid data eSIMs bought in-app, with optional ad blocking',
    highlights: [
      'Built by the team behind NordVPN — ad blocking and virtual location included',
      'More than 150 destinations, with regional bundles',
      'Two-tap purchase flow and a genuinely modern app',
      'Sensible pick if you already use Nord products',
    ],
    pros: [
      'Privacy tooling bundled into a travel eSIM, which is unusual',
      'Clear pricing with no activation fee',
    ],
    cons: [
      'Younger product with a shorter track record than Airalo',
      'Thinner coverage in smaller countries',
    ],
    trust: ['Backed by Nord Security', 'In-app support', 'Prices shown before purchase'],
    ratings: [
      { source: 'App Store', value: 4.5 },
      { source: 'Google Play', value: 4.3 },
    ],
    tracked: true,
    brandSlug: 'saily',
  },
  nomad: {
    id: 'nomad',
    name: 'Nomad',
    badge: 'NO',
    color: '#111827',
    vertical: 'travel',
    domain: 'nomadesim.com',
    siteLabel: 'nomadesim.com',
    score: 4.0,
    tagline: 'Cheap per-gigabyte pricing and long validity windows',
    founded: 'launched 2020',
    reach: 'plans in 170+ destinations',
    priceNote: 'plans from around $3 for 1 GB',
    format: 'Prepaid data eSIMs with 7 to 365-day validity',
    highlights: [
      'Among the lowest per-gigabyte prices in the category',
      'Long validity options, including year-long plans',
      'Large regional bundles covering whole continents',
      'Referral credit that offsets a first purchase',
    ],
    pros: [
      'Best value if you measure in cost per gigabyte',
      'Long validity suits slow, multi-month travel',
    ],
    cons: [
      'App and support are less polished than Airalo',
      'Network partner quality varies noticeably by country',
    ],
    trust: ['Prepaid, no contract', 'In-app support'],
    ratings: [
      { source: 'Trustpilot', value: 4.2 },
      { source: 'App Store', value: 4.5 },
    ],
    tracked: true,
    brandSlug: 'nomad',
  },

  // ── Long-trip insurance ───────────────────────────────────────────
  safetywing: {
    id: 'safetywing',
    name: 'SafetyWing',
    badge: 'SW',
    color: '#0F3D6E',
    vertical: 'travel',
    domain: 'safetywing.com',
    siteLabel: 'safetywing.com',
    score: 4.5,
    tagline: 'Subscription travel medical cover built for people already abroad',
    founded: 'launched 2018',
    reach: 'members in 180+ countries',
    priceNote: 'from around $56 per 4 weeks (age-dependent)',
    format: 'Rolling 4-week subscription, cancel any time, buy while already travelling',
    highlights: [
      'Subscribes by the month instead of forcing a fixed trip length up front',
      'You can buy it after you have already left home — most insurers will not let you',
      'Includes limited cover for short visits back to your home country',
      'Priced for long, open-ended trips rather than two-week holidays',
    ],
    pros: [
      'The pricing model fits open-ended travel better than anything else here',
      'Claims process is online and does not require a phone call across time zones',
      'Cheap enough that people actually keep it in force',
    ],
    cons: [
      'Medical cover first: baggage and cancellation protection are thin to absent',
      'Adventure sports and pre-existing conditions are largely excluded',
    ],
    trust: [
      'Underwritten by an established insurer',
      'Cancel any time, no term contract',
      'Cover starts while you are already abroad',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.3 },
      { source: 'Reddit r/digitalnomad', value: 4.2 },
    ],
    tracked: true,
    topCta: 'Check SafetyWing pricing →',
    brandSlug: 'safetywing',
  },
  genki: {
    id: 'genki',
    name: 'Genki',
    badge: 'GE',
    color: '#1FA97D',
    vertical: 'travel',
    domain: 'genki.world',
    siteLabel: 'genki.world',
    score: 4.3,
    tagline: 'European-style long-stay health cover with clearer policy wording',
    founded: 'launched 2020',
    reach: 'worldwide cover with European underwriting',
    priceNote: 'from around €50 per month',
    format: 'Monthly health cover for long stays, with a residency-friendly tier',
    highlights: [
      'Policy documents written to be read, not to be survived',
      'A tier that satisfies visa and residence-permit requirements in several countries',
      'Covers routine as well as emergency treatment on the higher tier',
      'European underwriting, which some visa offices insist on',
    ],
    pros: [
      'The clearest policy wording of anything in this comparison',
      'Meets several long-stay visa requirements out of the box',
    ],
    cons: [
      'Higher monthly cost than the subscription-first alternatives',
      'Smaller company, so fewer independent claim reports to learn from',
    ],
    trust: ['European underwriting', 'Monthly cancellation', 'Visa-compliant tier available'],
    ratings: [
      { source: 'Trustpilot', value: 4.6 },
      { source: 'Nomad forums', value: 4.3 },
    ],
    tracked: true,
    brandSlug: 'genki',
  },
  worldnomads: {
    id: 'worldnomads',
    name: 'World Nomads',
    badge: 'WN',
    color: '#E8552D',
    vertical: 'travel',
    domain: 'worldnomads.com',
    siteLabel: 'worldnomads.com',
    score: 4.0,
    tagline: 'The adventure-activity specialist, with real baggage and cancellation cover',
    founded: 'operating since 2002',
    reach: 'available to residents of 100+ countries',
    priceNote: 'quote-based; typically higher than subscription cover',
    format: 'Fixed-term trip policies with two cover levels',
    highlights: [
      'Covers a long published list of adventure activities as standard',
      'Genuine baggage, delay and cancellation cover, not just medical',
      'You can extend a policy while already travelling',
      'Two decades of claims history behind it',
    ],
    pros: [
      'The only option here that seriously covers activities and gear',
      'Broadest non-medical protection in the comparison',
    ],
    cons: [
      'Noticeably more expensive per month than subscription cover',
      'Availability and terms vary a lot by country of residence',
    ],
    trust: [
      'Operating since 2002',
      'Backed by established underwriters',
      'Policy extension while abroad',
    ],
    ratings: [
      { source: 'Trustpilot', value: 3.9 },
      { source: 'ProductReview', value: 4.0 },
    ],
    tracked: true,
    brandSlug: 'worldnomads',
  },
  insurednomads: {
    id: 'insurednomads',
    name: 'Insured Nomads',
    badge: 'IN',
    color: '#7C3AED',
    vertical: 'travel',
    domain: 'insurednomads.com',
    siteLabel: 'insurednomads.com',
    score: 3.9,
    tagline: 'Higher medical limits and evacuation cover for higher-risk destinations',
    founded: 'launched 2019',
    reach: 'global cover with regional plan variants',
    priceNote: 'quote-based, from roughly $100/month',
    format: 'Annual or monthly plans with high medical maximums',
    highlights: [
      'Medical maximums well above the budget subscription plans',
      'Security and evacuation assistance included',
      'Telemedicine bundled into the app',
      'Aimed at remote workers in higher-risk regions',
    ],
    pros: [
      'Cover limits that hold up for a serious hospitalisation',
      'Evacuation assistance is genuinely included, not an add-on',
    ],
    cons: [
      'Considerably more expensive than the alternatives here',
      'Overkill for anyone travelling in low-risk countries',
    ],
    trust: ['High medical maximums', 'Evacuation assistance', 'Telemedicine included'],
    ratings: [
      { source: 'Trustpilot', value: 4.1 },
      { source: 'Nomad forums', value: 3.8 },
    ],
    // Comparison entry only — not a partner.
    tracked: false,
    brandSlug: 'insurednomads',
  },
  etihad: {
    id: 'etihad',
    name: 'Etihad Airways',
    badge: 'EY',
    color: '#BD8B13',
    vertical: 'travel',
    domain: 'etihad.com',
    siteLabel: 'etihad.com',
    score: 4.4,
    tagline: 'The Abu Dhabi connection: a quieter hub than Dubai and a young long-haul fleet',
    founded: 'founded 2003, Abu Dhabi',
    reach: 'around 110 destinations from a fleet of roughly 127 aircraft',
    priceNote: 'route-dependent; Economy Basic is the entry fare',
    format: 'Economy Basic, Value and Deluxe, plus Business, First and The Residence',
    highlights: [
      'Zayed International is materially less congested than connecting through Dubai',
      'One of the youngest widebody fleets in the region — A350s, 787s and A321LRs',
      'Free stopover programme turns a connection into a few days in Abu Dhabi',
      'Named safest airline of 2026 by AirlineRatings',
    ],
    pros: [
      'Strong one-stop coverage between Europe or North America and South and South-East Asia',
      'Newer cabins than most legacy carriers on the same routes',
      'A hub you can connect through without allowing three hours for the walk',
    ],
    cons: [
      'Economy Basic includes no checked bag and no seat selection — even for elite members',
      'Smaller network than Emirates or Qatar, so fewer routes avoid a second connection',
      'Skytrax currently certifies it 4-star, below the 5-star Gulf rivals it is priced against',
    ],
    trust: [
      'Etihad Guest loyalty programme with partner earning',
      'Free stopover programme in Abu Dhabi',
      'AirlineRatings safest airline 2026',
    ],
    ratings: [
      { source: 'Skytrax', value: 4.0 },
      { source: 'AirHelp Score', value: 4.2 },
    ],
    tracked: true,
    topCta: 'Search Etihad fares →',
    brandSlug: 'etihad',
  },
  // ── Airlines ──────────────────────────────────────────────────────
  //
  // SOURCES (checked 21 August 2026) — fare families and baggage come from each
  // carrier's own pages, certifications from Skytrax, awards from the awarding
  // body itself:
  //   - https://www.emirates.com/us/english/before-you-fly/baggage/checked-baggage/
  //     and https://www.emirates.com/us/english/information/optional-services/
  //   - https://emirates.com/ch/english/help/faqs/what-are-the-differences-between-special-saver-flex-and-flex-plus-fares
  //   - https://www.emirates.com/media-centre/emirates-group-achieves-record-profit-of-aed-244-bn-us-66-bn-in-2025-26/
  //   - https://www.qatarairways.com/tradeportal/en/NewFareFamilies.html and
  //     https://www.qatarairways.com/en/baggage/allowance.html
  //   - https://www.turkishairlines.com/en-int/any-questions/flight-packages-for-international-flights-questions/
  //     and https://www.turkishairlines.com/en-int/any-questions/seat-selection-terms-and-conditions/
  //   - https://skytraxratings.com/a-z-of-airline-ratings (star certifications)
  //   - https://www.worldairlineawards.com/airline-of-the-year-winners/
  //   - https://www.airlineratings.com/articles/worlds-best-airlines-for-2026-by-airline-ratings
  //
  // ⚠️ RE-VERIFY BEFORE LAUNCH. Airline fares are route- and date-dependent and
  // fare-family rules change without notice — nothing here is a quotable price.
  // Specific points to re-check: (a) Skytrax certifies Emirates and Turkish at
  // FOUR stars, not five — only Qatar holds five of the four carriers here, and
  // the Etihad brand page currently implies Emirates is 5-star; (b) the 2026
  // Skytrax World Airline Awards are not announced until 18 September 2026, so
  // no 2026 Skytrax placement may be published yet; (c) `AirHelp Score` values
  // below are the published 2025 scores out of 10 rescaled to this site's 0–5
  // rating scale (Emirates 7.45, Qatar 8.16, Turkish 6.92); (d) Qatar's network
  // was still being rebuilt through summer 2026 after the February 2026 regional
  // airspace closures, so its destination count is unusually volatile.
  emirates: {
    id: 'emirates',
    name: 'Emirates',
    badge: 'EK',
    color: '#D71921',
    vertical: 'travel',
    domain: 'emirates.com',
    siteLabel: 'emirates.com',
    score: 4.5,
    tagline: 'The biggest one-stop network of the Gulf three, and a bag in every fare',
    founded: 'founded 1985, Dubai',
    reach: '152 cities in 80 countries from a fleet of about 277 aircraft',
    priceNote: 'route-dependent; Economy Special is the entry fare',
    format: 'Economy Special, Saver, Flex and Flex Plus, plus Premium Economy, Business and First',
    highlights: [
      'The cheapest fare, Economy Special, still includes 20 kg checked — or one 23 kg bag on Americas and Africa routings',
      'Largest network here: 152 cities in 80 countries, plus 32 codeshare and 117 interline partners',
      'Premium Economy now on every A350 and on retrofitted A380s and 777s',
      'Free Starlink wi-fi rolling out across 232 aircraft',
    ],
    pros: [
      'No hand-baggage-only fare exists — every Emirates ticket carries a checked allowance',
      'More one-stop city pairs than any other carrier in this comparison',
      'A standard seat is free from online check-in even on the cheapest fare',
    ],
    cons: [
      'Advance seat selection on Special and Saver fares costs from about US$7 to US$260 per sector',
      'Economy Special is excluded from the August 2026 unlimited-change and reduced-refund terms',
      'Skytrax certifies Emirates at 4-star, and 219 of its aircraft are still working through a $5bn retrofit',
    ],
    trust: [
      'Emirates Skywards loyalty programme, no alliance membership',
      'Checked baggage included in every published fare family',
      'AirlineRatings 2026 top-25 full-service list',
    ],
    ratings: [
      { source: 'Skytrax', value: 4.0 },
      { source: 'AirHelp Score', value: 3.7 },
    ],
    tracked: true,
    topCta: 'Search Emirates fares →',
    brandSlug: 'emirates',
  },
  qatarairways: {
    id: 'qatarairways',
    name: 'Qatar Airways',
    badge: 'QR',
    color: '#5C0632',
    vertical: 'travel',
    domain: 'qatarairways.com',
    siteLabel: 'qatarairways.com',
    score: 4.7,
    tagline: 'The only 5-star carrier of the four, with a checked bag in every fare',
    founded: 'founded 1993, Doha',
    reach: 'around 160 destinations from a fleet of roughly 267 aircraft',
    priceNote: 'route-dependent; Economy Lite is the entry fare',
    format: 'Economy Lite, Classic, Convenience and Comfort, plus Business and First',
    highlights: [
      'The only Skytrax 5-star airline in this comparison',
      'Named world’s best airline for 2026 by AirlineRatings, and by Skytrax for 2025',
      'Economy Lite includes 20 kg checked, or one 23 kg bag on Americas and Africa routings',
      'Qsuite business class — closing doors, and centre pairs that convert to a double bed',
    ],
    pros: [
      'Checked baggage, meals and seat-back entertainment are in every fare, including the cheapest',
      'Doha is a single-terminal transfer with no inter-terminal shuttle to catch',
      'Topped the 2025 AirHelp Score, which weighs claims handling as well as punctuality',
    ],
    cons: [
      'Economy Lite permits no changes and no refunds at all — the strictest entry fare here',
      'No premium economy cabin: Comfort Plus is a paid extra-legroom seat, not a separate class',
      'Network was still rebuilding through summer 2026 after February’s regional airspace closures',
    ],
    trust: [
      'Privilege Club loyalty programme, oneworld member since 2013',
      'Skytrax 5-star certification',
      'Checked baggage included on all Qatar Airways flights',
    ],
    ratings: [
      { source: 'Skytrax', value: 5.0 },
      { source: 'AirHelp Score', value: 4.1 },
    ],
    tracked: true,
    topCta: 'Search Qatar Airways fares →',
    brandSlug: 'qatarairways',
  },
  turkishairlines: {
    id: 'turkishairlines',
    name: 'Turkish Airlines',
    badge: 'TK',
    color: '#A70E13',
    vertical: 'travel',
    domain: 'turkishairlines.com',
    siteLabel: 'turkishairlines.com',
    score: 4.2,
    tagline: 'More countries than any other airline, and an entry fare that varies by route',
    founded: 'founded 1933, Istanbul',
    reach: 'around 340 destinations in 129 countries from a fleet of 500-plus aircraft',
    priceNote: 'route-dependent; EcoFly is the entry fare',
    format: 'EcoFly, ExtraFly, FlexFly and PrimeFly, plus BusinessFly and BusinessPrime',
    highlights: [
      'Guinness-certified as the airline serving the most countries — 131 at the December 2024 award',
      'Star Alliance membership, so miles credit to a programme you may already hold',
      'Do&Co catering, with a flying chef in business class on longer sectors',
      'Free stopover hotel and the Touristanbul city tour on qualifying layovers',
    ],
    pros: [
      'Reaches secondary cities the Gulf carriers do not serve at all',
      'Skytrax named it best airline in Europe for the ninth time in 2025',
      'A stopover in Istanbul can come with a hotel night at no fare cost',
    ],
    cons: [
      'EcoFly’s checked allowance is route-dependent and is nil on many intra-Europe sectors',
      'Seat selection is paid on EcoFly and ExtraFly; free standard seats start at FlexFly',
      'Ranked 45th of 117 airlines in the 2025 AirHelp Score, dragged down by claims processing',
    ],
    trust: [
      'Miles&Smiles loyalty programme, Star Alliance member since 2008',
      'AirlineRatings 7/7 safety rating',
      'Published branded-fare table shown before purchase',
    ],
    ratings: [
      { source: 'Skytrax', value: 4.0 },
      { source: 'AirHelp Score', value: 3.5 },
    ],
    // No consumer affiliate programme could be confirmed: turkishairlines.com's
    // affiliate URLs 404 and no network carries a verifiable listing. Comparison
    // entry only — links go out direct with nofollow and earn nothing.
    tracked: false,
    topCta: 'Check Turkish Airlines fares →',
    brandSlug: 'turkishairlines',
  },
  airindia: {
    id: 'airindia',
    name: 'Air India',
    badge: 'AI',
    color: '#C8102E',
    vertical: 'travel',
    domain: 'airindia.com',
    siteLabel: 'airindia.com',
    score: 3.8,
    tagline: 'A Tata-era turnaround: real retrofit progress, unresolved safety scrutiny',
    founded: 'founded 1932, Mumbai',
    reach: '87 destinations, 37 countries, ~189 aircraft',
    priceNote: 'route-dependent; Value is the entry Smart Fare',
    format: 'Value, Classic and Flex Smart Fares in economy, plus Business',
    highlights: [
      'Skytrax raised its rating from three stars to four in 2026 on the strength of the Vihaan.AI turnaround',
      'Star Alliance member since 2014 — Maharaja Club Gold and Platinum match Star Alliance Gold status',
      'The entry-level Value fare still includes one checked bag on international routes',
      'A Boeing 787 cabin retrofit is under way, with the first refreshed aircraft flying since April 2026',
    ],
    pros: [
      'Broad Star Alliance connectivity through Delhi for onward long-haul travel',
      'Visible, funded retrofit programme rather than a marketing promise',
      'Cheapest international fare still carries a checked bag',
    ],
    cons: [
      'Cabin product is inconsistent — Skytrax itself flags variation between retrofitted and legacy aircraft',
      'The June 2025 Ahmedabad crash and its contested investigation remain an open reputational overhang',
    ],
    trust: [
      'Star Alliance member since July 2014',
      'Maharaja Club loyalty programme with Star Alliance status matching',
      'Skytrax 4-star certification, upgraded from 3-star in 2026',
    ],
    ratings: [
      { source: 'Skytrax', value: 4.0 },
      { source: 'AirHelp Score', value: 3.1 },
    ],
    tracked: true,
    topCta: 'Search Air India fares →',
    brandSlug: 'airindia',
  },
  malaysiaairlines: {
    id: 'malaysiaairlines',
    name: 'Malaysia Airlines',
    badge: 'MH',
    color: '#E31837',
    vertical: 'travel',
    domain: 'malaysiaairlines.com',
    siteLabel: 'malaysiaairlines.com',
    score: 3.8,
    tagline: 'A Khazanah-owned oneworld hub in KL, with a wide Skytrax-Trustpilot gap',
    founded: 'founded 1947, Kuala Lumpur',
    reach: '~69 destinations from a fleet of about 86 aircraft',
    priceNote: 'route-dependent; Economy Value is the entry fare',
    format: 'Economy Value, Basic and Flex, plus Business',
    highlights: [
      'Free Bonus Side Trip adds a no-base-fare domestic leg to a qualifying international itinerary via KL',
      'Even the cheapest Economy Value fare carries a 20 kg checked bag',
      'oneworld member since February 2013, so Enrich credits into a global alliance',
      'Skytrax notes standards "much improved" over the last two years, naming the A350 specifically',
    ],
    pros: [
      'A checked bag is included on every economy fare, even the cheapest',
      'Kuala Lumpur is a genuine stopover hub between Europe and Australia or New Zealand',
      'Recent, funded fleet investment — 40 A330neos and 30 Boeing 737 MAX on order',
    ],
    cons: [
      'Trustpilot score is dismal at 1.7 out of 5, dominated by delay and service complaints',
      'The free Bonus Side Trip perk excludes the cheapest Economy Value fare',
    ],
    trust: [
      'oneworld alliance member since 1 February 2013',
      'Enrich loyalty programme, refreshed tier structure from January 2026',
      'Skytrax 4-star certification; held 5-star in the past',
    ],
    ratings: [
      { source: 'Skytrax', value: 4.0 },
      { source: 'Trustpilot', value: 1.7 },
    ],
    tracked: true,
    topCta: 'Search Malaysia Airlines fares →',
    brandSlug: 'malaysiaairlines',
  },
}

/** The byline on every travel guide. */
export const travelAuthor: Author = {
  name: 'Marta Vieira',
  role: 'Travel services editor',
  bio: 'Marta has worked remotely from 30-odd countries and has the claim paperwork to prove it. For these guides she compared every plan on its published terms — coverage lists, validity windows, real cost per gigabyte — and read each insurance policy wording end to end, including the exclusions page that decides whether a claim is ever paid.',
  initials: 'MV',
  credentials: [
    'Remote from 30+ countries',
    'Reads the exclusions page first',
    'Compares real cost per gigabyte',
  ],
}
