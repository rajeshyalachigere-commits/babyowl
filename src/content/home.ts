export const hero = {
  eyebrow: "Childcare Franchises · Shop Real Estate",
  headline: "We back the operator. We own the bricks.",
  /** Rendered in italic accent type inside the headline. Must be a substring of it. */
  headlineAccent: "We own the bricks.",
  subhead:
    "A small circle of families and close friends, investing their own money in childcare franchise businesses and the retail property that shops are built on.",
  primaryCta: { href: "/contact", label: "Start a conversation" },
  secondaryCta: { href: "/approach", label: "How we partner" },
} as const;

export const thesis = {
  eyebrow: "Who we are",
  headline: "A patient owner, on the same side of the table as the builder.",
  headlineAccent: "on the same side of the table",
  /** Long-form narrative. Each string renders as its own paragraph. */
  paragraphs: [
    "BABYOWL is a partnership of families and close friends. We invest our own money in two things: childcare businesses run under a franchise brand, and the land and buildings that shops get built on. We are investors in both, and operators of neither — the name above the door stays with the people who earned it.",
    "The two fit together more closely than they first appear. Both are local, physical and licensed. Both live or die on whether a specific site works for the people who use it every day. And both reward an owner who can wait, because consent takes time, a good manager takes longer, and neither can be hurried by putting more money on the table.",
    "The position we like best is holding both ends at once: backing an operator we trust, and owning the freehold they trade from. It gives the operator a landlord who wants them to still be there in twenty years, and it gives us a building that holds its worth regardless.",
    "There is no fund behind us, so there is no vintage year, no committed capital to spend before a deadline, and nobody to whom we must justify a decision that is right but slow. We need a handful of good businesses and a handful of good sites, held quietly for a very long time. If you run one, own one, or know one, we would like to hear about it.",
  ],
  signature: {
    quote:
      "The best outcome we can produce is a business that is stronger in twenty years than it is today, trading from a building we still own.",
    attribution: "BABYOWL Partners",
  },
} as const;

/**
 * Where the money comes from. This is the centre of BABYOWL's positioning, so
 * it gets its own section on the home page and on /approach.
 */
export const capital = {
  eyebrow: "Where our capital comes from",
  headline: "Families and friends, not a fund.",
  headlineAccent: "not a fund.",
  paragraphs: [
    "Our capital comes from a small, deliberately closed circle: the partners' own families, and friends who have known us long enough to hand over something that matters. Several have run companies of their own. Some have sold one, and remember exactly how that felt.",
    "That structure is not a marketing position; it changes what we are able to do. We can hold a building or a business indefinitely, wait two years for a planning decision, take a slower year without apologising for it, and say no to nine opportunities out of ten without anyone asking why the money is not working harder.",
  ],
  points: [
    {
      title: "No outside investors",
      body: "No institutional partners, no fund-of-funds, nobody whose own reporting calendar becomes our deadline.",
    },
    {
      title: "No fixed term",
      body: "There is no date on which we are obliged to sell. The right hold period is whatever the business needs.",
    },
    {
      title: "Personal, not anonymous",
      body: "Every investor is someone we know by name. If we lose their money, we see them at dinner.",
    },
  ],
} as const;

export const stats = [
  {
    // PLACEHOLDER: adjust to reflect the partnership's actual capital base.
    value: "Our own",
    label: "Whose money we invest",
    detail: "Family capital and friends who have known us for years.",
  },
  {
    // PLACEHOLDER: adjust to reflect the partnership's actual mandate.
    value: "Decades",
    label: "Intended hold period",
    detail: "No vintage year, so no date on which we must sell.",
  },
  {
    // PLACEHOLDER: adjust to reflect the partnership's actual pace.
    value: "One or two",
    label: "Investments a year",
    detail: "A franchise group, a site, or ideally both together.",
  },
  {
    value: "100%",
    label: "Of calls returned",
    detail: "Including the ones where the answer is no.",
  },
] as const;

export const closing = {
  eyebrow: "No noise",
  headline: "Tell us about your business, or your site.",
  headlineAccent: "or your site.",
  body: "Every conversation is confidential, and most of them do not lead anywhere. We still want to have them. If we are not the right partner we will say so quickly and, where we can, point you towards someone better.",
} as const;
