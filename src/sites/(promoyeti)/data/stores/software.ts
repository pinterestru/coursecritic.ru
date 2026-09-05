/**
 * Software & subscriptions.
 *
 * ⚠️ Working values written from the vendors' public pages; re-check before a
 * campaign. Promotional pricing in this category moves monthly, and the gap
 * between the first-term price and the renewal is the whole story — never quote
 * a first-term figure without the renewal beside it. See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-25'
/** Rounds 2–3 pass, checked a day after the first batch. Two constants
 *  rather than one because re-dating the originals would be a claim we
 *  did not earn — nobody re-read their pages on the later date. */
const CHECKED_R2 = '2026-08-26'

export const softwareStores: Store[] = [
  {
    slug: 'wondershare',
    name: 'Wondershare',
    domain: 'wondershare.com',
    siteLabel: 'wondershare.com',
    badge: 'WS',
    color: '#2A5CA8',
    category: 'software',
    markets: 'Worldwide',
    blurb:
      'Creative and utility software with a perpetual-versus-subscription choice worth making.',
    about: [
      'Wondershare publishes a broad range of consumer software — Filmora for video editing, PDFelement, Recoverit, Dr.Fone and others — sold direct with frequent promotions.',
      'The decision that matters here is licence type. Most products offer both a subscription and a perpetual licence for a specific major version, and the perpetual is often the better buy for occasional use even though the subscription is pushed harder. Discounts are continuous and seasonal, so paying list price is unnecessary.',
    ],
    offers: [
      {
        id: 'wondershare-seasonal',
        kind: 'deal',
        value: 'Bundle',
        title: 'Frequent seasonal and bundle promotions',
        detail:
          'The catalogue is discounted most of the year. If nothing is running today, something usually is within a fortnight.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'wondershare-perpetual',
        kind: 'deal',
        value: 'Long term',
        title: 'Perpetual licence instead of a subscription',
        detail:
          'A one-off payment for the current major version. For occasional use it is cheaper within two years than the annual plan.',
        terms: 'A perpetual licence does not include the next major version.',
        checked: CHECKED,
      },
      {
        id: 'wondershare-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial with watermarked output',
        detail:
          'Enough to confirm the software does the job before paying. The watermark is the only limitation on most products.',
        checked: CHECKED,
      },
      {
        id: 'wondershare-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-product bundles',
        detail:
          'Buying two Wondershare products together is priced well below the pair separately.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Decide subscription versus perpetual before looking at price',
        body: 'They are different products. Occasional users almost always want perpetual; professionals updating yearly want the subscription.',
      },
      {
        title: 'Check the free alternatives first',
        body: 'For simple video trimming or PDF merging, free tools do the job. Buy when you hit their limit, not before.',
      },
      {
        title: 'Watch the auto-renewal on annual plans',
        body: 'Subscriptions renew at the standard rate. If you bought on a promotion, the second year is not the same price.',
      },
    ],
    facts: [
      { label: 'Products', value: 'Filmora, PDFelement, Recoverit, Dr.Fone and others' },
      { label: 'Licence types', value: 'Subscription or perpetual, per product' },
      { label: 'Trial', value: 'Free, with watermarked output' },
      { label: 'Discounting', value: 'Near-continuous' },
    ],
    faq: [
      {
        q: 'Is the perpetual licence really permanent?',
        a: 'For the major version you bought, yes. The next major version is a separate purchase, usually at an upgrade price.',
      },
      {
        q: 'Do Wondershare coupon codes work?',
        a: 'Yes, and the site frequently runs its own campaign that is larger than any third-party code. Compare before typing.',
      },
      {
        q: 'Does the trial watermark come off if I buy later?',
        a: 'You re-export after activating the licence. The project file is unaffected — you do not lose the work.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'cloudways',
    name: 'Cloudways',
    domain: 'cloudways.com',
    siteLabel: 'cloudways.com',
    badge: 'CW',
    color: '#1F4E8A',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Managed cloud hosting billed hourly — the discount is the first months.',
    about: [
      'Cloudways is a managed hosting layer over cloud infrastructure providers: you pick a provider and a server size, and Cloudways handles the stack, updates, caching and backups. It sits between cheap shared hosting and running your own server.',
      'Billing is hourly with a monthly cap, which is unusual and useful — you can spin a server up to test and destroy it the same day for a few cents. Promotions are typically a percentage off the first months or free credit, not a permanently lower rate, so price the ongoing cost rather than the promotion.',
    ],
    offers: [
      {
        id: 'cloudways-intro',
        kind: 'deal',
        value: 'Free trial',
        title: 'Introductory discount or credit on the first months',
        detail:
          'The standing acquisition offer. It covers the trial period comfortably; the ongoing rate is what you are really buying.',
        terms: 'Applies to the first billing periods only.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'cloudways-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial without a card in most cases',
        detail:
          'Enough to migrate a site and benchmark it before committing. That is the honest way to evaluate hosting.',
        checked: CHECKED,
      },
      {
        id: 'cloudways-migration',
        kind: 'deal',
        value: 'Free setup',
        title: 'Free site migration',
        detail:
          'Cloudways migrates an existing site for you. The value is not the money — it is not breaking the site.',
        checked: CHECKED,
      },
      {
        id: 'cloudways-hourly',
        kind: 'deal',
        value: 'Long term',
        title: 'Hourly billing — pay only for what runs',
        detail:
          'Test on a large server for an afternoon and pay for the afternoon. Very few hosts allow this.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Right-size after launch, not before',
        body: 'Hourly billing means you can start small and resize when the traffic proves it is needed. Overprovisioning from day one is the common waste.',
      },
      {
        title: 'Add-ons are billed separately',
        body: 'Backups, staging and e-mail are line items on top of the server. Price the full stack you will run.',
      },
      {
        title: 'Compare the underlying providers',
        body: 'The same managed layer over different cloud providers has different base costs. The cheapest is not always the fastest for your audience’s region.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Managed hosting over third-party cloud providers' },
      { label: 'Billing', value: 'Hourly, capped monthly' },
      { label: 'Migration', value: 'Free assisted migration' },
      { label: 'Extras', value: 'Backups, staging and e-mail billed separately' },
    ],
    faq: [
      {
        q: 'Is Cloudways cheaper than shared hosting?',
        a: 'No, and it is not meant to be. It is cheaper than managed WordPress hosting at equivalent performance, and far cheaper than paying someone to run a server for you.',
      },
      {
        q: 'Do promo codes give an ongoing discount?',
        a: 'Almost never. They discount the first months. Base your decision on the standing rate.',
      },
      {
        q: 'What happens after the promotional period?',
        a: 'You pay the normal hourly rate for the server size you are running. There is no contract, so you can resize or leave.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'getresponse',
    name: 'GetResponse',
    domain: 'getresponse.com',
    siteLabel: 'getresponse.com',
    badge: 'GR',
    color: '#1F6B4A',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Email marketing priced per contact — the annual term is the discount.',
    about: [
      'GetResponse is an email marketing and automation platform with landing pages, webinars and simple funnels attached. It competes with the larger US platforms mainly on price at mid-sized list volumes.',
      'Pricing scales with your contact count, which is the number to watch: a plan that looks cheap at 1,000 contacts is a different proposition at 25,000. The discount lever is the billing term — annual and two-year commitments cut the monthly rate substantially — plus a free tier that is genuinely usable for a small list.',
    ],
    offers: [
      {
        id: 'getresponse-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual and two-year billing at a reduced monthly rate',
        detail:
          'The main discount. On a tool you will keep for years, the longer commitment is straightforwardly cheaper.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'getresponse-free',
        kind: 'deal',
        value: 'New customer',
        title: 'Free plan for a small contact list',
        detail:
          'Enough to run a real newsletter at low volume. Start here and upgrade when the list forces it.',
        checked: CHECKED,
      },
      {
        id: 'getresponse-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of the paid features',
        detail: 'Test the automation builder before committing to a term.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Clean the list before you upgrade a tier',
        body: 'You pay per contact. Removing unengaged addresses can keep you a tier down and improves deliverability at the same time.',
      },
      {
        title: 'Do not pay for webinars you will not run',
        body: 'The higher tiers bundle features that many users never open. Price the tier against what you actually use.',
      },
      {
        title: 'Export is your exit',
        body: 'Check the export path before committing to a long term. Portability is what keeps a subscription honest.',
      },
    ],
    facts: [
      { label: 'Pricing basis', value: 'Contact count plus feature tier' },
      { label: 'Discount lever', value: 'Annual or two-year billing' },
      { label: 'Free tier', value: 'Yes, for a small list' },
      { label: 'Extras', value: 'Landing pages, automation, webinars on higher tiers' },
    ],
    faq: [
      {
        q: 'How much does GetResponse cost?',
        a: 'It depends on your contact count more than on anything else. Get the number right before comparing platforms, because the ranking changes with list size.',
      },
      {
        q: 'Is the annual discount worth locking in?',
        a: 'For an established list, yes — it is a meaningful reduction. For a new project that might not survive the year, monthly is the cheaper risk.',
      },
      {
        q: 'Does the free plan send with branding?',
        a: 'Free tiers in this category generally carry a provider footer and feature limits. Check the current terms if that matters to you.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'envato',
    name: 'Envato',
    domain: 'elements.envato.com',
    siteLabel: 'elements.envato.com',
    badge: 'EN',
    color: '#2C6B33',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Creative assets by subscription, where annual billing is the only real discount.',
    about: [
      'Envato Elements is an unlimited-download subscription for stock video, music, templates, fonts and graphics. Its sibling marketplaces sell the same kind of asset individually.',
      'The choice between them is the money question. Elements is worth it if you download regularly; a couple of one-off purchases on the marketplaces is cheaper if you do not. Within Elements, annual billing is the discount — there is no coupon economy here, and the licence terms, not the price, are what deserve your attention.',
    ],
    offers: [
      {
        id: 'envato-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing below the monthly rate',
        detail:
          'The standing discount on Elements. Worth it only if you are confident you will use it for the year.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'envato-free',
        kind: 'deal',
        value: 'Free files',
        title: 'Monthly free-file selection',
        detail:
          'A rotating set of assets released free each month, licensed for commercial use. Free is free.',
        checked: CHECKED,
      },
      {
        id: 'envato-marketplace',
        kind: 'deal',
        value: 'Deal',
        title: 'Single purchases on the marketplaces instead of a subscription',
        detail:
          'For one template or one track, buying it once is far cheaper than a year of Elements.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Register the licence for every asset you use',
        body: 'The Elements licence is per-project and requires registering the use. Skipping it is the mistake that causes trouble later, not the price.',
      },
      {
        title: 'Download before you cancel',
        body: 'Registered project licences persist, but access to the library does not. Get what you need while the subscription is live.',
      },
      {
        title: 'Count your downloads honestly',
        body: 'Two assets a year does not justify a subscription. Twenty a month obviously does.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Unlimited-download subscription' },
      { label: 'Discount lever', value: 'Annual billing' },
      { label: 'Licence', value: 'Per-project registration required' },
      { label: 'Alternative', value: 'Single purchases on the Envato marketplaces' },
    ],
    faq: [
      {
        q: 'Can I keep using assets after cancelling?',
        a: 'Assets you registered to a project while subscribed remain licensed for that project. New downloads and unregistered uses stop.',
      },
      {
        q: 'Are there Envato promo codes?',
        a: 'Rarely and briefly. Annual billing is the dependable discount.',
      },
      {
        q: 'Elements or the marketplace?',
        a: 'Elements if you download regularly; the marketplace if you need one specific thing. The subscription is not cheaper for occasional use.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'parallels',
    name: 'Parallels',
    domain: 'parallels.com',
    siteLabel: 'parallels.com',
    badge: 'PA',
    color: '#B0161E',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Run Windows on a Mac — the perpetual licence versus subscription choice.',
    about: [
      'Parallels Desktop runs Windows and Linux virtual machines on macOS, including on Apple silicon. For anyone who needs one Windows application on a Mac it is the mature option, and the free alternatives are meaningfully more work.',
      'The decision that costs or saves the most is licence type. A perpetual licence covers one major version forever; a subscription includes upgrades and, on the higher tiers, features aimed at businesses. If you upgrade macOS aggressively you will want the subscription, because a new macOS release frequently needs a new Parallels version. If you sit on an OS for years, the perpetual licence is much cheaper.',
    ],
    offers: [
      {
        id: 'parallels-perpetual',
        kind: 'deal',
        value: 'Long term',
        title: 'Perpetual licence instead of a subscription',
        detail:
          'A one-off payment for the current major version. Cheaper within two years if you do not chase macOS releases.',
        terms: 'Does not include the next major version, which a new macOS may require.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'parallels-student',
        kind: 'deal',
        value: 'Student',
        title: 'Verified student and educator pricing',
        detail: 'A substantial standing discount, not a temporary promotion.',
        checked: CHECKED_R2,
      },
      {
        id: 'parallels-upgrade',
        kind: 'deal',
        value: 'Sale',
        title: 'Upgrade pricing from an older version',
        detail: 'Well below a new licence if you already own a previous major version.',
        checked: CHECKED_R2,
      },
      {
        id: 'parallels-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial before buying',
        detail:
          'Enough to confirm the specific Windows application you need actually runs acceptably.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Test your actual application in the trial',
        body: 'Performance varies enormously by workload on Apple silicon. Do not buy on a benchmark; run the thing you need.',
      },
      {
        title: 'A Windows licence is a separate cost',
        body: 'Parallels runs Windows; it does not include it. Budget both.',
      },
      {
        title: 'Check the free alternatives first',
        body: 'For occasional light use there are free virtualisation options. They are more work, and for many people that is the trade.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'macOS, including Apple silicon' },
      { label: 'Licence types', value: 'Perpetual or subscription' },
      { label: 'Separate cost', value: 'A Windows licence' },
      { label: 'Student pricing', value: 'Yes, verified' },
    ],
    faq: [
      {
        q: 'Perpetual or subscription?',
        a: 'Perpetual if you keep macOS versions for years — it is cheaper within two. Subscription if you update macOS promptly, because new OS releases frequently need a new Parallels version.',
      },
      {
        q: 'Does it include Windows?',
        a: 'No. You need a Windows licence separately, which is a meaningful additional cost.',
      },
      {
        q: 'Will my application run well on Apple silicon?',
        a: 'Most do; some do not, particularly anything graphics-heavy or requiring specific hardware. Use the trial to find out with your actual software.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'shutterstock',
    name: 'Shutterstock',
    domain: 'shutterstock.com',
    siteLabel: 'shutterstock.com',
    badge: 'SS',
    color: '#E11B22',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Stock media by subscription — unused monthly downloads are the waste.',
    about: [
      'Shutterstock licenses stock photography, video, music and editorial content, sold as monthly download allowances or as on-demand image packs. It is one of the two default libraries in the industry.',
      'The pricing trap is specific and expensive: a monthly subscription includes a download allowance, and unused downloads generally do not roll over indefinitely. Businesses routinely buy a large monthly plan, use a fraction of it, and pay for the rest. If your usage is lumpy — a burst of downloads twice a year — the on-demand packs, which do not expire as quickly, are usually the cheaper structure.',
    ],
    offers: [
      {
        id: 'shutterstock-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual commitment below month-to-month',
        detail: 'A large reduction on the monthly rate for a twelve-month commitment.',
        terms: 'Auto-renews; the commitment is annual even when billed monthly.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'shutterstock-ondemand',
        kind: 'deal',
        value: 'Compare',
        title: 'On-demand packs for lumpy usage',
        detail:
          'Image packs with a long validity beat a monthly allowance if your downloading comes in bursts.',
        checked: CHECKED_R2,
      },
      {
        id: 'shutterstock-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial on subscription plans',
        detail: 'Enough to test the library depth for your specific subject matter.',
        terms: 'Converts to a paid plan unless cancelled.',
        checked: CHECKED_R2,
      },
      {
        id: 'shutterstock-free',
        kind: 'deal',
        value: 'Free',
        title: 'A rotating free collection each month',
        detail: 'A small set of licensed assets released free monthly.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Count your real downloads before choosing a plan',
        body: 'Unused allowance is the single largest waste in stock media. Size the plan to your actual usage, not your ambition.',
      },
      {
        title: 'Check the free libraries first',
        body: 'For generic imagery the free stock sites are often good enough. Pay for what they cannot cover.',
      },
      {
        title: 'Understand the licence you are buying',
        body: 'Standard and enhanced licences differ on print runs, merchandise and resale. Buying the wrong one is a legal problem, not a cost one.',
      },
    ],
    facts: [
      { label: 'Content', value: 'Photos, video, music, editorial' },
      { label: 'Plans', value: 'Monthly allowances or on-demand packs' },
      { label: 'Main waste', value: 'Unused monthly downloads' },
      { label: 'Licences', value: 'Standard and enhanced — read which you need' },
    ],
    faq: [
      {
        q: 'Do unused downloads roll over?',
        a: 'Only within limits and not indefinitely. It is the main reason people overpay here — size the plan to real usage.',
      },
      {
        q: 'Subscription or on-demand pack?',
        a: 'Subscription for steady monthly downloading; on-demand packs for bursts, because they have a much longer validity.',
      },
      {
        q: 'Can I keep using images after cancelling?',
        a: 'Yes — licences for assets you downloaded while subscribed remain valid for their permitted uses. You just cannot download more.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'alamy',
    name: 'Alamy',
    domain: 'alamy.com',
    siteLabel: 'alamy.com',
    badge: 'AY',
    color: '#1A1A1A',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Pay-per-image stock — no subscription, which suits occasional buyers.',
    about: [
      'Alamy is a large stock photography library with a strong editorial and archive collection, and it is unusual in the category for selling images individually rather than pushing everyone onto a subscription.',
      'That structure is the reason to use it. If you need three images a year, a per-image purchase is far cheaper than the smallest monthly plan elsewhere, and there is nothing to cancel. The library is also deeper on editorial, historical and location-specific material than the subscription libraries, which are optimised for generic commercial imagery.',
    ],
    offers: [
      {
        id: 'alamy-perimage',
        kind: 'deal',
        value: 'Compare',
        title: 'Buy images individually with no subscription',
        detail:
          'For occasional use this beats any monthly plan, and there is no renewal to forget.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'alamy-packs',
        kind: 'deal',
        value: 'Bundle',
        title: 'Image packs at a lower price per image',
        detail: 'Prepaid credits for regular buyers, cheaper per download than one-off purchases.',
        checked: CHECKED_R2,
      },
      {
        id: 'alamy-editorial',
        kind: 'deal',
        value: 'Compare',
        title: 'Editorial and archive depth the subscription libraries lack',
        detail:
          'Not a discount, but the reason to look here for historical, location and news imagery.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Match the licence to the use',
        body: 'Editorial-only images cannot be used commercially. Buying the wrong licence is the expensive mistake here, not the price.',
      },
      {
        title: 'For occasional use, avoid subscriptions entirely',
        body: 'Three images a year on a per-image basis costs a fraction of the cheapest monthly plan anywhere.',
      },
      {
        title: 'Check the resolution against your output',
        body: 'Web use needs far less than print. Paying for a larger file than the job requires is common.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Per-image purchase, plus prepaid packs' },
      { label: 'Strength', value: 'Editorial, archive and location imagery' },
      { label: 'Best for', value: 'Occasional buyers' },
      { label: 'Watch out for', value: 'Editorial-only licence restrictions' },
    ],
    faq: [
      {
        q: 'Is Alamy cheaper than a subscription library?',
        a: 'For occasional use, substantially — you buy what you need and nothing renews. For heavy monthly downloading, a subscription elsewhere wins.',
      },
      {
        q: 'What does "editorial use only" mean?',
        a: 'The image may be used in news, commentary and educational contexts but not to advertise or sell anything. Using one commercially is a licensing breach.',
      },
      {
        q: 'Which resolution should I buy?',
        a: 'The smallest that covers your output. Web use needs far less than print, and the price scales with size.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'ccleaner',
    name: 'CCleaner',
    domain: 'ccleaner.com',
    siteLabel: 'ccleaner.com',
    badge: 'CC',
    color: '#1F6B8A',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'PC cleanup utility with a free tier that covers most of what it does.',
    about: [
      'CCleaner clears temporary files, browser data and registry entries on Windows, with a paid tier adding real-time monitoring, automatic updates for other software and driver updating.',
      'A note more useful than any discount: on a modern Windows machine, the free version covers most of what this category genuinely achieves, and Windows itself now includes storage cleanup that does much of the same. The paid tier is worth it for automatic third-party software updating, which is a real security benefit. Registry cleaning, historically the selling point, does very little on a current system.',
    ],
    offers: [
      {
        id: 'ccleaner-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier covering the core cleanup',
        detail:
          'Manual cleanup of temporary files and browser data. For most people this is the whole product.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'ccleaner-firstyear',
        kind: 'deal',
        value: 'New customer',
        title: 'Discounted first year on the paid tiers',
        detail: 'Introductory pricing on a new subscription, renewing at the standard rate.',
        terms: 'Auto-renews higher unless you turn renewal off.',
        checked: CHECKED_R2,
      },
      {
        id: 'ccleaner-multi',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-device and family licences',
        detail: 'Per-device cost falls on the larger licences.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Try the free version first',
        body: 'It does the cleanup. The paid tier buys automation and third-party update management, which is a different value proposition.',
      },
      {
        title: 'Registry cleaning is not the benefit',
        body: 'On a modern Windows install it achieves very little. Do not buy the suite for that.',
      },
      {
        title: 'Cancel auto-renew at purchase',
        body: 'Same rule as everything else in consumer utility software.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'Windows, plus Mac and Android versions' },
      { label: 'Free tier', value: 'Yes, covers manual cleanup' },
      { label: 'Paid value', value: 'Automation and third-party software updating' },
      { label: 'Pricing', value: 'Discounted year one' },
    ],
    faq: [
      {
        q: 'Do I need CCleaner?',
        a: 'Probably not for cleanup alone — Windows handles most of it and the free version handles the rest. The paid tier earns its money by keeping third-party software patched automatically.',
      },
      {
        q: 'Does registry cleaning speed up my PC?',
        a: 'On a modern Windows system, essentially no. That claim is a holdover from a much older era of Windows.',
      },
      {
        q: 'Does the price rise at renewal?',
        a: 'Yes, as everywhere in consumer utility software. Turn off auto-renew when you buy.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'movavi',
    name: 'Movavi',
    domain: 'movavi.com',
    siteLabel: 'movavi.com',
    badge: 'MV',
    color: '#7A2AB0',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Consumer video editing sold with a lifetime option and constant sales.',
    about: [
      'Movavi publishes consumer video editing, screen recording and conversion software for Windows and Mac, aimed at people who find the professional tools overwhelming and the free ones limiting.',
      'It discounts almost continuously and it still sells lifetime licences alongside subscriptions, which is increasingly rare. For occasional editing the lifetime licence for the current major version is the sensible purchase; the subscription only makes sense if you want each year’s new version. The free trial watermarks output, which is enough to confirm the software does what you need before paying.',
    ],
    offers: [
      {
        id: 'movavi-lifetime',
        kind: 'deal',
        value: 'Long term',
        title: 'Lifetime licence for the current version',
        detail:
          'A one-off payment. For occasional editing it costs less than two years of the subscription.',
        terms: 'Does not include the next major version.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'movavi-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Near-continuous promotional pricing',
        detail: 'Something is nearly always running. Paying the list price is unnecessary.',
        checked: CHECKED_R2,
      },
      {
        id: 'movavi-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Suite bundles across editing, recording and conversion',
        detail: 'Cheaper than buying two products separately, if you need both.',
        checked: CHECKED_R2,
      },
      {
        id: 'movavi-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial with watermarked output',
        detail:
          'Confirms the software does the job before you pay. The project file is unaffected.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Lifetime over subscription for occasional use',
        body: 'Unless you want a new version every year, the one-off licence is cheaper inside two years.',
      },
      {
        title: 'Check the free editors first',
        body: 'For simple trimming and joining, free tools do the job. Buy when you hit a wall, not before.',
      },
      {
        title: 'Buy only the suite pieces you will use',
        body: 'Bundles are cheap because they add products. Three unused applications is not a saving.',
      },
    ],
    facts: [
      { label: 'Platforms', value: 'Windows and Mac' },
      { label: 'Licences', value: 'Lifetime or subscription' },
      { label: 'Trial', value: 'Free, watermarked output' },
      { label: 'Discounting', value: 'Near-continuous' },
    ],
    faq: [
      {
        q: 'Is the lifetime licence really permanent?',
        a: 'For the major version you buy, yes. The next major version is a separate purchase, usually at an upgrade price.',
      },
      {
        q: 'Does the watermark come off if I buy later?',
        a: 'You re-export after activating. The project itself is unaffected, so you do not lose the work.',
      },
      {
        q: 'Should I wait for a sale?',
        a: 'Barely necessary — the site discounts almost continuously. Just do not pay the crossed-out price.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'capcut',
    name: 'CapCut',
    domain: 'capcut.com',
    siteLabel: 'capcut.com',
    badge: 'CC',
    color: '#1A1A1A',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Free video editor with a Pro tier — check the commercial-use terms.',
    about: [
      'CapCut is a video editor for mobile, desktop and browser, owned by ByteDance and built around short-form social video. The free tier is genuinely capable, which is unusual, and the Pro subscription adds effects, cloud storage, brand tools and higher export options.',
      'The thing that deserves a check before a business relies on it is licensing. Terms of use for the free tier and for specific effects and audio have been revised more than once, and commercial use conditions differ from personal use. If you are producing client work or advertising, read the current terms rather than assuming — this is a case where the software being free is not the whole question.',
    ],
    offers: [
      {
        id: 'capcut-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier that covers most editing',
        detail:
          'Genuinely capable for short-form video. Most people never need the paid tier at all.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'capcut-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual Pro billing below monthly',
        detail: 'The standard discount if you decide the Pro features are worth it.',
        terms: 'Auto-renews; cancel through the app store if you subscribed in-app.',
        checked: CHECKED_R2,
      },
      {
        id: 'capcut-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of Pro',
        detail: 'Enough to establish whether the paid effects and cloud features matter to you.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Read the commercial-use terms before client work',
        body: 'They have changed before and they differ from personal use. This matters more than the subscription price.',
      },
      {
        title: 'The free tier is the product for most people',
        body: 'Upgrade against a specific limitation you have actually hit, not on principle.',
      },
      {
        title: 'Cancel in the right place',
        body: 'In-app subscriptions cancel through the app store, web subscriptions through your account. People look in the wrong one.',
      },
    ],
    facts: [
      { label: 'Owner', value: 'ByteDance' },
      { label: 'Platforms', value: 'Mobile, desktop, browser' },
      { label: 'Free tier', value: 'Capable, and the right starting point' },
      { label: 'Check first', value: 'Commercial-use licensing terms' },
    ],
    faq: [
      {
        q: 'Is CapCut free?',
        a: 'The core editor is, and it is genuinely capable. Pro adds effects, storage and brand features on a subscription.',
      },
      {
        q: 'Can I use it for client work?',
        a: 'Read the current terms of use before you do. Commercial conditions differ from personal use and have been revised more than once.',
      },
      {
        q: 'How do I cancel Pro?',
        a: 'Through the app store if you subscribed on a phone, or in your account if you subscribed on the web. They are separate.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'invideo',
    name: 'InVideo',
    domain: 'invideo.io',
    siteLabel: 'invideo.io',
    badge: 'IV',
    color: '#E8368F',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Template and AI video generation — the export minutes are the real limit.',
    about: [
      'InVideo makes video from templates and, increasingly, from text prompts, aimed at marketers and social publishers rather than editors. It runs in the browser with a large stock library included.',
      'The pricing dimension people miss is not the monthly fee but the generation and export allowance. AI video plans meter minutes, and running out mid-project on a deadline is the common complaint. Work out roughly how many finished minutes you produce a month before choosing a tier, and check whether the plan you are considering removes watermarks — several entry tiers do not.',
    ],
    offers: [
      {
        id: 'invideo-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing below monthly',
        detail: 'A large reduction, and a year of a tool this category iterates quickly.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'invideo-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier with watermarked output',
        detail:
          'Enough to learn the tool and test whether the template library fits your use case.',
        checked: CHECKED_R2,
      },
      {
        id: 'invideo-tier',
        kind: 'deal',
        value: 'Compare',
        title: 'Choose the tier by export minutes, not features',
        detail:
          'The allowance is what binds in practice. Estimate your monthly output before picking a plan.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Count your finished minutes per month',
        body: 'That number, not the feature list, decides which tier you need. Running out mid-project is the common failure.',
      },
      {
        title: 'Check whether the tier removes the watermark',
        body: 'Several entry plans do not, which makes them unusable for anything published.',
      },
      {
        title: 'Annual only after a month of real use',
        body: 'This category changes fast. Prove the tool fits your workflow before committing a year.',
      },
    ],
    facts: [
      { label: 'Type', value: 'Browser-based template and AI video generation' },
      { label: 'Binding limit', value: 'Export and generation minutes' },
      { label: 'Free tier', value: 'Yes, watermarked' },
      { label: 'Discount lever', value: 'Annual billing' },
    ],
    faq: [
      {
        q: 'Which plan do I need?',
        a: 'Work out how many finished video minutes you publish monthly and buy the tier that covers it. The feature differences matter less than the allowance.',
      },
      {
        q: 'Does the free plan watermark videos?',
        a: 'Yes, and so do some paid entry tiers. Check before subscribing if you intend to publish.',
      },
      {
        q: 'Should I pay annually?',
        a: 'Only after a month of real use. Tools in this category change quickly and a year is a long commitment.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'notta-ai',
    name: 'Notta AI',
    domain: 'notta.ai',
    siteLabel: 'notta.ai',
    badge: 'NT',
    color: '#1F5CE0',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Meeting transcription — the minutes allowance is what you are buying.',
    about: [
      'Notta transcribes and summarises audio and meetings across languages, joining calls to record them and producing searchable transcripts and summaries.',
      'The pricing unit is transcription minutes per month, and that is the only number that matters when choosing a tier. Everything else — languages, export formats, integrations — is secondary to whether the plan covers your actual meeting load. Before paying, check whether the video-conferencing tool you already use includes transcription, because several now do at no extra cost.',
    ],
    offers: [
      {
        id: 'notta-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing well below monthly',
        detail: 'The standard discount on a tool used continuously.',
        terms: 'Auto-renews at the then-current rate.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'notta-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier with a monthly minutes allowance',
        detail: 'Enough to test accuracy on your own accents, languages and meeting audio.',
        checked: CHECKED_R2,
      },
      {
        id: 'notta-team',
        kind: 'deal',
        value: 'Bundle',
        title: 'Team plans at a lower per-seat rate',
        detail: 'Per-seat cost falls on team tiers with shared workspaces.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Test accuracy on your own audio first',
        body: 'Transcription quality varies enormously by accent, language and microphone. The free tier answers that in an afternoon.',
      },
      {
        title: 'Check what your meeting tool already includes',
        body: 'Several conferencing platforms now transcribe natively. Paying twice for this is common.',
      },
      {
        title: 'Buy the minutes you use, not the features',
        body: 'The allowance is the binding constraint on every plan in this category.',
      },
    ],
    facts: [
      { label: 'Function', value: 'Transcription and meeting summaries' },
      { label: 'Pricing unit', value: 'Minutes per month' },
      { label: 'Free tier', value: 'Yes, limited minutes' },
      { label: 'Check first', value: 'Whether your conferencing tool already does it' },
    ],
    faq: [
      {
        q: 'How accurate is it?',
        a: 'It depends on your audio, accents and language far more than on the vendor. Test with your own recordings on the free tier before paying.',
      },
      {
        q: 'Which plan should I buy?',
        a: 'The one whose monthly minutes cover your meeting load. That constraint binds long before the feature differences do.',
      },
      {
        q: 'Is there a free option?',
        a: 'Yes, with a limited monthly allowance — enough to evaluate it properly.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'wps-office',
    name: 'WPS Office',
    domain: 'wps.com',
    siteLabel: 'wps.com',
    badge: 'WPS',
    color: '#B0161E',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Microsoft Office alternative with a usable free tier and a lifetime option.',
    about: [
      'WPS Office is an office suite — documents, spreadsheets, presentations and a PDF editor — with strong Microsoft file-format compatibility, available on Windows, Mac, Linux, iOS and Android. The free tier is ad-supported and genuinely usable.',
      'Two things make the pricing interesting. It still sells a lifetime licence alongside the subscription, which almost nobody in this category does any more, and the PDF editing included in the paid tier is a real product in its own right — people pay comparable money for that alone elsewhere. Before buying, check the free browser-based office suites, which cost nothing and cover most household needs.',
    ],
    offers: [
      {
        id: 'wps-lifetime',
        kind: 'deal',
        value: 'Long term',
        title: 'Lifetime licence instead of a subscription',
        detail:
          'A one-off payment, increasingly rare in office software. Cheaper than two years of the subscription.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'wps-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free ad-supported tier',
        detail: 'Covers documents, spreadsheets and presentations for most personal use.',
        checked: CHECKED_R2,
      },
      {
        id: 'wps-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual subscription below monthly',
        detail: 'The standard discount if you prefer subscribing to owning.',
        checked: CHECKED_R2,
      },
      {
        id: 'wps-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Frequent seasonal promotions',
        detail: 'Including on the lifetime licences, which is the moment to buy.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Try the free browser suites first',
        body: 'For household documents, the free online office suites are enough and cost nothing at all.',
      },
      {
        title: 'Lifetime, during a sale',
        body: 'The one-off licence discounted in a seasonal campaign is the cheapest way to own this software.',
      },
      {
        title: 'Test compatibility with your real files',
        body: 'Format compatibility is good but not perfect on complex documents. Open your worst spreadsheet before committing.',
      },
    ],
    facts: [
      { label: 'Platforms', value: 'Windows, Mac, Linux, iOS, Android' },
      { label: 'Licences', value: 'Free, subscription or lifetime' },
      { label: 'Includes', value: 'PDF editing on the paid tier' },
      { label: 'Compatibility', value: 'Strong with Microsoft formats, not perfect' },
    ],
    faq: [
      {
        q: 'Is WPS Office a real alternative to Microsoft Office?',
        a: 'For most personal and small-business documents, yes, and it opens and saves Microsoft formats. Complex macros and heavily formatted documents are where compatibility strains.',
      },
      {
        q: 'Is the lifetime licence worth it?',
        a: 'If you want to own rather than rent, yes — it costs less than two years of the subscription and it is one of the few still offered.',
      },
      {
        q: 'Is the free version limited?',
        a: 'It is ad-supported and holds back some features, notably the full PDF tools. For basic documents it is complete enough.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'aomei',
    name: 'AOMEI',
    domain: 'aomeitech.com',
    siteLabel: 'aomeitech.com',
    badge: 'AO',
    color: '#1F6B8A',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Backup and partition utilities with a lifetime licence and free tiers.',
    about: [
      'AOMEI publishes Windows utilities: disk backup and imaging, partition management, and file sync, with free editions that cover a surprising amount of what home users need.',
      'The paid tiers add scheduling, incremental backups, bootable recovery media and — importantly — the ability to restore an image to different hardware. It sells both annual and lifetime licences, and for a backup tool you intend to leave running for years the lifetime version is the sensible purchase. Do note the honest caveat about this whole category: backup software is only worth anything if you test a restore, and almost nobody does.',
    ],
    offers: [
      {
        id: 'aomei-lifetime',
        kind: 'deal',
        value: 'Long term',
        title: 'Lifetime licence with free upgrades',
        detail:
          'On a utility you will run for years, this costs less than two or three annual renewals.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'aomei-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free editions of backup and partition tools',
        detail:
          'Cover basic imaging and partitioning for home use. Worth exhausting before paying.',
        checked: CHECKED_R2,
      },
      {
        id: 'aomei-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Suite bundles and multi-PC licences',
        detail: 'Cheaper than buying the tools or the seats separately.',
        checked: CHECKED_R2,
      },
      {
        id: 'aomei-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Frequent seasonal promotions',
        detail: 'Including on lifetime licences, which is when to buy.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Test a restore, not just a backup',
        body: 'An untested backup is a guess. Restore one file and, once, a whole image to spare hardware.',
      },
      {
        title: 'Start with the free edition',
        body: 'For a single home PC it covers imaging and partitioning. Pay when you need scheduling or dissimilar-hardware restore.',
      },
      {
        title: 'Lifetime for a background utility',
        body: 'Backup software runs for years. An annual renewal on it is the expensive way to buy.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'Windows primarily' },
      { label: 'Tools', value: 'Backup and imaging, partition management, sync' },
      { label: 'Licences', value: 'Free editions, annual or lifetime' },
      { label: 'Critical habit', value: 'Test the restore' },
    ],
    faq: [
      {
        q: 'Is the free edition enough?',
        a: 'For a single home PC doing occasional full images, often yes. Scheduling, incremental backups and restoring to different hardware are the paid features that matter.',
      },
      {
        q: 'Lifetime or annual?',
        a: 'Lifetime, for anything you will leave running. It costs less than a few renewals of a tool you never think about.',
      },
      {
        q: 'How do I know my backups work?',
        a: 'Restore something. A backup that has never been tested is not a backup, and this is the single most common failure in home data protection.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'iolo',
    name: 'iolo',
    domain: 'iolo.com',
    siteLabel: 'iolo.com',
    badge: 'IO',
    color: '#1F4E9B',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'PC optimisation software — check what Windows already does first.',
    about: [
      'iolo publishes System Mechanic, a Windows optimisation and maintenance suite: junk file cleanup, startup management, registry work and privacy tools, sold as an annual subscription with heavy introductory discounting.',
      'The category deserves a plain assessment rather than a sales pitch. Modern Windows manages most of what these suites automate — storage cleanup, defragmentation, startup control — and the measurable performance gain on a healthy machine is small. Where suites like this genuinely help is on a neglected PC and for people who will not do the maintenance manually. If your machine is slow, an SSD upgrade and more RAM do far more than any software.',
    ],
    offers: [
      {
        id: 'iolo-firstyear',
        kind: 'deal',
        value: 'New customer',
        title: 'Heavily discounted first year',
        detail:
          'Introductory pricing well below the renewal, which is where this category makes its money.',
        terms: 'Auto-renews at the standard rate unless you turn it off.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'iolo-multi',
        kind: 'deal',
        value: 'Bundle',
        title: 'Unlimited-device household licences',
        detail:
          'One licence covering every PC in the house, which is how the tiers are structured.',
        checked: CHECKED_R2,
      },
      {
        id: 'iolo-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: 'Money-back guarantee',
        detail:
          'A refund window on new purchases — the safe way to see whether it changes anything.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Try the free Windows tools first',
        body: 'Storage Sense, Task Manager startup control and Disk Cleanup do much of this at no cost.',
      },
      {
        title: 'Hardware beats optimisation software',
        body: 'On a genuinely slow machine, an SSD and more RAM produce a change you can feel. Software tuning rarely does.',
      },
      {
        title: 'Turn off auto-renew immediately',
        body: 'The renewal is several times the introductory price. This is the defining fact of the category.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'Windows' },
      { label: 'Pricing', value: 'Steep first-year discount, higher renewal' },
      { label: 'Licences', value: 'Household, multiple PCs' },
      { label: 'Honest alternative', value: 'Built-in Windows tools, or a hardware upgrade' },
    ],
    faq: [
      {
        q: 'Will this make my PC faster?',
        a: 'On a neglected machine, somewhat. On a well-maintained one, very little — Windows already does most of it. An SSD upgrade makes a far bigger difference than any optimisation suite.',
      },
      {
        q: 'Why is the renewal so much more?',
        a: 'Because the first year is an acquisition price. Turn off auto-renew at purchase and decide again when the term ends.',
      },
      {
        q: 'Is there a refund if it does not help?',
        a: 'There is a money-back window on new purchases, which is the sensible way to find out.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'edrawsoft',
    name: 'Edrawsoft',
    domain: 'edrawsoft.com',
    siteLabel: 'edrawsoft.com',
    badge: 'ED',
    color: '#1F5CB0',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Diagramming and mind-mapping tools with a perpetual licence option.',
    about: [
      'Edrawsoft makes diagramming software — flowcharts, floor plans, org charts, mind maps and project timelines — positioned as a cheaper alternative to the incumbent enterprise tools, with a large template library doing much of the work.',
      'It sells perpetual licences alongside subscriptions and bundles its several products together, which is where the value is if you need more than one. The practical check before buying is export and interoperability: if colleagues use a different diagramming tool, confirm the file exchange works before you standardise on this.',
    ],
    offers: [
      {
        id: 'edrawsoft-perpetual',
        kind: 'deal',
        value: 'Long term',
        title: 'Perpetual licence instead of a subscription',
        detail: 'A one-off payment for the current version, cheaper than two years of subscribing.',
        terms: 'Does not include the next major version.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'edrawsoft-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Suite bundles across the product range',
        detail:
          'Diagramming, mind mapping and project tools together, well below the individual prices.',
        checked: CHECKED_R2,
      },
      {
        id: 'edrawsoft-student',
        kind: 'deal',
        value: 'Student',
        title: 'Student and education pricing',
        detail: 'A verified discount, meaningful in a category bought heavily by students.',
        checked: CHECKED_R2,
      },
      {
        id: 'edrawsoft-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier with watermarked export',
        detail: 'Enough to build a diagram and confirm the templates cover what you need.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the free diagramming tools first',
        body: 'For occasional flowcharts, free browser tools are adequate. Pay when the template library or the file formats matter.',
      },
      {
        title: 'Confirm file exchange with colleagues',
        body: 'Diagramming is collaborative. A cheaper tool nobody else can open costs more than it saves.',
      },
      {
        title: 'Perpetual for occasional use',
        body: 'Diagramming is not a daily tool for most people. A one-off licence suits that pattern.',
      },
    ],
    facts: [
      { label: 'Products', value: 'Diagramming, mind mapping, project tools' },
      { label: 'Licences', value: 'Perpetual or subscription' },
      { label: 'Free tier', value: 'Yes, watermarked export' },
      { label: 'Check first', value: 'File exchange with your colleagues’ tools' },
    ],
    faq: [
      {
        q: 'Is it a real alternative to the enterprise diagramming tools?',
        a: 'For most diagrams, yes, at a fraction of the price. The gap is in deep integration and in what your organisation has standardised on.',
      },
      {
        q: 'Perpetual or subscription?',
        a: 'Perpetual, unless you need every new version. Diagramming software changes slowly.',
      },
      {
        q: 'Can I export to standard formats?',
        a: 'Yes, and that is the thing to verify with your actual colleagues before committing — export fidelity is where cheaper tools show.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'retouch4me',
    name: 'Retouch4me',
    domain: 'retouch4.me',
    siteLabel: 'retouch4.me',
    badge: 'R4M',
    color: '#2A2A44',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'AI retouching plugins sold as perpetual licences, one task each.',
    about: [
      'Retouch4me sells single-purpose AI retouching plugins for photographers: skin retouching, dodge and burn, eye vessel removal, background cleanup, colour matching. Each is a separate paid plugin that runs inside Photoshop, Lightroom or as a standalone.',
      'The pricing model is unusual and in the buyer’s favour: perpetual licences rather than a subscription, so a plugin you buy keeps working. The corollary is that you pay per tool, and the bundles exist because most photographers end up wanting three or four. Buy the one that addresses the task actually costing you time, then add others if the first pays back.',
    ],
    offers: [
      {
        id: 'retouch4me-perpetual',
        kind: 'deal',
        value: 'Long term',
        title: 'Perpetual per-plugin licences',
        detail:
          'No subscription. A plugin bought once keeps working, which is rare in this category now.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'retouch4me-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundles across several plugins',
        detail: 'Substantially below buying three or four individually, if you will use them.',
        checked: CHECKED_R2,
      },
      {
        id: 'retouch4me-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of each plugin',
        detail:
          'Essential here — results vary by subject and lighting, and the trial answers that on your own images.',
        checked: CHECKED_R2,
      },
      {
        id: 'retouch4me-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal promotions on plugins and bundles',
        detail: 'Discounts run several times a year, including on the bundles.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Trial on your own worst images',
        body: 'AI retouching performs very differently across skin tones, lighting and subject matter. Test the hard cases, not the easy ones.',
      },
      {
        title: 'Buy the plugin for the task that costs you hours',
        body: 'One tool that removes an hour a shoot pays back immediately. A bundle of five you use once does not.',
      },
      {
        title: 'Check your hardware',
        body: 'These plugins are compute-heavy. On older machines the processing time can undo the workflow saving.',
      },
    ],
    facts: [
      { label: 'Type', value: 'Single-purpose AI retouching plugins' },
      { label: 'Hosts', value: 'Photoshop, Lightroom, standalone' },
      { label: 'Licences', value: 'Perpetual, per plugin' },
      { label: 'Trial', value: 'Free, per plugin' },
    ],
    faq: [
      {
        q: 'Is it a subscription?',
        a: 'No — perpetual licences per plugin, which is unusual and is a genuine argument for this over subscription-based alternatives.',
      },
      {
        q: 'Which plugin should I buy first?',
        a: 'The one addressing whatever currently takes longest in your edit. Trial it on your own difficult images before deciding.',
      },
      {
        q: 'Do I need a powerful computer?',
        a: 'It helps considerably. These are compute-heavy tools and on older hardware the processing time eats into the time they save.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'placeit',
    name: 'Placeit',
    domain: 'placeit.net',
    siteLabel: 'placeit.net',
    badge: 'PI',
    color: '#1F6BC4',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Mockups, logos and templates by subscription — check the licence for merch.',
    about: [
      'Placeit generates mockups, logos, social graphics and video templates in the browser, aimed at small businesses and print-on-demand sellers who need visuals without a designer. It is owned by Envato.',
      'It is sold as an unlimited-download subscription, which is the right structure for its main users: someone launching a shop needs forty mockups in a week and none for the next three months. The important detail is licensing — what you may do with a generated logo or a template asset commercially is defined by the terms, and for print-on-demand and merchandise sellers that detail matters more than the price.',
    ],
    offers: [
      {
        id: 'placeit-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual subscription well below monthly',
        detail: 'A large reduction if you know you will keep using it.',
        terms: 'Auto-renews at the then-current rate.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'placeit-monthly',
        kind: 'deal',
        value: 'Compare',
        title: 'One month for a launch burst, then cancel',
        detail:
          'For a shop launch, a single month of unlimited downloads covers the whole job. Legitimate and much cheaper than a year.',
        checked: CHECKED_R2,
      },
      {
        id: 'placeit-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free templates and watermarked previews',
        detail: 'Enough to see whether the template library fits your brand before paying.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Batch your downloads into one paid month',
        body: 'Unlimited downloads plus a launch to prepare is the efficient combination. There is no reason to hold the subscription idle.',
      },
      {
        title: 'Read the licence before selling merchandise',
        body: 'For print-on-demand sellers this is the whole question, and it is not the same as "I downloaded it".',
      },
      {
        title: 'A generated logo is not a trademark',
        body: 'Template-based logos are used by other people too. If the brand matters, treat it as a starting point.',
      },
    ],
    facts: [
      { label: 'Owner', value: 'Envato' },
      { label: 'Model', value: 'Unlimited-download subscription' },
      { label: 'Outputs', value: 'Mockups, logos, social graphics, video templates' },
      { label: 'Check first', value: 'Commercial licence terms for merchandise' },
    ],
    faq: [
      {
        q: 'Can I use Placeit designs commercially?',
        a: 'Within the terms of your subscription licence, which set out what is permitted. For merchandise and print-on-demand, read them specifically rather than assuming.',
      },
      {
        q: 'Should I subscribe annually?',
        a: 'Only if usage is steady. For a one-off launch, a single month of unlimited downloads does the job for a fraction of the cost.',
      },
      {
        q: 'Is a template logo good enough for a real brand?',
        a: 'As a starting point. Other businesses can generate something similar, so if the identity matters long term, treat it as a placeholder.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'planner-5d',
    name: 'Planner 5D',
    domain: 'planner5d.com',
    siteLabel: 'planner5d.com',
    badge: 'P5D',
    color: '#1F7A6B',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Home design in the browser — free to plan, paid to render.',
    about: [
      'Planner 5D lets you lay out a home in 2D and view it in 3D, with a catalogue of furniture and finishes, aimed at homeowners and renovators rather than professionals.',
      'The free tier covers planning: you can draw the space, place furniture and see it in three dimensions at no cost. Payment unlocks the full catalogue, high-resolution renders and export. For most people planning one renovation, that means the free tier answers the question — will the sofa fit and does the layout work — and the subscription is only needed if you want presentation images.',
    ],
    offers: [
      {
        id: 'planner5d-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free planning and 3D view',
        detail:
          'Draw the room, place furniture, walk through it. For a single renovation this is usually the whole job.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'planner5d-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual subscription below monthly',
        detail: 'Worth it only if you need renders and the full catalogue over months.',
        checked: CHECKED_R2,
      },
      {
        id: 'planner5d-onetime',
        kind: 'deal',
        value: 'Compare',
        title: 'One paid month for a single project',
        detail:
          'A renovation is a finite job. One month of full access is usually enough and far cheaper than a year.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Plan free, pay only for renders',
        body: 'The layout work — which is the useful part — costs nothing. Presentation images are the paid product.',
      },
      {
        title: 'Measure the room properly first',
        body: 'A beautiful plan drawn from wrong dimensions is worse than no plan. Measure twice before you start.',
      },
      {
        title: 'One project, one month',
        body: 'Renovations end. Subscribe for the design phase and cancel when the plan is signed off.',
      },
    ],
    facts: [
      { label: 'Type', value: 'Browser and app home design' },
      { label: 'Free tier', value: 'Planning and 3D view' },
      { label: 'Paid unlocks', value: 'Full catalogue, high-resolution renders, export' },
      { label: 'Audience', value: 'Homeowners and renovators, not professionals' },
    ],
    faq: [
      {
        q: 'Is Planner 5D free?',
        a: 'The planning and 3D view are. The full furniture catalogue, high-resolution renders and export sit behind the subscription.',
      },
      {
        q: 'Do I need the paid version?',
        a: 'Only if you want presentation-quality images or the extended catalogue. To work out whether a layout functions, the free tier is enough.',
      },
      {
        q: 'Is it accurate enough to build from?',
        a: 'It is a visualisation tool, not architectural software. Use it to decide the layout, then have anything structural drawn properly.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'homestyler',
    name: 'Homestyler',
    domain: 'homestyler.com',
    siteLabel: 'homestyler.com',
    badge: 'HS',
    color: '#1F5C8A',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Interior design tool where the free tier does most of the useful work.',
    about: [
      'Homestyler is a browser-based interior design tool: floor plans, 3D modelling, furniture placement and photo-realistic rendering, used by homeowners, students and some interior professionals.',
      'The commercial model is a free tier with a render allowance and paid tiers that raise it, unlock the full catalogue and remove watermarks. Renders are the metered resource in every tool in this category, and they are also the part most people need least — the layout decisions are made in the 3D view, not in the finished image.',
    ],
    offers: [
      {
        id: 'homestyler-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier with a monthly render allowance',
        detail:
          'Full design tools with limited high-resolution renders. Enough for a home project.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'homestyler-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing below monthly',
        detail: 'The standard discount for people using it professionally.',
        checked: CHECKED_R2,
      },
      {
        id: 'homestyler-student',
        kind: 'deal',
        value: 'Student',
        title: 'Student pricing',
        detail: 'A reduced tier for verified students, who are a large part of the user base.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Design in the 3D view, render once',
        body: 'Renders are the metered resource. Making decisions in the live view and rendering only the final scheme keeps you on the free tier.',
      },
      {
        title: 'Compare against the alternatives before subscribing',
        body: 'Several tools in this category have generous free tiers. Try two before paying for either.',
      },
      {
        title: 'Subscribe for the project, not the year',
        body: 'A home project has an end date. So should the subscription.',
      },
    ],
    facts: [
      { label: 'Type', value: 'Browser-based interior design and rendering' },
      { label: 'Free tier', value: 'Full tools, limited renders' },
      { label: 'Metered resource', value: 'High-resolution renders' },
      { label: 'Student pricing', value: 'Available' },
    ],
    faq: [
      {
        q: 'Is Homestyler free?',
        a: 'There is a free tier with the design tools and a limited render allowance. Paid tiers raise the allowance and unlock the full catalogue.',
      },
      {
        q: 'Do I need to pay to design a room?',
        a: 'No. Layout and 3D viewing are free. Payment buys presentation-quality output.',
      },
      {
        q: 'How does it compare with the alternatives?',
        a: 'Closely — several tools in this space have similar free tiers. Try two on your actual room before paying for either.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'emergent',
    name: 'Emergent',
    domain: 'emergent.sh',
    siteLabel: 'emergent.sh',
    badge: 'EM',
    color: '#2A2A44',
    category: 'software',
    markets: 'India, UK, US, Australia and other markets',
    blurb: 'AI app builder billed by usage — the credit burn is the thing to watch.',
    about: [
      'Emergent is an AI application builder: you describe what you want in plain language and autonomous agents generate, test and deploy a working application. It is aimed at people who want software without writing it.',
      'Tools in this category bill by consumption — credits, agent runs or tokens — rather than by seat, and that is the whole cost question. A single ambitious prompt can consume a large share of a monthly allowance, and iterating on a half-working result consumes more. Start small, keep the scope of each request tight, and watch the burn rate before committing to a larger plan.',
    ],
    offers: [
      {
        id: 'emergent-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free tier or starting credits',
        detail:
          'Enough to build something small and see how quickly the credits go. That is the number that decides your plan.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'emergent-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing below monthly',
        detail:
          'The standard discount. In a category moving this fast, a year is a long commitment — be sure first.',
        checked: CHECKED_R2,
      },
      {
        id: 'emergent-scope',
        kind: 'deal',
        value: 'Start small',
        title: 'Keep each request narrow',
        detail:
          'Consumption scales with scope and with retries. Small, specific prompts cost a fraction of one large vague one.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Measure your burn rate before upgrading',
        body: 'Build one real thing on the free credits and see what it consumed. Then pick a tier.',
      },
      {
        title: 'Narrow prompts, fewer retries',
        body: 'Most credit waste in these tools is iterating on an under-specified request. Specify first.',
      },
      {
        title: 'Check what you can export',
        body: 'Before building anything you depend on, confirm you can get the code and the data out.',
      },
    ],
    facts: [
      { label: 'Type', value: 'AI application builder with autonomous agents' },
      { label: 'Billing', value: 'Consumption-based — credits or agent runs' },
      { label: 'Main cost risk', value: 'Iterating on vague requests' },
      { label: 'Check first', value: 'Code and data export' },
    ],
    faq: [
      {
        q: 'How much does it cost to build something?',
        a: 'It depends on scope and on how many attempts it takes. Build one small thing on the free credits and measure it — that is the only reliable estimate.',
      },
      {
        q: 'Can I export what it builds?',
        a: 'Check before you commit anything important. Portability is the thing to establish early with any generated-application platform.',
      },
      {
        q: 'Should I buy the annual plan?',
        a: 'Not until you know your consumption. This category changes very fast and a year is a long time in it.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'elementor',
    name: 'Elementor',
    domain: 'elementor.com',
    siteLabel: 'elementor.com',
    badge: 'EL',
    color: '#92003B',
    category: 'software',
    markets: 'US, UK, Germany, Italy, Poland, Australia and other markets',
    blurb: 'WordPress page builder — buy the site count you need, not the feature list.',
    about: [
      'Elementor is the most widely used WordPress page builder: drag-and-drop layout, templates, and a widget library, with a free version in the WordPress plugin directory and paid tiers adding the theme builder, forms, popups and e-commerce widgets.',
      'The paid tiers are licensed by number of sites, and that is what to choose on. Most people buy a tier for features they could get from a free plugin and then find themselves short of site slots. The other thing worth knowing: page builders add page weight, and a heavily built Elementor page is slower than a hand-built one. That is the trade for not writing code.',
    ],
    offers: [
      {
        id: 'elementor-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free version in the WordPress plugin directory',
        detail:
          'Covers page layout for a simple site. The paid tiers are for the theme builder, forms and popups.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'elementor-sitecount',
        kind: 'deal',
        value: 'Compare',
        title: 'Choose the tier by site count',
        detail:
          'Licences are per number of sites. Buying for features and running out of slots is the common and expensive mistake.',
        checked: CHECKED_R2,
      },
      {
        id: 'elementor-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual licence with renewal discount',
        detail:
          'Renewals are typically discounted against a new licence — but check the renewal rate at purchase.',
        terms: 'Auto-renews; the site keeps working if you lapse, but updates and support stop.',
        checked: CHECKED_R2,
      },
      {
        id: 'elementor-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal campaigns on new licences',
        detail: 'Deep discounts around the usual retail events, especially on multi-site tiers.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Count your sites honestly, then add one',
        body: 'The tiers step by site count and upgrading mid-term is the awkward path. Buy the slot you will need.',
      },
      {
        title: 'What happens if you stop paying',
        body: 'The site keeps working, but you lose updates and support. On a plugin this central, that matters within a year.',
      },
      {
        title: 'Watch the page weight',
        body: 'Builders add markup. If speed matters, keep the page simple and test it — that is a real cost of the convenience.',
      },
    ],
    facts: [
      { label: 'Platform', value: 'WordPress' },
      { label: 'Free version', value: 'Yes, in the plugin directory' },
      { label: 'Licensed by', value: 'Number of sites' },
      { label: 'If you lapse', value: 'Site works; updates and support stop' },
    ],
    faq: [
      {
        q: 'Is the free version enough?',
        a: 'For laying out pages on a simple site, often yes. The paid tiers buy the theme builder, forms, popups and the widget library.',
      },
      {
        q: 'What happens if I do not renew?',
        a: 'Your site keeps working, but you stop receiving updates and support. On a plugin this deeply embedded, that becomes a security question within a year.',
      },
      {
        q: 'Which tier should I buy?',
        a: 'The one covering the number of sites you will build. Site count binds before features do for most people.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'bigrock',
    name: 'BigRock',
    domain: 'bigrock.in',
    siteLabel: 'bigrock.in',
    badge: 'BR',
    color: '#1F5CB0',
    category: 'software',
    markets: 'India',
    blurb: 'Indian hosting and domains — the renewal price is several times the first term.',
    about: [
      'BigRock is one of India’s best-known domain registrars and shared hosting providers, selling domains, hosting, email and SSL certificates to small businesses and individuals.',
      'The category has one dominant commercial pattern and it applies here in full: a very cheap first term followed by a renewal several times higher, on both domains and hosting. A domain advertised at a nominal figure for the first year renews at the standard registry-plus-margin price. Budget on the renewal, not on the promotion, and note the transfer-out process before you commit a domain you care about.',
    ],
    offers: [
      {
        id: 'bigrock-firstterm',
        kind: 'deal',
        value: 'New customer',
        title: 'Heavily discounted first term on hosting and domains',
        detail:
          'The advertised figure covers the introductory period. The renewal is substantially higher on both products.',
        terms: 'Auto-renews at the standard rate — check it before buying.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'bigrock-multiyear',
        kind: 'deal',
        value: 'Long term',
        title: 'Multi-year registration at the promotional rate',
        detail:
          'Where a multi-year term locks the discounted price, it is the honest way to take the offer.',
        checked: CHECKED_R2,
      },
      {
        id: 'bigrock-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Hosting bundled with a free domain and email',
        detail: 'Real value in the first term. Price what each renews at separately.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Budget on the renewal, not the promotion',
        body: 'This is the defining fact of hosting and domain pricing. The second year is the real price.',
      },
      {
        title: 'Lock a longer term if the rate holds',
        body: 'Where a multi-year registration keeps the promotional price, that is the genuine saving available.',
      },
      {
        title: 'Check the transfer-out process before you commit',
        body: 'Domains are portable by design. Knowing how to leave is what keeps a registrar honest with you.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Products', value: 'Domains, shared hosting, email, SSL' },
      { label: 'Pricing', value: 'Cheap first term, much higher renewal' },
      { label: 'Portability', value: 'Domains can be transferred out — check the process' },
    ],
    faq: [
      {
        q: 'Why is the renewal so much more expensive?',
        a: 'Because the first term is an acquisition price. It is standard across hosting and domain registration, and the renewal is the number to budget on.',
      },
      {
        q: 'Is the free domain with hosting worth it?',
        a: 'In the first year, yes. Check what it renews at separately, because it is billed on its own thereafter.',
      },
      {
        q: 'Can I move my domain elsewhere later?',
        a: 'Yes — domains are portable. Look up the transfer process before you register, because that is what keeps your options open.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'godlike-host',
    name: 'GODLIKE.host',
    domain: 'godlike.host',
    siteLabel: 'godlike.host',
    badge: 'GH',
    color: '#2A2A6B',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'Game server hosting — location matters more than the specification.',
    about: [
      'GODLIKE.host rents game servers — Minecraft, Rust, ARK and other multiplayer titles — on a monthly basis with a control panel, mod support and DDoS protection.',
      'The specification people compare on is RAM, and the one that actually decides whether the server feels good is location. A server physically near your players gives lower latency than a more powerful one further away, every time. Beyond that, monthly billing means you can stop when the group loses interest, which is the normal life cycle of a game server and the reason not to prepay a year.',
    ],
    offers: [
      {
        id: 'godlike-monthly',
        kind: 'deal',
        value: 'Compare',
        title: 'Monthly billing rather than a long prepay',
        detail:
          'Game server groups fade. Monthly costs slightly more per month and far less over the year you actually use it.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'godlike-location',
        kind: 'deal',
        value: 'Compare',
        title: 'Choose the location closest to your players',
        detail:
          'Latency beats specification. A nearer server with less RAM plays better than a distant powerful one.',
        checked: CHECKED_R2,
      },
      {
        id: 'godlike-promos',
        kind: 'deal',
        value: 'Sale',
        title: 'Promotional pricing on first months',
        detail: 'Introductory discounts on new orders, renewing at the standard rate.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Right-size the RAM to the player count',
        body: 'Most small groups over-buy. Start at the tier for your actual player count and upgrade if it struggles.',
      },
      {
        title: 'Do not prepay a year',
        body: 'The typical private game server is busy for two months. Monthly billing matches that reality.',
      },
      {
        title: 'Mods drive the requirement, not players',
        body: 'A heavily modded server with six players needs more than a vanilla one with twenty. Size for the modpack.',
      },
    ],
    facts: [
      { label: 'Service', value: 'Game server hosting' },
      { label: 'Billing', value: 'Monthly' },
      { label: 'Key choice', value: 'Server location, for latency' },
      { label: 'Requirement driver', value: 'The modpack, not the player count' },
    ],
    faq: [
      {
        q: 'How much RAM do I need?',
        a: 'It depends far more on your modpack than on player count. Start at the recommended tier for the pack and upgrade if it stutters.',
      },
      {
        q: 'Should I prepay for a year?',
        a: 'Rarely. Private game servers usually get heavy use for a couple of months. Monthly billing fits that pattern much better.',
      },
      {
        q: 'Which location should I pick?',
        a: 'The one closest to most of your players. Latency affects how the game feels far more than a higher specification does.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'unihost',
    name: 'Unihost',
    domain: 'unihost.com',
    siteLabel: 'unihost.com',
    badge: 'UH',
    color: '#1F6B8A',
    category: 'software',
    markets: 'Worldwide',
    blurb: 'VPS and dedicated servers across many locations — pay monthly, scale later.',
    about: [
      'Unihost rents virtual private servers, dedicated servers and colocation across data centres in a number of countries, aimed at developers and small businesses that want a specific jurisdiction or location.',
      'The pricing is conventional infrastructure pricing: monthly rates by specification, cheaper on longer commitments, with setup fees on some dedicated configurations. The decision that matters is location and specification rather than the discount — a server in the wrong country adds latency you cannot buy away, and over-provisioning at the start is the most common way people overpay for infrastructure.',
    ],
    offers: [
      {
        id: 'unihost-monthly',
        kind: 'deal',
        value: 'Compare',
        title: 'Monthly billing with the option to scale',
        detail:
          'Start small and resize when load justifies it. Over-provisioning on day one is the standard waste.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'unihost-longterm',
        kind: 'deal',
        value: 'Long term',
        title: 'Longer commitments at a lower monthly rate',
        detail: 'Worth taking once the workload is stable and you know the specification is right.',
        checked: CHECKED_R2,
      },
      {
        id: 'unihost-location',
        kind: 'deal',
        value: 'Compare',
        title: 'Choose the data centre near your users',
        detail:
          'Latency and, in some cases, data-residency requirements are decided here, not by the specification.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Start smaller than you think',
        body: 'Resizing up is easy. Paying for unused capacity for a year is the usual infrastructure mistake.',
      },
      {
        title: 'Check the backup arrangement',
        body: 'On unmanaged servers, backups are your responsibility unless you buy them. Budget for it or plan it.',
      },
      {
        title: 'Confirm what "managed" includes',
        body: 'The gap between managed and unmanaged is the gap between a bill and a second job. Know which you bought.',
      },
    ],
    facts: [
      { label: 'Products', value: 'VPS, dedicated servers, colocation' },
      { label: 'Locations', value: 'Multiple countries' },
      { label: 'Billing', value: 'Monthly, cheaper on longer terms' },
      { label: 'Your responsibility', value: 'Backups on unmanaged servers' },
    ],
    faq: [
      {
        q: 'VPS or dedicated?',
        a: 'A VPS for almost everything under real load. Dedicated hardware matters for sustained heavy workloads or specific compliance requirements.',
      },
      {
        q: 'Are backups included?',
        a: 'On unmanaged servers, generally not. That is the most common and most costly assumption in this category.',
      },
      {
        q: 'Which location should I choose?',
        a: 'Nearest to your users, unless a data-residency rule decides it for you. Latency is not something a bigger server fixes.',
      },
    ],
    updated: CHECKED_R2,
  },
]
