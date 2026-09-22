export const hero = {
  eyebrow: "Family & Friends Capital · Childcare Franchises · Shop Real Estate",
  headline: "Family capital, with nowhere else to be.",
  /** Rendered in italic accent type inside the headline. Must be a substring of it. */
  headlineAccent: "with nowhere else to be.",
  subhead:
    "BABYOWL invests money that belongs to our family and our friends in two things we understand: childcare franchises, and the real estate we develop into shop locations.",
  primaryCta: { href: "/contact", label: "Start a conversation" },
  secondaryCta: { href: "/approach", label: "How we partner" },
} as const;

export const thesis = {
  eyebrow: "Our thesis",
  headline: "Capital that answers to people we know.",
  headlineAccent: "to people we know.",
  /** Long-form narrative. Each string renders as its own paragraph. */
  paragraphs: [
    "Most investment capital arrives with a stranger attached to it — a committee, a vintage year, and a return that has to be delivered on a schedule someone set before they ever met you. That arrangement works well enough for large companies with professional finance teams. It works badly for a family that has built one good childcare centre and wants to build four, or for an operator who needs someone to put up a building rather than simply lease one out.",
    "BABYOWL is funded differently. Our capital comes from our own family and from friends we have known for years — people who understand exactly what they are invested in, who are not waiting on a quarterly mark, and who would rather compound quietly than exit loudly. That single fact changes what we can offer an operator: time, a straight answer, and a partner who is still there in year ten.",
    "We invest in two places. The first is childcare franchises. We back franchisees and franchise platforms, fund new units and territories, and stand behind the operators who run them. We are investors and partners, not a daycare operator — we do not enrol children or run classrooms, and we would be poor at both.",
    "The second is the real estate underneath retail. We acquire land and buildings and develop them into shop locations for operators who need a good site more than they need another landlord. Both focuses reward the same discipline: careful underwriting, a long horizon, and money that is under no pressure to leave.",
  ],
  signature: {
    quote:
      "We invest money that belongs to people we will see at dinner. It makes us careful, and it makes us patient.",
    attribution: "BABYOWL Partners",
  },
} as const;

export const stats = [
  {
    // PLACEHOLDER: adjust to reflect the firm's actual mandate.
    value: "Decades",
    label: "Intended hold period",
    detail: "We underwrite to permanence, not to a fund life.",
  },
  {
    value: "Two",
    label: "Areas of focus",
    detail: "Childcare franchises and shop real estate. Nothing else.",
  },
  {
    value: "None",
    label: "Outside fund investors",
    detail: "The capital is our family's and our friends'.",
  },
  {
    value: "100%",
    label: "Of calls returned",
    detail: "Including the ones where the answer is no.",
  },
] as const;

export const closing = {
  eyebrow: "No noise",
  headline: "Tell us what you are trying to build.",
  headlineAccent: "what you are trying to build.",
  body: "Your third childcare location, a platform buying centres from retiring owners, or a corner you need a shop built on — the first conversation is confidential and costs nothing. Most of them do not lead to an investment. We still want to have them.",
} as const;
