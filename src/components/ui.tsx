import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { OwlMark } from "@/components/owl-mark";

/* ------------------------------------------------------------------ layout */

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  className = "",
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="mt-3 text-3xl font-bold text-teal-900 sm:text-4xl">
        {title}
      </Heading>
      {intro ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-[0.18em] text-teal-600 uppercase">
      {children}
    </p>
  );
}

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-4xl border border-teal-100 bg-white p-7 shadow-[0_1px_2px_rgba(18,63,72,0.04),0_18px_40px_-32px_rgba(18,63,72,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ actions */

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const buttonVariants = {
  primary: "bg-teal-700 text-cream-50 hover:bg-teal-800",
  secondary:
    "border border-teal-200 bg-white text-teal-800 hover:border-teal-300 hover:bg-teal-50",
  accent: "bg-apricot-300 text-teal-900 hover:bg-apricot-400",
  ghost: "text-teal-800 hover:bg-teal-50",
} as const;

type Variant = keyof typeof buttonVariants;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  onClick,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return (
    <button
      {...props}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------- decorative */

const shapeClasses = {
  rounded: "rounded-4xl",
  arch: "rounded-t-[999px] rounded-b-4xl",
  circle: "rounded-full",
} as const;

/**
 * Stand-in for photography. Swap these for real <Image /> photos of your
 * space and (with written permission) the children in your care.
 */
export function PhotoPlaceholder({
  label,
  shape = "rounded",
  /** Hides the caption chip on small panels where it would not fit. */
  compact = false,
  className = "",
}: {
  label: string;
  shape?: "rounded" | "arch" | "circle";
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-teal-200 bg-gradient-to-br from-teal-200 via-cream-200 to-apricot-200 ${
        shapeClasses[shape]
      } ${className}`}
    >
      <div
        aria-hidden
        className="absolute -top-8 -right-6 h-44 w-44 rounded-full bg-white/45 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-teal-300/35 blur-2xl"
      />
      <OwlMark
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-teal-700 opacity-25 ${
          shape === "circle" ? "h-9 w-9" : "h-24 w-24"
        }`}
      />
      <p
        className={
          compact
            ? "sr-only"
            : "absolute right-4 bottom-4 max-w-[calc(100%-2rem)] rounded-full border border-teal-100 bg-white/85 px-3 py-1 text-xs font-medium text-teal-800"
        }
      >
        {label}
      </p>
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700"
      >
        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
          <path
            d="M2.5 6.4 4.7 8.6 9.5 3.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-ink-muted">{children}</span>
    </li>
  );
}
