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
  pills: string[];
  hover: string;
};

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
    desc: "Tier 1 begins — four hours on the clock.",
    tag: "Tier 1",
  },
  {
    time: "1:00 PM",
    desc: "AI workshop with Hamza & Zain (runs parallel).",
    tag: "Workshop",
  },
  {
    time: "4:00 PM",
    desc: "Tier 1 submissions due. Lunch break @ INNO.",
    tag: "Tier 1",
  },
  {
    time: "5:00 PM",
    desc: "Tier 1 results announced at CEMTECH, 4th floor.",
    tag: "Tier 1",
  },
  {
    time: "5:30 PM",
    desc: "Tier 2 begins — story and script challenge issued.",
    tag: "Tier 2",
  },
  {
    time: "7:30 PM",
    desc: "Submit your story, script, or concept.",
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
    desc: "Orientation and reminder to access your Tier 2 submissions.",
    tag: "Tier 2",
  },
  {
    time: "10:30 AM",
    desc: "ImagineArt demo refresh.",
  },
  {
    time: "11:00 AM",
    desc: "Tier 3 begins — six hours to make your film.",
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
    desc: "Back to CEMTECH for post-production.",
    tag: "Tier 3",
  },
  {
    time: "6:00 PM",
    desc: "Tier 3 submissions close.",
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
    name: "One Prompt Challenge",
    desc: "Curate a single prompt and generate a 15-second clip in Film Studio. Everyone competes individually — this is the first filter.",
    pills: ["Seedance", "720P", "3,000 credits", "Film Studio", "Portal submission"],
    hover: "TIER 01",
  },
  {
    id: "02",
    day: "Day 01",
    format: "Teams of 3–5",
    name: "Story + Script",
    desc: "Qualifiers from Tier 1 form teams and craft the story and script for their short film. Narrative clarity matters as much as the idea.",
    pills: ["Tier 1 qualifiers", "Teams of 3–5", "Story + Script", "Portal submission"],
    hover: "TIER 02",
  },
  {
    id: "03",
    day: "Day 02",
    format: "Teams",
    name: "Assets + Post Production",
    desc: "Six hours to generate assets, post-produce, and present a complete short film using Workflows. This is where the room becomes a studio.",
    pills: [
      "6 hours total",
      "3 hrs assets + 3 hrs post",
      "75k–100k credits",
      "Workflows",
      "Short film",
    ],
    hover: "TIER 03",
  },
];
