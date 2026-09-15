import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import {
  ButtonLink,
  Card,
  CheckItem,
  Container,
  PhotoPlaceholder,
  Section,
  SectionHeading,
} from "@/components/ui";
import { values } from "@/content/home";
import { team } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About us",
  description: `Meet the team behind ${site.name} — our mission, our values, and why families trust us with their infants, toddlers, and preschoolers.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${site.name}`,
    description: `Our mission, values, and the people who care for your child every day.`,
    url: "/about",
  },
};

const promises = [
  "Your child is greeted by name, every single morning.",
  "You hear from us the same day something matters — good or hard.",
  "Ratios stay low even when we are busy, because that is the whole point.",
  "Teachers are paid and supported well enough to stay, so faces stay familiar.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${site.name}`}
        title="Small by design, warm on purpose"
        intro={`${site.name} was founded on a simple belief: young children thrive in small groups, with the same trusted adults, in a calm room where nobody is rushing them. We built the program we wanted for our own families.`}
      >
        <ButtonLink href="/contact">Schedule a visit</ButtonLink>
      </PageHero>

      {/* ------------------------------------------------------------ mission */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title="To give every child a safe, joyful place to be exactly their age"
              intro="We are not trying to be the biggest center in [City, State]. We are trying to be the one where your child is truly known — where a teacher notices a new word, a sore tooth, or a shy day, and tells you about it."
            />
            <p className="mt-6 leading-relaxed text-ink-muted">
              Children spend a remarkable share of their early years in
              childcare. That time should feel like a second home: predictable
              routines, real relationships, plenty of outdoor air, and adults
              who respond with kindness rather than a clipboard.
            </p>
            <ul className="mt-8 space-y-3">
              {promises.map((promise) => (
                <CheckItem key={promise}>{promise}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <PhotoPlaceholder
              label="Photo: your entryway"
              shape="arch"
              className="aspect-3/4 w-full"
            />
            <div className="grid gap-5 sm:mt-12">
              <PhotoPlaceholder
                label="Photo: reading nook"
                className="aspect-square w-full"
              />
              <PhotoPlaceholder
                label="Photo: snack time"
                className="aspect-square w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- values */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we value"
            title="Four things we refuse to compromise on"
            align="center"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <li key={value.title}>
                <Card className="h-full">
                  <span className="font-display text-sm font-bold tracking-[0.16em] text-apricot-500 uppercase">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-teal-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">
                    {value.body}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* --------------------------------------------------------------- story */}
      <Section className="bg-cream-100/60">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <PhotoPlaceholder
            label="Photo: the founder with children"
            className="aspect-4/3 w-full"
          />
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={`How ${site.name} started`}
            />
            <div className="mt-6 space-y-4 leading-relaxed text-ink-muted">
              <p>
                After years of working in larger centers, our founder kept
                running into the same problem: wonderful teachers stretched too
                thin to give families the attention they deserved. Parents were
                handed a checklist at pickup instead of a conversation.
              </p>
              <p>
                {site.name} opened in [Year] to do it differently — fewer
                children, longer-tenured teachers, and a daily rhythm designed
                around how toddlers actually behave at 4 p.m. The owl in our
                logo is a small promise: watchful, calm, awake to what your
                child needs.
              </p>
              <p>
                Today we care for children from six weeks through pre-K in{" "}
                {site.address.cityState}, and most of our new families come from
                a neighbor&apos;s recommendation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- team */}
      <Section>
        <SectionHeading
          eyebrow="Our teachers"
          title="The people who will know your child best"
          intro="Every teacher completes a background check, holds current CPR and first-aid certification, and takes part in ongoing early-childhood training each year."
          align="center"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <li key={`${member.name}-${member.role}`}>
              <Card className="h-full">
                <PhotoPlaceholder
                  label="Photo: staff headshot"
                  className="mb-6 aspect-square w-24"
                />
                <h3 className="text-xl font-bold text-teal-900">
                  {member.name}
                </h3>
                <p className="mt-1 font-medium text-teal-600">{member.role}</p>
                <p className="mt-1 text-sm text-ink-muted">
                  {member.credentials}
                </p>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {member.bio}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------------------- licensing */}
      <section className="bg-teal-50/70 py-16 sm:py-20">
        <Container>
          <Card className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <SectionHeading
                eyebrow="Licensing & credentials"
                title="Licensed, insured, and inspected"
                intro={`${site.name} operates under license ${site.licenseNumber}, issued by [state licensing agency]. Our current inspection report and family handbook are available on request — just ask on your tour.`}
              />
            </div>
            <ul className="space-y-3 md:col-span-1">
              <CheckItem>Annual state health &amp; safety inspection</CheckItem>
              <CheckItem>Background checks for all adults on site</CheckItem>
              <CheckItem>Liability insurance policy [policy #]</CheckItem>
              <CheckItem>Written emergency &amp; illness policies</CheckItem>
            </ul>
          </Card>
        </Container>
      </section>

      <CtaBand
        title="We would love to meet your family."
        body="Tell us a little about your child and we will follow up with openings, tuition, and a good time to visit."
      />
    </>
  );
}
