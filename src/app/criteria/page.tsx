import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  AccentText,
  Container,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { ContactCta } from "@/components/sections/ContactCta";
import { CriteriaColumns } from "@/components/sections/CriteriaColumns";
import { PageHero } from "@/components/sections/PageHero";
import {
  antiCriteria,
  criteriaIntro,
  franchiseCriteria,
  propertyCriteria,
  structures,
} from "@/content/criteria";

export const metadata: Metadata = {
  title: "Investment criteria",
  description:
    "What BABYOWL looks for in a childcare franchise operator, and what we look for in a site for shops — two mandates, judged against two different sets of tests.",
  alternates: { canonical: "/criteria" },
};

export default function CriteriaPage() {
  return (
    <>
      <PageHero
        eyebrow={criteriaIntro.eyebrow}
        title={criteriaIntro.headline}
        accent={criteriaIntro.headlineAccent}
        lead={criteriaIntro.paragraphs[0]}
      />

      <Section tone="cream" aria-labelledby="franchise-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="franchise-heading"
              eyebrow={franchiseCriteria.eyebrow}
              title={franchiseCriteria.headline}
              accent={franchiseCriteria.headlineAccent}
            >
              <p>{criteriaIntro.paragraphs[1]}</p>
              <p>{franchiseCriteria.lead}</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <CriteriaColumns groups={franchiseCriteria.groups} />
          </div>
        </Container>
      </Section>

      <Section tone="creamDeep" aria-labelledby="property-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="property-heading"
              eyebrow={propertyCriteria.eyebrow}
              title={propertyCriteria.headline}
              accent={propertyCriteria.headlineAccent}
            >
              <p>{propertyCriteria.lead}</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <CriteriaColumns groups={propertyCriteria.groups} />
          </div>
        </Container>
      </Section>

      <Section tone="ink" aria-labelledby="anti-heading">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-brass">{antiCriteria.eyebrow}</p>
              <h2
                id="anti-heading"
                className="mt-6 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.12]"
              >
                <AccentText
                  text={antiCriteria.headline}
                  accent={antiCriteria.headlineAccent}
                />
              </h2>
              <div className="mt-7 editorial">
                <p>
                  Saying no quickly is a courtesy, not a rejection. These are
                  the situations where another buyer will serve you better, and
                  we would rather tell you on the first call than the fifth.
                </p>
              </div>
            </Reveal>
            <ul className="lg:pt-2">
              {antiCriteria.items.map((item, index) => (
                <Reveal
                  key={item}
                  as="li"
                  delay={index * 70}
                  className="border-t border-ink-line last:border-b"
                >
                  <p className="py-6 leading-relaxed text-ink-muted">{item}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="creamDeep" spacing="tight" aria-labelledby="structure-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="structure-heading"
              eyebrow={structures.eyebrow}
              title={structures.headline}
              accent={structures.headlineAccent}
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {structures.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
              >
                <div aria-hidden className="h-px w-14 bg-brass" />
                <h3 className="mt-7 text-2xl leading-snug">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-graphite">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCta
        eyebrow="Not sure you fit?"
        headline="Send it anyway. We will tell you straight."
        accent="We will tell you straight."
        body="If your business sits outside the ranges above but you believe it is exceptional, we would far rather see it than miss it."
      />
    </>
  );
}
