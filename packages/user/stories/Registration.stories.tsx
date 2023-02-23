import { StoryObj } from '@storybook/react';
import React from 'react';
import {
  ValidateRedemptionCodeDocument,
  RedeemRegistrationAndRedemptionCodesDocument,
  Registration,
  TermsAndConditionsDocument,
  ResponseProps
} from '../src';

export default { component: Registration, title: 'Packages/User/Registration' };

type Registration = StoryObj<ResponseProps | undefined>;

const mockApolloResultsFactory = (
  code: string,
  valid: boolean,
  alreadyRedeemed: boolean,
  codeExpired: boolean
) => ({
  request: {
    query: ValidateRedemptionCodeDocument,
    variables: {
      code
    }
  },
  result: {
    data: {
      ValidateRedemptionCode: {
        valid,
        alreadyRedeemed,
        codeExpired
      }
    }
  }
});

const mockRegistrationResults = (validatedRedemptionCodes: Array<string>, redeemed: boolean) => ({
  request: {
    query: RedeemRegistrationAndRedemptionCodesDocument,
    variables: {
      validatedRedemptionCodes
    }
  },
  result: {
    data: {
      RedeemRegistrationAndRedemptionCodes: {
        redeemed
      }
    }
  }
});

const mockTermsAndConditionsResults = (globalTerms: string) => ({
  request: {
    query: TermsAndConditionsDocument
  },
  result: {
    data: {
      TermsAndConditions: {
        globalTerms
      }
    }
  }
});

const mockApolloResults = [
  mockApolloResultsFactory('validCode1', true, false, false),
  mockApolloResultsFactory('validCode2', true, false, false),
  mockApolloResultsFactory('validCode3', true, false, false),
  mockApolloResultsFactory('invalidCode', false, false, false),
  mockApolloResultsFactory('', false, false, false),
  mockApolloResultsFactory('expiredCode', false, false, true),
  mockApolloResultsFactory('alreadyRedeemedCode', false, true, false),
  mockRegistrationResults(['validCode1', 'validCode2', 'validCode3'], true),
  mockTermsAndConditionsResults('<p>Test Global Terms </p>')
];

export const RegistrationForm: Registration = {
  render: (args: any) => <Registration {...args} />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
};
