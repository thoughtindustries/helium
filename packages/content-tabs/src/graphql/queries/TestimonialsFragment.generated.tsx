import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type TestimonialsFragmentFragment = {
  __typename?: 'Testimonial';
  createdAt?: string;
  body?: string;
  rating?: number;
  user?: { __typename?: 'User'; name?: string };
};

export const TestimonialsFragmentFragmentDoc = gql`
  fragment TestimonialsFragment on Testimonial {
    createdAt
    user {
      name
    }
    body
    rating
  }
`;
