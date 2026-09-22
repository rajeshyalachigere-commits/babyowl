export const portfolioIntro = {
  eyebrow: "Portfolio",
  headline: "Investments we intend to hold for a very long time.",
  headlineAccent: "for a very long time.",
  paragraphs: [
    "We measure ourselves by whether these businesses and buildings are better run, better staffed and more durable than the day we funded them — not by how quickly we could sell them.",
  ],
  /**
   * PLACEHOLDER NOTICE — keep this visible until real holdings replace the
   * illustrative entries below. See README.md "Placeholders checklist".
   */
  placeholderNotice:
    "Illustrative placeholders. The entries below are examples of the profile we pursue and do not represent completed investments.",
} as const;

/**
 * PLACEHOLDER: every entry below is fictional and exists only to show the
 * intended layout. Replace with real portfolio entries before launch, and
 * remove `isPlaceholder` once an entry is genuine.
 */
export const portfolio = [
  {
    name: "Morning Lane Early Learning",
    sector: "Childcare Franchises",
    // PLACEHOLDER: replace with the real investment year.
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A three-centre franchisee of a national early-learning brand, opening a fourth location in the same county.",
    detail:
      "We funded the fourth site and the working capital to open it slowly rather than cheaply. The founders keep running the centres and hiring their own teachers; we stay out of the classroom entirely.",
  },
  {
    name: "Willow Bend Shops",
    sector: "Shop Real Estate",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A six-unit neighbourhood shop building developed on a vacant corner parcel beside an established grocery anchor.",
    detail:
      "Land acquired, entitled and built out over two years. Four of the six units were pre-leased before the slab was poured, and rents are set to keep good tenants rather than to flatter an appraisal.",
  },
  {
    name: "Kindercourt Franchise Partners",
    sector: "Childcare Franchises",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A platform acquiring owner-operated childcare franchises from founders heading toward retirement.",
    detail:
      "The founders wanted their staff and their enrolled families looked after. We provided the equity and the timetable; the platform provides the back office and leaves each centre director in place.",
  },
  {
    name: "Harbor Row Retail Land",
    sector: "Shop Real Estate",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "Two adjacent parcels on a commuter corridor, held through entitlement for future shop development.",
    detail:
      "Unglamorous work: rezoning, a traffic study and eighteen months of patience. Land is the one part of a shop that cannot be added later, which is why we buy it early.",
  },
  {
    name: "Sunnyside Academy Group",
    sector: "Childcare Franchises",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A four-centre franchise group in a growing suburban market, with a purpose-built fifth centre under construction.",
    detail:
      "Both focuses meeting in a single investment: we backed the operator and separately developed the building they will occupy, on a long lease written to survive a slow first year.",
  },
  {
    name: "Maple & Vine Shopfronts",
    sector: "Shop Real Estate",
    year: "[Year]",
    status: "Realised",
    isPlaceholder: true,
    summary:
      "A small redevelopment of three town-centre shopfronts, sold to the tenants who occupied them.",
    detail:
      "Held while the tenants grew into the space and could finance the purchase themselves. Not every good outcome is a sale to a stranger.",
  },
] as const;
