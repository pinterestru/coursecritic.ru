/**
 * Brand page data for GOG.com (route: /brands/gog).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/GOG.com — founding date, original name,
 *     CD Projekt ownership history, headquarters, refund policy summary
 *   - https://alternativeto.net/news/2025/12/gog-announces-its-separation-from-cd-projekt-as-co-founder-kici-ski-acquires-the-platform/
 *     — the December 2025 sale to co-founder Michał Kiciński and the $25.2m price
 *   - https://support.gog.com/hc/en-us/articles/360006129837-GOG-Voluntary-Refund-Policy
 *     and https://www.gog.com/news/gogs_updated_refund_policy_has_your_back_even_more
 *     — the 30-day refund window, including after play
 *   - https://www.gog.com/blog/the-gog-preservation-program/ and
 *     https://www.forbes.com/sites/mattgardner1/2024/11/13/gog-launches-game-preservation-program-to-keep-classic-titles-alive/
 *     — Preservation Program launch date (13 November 2024) and initial titles
 *   - https://www.trustpilot.com/review/www.gog.com — rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const gog: BrandPage = {
  slug: 'gog',
  providerId: 'gog',
  metaTitle: 'GOG.com review 2026 — DRM-free games, 30-day refunds',
  metaDescription:
    'An independent GOG.com review: what DRM-free ownership means, how GOG Galaxy and the Preservation Program work, and where the catalogue falls short of Steam.',
  intro:
    'GOG.com sells PC games with no DRM at all: buy a title and you get an installer you can keep, reinstall offline and play without the store checking in. It has run that way since 2008, first as a CD Projekt subsidiary and, since a December 2025 sale, under co-founder Michał Kiciński again as an independent company. The trade-off is a catalogue that is smaller and more curated than Steam’s, with fewer of the social and multiplayer features players now expect.',
  about: [
    'GOG.com launched in 2008 as Good Old Games, a CD Projekt side project built to resell older PC titles that had stopped working on modern systems. It expanded into current releases and rebranded to GOG.com, but the founding idea never left: every game sold DRM-free, packaged as an offline installer rather than a licence checked against a server each time you play. In December 2025, CD Projekt sold the platform to Michał Kiciński, one of GOG’s original co-founders, for a reported $25.2 million, making it independent again while CD Projekt Red’s own games continue to sell there under the existing arrangement.',
    'Every purchase comes with an installer you can download and store yourself, so a game keeps working even if GOG.com disappeared tomorrow — the closest thing PC gaming has to owning a disc. GOG Galaxy, the store’s client, is entirely optional: it adds automatic updates, cloud saves and achievements, and can pull other storefronts’ libraries into one list, but nothing on GOG requires installing it. Refunds are unusually generous for the category: up to 30 days after purchase, even on a game that has already been downloaded and played, though GOG says it reviews individual claims.',
    'The Preservation Program, launched on 13 November 2024 with more than 100 titles carrying a “Preserved by GOG” stamp, is GOG committing its own resources to keep older games compatible with current and future systems rather than leaving that to fans and community patches. It is a genuinely distinctive commitment. What it does not fix is scale: GOG’s catalogue is a curated fraction of Steam’s, weighted toward older and mid-size titles, and it lacks the friends lists, workshop mods and always-on multiplayer infrastructure that keep players inside Steam’s ecosystem instead.',
  ],
  facts: [
    { label: 'Founded', value: '2008, Warsaw' },
    { label: 'Ownership', value: 'Independent since Dec 2025' },
    { label: 'DRM', value: 'None — offline installers' },
    { label: 'Refunds', value: '30 days, even if played' },
  ],
  plans: {
    title: 'How buying works',
    note: 'There is no subscription. You buy each game once, DRM-free, at standard digital pricing — GOG’s difference is what you get for that price, not a lower one.',
    items: [
      {
        name: 'Per-game purchase',
        price: 'One-off, no DRM, no subscription',
        detail:
          'Standard digital pricing for a permanent, offline-installable copy — the same model as a physical disc, minus the disc.',
        pick: true,
      },
      {
        name: 'GOG Galaxy (optional)',
        price: 'Free, entirely optional',
        detail:
          'Adds auto-updates, cloud saves and achievements, and can aggregate other stores’ libraries into one view. Skippable without losing any game access.',
      },
      {
        name: '30-day refund window',
        price: 'Free, no extra cost',
        detail:
          'Covers games already downloaded and played, a notably longer and more forgiving policy than most digital game stores offer.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuine DRM-free ownership',
      body: 'The installer is yours to keep, so a game still runs from a saved file even if GOG.com itself went offline — a real difference from a licence tied to a live server.',
    },
    {
      title: 'A 30-day refund window that allows play',
      body: 'Most digital storefronts void a refund the moment you launch a game. GOG’s 30-day window survives that, provided the request looks genuine rather than routine.',
    },
    {
      title: 'A real preservation commitment',
      body: 'The Preservation Program launched with over 100 titles GOG actively maintains for modern systems, rather than leaving old games to break as operating systems move on.',
    },
    {
      title: 'GOG Galaxy is optional, not mandatory',
      body: 'Unlike most storefront clients, nothing here requires installing Galaxy to play — a genuine point of difference for anyone who wants a lighter, simpler setup on their machine.',
    },
  ],
  cons: [
    {
      title: 'A much smaller catalogue than Steam',
      body: 'GOG is curated rather than comprehensive, so plenty of current releases, especially anything built around always-online or anti-cheat requirements, simply is not sold here DRM-free.',
    },
    {
      title: 'Weak social and multiplayer features',
      body: 'There is no workshop-style mod hub or the friends and community layer Steam has built over two decades, which matters if multiplayer or mod discovery is a big part of how you play.',
    },
    {
      title: 'The 2025 ownership change is untested',
      body: 'Independence from CD Projekt protects GOG’s DRM-free principles on paper, but a smaller standalone company carries more uncertainty about long-term investment than a studio-backed one did.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.0,
      note: 'around 3,800 reviews — a small sample next to Steam’s review volume',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'rewards genuine DRM-free ownership and the refund policy, marked down for catalogue size',
    },
  ],
  bestFor: [
    'Anyone who wants to actually own their install files, not just a licence',
    'Players buying older or classic titles the Preservation Program keeps working',
    'Buyers who want a 30-day refund window with real breathing room',
    'Anyone who wants a store that works without installing its own client',
  ],
  notFor: [
    'Players chasing the newest always-online or anti-cheat-heavy releases',
    'Anyone who leans on Steam’s mod workshop or social and friends features',
    'Buyers hoping a smaller standalone company grows the catalogue fast',
  ],
  faq: [
    {
      q: 'Is GOG still owned by CD Projekt?',
      a: 'No. CD Projekt sold GOG in December 2025 to Michał Kiciński, one of the platform’s original co-founders, for a reported $25.2 million. CD Projekt Red’s own games still sell on GOG under the existing arrangement, but the store is independently owned again.',
    },
    {
      q: 'What does DRM-free actually mean on GOG?',
      a: 'Every game ships as a standalone installer with no licence check, activation server or always-online requirement to launch it. You can download it, store it somewhere safe, and reinstall it fully offline years later, which is not true of most digital game stores at all.',
    },
    {
      q: 'Do I have to use GOG Galaxy?',
      a: 'No. Galaxy is GOG’s optional client — it adds auto-updates, cloud saves, achievements and a way to pull other storefronts’ libraries into one list, but every game on GOG installs and runs perfectly well without it, straight from the downloaded offline installer.',
    },
    {
      q: 'Can I get a refund after playing a game?',
      a: 'Yes, within 30 days of purchase, even if you have already downloaded and played it — notably more forgiving than most stores, which void the refund the moment you launch the game. GOG says it reviews individual requests and can decline ones that look abusive.',
    },
    {
      q: 'How does GOG’s catalogue compare with Steam’s?',
      a: 'It is much smaller and more curated. GOG focuses on titles it can ship DRM-free, which rules out plenty of current releases built around always-online or anti-cheat systems, so treat it as a companion store rather than a full replacement for Steam.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'gog.com',
}
