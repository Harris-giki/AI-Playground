export type ShowcaseFilm = {
  id: string;
  title: string;
  src: string;
  /** Static poster image (e.g. frame extracted at a specific timestamp). */
  poster?: string;
};

/** Films in public/brand/films — titles match file names (without extension). */
export const showcaseFilms: ShowcaseFilm[] = [
  {
    id: "bitter-sweet",
    title: "Bitter Sweet",
    src: "/brand/films/Bitter Sweet.mp4",
    poster: "/brand/films/thumbnails/bitter-sweet.jpg",
  },
  {
    id: "last-december",
    title: "Last December",
    src: "/brand/films/Last December.mp4",
  },
];
