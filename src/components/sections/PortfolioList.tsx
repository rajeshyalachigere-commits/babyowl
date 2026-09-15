import { Reveal } from "@/components/Reveal";
import { portfolio } from "@/content/portfolio";

export function PortfolioList({ limit }: { limit?: number }) {
  const entries = limit ? portfolio.slice(0, limit) : portfolio;

  return (
    <ul className="border-t border-sand">
      {entries.map((company, index) => (
        <Reveal
          key={company.name}
          as="li"
          delay={(index % 2) * 80}
          className="border-b border-sand"
        >
          <article className="grid gap-6 py-10 md:grid-cols-[1fr_1.35fr] md:gap-14 md:py-12 lg:gap-20">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow text-brass">{company.sector}</p>
                {company.isPlaceholder ? (
                  <span className="eyebrow border border-sand px-2 py-1 text-[0.6rem] text-graphite">
                    Placeholder
                  </span>
                ) : null}
              </div>
              <h3 className="mt-5 text-[1.75rem] leading-tight md:text-[2rem]">
                {company.name}
              </h3>
              <dl className="mt-5 flex gap-8 text-sm text-graphite">
                <div>
                  <dt className="eyebrow text-graphite/70">Invested</dt>
                  <dd className="mt-2">{company.year}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-graphite/70">Status</dt>
                  <dd className="mt-2">{company.status}</dd>
                </div>
              </dl>
            </div>
            <div className="md:pt-1">
              <p className="text-[1.05rem] leading-relaxed text-ink">
                {company.summary}
              </p>
              <p className="mt-4 leading-relaxed text-graphite">
                {company.detail}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
