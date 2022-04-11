import { ReactNode } from 'react';
export interface DashboardStatsProps {
  certificatesCount: number;
  collaborationsCount: number;
  availableCoursesCount: number;
  startedCoursesCount: number;
  completedCoursesCount: number;
}

export interface StatsProps {
  label: string;
  stat: number;
  color: string;
  icon: ReactNode;
}
