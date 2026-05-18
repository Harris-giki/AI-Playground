"use client";

import { useEffect, useState } from "react";
import { applicationsCloseISO } from "@/lib/site";

const TARGET = new Date(applicationsCloseISO).getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export type CountdownProps = {
  /** Center heading + columns (e.g. hero strip). */
  centered?: boolean;
  /**
   * Fixed-width digit columns + nowrap row so values like 09 → 10 do not
   * reflow or nudge neighbouring UI.
   */
  stableWidth?: boolean;
};

export function Countdown({
  centered = false,
  stableWidth = false,
}: CountdownProps) {
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setDiff(TARGET - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const rootAlign = centered
    ? "flex flex-col items-center text-center"
    : "";
  const rowClass = stableWidth
    ? "flex flex-nowrap items-end justify-center gap-3 sm:gap-4"
    : centered
      ? "flex gap-5 sm:gap-7 flex-wrap items-baseline justify-center"
      : "flex gap-5 sm:gap-7 flex-wrap items-baseline";
  const unitClass = stableWidth
    ? "countdown-unit flex flex-col flex-none items-center w-[2.85rem] sm:w-[3.1rem]"
    : centered
      ? "flex flex-col items-center"
      : "flex flex-col items-start";
  const valueClass = stableWidth
    ? "countdown-unit-value font-display text-[2.15rem] sm:text-[2.45rem] leading-none tracking-tight uppercase"
    : "font-display text-[2.4rem] sm:text-[2.8rem] leading-none tracking-tight uppercase";
  const labelClass = stableWidth
    ? "font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.16em] sm:tracking-[0.2em] themed-ink-muted mt-2 w-full text-center"
    : "font-mono text-[0.7rem] uppercase tracking-[0.2em] themed-ink-muted mt-2";

  if (diff === null) {
    return (
      <div
        className={`animate-fade-up ${rootAlign}`}
        aria-hidden
        data-countdown-stable={stableWidth || undefined}
      >
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.14em] themed-accent mb-3">
          Applications Close In
        </p>
        <div
          className={`${rowClass} min-h-[72px] w-full max-w-[17.5rem] sm:max-w-[18.5rem]`}
        />
      </div>
    );
  }

  if (diff <= 0) {
    return (
      <div className={`animate-fade-up ${rootAlign}`}>
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.14em] themed-accent mb-2">
          Applications
        </p>
        <p className="font-display text-2xl font-bold">Closed</p>
      </div>
    );
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hrs" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Sec" },
  ];

  return (
    <div
      className={`animate-fade-up ${rootAlign} ${stableWidth ? "countdown-stable-root" : ""}`}
      data-countdown-stable={stableWidth || undefined}
    >
      <p className="font-mono text-[0.78rem] uppercase tracking-[0.14em] themed-accent mb-3">
        Applications Close In
      </p>
      <div className={rowClass}>
        {units.map((unit) => (
          <div key={unit.label} className={unitClass}>
            <span className={valueClass}>{pad(unit.value)}</span>
            <span className={labelClass}>{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
