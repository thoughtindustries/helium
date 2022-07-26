import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Redemption, ValidateRedemptionCodeDocument } from '../src';

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
    query: ValidateRedemptionCodeDocument
  },
  result: {
    data: {
      RedeemRedemptionCode: {
        alreadyRedeemed: null,
        valid: false
      }
    }
  }
};

describe('@thoughtindustries/redemption', () => {
  describe('Redemption Codes', () => {
    it('should render redemption component', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloResults]} addTypename={false}>
          <Redemption />
        </MockedProvider>
      );
      await waitFor(() => new Promise(res => setTimeout(res, 0)));
      expect(container).toMatchInlineSnapshot(`
        <div>
          <form
            class="mx-4 md:mx-40 text-center self-center"
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
          </form>
        </div>
      `);
    });
  });
});
