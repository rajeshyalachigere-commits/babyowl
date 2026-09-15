import { ButtonLink, Container } from "@/components/ui";
import { OwlMark } from "@/components/owl-mark";
import { site } from "@/content/site";

export function CtaBand({
  title = "Come see the room, meet the teachers, ask us anything.",
  body = "Tours take about 30 minutes. Bring your child — watching how they settle in tells you more than any brochure can.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-5xl bg-teal-800 px-7 py-12 text-cream-50 sm:px-12 sm:py-14">
          <OwlMark
            className="pointer-events-none absolute -top-8 -right-6 h-56 w-56 text-cream-100/10"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-cream-100/85">
              {body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="accent">
                Book a tour
              </ButtonLink>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center rounded-full border border-cream-100/35 px-6 py-3 text-base font-semibold text-cream-50 transition-colors hover:bg-cream-100/10"
              >
                Email {site.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
