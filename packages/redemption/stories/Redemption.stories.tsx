import { Story } from '@storybook/react';
import React from 'react';
import { Redemption, RedeemRedemptionCodeDocument } from '../src';

export default {
  title: 'Example/Redemption',
  component: Redemption
};

const mockApolloResultsFactory = (
  code: string,
  valid: boolean,
  alreadyRedeemed: boolean,
  codeExpired: boolean
) => ({
  request: {
    query: RedeemRedemptionCodeDocument,
    variables: {
      code
    }
  },
  result: {
    data: {
      RedeemRedemptionCode: {
        valid,
        alreadyRedeemed,
        codeExpired
      }
    }
  }
});
const mockApolloResults = [
  mockApolloResultsFactory('validCode', true, false, false),
  mockApolloResultsFactory('invalidCode', false, false, false),
  mockApolloResultsFactory('', false, false, false),
  mockApolloResultsFactory('expiredCode', false, false, true),
  mockApolloResultsFactory('alreadyRedeemedCode', false, true, false)
];

const Template: Story = () => <Redemption />;

export const Base: Story = Template.bind({});
Base.parameters = {
  apolloClient: {
    mocks: mockApolloResults
  }
};
