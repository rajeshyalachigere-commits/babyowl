import { Reveal } from "@/components/Reveal";
import { criteriaGroups } from "@/content/criteria";

export function CriteriaColumns() {
  return (
    <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
      {criteriaGroups.map((group, index) => (
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
                <span className="text-[0.975rem] leading-relaxed text-graphite">
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
