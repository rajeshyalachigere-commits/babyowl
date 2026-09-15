import { Reveal } from "@/components/Reveal";

export type CriteriaGroup = {
  readonly label: string;
  readonly items: readonly string[];
};

export function CriteriaColumns({
  groups,
  tone = "light",
}: {
  groups: readonly CriteriaGroup[];
  tone?: "light" | "dark";
}) {
  const bodyClass = tone === "dark" ? "text-ink-muted" : "text-graphite";

  return (
    <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
      {groups.map((group, index) => (
        <Reveal key={group.label} delay={index * 100}>
          <div aria-hidden className="h-px w-14 bg-brass" />
          <h3 className="mt-7 text-[1.6rem] leading-snug">{group.label}</h3>
          <ul className="mt-6 space-y-4">
            {group.items.map((item) => (
              <li key={item} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-2.5 h-px w-4 shrink-0 bg-brass"
                />
                <span className={`text-[0.975rem] leading-relaxed ${bodyClass}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
