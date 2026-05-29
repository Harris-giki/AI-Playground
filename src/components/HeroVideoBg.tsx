export function HeroVideoBg() {
  return (
    <div className="hero-video-bg absolute inset-0 overflow-hidden" aria-hidden>
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
