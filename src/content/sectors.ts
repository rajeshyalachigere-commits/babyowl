export const sectorsIntro = {
  eyebrow: "Focus sectors",
  headline: "Where our experience is worth something.",
  headlineAccent: "worth something.",
  paragraphs: [
    "We concentrate where we have operated. In each of these markets we have run a business, fixed a business, or spent enough years around one to know which problems are real and which are noise.",
    "Outside these four areas we are usually the wrong owner, and we will say so early.",
  ],
} as const;

export const sectors = [
  {
    name: "Essential Business Services",
    summary:
      "Recurring, contracted services that a customer notices only when they stop.",
    verticals: [
      "Facilities, janitorial & building services",
      "Testing, inspection & certification",
      "Industrial & specialty equipment distribution",
      "Compliance, safety & risk advisory",
      "Fleet, logistics support & last-mile services",
      "Utility, telecom & infrastructure services",
    ],
  },
  {
    name: "Healthcare Services",
    summary:
      "Outpatient and support businesses where clinical quality and throughput both matter.",
    verticals: [
      "Outpatient rehabilitation & physical therapy",
      "Vision, optometry & audiology",
      "Diagnostics, imaging & laboratory support",
      "Home health & hospice support services",
      "Revenue cycle & practice administration",
      "Medical & dental equipment service",
    ],
  },
  {
    name: "Multisite Consumer Services",
    summary:
      "Repeatable local businesses where unit economics and density drive the answer.",
    verticals: [
      "Veterinary & pet care services",
      "Residential repair, HVAC, plumbing & pest",
      "Specialty automotive aftermarket & collision",
      "Trade, licensing & workforce skills training",
      "Restoration & property remediation",
      "Franchise platforms with committed operators",
    ],
  },
  {
    name: "Technology-Enabled Services",
    summary:
      "Software and services embedded deeply enough in a workflow to be hard to remove.",
    verticals: [
      "Vertical market & field service software",
      "Managed IT & cybersecurity services",
      "Data, analytics & reporting services",
      "Payments, billing & workflow automation",
      "Engineering, design & technical outsourcing",
      "Regulated industry SaaS",
    ],
  },
] as const;
