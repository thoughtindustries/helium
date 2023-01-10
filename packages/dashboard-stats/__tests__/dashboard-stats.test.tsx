import React from 'react';
import { render, screen } from '@testing-library/react';
import { DashboardStats } from '../src';
import { MockedProvider } from '@apollo/client/testing';
import { UserStatsDocument } from '@thoughtindustries/dashboard-stats';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key
    };
  }
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

const mockApolloResults = {
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
};

describe('@thoughtindustries/dashboard-stats', () => {
  describe('Dashboard Stats', () => {
    it('should render', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloResults]} addTypename={false}>
          <DashboardStats />
        </MockedProvider>
      );
      // wait for data fetching to complete
      expect(await screen.findByText('DASHBOARD.AVAILABLE')).toBeInTheDocument();
      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="flex flex-col w-full sm:flex-row justify-center border border-solid border-gray-200 p-1.5 shadow-lg"
          >
            <div
              class="border border-solid border-gray-200 text-center m-1.5 pb-2 pt-3 sm:w-full"
            >
              <div
                class="flex flex-row justify-center text-gray-500"
              >
                <div
                  class="inline sm:hidden md:inline"
                >
                  <svg
                    fill="currentColor"
                    height="12"
                    viewBox="0 -4 20 20"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                    />
                    <path
                      d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                    />
                    <path
                      d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                    />
                  </svg>
                </div>
                <div
                  class="text-xs"
                >
                  DASHBOARD.AVAILABLE
                </div>
              </div>
              <div
                class="text-5xl text-sky-700"
              >
                1200
              </div>
            </div>
            <div
              class="border border-solid border-gray-200 text-center m-1.5 pb-2 pt-3 sm:w-full"
            >
              <div
                class="flex flex-row justify-center text-gray-500"
              >
                <div
                  class="inline sm:hidden md:inline"
                >
                  <svg
                    fill="currentColor"
                    height="14"
                    viewBox="0 0 20 16"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"
                    />
                  </svg>
                </div>
                <div
                  class="text-xs"
                >
                  DASHBOARD.STARTED
                </div>
              </div>
              <div
                class="text-5xl text-green-600"
              >
                5
              </div>
            </div>
            <div
              class="border border-solid border-gray-200 text-center m-1.5 pb-2 pt-3 sm:w-full"
            >
              <div
                class="flex flex-row justify-center text-gray-500"
              >
                <div
                  class="inline sm:hidden md:inline"
                >
                  <svg
                    fill="currentColor"
                    height="16"
                    viewBox="0 2 16 14"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                    />
                  </svg>
                </div>
                <div
                  class="text-xs"
                >
                  DASHBOARD.COMPLETED
                </div>
              </div>
              <div
                class="text-5xl text-pink-700"
              >
                10
              </div>
            </div>
            <div
              class="border border-solid border-gray-200 text-center m-1.5 pb-2 pt-3 sm:w-full"
            >
              <div
                class="flex flex-row justify-center text-gray-500"
              >
                <div
                  class="inline sm:hidden md:inline"
                >
                  <svg
                    fill="currentColor"
                    height="12"
                    viewBox="0 -4 20 20"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                    />
                  </svg>
                </div>
                <div
                  class="text-xs"
                >
                  DASHBOARD.CERTIFICATES
                </div>
              </div>
              <div
                class="text-5xl text-green-600"
              >
                3
              </div>
            </div>
            <div
              class="border border-solid border-gray-200 text-center m-1.5 pb-2 pt-3 sm:w-full"
            >
              <div
                class="flex flex-row justify-center text-gray-500"
              >
                <div
                  class="inline sm:hidden md:inline"
                >
                  <svg
                    fill="currentColor"
                    height="14"
                    viewBox="0 -2 20 18"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                    />
                  </svg>
                </div>
                <div
                  class="text-xs"
                >
                  DASHBOARD.COLLABORATIONS
                </div>
              </div>
              <div
                class="text-5xl text-gray-600"
              >
                1
              </div>
            </div>
          </div>
        </div>
      `);
    });
  });
});
