import * as Types from '@thoughtindustries/data';

export type RssItemsQueryQueryVariables = Types.Exact<{
  feedUrl: Types.Scalars['String'];
}>;

export type RssItemsQueryQuery = {
  __typename?: 'Query';
  RssItems: Array<{ __typename?: 'RssItem'; title?: string; link?: string }>;
};
