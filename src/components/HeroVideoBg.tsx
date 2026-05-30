"use client";

import { useEffect, useRef } from "react";

export function HeroVideoBg() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y >= vh) return;
      layer.style.transform = `translateY(${y * 0.3}px) scale(${1 + y * 0.0004})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={layerRef}
      className="hero-video-bg absolute inset-0 overflow-hidden will-change-transform"
      aria-hidden
    >
      <video
        className="hero-video-bg__media h-full w-full object-cover"
        src="/brand/sprint.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="hero-video-bg__scrim absolute inset-0" />
    </div>
  );
}
