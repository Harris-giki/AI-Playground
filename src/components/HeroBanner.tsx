/**
 * Hero pennant — transparent logo video in both themes (see index_6 reference).
 */
export function HeroBanner() {
  return (
    <h1
      className="hero-banner animate-fade-up mb-6"
      style={{ animationDelay: "0.1s" }}
    >
      <span className="sr-only">AI Playground</span>
      <video
        src="/logo-transparent.mov"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hero-banner-media"
        aria-hidden
      />
    </h1>
  );
}
