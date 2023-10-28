import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type InstructorsFragmentFragment = {
  __typename?: 'Instructor';
  asset?: string;
  bio?: string;
  fullName?: string;
};

export const InstructorsFragmentFragmentDoc = gql`
  fragment InstructorsFragment on Instructor {
    asset
    bio
    fullName
  }
`;
