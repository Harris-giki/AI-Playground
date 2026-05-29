"use client";

import { useEffect, useRef } from "react";

export function SiteAmbience() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = layerRef.current;
        if (!el) return;
        const y = window.scrollY;
        el.style.setProperty("--scroll-y", `${y}px`);
        el.style.setProperty(
          "--scroll-progress",
          String(
            y /
              Math.max(
                document.documentElement.scrollHeight - window.innerHeight,
                1,
              ),
          ),
        );
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={layerRef} className="site-ambience" aria-hidden>
      <div className="site-ambience__orb site-ambience__orb--a" />
      <div className="site-ambience__orb site-ambience__orb--b" />
      <div className="site-ambience__orb site-ambience__orb--c" />
      <div className="site-ambience__scanlines" />
    </div>
  );
}
