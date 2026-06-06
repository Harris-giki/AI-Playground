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
  hover: string;
};

/** Brief overview of how the three tiers connect — used on /details. */
export const tierProcessIntro =
  "Three steps, one film. Tier 1 is pure exploration — pitch a spec ad or a film concept with images and words. Tier 2 sharpens that into a script. Tier 3 is where you generate video and make it for real.";

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
    desc: "Bingo, coffee, and networking. Tier 1 credits assigned — concept challenge goes live.",
    tag: "Tier 1",
  },
  {
    time: "11:30 AM",
    desc: "Tier 1 briefing and credit confirmation.",
    tag: "Tier 1",
  },
  {
    time: "12:00 PM",
    desc: "Tier 1 begins — four hours to build your concept pitch.",
    tag: "Tier 1",
  },
  {
    time: "1:00 PM",
    desc: "AI workshop with Hamza & Zain (runs parallel).",
    tag: "Workshop",
  },
  {
    time: "4:00 PM",
    desc: "Tier 1 concept submissions due. Lunch break @ INNO.",
    tag: "Tier 1",
  },
  {
    time: "5:00 PM",
    desc: "Tier 1 results announced at CEMTECH, 4th floor.",
    tag: "Tier 1",
  },
  {
    time: "5:30 PM",
    desc: "Tier 2 begins — refine your concept into a polished script.",
    tag: "Tier 2",
  },
  {
    time: "7:30 PM",
    desc: "Submit your polished script.",
    tag: "Tier 2",
  },
  {
    time: "Evening",
    desc: "Wrap for the day. Rest up — Day Two moves fast.",
  },
];

export const dayTwoSchedule: ScheduleItem[] = [
  {
    time: "9:00 AM",
    desc: "Arrival.",
  },
  {
    time: "10:00 AM",
    desc: "Orientation and reminder to access your Tier 2 script submissions.",
    tag: "Tier 2",
  },
  {
    time: "10:30 AM",
    desc: "ImagineArt demo refresh.",
  },
  {
    time: "11:00 AM",
    desc: "Tier 3 begins — six hours to generate video and make your film.",
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
    format: "Solo",
    name: "Concept & Storyboard",
    desc: "Choose your track — a spec ad or a film — and pitch it with concept images plus a short write-up that sells the vision. No video yet; this is pure ideation.",
    hover: "TIER 01",
  },
  {
    id: "02",
    day: "Day 01",
    format: "Teams of 3–5",
    name: "Script Polish",
    desc: "Take your Tier 1 concept and refine it into a polished script — the clearest, most intentional version of the film you want to make.",
    hover: "TIER 02",
  },
  {
    id: "03",
    day: "Day 02",
    format: "Teams",
    name: "Make the Film",
    desc: "Turn concept and script into reality. Generate video, assemble your short film, and present the finished piece.",
    hover: "TIER 03",
  },
];
