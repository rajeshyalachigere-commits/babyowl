export const portfolioIntro = {
  eyebrow: "Portfolio",
  headline: "Businesses we back, and buildings we keep.",
  headlineAccent: "buildings we keep.",
  paragraphs: [
    "We measure ourselves by whether these businesses are better run and better staffed than the day we invested, and whether the sites we built are still the ones people choose. Our own families own a share of every one, which is the only performance report that really matters to us.",
  ],
  /**
   * PLACEHOLDER NOTICE — keep this visible until real holdings replace the
   * illustrative entries below. See README.md "Placeholders checklist".
   */
  placeholderNotice:
    "Illustrative placeholders. The entries below are examples of the two kinds of investment we pursue and do not represent completed transactions.",
} as const;

/**
 * PLACEHOLDER: every entry below is fictional and exists only to show the
 * intended layout. Replace with real holdings before launch, and remove
 * `isPlaceholder` once an entry is genuine.
 *
 * `sector` should match a name from src/content/sectors.ts. Note that childcare
 * entries describe businesses we invest in — BABYOWL does not operate settings.
 */
export const portfolio = [
  {
    name: "Hollowbrook Early Years Group",
    sector: "Childcare Franchises",
    // PLACEHOLDER: replace with the real investment year.
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A franchisee group operating six early-years settings under a national franchise brand across two neighbouring counties.",
    detail:
      "The founder had built a full, well-inspected group and run out of capital two sites before she ran out of ambition. We funded the next three openings and took payroll, property and franchise reporting off her desk. She still runs it.",
  },
  {
    name: "Marlow Street Retail Parade",
    sector: "Shop & Retail Real Estate",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A seven-unit neighbourhood parade bought part-let, on a road people already walk down to reach the station.",
    detail:
      "Three units were empty and two were let below what the pitch deserved. The work was unglamorous: new shopfronts, sensible lease terms, and finding independents who wanted a twenty-year home rather than a twelve-month gamble.",
  },
  {
    name: "Ashcroft Lane Build-to-Suit",
    sector: "Shop & Retail Real Estate",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A roadside plot bought with outline consent and developed into four retail units for occupiers who signed before we broke ground.",
    detail:
      "We do not start building on hope. Two of the four units were pre-let at exchange, the contractor was one we had used twice before, and the scheme was designed so any unit could take a different trade later.",
  },
  {
    name: "Bright Lane Nursery Freeholds",
    sector: "Where The Two Meet",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "Four freeholds bought beneath settings operated by a franchisee group we already back, on long leases at rents set to be payable in a bad year.",
    detail:
      "This is the position we like best. The operator gets a landlord who wants them trading in twenty years' time rather than a rent review that squeezes them; we get buildings with a use, a tenant we know, and a plausible second use if anything changes.",
  },
  {
    name: "Kestrel Activity Franchising",
    sector: "Childcare Franchises",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A franchisor licensing an after-school and holiday activity brand to around forty owner-operators.",
    detail:
      "Bought from two founders who had built a brand franchisees genuinely valued and a support function that had not grown with it. The work is training, systems and territory discipline, not a rebrand.",
  },
  {
    name: "Fenwick Yard",
    sector: "Shop & Retail Real Estate",
    year: "[Year]",
    status: "Handed on",
    isPlaceholder: true,
    summary:
      "A small yard and workshop site converted to three retail units under a change of use.",
    detail:
      "Held while the scheme was consented, built and fully let, then sold to the family who had occupied the largest unit from the first week. Not every good outcome is a sale to a stranger.",
  },
] as const;
