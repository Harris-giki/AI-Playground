"use client";

import { useLayoutEffect, useState } from "react";
import {
  tier2ChallengeDurationHours,
  tier2ChallengeStartISO,
} from "@/lib/tier2-challenge";

const START = new Date(tier2ChallengeStartISO).getTime();
const END = START + tier2ChallengeDurationHours * 60 * 60 * 1000;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

type Phase = "upcoming" | "live" | "ended";

function getPhase(now: number): Phase {
  if (now < START) return "upcoming";
  if (now < END) return "live";
  return "ended";
}

function getRemaining(now: number, phase: Phase) {
  if (phase === "upcoming") return START - now;
  if (phase === "live") return END - now;
  return 0;
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

export function Tier2ChallengeTimer({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState(0);

  useLayoutEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const phase = getPhase(now);
  const remaining = getRemaining(now, phase);
  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  const statusLabel =
    phase === "upcoming"
      ? "Tier 2 starts in"
      : phase === "live"
        ? "Tier 2 · Live"
        : "Tier 2 · Ended";

  const hint =
    phase === "upcoming"
      ? `${tier2ChallengeDurationHours}-hour window · starts shortly`
      : phase === "live"
        ? `${tier2ChallengeDurationHours}-hour window · submit before time runs out`
        : "Submissions closed for this window";

  const units = [
    { value: hours, label: "Hrs", max: 99 },
    { value: minutes, label: "Min", max: 99 },
    { value: seconds, label: "Sec", max: 99 },
  ];

  return (
    <div
      className={`tier2-timer${compact ? " tier2-timer--compact" : ""}${phase !== "live" ? " tier2-timer--idle" : ""}${phase === "ended" ? " tier2-timer--ended" : ""}`}
      role="timer"
      aria-live="polite"
    >
      <p className="tier2-timer__status">
        <span
          className={`tier2-timer__dot${phase === "live" ? " tier2-timer__dot--live" : ""}`}
          aria-hidden
        />
        {compact ? (
          <>
            <span className="tier2-timer__day">Day 2</span>
            <span className="tier2-timer__sep" aria-hidden>
              ·
            </span>
          </>
        ) : null}
        {statusLabel}
      </p>
      <div
        className={`cd-clock cd-clock--wrap tier2-timer__clock${compact ? " cd-clock--compact" : ""}`}
      >
        {units.map((unit) => (
          <div key={unit.label} className="cd-unit">
            <RollPair value={unit.value} max={unit.max} />
            <span className="cd-key">{unit.label}</span>
          </div>
        ))}
      </div>
      {!compact ? <p className="tier2-timer__hint prose-body-sm">{hint}</p> : null}
    </div>
  );
}
