import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ContentTabs } from '../src';
import { GetCourseDataDocument, GetLearningPathDataDocument } from '../src/graphql';
import { ContentKind } from '../src/graphql/global-types';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

const mockApolloCourseResults = {
  request: {
    query: GetCourseDataDocument
  },
  result: {
    data: {}
  }
};

const mockApolloLearningPathResults = {
  request: {
    query: GetLearningPathDataDocument
  },
  result: {
    data: {}
  }
};

describe('@thoughtindustries/content-tabs', () => {
  describe('Content Tabs', () => {
    it('should render content-tabs component with Course content', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloCourseResults]} addTypename={false}>
          <ContentTabs tabsView={true} contentKind={ContentKind.Course} slug="" />
        </MockedProvider>
      );
      expect(container).toBeInTheDocument();
    });

    it('should render content-tabs component with Course content without Tabs', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloCourseResults]} addTypename={false}>
          <ContentTabs tabsView={false} contentKind={ContentKind.Course} slug="" />
        </MockedProvider>
      );
      expect(container).toBeInTheDocument();
    });

    it('should render content-tabs component with Learning Path content', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloLearningPathResults]} addTypename={false}>
          <ContentTabs tabsView={true} contentKind={ContentKind.LearningPath} slug="" />
        </MockedProvider>
      );
      expect(container).toBeInTheDocument();
    });

    it('should render content-tabs component with Learning Path content without Tabs', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloLearningPathResults]} addTypename={false}>
          <ContentTabs tabsView={false} contentKind={ContentKind.LearningPath} slug="" />
        </MockedProvider>
      );
      expect(container).toBeInTheDocument();
    });
  });
});
