import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ContentHeader } from '../src/components/content-header';
import { ContentHeaderProps } from '../src/components/content-header/types';
import {
  CourseGroupBySlugDocument,
  CourseGroupBySlugQuery
} from '../src/graphql/queries/CourseGroupBySlug.generated';

const meta: Meta<ContentHeaderProps> = {
  component: ContentHeader,
  title: 'Packages/ContentHeader'
};

export default meta;
type ContentHeader = StoryObj<ContentHeaderProps>;

const mockCatalogContentFactory = (): CourseGroupBySlugQuery['CourseGroupBySlug'] => ({
  asset:
    'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
  description: 'Content description',
  title: 'Content title',
  rating: 36,
  ratingsCount: 4
});

const mockApolloResultsFactory = () => [
  {
    request: {
      query: CourseGroupBySlugDocument,
      variables: {
        slug: 'test-ribbon'
      }
    },
    result: {
      data: {
        CourseGroupBySlug: mockCatalogContentFactory()
      }
    }
  }
];

// use the options to bypass mocking full payload of responses
const mockedApolloProviderOptions = {
  watchQuery: { fetchPolicy: 'no-cache' as const },
  query: { fetchPolicy: 'no-cache' as const }
};
const apolloBaseParams = {
  addTypename: false,
  defaultOptions: mockedApolloProviderOptions
};

export const Base: ContentHeader = {
  render: args => <ContentHeader {...args} />,
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [...mockApolloResultsFactory()]
    }
  },
  args: {
    contentKind: 'course',
    slug: 'test-ribbon',
    showStars: true,
    showImage: true
  }
};
