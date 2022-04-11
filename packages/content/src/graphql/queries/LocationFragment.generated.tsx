import * as Types from '../global-types';

import { gql } from '@apollo/client';
export type LocationFragmentFragment = {
  __typename?: 'Location';
  id: string;
  name: string;
  room?: string;
  address1: string;
  address2?: string;
  city: string;
  state?: string;
  zipCode?: string;
  country?: string;
  timeZone?: string;
};

export const LocationFragmentFragmentDoc = gql`
  fragment LocationFragment on Location {
    id
    name
    room
    address1
    address2
    city
    state
    zipCode
    country
    timeZone
  }
`;
