import { gql } from '@apollo/client';
import { CONTENT_FRAGMENT } from './ContentFragment';

export const USER_RECENT_CONTENT_QUERY = gql`
  ${CONTENT_FRAGMENT}
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
`;
