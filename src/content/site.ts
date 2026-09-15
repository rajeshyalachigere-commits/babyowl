/**
 * Global site, brand and contact content.
 *
 * Values wrapped in square brackets (e.g. "[Phone]") are intentional
 * placeholders. See the "Placeholders checklist" section of README.md
 * for everything that needs to be replaced before launch.
 */

export const site = {
  name: "BABYOWL",
  legalName: "BABYOWL Partners",
  tagline: "Patient capital for businesses built to last.",
  description:
    "BABYOWL is a private investment firm acquiring entrepreneur-owned businesses in the lower middle market. We are operators and investors who hold for decades, not quarters.",
  // PLACEHOLDER: replace with the production domain before launch.
  url: "https://babyowl.example",
  locale: "en_US",
} as const;

export const contact = {
  // PLACEHOLDER: replace with a real inbox.
  email: "contact@babyowl.example",
  // PLACEHOLDER: replace with a real phone number.
  phone: "[Phone]",
  // PLACEHOLDER: replace with the firm's headquarters city and state.
  city: "[City]",
  region: "[State]",
  // PLACEHOLDER: replace with a real mailing address.
  address: "[Street Address]",
  responseTime: "We reply to every inquiry within two business days.",
} as const;

export const navigation = [
  { href: "/approach", label: "Approach" },
  { href: "/criteria", label: "Criteria" },
  { href: "/sectors", label: "Sectors" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const footer = {
  statement:
    "BABYOWL acquires and holds a small number of exceptional lower-middle-market businesses. We are not a fund with a clock on it.",
  disclaimer:
    "This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Nothing herein should be construed as investment, legal, or tax advice.",
  // Shown until the portfolio content is replaced with real holdings.
  placeholderNotice:
    "Portfolio entries shown on this site are illustrative placeholders, not completed transactions.",
} as const;
