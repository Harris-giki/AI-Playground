import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  IconCalendar,
  IconMapPin,
  IconClock,
  IconArrowRight,
} from "@/components/icons";
import { applyFormUrl, eventDateLabel } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Event · AI Playground · ImagineArt",
  description:
    "The two-day schedule and selection criteria for AI Playground, Pakistan's Biggest AI Film Making Competition. Approx $5,000 prize pool. Limited to 150 seats.",
};

const qualities = [
  {
    title: "Storytelling instinct",
    desc: "The ability to build a compelling narrative, fast.",
  },
  {
    title: "Creative initiative",
    desc: "You don't wait for permission to make something.",
  },
  {
    title: "Adaptability",
    desc: "Comfort with ambiguity, new tools, and thinking on your feet.",
  },
  {
    title: "Genuine curiosity",
    desc: "About where creativity is going, and the courage to meet it.",
  },
];

const dayOne = [
  { title: "Arrival", desc: "Doors open. Get your badge. Find your seat." },
  {
    title: "Orientation + Introduction",
    desc: "Why we're here. What we're doing. Who's in the room.",
  },
  {
    title: "Future of Design & Filmmaking",
    desc: "A talk and live demo of ImagineArt. What the platform can do, and how to use it.",
  },
  {
    title: "Networking + Food",
    desc: "Eat. Meet. Find the people you want to work with.",
  },
  {
    title: "Credits Assigned · Bingo",
    desc: "Credits land in your space. Bingo loosens the room.",
  },
  {
    title: "Challenge Brief, Stage 1 Begins",
    desc: "20,000 credits. Premium models. 50 seconds to 1 minute. Build anything.",
  },
  {
    title: "Stage 1 Submission · Assessment",
    desc: "Submissions assessed. Shortlist announced.",
  },
  {
    title: "Team Formation · Stage 2 Begins",
    desc: "Shortlisted creators form teams of exactly 5. Story and script work begins.",
  },
  {
    title: "Stage 2 Submission",
    desc: "Scripts in. Day One closes.",
  },
];

const dayTwo = [
  {
    title: "Shortlisted Teams Arrive",
    desc: "Only the Stage 2 teams. Smaller room, sharper energy.",
  },
  {
    title: "Orientation + Demo",
    desc: "A quick recap and a deeper demo of the production toolset.",
  },
  {
    title: "Stage 3: Asset Generation",
    desc: "Three hours. Build everything you need to make the film exist.",
  },
  {
    title: "Workshops (Parallel)",
    desc: "Hands-on sessions for registered participants alongside the main jam.",
  },
  {
    title: "Stage 3: Post Production",
    desc: "Three hours. Edit, sound, polish.",
  },
  {
    title: "Presentations",
    desc: "Teams present their films to the room.",
  },
  {
    title: "Awards",
    desc: "Recognition for the work. Approx $5,000 in prizes for the top films.",
  },
  {
    title: "Keynote",
    desc: "We close on a note that matters. Where this is all going.",
  },
];

