import { AccentText, Container, Section } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { capital } from "@/content/home";

/**
 * Explains where BABYOWL's money comes from — the load-bearing claim behind the
 * family-and-friends positioning, so it appears on both the home and approach pages.
 */
export function CapitalSection({
  tone = "creamDeep",
  headingId = "capital-heading",
}: {
  tone?: "cream" | "creamDeep" | "ink";
  headingId?: string;
}) {
  const dark = tone === "ink";

  return (
    <Section tone={tone} aria-labelledby={headingId}>
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p
              className={`eyebrow ${dark ? "text-brass" : "text-brass-deep"}`}
            >
              {capital.eyebrow}
            </p>
            <h2
              id={headingId}
              className="mt-6 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.12]"
            >
              <AccentText
                text={capital.headline}
                accent={capital.headlineAccent}
              />
            </h2>
            <div aria-hidden className="mt-9 h-px w-16 bg-brass" />
          </Reveal>
          <Reveal delay={120} className="editorial">
            {capital.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {capital.points.map((point, index) => (
            <Reveal key={point.title} as="li" delay={index * 90}>
              <div aria-hidden className="h-px w-14 bg-brass" />
              <h3 className="mt-7 text-2xl leading-snug">{point.title}</h3>
              <p
                className={`mt-4 leading-relaxed ${
                  dark ? "text-ink-muted" : "text-graphite"
                }`}
              >
                {point.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
