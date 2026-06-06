import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChallengeTimerBar } from "@/components/ChallengeTimerBar";
import { TiersSubmissionBlock } from "@/components/TiersSubmissionBlock";
import { IconArrowRight } from "@/components/icons";
import { tiersChallenge } from "@/lib/tiers-challenge";
import { filmStudioUrl, workflowsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tier 1 & 2 · AI Playground · ImagineArt",
  description:
    "Tier 1 and Tier 2 of AI Playground: full script first, then visual storyboard. Reviewed together on Day 1.",
};

export default function TiersChallengePage() {
  const { tier1, tier2 } = tiersChallenge;

  return (
    <>
      <ChallengeTimerBar />

      {/* HERO */}
      <section
        data-scroll-section
        className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-12 overflow-hidden hero-rule challenge-hero challenge-page-hero"
      >
        <div className="hero-grain" aria-hidden />
        <div
          className="absolute w-[520px] h-[520px] rounded-full blur-[140px] opacity-20 animate-float top-[-220px] right-[-120px]"
          style={{ background: "var(--accent-dim)" }}
        />
        <div
          className="challenge-hero__ghost challenge-hero__ghost--duo absolute left-6 sm:left-12 top-24 sm:top-28 select-none pointer-events-none"
          aria-hidden
        >
          01·02
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="section-index">
                <span className="num">01</span>
                <span className="slash">/</span>
                <span>02</span>
              </span>
              <span className="label-eyebrow">{tiersChallenge.heroEyebrow}</span>
            </div>
            <h1 className="title-hero mb-5 descender-safe max-w-[900px]">
              {tiersChallenge.title}
            </h1>
            <p className="prose-body mb-8 max-w-[620px]">
              {tiersChallenge.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="meta-tag">Spec ad</span>
              <span className="meta-tag">Film</span>
              <span className="meta-tag">Teams of 3–5</span>
              <span className="meta-tag">Day 01</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* TIER 1 */}
      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">{tier1.label}</span>
            </div>
            <h2 className="title-display mb-10 descender-safe max-w-[720px]">
              {tier1.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <article className="challenge-prompt" data-hover="READ">
              <p className="label-day mb-4">{tier1.heading}</p>
              <ul className="tier-row__tracks mb-5">
                {tier1.tracks.map((track) => (
                  <li key={track}>{track}</li>
                ))}
              </ul>
              <div className="challenge-prompt__body">
                {tier1.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* TIER 2 */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">{tier2.label}</span>
            </div>
            <h2 className="title-display mb-10 descender-safe max-w-[720px]">
              {tier2.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <article className="challenge-prompt" data-hover="READ">
              <p className="label-day mb-4">{tier2.heading}</p>
              <div className="challenge-prompt__body">
                {tier2.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* GUIDELINES */}
      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">Guidelines</span>
            </div>
            <h2 className="title-display mb-4 descender-safe">
              How Day 1
              <br />
              <em>works.</em>
            </h2>
            <p className="prose-body mb-12 max-w-[560px]">
              Tier 1 is your script and story. Tier 2 is the visual storyboard.
              Submit everything together — video comes on Day 2 for shortlisted
              teams only.
            </p>
          </ScrollReveal>

          <div className="guideline-grid">
            {tiersChallenge.guidelines.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.05}>
                <article
                  className={`guideline-card${item.recommended ? " guideline-card--featured" : ""}`}
                  data-hover={item.tag?.toUpperCase() ?? item.title.split(" ")[0].toUpperCase()}
                >
                  <div className="guideline-card__head">
                    <p className="title-space descender-safe">{item.title}</p>
                    {item.recommended ? (
                      <span className="guideline-card__badge">Recommended</span>
                    ) : null}
                    {item.highlight ? (
                      <span className="guideline-card__stat">{item.highlight}</span>
                    ) : null}
                    {item.tag && !item.highlight ? (
                      <span className="meta-tag">{item.tag}</span>
                    ) : null}
                  </div>
                  <p className="prose-body-sm">{item.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="challenge-cta-row mt-14 flex flex-wrap gap-4">
              <a
                href={workflowsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-hover="OPEN"
                className="btn-primary"
              >
                Open Workflows (Flow)
                <IconArrowRight className="w-4 h-4" />
              </a>
              <a
                href={filmStudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-hover="STUDIO"
                className="btn-ghost"
              >
                Film Studio
              </a>
              <Link href="/details" data-hover="EVENT" className="btn-ghost">
                Back to The Event
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* SUBMISSION */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">Submission</span>
            </div>
            <h2 className="title-display mb-4 descender-safe max-w-[640px]">
              One form.
              <br />
              <em>Everything included.</em>
            </h2>
            <p className="prose-body mb-10 max-w-[560px]">
              Full script, visual storyboard, and story — scan the QR code or open
              the form below. Need the full schedule?{" "}
              <Link href="/details" className="text-accent font-medium">
                See The Event
              </Link>
              .
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <TiersSubmissionBlock />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
