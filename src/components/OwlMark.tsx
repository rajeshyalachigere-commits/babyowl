import type { CSSProperties } from "react";

type OwlMarkProps = {
  className?: string;
  title?: string;
  /** Slow eye glance + occasional blink. Disable for tiny or static marks. */
  animated?: boolean;
  /** Offsets the loop so several marks on a page never move in unison. */
  animationDelayMs?: number;
};

/**
 * OWLET brand mark: a geometric, monoline owl head. Intentionally angular
 * and institutional rather than illustrative. Inherits `currentColor`.
 */
export function OwlMark({
  className,
  title,
  animated = true,
  animationDelayMs = 0,
}: OwlMarkProps) {
  const classes = ["owl-mark", animated ? "owl-mark--animated" : null, className]
    .filter(Boolean)
    .join(" ");

  const style =
    animated && animationDelayMs
      ? ({ "--owl-delay": `${animationDelayMs}ms` } as CSSProperties)
      : undefined;

  return (
    <svg
      viewBox="0 0 40 40"
      className={classes}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d="M7 12 L11.5 5.5 L20 10 L28.5 5.5 L33 12 V21.5 A13 13 0 0 1 7 21.5 Z" />
      <g className="owl-mark__eyes">
        <circle cx="14.8" cy="18.6" r="3.6" />
        <circle cx="25.2" cy="18.6" r="3.6" />
        <g className="owl-mark__pupils">
          <circle cx="14.8" cy="18.6" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="25.2" cy="18.6" r="1.1" fill="currentColor" stroke="none" />
        </g>
      </g>
      <path d="M20 21.2 L21.3 24 L20 26.4 L18.7 24 Z" />
    </svg>
  );
}
