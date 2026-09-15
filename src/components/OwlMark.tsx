type OwlMarkProps = {
  className?: string;
  title?: string;
};

/**
 * BABYOWL brand mark: a geometric, monoline owl head. Intentionally angular
 * and institutional rather than illustrative. Inherits `currentColor`.
 */
export function OwlMark({ className, title }: OwlMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
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
      <circle cx="14.8" cy="18.6" r="3.6" />
      <circle cx="25.2" cy="18.6" r="3.6" />
      <circle cx="14.8" cy="18.6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="25.2" cy="18.6" r="1.1" fill="currentColor" stroke="none" />
      <path d="M20 21.2 L21.3 24 L20 26.4 L18.7 24 Z" />
    </svg>
  );
}
