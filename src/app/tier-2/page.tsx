import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Tier2SubmissionBlock } from "@/components/Tier2SubmissionBlock";
import { IconArrowRight } from "@/components/icons";
import { tier2Challenge } from "@/lib/tier2-challenge";
import { filmStudioUrl, workflowsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tier 2 · AI Playground · ImagineArt",
  description:
    "Tier 2 for shortlisted teams: form your trio and write a script from the prompt. Submit, then take a break.",
};

export default function Tier2Page() {
  const { brief, tier2 } = tier2Challenge;

  return (
    <>
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
          className="challenge-hero__ghost absolute left-6 sm:left-12 top-24 sm:top-28 select-none pointer-events-none"
          aria-hidden
        >
          02
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="section-index">
                <span className="num">02</span>
                <span className="slash">/</span>
                <span>03</span>
              </span>
              <span className="label-eyebrow">{tier2Challenge.heroEyebrow}</span>
            </div>
            <h1 className="title-hero mb-5 descender-safe max-w-[900px]">
              {tier2Challenge.title}
            </h1>
            <p className="prose-body mb-8 max-w-[620px]">
              {tier2Challenge.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="meta-tag">Shortlisted only</span>
              <span className="meta-tag">Teams of 3</span>
              <span className="meta-tag">Day 02</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* THE PROMPT */}
      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">Direction</span>
            </div>
            <h2 className="title-display mb-10 descender-safe max-w-[720px]">
              Three heroes.
              <br />
              <em>One collision.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <article className="challenge-prompt tier3-prompt" data-hover="READ">
              <p className="tier3-prompt__direction descender-safe">
                &ldquo;{tier2Challenge.direction}&rdquo;
              </p>
              <p className="label-day mb-4">{brief.heading}</p>
              <div className="challenge-prompt__body">
                {brief.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <p className="tier3-prompt__closing descender-safe">{brief.closing}</p>
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

          <ScrollReveal delay={0.08}>
            <div className="tier3-logistics mt-8">
              {tier2.meta.map((item) => (
                <article key={item} className="tier3-logistics__card" data-hover="TIER 2">
                  <p className="title-space descender-safe">{item}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Tier2SubmissionBlock />
          </ScrollReveal>

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
              <Link href="/shortlist" data-hover="LIST" className="btn-ghost">
                View Shortlist
              </Link>
              <Link href="/details" data-hover="EVENT" className="btn-ghost">
                Day 2 schedule
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
