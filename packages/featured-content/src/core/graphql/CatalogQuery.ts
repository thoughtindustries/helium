import { gql } from '@apollo/client';
import { CONTENT_FRAGMENT } from './ContentFragment';

export const CATALOG_QUERY = gql`
  ${CONTENT_FRAGMENT}
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
`;
