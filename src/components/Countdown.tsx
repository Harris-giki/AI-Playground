"use client";

import { useEffect, useState } from "react";
import { applicationsCloseISO } from "@/lib/site";

const TARGET = new Date(applicationsCloseISO).getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  // Avoid Date.now() in initial state; server/client clocks drift and trigger
  // React #418 hydration errors. Compute the diff client-side after mount.
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setDiff(TARGET - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (diff === null) {
    return (
      <div className="animate-fade-up" aria-hidden>
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.14em] themed-accent mb-3">
          Applications Close In
        </p>
        <div className="flex gap-6 sm:gap-8 flex-wrap min-h-[72px]" />
      </div>
    );
  }

  if (diff <= 0) {
    return (
      <div className="animate-fade-up">
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
    <div className="animate-fade-up">
      <p className="font-mono text-[0.78rem] uppercase tracking-[0.14em] themed-accent mb-3">
        Applications Close In
      </p>
      <div className="flex gap-5 sm:gap-7 flex-wrap items-baseline">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-start">
            <span className="font-display text-[2.4rem] sm:text-[2.8rem] leading-none tracking-tight uppercase">
              {pad(unit.value)}
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] themed-ink-muted mt-2">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
