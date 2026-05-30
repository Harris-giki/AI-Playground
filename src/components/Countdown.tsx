"use client";

import { useLayoutEffect, useState } from "react";
import { applicationsCloseISO } from "@/lib/site";

const TARGET = new Date(applicationsCloseISO).getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function RollDigit({ value }: { value: number }) {
  const digit = Math.min(9, Math.max(0, value));
  return (
    <span className="cd-dgt" aria-hidden>
      <span
        className="cd-rl"
        style={{ transform: `translate3d(0, ${-digit}em, 0)` }}
      >
        {Array.from({ length: 10 }, (_, n) => (
          <span key={n}>{n}</span>
        ))}
      </span>
    </span>
  );
}

function RollPair({ value, max = 99 }: { value: number; max?: number }) {
  const clamped = Math.min(max, Math.max(0, value));
  const text = pad(clamped);
  return (
    <span className="cd-num">
      <span className="sr-only">{text}</span>
      <RollDigit value={Number(text[0])} />
      <RollDigit value={Number(text[1])} />
    </span>
  );
}

function CountdownFace({
  diff,
  centered,
  stableWidth,
  compact,
}: {
  diff: number;
  centered?: boolean;
  stableWidth?: boolean;
  compact?: boolean;
}) {
  const rootAlign = centered
    ? "flex flex-col items-center text-center"
    : "";
  const rowClass = stableWidth
    ? compact
      ? "cd-clock cd-clock--compact"
      : "cd-clock"
    : "cd-clock cd-clock--wrap";
  const headingClass = compact ? "cd-label cd-label--compact" : "cd-label";

  if (diff <= 0) {
    return (
      <div className={`animate-fade-up ${rootAlign}`}>
        <p className="cd-label mb-2">Applications</p>
        <p className="font-display text-2xl font-bold">Closed</p>
      </div>
    );
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const units = [
    { value: days, label: "Days", max: 99 },
    { value: hours, label: "Hrs", max: 99 },
    { value: minutes, label: "Min", max: 99 },
    { value: seconds, label: "Sec", max: 99 },
  ];

  return (
    <div
      className={`animate-fade-up ${rootAlign} ${stableWidth ? "countdown-stable-root" : ""}`}
      data-countdown-stable={stableWidth || undefined}
    >
      <p className={headingClass}>Applications Close In</p>
      <div className={rowClass}>
        {units.map((unit) => (
          <div key={unit.label} className="cd-unit">
            <RollPair value={unit.value} max={unit.max} />
            <span className="cd-key">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export type CountdownProps = {
  centered?: boolean;
  stableWidth?: boolean;
  compact?: boolean;
};

export function Countdown({
  centered = false,
  stableWidth = false,
  compact = false,
}: CountdownProps) {
  const [diff, setDiff] = useState(0);

  useLayoutEffect(() => {
    const tick = () => setDiff(TARGET - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <CountdownFace
      diff={diff}
      centered={centered}
      stableWidth={stableWidth}
      compact={compact}
    />
  );
}
