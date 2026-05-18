import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroBanner } from "@/components/HeroBanner";
import { IconArrowRight } from "@/components/icons";
import { applyFormUrl, eventDateLabel } from "@/lib/site";

const segments = [
  {
    tag: "Main Jam",
    name: "The Playground",
    desc: "You receive a prompt. You build a world. Using ImagineArt, you conceptualise and generate a short film from scratch. Live, under time, with a team you just met.",
  },
  {
    tag: "Learn",
    name: "The Workshop",
    desc: "Hands-on sessions running parallel for registered creators. Go deep on tools, techniques, and process with people who live inside this space.",
  },
  {
    tag: "Coffee & Social",
    name: "Korner",
    desc: "Coffee. Conversation. No agenda. The best ideas at any creative event happen here, between the sessions, in the in-between.",
  },
  {
    tag: "Photobooth",
    name: "Fotopia",
    desc: "A photobooth that doesn't behave. AI-powered, unpredictable, and worth the queue. Something to remember the day by.",
  },
  {
    tag: "Analogue",
    name: "Leave a piece of you behind",
    desc: "An empty canvas. Real paint. No prompts. Just you. In a room full of machines, this is the most human thing we do.",
  },
  {
    tag: "Rec. Activities",
    name: "Play",
    desc: "Table tennis, Jenga, and whatever else the room decides. Creative people need to move, so we make space for that.",
  },
];

