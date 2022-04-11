import { Story } from '@storybook/react';
import React from 'react';
import { DashboardStatsProps, DashboardStats, UserStatsDocument } from '../src';

export default {
  title: 'Example/DashboardStats',
  component: DashboardStats
};

const Template: Story<DashboardStatsProps> = () => <DashboardStats />;

export const Base = Template.bind({});
Base.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: UserStatsDocument
        },
        result: {
          data: {
            availableCoursesCount: 1200,
            startedCoursesCount: 5,
            completedCoursesCount: 10,
            certificatesCount: 3,
            collaborationsCount: 1
          }
        }
      }
    ]
  }
};
