import type { ProgrammeItem } from "@/types/programme";

export const programme: ProgrammeItem[] = [
  { time: "8:00 AM", title: "Darshan", period: "morning" },
  { time: "9:00 AM", title: "Arati", period: "morning" },
  { time: "10:00 AM", title: "Fire Sacrifice · Yajna", period: "morning" },
  { time: "11:00 AM", title: "Bhajana", period: "morning" },
  { time: "12:00 Noon", title: "Krishna Katha", period: "morning" },
  {
    time: "1:00 PM",
    title: "Drama: Jarasandha Mukti & Sisupala Vadha",
    period: "morning",
  },
  { time: "2:00 PM", title: "Hare Krishna Movie", period: "morning" },
  { time: "3:00 PM", title: "Bhajana", period: "morning" },
  { time: "3:30 PM", title: "Krishna Katha", period: "morning" },
  { time: "4:30 PM", title: "Bhajana", period: "morning" },
  {
    time: "5:00 PM",
    title:
      "Veena Play by Srirangam Periya Koil Paramparai Veenakainkaryam – Veenai Srinivasan & Disciples",
    period: "evening",
  },
  {
    time: "6:00 PM",
    title: "Vocal by Isaikalaimani Vignesh Krishnakumar & Team",
    period: "evening",
  },
  {
    time: "7:00 PM",
    title: "Drama: Jarasandha Mukti & Sisupala Vadha",
    period: "evening",
  },
  { time: "8:00 PM", title: "Arati & Kirtana", period: "evening" },
  {
    time: "8:30 PM",
    title: "ISKCON Salem Temple Project",
    period: "evening",
  },
  { time: "9:00 PM", title: "Krishna Katha", period: "evening" },
  { time: "10:00 PM", title: "Maha Abhisheka", period: "evening" },
  { time: "Midnight", title: "Maha Arati & Kirtana", period: "evening" },
];

export const morningProgramme = programme.filter(
  (item) => item.period === "morning"
);
export const eveningProgramme = programme.filter(
  (item) => item.period === "evening"
);
