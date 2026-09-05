/**
 * Brand page data for Proton (route: /brands/proton).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://proton.me/pricing — plan structure and what each tier bundles
 *   - https://proton.me/support/proton-plans — exact storage, user, email-address,
 *     custom-domain counts and prices for Free, Mail Plus, Unlimited, Duo,
 *     Family and Visionary
 *   - https://proton.me/about — 2014 founding by CERN scientists, the
 *     crowdfunding campaign, and the non-profit Proton Foundation as primary
 *     shareholder
 *   - https://proton.me/blog/security-audit-all-proton-apps — open-source and
 *     independent-audit status across Mail, Calendar, Drive, Pass and VPN
 *   - https://proton.me/support/what-is-encrypted-within-protonmail — what is
 *     end-to-end encrypted (body, attachments) vs zero-access only (subject
 *     lines, sender/recipient addresses)
 *   - https://proton.me/blog/climate-activist-arrest — Proton's own account of
 *     the 2021 Swiss legal order, what it was and was not compelled to hand over
 *   - https://proton.me/mail/bridge — Bridge is a paid-plan-only desktop add-on
 *   - https://proton.me/support/easy-switch — Easy Switch migration limits
 *   - https://apps.apple.com/us/app/proton-mail-encrypted-email/id979659905 —
 *     iOS App Store rating and review volume
 *
 * Trustpilot returned 403 to automated fetches, so no Trustpilot figure is
 * quoted here — omit rather than guess.
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * proton.me before launch and before each campaign. Proton prices in several
 * currencies and per-month figures depend on the billing term chosen.
 * See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const proton: BrandPage = {
  slug: 'proton',
  providerId: 'proton',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Proton review 2026 — the suite, free tier, trade-offs',
  metaDescription:
    'An independent Proton review: what the free plan gives you, how Unlimited, Duo and Family compare, and what Swiss jurisdiction does and does not protect.',
  intro:
    'Proton is what you get when you try to rebuild Gmail, Google Drive and Google Calendar with the operator locked out of your data. Mail, Drive, Calendar, Pass and Wallet share one login and one storage pool, VPN is bundled in on the higher tiers, and the whole company is owned by a Swiss non-profit rather than shareholders chasing ad revenue. The free plan is real. The paid bundles are where the suite starts to make sense.',
  about: [
    'Proton was founded in 2014 by scientists who met at CERN, launched after a crowdfunding campaign that raised over $500,000 from more than 10,000 backers. That origin still shapes the ownership: Proton AG’s primary shareholder is the non-profit Proton Foundation in Geneva, a structure set up specifically so the company cannot be sold to an advertiser or a venture fund and answers to a mission rather than to investors chasing an exit.',
    'The product line grew from a single encrypted inbox into a suite: Mail, Calendar and Contacts, Drive for file storage, Pass for passwords and identity, Wallet for Bitcoin, and Proton VPN, which started as a sister project and is now sold both standalone and bundled. Storage is pooled across Mail and Drive on every paid tier, so upgrading for more inbox space also buys more Drive space, and vice versa.',
    'The pitch rests on two separable claims: end-to-end encryption, which means Proton itself cannot read your message bodies, attachments or files, and Swiss jurisdiction, which keeps the company outside EU and US legal-assistance frameworks by default. Neither claim covers everything the marketing implies. Encryption does not hide who you are emailing or when, and Swiss courts can still compel Proton to act on a specific account. The honest version of this review spends real space on exactly where each protection stops, because that is the part a skimmed landing page leaves out.',
  ],
  facts: [
    { label: 'Founded', value: '2014, by CERN scientists' },
    { label: 'Jurisdiction', value: 'Switzerland' },
    { label: 'Ownership', value: 'Non-profit Foundation' },
    { label: 'Free storage', value: '1 GB, up to 5 GB' },
  ],
  plans: {
    title: 'How the plans are structured',
    note: 'Storage, aliases and custom domains are pooled across Mail and Drive on every paid tier. Annual billing is meaningfully cheaper per month than paying monthly; the prices below are Proton’s own euro figures.',
    items: [
      {
        name: 'Proton Free',
        price: '€0, permanently',
        detail:
          '1 GB storage (extendable to 5 GB), one email address, 10 hide-my-email aliases, three calendars, two Pass vaults, one VPN connection limited to 10 countries.',
      },
      {
        name: 'Proton Unlimited',
        price: 'from €9.99/mo billed annually',
        renews: 'renews near €12.99/mo if paid month to month',
        detail:
          '500 GB pooled storage, 15 email addresses, 3 custom domains, unlimited aliases, full VPN Plus on 10 devices, Wallet and Sentinel account protection. The tier the suite is actually built around.',
        pick: true,
      },
      {
        name: 'Proton Duo',
        price: 'from €14.99/mo billed annually',
        renews: 'renews near €19.99/mo if paid month to month',
        detail: 'Everything in Unlimited for two people: 2 TB pooled storage, 30 email addresses.',
      },
      {
        name: 'Proton Family',
        price: 'from €23.99/mo billed annually',
        renews: 'renews near €29.99/mo if paid month to month',
        detail:
          'Six separate accounts, 3 TB pooled storage, 90 email addresses, one admin managing billing and members.',
      },
    ],
  },
  pros: [
    {
      title: 'A structure that cannot be bought out',
      body: 'The non-profit Proton Foundation is the primary shareholder of Proton AG. There is no venture-capital cap table pushing toward an ad-funded pivot or an acquisition by a data broker, which is the failure mode that has ended other privacy-first startups.',
    },
    {
      title: 'One free tier, five real products',
      body: 'Free gets you a usable inbox, three calendars, two Pass vaults and a capped VPN, not a nagging trial. Most competitors give away one product and charge for the rest; Proton gives away a thin slice of all of them.',
    },
    {
      title: 'Claims you can check instead of trust',
      body: 'Every Proton client is open source, and Mail, Calendar, Drive, Pass and VPN each carry a published independent audit report. The privacy pitch is backed by code and paperwork a third party can inspect, not just a policy page.',
    },
    {
      title: 'Storage and aliases pooled, not siloed',
      body: 'Upgrading once buys more room in Mail and Drive together, plus unlimited hide-my-email aliases on Unlimited and above. You are not separately paying for inbox space and file space the way Google’s bundle structures it.',
    },
  ],
  cons: [
    {
      title: 'Swiss jurisdiction has a real limit, and Proton says so itself',
      body: 'In 2021 a Swiss legal order made Proton log the IP address of one account tied to a French climate activist, who was later arrested. Content stayed encrypted, but Proton could not refuse the order — Swiss law, not marketing, sets the floor.',
    },
    {
      title: 'Encryption does not hide who is emailing whom',
      body: 'Message bodies and attachments are end-to-end encrypted, but subject lines and sender/recipient addresses only get zero-access encryption, a weaker guarantee that still means this metadata is not end-to-end protected. Anyone assuming full anonymity from the encryption alone is assuming too much.',
    },
    {
      title: 'Desktop mail clients and migration both cost friction',
      body: 'Outlook, Thunderbird and Apple Mail only connect via Proton Mail Bridge, which is paid-plan only — free users cannot use them at all. Easy Switch import from Gmail also caps folder counts and folder-name length, so a messy inbox needs tidying before it moves cleanly.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.8, note: 'around 47k ratings for the Proton Mail app' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.5,
      note: 'our composite across transparency, breadth of the suite and value',
    },
  ],
  bestFor: [
    'Anyone consolidating mail, calendar, cloud storage and a password manager under one privacy-first login',
    'People who want a free-forever tier rather than a time-limited trial before committing',
    'Families or couples who want Duo or Family to cover several accounts under one bill',
    'Users who care that the ownership structure, not just the marketing copy, resists an ad-funded pivot',
  ],
  notFor: [
    'Anyone who needs full metadata anonymity — subject lines and addresses are not end-to-end encrypted',
    'Free-tier users who want to keep using Outlook or Thunderbird — Bridge requires a paid plan',
    'Households needing more than six accounts, which is where Family tops out',
  ],
  faq: [
    {
      q: 'Is Proton Mail actually free forever, or is it a trial?',
      a: 'It is permanent. You get 1 GB of storage (extendable to 5 GB through in-app actions), one email address, three calendars and a capped VPN connection. No card is required and no timer starts — the limits are the product, not a countdown.',
    },
    {
      q: 'What is the difference between Proton Unlimited and Proton VPN on its own?',
      a: 'Proton VPN Plus is sold standalone for people who only want the VPN. Unlimited is the whole suite — Mail, Drive, Calendar, Pass, Wallet and full VPN Plus — on one pooled storage allowance, and it costs only a little more than the VPN alone if you need any of the other apps.',
    },
    {
      q: 'Can Proton read my emails?',
      a: 'Not the body or attachments — those are end-to-end encrypted, so Proton holds only ciphertext. Subject lines and sender/recipient addresses use a weaker zero-access encryption instead, meaning they are not end-to-end protected, and Proton can be legally compelled to log account metadata like IP address under Swiss law.',
    },
    {
      q: 'Can I use Proton Mail with Outlook or Thunderbird?',
      a: 'Yes, through Proton Mail Bridge, a local app that decrypts messages for a normal IMAP/SMTP client. Bridge ships only on paid plans — Free-tier accounts cannot pair with a desktop client at all.',
    },
    {
      q: 'How hard is it to migrate from Gmail?',
      a: 'Easy Switch imports mail, contacts and calendars in one pass, and re-runs skip anything already imported. It has real limits though: folder names over 100 characters and accounts with more than 2,000 folders need cleanup first.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'proton.me',
}
