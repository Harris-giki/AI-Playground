import Link from "next/link";
import { IconLinkedin, IconInstagram } from "./icons";
import {
  applyFormUrl,
  eventDateShort,
  imagineArtUrl,
  instagramUrl,
  linkedinUrl,
} from "@/lib/site";

export function Footer() {
  return (
    <footer
      className="px-6 sm:px-12 pt-20 pb-10"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-raised)" }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col gap-12">
        <div className="flex flex-wrap justify-between items-start gap-10">
          <div className="max-w-[460px]">
            <p
              className="font-display uppercase leading-[0.95] text-[clamp(1.4rem,2.4vw,2rem)]"
              style={{
                color: "var(--ink-muted)",
                letterSpacing: "0.005em",
              }}
            >
              &ldquo;AI doesn&apos;t replace people, it{" "}
              <em
                className="not-italic"
                style={{ color: "var(--accent)" }}
              >
                replaces outdated ways of working.
              </em>
              &rdquo;
            </p>
          </div>

          <div className="flex gap-12 flex-wrap">
            <div className="flex flex-col gap-2">
              <span
                className="font-mono text-[0.65rem] uppercase tracking-[0.14em] mb-1"
                style={{ color: "var(--ink-faint)" }}
              >
                Event
              </span>
              <Link
                href="/details"
                className="font-mono text-[0.78rem] uppercase tracking-[0.08em] hover:text-[var(--ink)] transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                The Event
              </Link>
              <a
                href={applyFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.78rem] uppercase tracking-[0.08em] hover:text-[var(--ink)] transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                Apply
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span
                className="font-mono text-[0.65rem] uppercase tracking-[0.14em] mb-1"
                style={{ color: "var(--ink-faint)" }}
              >
                ImagineArt
              </span>
              <a
                href={imagineArtUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.82rem] hover:text-[var(--ink)] transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                imagine.art
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.82rem] hover:text-[var(--ink)] transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                Instagram
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.82rem] hover:text-[var(--ink)] transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex justify-between items-center flex-wrap gap-4 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="font-mono text-[0.65rem] uppercase tracking-[0.1em]"
            style={{ color: "var(--ink-faint)" }}
          >
            &copy; 2026 ImagineArt &middot; AI Playground &middot; {eventDateShort}
          </p>
          <div className="flex gap-2">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass-edge w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{ color: "var(--ink-muted)" }}
            >
              <IconLinkedin className="w-4 h-4" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="glass-edge w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{ color: "var(--ink-muted)" }}
            >
              <IconInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
