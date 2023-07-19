import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ContentHeader } from '../src/components/content-header';
import { ContentHeaderProps } from '../src/components/content-header/types';
import {
  CourseGroupBySlugDocument,
  CourseGroupBySlugQuery
} from '../src/graphql/queries/CourseGroupBySlug.generated';
import {
  LearningPathBySlugDocument,
  LearningPathBySlugQuery
} from '../src/graphql/queries/LearningPathBySlug.generated';

const meta: Meta<ContentHeaderProps> = {
  component: ContentHeader,
  title: 'Packages/Content Header'
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

const mockLearningPathFactory = (): LearningPathBySlugQuery['LearningPathBySlug'] => ({
  asset:
    'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
  shortDescription: 'Content description',
  name: 'Content'
});

const mockApolloResultsFactory = () => [
  {
    request: {
      query: CourseGroupBySlugDocument,
      variables: {
        slug: 'test-course'
      }
    },
    result: {
      data: {
        CourseGroupBySlug: mockCatalogContentFactory()
      }
    }
  },
  {
    request: {
      query: LearningPathBySlugDocument,
      variables: {
        slug: 'test-learning-path'
      }
    },
    result: {
      data: {
        LearningPathBySlug: mockLearningPathFactory()
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
  argTypes: {
    contentKind: 'course',
    slug: {
      options: ['test-course', 'test-learning-path'],
      control: { type: 'select' },
      //use table to set default value for select
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'test-course' }
      }
    },
    showStars: true,
    showImage: true
  }
};
