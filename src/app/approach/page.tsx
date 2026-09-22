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
import { PrinciplesGrid } from "@/components/sections/PrinciplesGrid";
import { QuoteList } from "@/components/sections/QuoteList";
import { approachIntro, process, quotesIntro } from "@/content/principles";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "The principles BABYOWL invests by as a family and friends partnership, and what working with us looks like — from first conversation through funding and the years after it.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow={approachIntro.eyebrow}
        title={approachIntro.headline}
        accent={approachIntro.headlineAccent}
        lead={approachIntro.paragraphs[0]}
      />

      <Section tone="cream" aria-labelledby="principles-heading">
        <Container width="wide">
          <Reveal>
            <SectionHeading
              headingId="principles-heading"
              eyebrow="Principles"
              title="Six things we will not trade away."
              accent="not trade away."
            >
              <p>{approachIntro.paragraphs[1]}</p>
            </SectionHeading>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <PrinciplesGrid />
          </div>
        </Container>
      </Section>

      <Section tone="creamDeep" aria-labelledby="process-heading">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-brass-deep">{process.eyebrow}</p>
              <h2
                id="process-heading"
                className="mt-6 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.12]"
              >
                <AccentText
                  text={process.headline}
                  accent={process.headlineAccent}
                />
              </h2>
              <div aria-hidden className="mt-9 h-px w-16 bg-brass" />
              <p className="mt-9 max-w-sm leading-relaxed text-graphite">
                Most operators we speak with are not running a process. They are
                thinking about the next centre, or the corner they keep driving
                past. We are happy to be the first call, years early.
              </p>
            </Reveal>

            <ol>
              {process.steps.map((step, index) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={index * 90}
                  className="border-t border-sand last:border-b"
                >
                  <div className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                    <p className="eyebrow pt-2 text-brass">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-2xl leading-snug">{step.title}</h3>
                      <p className="mt-3 leading-relaxed text-graphite">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="ink" aria-labelledby="quotes-heading">
        <Container width="wide">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-brass">{quotesIntro.eyebrow}</p>
              <h2
                id="quotes-heading"
                className="mt-6 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]"
              >
                <AccentText
                  text={quotesIntro.headline}
                  accent={quotesIntro.headlineAccent}
                />
              </h2>
            </div>
          </Reveal>
          <div className="mt-14">
            <QuoteList />
          </div>
        </Container>
      </Section>

      <ContactCta
        eyebrow="Next step"
        headline="One conversation, no materials required."
        accent="no materials required."
        body="If any of the above sounds like the partner you have been looking for, we would like to hear what you are building."
      />
    </>
  );
}
