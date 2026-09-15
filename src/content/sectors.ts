export const sectorsIntro = {
  eyebrow: "Where we invest",
  headline: "Two markets we know properly.",
  headlineAccent: "know properly.",
  paragraphs: [
    "We invest in childcare franchise businesses, and in the land and buildings that shops are built on. Two markets, one habit of mind: local, physical, licensed, slow to change, and difficult to do well from a spreadsheet.",
    "Where the two overlap — backing a franchise operator and owning the freehold they trade from — is where we are most useful, and where most of our capital ends up.",
  ],
} as const;

/**
 * BABYOWL is an investor in childcare businesses, not an operator of them. Copy
 * here should always describe the companies we back — franchisees, franchisors,
 * platforms — and never address parents or describe care we provide ourselves.
 */
export const sectors = [
  {
    name: "Childcare Franchises",
    summary:
      "Franchise businesses in early years and school-age care. We back the operator and fund the growth; we do not run the settings ourselves.",
    verticals: [
      "Multi-site franchisee groups",
      "Master and area development rights",
      "Early-years and nursery franchise platforms",
      "After-school and holiday care operators",
      "Enrichment and activity franchise brands",
      "Franchisor support and back-office platforms",
    ],
  },
  {
    name: "Shop & Retail Real Estate",
    summary:
      "Land and buildings for shops — bought, built, or built to suit an occupier who has already signed.",
    verticals: [
      "Build-to-suit development for named occupiers",
      "Land acquisition and site assembly",
      "Neighbourhood retail parades and small-format units",
      "Freeholds with unused development capacity",
      "Roadside, forecourt and drive-through plots",
      "Consent-led conversions and change of use",
    ],
  },
  {
    name: "Where The Two Meet",
    summary:
      "Owning the bricks a franchise operator trades from. This is the position we like best, and the reason we do both.",
    verticals: [
      "Freeholds beneath settings we already back",
      "Purpose-built settings on land we own",
      "Sale-and-leaseback with operators we know well",
      "Site pipelines for a growing franchisee group",
      "Long leases at rents we set responsibly",
      "Sites with a credible second use if an operator moves on",
    ],
  },
] as const;
