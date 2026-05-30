"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

type SegmentCardProps = {
  tag: string;
  name: string;
  desc: string;
  index: number;
};

export function SegmentCard({ tag, name, desc, index }: SegmentCardProps) {
  const ref = useRef<HTMLElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 });

  const glareX = useTransform(rotateY, [-8, 8], ["20%", "80%"]);
  const glareY = useTransform(rotateX, [8, -8], ["20%", "80%"]);

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 10);
    rotateX.set(-y * 10);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      className="segment-card"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.span
        className="segment-card__glare"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.14), transparent 55%)`,
        }}
        aria-hidden
      />
      <span className="segment-card__index font-mono" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className="font-mono uppercase block"
        style={{
          fontSize: "0.68rem",
          letterSpacing: "0.22em",
          color: "var(--accent)",
          marginBottom: "0.4rem",
        }}
      >
        {tag}
      </span>
      <div className="segment-name title-md descender-safe mb-[0.45rem]">
        {name}
      </div>
      <p
        className="leading-[1.6]"
        style={{
          color: "var(--ink-muted)",
          maxWidth: "none",
          fontSize: "0.92rem",
        }}
      >
        {desc}
      </p>
    </motion.article>
  );
}
