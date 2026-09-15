# BABYOWL

Marketing site for **BABYOWL**, a family-and-friends investment partnership.

The site is an editorial brochure: a thesis-led home page, where the capital
comes from, the partnership's operating principles, published investment
criteria, focus areas, portfolio, and a confidential inquiry form.

## Positioning

Two things drive every piece of copy on this site. Get these wrong and the tone
is wrong everywhere.

**1. Family and friends, not a fund.** BABYOWL invests the partners' own family
capital alongside friends who have known them for years. There are no outside
institutional investors, no fund vintage and no fixed term, which is why the
site can credibly promise patience. Keep the register warm but serious — a
partnership that returns every call, not an institution with a mandate. Avoid
private-equity vocabulary (LP, dry powder, platform roll-up, exit multiple) and
avoid the opposite failure of sounding like a hobby.

**2. Two investment focus areas.** BABYOWL invests in:

- **Childcare franchises** — the businesses that operate childcare settings
  under a franchise brand: multi-site franchisee groups, master and area
  development rights, franchisor platforms, and related activity brands.
- **Shop and retail real estate** — the land and buildings shops get built on:
  build-to-suit development, land acquisition, neighbourhood parades, and
  freeholds with unused capacity.

The two overlap where BABYOWL owns the freehold beneath an operator it backs,
and that overlap is treated as the strongest position rather than a footnote.

> **Important:** BABYOWL is an **investor in and landlord to** childcare
> businesses. It does not operate childcare settings. Copy must never address
> parents, describe care BABYOWL provides, list programmes or age groups as a
> service offering, or imply enrolment. Childcare appears only as an investment
> vertical, describing the companies BABYOWL backs. If a sentence would make
> sense on a nursery's own website, it does not belong here.

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
│  ├─ approach/             capital source + principles + process + quotes
│  ├─ criteria/             both criteria tracks, anti-criteria, structures
│  ├─ sectors/              the two focus areas and their overlap
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
│  ├─ InquiryForm.tsx       client form, audience selector, mailto fallback
│  ├─ Reveal.tsx            scroll-reveal wrapper
│  ├─ StructuredData.tsx    Organization JSON-LD
│  └─ sections/             HomeHero, PageHero, CapitalSection, PrinciplesGrid,
│                           CriteriaColumns, SectorList, PortfolioList,
│                           QuoteList, ContactCta
└─ content/                 ← all editable copy lives here
   ├─ site.ts               brand, nav, contact details, inquiry types, legal text
   ├─ home.ts               hero, thesis, capital source, stats, closing CTA
   ├─ principles.ts         approach copy, six principles, process, quotes
   ├─ criteria.ts           both criteria tracks, ranges, structures, anti-criteria
   ├─ sectors.ts            the two focus areas and their overlap
   └─ portfolio.ts          portfolio entries
```

### Editing content

Everything a non-engineer would want to change lives in `src/content/` as plain
TypeScript objects and arrays. No CMS, no MDX, no build step beyond the normal
one. Add or remove array entries and the layouts adapt:

- `principles.ts` → the principles grid reflows at any count, 3 per row on
  desktop, so multiples of three look tidiest
- `sectors.ts` → focus areas are numbered automatically; a `sector` value in
  `portfolio.ts` should match one of these `name` values
- `criteria.ts` → `criteriaPreview` is the three-column summary on the home page;
  `franchiseCriteria` and `propertyCriteria` are the full tracks on `/criteria`
- `portfolio.ts` → entries render in order; the home page shows the first three
- `navigation` in `site.ts` → drives both the desktop nav and the mobile menu
- `inquiryTypes` in `site.ts` → drives the contact form's audience selector.
  Each entry sets whether the company field is required and which prompt and
  hint the message field shows. The `value` strings are also validated
  server-side, so update the allow-list in `src/app/api/inquiry/route.ts` at the
  same time.

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

- [ ] `franchiseCriteria` group revenue range (default `$3–40 million`)
- [ ] `franchiseCriteria` minimum number of settings (default two trading)
- [ ] `propertyCriteria` cost per scheme (default `$1–15 million`)
- [ ] `propertyCriteria` scheme size (default one to eight units)
- [ ] The six `structures`, if the partnership transacts differently
- [ ] Currency — everything is written in `$`; switch if the partnership
      invests in another market

**Partnership claims — `src/content/home.ts`**

- [ ] `stats` — whose money, intended hold period, investments a year
- [ ] `capital` — the description of the investor circle is plausible but is not
      a factual account of who is actually invested
- [ ] `thesis.paragraphs` — written to be credible, not a factual history

**Portfolio — `src/content/portfolio.ts`**

- [ ] Every entry is **fictional and illustrative**, covering both focus areas.
      Replace with real holdings, set `isPlaceholder: false` (which removes the
      "Placeholder" tag), fill in each `year`, ensure `sector` matches a `name`
      in `sectors.ts`, and delete `portfolioIntro.placeholderNotice` plus
      `footer.placeholderNotice` in `site.ts` once nothing is illustrative.

**Infrastructure**

- [ ] Wire `src/app/api/inquiry/route.ts` to a real inbox or CRM
- [ ] Add spam protection / rate limiting to the inquiry endpoint
- [ ] Add analytics, if wanted

## Notes on the design

The visual language — cream and charcoal, serif headlines with an italic accent
phrase, tracked-out uppercase labels, hairline rules instead of cards, generous
vertical rhythm — follows the conventions of contemporary private investment
sites. It was kept deliberately unchanged through the family-and-friends
rebrand: the restraint reads as seriousness, which matters more, not less, for a
partnership asking people to trust it with a business or a piece of land. All of
the warmth is carried by the copy.

The BABYOWL name, mark, palette, copy and portfolio are original to this
project.
