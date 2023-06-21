import React from 'react';
import { DashboardStats, UserStatsDocument } from '../src';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta = {
  component: DashboardStats,
  title: 'Packages/Dashboard Stats'
};

export default meta;
type Dashboard = StoryObj;

export const Dashboard: Dashboard = {
  render: () => <DashboardStats />,
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: UserStatsDocument
          },
          result: {
            data: {
              CurrentUser: {
                availableCoursesCount: 1200,
                startedCoursesCount: 5,
                completedCoursesCount: 10,
                certificatesCount: 3,
                collaborationsCount: 1
              }
            }
          }
        }
      ]
    }
  }
};
