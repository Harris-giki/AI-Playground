"use client";

import { useLayoutEffect, useState } from "react";
import {
  tiersChallengeDurationHours,
  tiersChallengeStartISO,
} from "@/lib/tiers-challenge";

const START = new Date(tiersChallengeStartISO).getTime();
const END = START + tiersChallengeDurationHours * 60 * 60 * 1000;

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

function RollPair({ value }: { value: number }) {
  const clamped = Math.min(99, Math.max(0, value));
  const text = String(clamped).padStart(2, "0");
  return (
    <span className="cd-num">
      <span className="sr-only">{text}</span>
      <RollDigit value={Number(text[0])} />
      <RollDigit value={Number(text[1])} />
    </span>
  );
}

type TimerPhase = "upcoming" | "live" | "ended";

function getPhase(now: number): TimerPhase {
  if (now < START) return "upcoming";
  if (now >= END) return "ended";
  return "live";
}

function getRemainingMs(now: number, phase: TimerPhase) {
  if (phase === "upcoming") return tiersChallengeDurationHours * 60 * 60 * 1000;
  if (phase === "ended") return 0;
  return END - now;
}

export function Tier1ChallengeTimer() {
  const [now, setNow] = useState(0);

  useLayoutEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const phase = getPhase(now);
  const remaining = getRemainingMs(now, phase);
  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  const units = [
    { value: hours, label: "Hrs" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Sec" },
  ];

  const statusLabel =
    phase === "upcoming"
      ? "Starting soon"
      : phase === "live"
        ? "Live now"
        : "Time's up";

  const hint =
    phase === "upcoming"
      ? `${tiersChallengeDurationHours}-hour challenge window · starts shortly`
      : phase === "live"
        ? `${tiersChallengeDurationHours}-hour challenge window · submit before time runs out`
        : "Challenge window closed — submit if you haven't already";

  return (
    <div
      className={`tier1-timer${phase !== "live" ? " tier1-timer--idle" : ""}${phase === "ended" ? " tier1-timer--ended" : ""}`}
      aria-live="polite"
    >
      <p className="tier1-timer__status">
        <span
          className={`tier1-timer__dot${phase === "live" ? " tier1-timer__dot--live" : ""}`}
          aria-hidden
        />
        {statusLabel}
      </p>
      <div className="cd-clock cd-clock--wrap tier1-timer__clock">
        {units.map((unit) => (
          <div key={unit.label} className="cd-unit">
            <RollPair value={unit.value} />
            <span className="cd-key">{unit.label}</span>
          </div>
        ))}
      </div>
      <p className="tier1-timer__hint prose-body-sm">{hint}</p>
    </div>
  );
}
