export const sectorsIntro = {
  eyebrow: "Focus areas",
  headline: "Two places we put money, and no others.",
  headlineAccent: "and no others.",
  paragraphs: [
    "We invest where we have spent real time and where the questions are ones we can answer honestly: childcare franchises, and the real estate we develop into shop locations.",
    "Outside these two areas we are usually the wrong partner, and we will say so early.",
  ],
} as const;

export const sectors = [
  {
    name: "Childcare Franchises",
    summary:
      "Investments in franchisees and franchise platforms. We fund the operator and stand behind them; we do not run the centre.",
    verticals: [
      "Single-unit franchisees opening a second and third location",
      "Multi-unit platforms acquiring established centres",
      "Franchise territory and development-agreement financing",
      "Early learning and preschool franchise brands",
      "After-school, enrichment and tutoring franchises",
      "Succession for owner-operators inside an existing group",
    ],
  },
  {
    name: "Shop Real Estate",
    summary:
      "Land and buildings we acquire and develop into shop locations for operators who need a good site, not another landlord.",
    verticals: [
      "Ground-up development of single-tenant shop buildings",
      "Small neighbourhood retail rows and end-cap shop space",
      "Build-to-suit sites for franchise and independent operators",
      "Redevelopment of tired or vacant retail parcels",
      "Land acquisition and entitlement for future shop sites",
      "Purpose-built premises for the childcare operators we back",
    ],
  },
] as const;
