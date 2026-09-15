import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: `How ${site.name} collects, uses, and protects the information families share with us.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "What we collect",
    body: "When you submit our inquiry form we collect the name, email address, phone number, child age group, preferred start date, and message you choose to share. We do not use tracking or advertising cookies on this website.",
  },
  {
    heading: "How we use it",
    body: "We use your details only to answer your questions, schedule a tour, and follow up about enrollment or waitlist openings. We do not sell family information or share it with advertisers.",
  },
  {
    heading: "Who can see it",
    body: "Inquiries are visible to [owner/director name] and the staff who help with enrollment. Any service we use to deliver messages (for example our email provider or hosting platform) processes them on our behalf under its own security terms.",
  },
  {
    heading: "How long we keep it",
    body: "We keep inquiries for up to [12 months] so we can follow up when a spot opens, then delete them. Enrolled families' records are kept as long as [state] licensing rules require.",
  },
  {
    heading: "Children's information",
    body: "This website is intended for parents and guardians, not children. We never publish a child's photo, first name, or details without written permission from a parent or guardian.",
  },
  {
    heading: "Your choices",
    body: `Email ${site.email} at any time to see what we hold about your family, correct it, or ask us to delete it. We will respond within [30 days].`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy notice"
        intro={`${site.legalName} keeps family information private and uses it only to answer your questions about care. Last updated [Month Year].`}
      />
      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl space-y-9">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-teal-900">
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {section.body}
              </p>
            </section>
          ))}
          <p className="rounded-4xl border border-teal-100 bg-cream-100/70 p-6 text-sm leading-relaxed text-ink-muted">
            This notice is a plain-language starting point, not legal advice.
            Have it reviewed alongside your enrollment agreement and family
            handbook before you publish.
          </p>
        </div>
      </Container>
    </>
  );
}
