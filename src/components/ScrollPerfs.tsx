"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Left-edge film perforations — active section tracks scroll (index_6 #perfs). */
export function ScrollPerfs() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-section]"),
    );
    setCount(sections.length);
    setActive(0);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.25) return;
          const index = sections.indexOf(entry.target as HTMLElement);
          if (index >= 0) setActive(index);
        });
      },
      { threshold: [0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  if (count === 0) return null;

  return (
    <div className="scroll-perfs" aria-hidden>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`scroll-perf${index === active ? " is-on" : ""}`}
        />
      ))}
    </div>
  );
}
