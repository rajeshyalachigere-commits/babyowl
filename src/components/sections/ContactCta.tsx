import { ActionLink, Container } from "@/components/primitives";
import { contact } from "@/content/site";

export function ContactCta({
  eyebrow,
  headline,
  body,
}: {
  eyebrow: string;
  headline: string;
  body: string;
}) {
  return (
    <section className="on-ink relative isolate overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(100%_140%_at_18%_0%,#1b2532_0%,#101720_60%,#0b1017_100%)]"
      />
      <Container width="wide" className="py-20 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow text-brass">{eyebrow}</p>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.08]">
              {headline}
            </h2>
            <p className="mt-8 max-w-xl leading-relaxed text-ink-muted">
              {body}
            </p>
          </div>
          <div className="lg:pb-2">
            <dl className="space-y-6">
              <div>
                <dt className="eyebrow text-ink-muted/70">Email</dt>
                <dd className="mt-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-display text-xl text-cream underline decoration-brass decoration-1 underline-offset-8 transition-colors hover:text-brass"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-muted/70">Telephone</dt>
                <dd className="mt-3 font-display text-xl text-cream">
                  {contact.phone}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-muted/70">Based in</dt>
                <dd className="mt-3 font-display text-xl text-cream">
                  {contact.city}, {contact.region}
                </dd>
              </div>
            </dl>
            <ActionLink
              href="/contact"
              variant="outlineLight"
              className="mt-10"
            >
              Send an inquiry
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
