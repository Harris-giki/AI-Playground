"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ai-playground-loaded";

/** Cinematic reel loader — once per browser session (index_6 #loader). */
export function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const finish = window.setTimeout(() => {
      setDone(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
      document.body.style.overflow = "";
    }, 1900);

    const hide = window.setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      window.clearTimeout(finish);
      window.clearTimeout(hide);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`page-loader${done ? " is-done" : ""}`}
      role="status"
      aria-label="Loading"
    >
      <p className="page-loader__reel">REEL · 01 · TAKE 01</p>
      <p className="page-loader__counter">00</p>
      <div className="page-loader__bar" />
    </div>
  );
}
