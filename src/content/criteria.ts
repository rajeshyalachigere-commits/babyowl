export const criteriaIntro = {
  eyebrow: "Investment criteria",
  headline: "The things we buy, and the ones we pass on.",
  headlineAccent: "the ones we pass on.",
  paragraphs: [
    "Being specific is a courtesy. Because we invest a limited pool of family money, we can tell you within a call whether this is going anywhere — which is worth more to a busy owner than a polite maybe.",
    "We buy two quite different things, so we judge them against two different sets of tests. Treat the ranges as a starting point rather than a gate: if something is genuinely exceptional and sits just outside them, we would still like to see it.",
  ],
} as const;

/**
 * Shown on the home page as a three-column summary of both mandates. The full
 * tests live in `franchiseCriteria` and `propertyCriteria` below.
 */
export const criteriaPreview = [
  {
    label: "Childcare franchises",
    items: [
      "An established franchise brand behind the business",
      "An operator who intends to stay and grow",
      "Settings that are full, or full for a good reason",
      "Room to add sites in a catchment we can service",
    ],
  },
  {
    label: "Shop real estate",
    items: [
      "A site where people already go, not one that needs inventing",
      "A clear route to consent, or consent already granted",
      "An occupier identified before we commit to building",
      "A second use if the first occupier ever leaves",
    ],
  },
  {
    label: "In both cases",
    items: [
      "People we would be glad to know for twenty years",
      "Cash that arrives predictably, not in lumps",
      "Something we can explain to a stranger in two minutes",
      "No requirement to sell again quickly to make it work",
    ],
  },
] as const;

/**
 * PLACEHOLDER: the financial ranges in both tracks below are editable defaults.
 * Update them to match the partnership's actual mandate before launch.
 */
export const franchiseCriteria = {
  eyebrow: "Track one",
  headline: "Childcare franchises: what we look for in an operator.",
  headlineAccent: "in an operator.",
  lead: "We invest in the businesses that run childcare settings under a franchise brand. We are the capital and the sounding board behind the operator, never the name above the door.",
  groups: [
    {
      label: "The operator",
      items: [
        "Runs the settings themselves, or has a manager they trust completely",
        "Wants to add sites, and has run out of their own capital before ambition",
        "Would rather answer to a family than to a fund",
        "Treats staff retention as the whole job, because it is",
        "Happy to stay on after we invest, on terms agreed in advance",
      ],
    },
    {
      label: "The business",
      items: [
        "An established franchisor behind it, with a brand worth the fee",
        "Settings running at or near capacity, with a waiting list where possible",
        "Clean regulatory history and inspections we can read without wincing",
        "Fees that reflect the quality of what is delivered",
        "A catchment with more demand than supply, and reason to think it lasts",
      ],
    },
    {
      label: "Size & shape",
      items: [
        "$3–40 million of revenue across the group",
        "Two or more settings already trading, or one and a signed pipeline",
        "Consistently profitable at the site level",
        "Franchise agreements with real term left to run",
        "Majority partnerships, succession handovers, and outright purchases",
      ],
    },
  ],
} as const;

export const propertyCriteria = {
  eyebrow: "Track two",
  headline: "Shop real estate: what we look for in a site.",
  headlineAccent: "in a site.",
  lead: "We buy land and buildings in order to put shops on them. Sometimes that means developing a site from scratch, sometimes buying an existing parade and doing the unglamorous work of filling it properly.",
  groups: [
    {
      label: "The site",
      items: [
        "Somewhere people already pass, park, or walk to daily",
        "A catchment we can drive around in an afternoon",
        "Frontage and access that a shopkeeper would actually choose",
        "Clean title, sensible boundaries, no inherited disputes",
        "Ground conditions and services that will not swallow the budget",
      ],
    },
    {
      label: "The scheme",
      items: [
        "Consent granted, or a credible route to it we have tested",
        "An occupier identified before we commit to building",
        "A build we can price with a contractor we have used before",
        "Unit sizes that suit independents, not only national chains",
        "A plausible second use if the first occupier ever moves on",
      ],
    },
    {
      label: "Size & shape",
      items: [
        "$1–15 million of total cost per site or scheme",
        "Build-to-suit, land acquisition, and standing freeholds",
        "Sites suited to one to eight retail units",
        "Held for income and long-term value, not for a quick resale",
        "Equity-led, with debt used sparingly and never to rescue a return",
      ],
    },
  ],
} as const;

export const structures = {
  eyebrow: "Structure",
  headline: "How an investment usually comes together.",
  headlineAccent: "comes together.",
  items: [
    {
      title: "A majority partnership",
      body: "The operator takes meaningful money off the table now and keeps a real stake in what comes next. We agree how decisions get made before anything is signed.",
    },
    {
      title: "A succession handover",
      body: "The business is passing to the next generation or to a long-serving manager. We supply the capital and the patience for a handover measured in years, not weeks.",
    },
    {
      title: "An outright purchase",
      body: "The owner is ready to step back entirely. We buy the business and work with the leadership already in place, or help find someone to stand alongside them.",
    },
    {
      title: "A freehold purchase",
      body: "We buy the land or building outright, either standing and let, or empty with a clear plan for what goes on it.",
    },
    {
      title: "Build to suit",
      body: "An occupier signs before we start. We fund the land and the build, they get premises made for their trade, and we hold the freehold behind them.",
    },
    {
      title: "Sale and leaseback",
      body: "An operator we know wants the capital tied up in their property working somewhere more useful. We buy the bricks and grant them a long lease at a rent they can live with.",
    },
  ],
} as const;

export const antiCriteria = {
  eyebrow: "Not a fit",
  headline: "Where we are the wrong buyer.",
  headlineAccent: "the wrong buyer.",
  items: [
    "Start-ups, single-setting first ventures, and unproven franchise brands",
    "Settings with unresolved regulatory or safeguarding findings",
    "Speculative development with no occupier in sight",
    "Large-format or single-tenant schemes that only one covenant can fill",
    "Anything that only works if it is sold again quickly",
    "Anything where the plan depends on cutting the team that built it",
  ],
} as const;
