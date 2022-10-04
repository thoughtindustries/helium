import { Story } from '@storybook/react';
import React from 'react';
import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';
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

const mockLoginResults = (email: string, password: string, message: string) => ({
  request: {
    query: LoginDocument,
    variables: {
      email,
      password
    }
  },
  error: new ApolloError({ graphQLErrors: [new GraphQLError(message)] })
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
  mockLoginResults('', '', '401 Unauthorized'),
  mockLoginResults('locked@test.com', 'locked4ever', '423 Locked'),
  mockLoginResults('throttled@test.com', 'try2hard', 'User Throttled'),
  mockLoginResults('password@test.com', 'stalepassword', 'Password reset required'),
  mockLoginResults('email@test.com', 'verifyemail', 'Email verification required')
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
