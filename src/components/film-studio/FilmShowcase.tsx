"use client";

import { useState } from "react";
import { IconPlay } from "@/components/icons";
import { showcaseFilms, type ShowcaseFilm } from "@/lib/films";
import { FilmPlayerOverlay } from "@/components/film-studio/FilmPlayerOverlay";

export function FilmShowcase() {
  const [activeFilm, setActiveFilm] = useState<ShowcaseFilm | null>(null);

  return (
    <>
      <section className="fs-row px-6 sm:px-12">
        <div className="fs-row-track -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 sm:-mx-12 sm:gap-4 sm:px-12">
          {showcaseFilms.map((film) => (
            <button
              key={film.id}
              type="button"
              className="fs-film-card group shrink-0 text-left"
              onClick={() => setActiveFilm(film)}
              aria-label={`Play ${film.title}`}
            >
              <div className="fs-film-card-frame">
                {film.poster ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={film.poster}
                    alt=""
                    className="fs-film-card-preview"
                  />
                ) : (
                  <video
                    className="fs-film-card-preview"
                    src={film.src}
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden
                  />
                )}
                <div className="fs-film-card-scrim" aria-hidden />
                <span className="fs-film-card-play">
                  <IconPlay className="h-5 w-5" />
                </span>
              </div>
              <h3 className="fs-film-card-title">{film.title}</h3>
            </button>
          ))}
        </div>
      </section>

      {activeFilm ? (
        <FilmPlayerOverlay
          film={activeFilm}
          onClose={() => setActiveFilm(null)}
        />
      ) : null}
    </>
  );
}
