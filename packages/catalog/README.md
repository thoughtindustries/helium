# `@thoughtindustries/catalog`

> The Catalog allows learners to search and browse for content. It is a central component to any online learning platform.

## Import component

```
import { Catalog, CatalogProvider } from '@thoughtindustries/catalog';
```

## Usage

```
# CatalogProvider takes a config object to parse URL search params and/or handle custom catalog configurations
# Sample config object
const config = {
  parsedUrl: {
    pathname: '/catalog',
    searchString: '?query=test'
  }
}
# Sample config object with custom catalog configurations
const config = {
  parsedUrl: {
    pathname: '/catalog',
    searchString: '?query=test'
  },
  layoutId: 'layout-id',
  widgetId: 'widget-id'
}

<CatalogProvider config={config}>
  <Catalog onAddedToQueue={(item) => Promise.resolve()} />
</CatalogProvider>

# Or use custom pagination
<CatalogProvider config={config}>
  <Catalog 
    onAddedToQueue={(item) => Promise.resolve()}
    pagination={({page, pageSize, total, getPageLink}) => <>...</>} />
</CatalogProvider>
```
