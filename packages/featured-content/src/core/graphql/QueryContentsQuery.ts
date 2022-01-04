import { gql } from '@apollo/client';
import { CONTENT_FRAGMENT } from './ContentFragment';

export const QUERY_CONTENTS_QUERY = gql`
  ${CONTENT_FRAGMENT}
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
`;
