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
     sort: 'publishDate:desc',
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