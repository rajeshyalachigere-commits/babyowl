/**
 * Single source of truth for business details.
 *
 * Everything wrapped in [square brackets] is a placeholder that should be
 * replaced before the site goes live. See the checklist in README.md.
 */
export const site = {
  name: "BABYOWL",
  legalName: "BABYOWL Early Learning",
  tagline: "Warm, watchful care from the very first day",
  shortDescription:
    "BABYOWL is a small, licensed childcare home for infants, toddlers, and preschoolers — built on gentle routines, low ratios, and daily updates for parents.",
  /** Used for canonical URLs, sitemap, and Open Graph tags. */
  url: "https://babyowl.example",
  email: "hello@babyowl.example",
  /** Placeholder — replace with the real number and add a matching tel: link. */
  phone: "[Phone]",
  address: {
    street: "[Address]",
    cityState: "[City, State ZIP]",
  },
  hours: [
    { days: "Monday – Friday", time: "[Open time] – [Close time]" },
    { days: "Saturday", time: "[Hours or “Closed”]" },
    { days: "Sunday", time: "Closed" },
  ],
  /** Placeholder — replace with your state licensing number. */
  licenseNumber: "[State license #]",
  social: {
    instagram: "https://instagram.com/", // [Replace with your profile]
    facebook: "https://facebook.com/", // [Replace with your page]
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact & Enroll" },
] as const;
