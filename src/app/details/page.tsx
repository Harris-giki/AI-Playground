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
    "The two-day schedule and selection criteria for AI Playground, Pakistan's Biggest AI Film Making Competition. $5,000 prize pool. Limited to 150 seats.",
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
    desc: "Recognition for the work. $5,000 in prizes for the top films.",
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
      <section data-scroll-section className="relative pt-28 sm:pt-32 pb-12 sm:pb-14 px-6 sm:px-12 overflow-hidden hero-rule details-hero">
        <div className="details-hero__video" aria-hidden>
          <video
            className="details-hero__video-media"
            src="/brand/sprint.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="details-hero__video-scrim" />
        </div>
        <div className="hero-grain" aria-hidden />
        <div
          className="absolute w-[460px] h-[460px] rounded-full blur-[140px] opacity-15 animate-float top-[-200px] left-1/2 -translate-x-1/2"
          style={{ background: "var(--accent-dim)" }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="section-head mb-6">
            <span className="section-index">
              <span className="num">00</span>
              <span className="slash">/</span>
              <span>03</span>
            </span>
            <span className="label-eyebrow">The Event</span>
          </div>
          <h1 className="title-hero mb-8 descender-safe max-w-[1000px]">
            Two days, three stages,
            <br />
            <em
              className="text-outline accent"
              style={{ WebkitTextStrokeWidth: "0.024em" }}
            >
              one short film.
            </em>
          </h1>
          <p className="prose-body mb-5 max-w-[660px]">
            AI Playground is ImagineArt&apos;s curated, invite-only{" "}
            <span className="text-accent">AI Film Making Competition</span>
            . Pakistan&apos;s Biggest. A hands-on, two-day experience built for the
            people who already make things.
          </p>
          <p className="prose-body mb-8 max-w-[660px]">
            For{" "}
            <span className="text-accent">Content Creators</span>,{" "}
            <span className="text-accent">Film Makers</span>,{" "}
            <span className="text-accent">AI Content Creators</span>,{" "}
            <span className="text-accent">Storytellers</span>,{" "}
            <span className="text-accent">Screenwriters</span>, and every
            creative mind ready to meet generative AI as a collaborator, not a
            threat. Limited to <span className="text-accent">150 seats</span>.
          </p>

          <div className="flex items-center gap-3 flex-wrap mb-6">
            <div className="prize-pill">
              <span className="dot" aria-hidden />
              <span className="amount">$5,000</span>
              <span className="label">Prize Pool</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
            <div className="flex items-center gap-2.5">
              <IconCalendar
                className="w-[18px] h-[18px]"
                style={{ color: "var(--accent)" }}
              />
              <span className="meta-inline">{eventDateLabel}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <IconClock
                className="w-[18px] h-[18px]"
                style={{ color: "var(--accent)" }}
              />
              <span className="meta-inline">2 Days · 3 Stages</span>
            </div>
            <div className="flex items-center gap-2.5">
              <IconMapPin
                className="w-[18px] h-[18px]"
                style={{ color: "var(--accent)" }}
              />
              <span className="meta-inline">Pakistan · Invite-Only</span>
            </div>
          </div>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* SCHEDULE ─────────────────────────────────── */}
      <section
        data-scroll-section
        className="site-section px-6 sm:px-12 py-28"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="section-index">
                <span className="num">01</span>
                <span className="slash">/</span>
                <span>03</span>
              </span>
              <span className="label-eyebrow">The Flow</span>
            </div>
            <h2 className="title-display mb-4 descender-safe">
              Two days,
              <br />
              <em>moving fast.</em>
            </h2>
            <p className="prose-body mb-14 max-w-[640px]">
              Day One pulls the room together and runs Stage 1 and Stage 2. Day Two
              is for the shortlisted teams making the films, presenting, and taking
              home a share of the $5,000 prize pool.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ScrollReveal>
              <div className="day-card">
                <p className="label-day mb-3">Day 01</p>
                <h3 className="title-lg descender-safe mb-8">
                  Arrival, Stage 1, Stage 2
                </h3>
                <div className="timeline">
                  {dayOne.map((item) => (
                    <div
                      key={item.title}
                      className="timeline-dot relative pl-5 pb-7 last:pb-0"
                    >
                      <p className="timeline-title">{item.title}</p>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="day-card">
                <p className="label-day mb-3">Day 02</p>
                <h3 className="title-lg descender-safe mb-8">
                  Stage 3, Presentations, Keynote
                </h3>
                <div className="timeline">
                  {dayTwo.map((item) => (
                    <div
                      key={item.title}
                      className="timeline-dot relative pl-5 pb-7 last:pb-0"
                    >
                      <p className="timeline-title">{item.title}</p>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* WHO WE WANT ─────────────────────────────── */}
      <section data-scroll-section className="site-section px-6 sm:px-12 py-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="section-head mb-6">
              <span className="section-index">
                <span className="num">02</span>
                <span className="slash">/</span>
                <span>03</span>
              </span>
              <span className="label-eyebrow">Who we want in the room</span>
            </div>
            <h2 className="title-display mb-6 descender-safe">
              The room is curated.
              <br />
              <em>Earn your seat.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="prose-body grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <p>
                We&apos;re not looking for AI experts. We&apos;re looking for
                storytellers. People who move fast, draw inspiration from anywhere,
                and make something real when the pressure is on. Only{" "}
                <span className="text-accent">150 seats</span> — the room stays
                small on purpose.
              </p>
              <p>
                <span className="text-accent">Content Creators</span>.{" "}
                <span className="text-accent">Film Makers</span>.{" "}
                <span className="text-accent">AI Content Creators</span>.{" "}
                <span className="text-accent">Storytellers</span>.{" "}
                <span className="text-accent">Screenwriters</span>. And every
                creative mind ready to use generative AI as a collaborator, not a
                threat.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="quality-grid">
              {qualities.map((q) => (
                <div key={q.title} className="quality-item" data-hover={q.title.split(" ")[0].toUpperCase()}>
                  <p className="title-space descender-safe mb-[0.65rem]">
                    {q.title}
                  </p>
                  <p className="prose-body-sm">{q.desc}</p>
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

      <div className="film-divider mx-6 sm:mx-12" aria-hidden />

      {/* CTA ─────────────────────────────────────── */}
      <section
        data-scroll-section
        className="site-section cta-glow relative px-6 sm:px-12 py-28 overflow-hidden"
        style={{ background: "var(--bg-raised)" }}
      >
        <div className="max-w-[960px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="cta-shell text-center">
              <div className="section-head mb-6" style={{ alignItems: "center" }}>
                <span className="section-index">
                  <span className="num">03</span>
                  <span className="slash">/</span>
                  <span>03</span>
                </span>
                <span className="label-eyebrow justify-center">
                  Applications open
                </span>
              </div>
              <h2 className="title-display mb-6 descender-safe">
                Not everyone gets in.
                <br />
                <em
                  className="text-outline accent"
                  style={{ WebkitTextStrokeWidth: "0.024em" }}
                >
                  The right people do.
                </em>
              </h2>
              <p className="prose-cta mx-auto mb-8 max-w-[660px]">
                Every submission is reviewed personally.{" "}
                <span className="text-gradient-gold font-bold">$5,000</span>&nbsp;in
                prizes for the top films, and only{" "}
                <span className="text-accent">150 seats</span> in the room. If
                you&apos;re the right fit, you&apos;ll hear from us.
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
