import React from 'react';
import { render } from '@testing-library/react';
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
      availableCoursesCount: 1200,
      startedCoursesCount: 5,
      completedCoursesCount: 10,
      certificatesCount: 3,
      collaborationsCount: 1
    }
  }
};

describe('@thoughtindustries/dashboard-stats', () => {
  describe('Dashboard Stats', () => {
    it('should render', () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloResults]} addTypename={false}>
          <DashboardStats />
        </MockedProvider>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <p>
            Loading...
          </p>
        </div>
      `);
    });
  });
});
