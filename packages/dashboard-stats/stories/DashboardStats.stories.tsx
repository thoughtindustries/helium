import { DashboardStatsProps, DashboardStats, UserStatsDocument } from '../src';

export default { title: 'Example/DashboardStats', component: DashboardStats };
export const Dashboard = {
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

// export default {
//   title: 'components/DashboardStats',
//   component: DashboardStats
// };

// export const Test = () => <DashboardStats />;

// const Template: StoryFn<DashboardStatsProps> = () => <DashboardStats />;

// export const Base = Template.bind({});
// Base.parameters = {
//   apolloClient: {
//     mocks: [
//       {
//         request: {
//           query: UserStatsDocument
//         },
//         result: {
//           data: {
//             CurrentUser: {
//               availableCoursesCount: 1200,
//               startedCoursesCount: 5,
//               completedCoursesCount: 10,
//               certificatesCount: 3,
//               collaborationsCount: 1
//             }
//           }
//         }
//       }
//     ]
//   }
// };
