import React from 'react';
import { PARAM_KEY } from './constants';

export const withApolloClient = (Story: any, context: any) => {
  const parameters = context.parameters[PARAM_KEY];

  if (!parameters) {
    return <Story />;
  }

  const { MockedProvider, ...providerProps } = parameters;

  if (!MockedProvider) {
    console.warn(
      'storybook-addon-apollo-client: MockedProvider is missing from parameters in preview.js'
    );
    return <Story />;
  }

  return (
    <MockedProvider {...providerProps}>
      <Story />
    </MockedProvider>
  );
};
