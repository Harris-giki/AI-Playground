"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  "[data-hover], a, button, .segment-card, .stage-row, .fs-film-card, .quality-item";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const hoverEl = useRef<Element | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    pos.current.x = window.innerWidth / 2;
    pos.current.y = window.innerHeight / 2;
    pos.current.tx = pos.current.x;
    pos.current.ty = pos.current.y;

    const onPointerMove = (event: PointerEvent) => {
      pos.current.tx = event.clientX;
      pos.current.ty = event.clientY;
    };

    const activate = (el: Element) => {
      hoverEl.current = el;
      setHot(true);
      setLabel(el.getAttribute("data-hover") || "");
    };

    const deactivate = () => {
      hoverEl.current = null;
      setHot(false);
      setLabel("");
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;
      const el = target.closest(HOVER_SELECTOR);
      if (!el || el === hoverEl.current) return;
      activate(el);
    };

    const onMouseOut = (event: MouseEvent) => {
      const current = hoverEl.current;
      if (!current) return;

      const target = event.target as Element | null;
      if (!target || !current.contains(target)) return;

      const related = event.relatedTarget as Element | null;
      if (related && current.contains(related)) return;

      deactivate();
    };

    let raf = 0;
    const loop = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.22;
      p.y += (p.ty - p.y) * 0.22;

      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${hot ? " is-hot" : ""}`}
      aria-hidden
    >
      <span className="custom-cursor__label">{label}</span>
    </div>
  );
}
