/**
 * Security & privacy stores.
 *
 * Split out of software.ts once the category grew past a dozen brands: VPNs,
 * antivirus, password managers and parental control share one pricing model —
 * a cheap first term that auto-renews at a much higher rate — and it is worth
 * saying that once, on a category page, rather than in every entry.
 *
 * ⚠️ Working values written from the vendors' public pages; re-check before a
 * campaign. Promotional pricing here moves monthly, and the gap between the
 * first-term price and the renewal is the whole story — never quote a
 * first-term figure without the renewal beside it. See ../../README.md.
 */
import type { Store } from '../types'

/** The four stores moved here from software.ts, checked in the first pass. */
const CHECKED = '2026-08-25'
/** Everything added in the rounds 2–3 pass, checked a day later. Two constants
 *  rather than one because re-dating the first four would be a claim we did not
 *  earn — nobody re-read their pricing pages on the 26th. */
const CHECKED_R2 = '2026-08-26'

export const securityStores: Store[] = [
  {
    slug: 'nordvpn',
    name: 'NordVPN',
    domain: 'nordvpn.com',
    siteLabel: 'nordvpn.com',
    badge: 'NV',
    color: '#1B4FA8',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'The category leader, sold on a long term that renews much higher.',
    about: [
      'NordVPN is the default recommendation in consumer VPNs: fast on long-distance connections thanks to its WireGuard implementation, mature apps on every platform, and a no-logs policy that has been examined by outside auditors more than once.',
      'It is also sold the way the whole category is sold — a steep discount on a two-year commitment, renewing at a much higher standard rate. Every "70% off" you see refers to the first term. The single most valuable thing you can do before subscribing is note the renewal date, because that is where the real pricing decision happens.',
    ],
    offers: [
      {
        id: 'nordvpn-longterm',
        kind: 'deal',
        value: 'Long term',
        title: 'Multi-year plan pricing — the discount is the term',
        detail:
          'The two-year plan carries the advertised per-month price. Monthly billing costs several times as much for the identical service.',
        terms:
          'Renews at the standard annual rate, which is substantially higher than the first term.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'nordvpn-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: '30-day money-back guarantee',
        detail:
          'The safest way to test it properly. Buy the long term, use it hard for three weeks, and cancel for a refund if it does not suit you.',
        checked: CHECKED,
      },
      {
        id: 'nordvpn-bundles',
        kind: 'deal',
        value: 'Member',
        title: 'Bundled tiers with password manager and storage',
        detail:
          'The higher tiers add tools you may already have. Only worth it if you would otherwise pay for them separately.',
        checked: CHECKED,
      },
      {
        id: 'nordvpn-seasonal',
        kind: 'deal',
        value: 'Long term',
        title: 'Seasonal campaigns with extra months added',
        detail:
          'The category’s promotions usually take the form of extra free months on a term rather than a lower rate. Extra months on a two-year plan is the better version of that offer.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Diarise the renewal the day you subscribe',
        body: 'This is the whole discipline in this category. The second-term price is where the business makes its margin.',
      },
      {
        title: 'Do not buy monthly to "try it"',
        body: 'The money-back guarantee already lets you try the long term risk-free, at a fraction of the monthly rate.',
      },
      {
        title: 'NordVPN and Surfshark are the same company',
        body: 'If you are comparing them to hedge across providers, you are not. Proton VPN and Mullvad are the genuinely independent alternatives.',
      },
    ],
    facts: [
      { label: 'Jurisdiction', value: 'Panama' },
      { label: 'Devices', value: '10 simultaneous connections' },
      { label: 'Refund window', value: '30 days' },
      { label: 'Owner', value: 'Nord Security — also owns Surfshark' },
    ],
    faq: [
      {
        q: 'Is there a NordVPN promo code?',
        a: 'The advertised deal on the pricing page is normally the best available, and it applies without a code. Where a code exists it usually adds months rather than cutting the rate.',
      },
      {
        q: 'What does it cost at renewal?',
        a: 'Substantially more than the first term — the headline price is tied to the initial commitment only. Check the renewal figure at checkout before you buy.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Yes, within 30 days of purchase, which makes the long-term plan the sensible way to trial the service.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'surfshark',
    name: 'Surfshark',
    domain: 'surfshark.com',
    siteLabel: 'surfshark.com',
    badge: 'SS',
    color: '#0F6E64',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'Unlimited devices at a low first-term price, with the same renewal pattern.',
    about: [
      'Surfshark’s distinguishing feature is that it places no limit on simultaneous connections, which makes it the obvious choice for a household or a family that would otherwise need two subscriptions.',
      'Pricing follows the category script exactly: a very low headline on a two-year term, renewing higher. It sits under the same parent company as NordVPN, so treating the two as competing independent options is a mistake if what you want is provider diversity.',
    ],
    offers: [
      {
        id: 'surfshark-longterm',
        kind: 'deal',
        value: 'Long term',
        title: 'Two-year term at the advertised monthly rate',
        detail:
          'Among the lowest first-term prices in the category. The saving over monthly billing is severalfold.',
        terms: 'Renews at the standard rate — check the figure at checkout.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'surfshark-devices',
        kind: 'deal',
        value: 'Deal',
        title: 'Unlimited simultaneous devices on every plan',
        detail:
          'Not a promotion but a pricing fact: one subscription covers a whole household, which halves the effective cost against most rivals.',
        checked: CHECKED,
      },
      {
        id: 'surfshark-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: '30-day money-back guarantee',
        detail: 'Buy the long term and test it properly rather than paying monthly to try.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Share it — that is the point',
        body: 'Unlimited connections means one subscription genuinely covers the household. Split across four people it is the cheapest option in the category.',
      },
      {
        title: 'Ignore the bundled extras when comparing',
        body: 'Antivirus and data-removal add-ons inflate the higher tiers. Compare the base VPN tier against rivals’ base tiers.',
      },
      {
        title: 'Same owner as NordVPN',
        body: 'Buying both, or switching between them for independence, achieves nothing on that front.',
      },
    ],
    facts: [
      { label: 'Devices', value: 'Unlimited simultaneous connections' },
      { label: 'Jurisdiction', value: 'Netherlands' },
      { label: 'Refund window', value: '30 days' },
      { label: 'Owner', value: 'Nord Security' },
    ],
    faq: [
      {
        q: 'Is Surfshark cheaper than NordVPN?',
        a: 'On the first term, usually yes. Across a household it is cheaper again because of unlimited devices. At renewal both jump.',
      },
      {
        q: 'Do Surfshark coupon codes work?',
        a: 'The site’s own advertised deal is normally the best price. Third-party codes typically add a month or two rather than reducing the rate.',
      },
      {
        q: 'Is unlimited really unlimited?',
        a: 'For household use, yes. It is intended for your own devices rather than for resale, and abuse is what the terms address.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'expressvpn',
    name: 'ExpressVPN',
    domain: 'expressvpn.com',
    siteLabel: 'expressvpn.com',
    badge: 'EV',
    color: '#B02A2A',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'The premium option, priced accordingly, discounted by free months.',
    about: [
      'ExpressVPN is the most expensive of the mainstream VPNs and competes on polish: consistent speeds, an unusually good router firmware, and apps that work without configuration on platforms where rivals struggle.',
      'Its promotional pattern is distinctive. Rather than cutting the rate, it adds free months to an annual plan — the familiar "12 months + 3 free" construction. Whether that is a better deal than a rival’s lower rate depends entirely on how long you intend to keep it.',
    ],
    offers: [
      {
        id: 'expressvpn-extramonths',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual plan with extra months added',
        detail:
          'The standing promotion. Compute the effective monthly rate across the whole term before comparing with rivals.',
        terms: 'Renews at the standard annual rate without the bonus months.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'expressvpn-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: '30-day money-back guarantee',
        detail: 'Standard for the category and honoured. The safe way to test the premium claim.',
        checked: CHECKED,
      },
      {
        id: 'expressvpn-router',
        kind: 'deal',
        value: 'Deal',
        title: 'Router firmware included with the subscription',
        detail:
          'Covering the whole network from the router is the way to beat the device limit. It is included rather than sold separately.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Compute the effective monthly rate',
        body: 'Free months change the arithmetic. Divide the total charge by the total months before deciding it is expensive.',
      },
      {
        title: 'Router setup replaces device counting',
        body: 'One router install covers every device in the house including the ones with no VPN app.',
      },
      {
        title: 'Renewal drops the bonus months',
        body: 'The second term is priced at the standard annual rate. Diarise it.',
      },
    ],
    facts: [
      { label: 'Jurisdiction', value: 'British Virgin Islands' },
      { label: 'Devices', value: '8 simultaneous connections' },
      { label: 'Refund window', value: '30 days' },
      { label: 'Distinctive', value: 'Router firmware included' },
    ],
    faq: [
      {
        q: 'Why is ExpressVPN more expensive?',
        a: 'It competes on reliability and platform coverage rather than on price. Whether that is worth the premium depends on whether you have had problems with cheaper providers.',
      },
      {
        q: 'Are there ExpressVPN discount codes?',
        a: 'The site’s own offer — extra months on an annual plan — is normally the best available and applies without a code.',
      },
      {
        q: 'Does the price go up at renewal?',
        a: 'Yes. The bonus months are a first-term promotion; renewal is at the standard annual rate.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'norton',
    name: 'Norton',
    domain: 'norton.com',
    siteLabel: 'norton.com',
    badge: 'NT',
    color: '#B0851A',
    category: 'security',
    markets: 'Worldwide via country storefronts',
    blurb: 'Security software where the first year is cheap and the second is not.',
    about: [
      'Norton is one of the largest consumer security suites, bundling antivirus with a VPN, a password manager, cloud backup and — on the higher tiers — identity monitoring in the markets where that is offered.',
      'The pricing model in consumer antivirus is the steepest first-year-to-renewal jump in mainstream software. A suite advertised at a low introductory figure can renew at two or three times that. This is not hidden — it is stated at checkout — but it is the number people do not read, and it is the reason the category has a reputation for surprise charges.',
    ],
    offers: [
      {
        id: 'norton-firstyear',
        kind: 'deal',
        value: 'New customer',
        title: 'Introductory first-year pricing across the suites',
        detail:
          'The advertised price covers year one. The renewal figure is shown at checkout and is considerably higher.',
        terms: 'Auto-renews at the standard rate unless you turn renewal off.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'norton-multidevice',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-device and family plans',
        detail:
          'The per-device cost falls sharply on the larger licences. If you are covering a household, buy the family tier rather than three singles.',
        checked: CHECKED,
      },
      {
        id: 'norton-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: 'Money-back guarantee on annual subscriptions',
        detail: 'A refund window on the annual plans, per the vendor’s current terms.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Turn off auto-renew immediately',
        body: 'You keep the full term you paid for. It simply stops the automatic charge at the higher rate, and you can re-subscribe at intro pricing.',
      },
      {
        title: 'Count what you already have',
        body: 'If you already pay for a VPN and a password manager, the suite’s bundle is duplicated spend. Compare the antivirus tier alone.',
      },
      {
        title: 'Windows already ships with a defender',
        body: 'The built-in protection scores respectably in independent testing. Buy a suite for the extras, not because the machine is otherwise defenceless.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Worldwide, country storefronts' },
      { label: 'Pricing', value: 'Discounted year one, standard rate thereafter' },
      { label: 'Bundle', value: 'Antivirus, VPN, password manager, backup' },
      { label: 'Action to take', value: 'Disable auto-renew at purchase' },
    ],
    faq: [
      {
        q: 'Why did Norton charge me so much more this year?',
        a: 'Because the first year was an introductory price and the subscription auto-renewed at the standard rate. It is stated at purchase and it catches almost everyone once.',
      },
      {
        q: 'Can I cancel the renewal and keep the protection?',
        a: 'Yes. Turning off auto-renew leaves your paid term running to its end; it only stops the next charge.',
      },
      {
        q: 'Is the bundled VPN any good?',
        a: 'It is adequate for casual use and not competitive with a dedicated provider on speed or server choice. Do not buy the suite for the VPN alone.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'bitdefender',
    name: 'Bitdefender',
    domain: 'bitdefender.com',
    siteLabel: 'bitdefender.com',
    badge: 'BD',
    color: '#B02A1E',
    category: 'security',
    markets: 'Worldwide, via country storefronts with local pricing',
    blurb: 'Consistently top-scoring antivirus, sold on a first year that is not the real price.',
    about: [
      'Bitdefender is one of the two or three consumer security suites that sit at the top of the independent lab tables year after year, and it has a reputation for doing it without slowing the machine down as much as its rivals. The range runs from a plain antivirus up to a family suite bundling a VPN, a password manager and identity monitoring.',
      'The pricing is the standard trap of the category: a heavily discounted first year against a much higher standard renewal, charged automatically. The list prices shown struck through on the site sit behind a rolling store discount, so the "saving" you are shown is measured against a number almost nobody pays.',
    ],
    offers: [
      {
        id: 'bitdefender-firstyear',
        kind: 'deal',
        value: 'New customer',
        title: 'Introductory first-year pricing across the suites',
        detail:
          'The advertised figure covers year one on a new subscription. The renewal rate is shown at checkout and is considerably higher.',
        terms: 'Auto-renews at the standard rate unless you turn renewal off.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'bitdefender-devices',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-device and family licences',
        detail:
          'The per-device cost falls sharply on the 5- and 10-device licences. Covering a household on one licence is much cheaper than three singles.',
        checked: CHECKED_R2,
      },
      {
        id: 'bitdefender-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free antivirus tier for Windows',
        detail:
          'The free edition uses the same detection engine as the paid suites, without the extras. If all you want is malware protection, start here and pay only when something in the suite matters to you.',
        checked: CHECKED_R2,
      },
      {
        id: 'bitdefender-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: '30-day money-back guarantee',
        detail: 'A refund window on new subscriptions, which makes the annual plan safe to test.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Turn off auto-renew the day you buy',
        body: 'You keep the full term you paid for; it only stops the automatic charge at the standard rate. Then decide again in eleven months.',
      },
      {
        title: 'Ignore the struck-through price',
        body: 'It is a reference figure sitting behind a permanent store discount. Judge the deal against Bitdefender’s own recent prices instead.',
      },
      {
        title: 'Count the bundle before you buy it',
        body: 'The top tiers include a VPN and a password manager. If you already pay for both, the plain antivirus is the honest comparison.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Worldwide, priced per country' },
      { label: 'Pricing', value: 'Discounted year one, standard rate thereafter' },
      { label: 'Refund window', value: '30 days' },
      { label: 'Free tier', value: 'Yes, Windows antivirus only' },
    ],
    faq: [
      {
        q: 'Why did Bitdefender charge me more this year?',
        a: 'Because year one was an introductory price and the subscription auto-renewed at the standard rate. It is disclosed at purchase and it catches nearly everyone once.',
      },
      {
        q: 'Is the free version good enough?',
        a: 'For malware protection on a Windows machine, largely yes — it runs the same engine. The paid tiers buy you the extras, not better detection.',
      },
      {
        q: 'Do Bitdefender promo codes work?',
        a: 'The site’s own campaign price is usually the best available and applies without a code. Third-party codes tend to duplicate it rather than beat it.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'purevpn',
    name: 'PureVPN',
    domain: 'purevpn.com',
    siteLabel: 'purevpn.com',
    badge: 'PV',
    color: '#1F5C8A',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'A budget VPN sold on very long terms — read what happens at renewal.',
    about: [
      'PureVPN competes at the cheap end of the VPN market, with a large server fleet and apps on every platform. It sells almost entirely on multi-year commitments, where the advertised per-month figure is the lowest in the mainstream category.',
      'Two things deserve a sentence. It has moved its corporate base and reworked its logging policy over the years, and it publishes third-party assurance work on that policy — worth reading yourself rather than taking anyone’s summary, including ours. And the price you are quoted is a five-year figure in some funnels: the renewal, whenever it lands, is at a very different rate.',
    ],
    offers: [
      {
        id: 'purevpn-longterm',
        kind: 'deal',
        value: 'Long term',
        title: 'Multi-year plans at the advertised monthly rate',
        detail:
          'The headline price assumes the longest term the site is selling that week. On a one-month plan the same service costs several times as much.',
        terms: 'Renews at the standard rate — check the figure and the term length at checkout.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'purevpn-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: '31-day money-back guarantee',
        detail:
          'Long enough to test properly on your own connection, which matters more than any review at this price point.',
        checked: CHECKED_R2,
      },
      {
        id: 'purevpn-addons',
        kind: 'deal',
        value: 'No add-ons',
        title: 'Decline the add-ons at checkout',
        detail:
          'Dedicated IP, port forwarding and a password manager are offered as paid extras during signup. The base plan is what the headline price refers to.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Test inside the refund window',
        body: 'Speed on a VPN depends on your route to their servers, not on anyone else’s benchmark. Buy the long term, test hard for a fortnight, refund if it is slow.',
      },
      {
        title: 'The renewal is not the promo',
        body: 'Diarise the end of the term. This is the category where the second bill is the one that surprises people.',
      },
      {
        title: 'Read the logging policy yourself',
        body: 'It is a short document and it is the entire product. Do not buy a privacy tool on a summary of a summary.',
      },
    ],
    facts: [
      { label: 'Coverage', value: 'Worldwide' },
      { label: 'Refund window', value: '31 days' },
      { label: 'Pricing', value: 'Multi-year term; renews higher' },
      { label: 'Watch out for', value: 'Paid add-ons pre-selected at checkout' },
    ],
    faq: [
      {
        q: 'Is PureVPN worth it at that price?',
        a: 'On a long term it is among the cheapest mainstream options, and the refund window means you can find out on your own connection at no risk. Whether it is as fast as the premium providers depends entirely on where you are.',
      },
      {
        q: 'What does it cost at renewal?',
        a: 'Substantially more per month than the multi-year headline. Check the renewal figure at checkout before you buy.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Within 31 days of purchase, per the vendor’s current policy. That is the safest way to buy in this category.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'proton',
    name: 'Proton',
    domain: 'proton.me',
    siteLabel: 'proton.me',
    badge: 'PR',
    color: '#4B3FA8',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'Swiss privacy suite — mail, drive, calendar and VPN, with a real free tier.',
    about: [
      'Proton is a Swiss company selling an integrated privacy suite: encrypted email, a password manager, cloud storage, a calendar and a VPN, sold together as one subscription. It is structurally unusual for the category — non-profit-owned, open-source clients, and audited — which is most of the argument for choosing it over a cheaper bundle.',
      'The commercial model is a genuinely usable free tier with tight limits, and paid plans that get much cheaper per month on annual and two-year billing. There is no coupon economy here; the discount is the billing term and the occasional seasonal campaign.',
    ],
    offers: [
      {
        id: 'proton-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual and two-year billing below the monthly rate',
        detail:
          'The standing discount, and a large one. Monthly billing on the suite costs substantially more per month for the identical service.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'proton-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier across mail, drive, calendar and VPN',
        detail:
          'Limited storage and one VPN location, but not a trial — it does not expire. Enough to decide whether the ecosystem suits you before paying for it.',
        checked: CHECKED_R2,
      },
      {
        id: 'proton-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'The full suite costs less than the parts',
        detail:
          'Buying mail, VPN, drive and the password manager as one plan is far cheaper than subscribing to each. Only worth it if you will use more than two.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Start free and migrate slowly',
        body: 'Moving email is the hard part. Run the free tier alongside your existing address for a month before you commit a year to it.',
      },
      {
        title: 'Two-year billing is the real discount',
        body: 'The step from monthly to annual is large; annual to two-year is smaller but still worth it on a service you intend to keep.',
      },
      {
        title: 'Check the custom-domain tier',
        body: 'If you want mail on your own domain, that sits on a specific plan. Buying the wrong tier and upgrading later is the common mistake.',
      },
    ],
    facts: [
      { label: 'Jurisdiction', value: 'Switzerland' },
      { label: 'Free tier', value: 'Yes, permanent, with limits' },
      { label: 'Discount lever', value: 'Annual or two-year billing' },
      { label: 'Includes', value: 'Mail, VPN, Drive, Calendar, Pass' },
    ],
    faq: [
      {
        q: 'Is the Proton free plan actually usable?',
        a: 'Yes, within its limits — it is a real account rather than a trial. Storage and the number of addresses are what push people to pay.',
      },
      {
        q: 'Are there Proton discount codes?',
        a: 'Rarely. Annual and two-year billing is how the price comes down, plus an occasional seasonal campaign on the site itself.',
      },
      {
        q: 'Should I buy Proton VPN separately?',
        a: 'Only if the VPN is all you want. If you would also use encrypted mail or storage, the bundled suite is much better value than the standalone.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'proton-vpn',
    name: 'Proton VPN',
    domain: 'protonvpn.com',
    siteLabel: 'protonvpn.com',
    badge: 'PVP',
    color: '#5B4BC4',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'The one mainstream VPN with a genuinely unlimited free tier.',
    about: [
      'Proton VPN is the standalone VPN from the Proton suite: Swiss-based, open-source clients, independently audited, and the only well-known provider offering a free tier with no data cap. The free plan is slower and limited to a handful of countries, but it is not a trial and it does not sell your traffic — which is the usual catch with free VPNs and the reason most of them should be avoided.',
      'Paid plans discount steeply on annual and two-year billing. If you want more than the VPN, the full Proton suite is better value than this plan plus separate subscriptions elsewhere.',
    ],
    offers: [
      {
        id: 'protonvpn-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier with no data cap',
        detail:
          'Slower, a few countries, one device. Genuinely free rather than a trial, and it is funded by the paid plans rather than by selling your traffic.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'protonvpn-longterm',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual and two-year plans below the monthly rate',
        detail: 'The main discount on the paid tier, and a substantial one.',
        terms: 'Renews at the standard rate for the term you chose.',
        checked: CHECKED_R2,
      },
      {
        id: 'protonvpn-suite',
        kind: 'deal',
        value: 'Bundle',
        title: 'Cheaper inside the full Proton suite',
        detail:
          'If you would also use encrypted mail or storage, the bundled plan costs less than this subscription plus separate services.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Try the free tier before paying',
        body: 'It answers the only question that matters — whether the connection is usable from where you are — at no cost and with no card.',
      },
      {
        title: 'Do not use a random free VPN instead',
        body: 'Free VPNs are usually funded by the traffic they carry. This is the rare one that is not, which is the whole reason to mention it.',
      },
      {
        title: 'Price the suite, not the app',
        body: 'Two Proton services on one plan is cheaper than one here and one elsewhere.',
      },
    ],
    facts: [
      { label: 'Jurisdiction', value: 'Switzerland' },
      { label: 'Free tier', value: 'Yes, unlimited data' },
      { label: 'Clients', value: 'Open source, independently audited' },
      { label: 'Discount lever', value: 'Annual or two-year billing' },
    ],
    faq: [
      {
        q: 'Is the free Proton VPN safe to use?',
        a: 'It is the one free VPN we would suggest looking at, because the business is funded by paid subscriptions rather than by monetising the traffic. It is slower and limited to a few countries.',
      },
      {
        q: 'How does it compare with NordVPN or Surfshark?',
        a: 'Slower on some routes, stronger on transparency and independence — different companies, open clients, audits published. If provider independence is why you are buying, that is the difference.',
      },
      {
        q: 'Are there promo codes?',
        a: 'Not as a routine mechanic. Long-term billing is the discount.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'nordpass',
    name: 'NordPass',
    domain: 'nordpass.com',
    siteLabel: 'nordpass.com',
    badge: 'NP',
    color: '#1B4FA8',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'Password manager from the Nord group, sold on the same two-year pattern.',
    about: [
      'NordPass is Nord Security’s password manager — the same company behind NordVPN and Surfshark. It does what the category does: stores credentials, fills them, flags reused and breached passwords, and syncs across devices.',
      'Pricing follows the group’s house style exactly: a low headline on a two-year commitment, renewing at a much higher standard rate, plus a free tier limited to one active device at a time. In a category where the switching cost is low and the free tiers are good, the renewal price matters more than usual.',
    ],
    offers: [
      {
        id: 'nordpass-longterm',
        kind: 'deal',
        value: 'Long term',
        title: 'Two-year plan at the advertised monthly rate',
        detail:
          'The headline price is the two-year term. Monthly billing costs several times more.',
        terms: 'Renews at the standard rate, which is substantially higher.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'nordpass-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier, one active device',
        detail:
          'Unlimited passwords but you are signed out of one device when you sign in on another. Fine for a single laptop, painful across a phone and a desktop.',
        checked: CHECKED_R2,
      },
      {
        id: 'nordpass-family',
        kind: 'deal',
        value: 'Bundle',
        title: 'Family plan across six accounts',
        detail:
          'The per-person cost drops sharply. If anyone else in the house is reusing passwords, this is the cheapest way to fix it.',
        checked: CHECKED_R2,
      },
      {
        id: 'nordpass-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: '30-day money-back guarantee',
        detail: 'Enough to import your vault and find out whether the apps suit you.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Import before you commit',
        body: 'The migration from your browser or old manager is the only real work. Do it inside the refund window.',
      },
      {
        title: 'Check what your platform already gives you',
        body: 'Apple and Google both ship credential managers now. A paid manager earns its money on cross-platform use and sharing, not on storage.',
      },
      {
        title: 'Family plan, not five singles',
        body: 'Six accounts on one subscription is dramatically cheaper and it is the version that actually gets used.',
      },
    ],
    facts: [
      { label: 'Owner', value: 'Nord Security' },
      { label: 'Free tier', value: 'Yes, one active device' },
      { label: 'Refund window', value: '30 days' },
      { label: 'Pricing', value: 'Two-year term; renews higher' },
    ],
    faq: [
      {
        q: 'Is NordPass better than my browser’s password manager?',
        a: 'For cross-platform use, sharing with family and breach monitoring, yes. For one person on one browser, the built-in manager is close enough that the subscription is hard to justify.',
      },
      {
        q: 'What happens to my passwords if I stop paying?',
        a: 'You drop to the free tier, which keeps the vault but limits you to one active device. Export before you cancel if you are moving elsewhere.',
      },
      {
        q: 'Does the renewal price go up?',
        a: 'Yes — the two-year headline is a first-term price. Diarise the renewal.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'keeper-security',
    name: 'Keeper Security',
    domain: 'keepersecurity.com',
    siteLabel: 'keepersecurity.com',
    badge: 'KP',
    color: '#B08A1A',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'Password manager priced per year, with the useful parts sold as add-ons.',
    about: [
      'Keeper is a long-established password manager with a strong business and enterprise side, which shows in the consumer product: granular sharing, emergency access, and compliance features most people will never open.',
      'The thing to understand before buying is the modular pricing. Encrypted file storage and dark-web monitoring are separate paid add-ons rather than parts of the base plan, and the bundle that includes them is the one most comparisons quote. Price the tier that contains what you actually want.',
    ],
    offers: [
      {
        id: 'keeper-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing on personal and family plans',
        detail: 'Billed yearly rather than monthly, which is where the rate drops.',
        terms: 'Auto-renews at the then-current rate.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'keeper-family',
        kind: 'deal',
        value: 'Bundle',
        title: 'Family plan with five vaults',
        detail: 'Per-person cost falls by more than half against the individual plan.',
        checked: CHECKED_R2,
      },
      {
        id: 'keeper-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of the paid tier',
        detail:
          'Long enough to import a vault and test the browser extension, which is where password managers are won and lost.',
        terms: 'Converts to a paid subscription unless cancelled.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy the tier, not the bundle, unless you need the add-ons',
        body: 'Storage and monitoring are separate line items here. Plenty of people pay for both and use neither.',
      },
      {
        title: 'Student and family discounts exist',
        body: 'Keeper runs verified discounts in several markets. Worth checking before paying list.',
      },
      {
        title: 'Export is your exit',
        body: 'Confirm the export format before committing a year. Portability is what keeps a subscription honest.',
      },
    ],
    facts: [
      { label: 'Coverage', value: 'Worldwide' },
      { label: 'Pricing', value: 'Annual, with paid add-ons' },
      { label: 'Family plan', value: 'Five vaults' },
      { label: 'Trial', value: 'Yes, auto-converting' },
    ],
    faq: [
      {
        q: 'Why is Keeper more expensive than it looked?',
        a: 'Because the commonly quoted price is the bundle including file storage and dark-web monitoring. The base password manager is cheaper; decide which one you actually want.',
      },
      {
        q: 'Is there a free version?',
        a: 'A limited free tier exists but it is restricted enough that most people treat the trial as the evaluation route instead.',
      },
      {
        q: 'Can I share passwords with my family?',
        a: 'Yes, and the sharing model is one of the better ones in the category — it is a large part of why the family plan is the tier worth buying.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'malwarebytes',
    name: 'Malwarebytes',
    domain: 'malwarebytes.com',
    siteLabel: 'malwarebytes.com',
    badge: 'MB',
    color: '#1F5CB0',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'The clean-up tool people already know, now sold as a subscription suite.',
    about: [
      'Malwarebytes made its name as the free on-demand scanner you ran when a machine was already infected, and that free scanner still exists and still does that job. The commercial product is now a full real-time suite with an optional VPN and identity monitoring on top.',
      'The distinction matters when you are deciding what to buy. The free scanner is a repair tool with no live protection; the paid tier is what replaces your antivirus. Plenty of people pay for the suite when what they wanted was the free clean-up, and plenty run the free version thinking they are protected.',
    ],
    offers: [
      {
        id: 'malwarebytes-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free on-demand scanner and clean-up',
        detail:
          'Finds and removes what is already on the machine. No real-time protection — it is a repair tool, not a shield.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'malwarebytes-firstyear',
        kind: 'deal',
        value: 'New customer',
        title: 'Discounted first year on the paid tiers',
        detail:
          'The usual introductory pricing on a new subscription, renewing at the standard rate.',
        terms: 'Auto-renews higher unless you turn renewal off.',
        checked: CHECKED_R2,
      },
      {
        id: 'malwarebytes-devices',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-device licences',
        detail: 'Per-device cost drops on the 3- and 5-device plans.',
        checked: CHECKED_R2,
      },
      {
        id: 'malwarebytes-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of the premium tier',
        detail: 'Turns real-time protection on for a fortnight so you can see what it adds.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Know which product you want',
        body: 'The famous free scanner and the paid suite are different things. Do not buy a subscription to solve a one-off infection.',
      },
      {
        title: 'Windows already has real-time protection',
        body: 'Defender scores respectably in the independent labs. Buy a suite for the extras and the interface, not because the machine is defenceless.',
      },
      {
        title: 'Cancel auto-renew at purchase',
        body: 'Same rule as the rest of the category: keep the term, stop the surprise.',
      },
    ],
    facts: [
      { label: 'Free product', value: 'On-demand scanner, no live protection' },
      { label: 'Paid tiers', value: 'Real-time protection, VPN, identity monitoring' },
      { label: 'Pricing', value: 'Discounted year one' },
      { label: 'Coverage', value: 'Worldwide' },
    ],
    faq: [
      {
        q: 'Is the free version of Malwarebytes enough?',
        a: 'As a clean-up tool, yes — it is very good at it. It does not protect you in real time, so it is not a replacement for an antivirus.',
      },
      {
        q: 'Can I run it alongside another antivirus?',
        a: 'The free scanner, generally yes. Two real-time engines at once is the configuration that causes problems.',
      },
      {
        q: 'Does the price go up at renewal?',
        a: 'Yes. The first year is an introductory rate, as everywhere in this category.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'f-secure',
    name: 'F-Secure',
    domain: 'f-secure.com',
    siteLabel: 'f-secure.com',
    badge: 'FS',
    color: '#1F7A6B',
    category: 'security',
    markets: 'Worldwide, strongest across the Nordics and Europe',
    blurb: 'Finnish security suite with an unusually clean privacy record.',
    about: [
      'F-Secure is a Finnish security company with a long history in consumer antivirus and a good showing in the independent labs. Its consumer line bundles malware protection with a VPN, a password manager, banking protection and identity monitoring under a single subscription.',
      'The reason to consider it over the American and Romanian majors is jurisdiction and restraint: an EU company under EU data law, and a product that pushes fewer upsells than most of the category. Pricing follows the standard first-year discount and renewal jump.',
    ],
    offers: [
      {
        id: 'fsecure-firstyear',
        kind: 'deal',
        value: 'New customer',
        title: 'Discounted first year on the total suite',
        detail: 'Introductory pricing on a new subscription; the renewal is at the standard rate.',
        terms: 'Auto-renews unless you turn it off.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'fsecure-devices',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-device and family licences',
        detail:
          'A single licence covering several devices costs far less than individual subscriptions.',
        checked: CHECKED_R2,
      },
      {
        id: 'fsecure-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial across the range',
        detail: 'A no-card trial in most markets, which is rarer than it should be.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare the suite against what you already pay for',
        body: 'It bundles a VPN and a password manager. If you subscribe to both separately, the total suite may be cheaper than the sum.',
      },
      {
        title: 'Check the price in your own market',
        body: 'F-Secure prices per country and the gap between neighbouring markets can be significant.',
      },
      {
        title: 'Diarise the renewal',
        body: 'The first year is the discount. Everything else in this category applies here too.',
      },
    ],
    facts: [
      { label: 'Base', value: 'Finland (EU)' },
      { label: 'Bundle', value: 'Antivirus, VPN, password manager, ID monitoring' },
      { label: 'Pricing', value: 'Discounted year one' },
      { label: 'Trial', value: 'Yes' },
    ],
    faq: [
      {
        q: 'How does F-Secure compare with Norton or Bitdefender?',
        a: 'Comparable detection, fewer upsells, and an EU jurisdiction. If where your security vendor is based matters to you, that is the difference worth paying for.',
      },
      {
        q: 'Is the bundled VPN any good?',
        a: 'Adequate for everyday privacy, not competitive with a dedicated provider on speed or server choice. Do not buy the suite for the VPN alone.',
      },
      {
        q: 'Are there F-Secure discount codes?',
        a: 'The site’s own first-year pricing is normally the best rate. Codes in this category tend to duplicate the campaign already running.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'adguard',
    name: 'AdGuard',
    domain: 'adguard.com',
    siteLabel: 'adguard.com',
    badge: 'AG',
    color: '#2A7A4A',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'Ad and tracker blocking with a lifetime licence — the rare one worth buying.',
    about: [
      'AdGuard blocks ads and trackers at the application and DNS level rather than only inside a browser, which is what lets it work in apps and on devices where an extension cannot reach. There is a free browser extension, a paid desktop and mobile app, and a DNS service.',
      'It is one of very few consumer software products still selling a genuine lifetime licence alongside the subscription, and on a tool you will keep running for years the lifetime option is usually the cheaper purchase. That is unusual enough to be the main thing worth knowing.',
    ],
    offers: [
      {
        id: 'adguard-lifetime',
        kind: 'deal',
        value: 'Long term',
        title: 'Lifetime licence instead of a subscription',
        detail:
          'A one-off payment for the app on a set number of devices. On a utility you will run indefinitely it pays back in a couple of years.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'adguard-family',
        kind: 'deal',
        value: 'Bundle',
        title: 'Family licence across nine devices',
        detail: 'Per-device cost falls sharply; it is the version most households should buy.',
        checked: CHECKED_R2,
      },
      {
        id: 'adguard-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free browser extension and public DNS',
        detail:
          'Covers browser ads at no cost. The paid app is for blocking inside other applications and on mobile.',
        checked: CHECKED_R2,
      },
      {
        id: 'adguard-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring seasonal sales',
        detail: 'AdGuard discounts several times a year, including on the lifetime licences.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Lifetime, on sale, family tier',
        body: 'Those three together are the cheapest way to own this software, and all three are available at once during the seasonal campaigns.',
      },
      {
        title: 'Try the free extension first',
        body: 'If browser ads were the whole problem, you may not need the paid app at all.',
      },
      {
        title: 'DNS blocking covers the devices apps cannot',
        body: 'Smart TVs and consoles take no extensions. The DNS service is how you reach them.',
      },
    ],
    facts: [
      { label: 'Licence types', value: 'Subscription or lifetime' },
      { label: 'Free tier', value: 'Browser extension and public DNS' },
      { label: 'Family licence', value: 'Up to nine devices' },
      { label: 'Coverage', value: 'Worldwide' },
    ],
    faq: [
      {
        q: 'Is the AdGuard lifetime licence really permanent?',
        a: 'It covers the app on the stated number of devices with no recurring charge. It is one of the last consumer software products still selling this way, which is why it is worth taking.',
      },
      {
        q: 'Do I need it if I already use a browser blocker?',
        a: 'Only if you want blocking inside apps, on mobile, or on devices where extensions cannot run. For browser-only use the free extension is enough.',
      },
      {
        q: 'When does AdGuard go on sale?',
        a: 'Several times a year around the usual retail events. Lifetime licences are included in the discounts, which is the moment to buy.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'qustodio',
    name: 'Qustodio',
    domain: 'qustodio.com',
    siteLabel: 'qustodio.com',
    badge: 'QS',
    color: '#B0451A',
    category: 'security',
    markets: 'UK, France, US, Canada and many other markets',
    blurb: 'Parental controls sold per family, per year — check what your phone already does.',
    about: [
      'Qustodio is a parental control service: screen-time limits, app and web filtering, location and activity reporting across a family’s devices, managed from one dashboard. It is one of the more capable products in a category where cross-platform coverage is the hard part.',
      'Before paying, it is worth knowing that Apple, Google and most consoles now ship free family controls that cover screen time, app limits and content filtering reasonably well. Qustodio earns its subscription on breadth — one dashboard across iOS, Android, Windows, Mac and Chromebook — rather than on doing something the platforms cannot.',
    ],
    offers: [
      {
        id: 'qustodio-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing below the monthly rate',
        detail: 'The standard discount on a subscription bought for a school year.',
        terms: 'Auto-renews at the then-current rate.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'qustodio-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier for a single device',
        detail:
          'Basic limits on one device. Enough to test the dashboard and decide whether the paid tier is worth it.',
        checked: CHECKED_R2,
      },
      {
        id: 'qustodio-family',
        kind: 'deal',
        value: 'Bundle',
        title: 'Family plans covering multiple devices',
        detail:
          'Priced per household rather than per child, so the cost per device falls as you add them.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Try the built-in controls first',
        body: 'Screen Time and Family Link are free and cover a lot. Pay for Qustodio when you hit their limits, not before.',
      },
      {
        title: 'Count the devices honestly',
        body: 'Plans are device-capped. A tablet, a laptop and two phones is four, and the tier below will not cover it.',
      },
      {
        title: 'Involve the child',
        body: 'Not a saving, but the practical one: covert monitoring gets discovered and circumvented. Agreed limits survive.',
      },
    ],
    facts: [
      { label: 'Platforms', value: 'iOS, Android, Windows, Mac, Chromebook' },
      { label: 'Free tier', value: 'Yes, one device' },
      { label: 'Pricing', value: 'Per household, annual' },
      { label: 'Alternative', value: 'Free platform controls from Apple and Google' },
    ],
    faq: [
      {
        q: 'Is Qustodio better than Apple Screen Time?',
        a: 'It is broader — one dashboard across every platform your family uses, with reporting the built-in tools do not offer. On an all-Apple household, Screen Time is free and may be enough.',
      },
      {
        q: 'Does it work on iPhone?',
        a: 'Yes, though iOS restricts what any third-party parental control can do. Expect the Android and desktop versions to be more capable.',
      },
      {
        q: 'Can my child uninstall it?',
        a: 'It is designed to resist that, and determined teenagers still find ways around every product in this category. Treat it as a tool for agreed limits rather than surveillance.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'clevguard',
    name: 'ClevGuard',
    domain: 'clevguard.com',
    siteLabel: 'clevguard.com',
    badge: 'CG',
    color: '#2A5C8A',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'Phone monitoring software — legal for your own child, illegal for anyone else.',
    about: [
      'ClevGuard sells phone monitoring software, marketed for parental supervision: message, call, location and app-activity reporting from a target device to a parent dashboard. It is technically capable and it is sold cheaply on multi-month plans.',
      'It needs a plain warning rather than a sales pitch. Installing monitoring software on a phone belonging to another adult — a partner, an ex, an employee on a personal device — without their knowledge and consent is a criminal offence in most jurisdictions, including the UK, the EU and most US states. Products in this class are routinely flagged as stalkerware by antivirus vendors, and the person being monitored is often notified by their own phone. We list the offer because it exists; we are not going to pretend the main use case is a nine-year-old.',
    ],
    offers: [
      {
        id: 'clevguard-longterm',
        kind: 'deal',
        value: 'Long term',
        title: 'Quarterly and annual plans below the monthly rate',
        detail:
          'The per-month cost falls steeply on the longer terms, which is how the product is sold.',
        terms: 'Auto-renews at the then-current rate unless cancelled.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'clevguard-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free anti-spyware scanner',
        detail:
          'The company also publishes a free tool for detecting monitoring software on your own phone. If you are here because you think something is installed on yours, that is the product to look at.',
        checked: CHECKED_R2,
      },
      {
        id: 'clevguard-refund',
        kind: 'deal',
        value: 'Refund',
        title: 'Money-back window on new purchases',
        detail: 'A refund period applies to new subscriptions under the vendor’s current policy.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the law where you live first',
        body: 'Consent requirements differ by country and by US state, and the penalties for getting it wrong are criminal rather than commercial.',
      },
      {
        title: 'For a child, compare the mainstream parental controls',
        body: 'Qustodio, Apple Screen Time and Google Family Link do the legitimate version of this job, openly, and two of them are free.',
      },
      {
        title: 'Assume it will be found',
        body: 'Modern phones surface unfamiliar profiles, permissions and battery use, and antivirus tools flag this software class by name.',
      },
    ],
    facts: [
      { label: 'Category', value: 'Phone monitoring / parental control' },
      {
        label: 'Legality',
        value: 'Consent required — criminal offence without it in most jurisdictions',
      },
      { label: 'Pricing', value: 'Monthly, quarterly or annual; renews automatically' },
      { label: 'Also offers', value: 'A free scanner for detecting spyware on your own phone' },
    ],
    faq: [
      {
        q: 'Is it legal to use ClevGuard?',
        a: 'On a device you own and a minor child you are responsible for, generally yes, subject to local law. On another adult’s phone without their consent, no — it is a criminal offence in most jurisdictions and no vendor’s terms of service change that.',
      },
      {
        q: 'Will the person know it is installed?',
        a: 'Often, yes. Phones surface unfamiliar configuration profiles and permissions, battery and data use change, and antivirus products flag this class of software.',
      },
      {
        q: 'I think this is on my phone. What do I do?',
        a: 'Run an anti-spyware scan, review installed profiles and device-admin permissions, change your passwords from a different device, and consider a factory reset. If you are at risk from the person who installed it, a domestic-abuse support service can help you plan that safely.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'multilogin',
    name: 'Multilogin',
    domain: 'multilogin.com',
    siteLabel: 'multilogin.com',
    badge: 'ML',
    color: '#3A3F8A',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'Anti-detect browser for running many accounts — a professional tool, priced like one.',
    about: [
      'Multilogin is an anti-detect browser: it creates isolated browser profiles with distinct fingerprints, cookies and proxies so that many accounts can be operated from one machine without being linked. Its legitimate users are affiliate and performance-marketing teams, e-commerce sellers managing multiple storefronts, ad agencies running client accounts, and web-scraping and QA operations.',
      'It is expensive by consumer standards because it is not a consumer product — plans are priced per seat and per profile count, and the cost scales with how many identities you keep. Worth stating plainly: platforms prohibit multi-accounting in their own terms, so this tool manages a risk rather than removing it, and the accounts remain suspendable.',
    ],
    offers: [
      {
        id: 'multilogin-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing below twelve monthly payments',
        detail: 'The main discount. On a tool a team uses daily, the annual commitment is routine.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'multilogin-tier',
        kind: 'deal',
        value: 'Bundle',
        title: 'Buy the tier by profile count, not by feature list',
        detail:
          'Pricing scales with stored profiles and team seats. Sizing the plan to the number you actually keep is the largest saving available.',
        checked: CHECKED_R2,
      },
      {
        id: 'multilogin-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Trial or entry tier to test the workflow',
        detail:
          'Fingerprinting behaves differently against different platforms. Test against the sites you actually use before committing a year.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Proxies are a separate cost',
        body: 'The browser does not include them, and residential proxies are frequently the larger line on the bill. Budget both together.',
      },
      {
        title: 'Right-size the profile count',
        body: 'Teams routinely buy a tier for a peak they hit twice a year. Archive dormant profiles and drop a tier.',
      },
      {
        title: 'Know the platform rules you are working under',
        body: 'Multi-accounting breaches most platforms’ terms. This tool reduces linkage; it does not make the accounts compliant.',
      },
    ],
    facts: [
      { label: 'Category', value: 'Anti-detect browser, multi-account management' },
      { label: 'Priced by', value: 'Team seats and stored profiles' },
      { label: 'Extra cost', value: 'Proxies, bought separately' },
      { label: 'Caveat', value: 'Multi-accounting breaches most platform terms' },
    ],
    faq: [
      {
        q: 'What is Multilogin actually for?',
        a: 'Running many browser identities from one machine without them being fingerprinted as the same user — affiliate and ad teams, multi-storefront sellers, scraping and QA.',
      },
      {
        q: 'Why is it so expensive?',
        a: 'It is a business tool priced per seat and per profile. If you are a single person with two accounts, this is not the product you need.',
      },
      {
        q: 'Does it guarantee my accounts stay open?',
        a: 'No. It reduces the chance of accounts being linked by fingerprint. Platforms still prohibit multi-accounting and still suspend accounts for it.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'hidemy-name',
    name: 'HideMy.name',
    domain: 'hide.mn',
    siteLabel: 'hide.mn',
    badge: 'HMN',
    color: '#2A6B8A',
    category: 'security',
    markets: 'Worldwide',
    blurb: 'Budget VPN and proxy service sold on short, cheap terms.',
    about: [
      'HideMy.name sells a VPN alongside a proxy list and a few free network tools. It sits at the cheap, no-frills end of the market: fewer servers than the majors, a simpler client, and pricing that goes down to very short terms rather than pushing a two-year commitment.',
      'That short-term pricing is genuinely the differentiator. If you need a VPN for one trip or one month rather than as a standing subscription, most of the mainstream providers punish you for it; this one does not. What you give up is the audit history, the app polish and the server footprint of the larger names.',
    ],
    offers: [
      {
        id: 'hidemyname-short',
        kind: 'deal',
        value: 'Long term',
        title: 'Short-term plans priced sensibly',
        detail:
          'Weekly and monthly options that are not punitively priced against the annual rate — unusual in this category and the reason to look at it.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'hidemyname-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual and multi-year terms for the lowest rate',
        detail: 'The usual curve: the longer the term, the lower the monthly figure.',
        terms: 'Check whether the plan renews automatically at signup.',
        checked: CHECKED_R2,
      },
      {
        id: 'hidemyname-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Short free trial before paying',
        detail:
          'Enough to check the speed on your own connection, which is the only test that matters.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy the term you need, not the cheapest per month',
        body: 'This is one of the few VPNs where a one-month purchase is reasonable. If the need is a two-week trip, buy two weeks.',
      },
      {
        title: 'Test before the trip, not during it',
        body: 'Install and connect while you still have unrestricted internet. Downloading a VPN from behind a block is much harder.',
      },
      {
        title: 'Check what you are getting for the price',
        body: 'The budget end of this market varies enormously. Compare the server list and the logging policy, not just the monthly figure.',
      },
    ],
    facts: [
      { label: 'Products', value: 'VPN, proxy list, free network tools' },
      { label: 'Positioning', value: 'Budget, short terms available' },
      { label: 'Trial', value: 'Yes, short' },
      { label: 'Coverage', value: 'Worldwide' },
    ],
    faq: [
      {
        q: 'Is HideMy.name a good VPN?',
        a: 'It is a cheap one with reasonable short-term pricing. It does not have the audit history or the server footprint of the premium providers, and if you are buying a VPN for serious privacy reasons that gap is the thing to weigh.',
      },
      {
        q: 'Can I buy it for just one month?',
        a: 'Yes, and that is the main reason to consider it — most of the category prices short terms punitively.',
      },
      {
        q: 'Does it keep logs?',
        a: 'Read the current policy on the provider’s own site before buying. In this part of the market the policy is the product, and it is short enough to read.',
      },
    ],
    updated: CHECKED_R2,
  },
]
