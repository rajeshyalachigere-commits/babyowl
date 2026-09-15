import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
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
import { differentiators, testimonials, trustSignals, values } from "@/content/home";
import { programs } from "@/content/programs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.shortDescription,
  alternates: { canonical: "/" },
};

const enrollmentSteps = [
  {
    step: "01",
    title: "Send an inquiry",
    body: "Tell us your child's age and the start date you have in mind. We reply within [1–2 business days] with current openings.",
  },
  {
    step: "02",
    title: "Tour together",
    body: "Visit during activity time, meet your child's would-be teachers, and see the room in full swing.",
  },
  {
    step: "03",
    title: "Settle in gently",
    body: "We plan short visits before day one so the first goodbye happens in a place your child already knows.",
  },
];

/** Helps search engines show hours, location, and contact details. */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: site.name,
  description: site.shortDescription,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.cityState,
  },
  openingHours: site.hours.map((entry) => `${entry.days} ${entry.time}`),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* ---------------------------------------------------------- hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-teal-50 via-cream-100 to-cream-50"
        />
        <div
          aria-hidden
          className="absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl"
        />
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-teal-800">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-apricot-400"
                />
                Now enrolling · Infants, Toddlers &amp; Preschool
              </p>
              <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold text-teal-900 sm:text-5xl lg:text-6xl">
                A gentle place to grow, from first steps to first day of school.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                {site.name} is a small licensed childcare home in{" "}
                {site.address.cityState}. Low ratios, familiar teachers, and
                unhurried days — plus daily notes so you always know how your
                child&apos;s day really went.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Book a tour</ButtonLink>
                <ButtonLink href="/programs" variant="secondary">
                  See our programs
                </ButtonLink>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {[
                  { value: "6 wks+", label: "Infants welcome" },
                  { value: "3 rooms", label: "Age-based groups" },
                  { value: "Daily", label: "Photo updates" },
                  { value: "Licensed", label: "& fully insured" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-xl font-bold text-teal-800">
                        {stat.value}
                      </span>
                      <span className="mt-0.5 block text-sm text-ink-muted">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <PhotoPlaceholder
                label="Photo: your bright main play room"
                shape="arch"
                className="aspect-4/5 w-full max-w-md lg:ml-auto"
              />
              <Card className="absolute -bottom-6 left-0 w-64 p-5 sm:left-6 lg:-left-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-teal-600 uppercase">
                  Today&apos;s note
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  “Slept 2 hours, ate all her pears, and pulled up on the couch
                  for the first time!”
                </p>
                <p className="mt-3 text-xs text-teal-700">
                  Sent to every family, every day.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- trust signals */}
      <section className="border-y border-teal-100 bg-cream-100/70 py-10 sm:py-12">
        <Container>
          <h2 className="sr-only">Why parents can feel at ease</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <li key={signal.label} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-teal-700 shadow-sm"
                >
                  <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" fill="none">
                    <path
                      d="M10 2.5 16 5v5c0 3.5-2.4 6.6-6 7.5-3.6-.9-6-4-6-7.5V5l6-2.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m7.4 9.9 1.9 1.9 3.4-3.6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-teal-900">{signal.label}</p>
                  <p className="text-sm text-ink-muted">{signal.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------ programs preview */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Programs"
            title="Care that grows with your child"
            intro="Three age groups, each with its own room, rhythm, and teaching team. Children move up when they are ready — not just when the calendar says so."
          />
          <ButtonLink href="/programs" variant="ghost" className="px-4">
            All program details
            <span aria-hidden>→</span>
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <li key={program.slug}>
              <Card className="flex h-full flex-col">
                <PhotoPlaceholder
                  label={`Photo: ${program.name.toLowerCase()} room`}
                  className="mb-6 aspect-16/10 w-full"
                />
                <Eyebrow>{program.ages}</Eyebrow>
                <h3 className="mt-2 text-2xl font-bold text-teal-900">
                  {program.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                  {program.summary}
                </p>
                <p className="mt-5 text-sm font-medium text-teal-700">
                  Ratio {program.ratio}
                </p>
                <Link
                  href={`/programs#${program.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 font-semibold text-teal-700 underline-offset-4 hover:underline"
                >
                  Explore {program.name.toLowerCase()}
                  <span aria-hidden>→</span>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------- our values */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our approach"
                title="Warm, watchful, and never rushed"
                intro="Young children learn best when they feel safe. Everything we do — the routines, the room, the way we say goodbye at the door — is built around that."
              />
              <ul className="mt-8 space-y-6">
                {values.map((value) => (
                  <li key={value.title}>
                    <h3 className="text-lg font-bold text-teal-800">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-ink-muted">
                      {value.body}
                    </p>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/about" variant="secondary" className="mt-9">
                More about {site.name}
              </ButtonLink>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
              <PhotoPlaceholder
                label="Photo: story time"
                className="aspect-square w-full sm:mt-10"
              />
              <PhotoPlaceholder
                label="Photo: fenced play yard"
                className="aspect-square w-full"
              />
              <PhotoPlaceholder
                label="Photo: art table"
                className="aspect-square w-full sm:mt-10"
              />
              <PhotoPlaceholder
                label="Photo: a teacher and child"
                className="aspect-square w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------- what you get */}
      <Section>
        <SectionHeading
          eyebrow="What families get"
          title="The details that make drop-off easier"
          align="center"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <li key={item.title}>
              <Card className="h-full bg-cream-100/60">
                <h3 className="text-lg font-bold text-teal-800">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------------------------------------------- how it works */}
      <section className="bg-teal-50/70 py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Enrolling"
            title="Three simple steps to your first day"
            align="center"
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {enrollmentSteps.map((item) => (
              <li key={item.step}>
                <Card className="h-full">
                  <span className="font-display text-3xl font-extrabold text-apricot-500">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-teal-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-10 max-w-xl">
            <ul className="space-y-3">
              <CheckItem>
                No application fee to inquire or tour.
              </CheckItem>
              <CheckItem>
                Waitlist spots are held in the order inquiries arrive.
              </CheckItem>
            </ul>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------- testimonials */}
      <Section>
        <SectionHeading
          eyebrow="From our families"
          title="Words from parents"
          align="center"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.attribution}>
              <Card className="flex h-full flex-col">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-apricot-400"
                  aria-hidden
                  fill="currentColor"
                >
                  <path d="M9.5 5C6.5 6.6 4.7 9.4 4.7 12.9V19h6.1v-6.1H7.6c0-2 .8-3.6 2.6-4.7L9.5 5Zm9.3 0c-3 1.6-4.8 4.4-4.8 7.9V19H20v-6.1h-3.2c0-2 .8-3.6 2.6-4.7L18.8 5Z" />
                </svg>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                  {testimonial.quote}
                </blockquote>
                <p className="mt-5 text-sm font-medium text-teal-700">
                  — {testimonial.attribution}
                </p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-ink-muted">
          Replace these with real quotes once families give you permission.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
