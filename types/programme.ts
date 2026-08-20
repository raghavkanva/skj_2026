export interface ProgrammeItem {
  time: string;
  title: string;
  description?: string;
  performer?: string;
  period: "morning" | "evening";
}
