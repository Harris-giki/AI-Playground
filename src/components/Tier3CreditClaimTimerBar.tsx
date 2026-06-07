"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Tier3CreditClaimTimer } from "@/components/Tier3CreditClaimTimer";

const TIMER_BAR_CLASS = "has-tier2-timer-bar";

export function Tier3CreditClaimTimerBar() {
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
    <aside className="tier2-timer-bar" aria-label="Tier 3 credit claim timer">
      <div className="tier2-timer-bar__inner">
        <Tier3CreditClaimTimer compact />
      </div>
    </aside>
  );
}
