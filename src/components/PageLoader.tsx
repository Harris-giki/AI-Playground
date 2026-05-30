"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ai-playground-loaded";

/** Cinematic reel loader — once per browser session (index_6 #loader). */
export function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);
  const [counter, setCounter] = useState("00");

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    setVisible(true);
    document.body.style.overflow = "hidden";

    let n = 0;
    const tick = window.setInterval(() => {
      n += Math.ceil(Math.random() * 9);
      if (n >= 99) {
        n = 99;
        window.clearInterval(tick);
      }
      setCounter(String(n).padStart(2, "0"));
    }, 60);

    const onLoad = () => {
      window.setTimeout(() => {
        setCounter("99");
        window.clearInterval(tick);
        window.setTimeout(() => {
          setDone(true);
          sessionStorage.setItem(STORAGE_KEY, "1");
          document.body.style.overflow = "";
        }, 350);
        window.setTimeout(() => setVisible(false), 1100);
      }, 700);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.clearInterval(tick);
      window.removeEventListener("load", onLoad);
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
      <p className="page-loader__counter">{counter}</p>
      <div className="page-loader__bar" />
    </div>
  );
}
