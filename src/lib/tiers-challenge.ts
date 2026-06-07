/** Tier 1 challenge copy — single source of truth for /tier-1 */

export const tiersSubmissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm26HJRepvofvq0vz4naO87BXtADGkT0GuIyLyuqdR9WIZlQ/viewform";

export type TiersGuideline = {
  id: string;
  title: string;
  desc: string;
  highlight?: string;
  tag?: string;
  recommended?: boolean;
};

export const tiersChallenge = {
  heroEyebrow: "Tier 1",
  title: "Script to Storyboard",
  subtitle:
    "Day 1 in two acts — write your full script and story, then build the visual storyboard and concept. Everything is reviewed together; shortlisted participants are announced that evening.",
  script: {
    label: "Tier 1",
    title: "Script Polish",
    heading: "Spec ad or film — your call",
    paragraphs: [
      "Pick one track: a spec ad for a brand or product you invent (or reimagine), or a film concept — any genre, mood, or story that excites you.",
      "Write your full script and story first — the clearest version of what you want to make on screen. Then carry it through to your storyboard in the same tier.",
    ],
    tracks: ["Spec ad", "Film"],
  },
  storyboard: {
    label: "Tier 1",
    title: "Concept & Storyboard",
    heading: "Visualize the script",
    paragraphs: [
      "Take your script and build a visual storyboard — concept images that map key frames, tone, and direction.",
      "Add a brief pitch that ties the visuals to your story. Script and storyboard are reviewed together as one Tier 1 package.",
    ],
  },
  guidelines: [
    {
      id: "choose",
      title: "Pick your track",
      desc: "Spec ad or film — choose one and carry it through script and storyboard.",
      highlight: "Spec ad · Film",
    },
    {
      id: "script",
      title: "Script & story",
      desc: "Submit your full script and story — not just a logline. Nail the narrative before you visualize it.",
      highlight: "Full script",
    },
    {
      id: "storyboard",
      title: "Visual storyboard",
      desc: "Use concept images to map key frames and visual direction based on your script.",
      highlight: "Concept images",
    },
    {
      id: "workflows",
      title: "Workflows (Flow)",
      desc: "We recommend using ImagineArt Flow for storyboard frames and concept art. You can also use other ImagineArt features — like Film Studio — if that fits your process better.",
      tag: "Flow",
      recommended: true,
    },
  ] satisfies TiersGuideline[],
  submission: {
    title: "Submit your script & storyboard",
    intro:
      "One submission at the end of Day 1 — include everything below. Your full Tier 1 package is reviewed together.",
    deliverables: [
      "Your full script and story",
      "Visual storyboard with concept images",
      "Brief concept pitch text",
    ],
    portalLabel: "Tier 1 portal",
  },
} as const;
