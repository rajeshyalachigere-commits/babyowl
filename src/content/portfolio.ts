export const portfolioIntro = {
  eyebrow: "Portfolio",
  headline: "Businesses we intend to own for a very long time.",
  headlineAccent: "for a very long time.",
  paragraphs: [
    "We measure ourselves by whether these businesses are better run, better staffed and more durable than the day we bought them — not by how quickly we can sell them.",
  ],
  /**
   * PLACEHOLDER NOTICE — keep this visible until real holdings replace the
   * illustrative entries below. See README.md "Placeholders checklist".
   */
  placeholderNotice:
    "Illustrative placeholders. The companies below are examples of the profile we pursue and do not represent completed transactions.",
} as const;

/**
 * PLACEHOLDER: every entry below is fictional and exists only to show the
 * intended layout. Replace with real portfolio companies before launch, and
 * remove `isPlaceholder` once an entry is genuine.
 */
export const portfolio = [
  {
    name: "Northwind Facility Group",
    sector: "Essential Business Services",
    // PLACEHOLDER: replace with the real investment year.
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A regional provider of contracted janitorial and building maintenance services to schools, clinics and light industrial sites.",
    detail:
      "Founder-led for twenty-two years. The thesis is unglamorous: route density, disciplined pricing, and giving supervisors a career path so that crews stop turning over every nine months.",
  },
  {
    name: "Cedar Line Veterinary Partners",
    sector: "Multisite Consumer Services",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "A group of general-practice veterinary clinics operating under their original local names.",
    detail:
      "We keep the sign on the building and the doctor in the room. Central support absorbs scheduling, billing and hiring so clinicians can go back to practising medicine.",
  },
  {
    name: "Meridian Testing & Inspection",
    sector: "Essential Business Services",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "Accredited materials testing and field inspection for infrastructure and commercial construction.",
    detail:
      "A licence-and-reputation business where accreditation is the moat. Growth comes from adding certifications and technicians in adjacent metros, one at a time.",
  },
  {
    name: "Halyard Managed Technology",
    sector: "Technology-Enabled Services",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "Managed IT and cybersecurity services for mid-sized professional-services firms.",
    detail:
      "Bought from two engineers who had built an excellent service organisation and a nonexistent sales function. The work is commercial discipline, not a rebuild.",
  },
  {
    name: "Ashfield Rehabilitation Services",
    sector: "Healthcare Services",
    year: "[Year]",
    status: "Current",
    isPlaceholder: true,
    summary:
      "Outpatient physical therapy clinics serving suburban and small-city markets.",
    detail:
      "Clinician-owned and clinician-run. We fund new locations, take payer contracting and credentialing off the founders' desk, and leave the treatment model alone.",
  },
  {
    name: "Brightwater Home Services",
    sector: "Multisite Consumer Services",
    year: "[Year]",
    status: "Realised",
    isPlaceholder: true,
    summary:
      "Residential plumbing, HVAC and water treatment across a single metropolitan region.",
    detail:
      "Held while the second-generation family leadership took full control, then sold to that team. Not every good outcome is a sale to a stranger.",
  },
] as const;
