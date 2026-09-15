export const criteriaIntro = {
  eyebrow: "Investment criteria",
  headline: "The businesses we buy, and the ones we pass on.",
  headlineAccent: "the ones we pass on.",
  paragraphs: [
    "We are specific on purpose. A narrow mandate means we can give a clear answer fast, which is worth more to a busy owner than a polite maybe.",
    "Treat the ranges below as a starting point rather than a gate. If a business is genuinely exceptional and sits just outside them, we would still like to hear about it.",
  ],
} as const;

/**
 * PLACEHOLDER: the financial ranges below are editable defaults.
 * Update them to match the firm's actual mandate before launch.
 */
export const criteriaGroups = [
  {
    label: "Owners & founders",
    items: [
      "Built the business themselves, or stewarded it through a generation",
      "Believe there is more to come, and want a partner to help get there",
      "Sceptical of conventional private equity — often for good reason",
      "Values-driven leaders who care what happens to their people after closing",
      "Open to staying involved, or to handing over to a team they trust",
    ],
  },
  {
    label: "Business fundamentals",
    items: [
      "A recognised leader in a large, growing, fragmented market",
      "Durable competitive edge from service quality, technical depth, or density",
      "Revenue that repeats — contracts, subscriptions, or genuine customer loyalty",
      "Clear unrealised potential through operations, pricing, or acquisition",
      "A business we can explain to a stranger in two minutes",
    ],
  },
  {
    label: "Financial profile",
    items: [
      "$10–75 million of revenue",
      "$2–15 million of EBITDA",
      "15%+ EBITDA margins, with a credible path to more",
      "Modest capital intensity and predictable working capital",
      "Majority recapitalisations, full buyouts, and succession transitions",
    ],
  },
] as const;

export const antiCriteria = {
  eyebrow: "Not a fit",
  headline: "Where we are the wrong buyer.",
  headlineAccent: "the wrong buyer.",
  items: [
    "Pre-revenue businesses, venture rounds, and minority growth equity",
    "Turnarounds, restructurings, and businesses in active distress",
    "Heavy construction risk, project-based revenue, and single-customer concentration",
    "Businesses that require a rapid exit to make the return work",
    "Anything where the plan depends on cutting the team that built it",
  ],
} as const;
