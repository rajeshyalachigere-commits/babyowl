import Link from "next/link";
import { OwlMark } from "@/components/OwlMark";
import { Container } from "@/components/primitives";
import { contact, footer, navigation, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink text-cream">
      <Container width="wide" className="py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <OwlMark className="h-9 w-9 text-brass" />
              <span className="eyebrow text-[0.9rem] tracking-[0.28em]">
                {site.name}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-muted">
              {footer.statement}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-brass">Site</h2>
            <ul className="mt-6 space-y-3.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] text-ink-muted transition-colors duration-300 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-brass">Contact</h2>
            <ul className="mt-6 space-y-3.5 text-[0.95rem] text-ink-muted">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors duration-300 hover:text-cream"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.phone}</li>
              <li>
                {contact.city}, {contact.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ink-line pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-ink-muted/80">
            {footer.placeholderNotice}
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-ink-muted/80">
            {footer.disclaimer}
          </p>
          <p className="mt-8 text-xs text-ink-muted/70">
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
