import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import {
  Card,
  Container,
  PhotoPlaceholder,
  Section,
  SectionHeading,
} from "@/components/ui";
import { faqs } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & enroll",
  description: `Ask about openings, book a tour, or start enrollment at ${site.name}. Send an inquiry and we will reply within a couple of business days.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact & enroll · ${site.name}`,
    description:
      "Ask about openings, book a tour, or start enrollment. We reply to every family.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & enroll"
        title="Let's find the right fit for your family"
        intro="Send us a note about your child and the care you need. We answer every inquiry personally — no call centers, no automated funnels."
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <InquiryForm />

          <div className="space-y-6">
            <Card>
              <h2 className="font-display text-xl font-bold text-teal-900">
                Visit us
              </h2>
              <address className="mt-4 space-y-4 text-base not-italic text-ink-muted">
                <div>
                  <p className="text-sm font-semibold tracking-[0.12em] text-teal-600 uppercase">
                    Address
                  </p>
                  <p className="mt-1">
                    {site.address.street}
                    <br />
                    {site.address.cityState}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-[0.12em] text-teal-600 uppercase">
                    Phone
                  </p>
                  <p className="mt-1">{site.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-[0.12em] text-teal-600 uppercase">
                    Email
                  </p>
                  <p className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-teal-700 underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                  </p>
                </div>
              </address>
            </Card>

            <Card>
              <h2 className="font-display text-xl font-bold text-teal-900">
                Hours
              </h2>
              <dl className="mt-4 space-y-3 text-base">
                {site.hours.map((entry) => (
                  <div
                    key={entry.days}
                    className="flex justify-between gap-4 border-b border-teal-50 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-medium text-teal-900">{entry.days}</dt>
                    <dd className="text-right text-ink-muted">{entry.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-ink-muted">
                Tours are scheduled [days/times] so you can see the room during
                real activity time.
              </p>
            </Card>

            <PhotoPlaceholder
              label="Map or photo of your building goes here"
              className="aspect-16/10 w-full"
            />

            <Card className="bg-cream-100/60">
              <h2 className="font-display text-xl font-bold text-teal-900">
                Licensing
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {site.legalName} is licensed by [state licensing agency] under
                license {site.licenseNumber}. Our family handbook and most recent
                inspection report are available on request.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------- FAQ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            align="center"
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-teal-100 border-y border-teal-100">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-teal-900 marker:content-none">
                  {faq.question}
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-transform group-open:rotate-45"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path
                        d="M8 3.5v9M3.5 8h9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
