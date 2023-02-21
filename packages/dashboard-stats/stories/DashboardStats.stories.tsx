import { DashboardStatsProps, DashboardStats, UserStatsDocument } from '../src';
import { StoryObj } from '@storybook/react';

export default { component: DashboardStats, title: 'Packages/Dashboard Stats' };

type Dashboard = StoryObj<DashboardStatsProps>;

export const Dashboard: Dashboard = {
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
