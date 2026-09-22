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
  tagline: "Family and friends capital, invested with patience.",
  description:
    "BABYOWL is a family and friends investment partnership. We back childcare franchises and develop the real estate that shops are built on, and we hold for decades rather than quarters.",
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
  { href: "/sectors", label: "Focus" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const footer = {
  statement:
    "BABYOWL invests capital from our own family and a small circle of friends, in childcare franchises and in the real estate we develop into shop locations. We are not a fund with a clock on it.",
  disclaimer:
    "This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Nothing herein should be construed as investment, legal, or tax advice.",
  // Shown until the portfolio content is replaced with real holdings.
  placeholderNotice:
    "Portfolio entries shown on this site are illustrative placeholders, not completed investments. BABYOWL invests in childcare franchises and retail real estate; it does not operate childcare centres.",
} as const;
