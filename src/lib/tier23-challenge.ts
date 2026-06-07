/** Tier 2 & 3 challenge copy — single source of truth for /tier-2-3 */

export const tier2SubmissionFormUrl =
  "https://forms.gle/kkFfnLixWbLecVw48";

export type Tier23Criterion = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
};

export type Tier23Rule = {
  id: string;
  title: string;
  desc: string;
  type: "do" | "dont";
};

export const tier23Challenge = {
  heroEyebrow: "Tier 2 & 3",
  title: "Script, Sprint, Film",
  subtitle:
    "Shortlisted teams only. Day 2 in two acts — lock in your trio and write a script from the prompt in Tier 2, then a four-hour production sprint in Tier 3.",
  direction: "Every story worth telling has more than one hero.",
  brief: {
    heading: "The prompt",
    paragraphs: [
      "You are a team of three. Each of you carries something the others don't — a different power, a different wound, a different way of seeing the world.",
      "Your film is about what happens when those three worlds collide.",
      "It doesn't have to be a superhero film. It doesn't have to have capes or powers in the traditional sense. But by the end, the audience should understand completely and without explanation who each of you is, what you bring, and why the three of you together are something none of you could be alone.",
      "The only rules: every member of the team must be represented in the film. The rest is yours.",
    ],
    closing: "Make something only the three of you could make.",
  },
  tier2: {
    label: "Tier 2",
    title: "Teams & Script",
    heading: "Write from the prompt",
    paragraphs: [
      "Make your team of three and write a script based on the prompt above — your story before a single frame gets generated.",
      "Submit it when you're done. Then take a break. Tier 3 is where the sprint begins.",
    ],
    meta: ["Teams of 3", "Script submission", "Take a break"],
  },
  tier3: {
    label: "Tier 3",
    title: "Make the Film",
    heading: "4-hour sprint",
    paragraphs: [
      "Four hours on the clock. Spend the first half generating assets — shots, frames, and everything you need to build the film.",
      "Spend the second half making the film — assemble, edit, and land a finished 2–3 minute piece.",
    ],
    meta: ["4 hours total", "2h assets · 2h film", "2–3 mins"],
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
  ] satisfies Tier23Criterion[],
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
  ] satisfies Tier23Rule[],
  submission: {
    tier2: {
      title: "Submit your script",
      intro: "Submit your team script before Tier 3 begins — scan the QR code or open the form below.",
      deliverables: ["Team script based on the prompt"],
      portalLabel: "Tier 2 portal",
    },
    tier3: {
      title: "Tier 3 submission",
      intro:
        "At the end of the sprint, submit your finished film along with the ImagineArt workflow you used to make it.",
      deliverables: ["Finished film (2–3 mins)", "ImagineArt workflow link or export"],
    },
  },
} as const;
