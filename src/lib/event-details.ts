export type ScheduleItem = {
  time: string;
  desc: string;
  tag?: string;
};

export type TierChallenge = {
  id: string;
  day: string;
  format: string;
  name: string;
  desc: string;
  descLead?: string;
  tracks?: string[];
  hover: string;
};

/** Brief overview of how the tiers connect — used on /details. */
export const tierProcessIntro =
  "Three tiers, one film. Tier 1 is your script and visual storyboard on Day 1. Shortlisted participants return for Tier 2 — two hours to write a 2–3 minute script — then Tier 3, a five-hour sprint to generate assets and make the film.";

/** How participants advance between tiers. */
export const tierEvaluationNote =
  "Tier 1 submissions are reviewed on Day 1, and shortlisted participants are announced that same evening. Tier 2 and Tier 3 are for shortlisted participants only.";

export const dayOneSchedule: ScheduleItem[] = [
  {
    time: "9:00 AM",
    desc: "Arrival and onboarding at CEMTECH reception — tags and wristbands.",
  },
  {
    time: "10:00 AM",
    desc: "Opening orientation at Vyro office, 4th floor.",
  },
  {
    time: "10:30 AM",
    desc: "ImagineArt tool demo.",
  },
  {
    time: "11:00 AM",
    desc: "Bingo, coffee, and networking. Tier 1 credits assigned — challenge goes live.",
    tag: "Tier 1",
  },
  {
    time: "11:30 AM",
    desc: "Tier 1 briefing and credit confirmation.",
    tag: "Tier 1",
  },
  {
    time: "12:00 PM",
    desc: "Tier 1 begins — write your full script and story.",
    tag: "Tier 1",
  },
  {
    time: "1:00 PM",
    desc: "AI workshop with Hamza & Zain (runs parallel).",
    tag: "Workshop",
  },
  {
    time: "4:00 PM",
    desc: "Tier 1 script checkpoint. Lunch break @ INNO.",
    tag: "Tier 1",
  },
  {
    time: "5:00 PM",
    desc: "Tier 1 continues — shift from script to visual storyboard.",
    tag: "Tier 1",
  },
  {
    time: "5:30 PM",
    desc: "Storyboard phase — build your visual storyboard and concept.",
    tag: "Tier 1",
  },
  {
    time: "7:30 PM",
    desc: "Tier 1 submissions due — script and storyboard reviewed together.",
    tag: "Tier 1",
  },
  {
    time: "8:00 PM",
    desc: "Tier 1 reviewed — shortlisted participants announced.",
    tag: "Shortlist",
  },
  {
    time: "Evening",
    desc: "Wrap for the day. Shortlisted teams prep for Tier 2 and Tier 3 on Day 2.",
  },
];

export const dayTwoSchedule: ScheduleItem[] = [
  {
    time: "9:00 AM",
    desc: "Arrival.",
  },
  {
    time: "10:00 AM",
    desc: "Orientation for shortlisted teams — Tier 2 begins shortly.",
    tag: "Tier 2",
  },
  {
    time: "10:30 AM",
    desc: "ImagineArt demo refresh.",
  },
  {
    time: "11:00 AM",
    desc: "Tier 2 begins — two hours to form your team of three and write a 2–3 minute script from the prompt.",
    tag: "Tier 2",
  },
  {
    time: "1:00 PM",
    desc: "Tier 2 script submissions due — take a break.",
    tag: "Tier 2",
  },
  {
    time: "2:00 PM",
    desc: "Tier 3 begins — five-hour sprint. Half the time on assets, half on the film.",
    tag: "Tier 3",
  },
  {
    time: "7:00 PM",
    desc: "Tier 3 film submissions close.",
    tag: "Tier 3",
  },
  {
    time: "8:00 PM",
    desc: "Results, $5,000 in prizes, and closing.",
    tag: "Awards",
  },
];

export const tierChallenges: TierChallenge[] = [
  {
    id: "01",
    day: "Day 01",
    format: "Script · Teams of 3–5 for storyboard",
    name: "Script & Storyboard",
    descLead: "Choose your track:",
    tracks: ["Spec ad", "Film"],
    desc: "Write your full script and story, then build the visual storyboard and concept. Reviewed together on Day 1 — shortlisted participants announced that evening.",
    hover: "TIER 01",
  },
  {
    id: "02",
    day: "Day 02",
    format: "Teams of 3 · 2 hours · Shortlisted only",
    name: "Teams & Script",
    desc: "Make your team of three and write a 2–3 minute script based on the prompt. Two hours on the clock — submit, then take a break.",
    hover: "TIER 02",
  },
  {
    id: "03",
    day: "Day 02",
    format: "5-hour sprint · Shortlisted only",
    name: "Make the Film",
    desc: "Half the time generating assets, half the time making the film. Generate video, assemble, and present.",
    hover: "TIER 03",
  },
];
