import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Tier1SubmissionBlock } from "@/components/Tier1SubmissionBlock";
import { IconArrowRight } from "@/components/icons";
import { tier1Challenge } from "@/lib/tier1-challenge";
import { workflowsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tier 1 Challenge · AI Playground · ImagineArt",
  description:
    "The Tier 1 One Prompt Film challenge for AI Playground. Introduce yourself as a superhero in 20–30 seconds using ImagineArt Creative Suite.",
};

export default function Tier1ChallengePage() {
  return (
    <>
      {/* HERO */}
      <section
        data-scroll-section
        className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-12 overflow-hidden hero-rule challenge-hero"
      >
        <div className="hero-grain" aria-hidden />
        <div
          className="absolute w-[520px] h-[520px] rounded-full blur-[140px] opacity-20 animate-float top-[-220px] right-[-120px]"
          style={{ background: "var(--accent-dim)" }}
        />
        <div
          className="challenge-hero__ghost absolute left-6 sm:left-12 top-24 sm:top-28 select-none pointer-events-none"
          aria-hidden
        >
          01
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="section-index">
                <span className="num">01</span>
                <span className="slash">/</span>
                <span>01</span>
              </span>
              <span className="label-eyebrow">Tier 1 Challenge</span>
            </div>
            <h1 className="title-hero mb-5 descender-safe max-w-[900px]">
              {tier1Challenge.title}
            </h1>
            <p className="prose-body mb-8 max-w-[580px]">
              {tier1Challenge.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="meta-tag">{tier1Challenge.duration}</span>
              <span className="meta-tag">Solo</span>
              <span className="meta-tag">Day 01</span>
              <span className="meta-tag">ImagineArt Creative Suite</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* PROMPT */}
      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">{tier1Challenge.prompt.label}</span>
            </div>
            <h2 className="title-display mb-10 descender-safe max-w-[720px]">
              Your script
              <br />
              <em>starts here.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <article className="challenge-prompt" data-hover="READ">
              <p className="label-day mb-4">{tier1Challenge.prompt.heading}</p>
              <div className="challenge-prompt__body">
                {tier1Challenge.prompt.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* GUIDELINES */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">Guidelines</span>
            </div>
            <h2 className="title-display mb-4 descender-safe">
              How to play
              <br />
              <em>this tier.</em>
            </h2>
            <p className="prose-body mb-12 max-w-[560px]">
              Read the brief, pick your workflow, and stay inside the time limit.
              Credits matter — choose your model wisely.
            </p>
          </ScrollReveal>

          <div className="guideline-grid">
            {tier1Challenge.guidelines.map((item, index) => (
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
                Open Workflows
                <IconArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/details"
                data-hover="EVENT"
                className="btn-ghost"
              >
                Back to The Event
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* SUBMISSION */}
      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">Submission</span>
            </div>
            <h2 className="title-display mb-4 descender-safe max-w-[640px]">
              Clock&apos;s ready.
              <br />
              <em>Submit when you&apos;re done.</em>
            </h2>
            <p className="prose-body mb-10 max-w-[560px]">
              Scan the QR code or open the form link below. Need the full schedule?{" "}
              <Link href="/details" className="text-accent font-medium">
                See The Event
              </Link>
              .
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <Tier1SubmissionBlock />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
