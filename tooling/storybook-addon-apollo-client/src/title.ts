import { useParameter } from '@storybook/api';
import type { Parameters } from './types';
import { PARAM_KEY } from './constants';

export function useTitle(): string {
  const params = useParameter<Parameters>(PARAM_KEY);

  return params?.mocks?.length ? `Apollo Client (${params.mocks.length})` : 'Apollo Client (0)';
}
