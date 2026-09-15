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
    "BABYOWL invests in essential business services, healthcare services, multisite consumer services, and technology-enabled services — the markets our partners have worked in themselves.",
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
              eyebrow="Two focus areas, one overlap"
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
                  text="A childcare group and a parade of shops are the same investment."
                  accent="the same investment."
                />
              </h2>
            </Reveal>
            <Reveal delay={120} className="editorial">
              <p>
                Both are bets on a specific place. A nursery works because it is
                on the road parents already drive down; a shop works because it
                is where people already stop. Neither can be relocated to
                improve a return, and neither can be fixed from a distance.
              </p>
              <p>
                Both also reward waiting. Consent takes as long as it takes, a
                manager worth keeping takes longer to find than to pay for, and
                a waiting list is built one family at a time. We would rather
                own something that improves a little every year for twenty years
                than something that doubles once and then has to explain itself.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ContactCta
        eyebrow="Run a group, or own a site?"
        headline="We would like to hear from you early."
        accent="early."
        body="Even years ahead of anything happening, a conversation with someone who knows your market is rarely wasted time. If you own land you think a shop belongs on, we would like to see it."
      />
    </>
  );
}
