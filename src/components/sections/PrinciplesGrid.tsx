import { Reveal } from "@/components/Reveal";
import { principles } from "@/content/principles";

export function PrinciplesGrid({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const ruleClass = tone === "dark" ? "border-ink-line" : "border-sand";
  const bodyClass = tone === "dark" ? "text-ink-muted" : "text-graphite";

  return (
    <ul className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
      {principles.map((principle, index) => (
        <Reveal
          key={principle.title}
          as="li"
          delay={(index % 3) * 90}
          className={`border-t pt-7 ${ruleClass}`}
        >
          <p className="eyebrow text-brass">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-5 text-2xl leading-snug">{principle.title}</h3>
          <p className={`mt-4 text-[0.975rem] leading-relaxed ${bodyClass}`}>
            {principle.body}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}
