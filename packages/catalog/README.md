# `@thoughtindustries/catalog`

> The Catalog allows learners to search and browse for content. It is a central component to any online learning platform.

## Import component

```
import { Catalog, CatalogProvider } from '@thoughtindustries/catalog';
```

## Usage

```
# CatalogProvider takes some props to parse URL search params and/or handle custom catalog configurations
# Sample props
const props = {
  pathName: '/catalog',
  searchString: '?query=test'
}
# Sample props with custom catalog configurations
const props = {
  pathName: '/catalog',
  searchString: '?query=test'
  layoutId: 'layout-id',
  widgetId: 'widget-id'
}

<CatalogProvider {...props}>
  <Catalog onAddedToQueue={(item) => Promise.resolve()} />
</CatalogProvider>

# Or use custom pagination
<CatalogProvider {...props}>
  <Catalog
    onAddedToQueue={(item) => Promise.resolve()}
    pagination={({page, pageSize, total, getPageLink}) => <>...</>} />
</CatalogProvider>

# Or use custom price formatter
const priceFormat = (priceInCents) => {
  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  return formatter.format(priceInCents / 100);
}
<CatalogProvider {...props}>
  <Catalog
    onAddedToQueue={(item) => Promise.resolve()}
    priceFormat={priceFormat} />
</CatalogProvider>
```
