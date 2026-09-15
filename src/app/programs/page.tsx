import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import {
  ButtonLink,
  Card,
  CheckItem,
  Container,
  Eyebrow,
  PhotoPlaceholder,
  Section,
  SectionHeading,
} from "@/components/ui";
import { programs } from "@/content/programs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Programs & ages",
  description:
    "Infant, toddler, and preschool programs at BABYOWL — daily rhythms, teacher-to-child ratios, safety practices, and what your child does all day.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: `Programs & ages · ${site.name}`,
    description:
      "Infant, toddler, and preschool care with low ratios and play-based learning.",
    url: "/programs",
  },
};

const dayRhythm = [
  {
    time: "[7:00] – [8:30]",
    title: "Soft landings",
    body: "Arrival, breakfast, and quiet choices while the room fills up. Goodbyes are unhurried and always at the door.",
  },
  {
    time: "[8:30] – [10:00]",
    title: "Morning play & learning",
    body: "Circle songs, then centers: blocks, art, sensory tables, and small-group activities matched to each age.",
  },
  {
    time: "[10:00] – [11:15]",
    title: "Outside time",
    body: "Fenced yard, ride-on toys, digging, and running. Infants get stroller walks and blanket time in the shade.",
  },
  {
    time: "[11:15] – [12:15]",
    title: "Lunch together",
    body: "Family-style meals with teachers at the table, plus practice with cups, spoons, and cleanup.",
  },
  {
    time: "[12:15] – [2:30]",
    title: "Rest",
    body: "Cots, sound machine, and dimmed lights. Non-sleepers get books and quiet activities; infants nap on their own schedule.",
  },
  {
    time: "[2:30] – [4:00]",
    title: "Snack & projects",
    body: "The best part of the day for many children: longer project time, music, movement, and messy exploration.",
  },
  {
    time: "[4:00] – [6:00]",
    title: "Wind-down & pickup",
    body: "Open-ended play, a second outdoor block when weather allows, and a hand-off chat with your child's teacher.",
  },
];

