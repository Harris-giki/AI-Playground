"use client";

import { useEffect } from "react";
import { Tier1ChallengeTimer } from "@/components/Tier1ChallengeTimer";

const TIMER_BAR_CLASS = "has-challenge-timer-bar";

export function ChallengeTimerBar() {
  useEffect(() => {
    document.documentElement.classList.add(TIMER_BAR_CLASS);
    return () => {
      document.documentElement.classList.remove(TIMER_BAR_CLASS);
    };
  }, []);

  return (
    <aside className="challenge-timer-bar" aria-label="Day 1 challenge timer">
      <div className="challenge-timer-bar__inner">
        <Tier1ChallengeTimer compact />
      </div>
    </aside>
  );
}
