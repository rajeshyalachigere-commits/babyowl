/**
 * Age-group programs. Edit the text here and every page updates.
 * Ratios, tuition, and schedules are placeholders — confirm against your
 * state licensing requirements before publishing.
 */
export type Program = {
  slug: string;
  name: string;
  ages: string;
  ratio: string;
  groupSize: string;
  tuition: string;
  summary: string;
  highlights: string[];
  schedule: { time: string; activity: string }[];
};

export const programs: Program[] = [
  {
    slug: "infants",
    name: "Infants",
    ages: "6 weeks – 18 months",
    ratio: "[1 teacher : 3 infants]",
    groupSize: "[6 babies]",
    tuition: "[$___ / week]",
    summary:
      "A quiet, unhurried room where babies are held, rocked, and talked to all day long. We follow your baby's own rhythm for feeding and sleeping — never a group schedule.",
    highlights: [
      "Individual feeding and nap schedules you set with us",
      "Separate, dimmed sleep space with safe-sleep cribs",
      "Tummy time, songs, and floor play every day",
      "Photos, bottles, diapers, and naps logged in the parent app",
    ],
    schedule: [
      { time: "Morning", activity: "Arrival snuggles, bottles, and tummy time" },
      { time: "Midday", activity: "Naps on demand, then sensory baskets and books" },
      { time: "Afternoon", activity: "Stroller walk, mirror play, and quiet songs" },
      { time: "Pickup", activity: "A written recap of feeds, naps, diapers, and firsts" },
    ],
  },
  {
    slug: "toddlers",
    name: "Toddlers",
    ages: "18 months – 3 years",
    ratio: "[1 teacher : 5 toddlers]",
    groupSize: "[10 toddlers]",
    tuition: "[$___ / week]",
    summary:
      "Busy hands need somewhere to go. Toddlers move between messy art, water tables, climbing, and stories, with gentle coaching on words, sharing, and big feelings.",
    highlights: [
      "Predictable daily rhythm that makes transitions easier",
      "Language-rich play: naming, singing, narrating, reading",
      "Potty learning partnership whenever your child is ready",
      "Two outdoor blocks a day, weather permitting",
    ],
    schedule: [
      { time: "Morning", activity: "Free play, breakfast, and circle songs" },
      { time: "Midday", activity: "Outdoor play, lunch, then nap or quiet rest" },
      { time: "Afternoon", activity: "Art, sensory bins, and small-group games" },
      { time: "Pickup", activity: "Story time and a hand-off chat with your teacher" },
    ],
  },
  {
    slug: "preschool",
    name: "Preschool",
    ages: "3 – 5 years",
    ratio: "[1 teacher : 8 children]",
    groupSize: "[16 children]",
    tuition: "[$___ / week]",
    summary:
      "Kindergarten readiness without worksheets. Preschoolers explore letters, numbers, and nature through projects they help choose, and practice the friendship skills that matter most.",
    highlights: [
      "Play-based early literacy and number sense",
      "Long project blocks: building, planting, measuring, making",
      "Practice with turn-taking, problem-solving, and self-help skills",
      "A kindergarten-readiness summary shared with families each term",
    ],
    schedule: [
      { time: "Morning", activity: "Greeting, breakfast, and morning meeting" },
      { time: "Midday", activity: "Project time, outdoor learning, and lunch" },
      { time: "Afternoon", activity: "Rest, then centers, music, and movement" },
      { time: "Pickup", activity: "Reflection circle and a look at today's work" },
    ],
  },
];
