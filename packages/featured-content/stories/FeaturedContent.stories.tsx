import React from 'react';
import {
    FeaturedContent,
    SidebarRss,
    SidebarPosition,
    ContentDefault,
    FeaturedContentContentItem
} from '../src';

export default {
  title: "Example/FeaturedContent"
}

const headerOptions = {
  title: 'Feature Content Header'
}

const mockItems = {
  manual: {
    title: 'Manual item',
    description: 'description',
    shortDescription: 'short description',
    linkUrl: '/',
    canAddToQueue: false,
  },
  dynamic: {
    title: 'Dynamic item',
    courseStartDate: new Date().toISOString(),
    contentTypeLabel: 'Course',
    source: 'Test source',
    authors: 'Test Author',
    description: 'description',
    shortDescription: 'short description',
    linkUrl: '/',
    isCompleted: true,
    asset: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
    canAddToQueue: true,
    isActive: true,
    callToAction: 'View Details',
    ribbon: {
      bgColor: "#39ad39",
      contrastColor: "#fff",
      darkerColor: "#2c872c",
      label: "Test ribbon"
    },
    rating: 36,
    hasAvailability: false,
    priceInCents: 6500,
    suggestedRetailPriceInCents: 8000
  }
};

const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> => {
  return Promise.resolve();
}

export const StandardLayout = () => (
  <FeaturedContent>
    <ContentDefault headerOptions={headerOptions} desktopColumnCount={3} onAddedToQueue={handleAddedToQueue}>
      <ContentDefault.Item item={mockItems.dynamic} />
      <ContentDefault.Item item={mockItems.manual} />
      <ContentDefault.Item item={mockItems.manual} />
      <ContentDefault.Item item={mockItems.manual} />
    </ContentDefault>
  </FeaturedContent>
)

export const withLeftSidebar = () => (
  <FeaturedContent sidebar={
      <SidebarRss title="RSS">
          <SidebarRss.Link href="/rss-link1">Link 1</SidebarRss.Link>
          <SidebarRss.Link href="/rss-link2">Link 2</SidebarRss.Link>
          <SidebarRss.Link href="/rss-link3">Link 3</SidebarRss.Link>
      </SidebarRss>
  } sidebarPosition={SidebarPosition.Left}>
    <ContentDefault headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
      <ContentDefault.Item item={mockItems.manual} />
      <ContentDefault.Item item={mockItems.manual} />
      <ContentDefault.Item item={mockItems.manual} />
    </ContentDefault>
  </FeaturedContent>
)

export const withRightSidebar = () => (
  <FeaturedContent sidebar={
      <SidebarRss title="RSS">
          <SidebarRss.Link href="/rss-link1">Link 1</SidebarRss.Link>
          <SidebarRss.Link href="/rss-link2">Link 2</SidebarRss.Link>
          <SidebarRss.Link href="/rss-link3">Link 3</SidebarRss.Link>
      </SidebarRss>
  } sidebarPosition={SidebarPosition.Right}>
    <ContentDefault headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
      <ContentDefault.Item item={mockItems.manual} />
      <ContentDefault.Item item={mockItems.manual} />
      <ContentDefault.Item item={mockItems.manual} />
    </ContentDefault>
  </FeaturedContent>
)