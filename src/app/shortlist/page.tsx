import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { IconArrowRight } from "@/components/icons";
import {
  tier12Shortlist,
  tier12ShortlistCount,
  tier12ShortlistNextSteps,
} from "@/lib/tier12-shortlist";

export const metadata: Metadata = {
  title: "Shortlist · AI Playground · ImagineArt",
  description:
    "Shortlisted participants from Tier 1. Network, form a team of three, and return tomorrow for Tier 2 — two hours to write your script.",
};

export default function ShortlistPage() {
  return (
    <>
      <section
        data-scroll-section
        className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-12 overflow-hidden hero-rule shortlist-hero"
      >
        <div className="hero-grain" aria-hidden />
        <div
          className="absolute w-[480px] h-[480px] rounded-full blur-[140px] opacity-20 animate-float top-[-200px] right-[-100px]"
          style={{ background: "var(--accent-dim)" }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="section-index">
                <span className="num">03</span>
                <span className="slash">/</span>
                <span>03</span>
              </span>
              <span className="label-eyebrow">Day 2 Shortlist</span>
            </div>
            <h1 className="title-hero mb-5 descender-safe max-w-[900px]">
              You made it
              <br />
              <em
                className="text-outline accent"
                style={{ WebkitTextStrokeWidth: "0.024em" }}
              >
                through.
              </em>
            </h1>
            <p className="prose-body mb-8 max-w-[620px]">
              Tier 1 was reviewed on Day 1. If your name is below,
              you&apos;re in — but Day 2 is{" "}
              <span className="text-accent">shortlisted participants only</span>.
              Network tonight, form a team of three, and come back tomorrow for
              Tier 2 — two hours to write your 2–3 minute script from the prompt and submit.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="meta-tag">{tier12ShortlistCount} shortlisted</span>
              <span className="meta-tag">Teams of 3</span>
              <span className="meta-tag">2 hours</span>
              <span className="meta-tag">Day 02 · Tier 2</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-20 sm:py-24"
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">Before tomorrow</span>
            </div>
            <h2 className="title-display mb-4 descender-safe max-w-[720px]">
              Network.
              <br />
              <em>Team up. Return.</em>
            </h2>
            <p className="prose-body mb-10 max-w-[580px]">
              You made it through Tier 1 — now find two other
              shortlisted creators and lock in your trio. Only people on this
              list should come tomorrow for Tier 2 — two hours to write and submit
              your script.
            </p>
          </ScrollReveal>

          <div className="guideline-grid">
            {tier12ShortlistNextSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.05}>
                <article
                  className={`guideline-card${item.featured ? " guideline-card--featured" : ""}`}
                  data-hover={`STEP ${item.step}`}
                >
                  <div className="guideline-card__head">
                    <span className="guideline-card__stat">{item.step}</span>
                    {item.featured ? (
                      <span className="guideline-card__badge">Required</span>
                    ) : null}
                  </div>
                  <h3 className="title-space mb-3 descender-safe">{item.title}</h3>
                  <p className="prose-body-sm descender-safe">{item.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">The room narrows</span>
            </div>
            <h2 className="title-display mb-4 descender-safe">
              Shortlisted
              <br />
              <em>participants.</em>
            </h2>
            <p className="prose-body mb-12 max-w-[560px]">
              {tier12ShortlistCount} creators shortlisted. Find your name, reach
              out to others on the list, and show up tomorrow with your team of
              three.
            </p>
          </ScrollReveal>

          <div className="shortlist-grid">
            {tier12Shortlist.map((entry, index) => (
              <ScrollReveal key={entry.email} delay={(index % 12) * 0.02}>
                <article className="shortlist-card" data-hover="TIER 3">
                  <span className="shortlist-card__index" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="shortlist-card__name descender-safe">
                    {entry.name}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="shortlist-cta mt-14 flex flex-wrap gap-4">
              <Link href="/tier-2" data-hover="TIER 2" className="btn-primary">
                Read Tier 2 brief
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/details" data-hover="EVENT" className="btn-ghost">
                See Day 2 schedule
              </Link>
              <Link href="/tier-1" data-hover="TIER 1" className="btn-ghost">
                Tier 1 brief
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
