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
  title: "Concept & Storyboard",
  subtitle:
    "Choose a spec ad or a film — then pitch it with concept images, a storyboard, and a brief write-up. No video required yet.",
  prompt: {
    label: "The Brief",
    heading: "Spec ad or film — your call",
    paragraphs: [
      "For Tier 1, pick one track: a spec ad for a brand or product you invent (or reimagine), or a film concept — any genre, mood, or story that excites you.",
      "Use concept images to build a visual storyboard and write a short pitch that explains what it is, who it's for, and why it works. Show us the idea before anything gets produced.",
    ],
  },
  guidelines: [
    {
      id: "choose",
      title: "Pick your track",
      desc: "Spec ad or film — choose one and commit. Both paths use the same deliverable: concept images, a storyboard, and brief pitch text.",
      highlight: "Spec ad · Film",
    },
    {
      id: "explore",
      title: "Explore freely",
      desc: "No fixed theme. For a spec ad, nail the brand world and message. For a film, nail the story and visual tone.",
    },
    {
      id: "storyboard",
      title: "Storyboard it",
      desc: "Use concept images to map key frames and visual direction — whether you're selling a product or telling a story.",
      highlight: "Concept images",
    },
    {
      id: "pitch",
      title: "Pitch it",
      desc: "Include brief written text that explains the concept — what's the idea, what's the feeling, and why should we care?",
    },
    {
      id: "workflows",
      title: "Workflows (Flow)",
      desc: "We recommend using ImagineArt Flow to build your concept art and storyboard frames. You can also use other ImagineArt features — like Film Studio — if that fits your process better.",
      tag: "Flow",
      recommended: true,
    },
  ] satisfies Tier1Guideline[],
} as const;
