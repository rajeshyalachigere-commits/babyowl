import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type ContainerWidth = "prose" | "default" | "wide";

const containerWidths: Record<ContainerWidth, string> = {
  prose: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  width = "default",
  className,
  children,
}: {
  width?: ContainerWidth;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        containerWidths[width],
        className,
      )}
    >
      {children}
    </div>
  );
}

type SectionTone = "cream" | "creamDeep" | "ink";

const sectionTones: Record<SectionTone, string> = {
  cream: "bg-cream text-ink",
  creamDeep: "bg-cream-deep text-ink",
  ink: "on-ink bg-ink text-cream",
};

type SectionSpacing = "default" | "tight" | "loose";

const sectionSpacing: Record<SectionSpacing, string> = {
  tight: "py-16 md:py-20",
  default: "py-20 md:py-28 lg:py-36",
  loose: "py-24 md:py-36 lg:py-44",
};

export function Section({
  tone = "cream",
  spacing = "default",
  className,
  children,
  ...rest
}: {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"section">, "className" | "children">) {
  return (
    <section
      className={cx(sectionTones[tone], sectionSpacing[spacing], className)}
      {...rest}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  as: As = "p",
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "h2";
}) {
  return (
    <As className={cx("eyebrow text-brass-deep", className)}>{children}</As>
  );
}

/** Hairline divider. Editorial sections lean on these instead of card borders. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cx("h-px border-0 bg-sand", className)} />;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
  children,
  headingId,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
  headingId?: string;
}) {
  return (
    <div
      className={cx(
        align === "center" ? "mx-auto text-center" : "",
        "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={headingId}
        className={cx(
          "text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]",
          eyebrow ? "mt-5" : "",
        )}
      >
        {title}
      </h2>
      {children ? <div className="mt-7 editorial">{children}</div> : null}
    </div>
  );
}

type ActionVariant = "solid" | "outline" | "outlineLight" | "quiet";

const actionVariants: Record<ActionVariant, string> = {
  solid:
    "bg-ink text-cream border border-ink hover:bg-ink-soft hover:border-ink-soft",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  outlineLight:
    "border border-cream/35 text-cream hover:border-cream hover:bg-cream hover:text-ink",
  quiet:
    "border border-transparent text-brass-deep hover:text-ink underline-offset-8 hover:underline px-0",
};

/** Square-cornered institutional button, rendered as a link. */
export function ActionLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ActionVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "eyebrow inline-flex items-center justify-center gap-2 px-7 py-4 transition-colors duration-300",
        actionVariants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
