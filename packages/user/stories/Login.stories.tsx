import { StoryObj } from '@storybook/react';
import React from 'react';
import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';
import { TermsAndConditionsDocument, Login, LoginDocument, ValidationProps } from '../src';

export default { component: Login, title: 'Packages/User/Login' };

type Login = StoryObj<ValidationProps>;

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
  mockTermsAndConditionsResults('<p>Test Global Terms </p>'),
  mockLoginResults('', '', '401 Unauthorized'),
  mockLoginResults('locked@test.com', 'locked4ever', '423 Locked'),
  mockLoginResults('throttled@test.com', 'try2hard', 'User Throttled'),
  mockLoginResults('password@test.com', 'stalepassword', 'Password reset required'),
  mockLoginResults('email@test.com', 'verifyemail', 'Email verification required')
];

export const LoginForm: Login = {
  render: () => <Login />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
};
