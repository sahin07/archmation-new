export type DreamTeamGradientKey =
  | "pink-rose"
  | "purple-indigo"
  | "blue-cyan"
  | "violet-purple"
  | "orange-red"
  | "green-emerald"
  | "pink-rose-soft"
  | "cyan-blue";

export type DreamTeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  image: string;
  gradient: DreamTeamGradientKey;
};

export type DreamTeamContent = {
  label: string;
  title: string;
  titleAccent: string;
  quote: string;
  members: DreamTeamMember[];
};
