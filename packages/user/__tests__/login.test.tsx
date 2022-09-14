import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Login, LoginDocument } from '../src';

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
    query: LoginDocument
  },
  result: {
    data: {
      Login: {
        token: 'testToken'
      }
    }
  }
};

describe('@thoughtindustries/login', () => {
  describe('Login', () => {
    it('should render login component', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloResults]} addTypename={false}>
          <Login />
        </MockedProvider>
      );
      await waitFor(() => new Promise(res => setTimeout(res, 0)));
      expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="flex flex-col justify-center items-center min-h-screen px-4"
        >
          <h2
            class="text-2xl pb-4"
          >
            sign-in
          </h2>
          <input
            class="p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
            placeholder="register-email"
          />
          <input
            class="p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
            placeholder="register-password"
            type="password"
          />
          <div
            class="flex flex-col-reverse md:flex-row justify-between w-full md:w-2/3"
          >
            <button
              type="button"
            >
              <p>
                forgot-password-question
              </p>
            </button>
            <button
              class="text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md disabled:bg-indigo-300 disabled:cursor-default"
              type="button"
            >
              sign-in
            </button>
          </div>
        </div>
      </div>
      `);
    });
  });
});
