import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { OwlMark } from "@/components/owl-mark";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-b from-teal-50 to-cream-50">
      <OwlMark
        className="pointer-events-none absolute -top-12 right-[-4rem] hidden h-64 w-64 text-teal-800 opacity-[0.07] sm:block"
        aria-hidden
      />
      <Container className="relative py-14 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold text-teal-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">{intro}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
