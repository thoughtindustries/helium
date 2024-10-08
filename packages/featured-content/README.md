# `@thoughtindustries/featured-content`

> Featured Content widgets add real power to your platform page creation. These widgets let you display courses, microlearning, and products in neat blocks. Configure them to show static content or set them up to dynamically exhibit content based on search queries or tags.

We offer the following Featured Content widgets:

- Tile (Standard Layout)
- Tile (Descriptive Layout)
- Multi Carousel
- Carousel
- Tile (Image Overlay)

## Import component

```
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
} from '@thoughtindustries/featured-content';
```

## Usage

```
# Tile standard layout
<FeaturedContent>
  <ContentTileStandardLayout headerOptions={...headerOptions} desktopColumnCount={3} onAddedToQueue={(item) => Promise.resolve()}>
    <ContentTileStandardLayout.Item {...itemOne} />
    <ContentTileStandardLayout.Item {...itemTwo} />
    <ContentTileStandardLayout.Item {...itemThree} />
  </ContentTileStandardLayout>
</FeaturedContent>

# Tile descriptive layout
<FeaturedContent>
  <ContentTileDescriptiveLayout headerOptions={...headerOptions} desktopColumnCount={3} onAddedToQueue={(item) => Promise.resolve()}>
    <ContentTileDescriptiveLayout.Item {...itemOne} />
    <ContentTileDescriptiveLayout.Item {...itemTwo} />
    <ContentTileDescriptiveLayout.Item {...itemThree} />
  </ContentTileDescriptiveLayout>
</FeaturedContent>

# Multi carousel
<FeaturedContent>
  <ContentMultiCarousel headerOptions={...headerOptions} desktopColumnCount={3} onAddedToQueue={(item) => Promise.resolve()}>
    <ContentMultiCarousel.Item {...itemOne} />
    <ContentMultiCarousel.Item {...itemTwo} />
    <ContentMultiCarousel.Item {...itemThree} />
  </ContentMultiCarousel>
</FeaturedContent>

# Carousel
<FeaturedContent>
  <ContentCarousel headerOptions={...headerOptions}>
    <ContentCarousel.Item {...itemOne} />
    <ContentCarousel.Item {...itemTwo} />
    <ContentCarousel.Item {...itemThree} />
  </ContentCarousel>
</FeaturedContent>

# Tile image overlay
<FeaturedContent>
  <ContentTileImageOverlay headerOptions={...headerOptions} desktopColumnCount={3} onAddedToQueue={(item) => Promise.resolve()}>
    <ContentTileImageOverlay.Item {...itemOne} />
    <ContentTileImageOverlay.Item {...itemTwo} />
    <ContentTileImageOverlay.Item {...itemThree} />
  </ContentTileImageOverlay>
</FeaturedContent>

# With left sidebar (RSS)
<FeaturedContent sidebar={
  <SidebarRss title="RSS" feedUrl="https://foo.com/rss" />
} sidebarPosition={SidebarPosition.Left}>
  <ContentTileStandardLayout headerOptions={...headerOptions} desktopColumnCount={3} onAddedToQueue={(item) => Promise.resolve()}>
    <ContentTileStandardLayout.Item {...itemOne} />
    <ContentTileStandardLayout.Item {...itemTwo} />
    <ContentTileStandardLayout.Item {...itemThree} />
  </ContentTileStandardLayout>
</FeaturedContent>

# With right sidebar (default)
<FeaturedContent sidebar={
  <SidebarDefault title="Default">Static sidebar content</SidebarDefault>
} sidebarPosition={SidebarPosition.Left}>
  <ContentTileStandardLayout headerOptions={...headerOptions} desktopColumnCount={3} onAddedToQueue={(item) => Promise.resolve()}>
    <ContentTileStandardLayout.Item {...itemOne} />
    <ContentTileStandardLayout.Item {...itemTwo} />
    <ContentTileStandardLayout.Item {...itemThree} />
  </ContentTileStandardLayout>
</FeaturedContent>
```
