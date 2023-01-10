import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Registration, RedeemRegistrationAndRedemptionCodesDocument } from '../src';

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
    query: RedeemRegistrationAndRedemptionCodesDocument
  },
  result: {
    data: {
      RedeemRegistrationAndRedemptionCodes: {
        redeemed: true
      }
    }
  }
};

const mockUser = {
  id: 'uuid',
  firstName: 'First',
  lastName: 'Last',
  email: 'first.last@example.com',
  roleKey: 'student'
};

describe('@thoughtindustries/registration', () => {
  describe('Registration', () => {
    it('should render registration component', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloResults]} addTypename={false}>
          <Registration currentUser={mockUser} />
        </MockedProvider>
      );
      expect(container).toMatchInlineSnapshot(`
        <div>
          <form
            class="flex flex-col justify-center text-center min-h-screen mx-4 md:mx-40"
          >
            <div>
              <div>
                <input
                  class="p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
                  placeholder="redemption-code.placeholder"
                />
                <button
                  class="text-white bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-default hover:bg-indigo-600 inline-block font-normal text-sm no-underline py-4 w-full md:w-1/3 rounded-md md:rounded-l-none mb-4"
                  type="button"
                >
                  redemption-code.validate
                </button>
              </div>
              <button
                class="flex justify-left text-indigo-700 text-sm"
                type="button"
              >
                redemption-code.add-redemption-code
              </button>
            </div>
            <div
              class="w-full border-t border-gray-200 my-4"
            />
            <div
              class="flex flex-col md:flex-row text-sm text-gray-500 justify-between"
            >
              <div
                class="flex flex-row items-center mb-4"
              >
                <input
                  class="mr-2"
                  type="checkbox"
                />
                <div
                  style="display: flex; flex-direction: row;"
                >
                  <p>
                    agree-terms\u00A0
                  </p>
                  <button
                    class="text-gray-700"
                    type="button"
                  >
                    terms-and-conditions
                  </button>
                </div>
              </div>
              <button
                class="text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md disabled:bg-indigo-300 disabled:cursor-default"
                type="button"
              >
                redemption-code.redeem-code-preloaded
              </button>
            </div>
          </form>
        </div>
      `);
    });
  });
});
