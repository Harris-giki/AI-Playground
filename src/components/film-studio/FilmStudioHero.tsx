"use client";

import { useRef, useState } from "react";
import { IconPlay, IconVolume, IconVolumeOff } from "@/components/icons";
import { filmStudioUrl } from "@/lib/site";

export function FilmStudioHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="fs-hero relative w-full" aria-label="Film Studio intro">
      <h1 className="sr-only">ImagineArt Film Studio</h1>

      <div className="fs-hero-media absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="fs-hero-video h-full w-full object-cover"
          src="/brand/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Light bottom fade only — keeps video copy readable */}
        <div className="fs-hero-gradient fs-hero-gradient--light absolute inset-0" aria-hidden />
      </div>

      <div className="fs-hero-bar relative z-10 mx-auto flex min-h-[88svh] max-w-[1200px] flex-col justify-end px-6 pb-8 pt-24 sm:px-12 sm:pb-10">
        <div className="fs-hero-controls flex w-full items-center justify-between gap-4">
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="fs-control-btn"
              aria-label={playing ? "Pause video" : "Play video"}
            >
              <IconPlay className={`h-4 w-4 ${playing ? "opacity-40" : ""}`} />
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="fs-control-btn"
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? (
                <IconVolumeOff className="h-4 w-4" />
              ) : (
                <IconVolume className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <a
              href={filmStudioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-btn fs-btn-primary"
            >
              <IconPlay className="h-4 w-4" />
              Open Film Studio
            </a>
            <a href="#about" className="fs-btn fs-btn-secondary">
              About the product
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
