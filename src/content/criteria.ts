export const criteriaIntro = {
  eyebrow: "Investment criteria",
  headline: "What we fund, and what we pass on.",
  headlineAccent: "what we pass on.",
  paragraphs: [
    "We are specific on purpose. A narrow mandate means we can give a clear answer fast, which is worth more to a busy operator than a polite maybe.",
    "Treat the ranges below as a starting point rather than a gate. If something sits just outside them and is genuinely good, we would still like to see it.",
  ],
} as const;

/**
 * PLACEHOLDER: the cheque sizes and project ranges below are editable
 * defaults. Update them to match the firm's actual mandate before launch.
 */
export const criteriaGroups = [
  {
    label: "Partners & operators",
    items: [
      "Run the business day to day, rather than from a distance",
      "Have opened at least one location and want to open the next",
      "Want a patient partner more than they want the largest cheque in the room",
      "Care what happens to their staff and their families after the money lands",
      "Comfortable with an investor who asks questions and then gets out of the way",
      "Equity commitments of roughly $500K–$5M, alongside the operator's own",
    ],
  },
  {
    label: "Childcare franchises",
    items: [
      "Established brands with a proven unit model and real franchisor support",
      "Licensed, compliant, and well regarded by the families already enrolled",
      "Unit economics that work before any assumed rate increase",
      "Demonstrated demand in the catchment — waitlists, not projections",
      "Multi-unit intent: a second or tenth centre, or a platform acquiring them",
      "Educator pay and retention treated as a cost of quality, not a lever to squeeze",
    ],
  },
  {
    label: "Shop real estate",
    items: [
      "Land or buildings we can acquire, develop or redevelop into shop space",
      "Visibility, access and everyday traffic that existed before we arrived",
      "Zoning and an entitlement path we can see all the way to the end of",
      "Build costs that underwrite without a heroic assumption",
      "Creditworthy tenants, often pre-leased, sometimes operators we already back",
      "Total project costs of roughly $1M–$10M, single-tenant or small multi-tenant",
    ],
  },
] as const;

export const antiCriteria = {
  eyebrow: "Not a fit",
  headline: "Where we are the wrong partner.",
  headlineAccent: "the wrong partner.",
  items: [
    "Running a childcare centre ourselves — we invest in franchises, we do not operate them",
    "Pre-opening concepts with no operator, no licence and no track record",
    "Speculative retail development with no tenant and no leasing plan",
    "Turnarounds, restructurings, and businesses in active distress",
    "Anything outside childcare franchises and shop real estate",
    "Deals that only work if somebody gets to exit quickly",
  ],
} as const;
