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
    "The kind of owner-led businesses BABYOWL backs and holds. Portfolio entries shown are illustrative placeholders, not completed transactions.",
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
              title="Built to be owned, not flipped."
              accent="not flipped."
            >
              <p>
                Every operator here had a choice, and every site had another
                bidder. We keep the name above the door, keep the team that
                earned the customer, and spend our time on the unglamorous work
                that compounds — a better manager, a fairer lease, one more unit
                let to someone who intends to stay.
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
        body="We make one or two investments a year, whether that is a franchise group or a site to build on. If yours resembles anything above, we would welcome a confidential conversation."
      />
    </>
  );
}
