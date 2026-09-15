import { Reveal } from "@/components/Reveal";
import { quotes } from "@/content/principles";

export function QuoteList({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <ul className="mx-auto max-w-3xl">
      {quotes.map((entry, index) => (
        <Reveal
          key={entry.quote}
          as="li"
          className={
            index === 0
              ? ""
              : `border-t ${dark ? "border-ink-line" : "border-sand"}`
          }
        >
          <figure className="py-10 text-center md:py-14">
            <blockquote
              className={`font-display text-[1.5rem] leading-snug italic md:text-[2rem] ${
                dark ? "text-cream" : "text-ink"
              }`}
            >
              &ldquo;{entry.quote}&rdquo;
            </blockquote>
            <figcaption
              className={`eyebrow mt-6 ${dark ? "text-brass" : "text-brass-deep"}`}
            >
              {entry.author}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
