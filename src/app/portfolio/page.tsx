import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { ContactCta } from "@/components/sections/ContactCta";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioList } from "@/components/sections/PortfolioList";
import { portfolioIntro } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The profile of childcare franchise and shop real estate investments BABYOWL makes and holds. Entries shown are illustrative placeholders, not completed investments.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow={portfolioIntro.eyebrow}
        title={portfolioIntro.headline}
        accent={portfolioIntro.headlineAccent}
        lead={portfolioIntro.paragraphs[0]}
      />

      <Section tone="cream" aria-labelledby="portfolio-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="portfolio-heading"
              eyebrow="Holdings"
              title="Built to be held, not flipped."
              accent="not flipped."
            >
              <p>
                Every operator here had a choice about whose money to take. We
                keep their name on the door, leave the people who earned the
                families and the customers exactly where they are, and spend our
                time on the parts that compound.
              </p>
            </SectionHeading>
            <p
              role="note"
              className="mt-8 max-w-2xl border-l-2 border-brass pl-5 text-sm leading-relaxed text-graphite"
            >
              {portfolioIntro.placeholderNotice}
            </p>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <PortfolioList />
          </div>
        </Container>
      </Section>

      <ContactCta
        eyebrow="Add yours"
        headline="The next one could be yours."
        accent="could be yours."
        body="We make a small number of investments each year. If your centre, your platform or your site fits the profile above, we would welcome a confidential conversation."
      />
    </>
  );
}
