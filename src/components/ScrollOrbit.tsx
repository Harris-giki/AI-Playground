"use client";

import { useEffect, useRef } from "react";

const ORBIT_TEXT =
  "AI PLAYGROUND · IMAGINEART · PAKISTAN · 6 JUNE 2026 · FILM MAKING · ";

export function ScrollOrbit() {
  const ringRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ringRef.current;
        if (!el) return;
        const scroll = window.scrollY;
        const max = Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          1,
        );
        const progress = scroll / max;
        el.style.transform = `rotate(${progress * 360}deg)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="scroll-orbit" aria-hidden>
      <svg
        ref={ringRef}
        className="scroll-orbit__ring"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="scroll-orbit-path"
            d="M 110, 110 m -88, 0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
          />
        </defs>
        <text className="scroll-orbit__text">
          <textPath href="#scroll-orbit-path" startOffset="0%">
            {ORBIT_TEXT.repeat(2)}
          </textPath>
        </text>
      </svg>
      <span className="scroll-orbit__core">2026</span>
    </div>
  );
}
