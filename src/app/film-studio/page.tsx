import type { Metadata } from "next";
import { filmStudioTutorialUrl } from "@/lib/site";
import { FilmStudioHero } from "@/components/film-studio/FilmStudioHero";
import { FilmShowcase } from "@/components/film-studio/FilmShowcase";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Film Studio · ImagineArt",
  description:
    "ImagineArt Film Studio is a complete production environment for visual storytellers — cinematic controls, generative AI, and a browser-based workflow from first frame to multi-shot film.",
};

const coreModules = [
  {
    num: "01",
    title: "Image",
    desc: "Generate or upload stills with full cinematographic control — camera body, lens, focal length, aperture, and storyboard mode for multi-frame sequences.",
  },
  {
    num: "02",
    title: "Create Video",
    desc: "Produce motion from prompts — single-shot clips or multi-shot films up to 15 seconds, with genres, camera movements, and speed ramps.",
  },
  {
    num: "03",
    title: "Edit Video",
    desc: "Re-direct existing footage with a prompt. Change the look, genre, or motion without starting from scratch.",
  },
  {
    num: "04",
    title: "Extend",
    desc: "Continue an existing clip forward — new frames that follow naturally, so a good take can become a longer sequence.",
  },
];

const capabilities = [
  "Generate stills with camera, lens, focal length, and aperture control.",
  "Build storyboards and multi-shot films up to 15 seconds.",
  "Edit or extend footage with a prompt.",
  "Save presets to keep a consistent look across projects.",
];

export default function FilmStudioPage() {
  return (
    <div className="fs-page">
      <FilmStudioHero />

      {/* About */}
      <section id="about" className="fs-about px-6 py-16 sm:px-12 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[#ff5a2a]">
                About Film Studio
              </p>
              <h2 className="title-display mb-5 text-white">
                A complete production environment for visual storytellers.
              </h2>
              <p className="prose-body mb-5 text-white/68">
                Real cinematography controls — cameras, lenses, focal lengths,
                apertures, movements, genres — paired with generative AI. Runs
                in your browser, no install. Write prompts like a director&apos;s
                brief; deliberate direction gets deliberate results.
              </p>
            </div>

            <div className="fs-about-panel">
              <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/45">
                What you can do
              </p>
              <ul className="space-y-3">
                {capabilities.map((item, i) => (
                  <li key={item} className="flex gap-3 text-[0.9rem] leading-[1.55] text-white/72">
                    <span className="shrink-0 font-mono text-[0.72rem] tabular-nums text-[#ff5a2a]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four core modules — Netflix info strip */}
      <section className="fs-modules px-6 pb-8 sm:px-12 sm:pb-12">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/40">
            The workspace
          </p>
          <h2 className="title-display mb-10 text-white">
            Four actions. One pipeline.
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {coreModules.map((mod) => (
              <article key={mod.num} className="fs-module-card">
                <span className="fs-module-num">{mod.num}</span>
                <h3 className="font-display mb-3 text-[1.45rem] uppercase leading-none text-white">
                  {mod.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.65] text-white/62">{mod.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematographer toolkit callout */}
      <section className="fs-toolkit px-6 py-16 sm:px-12 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="fs-toolkit-panel">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[#ff5a2a]">
                  The Cinematographer&apos;s Toolkit
                </p>
                <h2 className="title-lg mb-5 text-white">
                  Four dials that shape every frame.
                </h2>
                <p className="prose-body text-white/68">
                  Camera body sets the underlying texture — digital cleanliness,
                  film grain, or large-format scale. Lens sets optical character:
                  anamorphic widescreen flares, vintage swirl, surgical macro detail.
                  Focal length controls field of view and perspective compression.
                  Aperture controls depth of field — from creamy background blur at
                  f/1.4 to deep focus landscapes at f/16. These choices, more than
                  anything else, shape the personality of your image.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Body", hint: "Texture & format" },
                  { label: "Lens", hint: "Optical character" },
                  { label: "Focal", hint: "Field of view" },
                  { label: "Aperture", hint: "Depth of field" },
                ].map((dial) => (
                  <div key={dial.label} className="fs-dial-card">
                    <span className="font-display text-[1.6rem] uppercase leading-none text-white">
                      {dial.label}
                    </span>
                    <span className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/42">
                      {dial.hint}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase — community films */}
      <section className="fs-showcase pb-24 pt-4">
        <div className="mx-auto mb-10 max-w-[1200px] px-6 sm:px-12">
          <p className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/40">
            Video library
          </p>
          <h2 className="title-display text-white">
            Showcase
          </h2>
        </div>

        <FilmShowcase />
      </section>

      {/* Bottom CTA */}
      <section className="fs-cta px-6 pb-28 sm:px-12">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="title-display mb-4 text-white">
            Ready to direct?
          </h2>
          <p className="prose-body mx-auto mb-8 max-w-[520px] text-white/60">
            New to Film Studio? Watch this walkthrough to make your first film
            in the browser — from your opening frame through to a finished short.
          </p>
          <a
            href={filmStudioTutorialUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-hover="LEARN"
            className="fs-btn fs-btn-primary inline-flex"
          >
            Learn More
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
