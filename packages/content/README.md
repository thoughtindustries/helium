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

The `Content Header` component is used to display the `title`, `description`, `rating`, `ratingsCount` and image of a Course or Learning Path.

## Example code

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
| slug        | Yes      | <code>slug</code>    | The slug of the content that should be displayed.                                             |
| showStars   | No       | <code>boolean</code> | Controls whether a course's rating is displayed, shown in stars.              |
| showImage   | No       | <code>boolean</code> | Controls whether a piece of content's Detail Image is displayed.              |
