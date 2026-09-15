"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ButtonLink, Container } from "@/components/ui";
import { nav } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-100/80 bg-cream-50/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-base font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-teal-100 text-teal-900"
                  : "text-ink-muted hover:bg-teal-50 hover:text-teal-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact" className="px-5 py-2.5 text-sm">
            Book a tour
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex items-center gap-2 rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-800 md:hidden"
        >
          <span className="sr-only">
            {open ? "Close main menu" : "Open main menu"}
          </span>
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden>
            {open ? (
              <path
                d="M5 5l10 10M15 5 5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
          <span aria-hidden>Menu</span>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-teal-100 bg-cream-50 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-2xl px-4 py-3 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-teal-100 text-teal-900"
                    : "text-ink-muted hover:bg-teal-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-2" onClick={() => setOpen(false)}>
              Book a tour
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
