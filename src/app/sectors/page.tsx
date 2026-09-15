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
  title: "Focus sectors",
  description:
    "BABYOWL concentrates on essential business services, healthcare services, multisite consumer services, and technology-enabled services in the lower middle market.",
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
              eyebrow="Four areas"
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
                  text="We are buying the same business four different ways."
                  accent="four different ways."
                />
              </h2>
            </Reveal>
            <Reveal delay={120} className="editorial">
              <p>
                Across all four sectors we are looking for the same shape:
                revenue that repeats, a customer who would notice if the service
                stopped, and a market fragmented enough that being well run is
                still a genuine advantage.
              </p>
              <p>
                We are less interested in growth that comes from a single
                contract, a single channel, or a single hire. We would rather
                own a business that grows a little every year for twenty years
                than one that doubles once and then explains itself.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ContactCta
        eyebrow="In one of these markets?"
        headline="We would like to hear from you early."
        accent="early."
        body="Even years ahead of a transaction, a conversation with someone who knows your market is rarely wasted time."
      />
    </>
  );
}
