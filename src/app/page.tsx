import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroBanner } from "@/components/HeroBanner";
import { HeroVideoBg } from "@/components/HeroVideoBg";
import { PrizePoolSection } from "@/components/PrizePoolSection";
import { SegmentCard } from "@/components/SegmentCard";
import { IconArrowRight } from "@/components/icons";
import { applyFormUrl, eventDateLabel } from "@/lib/site";

const segments = [
  {
    tag: "Main Jam",
    name: "The Playground",
    hover: "ENTER",
    desc: "You receive a prompt. You build a world. Using ImagineArt, you conceptualise and generate a short film from scratch. Live, under time, with a team you just met.",
  },
  {
    tag: "Learn",
    name: "The Workshop",
    hover: "LEARN",
    desc: "Hands-on sessions running parallel for registered creators. Go deep on tools, techniques, and process with people who live inside this space.",
  },
  {
    tag: "Coffee & Social",
    name: "Korner",
    hover: "MEET",
    desc: "Coffee. Conversation. No agenda. The best ideas at any creative event happen here, between the sessions, in the in-between.",
  },
  {
    tag: "Photobooth",
    name: "Fotopia",
    hover: "SHOOT",
    desc: "A photobooth that doesn't behave. AI-powered, unpredictable, and worth the queue. Something to remember the day by.",
  },
  {
    tag: "Analogue",
    name: "Leave a piece of you behind",
    hover: "MARK",
    desc: "An empty canvas. Real paint. No prompts. Just you. In a room full of machines, this is the most human thing we do.",
  },
  {
    tag: "Rec. Activities",
    name: "Play",
    hover: "PLAY",
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
    pills: ["Day 2", "75k to 100k Credits", "Judge Presentation", "$5,000 Prize Pool"],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — sized to fit on one screen ───────────── */}
      <section
        data-scroll-section
        className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 sm:px-12 pt-24 pb-20 hero-rule"
      >
        <HeroVideoBg />
        <div className="hero-grain" aria-hidden />
        <div className="hero-dotgrid" aria-hidden />

        {/* Soft ambient glow — kept low so sprint.mp4 reads through */}
        <div
          className="absolute w-[520px] h-[520px] rounded-full blur-[140px] opacity-15 animate-float top-[-180px] right-[-100px] z-[1]"
          style={{ background: "var(--accent-dim)" }}
        />
        <div
          className="absolute w-[460px] h-[460px] rounded-full blur-[130px] opacity-10 animate-float bottom-[-180px] left-[-60px] z-[1]"
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
          <div className="hero-content-wrap">
            <p className="label-eyebrow mb-5 sm:mb-6 animate-fade-up">
              ImagineArt presents · {eventDateLabel}
            </p>

            <div className="hero-split grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 xl:gap-12 lg:items-stretch">
              <div className="hero-main-panel flex flex-col gap-3 sm:gap-3.5 min-w-0">
                <HeroBanner />

                <p
                  className="hero-body-copy animate-fade-up max-w-[580px]"
                  style={{ animationDelay: "0.18s" }}
                >
                  Pakistan&apos;s Biggest{" "}
                  <span className="hero-accent">AI Film Making Competition</span>
                  . Two days, three stages, one short film, built live with
                  generative AI. For{" "}
                  <span className="hero-accent">Content Creators</span>,{" "}
                  <span className="hero-accent">Film Makers</span>,{" "}
                  <span className="hero-accent">AI Content Creators</span>,{" "}
                  <span className="hero-accent">Storytellers</span>,{" "}
                  <span className="hero-accent">Screenwriters</span>, and every
                  creative mind ready to make.
                </p>

                <div
                  className="animate-fade-up flex flex-wrap items-center gap-3"
                  style={{ animationDelay: "0.22s" }}
                >
                  <div className="prize-pill prize-pill-xl prize-pill-hero inline-flex items-center">
                    <span className="dot" aria-hidden />
                    <span className="amount">$5,000</span>
                    <span className="label">Prize Pool</span>
                  </div>
                  <a
                    href={applyFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover="APPLY"
                    className="btn-primary"
                  >
                    Apply Now
                    <IconArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div
                  className="meta-row animate-fade-up"
                  style={{ animationDelay: "0.26s" }}
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

              <div className="hero-countdown-col flex flex-col min-w-0 w-full lg:w-auto lg:min-w-[17rem] xl:min-w-[19rem] lg:max-w-[22rem] lg:self-center">
                <div className="flex flex-col items-center justify-center w-full">
                  <Countdown centered stableWidth />
                </div>
                <div className="w-full shrink-0 flex justify-end pt-4 lg:pt-5">
                  <Link
                    href="/details"
                    data-hover="READ"
                    className="font-mono text-[0.72rem] uppercase tracking-[0.14em] inline-flex items-center gap-2 hover:gap-3 transition-all themed-ink-muted hover:text-[var(--accent)] animate-fade-up text-right whitespace-nowrap"
                    style={{ animationDelay: "0.38s" }}
                  >
                    Read the full plan
                    <IconArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PrizePoolSection />

      {/* MARQUEE TICKER ─────────────────────────────── */}
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="marquee-group">
              <span className="accent">ImagineArt presents</span>
              <span className="star" />
              <em>AI Playground</em>
              <span className="star" />
              <span className="out">Film Making</span>
              <span className="star" />
              <em>6 June 2026</em>
              <span className="star" />
              <span>Two Days · Three Stages</span>
              <span className="star" />
              <span className="accent">$5,000 Prize Pool</span>
              <span className="star" />
              <span className="out">Invite-Only</span>
              <span className="star" />
              <em>Apply Now</em>
              <span className="star" />
            </div>
          ))}
        </div>
      </div>

      {/* BELIEF / PHILOSOPHY ───────────────────────── */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="philosophy-block grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <div className="section-head mb-6">
                  <span className="section-index">
                    <span className="num">01</span>
                    <span className="slash">/</span>
                    <span>04</span>
                  </span>
                  <span className="label-eyebrow">The Philosophy</span>
                </div>
                <h2 className="title-display descender-safe">
                  AI doesn&apos;t replace people.
                  <br />
                  <em>It replaces outdated ways of working.</em>
                </h2>
              </div>
              <div className="prose-body flex flex-col gap-4 max-w-[540px]">
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

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* STAGES PREVIEW ────────────────────────────── */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
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
                <h2 className="title-display descender-safe">
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
                <span className="amount">$5,000</span>
                <span className="label">Prize Pool</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Glass ledger that holds all three stages — replaces the bare
              hairline-divided rows with a single deliberate container. */}
          <div className="stages-shell">
            {stages.map((t, i) => (
              <ScrollReveal key={t.num} delay={i * 0.05}>
                <div className="stage-row" data-hover={`STAGE ${String(i + 1).padStart(2, "0")}`}>
                  <div
                    className="stage-index"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="label-stage mb-2">
                      Stage {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="title-lg descender-safe mb-[0.7rem]">
                      {t.title}
                    </h3>
                    <p className="prose-body-sm max-w-[540px] mb-[1.8rem]">
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

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* SEGMENTS ──────────────────────────────────── */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
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
            <h2 className="title-display mb-12 descender-safe">
              Six spaces.
              <br />
              <em>One energy.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="segment-grid">
              {segments.map((s, i) => (
                <SegmentCard
                  key={s.name}
                  tag={s.tag}
                  name={s.name}
                  desc={s.desc}
                  hover={s.hover}
                  index={i}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* CTA ──────────────────────────────────────── */}
      <section
        data-scroll-section
        className="site-section cta-glow relative px-6 sm:px-12 py-28 overflow-hidden"
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
              <h2 className="title-display mb-6 descender-safe">
                Ready?
                <br />
                <em
                  className="text-outline accent"
                  style={{ WebkitTextStrokeWidth: "0.026em" }}
                >
                  Tell us who you are.
                </em>
              </h2>
              <p className="prose-cta mx-auto mb-8 max-w-[660px]">
                Every application is reviewed. Shortlisted creators receive a personal invite. Pakistan&apos;s Biggest AI Film Making Competition — only{" "}
                <span className="text-accent">150 seats</span>{" "}
                in the room, and{" "}
                <span className="text-gradient-gold font-bold">$5,000</span>&nbsp;in prizes for the top films. Be honest. That&apos;s the only rule.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href={applyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover="APPLY"
                  className="btn-primary"
                >
                  Apply to AI Playground
                  <IconArrowRight className="w-4 h-4" />
                </a>
                <Link href="/details" data-hover="READ" className="btn-ghost">
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
