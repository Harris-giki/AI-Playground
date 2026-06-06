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

/** Brief overview of how the three tiers connect — used on /details. */
export const tierProcessIntro =
  "Three steps, one film. Tier 1 is your script — write the story for a spec ad or film. Tier 2 is your visual storyboard. Both are reviewed together on Day 1, shortlisted participants are announced that evening, and Tier 3 is where you generate video and make it for real.";

/** How participants advance between tiers. */
export const tierEvaluationNote =
  "Tier 1 is not evaluated on its own. Tier 1 and Tier 2 submissions are reviewed together on Day 1, and shortlisted participants are announced that same evening. Tier 3 is for shortlisted participants only.";

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
    desc: "Bingo, coffee, and networking. Tier 1 credits assigned — script challenge goes live.",
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
    desc: "Tier 1 closes — everyone continues to Tier 2. No standalone Tier 1 evaluation.",
    tag: "Tier 1",
  },
  {
    time: "5:30 PM",
    desc: "Tier 2 begins — build your visual storyboard and concept.",
    tag: "Tier 2",
  },
  {
    time: "7:30 PM",
    desc: "Tier 2 submissions due — script and storyboard reviewed together.",
    tag: "Tier 2",
  },
  {
    time: "8:00 PM",
    desc: "Tier 1 and Tier 2 reviewed together — shortlisted participants announced.",
    tag: "Shortlist",
  },
  {
    time: "Evening",
    desc: "Wrap for the day. Shortlisted teams prep for Tier 3 on Day 2.",
  },
];

export const dayTwoSchedule: ScheduleItem[] = [
  {
    time: "9:00 AM",
    desc: "Arrival.",
  },
  {
    time: "10:00 AM",
    desc: "Orientation for shortlisted teams — Tier 3 begins shortly.",
    tag: "Tier 3",
  },
  {
    time: "10:30 AM",
    desc: "ImagineArt demo refresh.",
  },
  {
    time: "11:00 AM",
    desc: "Tier 3 begins for shortlisted teams — six hours to generate video and make your film.",
    tag: "Tier 3",
  },
  {
    time: "12:30 PM",
    desc: "AI workshop with Hamza & Zain.",
    tag: "Workshop",
  },
  {
    time: "2:00 PM",
    desc: "Lunch break.",
  },
  {
    time: "3:00 PM",
    desc: "Back to CEMTECH for post-production and assembly.",
    tag: "Tier 3",
  },
  {
    time: "6:00 PM",
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
    format: "Solo · Not evaluated alone",
    name: "Script Polish",
    descLead: "Choose your track:",
    tracks: ["Spec ad", "Film"],
    desc: "Write your full script and story first. Not evaluated on its own; this feeds directly into Tier 2.",
    hover: "TIER 01",
  },
  {
    id: "02",
    day: "Day 01",
    format: "Teams of 3–5",
    name: "Concept & Storyboard",
    desc: "Build your visual storyboard and concept from your Tier 1 script. Tier 1 and Tier 2 are reviewed together on Day 1 — shortlisted participants announced that evening.",
    hover: "TIER 02",
  },
  {
    id: "03",
    day: "Day 02",
    format: "Shortlisted only",
    name: "Make the Film",
    desc: "Shortlisted participants only. Turn your script and storyboard into a finished film — generate video, assemble, and present.",
    hover: "TIER 03",
  },
];
