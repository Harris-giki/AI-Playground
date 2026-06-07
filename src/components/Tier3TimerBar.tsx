"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Tier3ChallengeTimer } from "@/components/Tier3ChallengeTimer";

const TIMER_BAR_CLASS = "has-tier2-timer-bar";

export function Tier3TimerBar() {
  const pathname = usePathname();
  const hidden = pathname.startsWith("/film-studio");

  useEffect(() => {
    if (hidden) {
      document.documentElement.classList.remove(TIMER_BAR_CLASS);
      return;
    }
    document.documentElement.classList.add(TIMER_BAR_CLASS);
    return () => {
      document.documentElement.classList.remove(TIMER_BAR_CLASS);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <aside className="tier2-timer-bar" aria-label="Tier 3 challenge timer">
      <div className="tier2-timer-bar__inner">
        <Tier3ChallengeTimer compact />
      </div>
    </aside>
  );
}
