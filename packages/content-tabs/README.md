# `@thoughtindustries/content-tabs`

> ContentTabs component displays a set of tabs and their corresponding content. The component allows users to navigate between different sections of content using the provided tabs.

## Import component

```
import { ContentTabs } from '@thoughtindustries/content-tabs';
```

## Usage

```tsx
import { ContentTabs } from '@thoughtindustries/content-tabs';

export function MyComponent() {
  // ...

  return (
    <ContentTabs tabsView={true} slug="course-example" contentKind="course" />
  );
}
```

## Props

| Name                   | Required | Type                     | Description                                                     |
|------------------------|----------|--------------------------|-----------------------------------------------------------------|
| tabsView               | Yes      | <code>boolean</code>     | Determine whether to show or hide the tabs.                     |
| slug                   | Yes      | <code>slug</code>        | The slug of the content that should be displayed.               |
| contentKind            | Yes      | <code>ContentKind</code> | The contentKind of the Content, e.g., `learningPath`, `course`. |
| priceFormat            | No       | <code>function</code>    | Function for prioritized price formatting.                      |
| companyDefaultLocale   | No       | <code>string</code>      | Company property to format price.                               |
| currencyCode           | No       | <code>string</code>      | Currency code to format price                                   |