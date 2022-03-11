import React from 'react';
import { DashboardStatsProps, StatsProps } from './types';
import { NotebookIcon, IndexIcon, CheckIcon, StarIcon, UsersIcon } from './icons';

enum Labels {
  Available = 'Available',
  Started = 'Started',
  Completed = 'Completed',
  Certificates = 'Certificates',
  Collaborations = 'Collaborations'
}

enum Colors {
  Sky = 'text-sky-700',
  Pink = 'text-pink-700',
  Gray = 'text-gray-600',
  Green = 'text-green-600'
}

const DashboardStats = ({
  availableCoursesCount,
  startedCoursesCount,
  completedCoursesCount,
  certificatesCount,
  collaborationsCount,
  hideLabels
}: DashboardStatsProps): JSX.Element => {
  const statContainer =
    'flex flex-col w-full sm:flex-row justify-center border border-solid border-gray-200 p-1.5 shadow-lg';

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

  return (
    <>
      {!hideLabels && (
        <div className={statContainer}>
          <Stat
            label={Labels.Available.toUpperCase()}
            stat={availableCoursesCount}
            color={Colors.Sky}
            icon={<NotebookIcon />}
          />
          <Stat
            label={Labels.Started.toUpperCase()}
            stat={startedCoursesCount}
            color={Colors.Green}
            icon={<IndexIcon />}
          />
          <Stat
            label={Labels.Completed.toUpperCase()}
            stat={completedCoursesCount}
            color={Colors.Pink}
            icon={<CheckIcon />}
          />
          {certificatesCount > 0 && (
            <Stat
              label={Labels.Certificates.toUpperCase()}
              stat={certificatesCount}
              color={Colors.Green}
              icon={<StarIcon />}
            />
          )}
          <Stat
            label={Labels.Collaborations.toUpperCase()}
            stat={collaborationsCount}
            color={Colors.Gray}
            icon={<UsersIcon />}
          />
        </div>
      )}
    </>
  );
};

DashboardStats.displayName = 'DashboardStats';
export default DashboardStats;
