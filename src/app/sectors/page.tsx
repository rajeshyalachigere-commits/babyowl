import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  AccentText,
  Container,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { ContactCta } from "@/components/sections/ContactCta";
import { PageHero } from "@/components/sections/PageHero";
import { SectorList } from "@/components/sections/SectorList";
import { sectorsIntro } from "@/content/sectors";

export const metadata: Metadata = {
  title: "Focus areas",
  description:
    "BABYOWL invests in two areas: childcare franchises, and the real estate we acquire and develop into shop locations. We are an investor and franchise partner, not a childcare operator.",
  alternates: { canonical: "/sectors" },
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow={sectorsIntro.eyebrow}
        title={sectorsIntro.headline}
        accent={sectorsIntro.headlineAccent}
        lead={sectorsIntro.paragraphs[0]}
      />

      <Section tone="cream" aria-labelledby="sectors-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="sectors-heading"
              eyebrow="Two areas"
              title="Deep, not wide."
              accent="not wide."
            >
              <p>{sectorsIntro.paragraphs[1]}</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <SectorList />
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="tight" aria-labelledby="lens-heading">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-brass">The common thread</p>
              <h2
                id="lens-heading"
                className="mt-6 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.12]"
              >
                <AccentText
                  text="Two focuses, underwritten the same way."
                  accent="underwritten the same way."
                />
              </h2>
            </Reveal>
            <Reveal delay={120} className="editorial">
              <p>
                A childcare franchise and a shop building look nothing alike on
                paper, and we underwrite both for the same thing: a local need
                that will still be there in twenty years, an operator who takes
                it seriously, and numbers that work without a heroic assumption.
              </p>
              <p>
                We are less interested in growth that depends on a single
                contract, a single channel or a single hire. We would rather
                back something that gets a little better every year for two
                decades than something that doubles once and then explains
                itself.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ContactCta
        eyebrow="In one of these two areas?"
        headline="We would like to hear from you early."
        accent="early."
        body="Even a year or two ahead of the next centre or the next site, a conversation with someone who has funded one before is rarely wasted time."
      />
    </>
  );
}
