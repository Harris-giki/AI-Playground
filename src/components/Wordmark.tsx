"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

/**
 * ImagineArt wordmark, fixed in the top-left.
 * Swaps to the purple PNG in light mode and the white SVG in dark mode so the
 * logo always sits comfortably against its background.
 */
export function Wordmark() {
  const { resolvedTheme } = useTheme();
  const src =
    resolvedTheme === "light"
      ? "/brand/imagineart-purple.png"
      : "/brand/imagineart-white.svg";

  return (
    <Link
      href="/"
      data-hover="HOME"
      aria-label="AI Playground, by ImagineArt"
      style={{
        position: "fixed",
        top: "max(1.4rem, env(safe-area-inset-top, 0px))",
        left: "max(1.6rem, env(safe-area-inset-left, 0px))",
        zIndex: 100,
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <Image
        src={src}
        alt="ImagineArt"
        width={160}
        height={25}
        priority
        unoptimized
        style={{
          height: "clamp(20px, 2.2vw, 30px)",
          width: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
    </Link>
  );
}
