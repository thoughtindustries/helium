import React from 'react';
import {
  FeaturedContent,
  SidebarRss,
  SidebarDefault,
  SidebarPosition,
  ContentTileStandardLayout,
  ContentTileDescriptiveLayout,
  ContentMultiCarousel,
  ContentCarousel,
  ContentTileImageOverlay,
  FeaturedContentProps
} from '../src';
import { RssItemsDocument } from '@thoughtindustries/content';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<FeaturedContentProps> = {
  component: FeaturedContent,
  title: 'Packages/Featured Content'
};

export default meta;
type FeaturedContent = StoryObj<FeaturedContentProps>;

const headerOptions = {
  title: 'Feature Content Header'
};

const mockItems = {
  manual: {
    title: 'Manual item',
    description: 'description',
    href: '/manual-item',
    isActive: true
  },
  dynamic: {
    title: 'Dynamic item',
    courseStartDate: new Date(2020, 0, 1),
    contentTypeLabel: 'Course',
    source: 'Test source',
    authors: ['Test Author'],
    description: 'description',
    href: '/',
    isCompleted: true,
    asset:
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
    canAddToQueue: true,
    isActive: true,
    callToAction: 'View Details',
    ribbon: {
      color: '#39ad39',
      contrastColor: '#fff',
      darkerColor: '#2c872c',
      label: 'Test ribbon',
      slug: 'test-ribbon'
    },
    rating: 36,
    hasAvailability: false,
    priceInCents: 6500,
    suggestedRetailPriceInCents: 8000
  },
  dynamicTwo: {
    title: 'Dynamic item 2',
    courseStartDate: new Date(2020, 0, 1),
    contentTypeLabel: 'Course',
    source: 'Test source',
    authors: ['Test Author'],
    description: 'description',
    href: '/',
    isCompleted: true,
    asset:
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fit,w_800/v1/course-uploads/5fea45fb-d8cb-4f0a-b048-932cc361b20a/pfg9202pfzkd-test-image-5_800x600.jpg',
    canAddToQueue: true,
    isActive: true,
    callToAction: 'View Details',
    rating: 87,
    hasAvailability: false,
    priceInCents: 6500,
    suggestedRetailPriceInCents: 8000
  }
};

const mockFeedUrl = 'https://foo/bar';
const mockApolloResults = {
  sidebarRss: {
    request: {
      query: RssItemsDocument,
      variables: {
        feedUrl: mockFeedUrl
      }
    },
    result: {
      data: {
        RssItems: [
          { title: 'Link 1', link: '/rss-link1' },
          { title: 'Link 2', link: '/rss-link2' },
          { title: 'Link 3', link: '/rss-link3' }
        ]
      }
    }
  }
};

const handleAddedToQueue = (): Promise<void> => {
  return Promise.resolve();
};

export const TileStandardLayout: FeaturedContent = {
  render: () => (
    <FeaturedContent>
      <ContentTileStandardLayout
        headerOptions={headerOptions}
        desktopColumnCount={2}
        onAddedToQueue={handleAddedToQueue}
      >
        <ContentTileStandardLayout.Item {...mockItems.dynamic} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
      </ContentTileStandardLayout>
    </FeaturedContent>
  )
};

export const TileDescriptiveLayout: FeaturedContent = {
  render: () => (
    <FeaturedContent>
      <ContentTileDescriptiveLayout
        headerOptions={headerOptions}
        desktopColumnCount={2}
        onAddedToQueue={handleAddedToQueue}
      >
        <ContentTileDescriptiveLayout.Item {...mockItems.dynamic} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
      </ContentTileDescriptiveLayout>
    </FeaturedContent>
  )
};

export const MultiCarousel: FeaturedContent = {
  render: () => (
    <FeaturedContent>
      <ContentMultiCarousel
        headerOptions={headerOptions}
        desktopColumnCount={2}
        onAddedToQueue={handleAddedToQueue}
      >
        <ContentMultiCarousel.Item {...mockItems.dynamic} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
      </ContentMultiCarousel>
    </FeaturedContent>
  )
};

export const Carousel: FeaturedContent = {
  render: () => (
    <FeaturedContent>
      <ContentCarousel headerOptions={headerOptions}>
        <ContentCarousel.Item {...mockItems.dynamic} />
        <ContentCarousel.Item {...mockItems.dynamicTwo} />
      </ContentCarousel>
    </FeaturedContent>
  )
};

export const TileImageOverlay: FeaturedContent = {
  render: () => (
    <FeaturedContent>
      <ContentTileImageOverlay
        headerOptions={headerOptions}
        desktopColumnCount={2}
        onAddedToQueue={handleAddedToQueue}
      >
        <ContentTileImageOverlay.Item {...mockItems.dynamic} />
        <ContentTileImageOverlay.Item {...mockItems.dynamicTwo} />
      </ContentTileImageOverlay>
    </FeaturedContent>
  )
};

export const WithLeftSidebar: FeaturedContent = {
  render: () => (
    <FeaturedContent
      sidebar={<SidebarRss title="RSS" feedUrl={mockFeedUrl} />}
      sidebarPosition={SidebarPosition.Left}
    >
      <ContentTileStandardLayout
        headerOptions={headerOptions}
        desktopColumnCount={2}
        onAddedToQueue={handleAddedToQueue}
      >
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
      </ContentTileStandardLayout>
    </FeaturedContent>
  ),
  parameters: {
    apolloClient: {
      mocks: [mockApolloResults.sidebarRss]
    }
  }
};

export const WithRightSidebar: FeaturedContent = {
  render: () => (
    <FeaturedContent
      sidebar={<SidebarDefault title="Default">Static sidebar content</SidebarDefault>}
      sidebarPosition={SidebarPosition.Right}
    >
      <ContentTileStandardLayout
        headerOptions={headerOptions}
        desktopColumnCount={2}
        onAddedToQueue={handleAddedToQueue}
      >
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
      </ContentTileStandardLayout>
    </FeaturedContent>
  )
};
