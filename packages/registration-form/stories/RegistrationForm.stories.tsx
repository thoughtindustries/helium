import { Story } from '@storybook/react';
import React from 'react';
import {
  ValidateRedemptionCodeDocument,
  RedeemRegistrationAndRedemptionCodesDocument,
  Registration
} from '../src';

export default {
  title: 'Example/Registration',
  component: Registration
};

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

const mockUser = {
  id: 'uuid',
  firstName: 'First',
  lastName: 'Last',
  email: 'first.last@example.com',
  roleKey: 'student'
};

const mockApolloResults = [
  mockApolloResultsFactory('validCode1', true, false, false),
  mockApolloResultsFactory('validCode2', true, false, false),
  mockApolloResultsFactory('validCode3', true, false, false),
  mockApolloResultsFactory('invalidCode', false, false, false),
  mockApolloResultsFactory('', false, false, false),
  mockApolloResultsFactory('expiredCode', false, false, true),
  mockApolloResultsFactory('alreadyRedeemedCode', false, true, false),
  mockRegistrationResults(['validCode1', 'validCode2', 'validCode3'], true)
];

const Template: Story = () => <Registration currentUser={mockUser} />;

export const Base: Story = Template.bind({});
Base.parameters = {
  apolloClient: {
    mocks: mockApolloResults
  }
};
