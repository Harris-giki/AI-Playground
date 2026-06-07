/** Tier 2 challenge copy — single source of truth for /tier-2 */

export const tier2SubmissionFormUrl =
  "https://forms.gle/kkFfnLixWbLecVw48";

export const tier2Challenge = {
  heroEyebrow: "Tier 2",
  title: "Teams & Script",
  subtitle:
    "Shortlisted teams only. Form your trio, write a 2–3 minute script from the prompt, and submit — then take a break.",
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
      "Make your team of three and write a script based on the prompt above — a full 2–3 minute script, your story before a single frame gets generated.",
      "Submit it when you're done. Then take a break.",
    ],
    meta: ["Teams of 3", "2–3 min script", "Take a break"],
  },
  submission: {
    title: "Submit your script",
    intro: "Submit your team script (2–3 mins) — scan the QR code or open the form below.",
    deliverables: ["Team script based on the prompt (2–3 mins)"],
    portalLabel: "Tier 2 portal",
  },
} as const;
