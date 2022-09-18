import { Story } from '@storybook/react';
import React from 'react';
import {
  ValidateRedemptionCodeDocument,
  RedeemRegistrationAndRedemptionCodesDocument,
  Registration,
  TermsAndConditionsDocument,
  Login,
  LoginDocument
} from '../src';

const mockUser = {
  id: 'uuid',
  firstName: 'First',
  lastName: 'Last',
  email: 'first.last@example.com',
  roleKey: 'student'
};

export default {
  title: 'Example/User',
  component: Login,
  argTypes: {
    currentUser: {
      name: 'currentUser',
      options: ['loggedIn', 'loggedOut'],
      mapping: {
        loggedIn: mockUser,
        loggedOut: null
      },
      control: { type: 'radio' },
      description: 'Logged in user',
      defaultValue: 'loggedIn'
    }
  }
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

const mockLoginResults = () => ({
  request: {
    query: LoginDocument
  },
  result: {
    data: {
      Login
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
  mockTermsAndConditionsResults('<p>Test Global Terms </p>'),
  mockLoginResults()
];

const RegistrationTemplate: Story = args => <Registration {...args} />;
const LoginTemplate: Story = () => <Login />;

export const RegistrationForm: Story = RegistrationTemplate.bind({});
RegistrationForm.parameters = {
  apolloClient: {
    mocks: mockApolloResults
  }
};

export const LoginForm: Story = LoginTemplate.bind({});
LoginForm.parameters = {
  apolloClient: {
    mocks: mockApolloResults
  }
};