const safetyPractices = [
  "Keypad-secured entry with authorized-pickup list and photo ID checks",
  "Daily health check at drop-off and sanitizing of toys and surfaces",
  "Safe-sleep practices in every crib: firm mattress, no loose bedding",
  "Allergy plans posted in the kitchen and in each child's room",
  "Monthly fire drills and written emergency, weather, and lockdown plans",
  "Incident reports shared with parents the same day, in writing",
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="One warm place from six weeks to pre-K"
        intro="Each age group has its own room, its own rhythm, and teachers who specialize in that stage. Below you will find ratios, daily schedules, and what learning actually looks like at each age."
      >
        <nav aria-label="Jump to a program" className="flex flex-wrap gap-2">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`#${program.slug}`}
              className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 transition-colors hover:border-teal-300 hover:bg-teal-50"
            >
              {program.name} · {program.ages}
            </Link>
          ))}
          <Link
            href="#safety"
            className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 transition-colors hover:border-teal-300 hover:bg-teal-50"
          >
            Safety &amp; ratios
          </Link>
        </nav>
      </PageHero>

      {/* ----------------------------------------------------- program blocks */}
      {programs.map((program, index) => (
        <section
          key={program.slug}
          id={program.slug}
          className={`scroll-mt-24 py-16 sm:py-20 ${
            index % 2 === 1 ? "bg-white" : ""
          }`}
        >
          <Container>
            <div
              className={`grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <Eyebrow>{program.ages}</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold text-teal-900 sm:text-4xl">
                  {program.name}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                  {program.summary}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { label: "Teacher ratio", value: program.ratio },
                    { label: "Group size", value: program.groupSize },
                    { label: "Tuition", value: program.tuition },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-teal-50 px-4 py-3"
                    >
                      <dt className="text-xs font-semibold tracking-[0.12em] text-teal-600 uppercase">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-semibold text-teal-900">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <h3 className="mt-9 text-lg font-bold text-teal-800">
                  What makes this room work
                </h3>
                <ul className="mt-4 space-y-3">
                  {program.highlights.map((highlight) => (
                    <CheckItem key={highlight}>{highlight}</CheckItem>
                  ))}
                </ul>

                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  className="mt-9"
                >
                  Ask about {program.name.toLowerCase()} openings
                </ButtonLink>
              </div>

              <div className="lg:sticky lg:top-28">
                <PhotoPlaceholder
                  label={`Photo: ${program.name.toLowerCase()} room`}
                  className="aspect-4/3 w-full"
                />
                <Card className="mt-6">
                  <h3 className="font-display text-lg font-bold text-teal-900">
                    A day in the {program.name.toLowerCase()} room
                  </h3>
                  <ol className="mt-4 space-y-4">
                    {program.schedule.map((slot) => (
                      <li key={slot.time} className="flex gap-4">
                        <span className="w-20 shrink-0 text-sm font-semibold text-teal-600">
                          {slot.time}
                        </span>
                        <span className="text-ink-muted">{slot.activity}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* --------------------------------------------------- day in the life */}
      <Section className="bg-cream-100/60">
        <SectionHeading
          eyebrow="Day in the life"
          title="Our daily rhythm"
          intro="Times are a guide, not a stopwatch — infants always follow their own schedule. Replace the bracketed times with your actual daily schedule."
          align="center"
        />
        <ol className="mx-auto mt-12 max-w-3xl space-y-4">
          {dayRhythm.map((slot) => (
            <li key={slot.title}>
              <Card className="flex flex-col gap-2 p-6 sm:flex-row sm:gap-6">
                <p className="w-40 shrink-0 font-semibold text-teal-600">
                  {slot.time}
                </p>
                <div>
                  <h3 className="text-lg font-bold text-teal-900">
                    {slot.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-ink-muted">
                    {slot.body}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------- safety */}
      <section id="safety" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Safety & ratios"
            title="The parts you should ask every provider about"
            intro={`We are licensed as ${site.licenseNumber} by [state licensing agency]. Confirm all ratios and group sizes against your state's current requirements before publishing this page.`}
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <caption className="sr-only">
                Teacher-to-child ratios and group sizes by program
              </caption>
              <thead>
                <tr className="border-b border-teal-200">
                  {["Program", "Ages", "Ratio", "Max group"].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="py-3 pr-4 text-sm font-semibold tracking-[0.1em] text-teal-700 uppercase"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {programs.map((program) => (
                  <tr key={program.slug} className="border-b border-teal-100">
                    <th
                      scope="row"
                      className="py-4 pr-4 font-semibold text-teal-900"
                    >
                      {program.name}
                    </th>
                    <td className="py-4 pr-4 text-ink-muted">{program.ages}</td>
                    <td className="py-4 pr-4 text-ink-muted">
                      {program.ratio}
                    </td>
                    <td className="py-4 pr-4 text-ink-muted">
                      {program.groupSize}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="bg-cream-100/60">
              <h3 className="text-xl font-bold text-teal-900">
                Everyday safety practices
              </h3>
              <ul className="mt-4 space-y-3">
                {safetyPractices.map((practice) => (
                  <CheckItem key={practice}>{practice}</CheckItem>
                ))}
              </ul>
            </Card>
            <Card className="bg-cream-100/60">
              <h3 className="text-xl font-bold text-teal-900">
                Health &amp; wellness
              </h3>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-muted">
                <p>
                  Immunizations are required for enrollment as allowed by [state]
                  law, and we keep a current emergency contact and medical form
                  for every child.
                </p>
                <p>
                  Children stay home with a fever over [temperature], vomiting,
                  or an unexplained rash, and return [24 hours] after symptoms
                  resolve. We notify all families in a room if a contagious
                  illness is reported.
                </p>
                <p>
                  Medication is only given with a signed authorization form and
                  is logged each time.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure which room fits your child?"
        body="Send us your child's birth date and desired start date, and we will tell you exactly where they would land and whether we have space."
      />
    </>
  );
}
