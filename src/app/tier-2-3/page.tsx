import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Tier2SubmissionBlock } from "@/components/Tier2SubmissionBlock";
import { IconArrowRight } from "@/components/icons";
import { tier23Challenge } from "@/lib/tier23-challenge";
import { filmStudioUrl, workflowsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tier 2 & 3 · AI Playground · ImagineArt",
  description:
    "Tier 2 and Tier 3 for shortlisted teams: form your trio and write a script, then a 4-hour sprint to generate assets and make the film.",
};

export default function Tier23Page() {
  const { brief, tier2, tier3, criteria, rules, submission } = tier23Challenge;
  const dos = rules.filter((r) => r.type === "do");
  const donts = rules.filter((r) => r.type === "dont");

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
          className="challenge-hero__ghost challenge-hero__ghost--duo absolute left-6 sm:left-12 top-24 sm:top-28 select-none pointer-events-none"
          aria-hidden
        >
          02·03
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="section-index">
                <span className="num">02</span>
                <span className="slash">/</span>
                <span>03</span>
              </span>
              <span className="label-eyebrow">{tier23Challenge.heroEyebrow}</span>
            </div>
            <h1 className="title-hero mb-5 descender-safe max-w-[900px]">
              {tier23Challenge.title}
            </h1>
            <p className="prose-body mb-8 max-w-[620px]">
              {tier23Challenge.subtitle}
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
                &ldquo;{tier23Challenge.direction}&rdquo;
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
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* TIER 3 */}
      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">{tier3.label}</span>
            </div>
            <h2 className="title-display mb-10 descender-safe max-w-[720px]">
              {tier3.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <article className="challenge-prompt" data-hover="READ">
              <p className="label-day mb-4">{tier3.heading}</p>
              <div className="challenge-prompt__body">
                {tier3.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="tier3-logistics mt-8">
              {tier3.meta.map((item) => (
                <article key={item} className="tier3-logistics__card" data-hover="TIER 3">
                  <p className="title-space descender-safe">{item}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* JUDGEMENT CRITERIA */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">Judgement</span>
            </div>
            <h2 className="title-display mb-4 descender-safe">
              How your film
              <br />
              <em>gets scored.</em>
            </h2>
            <p className="prose-body mb-12 max-w-[560px]">
              Six lenses. One finished film. Every criterion matters — from the
              story you tell to the way you interpreted the brief.
            </p>
          </ScrollReveal>

          <div className="tier3-criteria-grid">
            {criteria.map((item, index) => (
              <ScrollReveal key={item.id} delay={(index % 3) * 0.05}>
                <article className="tier3-criterion" data-hover={item.title.toUpperCase()}>
                  <div className="tier3-criterion__head">
                    <h3 className="tier3-criterion__title descender-safe">{item.title}</h3>
                    <span className="tier3-criterion__subtitle">{item.subtitle}</span>
                  </div>
                  <p className="prose-body-sm descender-safe">{item.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* DO'S & DON'TS */}
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
              Do&apos;s &amp;
              <br />
              <em>don&apos;ts.</em>
            </h2>
            <p className="prose-body mb-12 max-w-[560px]">
              Stay inside ImagineArt, watch your credits, and keep renders at
              720p. These aren&apos;t suggestions — they&apos;re how Tier 3 runs.
            </p>
          </ScrollReveal>

          <div className="tier3-rules">
            <div className="tier3-rules__col">
              <ScrollReveal>
                <p className="tier3-rules__label">Do</p>
              </ScrollReveal>
              <div className="tier3-rules__list">
                {dos.map((item, index) => (
                  <ScrollReveal key={item.id} delay={index * 0.05}>
                    <article className="guideline-card tier3-rule-card" data-hover="DO">
                      <h3 className="title-space mb-3 descender-safe">{item.title}</h3>
                      <p className="prose-body-sm descender-safe">{item.desc}</p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="tier3-rules__col">
              <ScrollReveal delay={0.04}>
                <p className="tier3-rules__label">Don&apos;t</p>
              </ScrollReveal>
              <div className="tier3-rules__list">
                {donts.map((item, index) => (
                  <ScrollReveal key={item.id} delay={index * 0.05 + 0.04}>
                    <article
                      className="guideline-card guideline-card--featured tier3-rule-card"
                      data-hover="DON'T"
                    >
                      <div className="guideline-card__head">
                        <h3 className="title-space descender-safe">{item.title}</h3>
                        <span className="guideline-card__badge">Required</span>
                      </div>
                      <p className="prose-body-sm descender-safe">{item.desc}</p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
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

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* SUBMISSION */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="label-eyebrow">Submission</span>
            </div>
            <h2 className="title-display mb-10 descender-safe max-w-[640px]">
              Two hand-ins.
              <br />
              <em>One day.</em>
            </h2>
          </ScrollReveal>

          <div className="guideline-grid">
            <ScrollReveal delay={0.05}>
              <article className="guideline-card">
                <p className="label-day mb-3">Tier 2</p>
                <h3 className="title-space mb-3 descender-safe">
                  {submission.tier2.title}
                </h3>
                <p className="prose-body-sm mb-5">{submission.tier2.intro}</p>
                <ul className="tier-submit-deliverables">
                  {submission.tier2.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <article className="guideline-card guideline-card--featured">
                <p className="label-day mb-3">Tier 3</p>
                <h3 className="title-space mb-3 descender-safe">
                  {submission.tier3.title}
                </h3>
                <p className="prose-body-sm mb-5">{submission.tier3.intro}</p>
                <ul className="tier-submit-deliverables">
                  {submission.tier3.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
