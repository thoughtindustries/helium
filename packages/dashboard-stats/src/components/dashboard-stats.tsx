import React from 'react';
import { StatsProps } from './types';
import { NotebookIcon, IndexIcon, CheckIcon, StarIcon, UsersIcon } from './icons';
import { useTranslation } from 'react-i18next';
import { useUserStatsQuery } from '../graphql';
import { LoadingDots } from '@thoughtindustries/content';

enum Colors {
  Sky = 'text-sky-700',
  Pink = 'text-pink-700',
  Gray = 'text-gray-600',
  Green = 'text-green-600'
}

const Stat = ({ ...props }: StatsProps) => {
  const { label, stat, color, icon } = props;

  const statsStyle = 'border border-solid border-gray-200 text-center m-1.5 pb-2 pt-3 sm:w-full';
  const statTitleStyle = 'flex flex-row justify-center text-gray-500';
  const labelStyle = 'text-xs';
  const iconStyle = 'inline sm:hidden md:inline';
  const statStyle = `text-5xl ${color}`;

  return (
    <div className={statsStyle}>
      <div className={statTitleStyle}>
        <div className={iconStyle}>{icon}</div>
        <div className={labelStyle}>{label}</div>
      </div>
      <div className={statStyle}>{stat}</div>
    </div>
  );
};

const DashboardStats = (): JSX.Element => {
  const statContainer =
    'flex flex-col w-full sm:flex-row justify-center border border-solid border-gray-200 p-1.5 shadow-lg';

  const { t } = useTranslation();
  const { data, loading, error } = useUserStatsQuery();

  // Create components for loading and errors
  if (loading) return <LoadingDots />;
  if (error) return <p>Error!</p>;

  return (
    <div className={statContainer}>
      <Stat
        label={t('dashboard.available').toUpperCase()}
        stat={data ? data.availableCoursesCount : 0}
        color={Colors.Sky}
        icon={<NotebookIcon />}
      />
      <Stat
        label={t('dashboard.started').toUpperCase()}
        stat={data ? data.startedCoursesCount : 0}
        color={Colors.Green}
        icon={<IndexIcon />}
      />
      <Stat
        label={t('dashboard.completed').toUpperCase()}
        stat={data ? data.completedCoursesCount : 0}
        color={Colors.Pink}
        icon={<CheckIcon />}
      />
      {data && data.certificatesCount > 0 && (
        <Stat
          label={t('dashboard.certificates').toUpperCase()}
          stat={data.certificatesCount}
          color={Colors.Green}
          icon={<StarIcon />}
        />
      )}
      <Stat
        label={t('dashboard.collaborations').toUpperCase()}
        stat={data ? data.collaborationsCount : 0}
        color={Colors.Gray}
        icon={<UsersIcon />}
      />
    </div>
  );
};

DashboardStats.displayName = 'DashboardStats';
export default DashboardStats;
