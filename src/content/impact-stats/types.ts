export type ImpactStatItem = {
  value: number;
  label: string;
  suffix: string;
};

export type ImpactStatsContent = {
  label: string;
  title: string;
  stats: ImpactStatItem[];
};
