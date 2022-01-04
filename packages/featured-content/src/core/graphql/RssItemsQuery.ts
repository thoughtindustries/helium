import { gql } from '@apollo/client';

export const RSS_ITEMS_QUERY = gql`
  query RssItemsQuery($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;
