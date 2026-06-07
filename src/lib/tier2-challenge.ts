/** Tier 2 challenge copy — single source of truth for /tier-2 */

export const tier2SubmissionFormUrl =
  "https://forms.gle/kkFfnLixWbLecVw48";

/** Tier 2 challenge window length in hours. */
export const tier2ChallengeDurationHours = 2;

/** When Tier 2 timer started (Asia/Karachi). Update when the window opens. */
export const tier2ChallengeStartISO = "2026-06-07T13:11:00+05:00";

export const tier2Challenge = {
  heroEyebrow: "Tier 2",
  title: "Teams & Script",
  subtitle:
    "Shortlisted teams only. Two hours on the clock — form your trio, write a 2–3 minute script from the prompt, submit, and take a break.",
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
      "You have two hours. Submit when you're done, then take a break.",
    ],
    meta: ["Teams of 3", "2–3 min script", "2 hours"],
  },
  submission: {
    title: "Submit your script",
    intro: "Submit your team script (2–3 mins) within the 2-hour window — scan the QR code or open the form below.",
    deliverables: ["Team script based on the prompt (2–3 mins)"],
    portalLabel: "Tier 2 portal",
  },
} as const;
