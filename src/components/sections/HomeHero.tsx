import { OwlMark } from "@/components/OwlMark";
import { ActionLink, Container } from "@/components/primitives";
import { hero } from "@/content/home";

export function HomeHero() {
  return (
    <section className="on-ink relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-cream md:min-h-svh">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_78%_8%,#1e2937_0%,#101720_58%,#0b1017_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-brass/40 to-transparent"
      />
      <OwlMark
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 -z-10 h-[22rem] w-[22rem] text-brass/5 sm:-right-16 sm:-bottom-10 sm:h-[34rem] sm:w-[34rem] sm:text-brass/8 md:-right-24 md:h-[42rem] md:w-[42rem]"
      />

      <Container width="wide" className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-4xl">
          <p className="eyebrow text-[0.625rem] tracking-[0.15em] text-brass sm:text-[0.6875rem] sm:tracking-[0.2em]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-8 text-[clamp(2.6rem,7.4vw,5.4rem)] leading-[1.02] tracking-[-0.02em]">
            {hero.headline}
          </h1>
          <div aria-hidden className="mt-10 h-px w-24 bg-brass" />
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl md:leading-relaxed">
            {hero.subhead}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ActionLink href={hero.primaryCta.href} variant="outlineLight">
              {hero.primaryCta.label}
            </ActionLink>
            <ActionLink
              href={hero.secondaryCta.href}
              variant="outlineLight"
              className="border-transparent hover:border-transparent hover:bg-transparent hover:text-brass"
            >
              {hero.secondaryCta.label}
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
