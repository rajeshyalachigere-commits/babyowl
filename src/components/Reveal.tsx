"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

/**
 * Fades content up once as it scrolls into view. Falls back to visible content
 * when IntersectionObserver is unavailable; motion is disabled entirely for
 * users who prefer reduced motion (handled in globals.css).
 */
export function Reveal({
  children,
  as: As = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={["reveal", className].filter(Boolean).join(" ")}
      data-visible={visible ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </As>
  );
}
