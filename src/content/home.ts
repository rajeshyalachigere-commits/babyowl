export const hero = {
  eyebrow: "Private Investment · Lower Middle Market",
  headline: "Owners first. Capital second.",
  subhead:
    "Long-term capital partnership for values-driven, entrepreneur-owned businesses — from people who have run them, not just funded them.",
  primaryCta: { href: "/contact", label: "Start a conversation" },
  secondaryCta: { href: "/approach", label: "How we partner" },
} as const;

export const thesis = {
  eyebrow: "Our thesis",
  headline: "A patient owner, on the same side of the table as the builder.",
  /** Long-form narrative. Each string renders as its own paragraph. */
  paragraphs: [
    "There has rarely been more capital chasing profitable lower-middle-market companies. For an owner considering a sale, that is genuinely good news for price. It is less good news for everything else. Abundant capital attracts buyers who arrive certain they understand a business better than the person who spent twenty years building it.",
    "Owners know how fragile the real assets are. The product that actually works. The customer who answers the phone because of a relationship earned over a decade. The crew that stayed through a hard year. None of it appears on a balance sheet, and all of it can be spent in a single quarter by an owner optimising for an exit that was scheduled before the ink dried.",
    "BABYOWL was founded to be the other option. We are operators and investors who have sat in the seat — hiring, firing, missing a covenant, making payroll in a bad month. We buy a small number of entrepreneur-owned businesses from owners who care what happens next, and then we hold them.",
    "We are not raising a fund with a five-year clock. We do not need a story for a fundraising deck. We need a handful of durable businesses, run well, compounding quietly for a very long time. If that sounds like your company — or a company you know — we would like to hear the story.",
  ],
  signature: {
    quote:
      "The best outcome we can produce is a company that is stronger in twenty years than it is the day we buy it.",
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
    // PLACEHOLDER: adjust to reflect the firm's actual pace.
    value: "1–2",
    label: "Acquisitions per year",
    detail: "A high bar, and the time to honour it.",
  },
  {
    // PLACEHOLDER: adjust to reflect the firm's actual check size.
    value: "$10–75M",
    label: "Target revenue",
    detail: "Profitable businesses in fragmented markets.",
  },
  {
    value: "100%",
    label: "Of calls returned",
    detail: "Including the ones where the answer is no.",
  },
] as const;

export const closing = {
  eyebrow: "No noise",
  headline: "Tell us about the business you built.",
  body: "Every conversation is confidential, and most of them do not lead to a transaction. We still want to have them. If the fit is not there, we will tell you quickly and, where we can, point you somewhere better.",
} as const;
