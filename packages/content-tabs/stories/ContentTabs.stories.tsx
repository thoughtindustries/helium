import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ContentTabs, ContentTabsProps } from '../src';
import { GetCourseDataDocument, GetLearningPathDataDocument } from '../src/graphql';
import { ContentKind } from '../src/graphql/global-types';
import { CourseGroupTestimonialsDocument } from '../src/graphql/queries/CourseGroupTestimonials.generated';
import {
  MockGetCourseContentFactory,
  MockGetLearningPathContentFactory,
  MockedGetTestimonialsContentFactory
} from '../src/factory';

const mockGetCourseResults = ({ slug }: { slug: string }) => ({
  request: {
    query: GetCourseDataDocument,
    variables: {
      slug
    }
  },
  result: {
    data: {
      CourseGroupBySlug: MockGetCourseContentFactory()
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
      LearningPathBySlug: MockGetLearningPathContentFactory()
    }
  }
});

const mockGetTestimonialsResults = ({ id }: { id: string }) => ({
  request: {
    query: CourseGroupTestimonialsDocument,
    variables: {
      id
    }
  },
  result: {
    data: {
      CourseGroupTestimonials: MockedGetTestimonialsContentFactory()
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
  mockGetLearningPathResults({ slug: 'example-learning-path' }),
  mockGetTestimonialsResults({ id: '6648119f-9628-4c73-a45a-873c8ae2cda9' })
];
export const Base: ContentTabs = {
  render: args => <ContentTabs {...args} />,
  args: {
    tabsView: true,
    slug: 'course-example',
    contentKind: ContentKind.Course
  },
  argTypes: {
    contentKind: {
      options: [ContentKind.Course, ContentKind.LearningPath],
      control: { type: 'select' }
    },
    slug: {
      options: ['course-example', 'example-learning-path'],
      control: { type: 'select' }
    }
  },
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
};
