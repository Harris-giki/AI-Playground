/** Tier 3 challenge copy — single source of truth for /tier-3 */

export const tier3SubmissionFormUrl =
  "https://forms.gle/bM3nj3bSE89sazPT9";

/** Tier 3 sprint window length in hours. */
export const tier3ChallengeDurationHours = 5;

/** When Tier 3 sprint timer started (Asia/Karachi). Update when the window opens. */
export const tier3ChallengeStartISO = "2026-06-07T16:24:00+05:00";

export type Tier3Criterion = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
};

export type Tier3Rule = {
  id: string;
  title: string;
  desc: string;
  type: "do" | "dont";
};

export const tier3Challenge = {
  heroEyebrow: "Tier 3",
  title: "Make the Film",
  subtitle:
    "Shortlisted teams only. Your script is in — now a five-hour sprint. Half the time generating assets, half making the film.",
  direction: "Every story worth telling has more than one hero.",
  brief: {
    heading: "The brief",
    paragraphs: [
      "You are a team of three. Each of you carries something the others don't — a different power, a different wound, a different way of seeing the world.",
      "Your film is about what happens when those three worlds collide.",
      "It doesn't have to be a superhero film. It doesn't have to have capes or powers in the traditional sense. But by the end, the audience should understand completely and without explanation who each of you is, what you bring, and why the three of you together are something none of you could be alone.",
      "The only rules: every member of the team must be represented in the film. The rest is yours.",
    ],
    closing: "Make something only the three of you could make.",
  },
  sprint: {
    label: "Tier 3",
    title: "5-hour sprint",
    heading: "Assets, then assembly",
    paragraphs: [
      "Five hours on the clock. Spend the first half generating assets — shots, frames, and everything you need to build the film from your Tier 2 script.",
      "Spend the second half making the film — assemble, edit, and land a finished 2–3 minute piece.",
    ],
    meta: [
      { label: "Duration", value: "2–3 mins" },
      { label: "Time", value: "5 hours · half assets · half film" },
      { label: "Submission", value: "Film + workflow" },
    ],
  },
  criteria: [
    {
      id: "soul",
      title: "The Soul",
      subtitle: "Storytelling",
      desc: "Emotional impact and narrative clarity — does the story land?",
    },
    {
      id: "cut",
      title: "The Cut",
      subtitle: "Editing",
      desc: "Pacing, rhythm, and assembly — does it hold from first frame to last?",
    },
    {
      id: "craft",
      title: "The Craft",
      subtitle: "Generation",
      desc: "AI generation quality and tool use — is every frame intentional?",
    },
    {
      id: "nerve",
      title: "The Nerve",
      subtitle: "Risk",
      desc: "Creative risk-taking and boldness — did you push past the obvious?",
    },
    {
      id: "voice",
      title: "The Voice",
      subtitle: "Originality",
      desc: "Point of view and distinctiveness — could only your team have made this?",
    },
    {
      id: "prompt",
      title: "The Prompt",
      subtitle: "Brief",
      desc: "Interpretation of the direction — three heroes, three worlds, one collision.",
    },
  ] satisfies Tier3Criterion[],
  rules: [
    {
      id: "credits",
      type: "do",
      title: "Check your credits",
      desc: "Before you generate, hover over the Generate button to see how many credits each run will consume.",
    },
    {
      id: "resolution",
      type: "do",
      title: "Generate in 720p",
      desc: "Export at 720p — not 1080p. It keeps renders fast and credits under control.",
    },
    {
      id: "imagineart",
      type: "dont",
      title: "ImagineArt only",
      desc: "Use only ImagineArt and its workflows. No external tools for generation or assembly.",
    },
  ] satisfies Tier3Rule[],
  submission: {
    title: "What to submit",
    intro:
      "At the end of Tier 3, submit your finished film along with the ImagineArt workflow you used to make it.",
    deliverables: ["Finished film (2–3 mins)", "ImagineArt workflow link or export"],
    portalLabel: "Tier 3 portal",
  },
} as const;
