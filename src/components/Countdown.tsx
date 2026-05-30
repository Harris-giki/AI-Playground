"use client";

import { useEffect, useState } from "react";
import { applicationsCloseISO } from "@/lib/site";

const TARGET = new Date(applicationsCloseISO).getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function RollDigit({ value }: { value: number }) {
  return (
    <span className="cd-dgt">
      <span
        className="cd-rl"
        style={{ transform: `translateY(${-value}em)` }}
      >
        {Array.from({ length: 10 }, (_, digit) => (
          <span key={digit}>{digit}</span>
        ))}
      </span>
    </span>
  );
}

function RollPair({ value, max = 99 }: { value: number; max?: number }) {
  const clamped = Math.min(max, Math.max(0, value));
  const text = pad(clamped);
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="cd-num" aria-hidden>
        <RollDigit value={Number(text[0])} />
        <RollDigit value={Number(text[1])} />
      </span>
    </>
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
    ? compact
      ? "cd-clock cd-clock--compact"
      : "cd-clock"
    : centered
      ? "cd-clock cd-clock--wrap"
      : "cd-clock cd-clock--wrap";
  const headingClass = compact
    ? "cd-label cd-label--compact"
    : "cd-label";
  const placeholderMinH = compact ? "min-h-[52px]" : "min-h-[72px]";
  const placeholderMaxW = compact
    ? "max-w-[14rem] sm:max-w-[15rem]"
    : "max-w-[17.5rem] sm:max-w-[18.5rem]";

  if (diff === null) {
    return (
      <div
        className={`animate-fade-up ${rootAlign}`}
        aria-hidden
        data-countdown-stable={stableWidth || undefined}
      >
        <p className={headingClass}>Applications Close In</p>
        <div
          className={`${rowClass} ${placeholderMinH} w-full ${placeholderMaxW}`}
        />
      </div>
    );
  }

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
