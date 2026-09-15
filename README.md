# BABYOWL

Marketing site for **BABYOWL**, a private investment firm that acquires and
holds entrepreneur-owned businesses in the lower middle market.

The site is an editorial, institutional single-purpose brochure: a thesis-led
home page, the firm's operating principles, published investment criteria,
sector focus, portfolio, and a confidential inquiry form for owners and their
advisers.

> **Status:** the copy, financial ranges, portfolio entries and contact details
> shipped here are editable defaults and placeholders. Work through the
> [placeholders checklist](#placeholders-checklist) before this goes live.

## Stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router, React 19, Turbopack)  |
| Language   | TypeScript (strict)                           |
| Styling    | Tailwind CSS v4 with a custom `@theme`         |
| Typography | Newsreader (display) + Inter (UI), via `next/font` |
| Hosting    | Any Node host or Vercel; fully static except the inquiry API route |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (must pass before merging)
npm start          # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            root layout, fonts, metadata, header/footer
│  ├─ page.tsx              home / thesis
│  ├─ approach/             principles + process + quotes
│  ├─ criteria/             investment criteria, anti-criteria, structures
│  ├─ sectors/              four focus sectors
│  ├─ portfolio/            portfolio entries (placeholders)
│  ├─ contact/              inquiry form + contact details
│  ├─ api/inquiry/route.ts  stub inquiry endpoint
│  ├─ icon.svg              favicon (geometric owl mark)
│  ├─ opengraph-image.tsx   generated 1200×630 social card
│  ├─ sitemap.ts, robots.ts
│  ├─ not-found.tsx
│  └─ globals.css           design tokens + base/component styles
├─ components/
│  ├─ primitives.tsx        Container, Section, Eyebrow, Rule, SectionHeading, ActionLink
│  ├─ OwlMark.tsx           brand mark
│  ├─ SiteHeader.tsx        fixed nav (transparent over hero, solid on scroll)
│  ├─ SiteFooter.tsx
│  ├─ InquiryForm.tsx       client form with mailto fallback
│  ├─ Reveal.tsx            scroll-reveal wrapper
│  ├─ StructuredData.tsx    Organization JSON-LD
│  └─ sections/             HomeHero, PageHero, PrinciplesGrid, CriteriaColumns,
│                           SectorList, PortfolioList, QuoteList, ContactCta
└─ content/                 ← all editable copy lives here
   ├─ site.ts               brand, nav, contact details, footer/legal text
   ├─ home.ts               hero, thesis narrative, stats, closing CTA
   ├─ principles.ts         approach copy, six principles, process, quotes
   ├─ criteria.ts           criteria groups, financial ranges, anti-criteria
   ├─ sectors.ts            four sectors and their verticals
   └─ portfolio.ts          portfolio entries
```

### Editing content

Everything a non-engineer would want to change lives in `src/content/` as plain
TypeScript objects and arrays. No CMS, no MDX, no build step beyond the normal
one. Add or remove array entries and the layouts adapt:

- `principles.ts` → the principles grid reflows at any count (3 per row on desktop)
- `sectors.ts` → sector rows are numbered automatically
- `portfolio.ts` → entries render in order; the home page shows the first three
- `navigation` in `site.ts` → drives both the desktop nav and the mobile menu

## Design system

A deliberately restrained institutional palette, defined once in
`src/app/globals.css` under `@theme`:

| Token           | Value     | Use                                       |
| --------------- | --------- | ----------------------------------------- |
| `ink`           | `#101720` | dark navy-charcoal sections, header, footer |
| `ink-soft`      | `#18212e` | hover states on dark                      |
| `ink-line`      | `#27323f` | hairline rules on dark                    |
| `ink-muted`     | `#a7b0bd` | body copy on dark                         |
| `cream`         | `#f7f4ed` | primary light background                  |
| `cream-deep`    | `#efeae0` | alternating light background              |
| `sand`          | `#dcd5c6` | hairline rules on light                   |
| `graphite`      | `#545d6b` | body copy on light                        |
| `brass`         | `#a8834f` | accent on dark (labels, rules, mark)      |
| `brass-deep`    | `#7c5b2d` | accent text on light (AA contrast)        |

Conventions worth keeping if you extend the site:

- Sections alternate `cream` → `cream-deep` → `ink` for vertical rhythm; use the
  `Section` primitive's `tone` and `spacing` props rather than ad-hoc padding.
- Headings are serif; everything else is sans. Small uppercase tracked labels use
  the `.eyebrow` class.
- Cards are borderless — structure comes from hairline rules (`border-t`), not
  boxes or shadows.
- Long-form copy sits in a `max-w-3xl` measure via `Container width="prose"` or
  the `.editorial` class.

## Contact form

`src/app/api/inquiry/route.ts` is a **stub**. It validates and length-checks the
payload, logs a summary server-side, and returns `202`. Nothing is delivered
anywhere yet.

To make it real, replace the `console.info` call with your delivery mechanism
(transactional email, CRM, or webhook) and add whatever credentials it needs as
environment variables. Consider adding spam protection at the same time — the
endpoint currently has no rate limiting or captcha.

If the request fails for any reason, `InquiryForm` surfaces a `mailto:` fallback
pre-filled with everything the visitor typed, so an inquiry is never lost.

## Accessibility and SEO

- Skip-to-content link, single `h1` per page, labelled sections, and
  `aria-current` on the active nav item.
- Visible `:focus-visible` outlines; the mobile menu closes on `Escape` and locks
  body scroll while open.
- Colour pairings meet WCAG AA for body text; `brass-deep` is used instead of
  `brass` wherever accent text sits on a light background.
- All motion is suppressed under `prefers-reduced-motion`.
- Per-page `title`/`description`, canonical URLs, Open Graph and Twitter cards,
  a generated OG image, `sitemap.xml`, `robots.txt`, and Organization JSON-LD
  that deliberately omits any value still holding a `[Placeholder]`.

## Placeholders checklist

Everything below ships as a placeholder or an editable default. Replace before
launch.

**Contact and identity — `src/content/site.ts`**

- [ ] `site.url` — currently `https://babyowl.example`; required for correct
      canonical URLs, sitemap and OG tags
- [ ] `contact.email` — currently `contact@babyowl.example`
- [ ] `contact.phone` — currently `[Phone]`
- [ ] `contact.city` / `contact.region` — currently `[City]`, `[State]`
- [ ] `contact.address` — currently `[Street Address]`
- [ ] `footer.disclaimer` — have counsel review the legal language

**Investment mandate — `src/content/criteria.ts`**

- [ ] Revenue range (default `$10–75 million`)
- [ ] EBITDA range (default `$2–15 million`)
- [ ] Margin threshold (default `15%+`)
- [ ] Transaction structures on `/criteria`, if the mandate differs

**Firm claims — `src/content/home.ts`**

- [ ] `stats` — intended hold period, acquisitions per year, target revenue
- [ ] `thesis.paragraphs` — the narrative is written to be credible but is not
      a factual account of the firm's history

**Portfolio — `src/content/portfolio.ts`**

- [ ] Every entry is **fictional and illustrative**. Replace with real holdings,
      set `isPlaceholder: false` (which removes the "Placeholder" tag), fill in
      each `year`, and delete `portfolioIntro.placeholderNotice` plus
      `footer.placeholderNotice` in `site.ts` once nothing is illustrative.

**Infrastructure**

- [ ] Wire `src/app/api/inquiry/route.ts` to a real inbox or CRM
- [ ] Add spam protection / rate limiting to the inquiry endpoint
- [ ] Add analytics, if wanted

## Notes on the design

The visual language — cream and charcoal, serif headlines over a tracked-out
sans, hairline rules instead of cards, generous vertical rhythm — follows the
conventions of contemporary lower-middle-market private equity sites. The
BABYOWL name, mark, palette, copy and portfolio are original to this project.