const stages = [
  {
    num: "S-01",
    title: "Open Canvas",
    desc: "After the ImagineArt workshop, every attendee gets 20,000 credits and premium models. Build anything from your imagination, 50 seconds to 1 minute. Shortlists come from here.",
    pills: ["20k Credits", "50s to 1min", "Solo", "Premium Models"],
  },
  {
    num: "S-02",
    title: "Form & Frame",
    desc: "Shortlisted creators meet on-site and form teams of exactly 5. Write the story and script for your film. Day 1 closes with submission.",
    pills: ["Teams of 5", "Shortlisted Only", "Script Submission", "Day 1 Close"],
  },
  {
    num: "S-03",
    title: "Make the Film",
    desc: "Day 2. Teams generate assets, post-produce, and present to ImagineArt's creative directors and judges. Non-shortlisted attendees join parallel workshops.",
    pills: ["Day 2", "75k to 100k Credits", "Judge Presentation", "~$5,000 Prize Pool"],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — sized to fit on one screen ───────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 sm:px-12 pt-24 pb-20 hero-rule">
        <div className="hero-grain" aria-hidden />
        <div className="hero-dotgrid" aria-hidden />

        {/* Two ambient orange orbs — top-right and bottom-left. Removed the
            third "centre" orb because it competed with the pennant. */}
        <div
          className="absolute w-[520px] h-[520px] rounded-full blur-[140px] opacity-25 animate-float top-[-180px] right-[-100px]"
          style={{ background: "var(--accent-dim)" }}
        />
        <div
          className="absolute w-[460px] h-[460px] rounded-full blur-[130px] opacity-15 animate-float bottom-[-180px] left-[-60px]"
          style={{ background: "var(--accent-glow)", animationDelay: "-4s" }}
        />

        {/* Vertical editorial rail — kept lean: marker, line, vertical text. */}
        <aside className="hero-rail" aria-hidden>
          <div className="rail-marker">
            <span className="num">01</span>
            <span className="divider" />
            <span className="year">2026</span>
          </div>
          <span className="rail-line" />
          <span className="rail-vertical-text">
            Edition · <em>Pakistan</em>
          </span>
        </aside>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full lg:pr-24">
          <p className="label-eyebrow mb-6 animate-fade-up">
            ImagineArt presents · {eventDateLabel}
          </p>

          {/* Main + right strip: countdown only in the right column, centered. */}
          <div className="hero-split grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 xl:gap-14 lg:items-stretch mb-10 lg:mb-12">
            <div className="flex flex-col gap-5 min-w-0">
              <HeroBanner />

              <p
                className="animate-fade-up max-w-[640px]"
                style={{
                  fontSize: "0.95rem",
                  color: "var(--ink-muted)",
                  lineHeight: 1.65,
                  animationDelay: "0.18s",
                }}
              >
                Pakistan&apos;s Biggest{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  AI Film Making Competition
                </span>
                . Two days, three stages, one short film — built live with
                generative AI. For{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Content Creators
                </span>
                ,{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Film Makers
                </span>
                ,{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  AI Content Creators
                </span>
                ,{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Storytellers
                </span>
                ,{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Screenwriters
                </span>{" "}
                — and every creative mind ready to make.
              </p>

              <div
                className="animate-fade-up"
                style={{ animationDelay: "0.22s" }}
              >
                <div className="prize-pill prize-pill-xl inline-flex justify-center items-center text-center">
                  <span className="dot" aria-hidden />
                  <span className="amount">~$5,000</span>
                  <span className="label">Prize Pool</span>
                </div>
              </div>

              <div
                className="animate-fade-up"
                style={{ animationDelay: "0.26s" }}
              >
                <a
                  href={applyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Apply Now
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className="meta-row animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <span>Invite-Only</span>
                <span className="sep" aria-hidden />
                <span>Two Days</span>
                <span className="sep" aria-hidden />
                <span>Three Stages</span>
                <span className="sep" aria-hidden />
                <span>Limited Slots . 150 Seats</span>
              </div>
            </div>

            {/* Right strip: countdown sits inside a soft glass panel so it
                reads as a deliberate card, not a floating cluster. */}
            <div className="hero-countdown-col flex flex-col min-w-0 w-full lg:min-w-[19rem] xl:min-w-[20rem] lg:max-w-[22rem] lg:h-full lg:self-stretch">
              <div className="glass-soft flex flex-1 flex-col items-center justify-center w-full px-6 py-7 lg:py-10 min-h-[180px]">
                <Countdown centered stableWidth />
              </div>
              <div className="w-full shrink-0 flex justify-end pt-5 lg:pt-6">
                <Link
                  href="/details"
                  className="font-mono text-[0.78rem] uppercase tracking-[0.14em] inline-flex items-center gap-2 hover:gap-3 transition-all themed-ink-muted hover:text-[var(--accent)] animate-fade-up text-right whitespace-nowrap"
                  style={{ animationDelay: "0.38s" }}
                >
                  Read the full plan
                  <IconArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden>
          <span className="label">Scroll</span>
          <span className="track" />
        </div>
      </section>

      {/* MARQUEE TICKER ─────────────────────────────── */}
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="marquee-group">
              <span className="accent">ImagineArt presents</span>
              <span className="star" />
              <em>AI Playground</em>
              <span className="star" />
              <span>Pakistan&apos;s Biggest AI Film Making Competition</span>
              <span className="star" />
              <em>6 June 2026</em>
              <span className="star" />
              <span>Two Days · Three Stages · Six Spaces</span>
              <span className="star" />
              <span className="accent">~$5,000 Prize Pool</span>
              <span className="star" />
              <span>Invite-Only</span>
              <span className="star" />
              <em>Apply Now</em>
              <span className="star" />
            </div>
          ))}
        </div>
      </div>

      {/* BELIEF / PHILOSOPHY ───────────────────────── */}
      <section className="px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <div className="section-head mb-6">
                  <span className="section-index">
                    <span className="num">01</span>
                    <span className="slash">/</span>
                    <span>04</span>
                  </span>
                  <span className="label-eyebrow">The Philosophy</span>
                </div>
                <h2
                  className="title-display mt-2 descender-safe"
                  style={{
                    fontSize: "clamp(2.1rem, 4.25vw, 3.65rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.005em",
                  }}
                >
                  AI doesn&apos;t replace people.
                  <br />
                  <em>It replaces outdated ways of working.</em>
                </h2>
              </div>
              <div className="flex flex-col gap-4" style={{ color: "var(--ink-muted)" }}>
                <p>
                  There&apos;s a conversation happening in every studio, agency, and
                  creative bedroom in Pakistan right now. You know the one.{" "}
                  <strong>Is AI coming for my job?</strong>
                </p>
                <p>
                  We have the data to answer it. At ImagineArt, we&apos;ve watched
                  millions of creators work, from individual artists to global
                  enterprises. AI does not replace creative people. It replaces the
                  slow, repetitive, limiting parts of the process. It clears the path
                  so the human can do more of what only they can do.
                </p>
                <em className="pull-quote not-italic mt-4">
                  Most people aren&apos;t afraid of AI. They&apos;re afraid of being
                  left behind. That&apos;s human. That&apos;s okay.
                </em>
                <p className="mt-2">
                  You can resist evolution and fall behind, or embrace it and grow.
                  This event is for the ones who are ready to grow.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-divider mx-6 sm:mx-12" />

      {/* STAGES PREVIEW ────────────────────────────── */}
      <section className="px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="flex items-start justify-between gap-6 flex-wrap mb-10">
              <div>
                <div className="section-head mb-6">
                  <span className="section-index">
                    <span className="num">02</span>
                    <span className="slash">/</span>
                    <span>04</span>
                  </span>
                  <span className="label-eyebrow">The Structure</span>
                </div>
                <h2
                  className="title-display mt-2 descender-safe"
                  style={{
                    fontSize: "clamp(2.1rem, 4.25vw, 3.65rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.005em",
                  }}
                >
                  Two days. Three stages.
                  <br />
                  <em
                    className="text-outline accent"
                    style={{ WebkitTextStrokeWidth: "0.028em" }}
                  >
                    One short film.
                  </em>
                </h2>
              </div>
              <div className="prize-pill mt-2">
                <span className="dot" aria-hidden />
                <span className="amount">~$5,000</span>
                <span className="label">Prize Pool</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Glass ledger that holds all three stages — replaces the bare
              hairline-divided rows with a single deliberate container. */}
          <div className="stages-shell">
            {stages.map((t, i) => (
              <ScrollReveal key={t.num} delay={i * 0.05}>
                <div className="stage-row">
                  <div
                    className="stage-index"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p
                      className="font-mono uppercase mb-2"
                      style={{
                        color: "var(--accent)",
                        letterSpacing: "0.22em",
                        fontSize: "0.66rem",
                      }}
                    >
                      Stage {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className="font-display descender-safe uppercase"
                      style={{
                        fontWeight: 400,
                        fontSize: "clamp(1.55rem, 2.8vw, 2.2rem)",
                        lineHeight: 1,
                        letterSpacing: "0.01em",
                        color: "var(--ink)",
                        marginBottom: "0.7rem",
                      }}
                    >
                      {t.title}
                    </h3>
                    <p
                      className="leading-[1.65]"
                      style={{
                        color: "var(--ink-muted)",
                        maxWidth: "640px",
                        fontSize: "0.94rem",
                      }}
                    >
                      {t.desc}
                    </p>
                    <div className="flex gap-2 flex-wrap mt-5">
                      {t.pills.map((p) => (
                        <span key={p} className="meta-tag">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <em className="pull-quote not-italic mt-10">
              Not everyone makes it through. The right people do.
            </em>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-divider mx-6 sm:mx-12" />

      {/* SEGMENTS ──────────────────────────────────── */}
      <section className="px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="section-index">
                <span className="num">03</span>
                <span className="slash">/</span>
                <span>04</span>
              </span>
              <span className="label-eyebrow">What happens inside</span>
            </div>
            <h2
              className="title-display mt-2 mb-12 descender-safe"
              style={{
                fontSize: "clamp(2.1rem, 4.25vw, 3.65rem)",
                lineHeight: 1,
                letterSpacing: "-0.005em",
              }}
            >
              Six spaces.
              <br />
              <em>One energy.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="segment-grid">
              {segments.map((s) => (
                <div key={s.name} className="segment-card">
                  <span
                    className="font-mono uppercase block"
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.22em",
                      color: "var(--accent)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {s.tag}
                  </span>
                  <div
                    className="segment-name font-display descender-safe uppercase"
                    style={{
                      fontSize: "1.85rem",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "0.01em",
                      color: "var(--ink)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    {s.name}
                  </div>
                  <p
                    className="leading-[1.6]"
                    style={{
                      color: "var(--ink-muted)",
                      maxWidth: "none",
                      fontSize: "0.92rem",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-divider mx-6 sm:mx-12" />

      {/* CTA ──────────────────────────────────────── */}
      <section
        className="cta-glow relative px-6 sm:px-12 py-28 overflow-hidden"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[960px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="cta-shell text-center">
              <div className="section-head mb-6 items-center mx-auto" style={{ alignItems: "center" }}>
                <span className="section-index" style={{ justifyContent: "center" }}>
                  <span className="num">04</span>
                  <span className="slash">/</span>
                  <span>04</span>
                </span>
                <span className="label-eyebrow justify-center">
                  The room is small. The bar is high.
                </span>
              </div>
              <h2
                className="title-display mt-2 mb-6 descender-safe"
                style={{
                  fontSize: "clamp(2.1rem, 4.25vw, 3.65rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.005em",
                }}
              >
                Ready?
                <br />
                <em
                  className="text-outline accent"
                  style={{ WebkitTextStrokeWidth: "0.026em" }}
                >
                  Tell us who you are.
                </em>
              </h2>
              <p
                className="mx-auto mb-8 leading-[1.65]"
                style={{
                  color: "var(--ink-muted)",
                  maxWidth: "560px",
                  fontSize: "0.98rem",
                }}
              >
                Every application is reviewed. Shortlisted creators receive a personal invite. Pakistan&apos;s Biggest AI Film Making Competition — only{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>150 seats</span>{" "}
                in the room, and approx{" "}
                <span className="text-gradient-gold font-bold">$5,000</span>&nbsp;in prizes for the top films. Be honest. That&apos;s the only rule.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href={applyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Apply to AI Playground
                  <IconArrowRight className="w-4 h-4" />
                </a>
                <Link href="/details" className="btn-ghost">
                  Read more
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
