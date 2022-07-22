import { Story } from '@storybook/react';
import React from 'react';
import { ValidateRedemptionCodeDocument, Registration } from '../src';

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

const mockUser = {
  id: 'uuid',
  firstName: 'First',
  lastName: 'Last',
  email: 'first.last@example.com',
  roleKey: 'student'
};

const mockApolloResults = [
  mockApolloResultsFactory('validCode', true, false, false),
  mockApolloResultsFactory('invalidCode', false, false, false),
  mockApolloResultsFactory('', false, false, false),
  mockApolloResultsFactory('expiredCode', false, false, true),
  mockApolloResultsFactory('alreadyRedeemedCode', false, true, false)
];

const Template: Story = () => <Registration currentUser={mockUser} />;

export const Base: Story = Template.bind({});
Base.parameters = {
  apolloClient: {
    mocks: mockApolloResults
  }
};
