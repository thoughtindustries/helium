import * as Types from '@thoughtindustries/data';

export type AddResourceToQueueMutationVariables = Types.Exact<{
  resourceType?: Types.InputMaybe<Types.ContentKind>;
  resourceId: Types.Scalars['ID'];
}>;

export type AddResourceToQueueMutation = { __typename?: 'Mutation'; AddResourceToQueue: boolean };
