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
    contentKind: ContentKind.Course,
    priceFormat: undefined,
    companyDefaultLocale: 'us-US',
    currencyCode: 'USD'
  },
  argTypes: {
    tabsView: {
      description: 'Determine whether to show or hide the tabs',
      control: { type: 'boolean' }
    },
    contentKind: {
      options: [ContentKind.Course, ContentKind.LearningPath],
      control: { type: 'select' },
      description:
        'Specifies the type of content to be displayed. It can be set to "course" or "learningPath"'
    },
    slug: {
      options: ['course-example', 'example-learning-path'],
      control: { type: 'select' },
      description: 'The slug for the Course Group or Learning Path'
    },
    priceFormat: {
      description: 'Optional function for prioritized price formatting',
      control: { type: 'function' }
    },
    companyDefaultLocale: {
      options: ['us-US', 'es-ES', 'es-UY'],
      control: { type: 'select' },
      description: 'Company property to format price'
    },
    currencyCode: {
      options: ['USD', 'EUR', 'UYU'],
      control: { type: 'select' },
      description: 'Currency code to format price'
    }
  },
  parameters: {
    controls: { expanded: true },
    apolloClient: {
      mocks: mockApolloResults
    }
  }
};
