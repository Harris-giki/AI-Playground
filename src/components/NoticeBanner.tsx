"use client";

import { useEffect } from "react";

const NOTICE_CLASS = "has-notice-banner";

export function NoticeBanner() {
  useEffect(() => {
    document.documentElement.classList.add(NOTICE_CLASS);
    return () => {
      document.documentElement.classList.remove(NOTICE_CLASS);
    };
  }, []);

  return (
    <aside className="notice-banner" role="status" aria-live="polite">
      <div className="notice-banner__inner">
        <span className="notice-banner__label">Update</span>
        <p className="notice-banner__text">
          Apologies for the inconvenience — yes, we know scripting comes before
          storyboarding. XD
        </p>
      </div>
    </aside>
  );
}