export default function Details() {
  return (
    <>
      {/* PAGE HERO ─────────────────────────────────── */}
      <section className="relative pt-[180px] pb-16 px-6 sm:px-12 overflow-hidden hero-rule">
        <div className="hero-grain" aria-hidden />
        <div
          className="absolute w-[460px] h-[460px] rounded-full blur-[140px] opacity-15 animate-float top-[-200px] left-1/2 -translate-x-1/2"
          style={{ background: "var(--accent-dim)" }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <span className="label-eyebrow mb-6">The Event</span>
          <h1
            className="title-display mt-6 mb-8 descender-safe"
            style={{
              fontSize: "clamp(2.75rem, 5.8vw, 4.75rem)",
              lineHeight: 1,
              letterSpacing: "-0.005em",
              maxWidth: "1000px",
            }}
          >
            Two days, three stages,
            <br />
            <em
              className="text-outline accent"
              style={{ WebkitTextStrokeWidth: "0.024em" }}
            >
              one short film.
            </em>
          </h1>
          <p
            className="mb-5"
            style={{
              fontSize: "0.98rem",
              color: "var(--ink-muted)",
              maxWidth: "660px",
              lineHeight: 1.6,
            }}
          >
            AI Playground is ImagineArt&apos;s curated, invite-only{" "}
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>
              AI Film Making Competition
            </span>
            . Pakistan&apos;s Biggest. A hands-on, two-day experience built for the
            people who already make things.
          </p>
          <p
            className="mb-8"
            style={{
              fontSize: "0.98rem",
              color: "var(--ink-muted)",
              maxWidth: "660px",
              lineHeight: 1.6,
            }}
          >
            For{" "}
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
            — and every creative mind ready to meet generative AI as a
            collaborator, not a threat. Limited to{" "}
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>
              150 seats
            </span>
            .
          </p>

          <div className="flex items-center gap-3 flex-wrap mb-6">
            <div className="prize-pill">
              <span className="dot" aria-hidden />
              <span className="amount">~$5,000</span>
              <span className="label">Prize Pool</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
            <div className="flex items-center gap-2.5">
              <IconCalendar
                className="w-[18px] h-[18px]"
                style={{ color: "var(--accent)" }}
              />
              <span
                className="font-mono uppercase"
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  color: "var(--ink-muted)",
                }}
              >
                {eventDateLabel}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IconClock
                className="w-[18px] h-[18px]"
                style={{ color: "var(--accent)" }}
              />
              <span
                className="font-mono uppercase"
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  color: "var(--ink-muted)",
                }}
              >
                2 Days · 3 Stages
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IconMapPin
                className="w-[18px] h-[18px]"
                style={{ color: "var(--accent)" }}
              />
              <span
                className="font-mono uppercase"
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  color: "var(--ink-muted)",
                }}
              >
                Pakistan · Invite-Only
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-divider mx-6 sm:mx-12" />

      {/* SCHEDULE ─────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="label-eyebrow mb-6">The Flow</span>
            <h2
              className="title-display mt-6 mb-4 descender-safe"
              style={{
                fontSize: "clamp(2.1rem, 4.25vw, 3.65rem)",
                lineHeight: 1,
                letterSpacing: "-0.005em",
              }}
            >
              Two days,
              <br />
              <em>moving fast.</em>
            </h2>
            <p
              className="mb-14 leading-[1.65]"
              style={{
                color: "var(--ink-muted)",
                maxWidth: "640px",
                fontSize: "0.98rem",
              }}
            >
              Day One pulls the room together and runs Stage 1 and Stage 2. Day Two
              is for the shortlisted teams making the films, presenting, and taking
              home a share of the approx $5,000 prize pool.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <ScrollReveal>
              <div
                className="rounded-sm p-8 h-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="font-mono uppercase mb-3"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    color: "var(--accent)",
                  }}
                >
                  Day 01
                </p>
                <h3
                  className="font-display mb-8 descender-safe uppercase"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    lineHeight: 1,
                    letterSpacing: "0.01em",
                    color: "var(--ink)",
                  }}
                >
                  Arrival, Stage 1, Stage 2
                </h3>
                <div className="timeline">
                  {dayOne.map((item) => (
                    <div
                      key={item.title}
                      className="timeline-dot relative pl-5 pb-7 last:pb-0"
                    >
                      <p
                        className="font-body mb-1"
                        style={{
                          color: "var(--ink)",
                          fontWeight: 500,
                          fontSize: "0.96rem",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="leading-[1.55]"
                        style={{ color: "var(--ink-muted)", fontSize: "0.88rem" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div
                className="rounded-sm p-8 h-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="font-mono uppercase mb-3"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    color: "var(--accent)",
                  }}
                >
                  Day 02
                </p>
                <h3
                  className="font-display mb-8 descender-safe uppercase"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    lineHeight: 1,
                    letterSpacing: "0.01em",
                    color: "var(--ink)",
                  }}
                >
                  Stage 3, Presentations, Keynote
                </h3>
                <div className="timeline">
                  {dayTwo.map((item) => (
                    <div
                      key={item.title}
                      className="timeline-dot relative pl-5 pb-7 last:pb-0"
                    >
                      <p
                        className="font-body mb-1"
                        style={{
                          color: "var(--ink)",
                          fontWeight: 500,
                          fontSize: "0.96rem",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="leading-[1.55]"
                        style={{ color: "var(--ink-muted)", fontSize: "0.88rem" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="h-divider mx-6 sm:mx-12" />

      {/* WHO WE WANT ─────────────────────────────── */}
      <section className="px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="label-eyebrow mb-6">Who we want in the room</span>
            <h2
              className="title-display mt-6 mb-6 descender-safe"
              style={{
                fontSize: "clamp(2.1rem, 4.25vw, 3.65rem)",
                lineHeight: 1,
                letterSpacing: "-0.005em",
              }}
            >
              The room is curated.
              <br />
              <em>Earn your seat.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12"
              style={{ color: "var(--ink-muted)" }}
            >
              <p>
                We&apos;re not looking for AI experts. We&apos;re looking for
                storytellers. People who move fast, draw inspiration from anywhere,
                and make something real when the pressure is on. Only{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  150 seats
                </span>{" "}
                — the room stays small on purpose.
              </p>
              <p>
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Content Creators
                </span>
                .{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Film Makers
                </span>
                .{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  AI Content Creators
                </span>
                .{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Storytellers
                </span>
                .{" "}
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Screenwriters
                </span>
                . And every creative mind ready to use generative AI as a
                collaborator, not a threat.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="quality-grid">
              {qualities.map((q) => (
                <div key={q.title} className="quality-item">
                  <p
                    className="font-display uppercase"
                    style={{
                      fontWeight: 400,
                      color: "var(--ink)",
                      fontSize: "1.35rem",
                      lineHeight: 1,
                      letterSpacing: "0.01em",
                      marginBottom: "0.65rem",
                    }}
                  >
                    {q.title}
                  </p>
                  <p
                    className="leading-[1.6]"
                    style={{
                      color: "var(--ink-muted)",
                      fontSize: "0.92rem",
                    }}
                  >
                    {q.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <em className="pull-quote not-italic mt-10">
              You don&apos;t need to be an AI expert. You need to be a creator who is
              ready to evolve.
            </em>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-divider mx-6 sm:mx-12" />

      {/* CTA ─────────────────────────────────────── */}
      <section
        className="cta-glow relative px-6 sm:px-12 py-28 text-center overflow-hidden"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[900px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="label-eyebrow justify-center mb-6">
              Applications open
            </span>
            <h2
              className="title-display mt-6 mb-6 descender-safe"
              style={{
                fontSize: "clamp(2.1rem, 4.25vw, 3.65rem)",
                lineHeight: 1,
                letterSpacing: "-0.005em",
              }}
            >
              Not everyone gets in.
              <br />
              <em
                className="text-outline accent"
                style={{ WebkitTextStrokeWidth: "0.024em" }}
              >
                The right people do.
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
              Every submission is reviewed personally. Approx{" "}
              <span className="text-gradient-gold font-bold">$5,000</span>&nbsp;in prizes for the top films, and only{" "}
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                150 seats
              </span>{" "}
              in the room. If you&apos;re the right fit, you&apos;ll hear from us.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
