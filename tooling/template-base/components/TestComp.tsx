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
  ContentTileImageOverlay
  } from '../src';


export const TileStandardLayout = () => (
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
  return 
);