import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type UserFragmentFragment = { __typename?: 'User'; name?: string; asset?: string };

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    name
    asset
  }
`;
