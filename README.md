# BABYOWL — childcare website

The marketing website for **BABYOWL**, a small licensed childcare home for
infants, toddlers, and preschoolers.

Four pages, all mobile-first: **Home**, **About**, **Programs**, and
**Contact & Enroll** (plus a privacy notice and a friendly 404 page).

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and
[Tailwind CSS](https://tailwindcss.com). It deploys to
[Vercel](https://vercel.com) for free.

---

## 1. Run the site on your computer

You need [Node.js](https://nodejs.org) 20 or newer. Install it once, then in a
terminal window inside this folder:

```bash
npm install       # download the site's building blocks (first time only)
npm run dev       # start the site locally
```

Open <http://localhost:3000>. Edits you save appear in the browser instantly.
Press `Ctrl + C` in the terminal to stop.

Two other commands, handy before you publish:

```bash
npm run build     # make sure the site still builds with no errors
npm run lint      # check the code for mistakes
```

---

## 2. How to edit the words on the site

**Almost all editable text lives in the `src/content/` folder.** You can change
it in any text editor — no coding required. Keep the quotation marks and commas
where they are, and only change the text *inside* the quotes.

| I want to change… | Open this file |
| --- | --- |
| Business name, address, phone, email, hours, license number, social links | `src/content/site.ts` |
| Age groups: names, ages, ratios, tuition, highlights, daily schedule | `src/content/programs.ts` |
| Trust badges, values, "what families get", parent quotes, FAQs | `src/content/home.ts` |
| Staff names, titles, and bios | `src/content/team.ts` |

Text that only appears on one page lives in that page's file:

| Page | File |
| --- | --- |
| Home | `src/app/page.tsx` |
| About | `src/app/about/page.tsx` |
| Programs (incl. daily rhythm + safety) | `src/app/programs/page.tsx` |
| Contact & Enroll | `src/app/contact/page.tsx` |
| Privacy notice | `src/app/privacy/page.tsx` |
| Header / navigation links | `src/components/site-header.tsx` and `nav` in `src/content/site.ts` |
| Footer | `src/components/site-footer.tsx` |

### Adding real photos

Every soft gradient panel with a faint owl is a **photo placeholder**. To use a
real photo:

1. Put the image file in the `public/` folder (for example
   `public/play-room.jpg`).
2. Find the matching `<PhotoPlaceholder label="Photo: …" />` line in the page
   file and replace it with:

```tsx
import Image from "next/image";

<Image
  src="/play-room.jpg"
  alt="Toddlers building with blocks in our main play room"
  width={800}
  height={600}
  className="rounded-4xl w-full"
/>
```

Always write a short, literal `alt` description — it is what screen readers and
search engines read. Get written parent permission before publishing any photo
of a child.

### Brand colors and fonts

Colors and fonts are defined once, at the top of `src/app/globals.css` (look for
`@theme`). Change a value there and it updates across the whole site. The logo
is a hand-drawn SVG owl in `src/components/owl-mark.tsx`, reused for the browser
tab icon (`src/app/icon.svg`) and the social sharing image
(`src/app/opengraph-image.tsx`).

---

## 3. Placeholders to replace before launch

Anything wrapped in `[square brackets]` is a placeholder. Search the project for
`[` to find them all. The important ones:

- [ ] **Street address** — `[Address]` in `src/content/site.ts`
- [ ] **City, state, ZIP** — `[City, State ZIP]` in `src/content/site.ts` (also
      appears in home and about copy)
- [ ] **Phone number** — `[Phone]` in `src/content/site.ts`; consider making it
      a clickable `tel:` link
- [ ] **Email address** — `hello@babyowl.example` → your real inbox
      (`src/content/site.ts`)
- [ ] **Opening hours** — `[Open time] – [Close time]` in `src/content/site.ts`
- [ ] **State license number and licensing agency** — `[State license #]`,
      `[state licensing agency]`
- [ ] **Insurance policy number** — `[policy #]` on the About page
- [ ] **Teacher-to-child ratios, group sizes, tuition** — `src/content/programs.ts`
      (confirm against your state's current licensing rules)
- [ ] **Daily schedule times** — `dayRhythm` in `src/app/programs/page.tsx`
- [ ] **Founding year** — `[Year]` on the About page
- [ ] **Staff names, credentials, bios** — `src/content/team.ts`
- [ ] **Parent testimonials** — `testimonials` in `src/content/home.ts` (use real
      quotes, with permission)
- [ ] **Sick-child details** — `[temperature]`, `[24 hours]` on the Programs page
      and in the FAQs
- [ ] **Tour days/times and reply time** — `[days/times]`, `[1–2 business days]`
- [ ] **Privacy notice specifics** — retention window, who sees inquiries, "last
      updated" date in `src/app/privacy/page.tsx`
- [ ] **Social media links** — `social` in `src/content/site.ts` (or delete them)
- [ ] **Photos** — replace every photo placeholder (see above)
- [ ] **Live website address** — `url` in `src/content/site.ts`, used for SEO,
      the sitemap, and social previews

---

## 4. Put it online (Vercel)

1. Push this repository to GitHub.
2. Create a free account at [vercel.com](https://vercel.com) and choose
   **Add New → Project**, then pick this repository.
3. Vercel detects Next.js automatically. Leave every setting as-is and click
   **Deploy**.
4. You get a live URL in a minute or two. To use your own domain, open
   **Project → Settings → Domains**, add `babyowl.com` (or whichever domain you
   own), and follow the DNS instructions.
5. After you have the real domain, update `url` in `src/content/site.ts` so
   search engines and social previews point at it.

From then on, every change you push to the `main` branch publishes
automatically, and every pull request gets its own preview link.

---

## 5. Receiving form submissions for real

The Contact form validates everything in the browser and then posts to
`src/app/api/inquiries/route.ts`. **That handler currently only writes the
inquiry to the server log** (visible under *Logs* in the Vercel dashboard) — it
does not email you. Nothing breaks, but you would miss inquiries.

Pick one of these before launch:

- **Email service (recommended).** Sign up for [Resend](https://resend.com) or
  [Postmark](https://postmarkapp.com), add your API key as an environment
  variable in Vercel (**Settings → Environment Variables**), and send the
  payload from the `POST` handler. The file has a comment marking the spot.
- **Form service.** Point the form at [Formspree](https://formspree.io) or
  Netlify Forms and skip the API route entirely.
- **Email-only fallback.** Delete the form and keep the `mailto:` links that
  already appear beside it and in the footer.

If the request ever fails, the form shows the parent a "send it as an email
instead" link with their message pre-filled, so no inquiry is lost.

---

## 6. Project structure

```
src/
├─ app/
│  ├─ layout.tsx          # header + footer wrapper, fonts, site-wide SEO
│  ├─ page.tsx            # Home
│  ├─ about/page.tsx      # About
│  ├─ programs/page.tsx   # Programs, daily rhythm, safety & ratios
│  ├─ contact/page.tsx    # Contact & Enroll, FAQs
│  ├─ privacy/page.tsx    # Privacy notice
│  ├─ api/inquiries/      # Contact form handler (stub)
│  ├─ icon.svg            # Browser tab icon
│  ├─ opengraph-image.tsx # Social sharing image
│  ├─ sitemap.ts          # /sitemap.xml
│  ├─ robots.ts           # /robots.txt
│  └─ globals.css         # Brand colors, fonts, base styles
├─ components/            # Header, footer, logo, buttons, cards, form
└─ content/               # ← plain-text content you edit
```

## Accessibility notes

The site is built to be usable with a keyboard and a screen reader: semantic
landmarks, a skip-to-content link, visible focus outlines, labelled form fields
with spoken error messages, alt text on meaningful imagery, and colors chosen
for readable contrast. If you add sections, keep headings in order (one `h1` per
page, then `h2`, then `h3`) and always pair an input with a `<label>`.
