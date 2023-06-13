# `@thoughtindustries/content`

> A collection of content specific resources for @thoughtindustries/helium UI components. It comes with typings and React Hooks for making graphql queries and mutations, as well as utilities for content hydration.

## Import

```
import {
  GlobalTypes,
  useCatalogContentQuery,
  LoadingDots,
  hydrateContent
} from '@thoughtindustries/content';
```

## Usage

```
// run hook to query catalog content
const { data, loading, error } = useCatalogContentQuery({
  variables: {
     sortColumn: GlobalTypes.SortColumn.PublishDate,
     sortDirection: GlobalTypes.SortDirection.Desc,
     resultsDisplayType: GlobalTypes.ContentItemDisplayType.Grid,
     page: 2
  },
});

// render loading dots before data is resolved
if (loading) {
  return <LoadingDots />
}

// hydrate content response when data is resolved
const { i18n } = useTranslation();
if (data) {
  const { contentItems = [] } = data.CatalogContent;
  return contentItems.map((item, index) => {
    const hydratedItem = hydrateContent(i18n, item);
    // render component for hydrated content item
    // return ...
  });
}
```

## Content Header

The `Content Header` component is used to add a title, description, rating and image to a course quickly. This is done by passing props to a component that is already created, rather than creating a new one from scratch.

### Example code

```tsx
import { ContentHeader } from '@thoughtindustries/content';

export function MyComponent() {
  // ...

  return (
    <ContentHeader contentKind={contentKind} slug={courseSlug} showStars={true} showImage={true} />
  );
}
```

## Props

| Name        | Required | Type                 | Description                                                    |
| ----------- | -------- | -------------------- | -------------------------------------------------------------- |
| contentKind | Yes      | <code>string</code>  | The contentKind of the Content, e.g., `learningPath`, `course`. |
| slug        | Yes      | <code>slug</code>    | Content Slug cart.                                             |
| showStars   | No       | <code>boolean</code> | If false, hide the stars. If true, show the stars              |
| showImage   | No       | <code>boolean</code> | If false, hide the image. If true, show the image              |
