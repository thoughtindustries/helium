# `@thoughtindustries/featured-content`

> Featured Content widgets add real power to your platform page creation. These widgets let you display courses, microlearning, and products in neat blocks. Configure them to show static content or set them up to dynamically exhibit content based on search queries or tags.

We offer the following Featured Content widgets:

- Tile (Standard Layout)
- Tile (Descriptive Layout)
- Carousel
- Overlay
- Catalog
- Recently viewed

## Import component

```
import {
    FeaturedContent,
    SidebarRss,
    SidebarPosition,
    ContentDefault,
} from '@thoughtindustries/featured-content';
```

## Usage

```
# Standard layout
<FeaturedContent>
    <ContentDefault headerOptions={...headerOptions} desktopColumnCount={3} onAddedToQueue={(item) => Promise.resolve()}>
        <ContentDefault.Item item={...itemOne} />
        <ContentDefault.Item item={...itemOne} />
        <ContentDefault.Item item={...itemOne} />
    </ContentDefault>
</FeaturedContent>

# With left sidebar
<FeaturedContent sidebar={
    <SidebarRss title="RSS" feedUrl="https://foo.com/rss" />
} sidebarPosition={SidebarPosition.Left}>
    <ContentDefault headerOptions={...headerOptions} desktopColumnCount={3} onAddedToQueue={(item) => Promise.resolve()}>
        <ContentDefault.Item item={...itemOne} />
        <ContentDefault.Item item={...itemOne} />
        <ContentDefault.Item item={...itemOne} />
    </ContentDefault>
</FeaturedContent>
```
