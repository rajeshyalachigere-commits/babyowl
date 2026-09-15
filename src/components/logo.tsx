import Link from "next/link";
import { OwlMark } from "@/components/owl-mark";
import { site } from "@/content/site";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className = "", tone = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} home`}
    >
      <OwlMark
        className={`h-9 w-9 transition-transform duration-300 group-hover:-translate-y-0.5 ${
          tone === "light" ? "text-cream-100" : "text-teal-700"
        }`}
      />
      <span
        className={`font-display text-xl font-extrabold tracking-[0.14em] ${
          tone === "light" ? "text-cream-50" : "text-teal-800"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
