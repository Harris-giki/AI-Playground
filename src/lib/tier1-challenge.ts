/** Tier 1 challenge copy — single source of truth for /tier-1-challenge */

export const tier1SubmissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm26HJRepvofvq0vz4naO87BXtADGkT0GuIyLyuqdR9WIZlQ/viewform";

/** Challenge window once the timer starts (display only until then). */
export const tier1ChallengeDurationHours = 4;

export type Tier1Guideline = {
  id: string;
  title: string;
  desc: string;
  highlight?: string;
  tag?: string;
  recommended?: boolean;
};

export const tier1Challenge = {
  title: "One Prompt Film",
  subtitle: "Introduce yourself as a superhero. One prompt. One film.",
  duration: "20–30 seconds",
  prompt: {
    label: "The Prompt",
    heading: "One prompt film",
    paragraphs: [
      "Born human, I always felt there lived a superhero in me. It wasn't until the age of generative AI that I could finally portray myself as one.",
      "In this short film, I'm introducing myself as a superhero. It might not be a typical \"hello, this is [insert name]\" video, but by the end, you'll have a complete sense of who I am, superpowers and all. Fair warning: my superpowers may not always be flashy, but they are superpowers nonetheless. You'll see.",
    ],
  },
  guidelines: [
    {
      id: "brief",
      title: "Stay on brief",
      desc: "Stick to the prompt as closely as possible. Your film should answer the brief — not drift into something else entirely.",
    },
    {
      id: "duration",
      title: "Run time",
      desc: "The film should be between 20 and 30 seconds long.",
      highlight: "20–30 sec",
    },
    {
      id: "film-studio",
      title: "Film Studio",
      desc: "We recommend using Film Studio to make your film. Note that Film Studio runs on Seedance 2.0 — a powerful but credit-heavy model.",
      tag: "Seedance 2.0",
      recommended: true,
    },
    {
      id: "kling",
      title: "Need more takes?",
      desc: "If you need multiple generations, step out of Film Studio and use the conventional flow with a more credit-efficient model. We recommend Kling 3.0.",
      tag: "Kling 3.0",
    },
  ] satisfies Tier1Guideline[],
} as const;
