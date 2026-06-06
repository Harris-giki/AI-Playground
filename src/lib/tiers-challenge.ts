/** Tier 1 & 2 challenge copy — single source of truth for /tier-1-2 */

export const tiersSubmissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm26HJRepvofvq0vz4naO87BXtADGkT0GuIyLyuqdR9WIZlQ/viewform";

/** Challenge window once the timer starts (display only until then). */
export const tiersChallengeDurationHours = 4;

export type TiersGuideline = {
  id: string;
  title: string;
  desc: string;
  highlight?: string;
  tag?: string;
  recommended?: boolean;
};

export const tiersChallenge = {
  heroEyebrow: "Tier 1 & 2",
  title: "Concept to Script",
  subtitle:
    "Day 1 in two acts — build your visual storyboard and concept in Tier 1, then refine it into a full script and story in Tier 2. Both are reviewed together; shortlisted participants are announced that evening.",
  tier1: {
    label: "Tier 1",
    title: "Concept & Storyboard",
    heading: "Spec ad or film — your call",
    paragraphs: [
      "Pick one track: a spec ad for a brand or product you invent (or reimagine), or a film concept — any genre, mood, or story that excites you.",
      "Use concept images to build a visual storyboard and write a short pitch that explains what it is, who it's for, and why it works.",
    ],
    tracks: ["Spec ad", "Film"],
  },
  tier2: {
    label: "Tier 2",
    title: "Script Polish",
    heading: "From idea to full script",
    paragraphs: [
      "Take your Tier 1 concept and develop it into a polished script and complete story — the clearest version of what you want to make on screen.",
      "This is not a separate evaluation. Tier 1 and Tier 2 submissions are reviewed together as one package.",
    ],
  },
  guidelines: [
    {
      id: "choose",
      title: "Pick your track",
      desc: "Spec ad or film — choose one in Tier 1 and carry it through Tier 2.",
      highlight: "Spec ad · Film",
    },
    {
      id: "storyboard",
      title: "Visual storyboard",
      desc: "Concept images that map key frames, tone, and direction — your visual pitch before production.",
      highlight: "Concept images",
    },
    {
      id: "script",
      title: "Script & story",
      desc: "In Tier 2, submit your full script and story — not just a logline. Show us the narrative you intend to film.",
      highlight: "Full script",
    },
    {
      id: "workflows",
      title: "Workflows (Flow)",
      desc: "We recommend using ImagineArt Flow for concept art and storyboard frames. You can also use other ImagineArt features — like Film Studio — if that fits your process better.",
      tag: "Flow",
      recommended: true,
    },
  ] satisfies TiersGuideline[],
  submission: {
    title: "Submit your concept & script",
    intro:
      "One submission at the end of Day 1 — include everything below. Tier 1 and Tier 2 are reviewed together.",
    deliverables: [
      "Visual storyboard with concept images",
      "Your full script and story",
      "Brief concept pitch text",
    ],
    portalLabel: "Tier 1 & 2 portal",
  },
} as const;
