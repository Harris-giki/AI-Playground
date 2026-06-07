export type ShortlistEntry = {
  name: string;
  email: string;
};

export type ShortlistNextStep = {
  step: string;
  title: string;
  desc: string;
  featured?: boolean;
};

/** What shortlisted participants need to do before Day 2. */
export const tier12ShortlistNextSteps: ShortlistNextStep[] = [
  {
    step: "01",
    title: "Network tonight",
    desc: "Reach out to other shortlisted creators — in the room, in the group, wherever you already connect. You need to form a team of exactly three before tomorrow.",
  },
  {
    step: "02",
    title: "Teams of three",
    desc: "Tier 2 runs as a trio. Pick people whose scripts and storyboards you want to build on together. Come tomorrow with your team locked in.",
    featured: true,
  },
  {
    step: "03",
    title: "Read the brief",
    desc: "The Tier 2 brief is live — form your team and write your 2–3 minute script. You have two hours.",
  },
];

/** Tier 1 shortlist — deduplicated by email, "Good" submissions only. */
export const tier12Shortlist: ShortlistEntry[] = [
  { name: "Usama Mustafa Shahid", email: "usama.mustafa93@gmail.com" },
  { name: "Ehsan Ali Khan", email: "ehsankhan644@gmail.com" },
  { name: "Qasim Ali Shah", email: "digitall.qasim@gmail.com" },
  { name: "Muhammad Faizan Malik", email: "faizan.malik.1198@gmail.com" },
  { name: "Saad Aziz", email: "shiekhsaad9@gmail.com" },
  { name: "Midhat Yaseen", email: "midhatyasin@gmail.com" },
  { name: "Taha Ashfaq", email: "tahaashfaqmalik@gmail.com" },
  { name: "Osama Ahmed", email: "osamaahmedt99@gmail.com" },
  { name: "Abdus Samad", email: "namea.samad@gmail.com" },
  { name: "Muhammad Saadqain", email: "m.saadqain5@gmail.com" },
  { name: "Adeel Mukhtar", email: "adeelmukhtar051@gmail.com" },
  { name: "Husnain Khurshid", email: "husnainkhurshid360@gmail.com" },
  { name: "Muhammad Abdul Ahad", email: "ahaddar175@gmail.com" },
  { name: "Abdul Rehman Haider", email: "abdulrehmanh1678@gmail.com" },
  { name: "Rohan Arshad", email: "rohanarshad789@gmail.com" },
  { name: "Sabahat Afsheen", email: "sabahat.afsheen@gmail.com" },
  { name: "Ghulam Mustafa", email: "g.mustafa4006@gmail.com" },
  { name: "Muhammad Muneeb Khan", email: "muneebkhan08304@gmail.com" },
  { name: "Muhammad Haris Tahir", email: "good4haris@gmail.com" },
  { name: "Ahmed Azam", email: "ahm.99.pk@gmail.com" },
  { name: "Zain Ali Mehmood", email: "zaynbusyness@gmail.com" },
  { name: "Waseem Shahbaz", email: "waseemshahbaz11@gmail.com" },
  { name: "Ali Rizvi", email: "alirizviee@gmail.com" },
  { name: "Hussain Amjad Khan", email: "hakaiongawork@gmail.com" },
  { name: "Muhammad Arslan", email: "ma7327365@gmail.com" },
  { name: "Muhammad Ahad", email: "collab@evanbaby.com" },
  { name: "Muhammad Rafey", email: "mrafey292@gmail.com" },
  { name: "Asad Ullah Khan", email: "asad.khan020@gmail.com" },
  { name: "Syed Muhammad Shayan Anis", email: "shayananis.official@gmail.com" },
  { name: "Muhammad Bilal", email: "bilalad330@gmail.com" },
  { name: "Mohammad Sarim Khan", email: "sarimniaziii@gmail.com" },
  { name: "Hassaan Ali Mehmood", email: "videos.zero2pi@gmail.com" },
  { name: "Khadija Noor", email: "khadijaafilm@gmail.com" },
  { name: "Syeda Myra Bukhari", email: "myrabukhari6@gmail.com" },
  { name: "Muhammad Saad Naseem", email: "suadnaseem44@gmail.com" },
  { name: "Umar Farooq", email: "umerm3001@outlook.com" },
  { name: "Safeer Hussain", email: "safeerhussayn77@gmail.com" },
  { name: "Ch Muhammad Areeb", email: "info.areebaltaf@gmail.com" },
  { name: "Noor", email: "noorfatima200131@gmail.com" },
  { name: "Zunairah", email: "77zunairah@gmail.com" },
  { name: "Hassan Saifullah", email: "hassansaifullah.19@gmail.com" },
  { name: "Muhammad Hadi", email: "hadi.hassan31@outlook.com" },
];

export const tier12ShortlistCount = tier12Shortlist.length;
