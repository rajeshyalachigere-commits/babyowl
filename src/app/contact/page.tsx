import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { AccentText, Container, Section } from "@/components/primitives";
import { PageHero } from "@/components/sections/PageHero";
import { contact, footer } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a confidential conversation with BABYOWL about a childcare franchise or a shop site you are trying to build. Every inquiry gets a reply.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building."
        accent="what you are building."
        lead="Confidential, no materials required, and no obligation to run a process. If we are not the right capital for it we will say so quickly."
      />

      <Section tone="creamDeep">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.14]">
                <AccentText
                  text="For franchisees, developers and their advisers."
                  accent="and their advisers."
                />
              </h2>
              <div aria-hidden className="mt-8 h-px w-16 bg-brass" />
              <p className="mt-8 leading-relaxed text-graphite">
                {contact.responseTime} If it is a fit, the next step is a single
                call — no data room, no teaser, no bankers required.
              </p>

              <dl className="mt-12 space-y-8">
                <div className="border-t border-sand pt-6">
                  <dt className="eyebrow text-graphite/70">Email</dt>
                  <dd className="mt-3">
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-display text-xl text-ink underline decoration-brass decoration-1 underline-offset-8 transition-colors hover:text-brass-deep"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-sand pt-6">
                  <dt className="eyebrow text-graphite/70">Telephone</dt>
                  <dd className="mt-3 font-display text-xl">{contact.phone}</dd>
                </div>
                <div className="border-t border-sand pt-6">
                  <dt className="eyebrow text-graphite/70">Office</dt>
                  <dd className="mt-3 font-display text-xl">
                    {contact.address}
                    <br />
                    {contact.city}, {contact.region}
                  </dd>
                </div>
              </dl>

              <p className="mt-12 max-w-sm text-xs leading-relaxed text-graphite/80">
                {footer.disclaimer}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="sr-only">Inquiry form</h2>
              <InquiryForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
