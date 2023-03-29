import React from 'react';
import { PARAM_KEY } from './constants';
import { makeDecorator } from '@storybook/preview-api';

export const withApolloClient = makeDecorator({
  name: 'withApolloClient',
  parameterName: PARAM_KEY,
  wrapper: (storyFn, context, { parameters }) => {
    const { MockedProvider, ...providerProps } = parameters;

    if (!MockedProvider) {
      console.warn(
        'storybook-addon-apollo-client: MockedProvider is missing from parameters in preview.js'
      );

      return storyFn(context);
    }

    return <MockedProvider {...providerProps}>{storyFn(context)}</MockedProvider>;
  }
});
