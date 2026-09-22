import { OwlMark } from "@/components/OwlMark";
import { ActionLink, Container } from "@/components/primitives";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="on-ink relative isolate flex min-h-svh items-center overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(110%_120%_at_78%_6%,#1c2634_0%,#101720_60%,#0b1017_100%)]"
      />
      <Container width="wide" className="py-32">
        <OwlMark className="h-12 w-12 text-brass" />
        <p className="eyebrow mt-10 text-brass">Error 404</p>
        <h1 className="mt-6 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08]">
          This page has been held for the long term. Elsewhere.
        </h1>
        <p className="mt-8 max-w-xl leading-relaxed text-ink-muted">
          The address you followed does not exist. Where we invest, what we look
          for, and how to reach us are all a click away.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <ActionLink href="/" variant="outlineLight">
            Back to home
          </ActionLink>
          <ActionLink
            href="/contact"
            variant="outlineLight"
            className="border-transparent hover:border-transparent hover:bg-transparent hover:text-brass"
          >
            Contact us
          </ActionLink>
        </div>
      </Container>
    </section>
  );
}
