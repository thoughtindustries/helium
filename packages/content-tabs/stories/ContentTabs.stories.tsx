import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ContentTabs, ContentTabsProps } from '../src';
import { GetCourseDataDocument, GetLearningPathDataDocument } from '../src/graphql';
import { ContentKind } from '../src/graphql/global-types';

const mockGetCourseResults = ({ slug }: { slug: string }) => ({
  request: {
    query: GetCourseDataDocument,
    variables: {
      slug
    }
  },
  result: {
    data: {
      CourseGroupBySlug: {}
    }
  }
});

const mockGetLearningPathResults = ({ slug }: { slug: string }) => ({
  request: {
    query: GetLearningPathDataDocument,
    variables: {
      slug
    }
  },
  result: {
    data: {
      LearningPathBySlug: {}
    }
  }
});

const meta: Meta<ContentTabsProps> = {
  component: ContentTabs,
  title: 'Packages/Content Tabs'
};

export default meta;
type ContentTabs = StoryObj<ContentTabsProps>;

const mockApolloResults = [
  mockGetCourseResults({ slug: 'course-example' }),
  mockGetLearningPathResults({ slug: 'course-example' })
];
export const Base: ContentTabs = {
  render: args => <ContentTabs {...args} />,
  args: {
    tabsView: true,
    slug: 'course-example',
    contentKind: ContentKind.Course
  },
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
};
