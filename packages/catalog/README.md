# `@thoughtindustries/catalog`

> The Catalog allows learners to search and browse for content. It is a central component to any online learning platform.

**Table of contents:**

- [`Catalog`](#catalog)
- [Core catalog components](#core-catalog-components)
  - [`CatalogLinkButton`](#cataloglinkbutton)
  - [`CatalogProvider`](#catalogprovider)
  - [`HeightEqualizer`](#heightequalizer)
- [Core catalog hooks](#core-catalog-hooks)
  - [`useCatalog`](#usecatalog)

## Catalog

The `Catalog` component takes a callback function to handle catalog item's add-to-queue event, and optional properties to customize the catalog like price formatting, currency formating, etc. It must be a descendent of the `CatalogProvider` component.

### Example code

```tsx
import { CatalogProvider, Catalog } from '@thoughtindustries/catalog';

export function MyComponent() {
  // ...
  const addToQueueHandler = (item) => Promise.resolve();

  return (
    <CatalogProvider ssr pathName="/catalog">
      <Catalog onAddedToQueue={addToQueueHandler} />
    </CatalogProvider>
  );
}
```

## Props

| Name     | Required | Type                          | Description               |
| -------- | -------- | ----------------------------- | ------------------------- |
| title | No | <code>string</code>        | The title that appears on top of the catalog. |
| alternateTitleDisplay | No | <code>boolean</code>        | Option to display the alternative title. |
| pagination     | No | <code>(args: PaginationFnArgs) => ReactElement</code> | An alternative view for the pagination display. |
| companyHasSessionLevelCustomFieldsFeature | No | <code>boolean</code>        | Company feature flag for content hydration. |
| companyTimeZone | No | <code>string</code>        | Company property to override item's timezone. |
| onAddedToQueue     | Yes | <code>(item: CatalogResultItem) => Promise<boolean \| void></code> | Event handler for add to queue button for each item. |
| onClick     | No | <code>(evt: SyntheticEvent, item: CatalogResultItem) => void</code> | Optional click event handler for each item. |
| priceFormat     | No | <code>(priceInCents: number) => string</code> | A callback that is invoked to format monetary value with currency. It takes a number value for the price in cent unit and return the formatted value. Default value uses `Intl.NumberFormat` with props `companyDefaultLocale` and/or `currencyCode` to enable locale-specific currency formatting. |
| companyDefaultLocale     | No | <code>string</code> | A locale value to format price when prop `priceFormat` is not specified. Used to speficy the locale in `Intl.NumberFormat`. Default to `en-US`.  |
| currencyCode     | No | <code>string</code> | A currency code value to format price when prop `priceFormat` is not specified. Used to speficy the currency code in `Intl.NumberFormat`. Default to `USD`. |
| numberOfContentItems     | No | <code>number</code> | Specify the number of items to display in the `grid` view. |

## Core catalog components

Core catalog components are objects that contain all of business logic for the catalog concept that they represent. They're used to parse and process data.

### CatalogLinkButton

The `CatalogLinkButton` component renders a link button that conditionally overrides the link behavior to handle client side navigation. It must be a descendent of a `CatalogProvider` component. This is used internally by `Catalog` component to handle both server and client side rendering. If you are composing own version of `Catalog` component for different layout and styles, this component can be useful.

#### Example code

```tsx
import { CatalogProvider, CatalogLinkButton } from '@thoughtindustries/catalog';

function CustomCatalog() {
  // ...

  return (
    <>
      {/* // ... */}
      <CatalogLinkButton href="/catalog?page=2" />
    </>
  );
}

export function MyComponent() {
  // ...

  return (
    <CatalogProvider ssr={false} pathName="/catalog">
      <CustomCatalog />
    </CatalogProvider>
  );
}
```

#### Props

This component is inherently an `HTMLAnchorElement` element with only the `onClick` prop omitted. The component will use own `onClick` handler.

#### Related components

- [`CatalogProvider`](#catalogprovider)

#### Related hooks

- [`useCatalog`](#usecatalog)

### CatalogProvider

The `CatalogProvider` component creates a context for using a catalog. It requires an url path name and a `ssr` flag to handle the data fetching as well as user interactions with catalog filters. It creates relevant context values that can be accessed by any descendent component using the `useCatalog` hook.

You must use this component if you want to use the `useCatalog` hook, or if you would like to use the `CatalogLinkButton` component.

#### Example code

```tsx
import { CatalogProvider } from '@thoughtindustries/catalog';

export function App() {
  return <CatalogProvider ssr pathName="/catalog">{/* Your JSX */}</CatalogProvider>;
}
```

#### Props

| Name                   | Required | Type                         | Description                                                                                                                                                                                                              |
| ---------------------- | -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children               | Yes      | <code>React.ReactNode</code> | Any `ReactNode` elements. |
| pathName            | Yes      | <code>string</code> | The URL path for the catalog. |
| searchString            | No      | <code>string</code> | The URL search string used to initialize the catalog. |
| layoutId            | No      | <code>string</code> | The id of the custom catalog widget layout. Use this along with `widgetId` to specify the custom catalog widget created in the core platform. |
| widgetId            | No      | <code>string</code> | The id of the custom catalog widget. Use this along with `layoutId` to specify the custom catalog widget created in the core platform. |
| ssr | Yes | <code>boolean</code>        | Option to render the catalog on the server side or client side. When set to `true`, catalog will be rendered on the server side and user interactions with the filters will cause a full page load. When set to `false`, catalog will be rendered on the client side and user interactions with the filters will only affect the catalog portion of the page. |

#### Related hooks

- [`useCatalog`](#usecatalog)

### HeightEqualizer

The `HeightEqualizer` component is a wrapper component that calculate the maximum height from its children `HeightEqualizerElement` components. With the max height value, it updates all children `HeightEqualizerElement` components to the same value. This is used internally by `Catalog` component to handle catalog item height in `grid` view. If you are composing own version of `Catalog` component for different layout and styles, this component can be useful.

#### Example code

```tsx
import { HeightEqualizer, HeightEqualizerElement } from '@thoughtindustries/catalog';

export function MyComponent() {
  // ...

  return (
    <HeightEqualizer>
      <>
        <HeightEqualizerElement key="item-1">{/* Your JSX */}</HeightEqualizerElement>
        <HeightEqualizerElement key="item-2">{/* Your JSX */}</HeightEqualizerElement>
      </>
    </HeightEqualizer>
  );
}
```

#### Props

##### Props for HeightEqualizer

| Name        | Required | Type                   | Description            |
| ----------- | -------- | ---------------------- | ---------------------- |
| children    | Yes      | <code>ReactNode</code> | A `ReactNode` element. |
| timeout   | No       | <code>number</code>                | Time to recalculate heights. |
| animationSpeed   | No       | <code>number</code>                | Time of animation for height change (in milliseconds). |

##### Props for HeightEqualizerElement

| Name        | Required | Type                   | Description            |
| ----------- | -------- | ---------------------- | ---------------------- |
| children    | No      | <code>ReactNode</code> | A `ReactNode` element. |
| name   | Yes       | <code>string</code>                | All heights of elements with the same name will be compared. |
| as   | No       | <code>string</code>                | An HTML tag to be rendered as the base element wrapper. The default is `div`. |
| className   | No       | <code>string</code>                | A string of styling class names to apply to the underlying element. |

## Core catalog hooks

Core catalog hooks are functions that allow you to use state and other methods inside catalog components.

### useCatalog

The `useCatalog` hook provides access to the catalog context. It must be a descendent of a `CatalogProvider` component.

#### Example code

```tsx
import { CatalogProvider, useCatalog } from '@thoughtindustries/catalog';

export function MyComponent() {
  return (
    <CatalogProvider ssr={false} pathName="/catalog">
      <CatalogLoader />
    </CatalogProvider>
  );
}

export function CatalogLoader() {
  const { isLoading } = useCatalog();

  if (isLoading) {
    return <>Loading data</>;
  }

  return ({/* Your JSX */});
}
```

#### Return value

The `useCatalog` hook returns an object with the following keys:

| Name                            | Required | Description |
| ------------------------------- | -------- | ----------- |
| `params`                         | Yes      | The catalog content and metadata. |
| `urlManager`                   | Yes      | The URL manager instance to manage URL state. |
| `ssr`                 | Yes      | This is pass-through value for the prop `ssr` of `CatalogProvider` component. |
| `navigateClientSideAsync`           | No      | An async function for user interaction with the catalog filters. This value is provided for client side render. |
| `isLoading`                    | Yes      | The loading state of data fetching. During server side render, this value is always `false`. During client side render, this value will reflect the data fetching loading state. |
| `scrollToRef`    | No      | A reference to `HTMLDivElement`. During client side render, browser will scroll to the top of the assigned element when fetching data. |
| `contentWrapperRef`    | No      | A reference to `HTMLDivElement`. During client side render, browser will mutate the height of the assigned element when fetching data. This will prevent flashing effect when user interface switches between catalog content and a loading indicator. |

#### Related components

- [`CatalogProvider`](#catalogprovider)