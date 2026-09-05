/**
 * Books, music & streaming.
 *
 * ⚠️ Working values written from the merchants' public pages; re-check before a
 * campaign. Subscription pricing and regional catalogues in this category move
 * constantly. See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-26'

export const mediaStores: Store[] = [
  {
    slug: 'disney-plus',
    name: 'Disney+',
    domain: 'disneyplus.com',
    siteLabel: 'disneyplus.com',
    badge: 'D+',
    color: '#113CCF',
    category: 'media',
    markets: 'Most of Europe and beyond — catalogue and price differ by country',
    blurb: 'Streaming where the annual plan and the ad tier are the only real discounts.',
    about: [
      'Disney+ is the studio’s own streaming service, carrying Disney, Pixar, Marvel, Star Wars and — in most territories — the general-entertainment Star catalogue. Pricing is set per country and so is the library: the show you subscribed for may simply not exist in your region.',
      'It does not run a coupon economy. The discounts are structural: an ad-supported tier well below the ad-free one, annual billing at roughly ten months for twelve, and periodic win-back offers to lapsed subscribers. The one lever people forget is that this is a month-to-month service you can leave and rejoin — bingeing a season in one paid month is entirely legitimate.',
    ],
    offers: [
      {
        id: 'disneyplus-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual plan at roughly ten months for twelve',
        detail:
          'The standing discount. Worth it only if you will keep it all year, which most subscribers do not.',
        terms: 'Auto-renews at the then-current annual rate.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'disneyplus-ads',
        kind: 'deal',
        value: 'Long term',
        title: 'Ad-supported tier well below ad-free',
        detail:
          'Same catalogue, lower price, with advertising. In most markets it is the cheapest legitimate way in.',
        checked: CHECKED,
      },
      {
        id: 'disneyplus-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Telco and broadband bundles',
        detail:
          'Several carriers include or discount Disney+ with a phone or broadband plan. Check what you are already entitled to before subscribing directly.',
        checked: CHECKED,
      },
      {
        id: 'disneyplus-winback',
        kind: 'deal',
        value: 'New customer',
        title: 'Win-back offers to lapsed subscribers',
        detail:
          'Cancelling and waiting frequently produces a discounted return offer by email. That is a real pattern, not a trick.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Subscribe for the season, not the year',
        body: 'There is no penalty for leaving and coming back. One paid month per series you actually want is far cheaper than twelve.',
      },
      {
        title: 'Check your mobile and broadband plan first',
        body: 'Streaming is bundled into carrier plans in many markets. People pay twice for this more often than for anything else on this site.',
      },
      {
        title: 'Catalogues are regional',
        body: 'A title in the US library may be absent in yours. Confirm the specific show is available where you live before you pay.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Most of Europe and beyond, priced per country' },
      { label: 'Tiers', value: 'Ad-supported and ad-free' },
      { label: 'Discount lever', value: 'Annual billing' },
      { label: 'Commitment', value: 'None — month-to-month' },
    ],
    faq: [
      {
        q: 'Is there a Disney+ free trial?',
        a: 'Not routinely any more in most markets. The ad-supported tier is the cheap entry point instead, and win-back offers go to lapsed accounts.',
      },
      {
        q: 'Is the annual plan worth it?',
        a: 'If you genuinely watch all year, yes — it is about two months free. If you subscribe for one series at a time, monthly is cheaper.',
      },
      {
        q: 'Why can I not find a show that exists elsewhere?',
        a: 'Rights are sold per territory, so the catalogue differs by country. Using a VPN to get around that breaches the terms of service.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'amazon-music',
    name: 'Amazon Music',
    domain: 'amazon.com',
    siteLabel: 'amazon.com',
    badge: 'AM',
    color: '#1F7A8C',
    category: 'media',
    markets: 'US, UK, Germany, Australia and many other Amazon markets',
    blurb: 'Music streaming where a Prime membership you already have changes the price.',
    about: [
      'Amazon Music comes in several tiers that are easy to confuse: a limited catalogue included with Prime, a full Unlimited subscription, a cheaper single-device Echo plan, and a family plan. Which one you should buy depends almost entirely on whether you already pay for Prime.',
      'That is the whole discount story. Prime members get Unlimited at a lower rate than non-members, the annual option prices at roughly ten months for twelve, and the student rate is a genuine long-running discount. There is no coupon layer on top of any of it.',
    ],
    offers: [
      {
        id: 'amazonmusic-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of Unlimited for new subscribers',
        detail: 'Standard in most markets, converting to the paid tier automatically.',
        terms: 'Requires a payment method and renews unless cancelled.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'amazonmusic-prime',
        kind: 'deal',
        value: 'Member',
        title: 'Lower Unlimited rate for Prime members',
        detail:
          'If you already pay for Prime, you are entitled to a cheaper rate than the one advertised to everyone else.',
        checked: CHECKED,
      },
      {
        id: 'amazonmusic-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing at roughly ten months for twelve',
        detail: 'Available to Prime members in most markets.',
        checked: CHECKED,
      },
      {
        id: 'amazonmusic-student',
        kind: 'deal',
        value: 'Student',
        title: 'Verified student rate',
        detail: 'A long-running discount for students, roughly half the standard individual price.',
        terms: 'Requires verification and re-verification each year.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Work out which tier you are actually on',
        body: 'Prime includes a limited catalogue that many people mistake for Unlimited. Check before paying for something you may already have.',
      },
      {
        title: 'Family plan for two or more listeners',
        body: 'Two individual subscriptions cost more than one family plan almost everywhere.',
      },
      {
        title: 'The Echo-only plan is cheap for a reason',
        body: 'It plays on one device. Fine for a kitchen speaker, useless as your main subscription.',
      },
    ],
    facts: [
      { label: 'Tiers', value: 'Prime-included, Unlimited, single-device, family' },
      { label: 'Discount levers', value: 'Prime membership, annual billing, student rate' },
      { label: 'Trial', value: 'Yes, auto-converting' },
      { label: 'Markets', value: 'Most Amazon countries, priced locally' },
    ],
    faq: [
      {
        q: 'Do I get Amazon Music free with Prime?',
        a: 'You get a limited version — a smaller catalogue with restrictions. Unlimited is a separate paid subscription, discounted for Prime members.',
      },
      {
        q: 'Is the student discount real?',
        a: 'Yes, and it is one of the larger standing discounts in streaming. It needs verification and re-verification each year.',
      },
      {
        q: 'Can I cancel after the trial?',
        a: 'Yes, from your account settings, effective at the end of the paid period. Set a reminder — the trial converts silently.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'audible',
    name: 'Audible',
    domain: 'audible.it',
    siteLabel: 'audible.it',
    badge: 'AU',
    color: '#F8991C',
    category: 'media',
    markets: 'Italy, Germany, Spain and France for this storefront',
    blurb: 'Audiobooks by credit — and the credits you have not spent are the thing to watch.',
    about: [
      'Audible is Amazon’s audiobook service. In most European markets it sells a monthly membership that includes a credit good for one title plus a listening catalogue, and the credits are yours to keep and spend when you like — up to an expiry window.',
      'The pricing mechanics are a free trial, annual membership at a lower monthly rate, and periodic win-back offers. The trap is the opposite of most subscriptions: people accumulate unspent credits and then cancel, losing them. Spend down before you leave.',
    ],
    offers: [
      {
        id: 'audible-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial with a credit included',
        detail:
          'A month free with a credit to spend, in most markets. The book you buy with it is yours permanently even if you cancel.',
        terms: 'Converts to a paid membership unless cancelled before the trial ends.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'audible-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual membership below twelve monthly payments',
        detail: 'A block of credits bought up front at a lower per-credit price.',
        checked: CHECKED,
      },
      {
        id: 'audible-winback',
        kind: 'deal',
        value: 'New customer',
        title: 'Win-back offers to lapsed members',
        detail:
          'Discounted returns are offered to cancelled accounts regularly. Worth knowing before you resubscribe at full price.',
        checked: CHECKED,
      },
      {
        id: 'audible-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Catalogue sales on individual titles',
        detail:
          'Two-for-one credit promotions and heavily discounted individual purchases run several times a year.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Spend your credits before you cancel',
        body: 'Unspent credits are lost when the membership ends. This is the single most common way people lose money on Audible.',
      },
      {
        title: 'Books bought with a credit are permanent',
        body: 'They stay in your library after you cancel. Membership buys access to the listening catalogue; the credit purchases are yours.',
      },
      {
        title: 'Check your library first',
        body: 'Public library apps lend audiobooks free in most countries. For occasional listening that beats any membership.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'Italy (audible.it); separate sites for DE, ES, FR' },
      { label: 'Model', value: 'Monthly credit plus a listening catalogue' },
      { label: 'Trial', value: 'Yes, with a credit' },
      { label: 'Watch out for', value: 'Unspent credits are lost at cancellation' },
    ],
    faq: [
      {
        q: 'Do I keep my audiobooks if I cancel Audible?',
        a: 'Titles you bought with a credit or with money, yes — permanently. Anything you were only listening to through the included catalogue, no.',
      },
      {
        q: 'Is the annual membership cheaper?',
        a: 'Per credit, yes, meaningfully. It only helps if you actually listen to a book a month.',
      },
      {
        q: 'Can I use a credit on any book?',
        a: 'On most, but not all — some titles are purchase-only. The listing says which before you commit the credit.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'abebooks',
    name: 'AbeBooks',
    domain: 'abebooks.com',
    siteLabel: 'abebooks.com',
    badge: 'AB',
    color: '#B03A1A',
    category: 'media',
    markets: 'Worldwide — a marketplace of independent sellers who each ship their own stock',
    blurb: 'Used and rare books from independent sellers — shipping is the number to watch.',
    about: [
      'AbeBooks is a marketplace where independent booksellers list used, rare and out-of-print books alongside new stock. It is the best place on the internet to find a specific edition of something nobody reprints, and it is owned by Amazon.',
      'Because every order ships from an individual bookshop, the mechanics are unlike a normal retailer: prices are set per seller, shipping is charged per seller, and two books in one basket are two parcels. A £4 book with £12 international postage is not a bargain, which makes the delivered total — not the listed price — the only figure worth comparing.',
    ],
    offers: [
      {
        id: 'abebooks-used',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare every seller’s delivered price',
        detail:
          'The same edition is often listed by a dozen sellers at very different prices and postage. Sorting by total delivered cost is the whole skill here.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'abebooks-local',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Buy from a seller in your own country',
        detail:
          'Domestic postage is a fraction of international, and it avoids customs entirely. Filter by seller location before you filter by price.',
        checked: CHECKED,
      },
      {
        id: 'abebooks-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal promotions and coupon campaigns',
        detail:
          'AbeBooks runs periodic site-wide codes, which is unusual for a marketplace and genuinely applies.',
        checked: CHECKED,
      },
      {
        id: 'abebooks-textbooks',
        kind: 'deal',
        value: 'Student',
        title: 'Used textbooks against new prices',
        detail:
          'The saving on an academic text one edition behind the current one is enormous, and the content usually barely differs.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Read the condition note, not the grade',
        body: 'Sellers write a free-text description. "Ex-library, spine cracked" tells you more than "Good" ever will.',
      },
      {
        title: 'One seller, several books',
        body: 'Shipping is per seller. If a bookshop has two of the things on your list, buying both together halves the postage.',
      },
      {
        title: 'Check the edition and the ISBN',
        body: 'For textbooks and translations the edition matters. The ISBN is the only reliable identifier.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Marketplace of independent booksellers' },
      { label: 'Owner', value: 'Amazon' },
      { label: 'Shipping', value: 'Charged per seller — baskets split into parcels' },
      { label: 'Strength', value: 'Out-of-print, rare and academic titles' },
    ],
    faq: [
      {
        q: 'Is AbeBooks cheaper than Amazon?',
        a: 'On used, rare and out-of-print books, frequently and substantially. On current bestsellers, usually not.',
      },
      {
        q: 'Why is postage so expensive?',
        a: 'Because a real bookshop is posting you a physical parcel, often from another country. Filter to sellers in your own country and the problem mostly disappears.',
      },
      {
        q: 'What if the book is not as described?',
        a: 'AbeBooks operates a buyer guarantee covering non-delivery and significant misdescription. Raise it through the platform rather than with the seller alone.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'sheet-music-plus',
    name: 'Sheet Music Plus',
    domain: 'sheetmusicplus.com',
    siteLabel: 'sheetmusicplus.com',
    badge: 'SMP',
    color: '#1F4E7A',
    category: 'media',
    markets: 'Worldwide, shipping printed music internationally from the US',
    blurb: 'The big sheet-music catalogue — buy the download, not the parcel.',
    about: [
      'Sheet Music Plus is one of the largest sheet-music retailers, carrying printed editions, digital downloads and self-published arrangements across classical, choral, jazz and popular repertoire.',
      'The important choice is print versus digital. A printed edition shipped from the US to Europe carries postage that frequently exceeds the music, and takes weeks; the same edition as an instant download costs less and arrives immediately. Printed parts still matter for ensembles and for anything you will annotate, which is why both exist.',
    ],
    offers: [
      {
        id: 'smp-digital',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Digital downloads instead of printed parcels',
        detail:
          'Cheaper than print, instant, and no international postage. For a single player this is almost always the right purchase.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'smp-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring site-wide sales',
        detail:
          'Percentage events run several times a year across the printed catalogue. Worth timing a large ensemble order around.',
        checked: CHECKED,
      },
      {
        id: 'smp-membership',
        kind: 'deal',
        value: 'Member',
        title: 'Membership with free shipping and standing discounts',
        detail:
          'A paid tier that removes shipping and discounts orders. It pays back quickly for a teacher or a choir librarian ordering regularly.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check the public domain first',
        body: 'Most pre-1930 classical repertoire is freely and legally available from public-domain score libraries. Pay for modern editions and arrangements, not for Bach.',
      },
      {
        title: 'Consolidate an ensemble order',
        body: 'One parcel of parts costs far less to ship than five. Collect the whole programme before ordering.',
      },
      {
        title: 'Digital licences are per-copy',
        body: 'A download for a choir usually needs multiple licensed copies. Read what the licence covers before printing twenty.',
      },
    ],
    facts: [
      { label: 'Ships from', value: 'United States, worldwide' },
      { label: 'Formats', value: 'Printed editions and instant digital downloads' },
      { label: 'Membership', value: 'Paid tier with free shipping' },
      { label: 'Watch out for', value: 'International postage on printed music' },
    ],
    faq: [
      {
        q: 'Should I buy print or digital?',
        a: 'Digital for a single player: cheaper, instant, no postage. Print for ensembles, for anything you will mark up heavily, and where a specific edition’s layout matters.',
      },
      {
        q: 'How much is international shipping?',
        a: 'Enough to change the decision. On a single piece of music it frequently exceeds the price of the music itself.',
      },
      {
        q: 'Can I print a digital purchase for my whole choir?',
        a: 'Only if you buy the number of copies the licence requires. Copying one download for twenty singers breaches it.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'zavvi',
    name: 'Zavvi',
    domain: 'zavvi.com',
    siteLabel: 'zavvi.com',
    badge: 'ZV',
    color: '#1A1A1A',
    category: 'media',
    markets: 'UK, Germany, France, Canada and the US',
    blurb: 'Film, gaming and pop-culture merch, discounted almost continuously.',
    about: [
      'Zavvi sells collector-edition Blu-rays and steelbooks, gaming merchandise, clothing and pop-culture collectibles across a handful of country storefronts. It is part of a large UK online retail group, which shows in how it prices.',
      'Discounting here is close to permanent: site-wide percentage events, multibuy mechanics on films and clothing, and a heavily promoted mailing list. Pre-orders on limited steelbooks are the exception — those hold their price and then sell out, so the discipline is the opposite of everything else on the site.',
    ],
    offers: [
      {
        id: 'zavvi-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Near-continuous site-wide percentage events',
        detail:
          'There is almost always a campaign running. Buying between them is paying an anchor price nobody else pays.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'zavvi-multibuy',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multibuy on films, clothing and merchandise',
        detail: '"3 for" mechanics on Blu-rays and t-shirts price well below the individual items.',
        checked: CHECKED,
      },
      {
        id: 'zavvi-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Newsletter signup discount',
        detail: 'A first-order percentage for new subscribers on the storefront you sign up on.',
        checked: CHECKED,
      },
      {
        id: 'zavvi-preorder',
        kind: 'deal',
        value: 'Sale',
        title: 'Pre-order price promise on limited editions',
        detail:
          'Pre-orders are charged at the lowest price between order and release. It is the exception to waiting for a sale, because limited steelbooks sell out rather than discount.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Never buy at the listed price',
        body: 'If nothing is running today, something will be within a fortnight. Wishlist and wait.',
      },
      {
        title: 'Pre-order the limited editions, wait on everything else',
        body: 'Exclusive steelbooks appreciate; standard stock discounts. Treat them as two different shops.',
      },
      {
        title: 'Check the delivery estimate on pre-orders',
        body: 'Release dates slip and Zavvi ships on the date, not before. If it is a gift, allow for that.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'UK, DE, FR, CA, US' },
      { label: 'Catalogue', value: 'Film, gaming, merch, clothing, collectibles' },
      { label: 'Pre-orders', value: 'Charged at the lowest price before release' },
      { label: 'Discounting', value: 'Near-continuous' },
    ],
    faq: [
      {
        q: 'Are Zavvi discount codes real?',
        a: 'Yes — this is a catalogue discounted almost permanently. The question is usually whether a bigger site-wide event is about to start.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Longer than a domestic retailer, especially on international orders and pre-orders. Check the estimate before buying for an occasion.',
      },
      {
        q: 'Do codes apply to pre-orders?',
        a: 'Often not on exclusive editions. Those are protected by the price promise instead, which is usually the better deal anyway.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'the-hindu',
    name: 'The Hindu',
    domain: 'thehindu.com',
    siteLabel: 'thehindu.com',
    badge: 'TH',
    color: '#1F4E5F',
    category: 'media',
    markets: 'India primarily, with international digital subscriptions',
    blurb: 'Indian daily newspaper — annual billing and the student rate are the offers.',
    about: [
      'The Hindu is one of India’s major English-language daily newspapers, with a digital subscription covering the e-paper, the website and its long-running civil-service exam preparation material — which is a large part of why people subscribe.',
      'News subscriptions discount in three predictable ways and no others: an introductory rate for the first term, annual billing well below twelve monthly payments, and a student or exam-aspirant rate. Print plus digital bundles exist within India. There is no coupon layer.',
    ],
    offers: [
      {
        id: 'thehindu-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual digital subscription below monthly billing',
        detail: 'The standard discount, and the largest one available on a subscription you keep.',
        terms: 'Auto-renews at the standard rate after the introductory term.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'thehindu-intro',
        kind: 'deal',
        value: 'New customer',
        title: 'Introductory rate for new subscribers',
        detail:
          'A discounted first term. As everywhere in publishing, the renewal is at the standard price.',
        checked: CHECKED,
      },
      {
        id: 'thehindu-student',
        kind: 'deal',
        value: 'Student',
        title: 'Student and exam-aspirant pricing',
        detail:
          'A reduced rate for students, bundled with the civil-service preparation material the paper is known for.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Diarise the renewal',
        body: 'Introductory news pricing is the steepest discount in the category and the renewal is the steepest jump.',
      },
      {
        title: 'Check what the free tier still gives you',
        body: 'A number of articles remain readable without a subscription. If you read three a week, that may be enough.',
      },
      {
        title: 'The exam material is the reason to pay',
        body: 'If you are preparing for the civil-service exams, that bundle is the value. If you just want the news, price it against the free tier.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India, with international digital access' },
      { label: 'Includes', value: 'Website, e-paper, exam preparation material' },
      { label: 'Discount levers', value: 'Annual billing, introductory rate, student pricing' },
      { label: 'Renewal', value: 'Automatic at the standard rate' },
    ],
    faq: [
      {
        q: 'Can I subscribe from outside India?',
        a: 'The digital subscription is available internationally. Print delivery is domestic.',
      },
      {
        q: 'Is the student discount worth applying for?',
        a: 'Yes — it is a substantial reduction and the exam-preparation bundle it includes is the main reason students subscribe at all.',
      },
      {
        q: 'Does the price go up after the first year?',
        a: 'Yes. The introductory rate covers the first term only, and renewal is automatic.',
      },
    ],
    updated: CHECKED,
  },
]
