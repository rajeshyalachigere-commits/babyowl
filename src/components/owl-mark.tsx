type OwlMarkProps = {
  className?: string;
  /** Decorative by default; pass a title when the mark stands alone. */
  title?: string;
};

/**
 * Minimal geometric owl. Edit the shapes here to adjust the logo everywhere
 * (header, footer, favicon, social image).
 */
export function OwlMark({ className, title }: OwlMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      <path
        d="M8.5 13.5 7.6 4.8a.9.9 0 0 1 1.4-.85l7.4 4.7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.5 13.5l.9-8.7a.9.9 0 0 0-1.4-.85l-7.4 4.7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="7" y="7" width="34" height="38" rx="17" fill="currentColor" />
      <circle cx="17.6" cy="23" r="6.6" className="fill-cream-50" />
      <circle cx="30.4" cy="23" r="6.6" className="fill-cream-50" />
      <circle cx="17.6" cy="23.6" r="2.9" fill="currentColor" />
      <circle cx="30.4" cy="23.6" r="2.9" fill="currentColor" />
      <path
        d="M24 26.4 26.7 31a1 1 0 0 1-.87 1.5h-3.66A1 1 0 0 1 21.3 31L24 26.4Z"
        className="fill-apricot-400"
      />
      <path
        d="M17 38.5c1.9 2.2 4.3 3.3 7 3.3s5.1-1.1 7-3.3"
        stroke="var(--color-cream-100)"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
