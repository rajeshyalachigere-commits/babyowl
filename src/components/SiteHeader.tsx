"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OwlMark } from "@/components/OwlMark";
import { navigation, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 text-cream transition-colors duration-500",
        scrolled || menuOpen
          ? "bg-ink/95 backdrop-blur-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-7xl items-center justify-between px-6 transition-all duration-500 sm:px-8 lg:px-12",
          scrolled ? "h-16 md:h-18" : "h-20 md:h-24",
        ].join(" ")}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <OwlMark className="h-8 w-8 text-brass transition-colors duration-300 group-hover:text-cream md:h-9 md:w-9" />
          <span className="eyebrow text-[0.8rem] tracking-[0.28em] md:text-[0.9rem]">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "eyebrow py-2 transition-colors duration-300",
                  active
                    ? "text-brass"
                    : "text-cream/75 hover:text-cream",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="eyebrow -mr-2 flex items-center gap-3 px-2 py-3 text-cream md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
          <span aria-hidden className="flex h-3 w-5 flex-col justify-between">
            <span
              className={[
                "block h-px w-full bg-current transition-transform duration-300",
                menuOpen ? "translate-y-[5.5px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-full bg-current transition-opacity duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-full bg-current transition-transform duration-300",
                menuOpen ? "-translate-y-[5.5px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-ink-line bg-ink md:hidden"
      >
        <nav aria-label="Primary — mobile" className="px-6 py-4">
          <ul>
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-ink-line/70">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex items-baseline justify-between py-5 font-display text-2xl text-cream"
                >
                  {item.label}
                  <span aria-hidden className="text-brass text-sm">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
