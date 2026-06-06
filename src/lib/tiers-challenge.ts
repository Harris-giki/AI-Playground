/** Tier 1 & 2 challenge copy — single source of truth for /tier-1-2 */

export const tiersSubmissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm26HJRepvofvq0vz4naO87BXtADGkT0GuIyLyuqdR9WIZlQ/viewform";

/** Challenge window length in hours. */
export const tiersChallengeDurationHours = 4;

/** When Day 1 Tier 1 & 2 timer started (Asia/Karachi). */
export const tiersChallengeStartISO = "2026-06-06T13:17:00+05:00";

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
  title: "Script to Storyboard",
  subtitle:
    "Day 1 in two acts — write your full script and story in Tier 1, then build the visual storyboard and concept in Tier 2. Both are reviewed together; shortlisted participants are announced that evening.",
  tier1: {
    label: "Tier 1",
    title: "Script Polish",
    heading: "Spec ad or film — your call",
    paragraphs: [
      "Pick one track: a spec ad for a brand or product you invent (or reimagine), or a film concept — any genre, mood, or story that excites you.",
      "Write your full script and story first — the clearest version of what you want to make on screen. Not evaluated on its own; this feeds directly into Tier 2.",
    ],
    tracks: ["Spec ad", "Film"],
  },
  tier2: {
    label: "Tier 2",
    title: "Concept & Storyboard",
    heading: "Visualize the script",
    paragraphs: [
      "Take your Tier 1 script and build a visual storyboard — concept images that map key frames, tone, and direction.",
      "Add a brief pitch that ties the visuals to your story. Tier 1 and Tier 2 are reviewed together as one package.",
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
      id: "script",
      title: "Script & story",
      desc: "In Tier 1, submit your full script and story — not just a logline. Nail the narrative before you visualize it.",
      highlight: "Full script",
    },
    {
      id: "storyboard",
      title: "Visual storyboard",
      desc: "In Tier 2, use concept images to map key frames and visual direction based on your script.",
      highlight: "Concept images",
    },
    {
      id: "workflows",
      title: "Workflows (Flow)",
      desc: "We recommend using ImagineArt Flow for storyboard frames and concept art in Tier 2. You can also use other ImagineArt features — like Film Studio — if that fits your process better.",
      tag: "Flow",
      recommended: true,
    },
  ] satisfies TiersGuideline[],
  submission: {
    title: "Submit your script & storyboard",
    intro:
      "One submission at the end of Day 1 — include everything below. Tier 1 and Tier 2 are reviewed together.",
    deliverables: [
      "Your full script and story",
      "Visual storyboard with concept images",
      "Brief concept pitch text",
    ],
    portalLabel: "Tier 1 & 2 portal",
  },
} as const;
