import { ButtonLink, Container } from "@/components/ui";
import { OwlMark } from "@/components/owl-mark";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <OwlMark
        className="mx-auto h-16 w-16 text-teal-700"
        title={`${site.name} owl`}
      />
      <h1 className="mt-8 text-4xl font-extrabold text-teal-900">
        This page has wandered off
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
        The page you were looking for is not here. Let&apos;s get you back to
        somewhere useful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
