import { Reveal } from "@/components/Reveal";
import { sectors } from "@/content/sectors";

export function SectorList({ tone = "light" }: { tone?: "light" | "dark" }) {
  const ruleClass = tone === "dark" ? "border-ink-line" : "border-sand";
  const bodyClass = tone === "dark" ? "text-ink-muted" : "text-graphite";

  return (
    <ul>
      {sectors.map((sector, index) => (
        <Reveal
          key={sector.name}
          as="li"
          className={`border-t ${ruleClass} ${
            index === sectors.length - 1 ? `border-b ${ruleClass}` : ""
          }`}
        >
          <div className="grid gap-8 py-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14 md:py-12 lg:gap-20">
            <div className="flex gap-6">
              <span className="eyebrow mt-2 text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.75rem] leading-tight md:text-[2rem]">
                  {sector.name}
                </h3>
                <p className={`mt-4 max-w-sm leading-relaxed ${bodyClass}`}>
                  {sector.summary}
                </p>
              </div>
            </div>
            <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 md:self-center">
              {sector.verticals.map((vertical) => (
                <li
                  key={vertical}
                  className={`text-[0.95rem] leading-relaxed ${bodyClass}`}
                >
                  {vertical}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
