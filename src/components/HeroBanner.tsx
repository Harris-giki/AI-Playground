import Image from "next/image";

/**
 * Hero pennant for the home page. Both pennants ship in the same DOM and
 * the active one is selected via `[data-theme]` in CSS — that way we get
 * zero flash on theme toggle, no client hydration round-trip, and the
 * banner can still live inside a server component.
 *
 *   light → a3.png  (cream paper background, black letters on orange pennant)
 *   dark  → a2.png  (warm-black background, cream letters on red pennant)
 *
 * The two source images share a 2.08:1 aspect ratio so layout is stable
 * across theme swaps.
 */
export function HeroBanner() {
  return (
    <h1
      className="hero-banner animate-fade-up mb-6"
      style={{ animationDelay: "0.1s" }}
    >
      {/* Dark-mode pennant: also carries the alt text for screen readers
          so the h1 announces as "AI Playground" regardless of theme. */}
      <Image
        src="/brand/a2.png"
        alt="AI Playground"
        width={1298}
        height={625}
        priority
        unoptimized
        className="hero-banner-img hero-banner--dark"
      />
      <Image
        src="/brand/a3.png"
        alt=""
        width={1161}
        height={559}
        priority
        unoptimized
        className="hero-banner-img hero-banner--light"
        aria-hidden
      />
    </h1>
  );
}
