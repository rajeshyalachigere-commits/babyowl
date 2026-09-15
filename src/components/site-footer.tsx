import Link from "next/link";
import { Container } from "@/components/ui";
import { OwlMark } from "@/components/owl-mark";
import { nav, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-teal-900 text-cream-100">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <OwlMark className="h-9 w-9 text-cream-100" />
              <span className="font-display text-xl font-extrabold tracking-[0.14em] text-cream-50">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/80">
              {site.shortDescription}
            </p>
            <p className="mt-4 text-xs text-cream-100/60">
              Licensed childcare · {site.licenseNumber}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold tracking-[0.16em] text-cream-50 uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream-100/85 underline-offset-4 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs#safety"
                  className="text-cream-100/85 underline-offset-4 hover:text-white hover:underline"
                >
                  Safety &amp; ratios
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-cream-100/85 underline-offset-4 hover:text-white hover:underline"
                >
                  Privacy notice
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.16em] text-cream-50 uppercase">
              Visit &amp; contact
            </h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-cream-100/85">
              <p>
                {site.address.street}
                <br />
                {site.address.cityState}
              </p>
              <p>{site.phone}</p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="underline-offset-4 hover:text-white hover:underline"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.16em] text-cream-50 uppercase">
              Hours
            </h2>
            <dl className="mt-4 space-y-2.5 text-sm text-cream-100/85">
              {site.hours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-4">
                  <dt>{entry.days}</dt>
                  <dd className="text-right text-cream-100/70">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-100/15 pt-6 text-xs leading-relaxed text-cream-100/65">
          <p>
            We collect the details you share in our inquiry form only to respond
            to your enrollment questions. We never sell family information. Read
            our{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-white"
            >
              privacy notice
            </Link>
            .
          </p>
          <p className="mt-3">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
