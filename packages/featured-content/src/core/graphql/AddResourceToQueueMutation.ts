import { gql } from '@apollo/client';

export const ADD_RESOURCE_TO_QUEUE_MUTATION = gql`
  mutation AddResourceToQueue($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;
