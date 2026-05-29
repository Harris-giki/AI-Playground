"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IconPlay, IconVolume, IconVolumeOff } from "@/components/icons";
import type { ShowcaseFilm } from "@/lib/films";

type FilmPlayerOverlayProps = {
  film: ShowcaseFilm;
  onClose: () => void;
};

export function FilmPlayerOverlay({ film, onClose }: FilmPlayerOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);
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

  const handleClose = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.currentTime = 0;
    v.muted = false;
    setMuted(false);
    setPlaying(true);

    void v.play().catch(() => {
      v.muted = true;
      setMuted(true);
      void v.play();
    });
  }, [film.id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleClose]);

  return (
    <div
      className="fs-player-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Playing ${film.title}`}
    >
      <button
        type="button"
        className="fs-player-backdrop"
        onClick={handleClose}
        aria-label="Close player"
      />

      <div className="fs-player-shell">
        <video
          ref={videoRef}
          key={film.id}
          className="fs-player-video"
          src={film.src}
          playsInline
          preload="auto"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        <div className="fs-player-gradient" aria-hidden />

        <div className="fs-player-bar">
          <p className="fs-player-title">{film.title}</p>

          <div className="fs-player-controls">
            <div className="flex items-center gap-2">
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

            <button
              type="button"
              onClick={handleClose}
              className="fs-player-close"
              aria-label="Close player"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
