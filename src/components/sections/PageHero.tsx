import { OwlMark } from "@/components/OwlMark";
import { AccentText, Container } from "@/components/primitives";

export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
}) {
  return (
    <section className="on-ink relative isolate overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(110%_120%_at_82%_0%,#1c2634_0%,#101720_62%,#0c1119_100%)]"
      />
      <OwlMark
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 -z-10 h-72 w-72 text-brass/8 md:h-[28rem] md:w-[28rem]"
      />
      <Container width="wide" className="pt-36 pb-20 md:pt-48 md:pb-28">
        <p className="eyebrow text-brass">{eyebrow}</p>
        <h1 className="mt-7 max-w-4xl text-[clamp(2.2rem,5.4vw,4rem)] leading-[1.06]">
          <AccentText text={title} accent={accent} />
        </h1>
        {lead ? (
          <p className="mt-9 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {lead}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
