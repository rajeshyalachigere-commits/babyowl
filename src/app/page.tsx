import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  ActionLink,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { ContactCta } from "@/components/sections/ContactCta";
import { CriteriaColumns } from "@/components/sections/CriteriaColumns";
import { HomeHero } from "@/components/sections/HomeHero";
import { PortfolioList } from "@/components/sections/PortfolioList";
import { PrinciplesGrid } from "@/components/sections/PrinciplesGrid";
import { QuoteList } from "@/components/sections/QuoteList";
import { SectorList } from "@/components/sections/SectorList";
import { criteriaIntro } from "@/content/criteria";
import { closing, stats, thesis } from "@/content/home";
import { approachIntro } from "@/content/principles";
import { portfolioIntro } from "@/content/portfolio";
import { sectorsIntro } from "@/content/sectors";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Section tone="cream" spacing="loose" aria-labelledby="thesis-heading">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <Eyebrow>{thesis.eyebrow}</Eyebrow>
              <h2
                id="thesis-heading"
                className="mt-6 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.12]"
              >
                {thesis.headline}
              </h2>
              <div aria-hidden className="mt-9 h-px w-16 bg-brass" />
            </Reveal>
            <Reveal delay={120} className="editorial">
              {thesis.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

          <Reveal className="mt-20 md:mt-28">
            <figure className="mx-auto max-w-3xl border-t border-sand pt-12 text-center">
              <blockquote className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-snug text-ink italic">
                &ldquo;{thesis.signature.quote}&rdquo;
              </blockquote>
              <figcaption className="eyebrow mt-7 text-brass-deep">
                {thesis.signature.attribution}
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </Section>

      <Section tone="ink" spacing="tight" aria-label="Firm at a glance">
        <Container width="wide">
          <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 90}
                className="border-t border-ink-line pt-7"
              >
                <dt className="eyebrow text-brass">{stat.label}</dt>
                <dd className="mt-5 font-display text-[2.4rem] leading-none text-cream">
                  {stat.value}
                </dd>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {stat.detail}
                </p>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="cream" aria-labelledby="principles-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="principles-heading"
              eyebrow={approachIntro.eyebrow}
              title="Six principles we intend to be held to."
            >
              <p>{approachIntro.paragraphs[1]}</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <PrinciplesGrid />
          </div>
          <Reveal className="mt-14">
            <ActionLink href="/approach" variant="outline">
              Read our approach
            </ActionLink>
          </Reveal>
        </Container>
      </Section>

      <Section tone="creamDeep" aria-labelledby="criteria-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="criteria-heading"
              eyebrow={criteriaIntro.eyebrow}
              title="What we look for."
            >
              <p>{criteriaIntro.paragraphs[0]}</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <CriteriaColumns />
          </div>
          <Reveal className="mt-14">
            <ActionLink href="/criteria" variant="outline">
              Full investment criteria
            </ActionLink>
          </Reveal>
        </Container>
      </Section>

      <Section tone="ink" aria-labelledby="sectors-heading">
        <Container width="wide">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow text-brass">{sectorsIntro.eyebrow}</p>
              <h2
                id="sectors-heading"
                className="mt-6 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]"
              >
                Four markets we know from the inside.
              </h2>
              <div className="mt-7 editorial">
                <p>{sectorsIntro.paragraphs[0]}</p>
              </div>
            </div>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <SectorList tone="dark" />
          </div>
          <Reveal className="mt-14">
            <ActionLink href="/sectors" variant="outlineLight">
              Explore sector focus
            </ActionLink>
          </Reveal>
        </Container>
      </Section>

      <Section tone="cream" aria-labelledby="portfolio-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="portfolio-heading"
              eyebrow={portfolioIntro.eyebrow}
              title={portfolioIntro.headline}
            >
              <p>{portfolioIntro.paragraphs[0]}</p>
            </SectionHeading>
            <p className="mt-8 max-w-2xl border-l-2 border-brass pl-5 text-sm leading-relaxed text-graphite">
              {portfolioIntro.placeholderNotice}
            </p>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <PortfolioList limit={3} />
          </div>
          <Reveal className="mt-14">
            <ActionLink href="/portfolio" variant="outline">
              See the full portfolio
            </ActionLink>
          </Reveal>
        </Container>
      </Section>

      <Section tone="creamDeep" aria-labelledby="quotes-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="quotes-heading"
              align="center"
              eyebrow="Borrowed wisdom"
              title="A few favourites about business, and life."
            />
          </Reveal>
          <div className="mt-14">
            <QuoteList tone="light" />
          </div>
        </Container>
      </Section>

      <ContactCta
        eyebrow={closing.eyebrow}
        headline={closing.headline}
        body={closing.body}
      />
    </>
  );
}
