import React from 'react';
import { render } from '@testing-library/react';
import { DashboardStats } from '../src';
import { MockedProvider } from '@apollo/client/testing';

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

describe('@thoughtindustries/dashboard-stats', () => {
  describe('Dashboard Stats', () => {
    it('should render', () => {
      const { container } = render(
        <MockedProvider>
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
