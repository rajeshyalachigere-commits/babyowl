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
  tagline: "Patient capital from families and friends.",
  description:
    "BABYOWL is a family-and-friends investment partnership. We invest our own capital in childcare franchise businesses and in the land and buildings that shops are built on — as investors and landlords, never as operators.",
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

/**
 * Who the contact form is for. `value` is what the API stores, so change it
 * only alongside the allow-list in src/app/api/inquiry/route.ts.
 *
 * `wantsCompany` controls whether the company field is required, and
 * `prompt` replaces the message field's label for that audience.
 */
export const inquiryTypes = [
  {
    value: "owner",
    label: "I own or run a childcare or franchise business",
    wantsCompany: true,
    prompt: "About the business",
    hint: "How many settings you run, which brand you operate under, and what you are hoping happens next. A paragraph is plenty.",
  },
  {
    value: "landowner",
    label: "I have a site or property to introduce",
    wantsCompany: false,
    prompt: "About the site",
    hint: "Where it is, roughly how big, and what the planning position looks like. A location and a sentence is enough to start.",
  },
  {
    value: "adviser",
    label: "I advise an owner, or act for a landowner",
    wantsCompany: true,
    prompt: "About the business or site",
    hint: "What it is, who you represent, and what stage the conversation is at.",
  },
  {
    value: "family-or-friend",
    label: "I am family, or a friend, thinking about investing alongside you",
    wantsCompany: false,
    prompt: "What you would like to know",
    hint: "How you know us, and what you would like to understand before going further. We will arrange a call rather than send a deck.",
  },
  {
    value: "other",
    label: "Something else",
    wantsCompany: false,
    prompt: "How can we help?",
    hint: "A sentence or two is plenty.",
  },
] as const;

export const navigation = [
  { href: "/approach", label: "Approach" },
  { href: "/criteria", label: "Criteria" },
  { href: "/sectors", label: "Sectors" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const footer = {
  statement:
    "BABYOWL is a partnership of families and friends investing their own capital in childcare franchise businesses and in retail property. We back operators and own buildings; we do not run the settings ourselves. There is no fund behind us, and no clock.",
  disclaimer:
    "This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Nothing herein should be construed as investment, legal, or tax advice.",
  // Shown until the portfolio content is replaced with real holdings.
  placeholderNotice:
    "Portfolio entries shown on this site are illustrative placeholders, not completed transactions.",
} as const;
